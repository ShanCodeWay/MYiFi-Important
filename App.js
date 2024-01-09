/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import Navigator from './src/navigator/navigator';


const Stack = createNativeStackNavigator();
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

// import ConfigStore from "./src/store";
//import { Provider } from "react-redux";

//const store = ConfigStore();

//function App(): JSX.Element {
class App extends React.Component {

  componentDidMount() {
    

  }

  render() {
    return (
     <Navigator/>
    );
  }
}

export default App;
