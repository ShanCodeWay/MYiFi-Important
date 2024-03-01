  import React, { Component } from "react";
  import { View, Text, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import CommonButton from "../../../components/Common/MainButton/CommonButton";
  import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
  
  import Index from "../../../navigators/NavIndex";
  import Svg, { Path } from 'react-native-svg';

  import Icon_CircleChecked from '../../../../assets/icons/Icon_CircleChecked.svg';
  import MI_Logo from '../../../../assets/icons/MI_Logo.svg'
  import Colors from "../../../../styles/Colors";

  import { GetCommonStyles } from "../../../../styles/CommonStyles";
  import GetResetPasswordSucessScreenStyles from "./ResetPasswordSucessScreenStyles";

  import { Android_Theme_Light } from "../../../../styles/Themes";


  //Done by: Darshana 02/02/2024
  class ResetPasswordSucessScreen extends Component {

    constructor(props) {
      
      super(props);

      this.state = {
        Success: true,
        Message:"Reset Password Successful!"
      };

    }

    componentDidMount() {
      
      try {
       
      } 
      catch (Error) {
        console.log("[ResetPasswordSucessScreen] - componentDidMount - Ex: ", Error);
      }
    }

    componentWillUnmount() {
      try {
      } 
      catch (Error) {
        console.log("[ResetPasswordSucessScreen] - componentWillUnmount - Ex: ", Error);
      }
    }

    OnPress_SigninButton = () => {
      try { 
        this.props.navigation.replace(Index.LOGIN_SCREEN); 
        console.log("Next button pressed to NAvigate Fund transfer Screen");}
      catch (error){ 
        console.log("[ResetPasswordSucessScreen] - OnPress_SigninButton - Ex: ",error); 
      }
    };

    OnPress_BackButton = () => {
      try{
        this.props.navigation.replace(Index.LOGIN_SCREEN); 
        console.log("left pressed to navigate to SignupScreen 3 ");
      }
      catch (error){ 
        console.log("[ResetPasswordSucessScreen] - OnPress_BackButton - Ex: ",error);
      }
    };

    render() {
      
      return (

        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
     
          <MainTitleBar
            IconLeft = {Android_Theme_Light.ICON_BACK_ARROW}
            onPressLeft = {()=>this.OnPress_BackButton() }/>
        
       

          <View style = {GetCommonStyles(Android_Theme_Light).mainContainer}>

            <View style = {GetResetPasswordSucessScreenStyles(Android_Theme_Light).topContainer} >

              { 
                this.state.Success ? <Android_Theme_Light.ICON_CIRCLECHECKED width={90} height={90}/> :
                <Android_Theme_Light.ICON_CIRCLE_X/>
              }

              <Text style = {GetCommonStyles(Android_Theme_Light).textStyleCaption1MediumPO}>
                
                {this.state.Message}

              </Text>

            </View> 
          
            <View style= {GetResetPasswordSucessScreenStyles(Android_Theme_Light).bottomContainer}>         
              
              <Android_Theme_Light.MI_LOGO/>       

              <View style = {{height:20}}/>
              
              <Text style= {GetCommonStyles(Android_Theme_Light).textStyleCaption1MediumPO}>
                  You can now sign in to {"\n"} your Account!
              </Text>  

              <View style = {{height:20}}/>

              <CommonButton
                type = '1'
                title = "Sign-in"
                fontFamily = {Android_Theme_Light.POPPINS_SEMIBOLD}
                textSize = {Android_Theme_Light.FONT_SIZE_15}
                textColor = {Android_Theme_Light.BACKGROUND_COLOR}
                backgroundColor={Android_Theme_Light.BLUE_COLOR}
                onPress = {this.OnPress_SigninButton}
                //widt = {"60%"}
              />          
        
            </View> 
        
          </View>   
        
        </SafeAreaView>

      );
    }
  }

export default ResetPasswordSucessScreen;
