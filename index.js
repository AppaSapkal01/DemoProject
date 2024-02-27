import 'react-native-gesture-handler';
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {FacebookProvider} from 'react-native-fbsdk-next';

AppRegistry.registerComponent(appName, () => App);
