// KYC5Screen.js (KYC details screeen 2)

import { faKeycdn } from "@fortawesome/free-brands-svg-icons";
import React, { Component } from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import { Svg, Circle } from "react-native-svg";
import Colors from "../../../../styles/Colors";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import GetKYC6ScreenStyles from "./KYC6ScreenStyles";
import Icon_angleDown from "../../../../assets/icons/Icon_angleDown.svg";

class KYC6Screen extends Component {
  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[KYC6Screen] - componentDidMount Ex: ", Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[KYC6Screen] - componentWillUnmount Ex: ", Error);
    }
  }

  HandleInputChange = (value) => {
    try {
      console.log("Input value:", value);
    } catch (Error) {
      console.log("[KYC6Screen] - HandleInputChange Ex: ", Error);
    }
  };

  handleNextButtonPress = () => {
    try {
      // this.props.navigation.navigate("KYC4Screen");
      // console.log("button pressed to navigate to KYC4Screen");
    } catch (error) {
      console.log("[KYC6Screen] - Next_Button - Error ", error);
    }
  };

  OnPress_BackButton = () => {
    try {
      console.log("Next button pressed");
      this.props.navigation.navigate("KYC5Screen");
    } catch (Error) {
      console.log("[KYC6Screen] - OnPress_BackButton Ex: ", Error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <MainTitleBar
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          TitleText={"KYC Details"}
          // TextAlign={"center"}
          IconRight={null}
          onPressLeft={() => this.OnPress_BackButton()}
        />

        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <ScrollView>
            <View
              style={
                GetKYC6ScreenStyles(Android_Theme_Light).backgroundContainer
              }
            >
              {/* //Title Text */}
              <View
                style={GetKYC6ScreenStyles(Android_Theme_Light).titleContainer}
              >
                <Text
                  style={GetKYC6ScreenStyles(Android_Theme_Light).titleText}
                >
                  Employment Information
                </Text>
              </View>

              {/* Employment Status */}
              <View
                style={
                  GetKYC6ScreenStyles(Android_Theme_Light)
                    .inputFieldTitleContainer
                }
              >
                <Text
                  style={
                    GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
                  }
                >
                  Employment Status
                </Text>
              </View>
              <CommonInputField
                value={""}
                title={""}
                placeholder={""}
                width={"90%"}
                icon={Android_Theme_Light.ICON_DROPDOWN}
                onInputChange={this.HandleInputChange}
              />

              {/* Occupation */}
              <View
                style={
                  GetKYC6ScreenStyles(Android_Theme_Light)
                    .inputFieldTitleContainer
                }
              >
                <Text
                  style={
                    GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
                  }
                >
                  Occupation
                </Text>
              </View>
              <CommonInputField
                value={""}
                title={""}
                placeholder={""}
                width={"90%"}
                icon={Android_Theme_Light.ICON_DROPDOWN}
                onInputChange={this.HandleInputChange}
              />

              {/* Name of the Employer */}
              <View
                style={
                  GetKYC6ScreenStyles(Android_Theme_Light)
                    .inputFieldTitleContainer
                }
              >
                <Text
                  style={
                    GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
                  }
                >
                  Name of the Employer
                </Text>
              </View>
              <CommonInputField
                value={""}
                title={""}
                placeholder={""}
                width={"90%"}
                onInputChange={this.HandleInputChange}
              />

              {/* Nature of the Business */}
              <View
                style={
                  GetKYC6ScreenStyles(Android_Theme_Light)
                    .inputFieldTitleContainer
                }
              >
                <Text
                  style={
                    GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
                  }
                >
                  Nature of the Business
                </Text>
              </View>
              <CommonInputField
                value={""}
                title={""}
                placeholder={""}
                width={"90%"}
                onInputChange={this.HandleInputChange}
              />

              {/* Average Monthly Income (LKR) */}
              <View
                style={
                  GetKYC6ScreenStyles(Android_Theme_Light)
                    .inputFieldTitleContainer
                }
              >
                <Text
                  style={
                    GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
                  }
                >
                  Average Monthly Income (LKR)
                </Text>
              </View>
              <CommonInputField
                value={""}
                title={""}
                placeholder={""}
                width={"90%"}
                onInputChange={this.HandleInputChange}
              />

              {/* Source of Funds */}
              <View
                style={
                  GetKYC6ScreenStyles(Android_Theme_Light)
                    .inputFieldTitleContainer
                }
              >
                <Text
                  style={
                    GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
                  }
                >
                  Source of Funds
                </Text>
              </View>
              <CommonInputField
                value={""}
                title={""}
                placeholder={""}
                width={"90%"}
                onInputChange={this.HandleInputChange}
              />

              {/* <View style={{ height: 20 }}></View> */}
            </View>
          </ScrollView>

          <CommonButton
            type={"1"} // 0 or 1
            title={"Continue"}
            width={"90%"}
            backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
            onPress={null}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default KYC6Screen;
