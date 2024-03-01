import React, { Component } from "react";
import { Android_Theme_Light } from "../../../styles/Themes";
import GetForgotPasswordScreenStyles from "./ForgotPasswordScreenStyles";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import { View, Text } from "react-native";

import MainTitleBar from "../../components/Common/TitleBar/MainTitleBar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CommonInputField from "../../components/Common/TextInput/CommonInputField";
import SelectDropDown from "../../components/Common/Dropdown/SelectDropDown";
import CommonButton from "../../components/Common/MainButton/CommonButton";

//Done by Randima 2024/02//01
class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.UserNameInputRef = React.createRef();
    this.SecurityQuestionInputRef = React.createRef();
    this.SecurityAnswerInputRef = React.createRef();

    this.state = {
      UserName: "",
      Answer: "",
      SelectedQuestion: null,
    };
  }

  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[ForgotPasswordScreen] - componentDidMount() EX: " + Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log(
        "[ForgotPasswordScreen] - componentWillUnmount() EX: " + Error
      );
    }
  }

  handleUserNameInputChange = (UserName) => {
    try {
      console.log("UserName", UserName);
    } catch (Error) {
      console.log(
        "[ForgotPasswordScreen] -  handleUserNameInputChange() EX: " + Error
      );
    }
  };

  handleSecurityQuestionChange = (SelectedQuestion) => {
    try {
      this.setState({ SelectedQuestion });
      console.log("SelectedQuestion", SelectedQuestion);
    } catch (Error) {
      console.log(
        "[ForgotPasswordScreen] -  handleSecurityQuestionChange() EX: " + Error
      );
    }
  };

  handleSecurityAnswerInputChange = (Answer) => {
    try {
      //this.setState({Answer });
      console.log("Answer", Answer);
    } catch (Error) {
      console.log(
        "[ForgotPasswordScreen] -  handleSecurityAnswerInputChange() EX: " +
          Error
      );
    }
  };

  OnBackButtonPress = () => {
    try {
      this.props.navigation.navigate("LoginScreen");
    } catch (Error) {
      console.log("[ForgotPasswordScreen] - OnBackButtonPress - Error ", Error);
    }
  };

  handleNextButtonPress = () => {
    try {
      this.props.navigation.navigate("Confirmation_Screen");
      console.log("button pressed to navigate to Confirmation_Screen");
    } catch (error) {
      console.log("[ForgotPasswordScreen] - Next_Button - Error ", error);
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
                style={GetForgotPasswordScreenStyles(Android_Theme_Light).textStyleH1Medium}
              >
                {"Forgot Password"}
              </Text>
            </View>

            {/* Middle Container */}
            <View
              style={
                GetForgotPasswordScreenStyles(Android_Theme_Light)
                  .middleContainer
              }
            >
              {/* UserName */}
              <CommonInputField
                value={""}
                title={"User Name"}
                placeholder={"Enter Your User Name"}
                onInputChange={this.handleUserNameInputChange}
                icon={Android_Theme_Light.ICON_VERIFIED}
                inputRef={this.UsernameInputRef}
                nextInputRef={this.SecurityQuestionInputRef}
              />

              {/* Gap */}
              <View style={{ height: 20 }} />

              {/* Security Question */}
              <SelectDropDown
                //width={"100%"}
                data={[
                  {
                    label: "WHAT IS YOUR PET NAME",
                    value: "WHAT IS YOUR PET NAME",
                  },
                  {
                    label: "WHAT IS YOUR NICK NAME",
                    value: "WHAT IS YOUR NICK NAME",
                  },
                ]}
                title={"Security Question"}
                placeholder={"Select Security Question"}
                value={this.state.SelectedQuestion}
                label={this.state.SelectedQuestion}
                onRef={(ref) => (this.parentReferenceItem = ref)}
                parentReferenceItem={this.handleSecurityQuestionChange}
                inputRef={this.SecurityQuestionInputRef}
                nextInputRef={this.SecurityAnswerInputRef}
              />

              {/* Gap */}
              <View style={{ height: 20 }} />

              {/* Security Answer */}
              <CommonInputField
                value={""}
                title={"Security Answer"}
                placeholder={"Enter Your Security Answer"}
                isSecureText={true}
                onInputChange={this.handlePasswordInputChange}
                icon={Android_Theme_Light.ICON_VERIFIED}
                inputRef={this.SecurityAnswerInputRef}
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

export default ForgotPasswordScreen;
