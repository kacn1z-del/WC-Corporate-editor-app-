import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  StatusBar,
  BackHandler,
  Platform,
  SafeAreaView,
  Alert,
  AppState,
  AppStateStatus,
} from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import * as Notifications from 'expo-notifications';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as Device from 'expo-device';
import * as Network from 'expo-network';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WC_EDITOR_HTML } from './editorHtml';

// ─── Configuración global de notificaciones ───────────────────────────────
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

SplashScreen.preventAutoHideAsync();

// ─── Constantes ───────────────────────────────────────────────────────────
const WC_URL = 'https://kacn1z-del.github.io/wc-editorpro/';
const CACHE_DIR = FileSystem.cacheDirectory + 'wc-editor/';
const CACHED_HTML_PATH = CACHE_DIR + 'index.html';
const LAST_CACHE_KEY = '@wc_last_cache';
const CACHE_TTL_MS = 1000 * 60 * 60 * 24; // 24 horas

// ─── Helpers ──────────────────────────────────────────────────────────────
async function ensureCacheDir() {
  const info = await FileSystem.getInfoAsync(CACHE_DIR);
  if (!info.exists) await FileSystem.makeDirectoryAsync(CACHE_DIR, { intermediates: true });
}

async function cacheEditorHTML() {
  try {
    await ensureCacheDir();
    const result = await FileSystem.downloadAsync(WC_URL, CACHED_HTML_PATH);
    if (result.status === 200) {
      await AsyncStorage.setItem(LAST_CACHE_KEY, Date.now().toString());
      return true;
    }
  } catch (e) {
    console.log('Cache download error:', e);
  }
  return false;
}

async function getCachedSource(): Promise<{ uri: string } | null> {
  try {
    const info = await FileSystem.getInfoAsync(CACHED_HTML_PATH);
    if (!info.exists) return null;
    const lastCache = await AsyncStorage.getItem(LAST_CACHE_KEY);
    if (!lastCache) return null;
    const age = Date.now() - parseInt(lastCache);
    if (age > CACHE_TTL_MS) return null; // caché vencida
    return { uri: CACHED_HTML_PATH };
  } catch {
    return null;
  }
}

async function registerForPushNotifications(): Promise<string | null> {
  if (!Device.isDevice) return null;
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') return null;
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'WC Corporate',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#0084ff',
    });
  }
  try {
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    return token;
  } catch {
    return null;
  }
}

