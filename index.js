/**
 * @format
 */

import { AppRegistry } from 'react-native';
import EntryPoint from './EntryPoint';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => EntryPoint);
