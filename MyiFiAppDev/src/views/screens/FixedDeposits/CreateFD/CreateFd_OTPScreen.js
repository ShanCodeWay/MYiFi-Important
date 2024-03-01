import React, { Component } from "react";
import { View, Text, SafeAreaView,  } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import OTPTimer from "../../../components/Common/OTPTimer/OTPTimer";
import Index from "../../../navigators/NavIndex";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetCreateFd_OTPScreenStyles from "./CreateFd_OTPScreenStyles";

import { Android_Theme_Light } from "../../../../styles/Themes";

class CreateFd_OTPScreen extends Component {
  constructor(props) {
    super(props);

    this.inputOTP = React.createRef();

    this.state = {
      timeout: false,
    };
  }

  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[CreateFd_OTPScreen] - componentDidMount - Ex: ", Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[CreateFd_OTPScreen] - componentWillUnmount - Ex: ", Error);
    }
  }

  handleOtpChange = (text) => {
    try {
      this.setState({ otp: text });
      console.log("handleOtpChange text:", text);
    } catch (Error) {
      console.log("[CreateFd_OTPScreen] - handleOtpChange - Ex: ", Error);
    }
  };

  handlePasswordInputChange = (text) => {
    try {
    } catch (error) {
      console.log(
        "[CreateFd_OTPScreen] - handlePasswordInputChange - Ex: ",
        error
      );
    }
  };

  OnTimerTick(seconds, minutes) {
    try {
    } catch (error) {
      console.log("[CreateFd_OTPScreen] - OnTimerTick - Ex: ", error);
    }
  }

  onTimerExpired(seconds, minutes) {
    try {
      console.log("seconds--", seconds, "--minutes--", minutes);
      this.setState({ timeout: true });
    } catch (error) {
      console.log("[CreateFd_OTPScreen] - onTimerExpired() - Ex: ", error);
    }
  }

  OnPress_SubmitButton = () => {
    try {
      this.props.navigation.replace(Index.FD_CREATE_SUCCESS_SCREEN, {
        sucess: true,
        amount: this.props.route.params.amount,
      });
 
    } catch (error) {
      console.log("[CreateFd_OTPScreen] - OnPress_SubmitButton - Ex: ", error);
    }
  };

  OnPress_ResendButton() {
    try {
      this.setState({ timeout: false });
    } catch (error) {
      console.log("[CreateFd_OTPScreen] - OnPress_ResendButton - Ex: ", error);
    }
  }

  OnPress_BackButton = () => {
    try {
      this.props.navigation.replace(Index.FD_SCREEN_1);
      console.log("left pressed to Navigate to FD Screen");
    } catch (error) {
      console.log("[CreateFd_OTPScreen] - OnPress_BackButton - Ex: ", error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <MainTitleBar
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          onPressLeft={() => this.OnPress_BackButton()}
        />



        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always"
            behavior="padding"
            //keyboardShouldPersistTaps="handled"
            enableAutomaticScroll={false}
            enableOnAndroid={true}
          
            contentContainerStyle={
              GetCommonStyles(Android_Theme_Light).keyboardAwareView
            }
          >
            <View
              style={GetCommonStyles(Android_Theme_Light).topTitleContainer}
            >
              <Text
                style={GetCommonStyles(Android_Theme_Light).textStyleH1Medium}
              >
                OTP
              </Text>

              <Text
                style={
                  GetCommonStyles(Android_Theme_Light).textStyleCaption1Medium
                }
              >
                {!this.state.timeout
                  ? "Enter the one time password shared to" +
                    "\n" +
                    "+94717718910"
                  : "Oh no,Your time is up. If you have not received the" +
                    "\n" +
                    "OTP yet,try resending.or contact our call center for" +
                    "\n" +
                    "assistence"}
              </Text>
            </View>

            <View
              style={
                GetCreateFd_OTPScreenStyles(Android_Theme_Light).middleView
              }
            >
              {/*OTP Field */}
              <CommonInputField
                value={""}
                title={"OTP"}
                placeholder={"Enter OTP"}
                onInputChange={(text) => this.handleOtpChange(text)}
                icon={Android_Theme_Light.ICON_VERIFIED}
                inputRef={this.inputOTP}
              />

              {/* Gap */}
              <View style={{ height: 20 }} />

              {!this.state.timeout ? (
                <>
                  {/*Submit Button*/}
                  <CommonButton
                    type="1"
                    //width={"60%"}
                    title="Submit"
                    onPress={this.OnPress_SubmitButton}
                    fontFamily={Android_Theme_Light.POPPINS_SEMIBOLD}
                    textSize={Android_Theme_Light.FONT_SIZE_15}
                    textColor={Android_Theme_Light.BLACK_COLOR}
                    backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
                  />

                  {/* Gap */}
                  <View style={{ height: 15 }} />
                </>
              ) : null}

              {!this.state.timeout ? (
                <OTPTimer
                  width={150}
                  onTimerTick={this.OnTimerTick.bind(this)}
                  //OnTimer = { ref => (this.OnTimer = ref) }
                  onTimerExpired={this.onTimerExpired.bind(this)}
                />
              ) : (
                <CommonButton
                  type={"0"}
                  width={"90%"}
                  title={"Resend the OTP"}
                  height={50}
                  //backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
                  //textColor={Android_Theme_Light.DEEP_BLACK_COLOR}
                  fontFamily={Android_Theme_Light.POPPINS_REGULAR}
                  textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
                  textColor={Android_Theme_Light.DEEP_BLACK_COLOR}
                  //textAlign = {"flex-start"}
                  onPress={this.OnPress_ResendButton.bind(this)}
                  //leftIcon = {Android_Theme_Light.ICON_LOCK}
                  RightIcon={Android_Theme_Light.ICON_FORWARD}
                />
              )}
            </View>
          </KeyboardAwareScrollView>

          <View
            style={GetCommonStyles(Android_Theme_Light).bottombuttonContainer}
          >
            {/* Go Back Button */}
            <CommonButton
              type={"1"}
              width={"50%"}
              title={"Go Back"}
              fontFamily={Android_Theme_Light.POPPINS_REGULAR}
              textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
              textColor={Android_Theme_Light.BACKGROUND_COLOR}
              backgroundColor={Android_Theme_Light.BLUE_COLOR}
              onPress={this.OnPress_BackButton}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default CreateFd_OTPScreen;
