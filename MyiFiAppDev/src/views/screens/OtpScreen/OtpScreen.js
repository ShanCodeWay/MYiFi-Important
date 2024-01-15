import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../../src/views/components/Common/CommonButton';
import CommonInputField from '../../../../src/views/components/Common/CommonInputField';
//import Colors from '../../../styles/Colors';
import Icon_Verfied from '../../../assets/icons/Icon_Verfied';
import OtpScreenStylestyles from '../../../../src/views/screens/OtpScreen/OtpScreenStyles';
import TitleBar from '../../components/Common/TitleBar';
import Icon_navLeft from '../../../assets/icons/Icon_navLeft.svg'
//import Fonts from '../../../assets/fonts/Poppins-ExtraBold';



class OtpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      timer: 5,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timer } = this.state;
      if (timer > 0) {
        this.setState({ timer: timer - 1 });
      }
       try {
    } catch (Error) {
      console.log("[OtpScreen] -  componentDidMount - Error ", Error);
    }
    }, 1000);
    
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
    try {
    } catch (Error) {
      console.log("[OtpScreen] - componentWillUnmount - Error ", Error);
    }

  }
  handleOtpChange = (text) => {
    this.setState({ otp: text });
    try {
    } catch (Error) {
      console.log("[OtpScreen] - handleOtpChange - Error ", Error);
    }
  };

  handleLoginPress = () => {
    console.log('Login button pressed!');
    try {
    } catch (Error) {
      console.log("[OtpScreen] - handleLoginPress - Error ", Error);
    }
  };

  handleResend = () => {
    console.log('Resend button pressed!');
    try {
    } catch (Error) {
      console.log("[OtpScreen] - handleResend - Error ", Error);
    }
  };

  render() {
    const { otp, timer } = this.state;

    return (
      <SafeAreaView style={OtpScreenStylestyles.container}>
    <TitleBar
         nameLeft={Icon_navLeft}
       
         
         />  


        <View style={OtpScreenStylestyles.parientView}>
             <View style={OtpScreenStylestyles.upperView}>
               <Text style={OtpScreenStylestyles.textOtp}>OTP</Text>
               <Text style={OtpScreenStylestyles.enterText}>
           {timer > 0
            ? 'Enter the one-time password shared to\n+94717718910'
            : 'Oh no,Your time is up. If you have not received the\nOTP yeet,try resending.or contact our call center for\n assistence'}
              </Text>
             </View>


        <View style={OtpScreenStylestyles.middleView}>
            
        <CommonInputField
            value={""} // Set value to the input field
            title={"OTP"}
          
            onInputChange={this.handleOtpChange}
            icon={Icon_Verfied}               
            inputRef={this.inputRef2}    
            nextInputRef={this.inputRef1} 
          
            />
            
         <Button
                type='1'
                title='Submit'
                borderRadius={35}
                onPress={this.handleLoginPress}
                textSize={15}
                backgroundColor="#6Dc100"
                textColor ='black' 
                btnWidth={"95%"}      
             
              />
             
      

            {timer > 0 && (
              <View style={OtpScreenStylestyles.timerOuter}>
                <Text style={OtpScreenStylestyles.timer}>{timer}</Text>
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
        <View style={OtpScreenStylestyles. bottomView} >
           
        <Button
                type='1'
                title="Go Back"
                borderRadius={35}
                onPress={this.handleLoginPress}
                textSize={15}
                btnWidth={"100%"}      
             
                
                
              />
         
          
        </View>

        </View>
     
          
        
      </SafeAreaView>
    );
  }
}


export default OtpScreen;
