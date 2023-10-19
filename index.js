/**
 * @format
 */

import { AppRegistry, Text } from 'react-native';
import EntryPoint from './EntryPoint';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => EntryPoint);
