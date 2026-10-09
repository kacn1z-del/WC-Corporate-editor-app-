import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  View,
  BackHandler,
  Platform,
  Alert,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
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

const WEB_URL = 'https://kacn1z-del.github.io/wc-editorpro/';
const CACHE_KEY = 'wc_offline_cache';

export default function App() {
  const webViewRef = useRef<WebView>(null);
  const [isOffline, setIsOffline] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await registerForPushNotifications();
        const networkState = await Network.getNetworkStateAsync();
        setIsOffline(!networkState.isConnected);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      const backAction = () => {
        if (webViewRef.current) {
          webViewRef.current.goBack();
          return true;
        }
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
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          base64: true,
          quality: 0.8,
        });
        if (!result.canceled && result.assets[0]) {
          webViewRef.current?.injectJavaScript(`
            window.wcNative.onImagePicked('data:image/jpeg;base64,${result.assets[0].base64}');
          `);
        }
      }

      if (data.type === 'TAKE_PHOTO') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permiso requerido', 'Se necesita acceso a la cámara.');
          return;
        }
        const result = await ImagePicker.launchCameraAsync({
          base64: true,
          quality: 0.8,
        });
        if (!result.canceled && result.assets[0]) {
          webViewRef.current?.injectJavaScript(`
            window.wcNative.onImagePicked('data:image/jpeg;base64,${result.assets[0].base64}');
          `);
        }
      }

      if (data.type === 'PICK_FILE') {
        const result = await DocumentPicker.getDocumentAsync({
          type: '*/*',
          copyToCacheDirectory: true,
        });
        if (!result.canceled && result.assets[0]) {
          const asset = result.assets[0];
          const content = await FileSystem.readAsStringAsync(asset.uri, {
            encoding: FileSystem.EncodingType.Base64,
          });
          webViewRef.current?.injectJavaScript(`
            window.wcNative.onFilePicked({
              name: '${asset.name}',
              mimeType: '${asset.mimeType || 'application/octet-stream'}',
              content: '${content}'
            });
          `);
        }
      }

      if (data.type === 'SAVE_FILE') {
        const fileUri = FileSystem.documentDirectory + (data.filename || 'documento.txt');
        await FileSystem.writeAsStringAsync(fileUri, data.content, {
          encoding: data.encoding === 'base64'
            ? FileSystem.EncodingType.Base64
            : FileSystem.EncodingType.UTF8,
        });
        if (await Sharing.isAvailableAsync()) {
          await Sharing.shareAsync(fileUri);
        }
      }

      if (data.type === 'CACHE_DATA') {
        await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(data.payload));
      }

      if (data.type === 'GET_CACHE') {
        const cached = await AsyncStorage.getItem(CACHE_KEY);
        webViewRef.current?.injectJavaScript(`
          window.wcNative.onCacheLoaded(${cached || 'null'});
        `);
      }

    } catch (e) {
      console.warn('Message error:', e);
    }
  };

  const injectedJS = `
    window.wcNative = {
      pickImage: () => window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'PICK_IMAGE' })),
      takePhoto: () => window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'TAKE_PHOTO' })),
      pickFile: () => window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'PICK_FILE' })),
      saveFile: (filename, content, encoding) => window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'SAVE_FILE', filename, content, encoding })),
      cacheData: (payload) => window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'CACHE_DATA', payload })),
      getCache: () => window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'GET_CACHE' })),
      onImagePicked: () => {},
      onFilePicked: () => {},
      onCacheLoaded: () => {},
      isNative: true,
      platform: 'android',
    };
    true;
  `;

  if (!appIsReady) return null;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="light" backgroundColor="#1a2942" />
      <WebView
        ref={webViewRef}
        source={isOffline
          ? { html: '<h2 style="font-family:sans-serif;text-align:center;margin-top:40px">Sin conexión</h2>' }
          : { uri: WEB_URL }
        }
        style={styles.webview}
        injectedJavaScript={injectedJS}
        onMessage={handleMessage}
        javaScriptEnabled
        domStorageEnabled
        allowsBackForwardNavigationGestures
        startInLoadingState
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a2942' },
  webview: { flex: 1 },
});