// ─── Componente principal ─────────────────────────────────────────────────
export default function App() {
  const webViewRef = useRef<WebView>(null);
  const [loading, setLoading] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [source, setSource] = useState<any>({ html: WC_EDITOR_HTML, baseUrl: 'https://kacn1z-del.github.io/wc-editorpro/' });
  const appState = useRef(AppState.currentState);

  // ── Al arrancar ──
  useEffect(() => {
    (async () => {
      // 1. Verificar conexión
      const net = await Network.getNetworkStateAsync();
      const online = !!net.isConnected && !!net.isInternetReachable;
      setIsOnline(online);

      // El editor SIEMPRE carga desde el HTML local (dentro de la app).
      // No necesita internet para abrir. Internet solo se usa para Sibö (IA).
      setSource({ html: WC_EDITOR_HTML, baseUrl: 'https://kacn1z-del.github.io/wc-editorpro/' });

      // 4. Notificaciones push
      await registerForPushNotifications();

      // 5. Notificación de bienvenida (solo primera vez)
      const welcomed = await AsyncStorage.getItem('@wc_welcomed');
      if (!welcomed) {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: '¡Bienvenido a WC Corporate! 🇨🇷',
            body: 'Tu editor profesional ya está listo. Tocá para abrir.',
            sound: true,
          },
          trigger: { seconds: 3 },
        });
        await AsyncStorage.setItem('@wc_welcomed', '1');
      }
    })();

    // Detectar cambios de red
    const netSub = AppState.addEventListener('change', async (nextState: AppStateStatus) => {
      if (nextState === 'active' && appState.current !== 'active') {
        const net = await Network.getNetworkStateAsync();
        setIsOnline(!!net.isConnected && !!net.isInternetReachable);
      }
      appState.current = nextState;
    });

    return () => netSub.remove();
  }, []);

  // ── Botón atrás Android ──
  useEffect(() => {
    if (Platform.OS !== 'android') return;
    const onBackPress = () => {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      }
      return false;
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, [canGoBack]);

  // ── Mensajes desde la WebView ──
  const handleMessage = useCallback(async (event: WebViewMessageEvent) => {
    let data: any;
    try { data = JSON.parse(event.nativeEvent.data); } catch { return; }

    switch (data.type) {

      // 📷 Abrir cámara
      case 'OPEN_CAMERA': {
        const perm = await ImagePicker.requestCameraPermissionsAsync();
        if (!perm.granted) {
          Alert.alert('Permiso denegado', 'Necesitamos acceso a la cámara.');
          return;
        }
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.85,
          base64: true,
          allowsEditing: true,
        });
        if (!result.canceled && result.assets[0].base64) {
          const mime = 'image/jpeg';
          const dataUrl = `data:${mime};base64,${result.assets[0].base64}`;
          webViewRef.current?.injectJavaScript(`
            (function() {
              if (typeof insertar === 'function') {
                insertar('<img src="${dataUrl}" style="max-width:100%;height:auto;border-radius:4px;" />');
              } else {
                document.execCommand('insertHTML', false, '<img src="${dataUrl}" style="max-width:100%;height:auto;" />');
              }
              window.__nativeMsg && window.__nativeMsg({type:'CAMERA_DONE'});
            })(); true;
          `);
        }
        break;
      }

      // 🖼️ Abrir galería
      case 'OPEN_GALLERY': {
        const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!perm.granted) {
          Alert.alert('Permiso denegado', 'Necesitamos acceso a la galería.');
          return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.85,
          base64: true,
          allowsMultipleSelection: false,
        });
        if (!result.canceled && result.assets[0].base64) {
          const mime = result.assets[0].mimeType ?? 'image/jpeg';
          const dataUrl = `data:${mime};base64,${result.assets[0].base64}`;
          webViewRef.current?.injectJavaScript(`
            (function() {
              if (typeof insertar === 'function') {
                insertar('<img src="${dataUrl}" style="max-width:100%;height:auto;border-radius:4px;" />');
              } else {
                document.execCommand('insertHTML', false, '<img src="${dataUrl}" style="max-width:100%;height:auto;" />');
              }
              window.__nativeMsg && window.__nativeMsg({type:'GALLERY_DONE'});
            })(); true;
          `);
        }
        break;
      }

      // 📁 Abrir archivos locales (docx, pdf, txt)
      case 'OPEN_FILE': {
        const result = await DocumentPicker.getDocumentAsync({
          type: [
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/pdf',
            'text/plain',
            'text/html',
          ],
          copyToCacheDirectory: true,
        });
        if (!result.canceled && result.assets[0]) {
          const asset = result.assets[0];
          const content = await FileSystem.readAsStringAsync(asset.uri, {
            encoding: FileSystem.EncodingType.Base64,
          });
          webViewRef.current?.injectJavaScript(`
            (function() {
              window.__nativeFile = {
                name: ${JSON.stringify(asset.name)},
                mimeType: ${JSON.stringify(asset.mimeType ?? 'application/octet-stream')},
                base64: ${JSON.stringify(content)}
              };
              if (typeof window.__handleNativeFile === 'function') {
                window.__handleNativeFile(window.__nativeFile);
              }
            })(); true;
          `);
        }
        break;
      }

      // 💾 Guardar archivo exportado (PDF/Word)
      case 'SAVE_FILE': {
        const { filename, base64, mimeType } = data;
        if (!filename || !base64) return;
        await ensureCacheDir();
        const filePath = CACHE_DIR + filename;
        await FileSystem.writeAsStringAsync(filePath, base64, {
          encoding: FileSystem.EncodingType.Base64,
        });
        const canShare = await Sharing.isAvailableAsync();
        if (canShare) {
          await Sharing.shareAsync(filePath, {
            mimeType: mimeType ?? 'application/octet-stream',
            dialogTitle: `Compartir ${filename}`,
          });
        } else {
          Alert.alert('Archivo guardado', `Guardado en: ${filePath}`);
        }
        break;
      }

      // 🔔 Programar notificación
      case 'SCHEDULE_NOTIFICATION': {
        const { title, body, secondsFromNow } = data;
        await Notifications.scheduleNotificationAsync({
          content: { title, body, sound: true },
          trigger: { seconds: secondsFromNow ?? 5 },
        });
        break;
      }

      // 📡 Consultar estado de red
      case 'GET_NETWORK_STATUS': {
        webViewRef.current?.injectJavaScript(`
          window.__nativeMsg && window.__nativeMsg({
            type: 'NETWORK_STATUS',
            isOnline: ${isOnline},
            platform: '${Platform.OS}'
          }); true;
        `);
        break;
      }

      // 🔄 Forzar actualización de caché
      case 'REFRESH_CACHE': {
        const ok = await cacheEditorHTML();
        webViewRef.current?.injectJavaScript(`
          if(typeof showToast==='function') showToast('${ok ? 'Caché actualizada ✅' : 'Error actualizando caché ❌'}'); true;
        `);
        break;
      }

      default:
        break;
    }
  }, [isOnline]);

  // ── JS inyectado al cargar la página ──
  const injectedJS = `
    (function() {
      // Viewport correcto
      var meta = document.querySelector('meta[name="viewport"]');
      if (!meta) { meta = document.createElement('meta'); meta.name = 'viewport'; document.head.appendChild(meta); }
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=yes';

      // Flags globales
      window.__IS_NATIVE_APP__ = true;
      window.__PLATFORM__ = '${Platform.OS}';
      window.__IS_ONLINE__ = ${isOnline};

      // Bridge: envía mensajes a la app nativa
      window.__nativeMsg = function(data) {
        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(JSON.stringify(data));
        }
      };

      // API pública para que el editor use funciones nativas
      window.wcNative = {
        openCamera:   function() { window.__nativeMsg({type:'OPEN_CAMERA'}); },
        openGallery:  function() { window.__nativeMsg({type:'OPEN_GALLERY'}); },
        openFile:     function() { window.__nativeMsg({type:'OPEN_FILE'}); },
        saveFile:     function(filename, base64, mimeType) {
          window.__nativeMsg({type:'SAVE_FILE', filename, base64, mimeType});
        },
        notify: function(title, body, seconds) {
          window.__nativeMsg({type:'SCHEDULE_NOTIFICATION', title, body, secondsFromNow: seconds||5});
        },
        networkStatus: function() { window.__nativeMsg({type:'GET_NETWORK_STATUS'}); },
        refreshCache:  function() { window.__nativeMsg({type:'REFRESH_CACHE'}); },
      };

      // Inyectar botones nativos en el toolbar si existe
      document.addEventListener('DOMContentLoaded', function() {
        // Banner offline si no hay internet
        if (!window.__IS_ONLINE__) {
          var banner = document.createElement('div');
          banner.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#e74c3c;color:#fff;text-align:center;padding:6px;font-size:12px;font-weight:bold;z-index:99999;';
          banner.textContent = '📴 Modo offline — algunos servicios pueden no estar disponibles';
          document.body.prepend(banner);
        }
      });

      // iOS: scroll al campo activo cuando aparece teclado
      if ('${Platform.OS}' === 'ios') {
        document.addEventListener('focusin', function(e) {
          var t = e.target;
          if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable) {
            setTimeout(function() { t.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 350);
          }
        });
      }

      true;
    })();
  `;

  const handleLoadEnd = async () => {
    setLoading(false);
    await SplashScreen.hideAsync();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a2942" translucent={false} />

      <WebView
        ref={webViewRef}
        source={source}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        startInLoadingState={false}
        originWhitelist={['*']}
        mixedContentMode="always"
        allowFileAccess={true}
        allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
        cacheEnabled={true}
        cacheMode="LOAD_CACHE_ELSE_NETWORK"
        renderToHardwareTextureAndroid={true}
        injectedJavaScriptBeforeContentLoaded={injectedJS}
        onLoadEnd={handleLoadEnd}
        onMessage={handleMessage}
        onNavigationStateChange={(s) => setCanGoBack(s.canGoBack)}
        onError={(e) => console.warn('WebView error:', e.nativeEvent)}
      />

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0084ff" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:        { flex: 1, backgroundColor: '#1a2942' },
  webview:          { flex: 1, backgroundColor: '#1a2942' },
  loadingContainer: { ...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a2942' },
});
