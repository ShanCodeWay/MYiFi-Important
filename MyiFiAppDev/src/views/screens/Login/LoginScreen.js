// Splash.js
import React, { Component } from "react";
import { View, Text, Touchable, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CommonInputField from "../../components/Common/TextInput/CommonInputField";
import { SafeAreaView } from "react-native-safe-area-context";
import Index from "../../../configs/Index";
import {
  Android_Theme_Light,
  Android_Theme_Dark,
} from "../../../styles/Themes";
import CommonButton from "../../components/Common/MainButton/CommonButton";
import Colors from "../../../styles/Colors";
import Fonts from "../../../styles/Fonts";
import FingerPrintLogin from "../LoginScreen/FingerPrintLogin/FingerPrintLogin";
import FingerPrintLoginStyles from "../LoginScreen/FingerPrintLogin/FingerPrintLoginStyles";
//import CommonSpinner from "../../components/Common/CommonSpinner";

import GetLoginScreenStyles from "./LoginScreenStyles";
import { GetCommonStyles } from "../../../styles/CommonStyles";

import MainTitleBar from "../../components/Common/TitleBar/MainTitleBar";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//Done by: Dinuranga 23/01/05
class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.UsernameInputRef = React.createRef();
    this.PasswordInputRef = React.createRef();

    this.state = {
      UserName: "",
      Password: "",
      isEnableFingerPrint: false,
      contentBottom: 0,
    };
  }

  componentDidMount() {
    
    try {

    } 
    catch (Error) {
      console.log("[LoginScreen] - componentDidMount Ex: ", Error);
    }
  }

  componentWillUnmount() {
    try {
    } 
    catch (Error) {
      console.log("[LoginScreen] - componentWillUnmount Ex:  ", Error);
    }
  }

  handleUserNameInputChange = (text) => {
    try {
      console.log(text);
    } 
    catch (Error) {
      console.log("[LoginScreen] - handleUserNameInputChange Ex: ", Error);
    }
  };

  handlePasswordInputChange = (text) => {
    try {
      console.log(text);
    } 
    catch (Error) {
      console.log("[LoginScreen] - handlePasswordInputChange Ex: ", Error);
    }
  };

  OnPressSignIn = () => {
    try {
      this.props.navigation.navigate("KYC1Screen");
    } 
    catch (Error) {
      console.log("[LoginScreen] - OnPressSignIn Ex: ", Error);
    }
  };

  onPressSignUp = () => {
    try {
      this.props.navigation.navigate(Index.SIGNUP_1);
    } 
    catch (Error) {
      console.log("[LoginScreen] - onPressSignUp Ex: ", Error);
    }
  };

  OnPress_BackButton() {
    try {

      console.log("[LoginScreen] - OnPress_BackButton Pressed");

    }
    catch(Error){
      console.log("[LoginScreen] - OnPress_BackButton Ex: ", Error);
    }
  }

  render() {

    return (

      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>

        <MainTitleBar
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          TitleText= {""}
          TextAlign = {'left'}
          IconRight = {null}
          onPressLeft = {()=>this.OnPress_BackButton() }/>

        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always"
            behavior="padding"
            //keyboardShouldPersistTaps="handled"
            //enableAutomaticScroll={true}
            //extraScrollHeight={150}
            //contentInset={{ bottom: this.state.contentBottom }}
            //onKeyboardWillHide={() => this.setState({ contentBottom: 0 })}
            //onKeyboardDidHide={() => this.setState({ contentBottom: 0 })}
            //onKeyboardDidShow={() => this.setState({ contentBottom: 0, })}
            contentContainerStyle={
              GetCommonStyles(Android_Theme_Light).keyboardAwareView
            }>

            <View style={GetCommonStyles(Android_Theme_Light).topTitleContainer}>
            
              <Text 
                style={[GetCommonStyles(Android_Theme_Light).textStyleH1Medium]}>
                Sign In
              </Text>

              <Text
                style={GetCommonStyles(Android_Theme_Light).textStyleCaption1Medium}>

                Welcome back! You can continue {"\n"} to manage your finances
              
              </Text>
        
            </View>

            <View style={GetLoginScreenStyles(Android_Theme_Light).middleContainer}>

              {/* UserName */}
              <CommonInputField
                value={""} // Set value to the input field
                title={"User Name"}
                placeholder={"Enter Your Email"} //Hint text
                onInputChange={this.handleUserNameInputChange}
                icon={Android_Theme_Light.ICON_VERIFIED}
                inputRef={this.UsernameInputRef}
                nextInputRef={this.PasswordInputRef}
                returnKeyType="next"
                //width ={'90%'}
              />

              {/* Gap */}
              <View style = {{height:20}}/>

              {/* Password */}
              <CommonInputField
                value={""} // Set value to the input field
                title={"Password"}
                placeholder={"Enter Your Password"} //Hint text
                isSecureText={true}
                onInputChange={this.handlePasswordInputChange}
                icon={Android_Theme_Light.ICON_VIEW_PASSWORD}
                inputRef={this.PasswordInputRef}
                //width ={'90%'}
              />

              {/* Gap */}
              <View style = {{height:20}}/>

              {/* Forgot Password Button  */}
              <CommonButton
                type={"0"}
                title={"Forgot your password?"}
                height={50}
                //backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
                //textColor={Android_Theme_Light.DEEP_BLACK_COLOR}
                fontFamily = {Android_Theme_Light.POPPINS_REGULAR}
                textSize = {Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
                textColor = {Android_Theme_Light.DEEP_BLACK_COLOR}
                textAlign = {"flex-start"}
                onPress = {this.OnPressSignIn}
                leftIcon = {Android_Theme_Light.ICON_LOCK}
                RightIcon = {Android_Theme_Light.ICON_FORWARD}
                //btnWidth={"80%"}
              />

              {/* Gap */}
              <View style = {{height:10}}/>

              {/* Signin Button  */}
              <CommonButton
                type={"1"}
                title={"Sign-In"}
                fontFamily = {Android_Theme_Light.POPPINS_SEMIBOLD}
                textSize = {Android_Theme_Light.FONT_SIZE_15}
                textColor = {Android_Theme_Light.DEEP_BLACK_COLOR}
                backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
                onPress={this.OnPressSignIn}
                //btnWidth={"80%"}
              />

              {/* Gap */}
              <View style = {{height:10}}/>

              {/* Signup Button */}
              <CommonButton
                type={"1"}
                width={"60%"}
                title={"Create an account"}
                fontFamily = {Android_Theme_Light.POPPINS_REGULAR}
                textSize = {Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
                textColor = {Android_Theme_Light.WHITE_COLOR}
                backgroundColor={Android_Theme_Light.LIGHT_BLUE_COLOR}
                onPress={this.onPressSignUp}
              />

              {/* Bottom text */}
              <View style={GetLoginScreenStyles(Android_Theme_Light).ContainerBottomDescription}>
                
                <Text style={[GetLoginScreenStyles(Android_Theme_Light).textStyleBottomDescription,
                  { color: Android_Theme_Light.DARK_GRAY_COLOR }]}>
                
                  {"Enable "}

                </Text>
                
                <Text style={[GetLoginScreenStyles(Android_Theme_Light).textStyleBottomDescription,
                  { color: Android_Theme_Light.BLACK_COLOR }]}>
                    
                    {"Face Lock"}
                </Text>

                <Text style={[GetLoginScreenStyles(Android_Theme_Light).textStyleBottomDescription,
                  { color: Android_Theme_Light.DARK_GRAY_COLOR }]}>
                  
                  {" or "}

                </Text>

                <Text style={[GetLoginScreenStyles(Android_Theme_Light).textStyleBottomDescription,
                  { color: Android_Theme_Light.BLACK_COLOR }]}>
                  
                  {"Touch Lock"}

                </Text>

              </View>

              <Text style={[GetLoginScreenStyles(Android_Theme_Light).textStyleBottomDescription,
                  { color: Android_Theme_Light.BLACK_COLOR }]}>
                  
                  {"for quick sign in"}

                </Text>

            </View>


            {/* Fingerprint */}
            {/*<FingerPrintLogin
              isModalVisible={this.state.isEnableFingerPrint}
              onInputChange={this.handleUserNameInputChange}
                />*/}

          </KeyboardAwareScrollView>

        </View>
        
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
