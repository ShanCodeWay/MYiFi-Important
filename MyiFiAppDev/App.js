/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//const Stack = createNativeStackNavigator();
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import NavContainer from './src/views/navigators/NavContainer';

// import ConfigStore from "./src/store";
//import { Provider } from "react-redux";

//const store = ConfigStore();

//function App(): JSX.Element {
class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <NavContainer/>

    );
  }
}

export default App;
