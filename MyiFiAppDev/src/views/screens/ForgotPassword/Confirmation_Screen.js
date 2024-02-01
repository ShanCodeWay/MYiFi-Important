import React, { Component } from "react";
import { Android_Theme_Light } from "../../../styles/Themes";
import GetConfirmation_ScreenStyles from "./Confirmation_ScreenStyles";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import { View, Text } from "react-native";

import MainTitleBar from "../../components/Common/TitleBar/MainTitleBar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CommonInputField from "../../components/Common/TextInput/CommonInputField";
import SelectDropDown from "../../components/Common/Dropdown/SelectDropDown";
import CommonButton from "../../components/Common/MainButton/CommonButton";

//Done by Randima 2024/02//01
class Confirmation_Screen extends Component {
  constructor(props) {
    super(props);
    this.OtpInputRef = React.createRef();
    this.NewPasswordInputRef = React.createRef();
    this.ConfirmPaswordInputRef = React.createRef();

    this.state = {
      ConfirmOtp: "",
      NewPassword: "",
      ConfirmPasword: "",
    };
  }

  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[Confirmation_Screen] - componentDidMount() EX: " + Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log(
        "[Confirmation_Screen] - componentWillUnmount() EX: " + Error
      );
    }
  }

  handleOtpInputChange = (ConfirmOtp) => {
    try {
      console.log("ConfirmOtp", ConfirmOtp);
    } catch (Error) {
      console.log(
        "[Confirmation_Screen] -  handleOtpInputChange() EX: " + Error
      );
    }
  };

  handleNewPasswordInputChange = (NewPassword) => {
    try {
      //this.setState({ NewPassword });
      console.log("SelectedQuestion", NewPassword);
    } catch (Error) {
      console.log(
        "[Confirmation_Screen] -  handleNewPasswordInputChange() EX: " + Error
      );
    }
  };

  handleConfirmPaswordInputChange = (ConfirmPasword) => {
    try {
      //this.setState({Answer });
      console.log("Answer", ConfirmPasword);
    } catch (Error) {
      console.log(
        "[Confirmation_Screen] -  handleConfirmPaswordInputChange() EX: " +
          Error
      );
    }
  };

  OnBackButtonPress = () => {
    try {
      this.props.navigation.navigate("ForgotPasswordScreen");
    } catch (Error) {
      console.log("[Confirmation_Screen] - OnBackButtonPress - Error ", Error);
    }
  };

  handleNextButtonPress = () => {
    try {
      this.props.navigation.navigate("Success_Screen");
      console.log("button pressed to navigate to ");
    } catch (error) {
      console.log("[Confirmation_Screen] - Next_Button - Error ", error);
    }
  };

  render() {
    return (
      <View style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <MainTitleBar
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          TitleText={""}
          TextAlign={"left"}
          IconRight={null}
          onPressLeft={() => this.OnBackButtonPress()}
        />

        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always"
            behavior="padding"
            enableAutomaticScroll={true}
            contentContainerStyle={
              GetCommonStyles(Android_Theme_Light).keyboardAwareView
            }
          >
            {/* Title Text */}
            <View
              style={GetCommonStyles(Android_Theme_Light).topTitleContainer}
            >
              <Text
                style={GetCommonStyles(Android_Theme_Light).textStyleH1Medium}
              >
                {"Forgot Password Confirmation"}
              </Text>
            </View>

            {/* Middle Container */}
            <View
              style={
                GetConfirmation_ScreenStyles(Android_Theme_Light)
                  .middleContainer
              }
            >
              {/* Otp Number */}
              <CommonInputField
                value={""}
                title={"OTP"}
                placeholder={"Enter OTP"}
                onInputChange={this.handleOtpInputChange}
                icon={Android_Theme_Light.ICON_VERIFIED}
                inputRef={this.OtpInputRef}
                nextInputRef={this.NewPasswordInputRef}
                type={'numeric'}
              />

              {/* Gap */}
              <View style={{ height: 20 }} />

              {/* New Password */}
              <CommonInputField
                value={""}
                title={"New Password"}
                placeholder={"Enter Your New Password"}
                isSecureText={true}
                onInputChange={this.handleNewPasswordInputChange}
                icon={Android_Theme_Light.ICON_VIEW_PASSWORD}
                inputRef={this.NewPasswordInputRef}
                nextInputRef={this.ConfirmPaswordInputRef}
              />

              {/* Gap */}
              <View style={{ height: 20 }} />

              {/* Confirm Password */}
              <CommonInputField
                value={""}
                title={"Confirm New Password"}
                placeholder={"Confirm Your New Password"}
                isSecureText={true}
                onInputChange={this.handleConfirmPaswordInputChange}
                icon={Android_Theme_Light.ICON_VIEW_PASSWORD}
                inputRef={this.ConfirmPaswordInputRef}
              />

              {/* Gap */}
              <View style={{ height: 30 }} />

              {/* Next Button */}
              <CommonButton
                type={"1"}
                width={"60%"}
                title={"Next"}
                fontFamily={Android_Theme_Light.POPPINS_REGULAR}
                textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
                textColor={Android_Theme_Light.WHITE_COLOR}
                backgroundColor={Android_Theme_Light.BLUE_COLOR}
                onPress={this.handleNextButtonPress}
              />
            </View>
          </KeyboardAwareScrollView>
          
        </View>
      </View>
    );
  }
}

export default Confirmation_Screen;
