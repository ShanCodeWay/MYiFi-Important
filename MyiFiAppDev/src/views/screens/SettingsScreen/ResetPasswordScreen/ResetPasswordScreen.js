  import React, { Component } from "react";
  import { View, SafeAreaView, StatusBar, Text,TouchableWithoutFeedback,TouchableOpacity} from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
 
  
  import Index from "../../../../configs/Index";
  import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
  import SelectDropDown from "../../../components/Common/Dropdown/SelectDropDown"; 
  import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
  import CommonButton from "../../../components/Common/MainButton/CommonButton";
  import BottomTitleBar from "../../../components/Common/BottomBar/BottomBar";
  import { GetCommonStyles } from "../../../../styles/CommonStyles";
  import GetResetPasswordScreenStyles from "./ResetPasswordScreenStyles";

  import {Android_Theme_Light} from "../../../../styles/Themes";
//Done by: Darshana 02/02/2024
  class ResetPasswordScreen extends Component {

    constructor(props) {
      super(props);
      this.newPassword = React.createRef();
      this.password = React.createRef();
      this.confirm = React.createRef();
      
      
      this.state = {
        scrollEnabled : false,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        isPolicyExpanded: false,
        
      };
    }
    
    componentDidMount() {
      
      try {
      

      } 
      catch (Error) {
        console.log("[ResetPasswordScreen] - componentDidMount Ex: ", Error);
      }
    }

    componentWillUnmount() {
      try {
      } 
      catch (Error) {
        console.log("[ResetPasswordScreen] - componentWillUnmount Ex: ", Error);
      }
    }

    OnNextButtonPress = () => {
      try {  
      this.props.navigation.replace(Index.RESTOTP); 
        console.log("Next button pressed to Navigate to RestPasswordScreenOtp");
      }
      catch (error){ 
        console.log("[ResetPasswordScreen] - OnNextButtonPress Ex: ",error);
      }
    };

    OnBackButtonPress = () => {
      try{
        this.props.navigation.replace(Index.SETTINGS_SCREEN_1); 
        console.log("left pressed to Navigate to SettingsScreen");
      }
      catch (error){ 
        console.log("[ResetPasswordScreen] - OnBackButtonPress Ex: ",error);}
      
    };

    OnHomeButtonPress = () => {
      try{
        this.props.navigation.replace(Index.DASHBOARD); 
        console.log("left pressed to Navigate to SettingsScreen");
      }
      catch (error){ 
        console.log("[ResetPasswordScreen] - OnBackButtonPress Ex: ",error);}
      
    };

    handleCurrentPasswordInputChange = (text) => {
      try {
        this.setState({ currentPassword: text });
      } catch (error) {
        console.error("[ResetPasswordScreen] - handleCurrentPasswordInputChange Error: ", error);
      }
    };
  
    handleNewPasswordInputChange = (text) => {
      try {
        this.setState({ newPassword: text });
        
      } catch (error) {
        console.error("[ResetPasswordScreen] - handleNewPasswordInputChange Error: ", error);
      }
    };

    handlePressOnPolicy = () => {
      try {
        this.setState((prevState) => ({
          isPolicyExpanded: !prevState.isPolicyExpanded,
        }));}
        catch (error) {
        console.error("[ResetPasswordScreen] - handleNewPasswordInputChange Error: ", error);
      }
    };


  


    handleConfirmPasswordInputChange = (text) => {
      try {
        this.setState({ confirmPassword: text });
      } catch (error) {
        console.error("[ResetPasswordScreen] - handleConfirmPasswordInputChange Error: ", error);
      }
    };
  
   
    render() {

      const policyView = this.state.isPolicyExpanded && (
        <TouchableWithoutFeedback onPress={this.handlePressOnPolicy}>
    <View style={GetResetPasswordScreenStyles(Android_Theme_Light).overlay}>
      
      <View style={GetResetPasswordScreenStyles(Android_Theme_Light).policyView}>
     
        <View style={GetResetPasswordScreenStyles(Android_Theme_Light).policyContainer}>
        <View style={GetResetPasswordScreenStyles(Android_Theme_Light).policyTitleView}>

          <Text style={GetResetPasswordScreenStyles(Android_Theme_Light).policyText}>
            Your password must meet the following requirements:
          </Text>
          <TouchableOpacity onPress={this.handlePressOnPolicy}> 
          <View style={GetResetPasswordScreenStyles(Android_Theme_Light).crossIconButton}>
          <Android_Theme_Light.ICON_CIRCLE_X/>  
           </View>
           </TouchableOpacity>
         </View>  
          <Text style={GetResetPasswordScreenStyles(Android_Theme_Light).policyItem}>- At least 8 characters long</Text>
          <Text style={GetResetPasswordScreenStyles(Android_Theme_Light).policyItem}>- Contains both uppercase and lowercase letters</Text>
          <Text style={GetResetPasswordScreenStyles(Android_Theme_Light).policyItem}>- Includes at least one numeric digit</Text>
          <Text style={GetResetPasswordScreenStyles(Android_Theme_Light).policyItem}>- Contains special characters (e.g., @, #, $)</Text>
          
         
        </View>
        <View style={GetResetPasswordScreenStyles(Android_Theme_Light).bottomButtonView}>
        <View style={GetResetPasswordScreenStyles(Android_Theme_Light).bottomButton}>
           <CommonButton
                type={"1"}
                title={"OK"}
                fontFamily = {Android_Theme_Light.POPPINS_SEMIBOLD}
                textSize = {Android_Theme_Light.FONT_SIZE_15}
                textColor = {Android_Theme_Light.WHITE_COLOR}
                backgroundColor={Android_Theme_Light.BLUE_COLOR}
                onPress={()=>this.handlePressOnPolicy()}
                width={"40%"}/>
          </View>
          </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
      );
    
      return (
        
        <SafeAreaView style = {GetCommonStyles(Android_Theme_Light).safeAreaView}>

         
          
          <View style= {GetCommonStyles(Android_Theme_Light).mainContainer}>

            <KeyboardAwareScrollView
              keyboardShouldPersistTaps="always"
              behavior="padding"
              //keyboardShouldPersistTaps="handled"
              enableAutomaticScroll={false}
              enableOnAndroid = {true}
              //extraScrollHeight={150}
              //contentInset={{ bottom: this.state.contentBottom }}
              //onKeyboardWillHide={() => this.setState({ contentBottom: 0 })}
              //onKeyboardDidHide={() => this.setState({ contentBottom: 0 })}
              //onKeyboardDidShow={() => this.setState({ contentBottom: 0, })}
              contentContainerStyle={GetCommonStyles(Android_Theme_Light).keyboardAwareView}>

              
              <View style={GetCommonStyles(Android_Theme_Light).titleContainer}>
                <Text
                  style={
                    GetCommonStyles(Android_Theme_Light).titleContainertitleText
                  }
                >
                  Reset Password 
                </Text>
              </View>
            
              <View style= {GetResetPasswordScreenStyles(Android_Theme_Light).middleView}>
      
       
                <CommonInputField
                  value = {this.state.currentPassword}
                  title = {"Current Password"}
                  placeholder = {"Enter Current Password"}
                  isSecureText = {true}
                  onInputChange= {(text) => this.handleCurrentPasswordInputChange(text)}
                  icon = {Android_Theme_Light.ICON_VIEW_PASSWORD}
                  inputRef = {this.password}
                  nextInputRef = {this.password}
                  returnKeyType="next"/>

                <View style = {{height:10}}/>
              
           <CommonInputField
            value={this.state.newPassword}
            title={"New Password"}
            placeholder={"Enter Your New Password"}
            isSecureText={false}
            onInputChange={(text) => this.handleNewPasswordInputChange(text)}
            icon={Android_Theme_Light.ICON_VIEW_PASSWORD}
            inputRef={this.password}
            nextInputRef={this.newPassword}
          />
         <TouchableOpacity onPress={this.handlePressOnPolicy} style={GetResetPasswordScreenStyles(Android_Theme_Light).policyContainer}>
            <View style={GetResetPasswordScreenStyles(Android_Theme_Light).policyTextContainer}>
              <Android_Theme_Light.ICON_INFO
                width={12} 
                height={12}
                fill={Android_Theme_Light.DARK_BLUE_COLOR}
                style={{ marginRight: 5 }} // Add margin to separate icon from text
              />
              <Text style={GetResetPasswordScreenStyles(Android_Theme_Light).policyTitle}>
                Password Policy
              </Text>
            </View>
          </TouchableOpacity>

        
              <View style = {{height:10}}/>
              
              <CommonInputField
                value        = {this.state.confirmPassword}
                title        = {"Confirm Password"}
                placeholder  = {"Confirm Your Password"}
                isSecureText = {true}
                onInputChange= {(text) => this.handleConfirmPasswordInputChange(text)}
                icon = {Android_Theme_Light.ICON_VIEW_PASSWORD}
                inputRef     = {this.newPassword}
                nextInputRef = {this.confirm}/>
           
            <View style = {{height:10}}/>
                 

    
              </View>
              
            </KeyboardAwareScrollView>
         
            
          </View>
          <View style = {GetResetPasswordScreenStyles(Android_Theme_Light).bottomView}>

{/* Next Button  */}
<CommonButton
  type={"1"}
  title={"Next"}
  fontFamily = {Android_Theme_Light.POPPINS_SEMIBOLD}
  textSize = {Android_Theme_Light.FONT_SIZE_15}
  textColor = {Android_Theme_Light.WHITE_COLOR}
  backgroundColor={Android_Theme_Light.BLUE_COLOR}
  onPress={()=>this.OnNextButtonPress()}
  width={"50%"}/>
 <BottomTitleBar
icon1={Android_Theme_Light.ICON_BACK_ARROWS}
icon2={Android_Theme_Light.ICON_HOME}
onPressIcon1={this.OnBackButtonPress}
onPressIcon2={this.OnHomeButtonPress}
/>
</View>
{policyView}
        </SafeAreaView>

      )
    }
  }

export default ResetPasswordScreen;
