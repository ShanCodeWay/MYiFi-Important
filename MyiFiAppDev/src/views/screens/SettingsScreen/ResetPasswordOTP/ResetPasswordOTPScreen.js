import React, { Component } from "react";
import { View, Text, SafeAreaView, StatusBar} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import PageIndicator from "../../../components/Common/PageIndicator/PageIndicator";
import OTPTimer from "../../../components/Common/OTPTimer/OTPTimer";

import Index from "../../../../configs/Index";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import Colors from "../../../../styles/Colors";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetResetPasswordOTPScreenStyles from "./ResetPasswordOTPScreenStyles";

import {Android_Theme_Light} from "../../../../styles/Themes";
//Done by: Darshana 02/02/2024
class ResetPasswordOTPScreen extends Component {
    
    constructor(props) {
        super(props);

        this.inputOTP = React.createRef();
    
        this.state = {
            timeout:false,
        };
    }
    
    componentDidMount() {

        try {
      
            
        } 
        catch (Error) {
            console.log("[ResetPasswordOTPScreen] - componentDidMount - Ex: ", Error);
        }
 
    }

    componentWillUnmount() {
    
        try {

          
        } 
        catch (Error) {
            console.log("[ResetPasswordOTPScreen] - componentWillUnmount - Ex: ", Error);
        }
    }

    handleOtpChange = (text) => {
        
        try {

            this.setState({ otp: text });
            console.log('handleOtpChange text:',text)
        } 
        catch (Error) {
            console.log("[ResetPasswordOTPScreen] - handleOtpChange - Ex: ", Error);
        }
    };

    handlePasswordInputChange = (text) => {
        try{

        }
        catch(error){ 
            console.log("[ResetPasswordOTPScreen] - handlePasswordInputChange - Ex: ",error);
        }
    }

    OnTimerTick(seconds, minutes) {
        try{
           
        }
        catch(error){ 
            console.log("[ResetPasswordOTPScreen] - OnTimerTick - Ex: ",error);
        }
    }

    onTimerExpired(seconds, minutes) {
    
        console.log('seconds--',seconds, '--minutes--',minutes)
        this.setState({ timeout: true })
    }

    OnPress_SubmitButton = () => {
        try { 
            this.props.navigation.replace(Index.RESTSUC); 
            console.log("Next button pressed to Navigate to SignupScreen4");
        }
        catch (error){
            console.log("[ResetPasswordOTPScreen] - OnPress_SubmitButton - Ex: ",error);
        }
    };

    OnPress_ResendButton(){
        try {

            this.setState({ timeout: false })

        }
        catch(error){
            console.log("[ResetPasswordOTPScreen] - OnPress_ResendButton - Ex: ",error);
        }
    }

    OnPress_BackButton = () => {
        try{
            this.props.navigation.replace(Index.SETTINGS_SCREEN_1); 
            console.log("left pressed to Navigate to SignupScreen2");
        }
        catch(error){ 
            console.log("[ResetPasswordOTPScreen] - OnPress_BackButton - Ex: ",error);
        }
    
    };

    render() {
            
        return (

            <SafeAreaView style = {GetCommonStyles(Android_Theme_Light).safeAreaView}>
   
                <MainTitleBar
                    IconLeft = {Android_Theme_Light.ICON_BACK_ARROW}
                    onPressLeft = {()=>this.OnPress_BackButton() }/>
     
               
                    
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
                                    !this.state.timeout ? 
                                    
                                        'Enter the one time password shared to' + "\n" + '+94717718910' 
                                    : 
                                        'Oh no,Your time is up. If you have not received the' + "\n" +  
                                        'OTP yet,try resending.or contact our call center for' + "\n" +  'assistence'
                                }
                            </Text>

                        </View>  

                        <View style = {GetResetPasswordOTPScreenStyles(Android_Theme_Light).middleView}>

                            {/*OTP Field */}
                            <CommonInputField
                                value = {""}
                                title = {"OTP"}
                                placeholder = {"Enter OTP"}
                                onInputChange = {(text) => this.handleOtpChange(text)}
                                icon={Android_Theme_Light.ICON_VERIFIED}
                                inputRef = {this.inputOTP}/>

                            {/* Gap */}
                            <View style = {{height:20}}/>

                            {
                                !this.state.timeout ? 

                                <>

                                    {/*Submit Button*/}
                                    <CommonButton
                                        type = '1'
                                        //width={"60%"}
                                        title = 'Submit'
                                        onPress = {this.OnPress_SubmitButton}
                                        fontFamily = {Android_Theme_Light.POPPINS_SEMIBOLD}
                                        textSize = {Android_Theme_Light.FONT_SIZE_15}
                                        textColor = {Android_Theme_Light.BLACK_COLOR}
                                        backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}/>

                                    {/* Gap */}
                                    <View style = {{height:15}}/>
                                
                                </> : null
                            }

                            { 
                                !this.state.timeout ?

                                    <OTPTimer
                                        width = {150}
                                        onTimerTick = { this.OnTimerTick.bind(this) }
                                        //OnTimer = { ref => (this.OnTimer = ref) }
                                        onTimerExpired = { this.onTimerExpired.bind(this) }
                                    /> 
                                :
                               
                                    <CommonButton
                                        type={"0"}
                                        width={"90%"}
                                        title={"Resend the OTP"}
                                        height={50}
                                        //backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
                                        //textColor={Android_Theme_Light.DEEP_BLACK_COLOR}
                                        fontFamily = {Android_Theme_Light.POPPINS_REGULAR}
                                        textSize = {Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
                                        textColor = {Android_Theme_Light.DEEP_BLACK_COLOR}
                                        //textAlign = {"flex-start"}
                                        onPress = {this.OnPress_ResendButton.bind(this)}
                                        //leftIcon = {Android_Theme_Light.ICON_LOCK}
                                        RightIcon = {Android_Theme_Light.ICON_FORWARD}/> 
        
                            }

                        </View>

                    </KeyboardAwareScrollView>

                    <View style = {GetCommonStyles(Android_Theme_Light).bottombuttonContainer}>

                        {/* Go Back Button */}
                        <CommonButton
                            type={"1"}
                            width={"50%"}
                            title={"Go Back"}
                            fontFamily = {Android_Theme_Light.POPPINS_REGULAR}
                            textSize = {Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
                            textColor = {Android_Theme_Light.BACKGROUND_COLOR}
                            backgroundColor={Android_Theme_Light.BLUE_COLOR}
                            onPress={this.OnPress_BackButton}/>

                    </View>

                </View>
    
            </SafeAreaView>

        );
    }
}

export default ResetPasswordOTPScreen;
