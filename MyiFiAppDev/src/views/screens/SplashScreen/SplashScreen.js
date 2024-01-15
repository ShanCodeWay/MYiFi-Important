import React, { Component } from "react";
import { View, Text } from "react-native";
import Main_Logo from "../../../assets/icons/MI_Logo.svg";
import { Android_Theme_Light } from "../../../styles/Themes";

import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GetCommonStyles } from "../../../styles/CommonStyles";
import { GetSplashScreenStyles } from "./SplashScreenStyles";

class SplashScreen extends Component {

  componentDidMount() {

    try {

      this.timeout = setTimeout(() => {

        this.props.navigation.navigate("LoginScreen");
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

            <Main_Logo width = {"30%"}/>
           
          </View>
          
          <View style={GetSplashScreenStyles(Android_Theme_Light).bottomNameContainer}>

            <View style={GetSplashScreenStyles(Android_Theme_Light).titleView}>

              <Text style={GetSplashScreenStyles(Android_Theme_Light).titleText}>
                Manage{"\n"}your Finance,{"\n"}with MyFinance.
              </Text>

              <Text style={GetSplashScreenStyles(Android_Theme_Light).descriptionTest}>
                Sign up to a world of possibilities.
              </Text>

            </View>
            
            <View style={GetSplashScreenStyles(Android_Theme_Light).footerView}>

              <Text style={GetSplashScreenStyles(Android_Theme_Light).footerText}>
                Mercantile Investments
              </Text>

            </View>

          </View>
        </View>

      </SafeAreaView>

    );
  }
}

export default SplashScreen;