import { registerRootComponent } from 'expo';
// import App from './app/App';
import 'react-native-get-random-values';
import EntryPoint from './app/EntryPoint';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(EntryPoint);
