import React, { Component } from "react";
import { View, Text } from "react-native";
import MI_Logo from "../../../assets/icons/MI_Logo.svg";
import { Android_Theme_Light } from "../../../styles/Themes";

import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GetCommonStyles } from "../../../styles/CommonStyles";
import { GetSplashScreenStyles } from "./SplashScreenStyles";

class SplashScreen extends Component {

  componentDidMount() {

    try {

      this.timeout = setTimeout(() => {

        //this.props.navigation.navigate("LoginScreen");
      }, 4000);

    }
    catch(Error){
      console.log('SplashScreen - componentDidMount() EX: ' + Error)
    }
  }

  componentWillUnmount() {

    try {

      clearTimeout(this.timeout);

    }
    catch(Error){
      console.log('SplashScreen - componentWillUnmount() EX: ' + Error)
    }
  }

  render() {
    return (
    
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

          <View style={GetSplashScreenStyles(Android_Theme_Light).topLogoContainer}>
            
            <View style={GetSplashScreenStyles(Android_Theme_Light).svgimage}>
              <MI_Logo width = {"100%"} height = {"100%"}/>
            </View>
            
          </View>
          
          <View style={GetSplashScreenStyles(Android_Theme_Light).bottomNameContainer}>
            <Text style={GetSplashScreenStyles(Android_Theme_Light).text1}>
              Manage{"\n"}your Finance,{"\n"}with MyFinance.
            </Text>
            <Text style={GetSplashScreenStyles(Android_Theme_Light).text2}>Sign up to a world of possibilities.</Text>
            <Text style={GetSplashScreenStyles(Android_Theme_Light).text3}>Mercantile Investments</Text>
          </View>
        </View>

      </SafeAreaView>

    );
  }
}

export default SplashScreen;
