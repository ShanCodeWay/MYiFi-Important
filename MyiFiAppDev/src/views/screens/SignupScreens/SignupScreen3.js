  import React, { Component } from "react";
  import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar,Image } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import { TouchableOpacity } from "react-native-gesture-handler";
  import Button from "../../components/Common/CommonButton";
  import { useNavigation } from '@react-navigation/native';
  import TitleBar from "../../components/Common/TitleBar";
  import PaginationIndicator from "../../components/PaginationIndicator";
 
  import Index from "../../../configs/Index";
  import CommonInputField from '../../components/Common/CommonInputField';

  import Icon_Verified from '../../../assets/icons/Icon_Verfied.svg';
  import Icon_Eye from '../../../assets/icons/Icon_Eye.svg';

  import Icon_apple from '../../../assets/icons/Icon_apple.svg';
  import Icon_google from '../../../assets/icons/Icon_google.svg';
  import Icon_navLeft from '../../../assets/icons/Icon_navLeft.svg';
  import Icon_navRight from '../../../assets/icons/Icon_navRight.svg';

  import Colors from "../../../styles/Colors";
  import Fonts from "../../../styles/Fonts";

  import { GetCommonStyles } from "../../../styles/CommonStyles";
  import {GetSignupScreenStyles3} from "./styles/SignupScreen3Styles";

  import {
    Android_Theme_Light,
    Android_Theme_Dark,
  } from "../../../styles/Themes";


  //Done by: Darshana 24/01/02

  class SignupScreen3 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        scrollEnabled: false,
        otp: '',
        timer: 5,
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

        <> 
        
         <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        
        <TitleBar
        
        nameLeft={Icon_navLeft}
        onPressLeft={this.handleLeftButtonPress} 
        
        />
        <PaginationIndicator
          text="Step 3/3"
          pageNumber={3}
          /> 
        
        <KeyboardAwareScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
              extraScrollHeight={50}
              enableOnAndroid={true}
              enableAutomaticScroll={false}
              keyboardOpeningTime={300}
              scrollToPosition={{ x: 0, y: 0, animated: true }}
              onKeyboardDidShow={(frames) => {
                
              }}
              onKeyboardDidHide={(frames) => {
              
              }}
            >

        
          <View style={GetSignupScreenStyles3(Android_Theme_Light).topView} >  
          <View style={GetSignupScreenStyles3(Android_Theme_Light).titleView} > 

          <Text style={GetSignupScreenStyles3(Android_Theme_Light).mainTitle}>OTP</Text>
          </View>
          <Text style={GetSignupScreenStyles3(Android_Theme_Light).secondTitle}>
          {timer > 0
            ? 'Enter the one-time password shared to +94717718910'
            : 'Oh no,Your time is up. If you have not received the OTP yeet,try resending.or contact our call center for assistence'}
          </Text>
  </View>       
   

          <View style={GetSignupScreenStyles3(Android_Theme_Light).middleView}>
        
        <CommonInputField
            value={""} // Set value to the input field
            title={"OTP"}
          
            onInputChange={this.handleOtpChange}
            icon={Icon_Verified}               
            inputRef={this.inputRef2}    
            nextInputRef={this.inputRef1} 
          
            />
            
             <Button
                type='1'
                title='Submit'
                borderRadius={35}
                onPress={this.handleNextButtonPress}
                textSize={15}
                backgroundColor="#6Dc100"
                textColor ='black' 
                btnWidth="80%"      
             
              />
             
      

            {timer > 0 && (
              <View style={GetSignupScreenStyles3(Android_Theme_Light).timerOuter}>
                <Text style={GetSignupScreenStyles3(Android_Theme_Light).timer}>{timer}</Text>
              </View>
            )}
            {timer === 0 && (
                
                <Button
                type='0'
                title="Resend the OTP"
                textColor='black'
                borderRadius={15}
                onPress={this.handleLoginPress}
                textSize={15}
                btnWidth={"80%"}      

                     />
          
          
            )}
   


        </View>
       
         

 
      
  <View style={GetSignupScreenStyles3(Android_Theme_Light).bottomView}>

           <Button
              type='1'
              title="Go Back"
              borderRadius={35}
              btnWidth='30%'

              onPress={this.handleLeftButtonPress}
              textSize={20}
            />
          <View style={GetSignupScreenStyles3(Android_Theme_Light).logoIcon}>

          <Icon_apple style={GetSignupScreenStyles3(Android_Theme_Light).logo} width={25} height={25} />
          


          <Icon_google style={GetSignupScreenStyles3(Android_Theme_Light).logo} width={25} height={25} />
  </View>
            


          </View>
        
        
          
       
        </KeyboardAwareScrollView>
        
        
        </SafeAreaView>

        </>

        
      );
    }
  }

  export default SignupScreen3;
