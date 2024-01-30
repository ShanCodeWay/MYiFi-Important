/**
 * @format
 */

import {AppRegistry, StatusBar } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import colors from './src/styles/Colors'

const statusBarColor = colors.BLUE_ACCENT;

// Set the status bar color for the entire app
StatusBar.setBackgroundColor(statusBarColor);
StatusBar.setBarStyle('dark-content');


AppRegistry.registerComponent(appName, () => App);
