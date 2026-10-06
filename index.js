import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent llama AppRegistry.registerComponent('main', () => App);
// también asegura que el ambiente esté configurado correctamente
// tanto en Expo Go como en builds nativas
registerRootComponent(App);
