  import React, { Component } from "react";
  import { View, Text, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import CommonButton from "../../../components/Common/MainButton/CommonButton";
  import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
  
  import Index from "../../../../configs/Index";
  import Svg, { Path } from 'react-native-svg';

  import Icon_CircleChecked from '../../../../assets/icons/Icon_CircleChecked.svg';
  import MI_Logo from '../../../../assets/icons/MI_Logo.svg'
  import Colors from "../../../../styles/Colors";

  
  import { GetCommonStyles } from "../../../../styles/CommonStyles";
  import {GetSignupScreenStyles4} from "./SignupScreen4Styles";

  import {
    Android_Theme_Light,
    Android_Theme_Dark,
  } from "../../../../styles/Themes";


  //Done by: Darshana 24/01/02

  class SignupScreen4 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        scrollEnabled : false,
      };
    }
    
    
    componentDidMount() {
      
      try {
        StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
      } catch (Error) {
        console.log("[SignupScreen4] - componentDidMount - Error ", Error);
      }
    }
    componentWillUnmount() {
      try {
      } catch (Error) {
        console.log("[SignupScreen4] - componentWillUnmount - Error ", Error);
      }
    }

    handleNextButtonPress = () => {
      try { 
      this.props.navigation.replace(Index.FUND_1); 
      console.log("Next button pressed to NAvigate Fund transfer Screen");}
      catch (error){ console.log("[SignupScreen4] - Next_Button - Error ",error); }
    };

    handleLeftButtonPress = () => {
      try{
        this.props.navigation.replace(Index.SIGNUP_3); 
      console.log("left pressed to navigate to SignupScreen 3 ");
          }
      catch (error){ console.log("[SignupScreen4] - left_Button - Error ",error);}
      
    };


    handlePasswordInputChange = (text) => {
      
    }

    render() {
      return (

        <> 
        
        <SafeAreaView style= {GetCommonStyles(Android_Theme_Light).safeAreaView}>
        
        <MainTitleBar
          IconLeft   = {Android_Theme_Light.ICON_BACK_ARROW}
          TitleText  = {""}
          TextAlign  = {'left'}
          IconRight  = {null}
          onPressLeft= {this.handleLeftButtonPress }
        />
        
        <KeyboardAwareScrollView
              contentContainerStyle       = {{ flexGrow: 1 }}
              keyboardShouldPersistTaps   = "handled"
              extraScrollHeight           = {50}
              enableOnAndroid             = {true}
              enableAutomaticScroll       = {false}
              keyboardOpeningTime         = {300}
              scrollToPosition            = {{ x: 0, y: 0, animated: true }}
              onKeyboardDidShow={(frames) => {
                
              }}
              onKeyboardDidHide={(frames) => {
              
              }}
          >

<View style = {GetCommonStyles(Android_Theme_Light).mainContainer}>
          



  <View style= {GetSignupScreenStyles4(Android_Theme_Light).middleView}>

  <Icon_CircleChecked width = {90} height={100} />
  <Text style= {GetSignupScreenStyles4(Android_Theme_Light).secondTitle}>
    Registration Succesful!
  </Text>
  <Text style= {GetSignupScreenStyles4(Android_Theme_Light).mainTitle}>
    Welcome to
 </Text>           
 <MI_Logo />       
 <Text style= {GetSignupScreenStyles4(Android_Theme_Light).secondTitle1}>
    You can now sign in to your Account!
</Text>          
        
</View>
      
  <View style = {GetSignupScreenStyles4(Android_Theme_Light).bottomView}>

            <CommonButton
              type        = '1'
              title       = "Sign in"
              borderRadius= {35}
              onPress     = {this.handleNextButtonPress}
              textSize    = {20}
              width       = {"60%"}
            />   
        
<View style = {GetSignupScreenStyles4(Android_Theme_Light).logoIcon}>
</View>
            
</View>
        
</View>   
</KeyboardAwareScrollView>
        
</SafeAreaView>
</>
   
      );
    }
  }

export default SignupScreen4;
