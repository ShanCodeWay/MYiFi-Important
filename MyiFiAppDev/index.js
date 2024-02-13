/**
 * @format
 */

import {AppRegistry, Platform, StatusBar } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import colors from './src/styles/Colors'

const statusBarColor = colors.BLUE_ACCENT;

// // Set the status bar color for the entire app
// StatusBar.setBackgroundColor(statusBarColor);
// StatusBar.setBarStyle('dark-content');

if (Platform.OS === 'android') {
    console.log(Platform.OS)
    StatusBar.setBackgroundColor(statusBarColor);
    StatusBar.setBarStyle('dark-content');
  }
  


AppRegistry.registerComponent(appName, () => App);
