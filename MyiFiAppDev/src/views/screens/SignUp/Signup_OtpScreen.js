import React, { Component } from "react";
import { View, Text, SafeAreaView, StatusBar} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CommonButton from "../../components/Common/MainButton/CommonButton";
import MainTitleBar from "../../components/Common/TitleBar/MainTitleBar";
import PaginationIndicator from "../../components/Common/PageIndicator/PageIndicator";

import Index from "../../../configs/Index";
import CommonInputField from "../../components/Common/TextInput/CommonInputField";
import Colors from "../../../styles/Colors";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import GetSignup_OtpScreenStyles from "./Signup_OtpScreenStyles";

import {Android_Theme_Light} from "../../../styles/Themes";

class Signup_OtpScreen extends Component {
    
    constructor(props) {
        super(props);

        this.inputOTP = React.createRef();
    
        this.state = {
            scrollEnabled: false,
            otp : '',
            timer : 5,
        };
    }
    
    componentDidMount() {

        try {
      
            this.interval = setInterval(() => {
                const { timer } = this.state;
                
                if (timer > 0) {
                    this.setState({ 
                        timer: timer - 1 
                    });
                } 
            }, 1000);
        } 
        catch (Error) {
            console.log("[Signup_OtpScreen] - componentDidMount - Ex: ", Error);
        }
 
    }

    componentWillUnmount() {
    
        try {

            clearInterval(this.interval);
        } 
        catch (Error) {
            console.log("[Signup_OtpScreen] - componentWillUnmount - Ex: ", Error);
        }
    }

    handleOtpChange = (text) => {
        
        try {

            this.setState({ otp: text });
        } 
        catch (Error) {
            console.log("[Signup_OtpScreen] - handleOtpChange - Ex: ", Error);
        }
    };

    handleResend = () => {
        
        try {

            console.log('Resend button pressed!');
        } 
        catch (Error) {
        console.log("[Signup_OtpScreen] - handleResend - Ex: ", Error);
        }
    };

  
    handleNextButtonPress = () => {
        try { 
            this.props.navigation.replace(Index.SIGNUP_4); 
            console.log("Next button pressed to Navigate to SignupScreen4");
        }
        catch (error){
            console.log("[Signup_OtpScreen] - Next_Button - Ex: ",error);
        }
    };

    handleLeftButtonPress = () => {
        try{
            this.props.navigation.replace(Index.SIGNUP_2); 
            console.log("left pressed to Navigate to SignupScreen2");
        }
        catch(error){ 
            console.log("[Signup_OtpScreen] - left_Button - Ex: ",error);
        }
    
    };


    handlePasswordInputChange = (text) => {
        try{

        }
        catch(error){ 
            console.log("[Signup_OtpScreen] - handlePasswordInputChange - Ex: ",error);
        }
    }

    render() {
        
        const { otp, timer } = this.state;
            
        return (

            <SafeAreaView style = {GetCommonStyles(Android_Theme_Light).safeAreaView}>
   
                <MainTitleBar
                    IconLeft = {Android_Theme_Light.ICON_BACK_ARROW}
                    onPressLeft = {()=>this.OnBackButtonPress() }/>
     
                <PageIndicator
                    totalNoOfPages = {3}
                    pageNumber = {3}/> 
                    
                <View style = {GetCommonStyles(Android_Theme_Light).mainContainer}>

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

                        <View style = {GetCommonStyles(Android_Theme_Light).topTitleContainer} >
          
                            <Text style = {GetCommonStyles(Android_Theme_Light).textStyleH1Medium}>
                                OTP
                            </Text>
      
                            <Text style = {GetCommonStyles(Android_Theme_Light).textStyleCaption1Medium}>
                                {
                                    timer > 0 ? 'Enter the one time password shared to' + "\n" + '+94717718910' : 
                                    'Oh no,Your time is up. If you have not received the' + "\n" +  
                                    'OTP yet,try resending.or contact our call center for' + "\n" +  'assistence'
                                }
                            </Text>

                        </View>  

                        <View style = {GetSignup_OtpScreenStyles(Android_Theme_Light).middleView}>

                            <CommonInputField
                                value = {""}
                                title = {"OTP"}
                                placeholder = {"Enter Your NIC Number"}
                                onInputChange = {(text) => this.handleOtpChange(text)}
                                icon={Android_Theme_Light.ICON_VERIFIED}
                                inputRef = {this.inputOTP}/>

                            <CommonInputField
                                value        = {""} // Set value to the input field
                                title        = {"OTP"}
                                onInputChange= {this.handleOtpChange}
                                icon         = {Android_Theme_Light.ICON_VERIFIED}
                                inputRef     = {this.inputRef2}
                                nextInputRef = {this.inputRef1}/>

                            <CommonButton
                                type           = '1'
                                title          = 'Submit'
                                borderRadius   = {35}
                                onPress        = {this.handleNextButtonPress}
                                textSize       = {15}
                                backgroundColor= "#6Dc100"
                                textColor      = 'black'
                                Width       = {"60%"}
                                        />

{timer > 0 && (
            <View style = {GetSignup_OtpScreenStyles(Android_Theme_Light).timerOuter}>
              <Text style = {GetSignup_OtpScreenStyles(Android_Theme_Light).timer}>
                {timer}
              </Text>
            </View>
          )}
          {timer === 0 && (
              
              <CommonButton
                type        = '0'
                title       = "Resend the OTP"
                textColor   = 'black'
                borderRadius= {15}
                onPress     = {this.handleLoginPress}
                textSize    = {15}
                Width    = {"80%"}
              />
        
        
          )}

                        </View>

                    </KeyboardAwareScrollView>

                    <View style = {GetCommonStyles(Android_Theme_Light).bottombuttonContainer}>

                    <CommonButton
            type        = '1'
            title       = "Go Back"
            borderRadius= {35}
            width       = {"60%"}
            onPress = {this.handleLeftButtonPress}
            textSize= {20}
          />

                    </View>

                    
     

  
  </View>
    
</SafeAreaView>

);
}
}

export default Signup_OtpScreen;
