import React, { Component } from "react";
import { View, Text } from "react-native";
import SplashScreenStyles from "./SplashScreenStyles";
import MI_Logo from "../../../assets/icons/MI_Logo.svg";
import { Android_Theme_Light } from "../../../styles/Themes";

import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../styles/CommonStyles";

class SplashScreen extends Component {



  componentDidMount() {
    this.timeout = setTimeout(() => {

      this.props.navigation.navigate("LoginScreen");
    }, 4000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
<SafeAreaView style={[GetCommonStyles(Android_Theme_Light).safeAreaView]} >


<View style={SplashScreenStyles.container}>

<View style={SplashScreenStyles.upperSection}>
  <View style={SplashScreenStyles.svgimage}>
    <MI_Logo />
  </View>
</View>
<View style={SplashScreenStyles.lowerSection}>
  <Text style={SplashScreenStyles.text1}>
    Manage{"\n"}your Finance,{"\n"}with MyFinance.
  </Text>
  <Text style={SplashScreenStyles.text2}>
    Sign up to a world of possibilities.
  </Text>
  <Text style={SplashScreenStyles.text3}>Mercantile Investments</Text>
</View>
</View>

</SafeAreaView>

   
    );
  }
}

export default SplashScreen;
