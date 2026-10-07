import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  BackHandler,
  Platform,
} from 'react-native';
import { WebView } from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const WC_URL = 'https://kacn1z-del.github.io/wc-editorpro/';

export default function App() {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);

  React.useEffect(() => {
    if (Platform.OS !== 'android') return;
    const onBack = () => {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      }
      return false;
    };
    BackHandler.addEventListener('hardwareBackPress', onBack);
    return () => BackHandler.removeEventListener('hardwareBackPress', onBack);
  }, [canGoBack]);

  const handleLoadEnd = async () => {
    setLoading(false);
    await SplashScreen.hideAsync();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0d1b3e" />
      <WebView
        ref={webViewRef}
        source={{ uri: WC_URL }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        originWhitelist={['*']}
        mixedContentMode="always"
        cacheEnabled={true}
        onLoadEnd={handleLoadEnd}
        onNavigationStateChange={(s) => setCanGoBack(s.canGoBack)}
      />
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0084ff" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1b3e' },
  webview:   { flex: 1 },
  loader:    { ...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0d1b3e' },
});
