import React, { Component } from "react";
import {
  View,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Common/MainButton/CommonButton";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import Icon_Verfied from "../../../../assets/icons/android/Icon_Verfied.svg";
import {GetFundTransferOTPScreenStyles} from "./FundTransferOTPScreenStyles";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import Index from "../../../../configs/Index";

import { GetCommonStyles } from "../../../../styles/CommonStyles";

import {
  Android_Theme_Light,
  Android_Theme_Dark,
} from "../../../../styles/Themes";


class FundTransferOTPScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

      otp: "",
      timer: 5,
      sucess: true,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timer } = this.state;
      if (timer > 0) {
        this.setState({ timer: timer - 1 });
      }
      try {
      } catch (Error) {
        console.log("[FundTransferOTPScreen] -  componentDidMount - Error ", Error);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    try {
    } catch (Error) {
      console.log("[FundTransferOTPScreen] - componentWillUnmount - Error ", Error);
    }
  }
  handleLeftButtonPress = () => {
    try{
      this.props.navigation.replace(Index.FUND_1); 
    console.log("left pressed to navigate FundTransferScreen");
    }
    catch (error){ console.log("[FundTransferOTPScreen] - left_Button - Error ",error);}
    
  };



  handleOtpChange = (text) => {
    this.setState({ otp: text });
    try {
    } catch (Error) {
      console.log("[FundTransferOTPScreen] - handleOtpChange - Error ", Error);
    }
  };

  handleSubmit = () => {
    try { 
    const sucess = true;
    this.props.navigation.replace(Index.TRS_1,{sucess}); 
    console.log("Next button pressed to Navigate to FundTransfer SucessScreen");}
    catch (error)
    { console.log("[FundTransferOTPScreen] - Next_Button - Error ",error); }
  };
  handleResend = () => {
    this.props.navigation.replace(Index.FUND_OTP); 
    console.log("Resend button pressed!");
    try {
    } catch (Error) {
      console.log("[FundTransferOTPScreen] - handleResend - Error ", Error);
    }
  };

  render() {
    const { otp, timer } = this.state;

    return ( 
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>

            <MainTitleBar
              IconLeft    = {Android_Theme_Light.ICON_BACK_ARROW}
              TitleText   = {"Transfer Money"}
              TextAlign   = {'left'}
              IconRight   = {null}
              onPressLeft = {this.handleLeftButtonPress }/>

        <View style={GetFundTransferOTPScreenStyles(Android_Theme_Light).parientView}>
          <View style={GetFundTransferOTPScreenStyles(Android_Theme_Light).upperView}>
            <Text style={GetFundTransferOTPScreenStyles(Android_Theme_Light).textOtp}>OTP</Text>
            <Text style={GetFundTransferOTPScreenStyles(Android_Theme_Light).enterText}>
              {timer > 0
                ? "Enter the one-time password shared to\n+94717718910"
                : "Oh no,Your time is up. If you have not received the\nOTP yeet,try resending.or contact our call center for\n assistence"}
            </Text>
          </View>

          <View style={GetFundTransferOTPScreenStyles(Android_Theme_Light).middleView}>
            <CommonInputField
              value={""} // Set value to the input field
              title={"OTP"}
              onInputChange={this.handleOtpChange}
              icon={Icon_Verfied}
              inputRef={this.inputRef2}
              nextInputRef={this.inputRef1}
            />

            <Button
              type="1"
              title="Submit"
              borderRadius={35}
              onPress={this.handleSubmit}
              textSize={15}
              backgroundColor="#6Dc100"
              textColor="black"
              Width={"60%"}
            />

            {timer > 0 && (
              <View style={GetFundTransferOTPScreenStyles(Android_Theme_Light).timerOuter}>
                <Text style={GetFundTransferOTPScreenStyles(Android_Theme_Light).timer}>{timer}</Text>
              </View>
            )}
            {timer === 0 && (
              <Button
                type="0"
                title="Resend the OTP"
                textColor="black"
                borderRadius={15}
                onPress={this.handleResend}
                textSize={15}
                Width={"60%"}
              />
            )}
          </View>
          <View style={GetFundTransferOTPScreenStyles(Android_Theme_Light).bottomView}>
            <Button
              type="1"
              title="Go Back"
              borderRadius={35}
              onPress={this.handleLoginPress}
              textSize={15}
              Width={"60%"}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default FundTransferOTPScreen;
