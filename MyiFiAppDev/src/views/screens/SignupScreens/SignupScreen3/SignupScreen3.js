  import React, { Component } from "react";
  import { View, Text, SafeAreaView, StatusBar} from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import CommonButton from "../../../components/Common/MainButton/CommonButton";
  import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
  import PaginationIndicator from "../../../components/Common/PageIndicator/PageIndicator";
 
  import Index from "../../../../configs/Index";
  import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
  import Colors from "../../../../styles/Colors";
  import { GetCommonStyles } from "../../../../styles/CommonStyles";
  import {GetSignupScreenStyles3} from "./SignupScreen3Styles";

  import {
    Android_Theme_Light,
    Android_Theme_Dark,
  } from "../../../../styles/Themes";


  //Done by: Darshana 24/01/02

  class SignupScreen3 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        scrollEnabled: false,
        otp          : '',
        timer        : 5,
      };
    }
    
    
     componentDidMount() {
      this.interval = setInterval(() => {
        const { timer } = this.state;
        if (timer > 0) {
          this.setState({ timer: timer - 1 });
        }
      try {
        
        StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
      } catch (Error) {
        console.log("[SignupScreen3] - componentDidMount - Error ", Error);
      }
    }, 1000);
    }


    componentWillUnmount() {
      clearInterval(this.interval);
      try {
      } catch (Error) {
        console.log("[SignupScreen3] - componentWillUnmount - Error ", Error);
      }
    }

    handleOtpChange = (text) => {
      this.setState({ otp: text });
      try {
      } catch (Error) {
        console.log("[OtpScreen] - handleOtpChange - Error ", Error);
      }
    };

    handleResend = () => {
      console.log('Resend button pressed!');
      try {
      } catch (Error) {
        console.log("[OtpScreen] - handleResend - Error ", Error);
      }
    };

    
    handleNextButtonPress = () => {
      try { 
      this.props.navigation.replace(Index.SIGNUP_4); 
      console.log("Next button pressed to Navigate to SignupScreen4");}
      catch (error)
      { console.log("[SignupScreen3] - Next_Button - Error ",error); }
    };

    handleLeftButtonPress = () => {
      try{
        this.props.navigation.replace(Index.SIGNUP_2); 
      console.log("left pressed to Navigate to SignupScreen2");
        }
      catch (error){ console.log("[SignupScreen3] - left_Button - Error ",error);}
      
    };


    handlePasswordInputChange = (text) => {
      
    }

    render() {
      const { otp, timer } = this.state;
      return (
 
        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
     
     <MainTitleBar
       IconLeft = {Android_Theme_Light.ICON_BACK_ARROW}
       onPressLeft   = {()=>this.OnBackButtonPress() }/>
       
     <PageIndicator
       totalNoOfPages = {3}
       pageNumber = {3}/> 
   
     {/*<KeyboardAwareScrollView
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
       >*/}

     

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
          </View>
          <Text style= {GetSignupScreenStyles3(Android_Theme_Light).secondTitle}>
          {timer > 0
            ? 'Enter the one-time password shared to +94717718910'
            : 'Oh no,Your time is up. If you have not received the OTP yeet,try resending.or contact our call center for assistence'}
          </Text>
       
  <View style = {{height:20}}/>
          <View style = {GetSignupScreenStyles3(Android_Theme_Light).middleView}>
          <View style = {{height:20}}/>
          <CommonInputField
            value        = {""} // Set value to the input field
            title        = {"OTP"}
            onInputChange= {this.handleOtpChange}
            icon         = {Android_Theme_Light.ICON_VERIFIED}
            inputRef     = {this.inputRef2}
            nextInputRef = {this.inputRef1}
        />
        <View style = {{height:20}}/>
            
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
             
             <View style = {{height:20}}/>
      

            {timer > 0 && (
              <View style = {GetSignupScreenStyles3(Android_Theme_Light).timerOuter}>
                <Text style = {GetSignupScreenStyles3(Android_Theme_Light).timer}>
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

export default SignupScreen3;
