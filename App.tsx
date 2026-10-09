import React, { useRef, useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, BackHandler, Platform, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import * as Network from 'expo-network';
import AsyncStorage from '@react-native-async-storage/async-storage';

SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const BUNDLE_URL = 'https://kacn1z-del.github.io/wc-editorpro/wc-editor-bundle.html';
const CACHE_FILE = FileSystem.documentDirectory + 'wc-editor-bundle.html';
const CACHE_KEY = 'wc_offline_cache';

export default function App() {
  const webViewRef = useRef<WebView>(null);
  const [appIsReady, setAppIsReady] = useState(false);
  const [editorHtml, setEditorHtml] = useState<string | null>(null);

  useEffect(() => {
    async function prepare() {
      try {
        await registerForPushNotifications();

        // Cargar caché local primero (instantáneo)
        const cacheInfo = await FileSystem.getInfoAsync(CACHE_FILE);
        if (cacheInfo.exists) {
          const cached = await FileSystem.readAsStringAsync(CACHE_FILE);
          setEditorHtml(cached);
        }

        // Actualizar en segundo plano si hay internet
        const net = await Network.getNetworkStateAsync();
        if (net.isConnected) {
          updateCacheInBackground();
        }

      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const updateCacheInBackground = async () => {
    try {
      const result = await FileSystem.downloadAsync(BUNDLE_URL, CACHE_FILE);
      if (result.status === 200) {
        // Si no había caché local aún, cargar ahora que ya se descargó
        setEditorHtml(prev => {
          if (!prev) {
            FileSystem.readAsStringAsync(CACHE_FILE).then(html => setEditorHtml(html));
          }
          return prev;
        });
      }
    } catch (e) {
      console.warn('Background update failed:', e);
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
  }, [appIsReady]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      const backAction = () => {
        if (webViewRef.current) { webViewRef.current.goBack(); return true; }
        return false;
      };
      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
      return () => backHandler.remove();
    }
  }, []);

  async function registerForPushNotifications() {
    if (!Device.isDevice) return;
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') return;
  }

  const handleMessage = async (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.type === 'PICK_IMAGE') {
        const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, base64: true, quality: 0.8 });
        if (!result.canceled && result.assets[0]) {
          webViewRef.current?.injectJavaScript(`window.wcNative.onImagePicked('data:image/jpeg;base64,${result.assets[0].base64}');`);
        }
      }
      if (data.type === 'TAKE_PHOTO') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') { Alert.alert('Permiso requerido', 'Se necesita acceso a la cámara.'); return; }
        const result = await ImagePicker.launchCameraAsync({ base64: true, quality: 0.8 });
        if (!result.canceled && result.assets[0]) {
          webViewRef.current?.injectJavaScript(`window.wcNative.onImagePicked('data:image/jpeg;base64,${result.assets[0].base64}');`);
        }
      }
      if (data.type === 'SAVE_FILE') {
        const fileUri = FileSystem.documentDirectory + (data.filename || 'documento.txt');
        await FileSystem.writeAsStringAsync(fileUri, data.content, { encoding: data.encoding === 'base64' ? FileSystem.EncodingType.Base64 : FileSystem.EncodingType.UTF8 });
        if (await Sharing.isAvailableAsync()) await Sharing.shareAsync(fileUri);
      }
      if (data.type === 'CACHE_DATA') await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(data.payload));
      if (data.type === 'GET_CACHE') {
        const cached = await AsyncStorage.getItem(CACHE_KEY);
        webViewRef.current?.injectJavaScript(`window.wcNative.onCacheLoaded(${cached || 'null'});`);
      }
    } catch (e) { console.warn('Message error:', e); }
  };

  const injectedJS = `
    window.wcNative = {
      pickImage: () => window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'PICK_IMAGE' })),
      takePhoto: () => window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'TAKE_PHOTO' })),
      saveFile: (filename, content, encoding) => window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'SAVE_FILE', filename, content, encoding })),
      cacheData: (payload) => window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'CACHE_DATA', payload })),
      getCache: () => window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'GET_CACHE' })),
      onImagePicked: () => {},
      onCacheLoaded: () => {},
      isNative: true,
      platform: 'android',
    };
    true;
  `;

  const offlineHtml = '<h2 style="font-family:sans-serif;text-align:center;margin-top:80px;color:#666">Descargando editor...<br><small style="font-size:14px">Se necesita conexión la primera vez</small></h2>';

  if (!appIsReady) return null;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="light" backgroundColor="#1a2942" />
      <WebView
        ref={webViewRef}
        source={{ html: editorHtml || offlineHtml }}
        style={styles.webview}
        injectedJavaScript={injectedJS}
        onMessage={handleMessage}
        javaScriptEnabled
        domStorageEnabled
        allowsBackForwardNavigationGestures
        startInLoadingState
        originWhitelist={['*']}
        allowFileAccess
        allowUniversalAccessFromFileURLs
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a2942' },
  webview: { flex: 1 },
});
