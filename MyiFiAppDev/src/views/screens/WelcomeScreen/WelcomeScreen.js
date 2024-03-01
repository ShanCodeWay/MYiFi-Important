// Splash.js
import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import MainTitleBar from "../../components/Common/TitleBar/MainTitleBar";
import GetWelcomeScreenStyles from "./WelcomeScreenStyles";
import CommonButton from "../../components/Common/MainButton/CommonButton";
import { Android_Theme_Light } from "../../../styles/Themes";
import SelectDropDown from "../../components/Common/Dropdown/SelectDropDown";

// done by: Randima 2024/01/29
class WelcomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: null,
    };
  }

  onPresKycSignUp = () => {
    try {
      this.props.navigation.navigate("KYC1Screen");
    } catch (Error) {
      console.log("[WelcomeScreen] - OnPressSignIn Ex: ", Error);
    }
  };

  onPressSignIn = () => {
    try {
      this.props.navigation.navigate("LoginScreen");
      console.log("button pressed to navigate to LoginScreen");
    } catch (error) {
      console.log("[WelcomeScreen] - Next_Button - Error ", error);
    }
  };

  handleLanguageSelection = (selectedLanguage) => {
    try {
      this.setState({ selectedLanguage });
    } catch (Error) {
      console.log("[WelcomeScreen] - handleLanguageSelection Ex: ", Error);
    }
  };

  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[WelcomeScreen] - componentDidMount() EX: " + Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[WelcomeScreen] - componentWillUnmount() EX: " + Error);
    }
  }

  OnPress_BackButton = () => {
    try {
      console.log("back button pressed");
      Alert.alert(
        "Exit App",
        "Do you want to exit from the app?",
        [
          {
            text: "No",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              console.log("Yes Pressed");
            },
          },
        ],
        { cancelable: false }
      );
    } catch (Error) {
      console.log("[KYC2Screen] - OnPress_BackButton - Error ", Error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        {/* MainTitleBar */}
        <MainTitleBar
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          TitleText={null}
          TextAlign={"left"}
          IconRight={null}
          onPressLeft={() => this.OnPress_BackButton()}
        />
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          {/*upperContainer*/}
          <View
            style={GetWelcomeScreenStyles(Android_Theme_Light).upperContainer}
          >
            <Text
              style={[GetWelcomeScreenStyles(Android_Theme_Light).textTitle]}
            >
              {"Welcome to"}
            </Text>
            <Android_Theme_Light.ICON_MI_LOGO_DESCRIPTION_ANDROID />
          </View>

          {/* bottomContainer*/}
          <View
            style={GetWelcomeScreenStyles(Android_Theme_Light).bottomContainer}
          >
            <SelectDropDown
              width={"100%"}
              data={[
                { label: "English", value: "English" },
                { label: "සිංහල", value: "සිංහල" },
                { label: "தமிழ்", value: "தமிழ்" },
              ]}
              title={"Preferred Language"}
              placeholder={""}
              value={this.state.selectedLanguage || "English"}
              label={this.state.selectedLanguage || "English"}
              onRef={(ref) => (this.parentReferenceItem = ref)}
              parentReferenceItem={this.handleLanguageSelection}
            />

            {/* Gap */}
            <View style={{ height: 40 }}></View>

            {/* Create a KYC profile Button */}
            <CommonButton
              type={"1"}
              width={"100%"}
              title={"Create a KYC profile"}
              fontFamily={Android_Theme_Light.POPPINS_SEMIBOLD}
              textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
              textColor={Android_Theme_Light.DEEP_BLACK_COLOR}
              backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
              onPress={this.onPresKycSignUp}
            />

            {/* Gap */}
            <View style={{ height: 10 }}></View>

            {/* I have an account Button */}
            <CommonButton
              type={"1"}
              width={"50%"}
              title={"I have an account"}
              fontFamily={Android_Theme_Light.POPPINS_REGULAR}
              textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
              textColor={Android_Theme_Light.WHITE_COLOR}
              backgroundColor={Android_Theme_Light.BLUE_COLOR}
              onPress={this.onPressSignIn}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default WelcomeScreen;
