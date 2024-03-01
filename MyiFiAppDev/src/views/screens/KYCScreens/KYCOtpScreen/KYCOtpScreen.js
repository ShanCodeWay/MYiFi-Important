import React, { Component } from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import PaginationIndicator from "../../../components/Common/PageIndicator/PageIndicator";

import Index from "../../../navigators/NavIndex";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import Colors from "../../../../styles/Colors";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { GetKYCOtpScreenStyles } from "./KYCOtpScreenStyles";

import {
  Android_Theme_Light,
  Android_Theme_Dark,
} from "../../../../styles/Themes";


class KYCOtpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollEnabled: false,
      otp: "",
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
    //    StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
      } catch (Error) {
        console.log("[KYCOtpScreen] - componentDidMount - Error ", Error);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    try {
    } catch (Error) {
      console.log("[KYCOtpScreen] - componentWillUnmount - Error ", Error);
    }
  }

  handleOtpChange = (text) => {
    this.setState({ otp: text });
    try {
    } catch (Error) {
      console.log("[KYCOtpScreen] - handleOtpChange - Error ", Error);
    }
  };

  handleResend = () => {
    console.log("Resend button pressed!");
    try {
    } catch (Error) {
      console.log("[KYCOtpScreen] - handleResend - Error ", Error);
    }
  };

  handleNextButtonPress = () => {
    try {
      this.props.navigation.navigate("KYCSuccessfulScreen");
      console.log("Next button pressed to Navigate to KYCSuccessfulScreen");
    } catch (error) {
      console.log("[KYCOtpScreen] - Next_Button - Error ", error);
    }
  };

  handleLeftButtonPress = () => {
    try {
      this.props.navigation.navigate("KYC6Screen");
      console.log("left pressed to Navigate to SignupScreen2");
    } catch (error) {
      console.log("[KYCOtpScreen] - left_Button - Error ", error);
    }
  };

  handlePasswordInputChange = (text) => {};

  render() {
    const { otp, timer } = this.state;
    return (
      <>
        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
          <MainTitleBar
            IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
            TitleText={""}
            TextAlign={"left"}
            IconRight={null}
            onPressLeft={this.handleLeftButtonPress}
          />

          {/* <PaginationIndicator text="Step 3/3" pageNumber={3} /> */}

          <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={50}
            enableOnAndroid={true}
            enableAutomaticScroll={false}
            keyboardOpeningTime={300}
            scrollToPosition={{ x: 0, y: 0, animated: true }}
            onKeyboardDidShow={(frames) => {}}
            onKeyboardDidHide={(frames) => {}}
          >
            <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
              <View style={GetKYCOtpScreenStyles(Android_Theme_Light).topView}>
                <View
                  style={GetKYCOtpScreenStyles(Android_Theme_Light).titleView}
                >
                  <Text
                    style={
                      GetKYCOtpScreenStyles(Android_Theme_Light).mainTitle
                    }
                  >
                    {"OTP"}
                  </Text>
                </View>
                <Text
                  style={
                    GetKYCOtpScreenStyles(Android_Theme_Light).secondTitle
                  }
                >
                  {timer > 0
                    ? "Enter the one-time password shared to +94717718910"
                    : "Oh no,Your time is up. If you have not received the OTP yeet,try resending.or contact our call center for assistence"}
                </Text>
              </View>
              <View
                style={GetKYCOtpScreenStyles(Android_Theme_Light).middleView}
              >
                <CommonInputField
                  value={""} // Set value to the input field
                  title={"OTP"}
                  onInputChange={this.handleOtpChange}
                  icon={Android_Theme_Light.ICON_VERIFIED}
                  inputRef={this.inputRef2}
                  nextInputRef={this.inputRef1}
                />
                <View style={{ height: 10 }}></View>

                <CommonButton
                  type="1"
                  title="Submit"
                  borderRadius={35}
                  onPress={this.handleNextButtonPress}
                  textSize={15}
                  backgroundColor= {Android_Theme_Light.DARK_GREEN_COLOR}
                  textColor={Android_Theme_Light.DEEP_BLACK_COLOR}
                  width={"90%"}
                />

                {timer > 0 && (
                  <View
                    style={
                        GetKYCOtpScreenStyles(Android_Theme_Light).timerOuter
                    }
                  >
                    <Text
                      style={GetKYCOtpScreenStyles(Android_Theme_Light).timer}
                    >
                      {timer}
                    </Text>
                  </View>
                )}
                <View style={{ height: 5 }}></View>
                {timer === 0 && (
                  <CommonButton
                    type="0"
                    title="Resend the OTP"
                    textColor="black"
                    borderRadius={15}
                    onPress={this.handleLoginPress}
                    textSize={15}
                    width={"90%"}
                  />
                )}
              </View>

              <View
                style={GetKYCOtpScreenStyles(Android_Theme_Light).bottomView}
              >
                <CommonButton
                  type="1"
                  title="Go Back"
                  borderRadius={35}
                  width={"90%"}
                  onPress={this.handleLeftButtonPress}
                  textSize={20}
                />
                <View
                  style={GetKYCOtpScreenStyles(Android_Theme_Light).logoIcon}
                ></View>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default KYCOtpScreen;
