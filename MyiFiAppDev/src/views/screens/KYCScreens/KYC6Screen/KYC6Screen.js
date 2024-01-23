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
import CommonSpinner from "../../../components/Common/CommonSpinner";

class KYC6Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //nicNumber: props.nicNumber || "",
      selectedEmploymentStatus: null,
      selectedOccupation: null,
    };
  }
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

  handleInputChange = (value) => {
    try {
      console.log("Input value:", value);
    } catch (Error) {
      console.log("[KYC6Screen] - HandleInputChange Ex: ", Error);
    }
  };

  handleEmploymentStatus = (selectedEmploymentStatus) => {
    try {
      this.setState({ selectedEmploymentStatus });
    } catch (Error) {
      console.log("[KYC6Screen] - handleEmploymentStatus - Error ", Error);
    }
  };

  handleOccupation = (selectedOccupation) => {
    try {
      this.setState({ selectedOccupation });
    } catch (Error) {
      console.log("[KYC6Screen] - handleOccupation - Error ", Error);
    }
  };

  handleCameraButtonPress = () => {
    try {
      console.log("camera pressed");
    } catch (Error) {
      console.log("[KYC6Screen] - Camera_Button - Error ", Error);
    }
  };

  handleFileButtonPress = () => {
    try {
      console.log("File Button pressed");
    } catch (Error) {
      console.log("[KYC6Screen] - File_Button - Error ", Error);
    }
  };

  handleNextButtonPress = () => {
    try {
      this.props.navigation.navigate("KYCOtpScreen");
      console.log("button pressed to navigate to KYCOtpScreen");
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
          {/* Title Text */}
          <View style={GetKYC6ScreenStyles(Android_Theme_Light).titleContainer}>
            <Text style={GetKYC6ScreenStyles(Android_Theme_Light).titleText}>
              {"Employment Information"}
            </Text>
          </View>
          <ScrollView style={{ width: "100%" }}>
            {/* <View
              style={
                GetKYC6ScreenStyles(Android_Theme_Light).backgroundContainer
              }
            > */}

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
                {"Employment Status"}
              </Text>
            </View>
            <View
              style={[
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .commonInputFieldContainer,
              ]}
            >
              <CommonSpinner
                title={null}
                width={"100%"}
                data={[
                  {
                    label: "Employment_status_01",
                    value: "Employment_status_01",
                  },
                  {
                    label: "Employment_status_02",
                    value: "Employment_status_02",
                  },
                  {
                    label: "Employment_status_03",
                    value: "Employment_status_03",
                  },
                ]}
                placeholder={""}
                value={this.state.selectedEmploymentStatus}
                lable={this.state.selectedEmploymentStatus}
                parentReferenceItem={this.handleEmploymentStatus}
              />
            </View>
            <View style={{ height: 10 }}></View>

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
                {"Occupation"}
              </Text>
            </View>
            <View
              style={[
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .commonInputFieldContainer,
              ]}
            >
              <CommonSpinner
                title={null}
                width={"100%"}
                data={[
                  { label: "Occupation_01", value: "Occupation_01" },
                  { label: "Occupation_02", value: "Occupation_02" },
                  {
                    label: "Occupation_03",
                    value: "Occupation_03",
                  },
                ]}
                placeholder={""}
                value={this.state.selectedOccupation}
                lable={this.state.selectedOccupation}
                parentReferenceItem={this.handleOccupation}
              />
            </View>
            <View style={{ height: 10 }}></View>

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
                {"Name of the Employer"}
              </Text>
            </View>
            <View
              style={[
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .commonInputFieldContainer,
              ]}
            >
              <CommonInputField
                value={""}
                title={""}
                placeholder={""}
                width={"100%"}
                onInputChange={this.handleInputChange}
              />
            </View>
            <View style={{ height: 10 }}></View>

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
                {"Nature of the Business"}
              </Text>
            </View>
            <View
              style={[
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .commonInputFieldContainer,
              ]}
            >
              <CommonInputField
                value={""}
                title={""}
                placeholder={""}
                width={"100%"}
                onInputChange={this.handleInputChange}
              />
            </View>
            <View style={{ height: 10 }}></View>

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
                {"Average Monthly Income (LKR)"}
              </Text>
            </View>
            <View
              style={[
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .commonInputFieldContainer,
              ]}
            >
              <CommonInputField
                value={""}
                title={""}
                placeholder={""}
                width={"100%"}
                onInputChange={this.handleInputChange}
              />
            </View>
            <View style={{ height: 10 }}></View>

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
                {"Source of Funds"}
              </Text>
            </View>
            <View
              style={[
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .commonInputFieldContainer,
              ]}
            >
              <CommonInputField
                value={""}
                title={""}
                placeholder={""}
                width={"100%"}
                onInputChange={this.handleInputChange}
              />
            </View>
            <View style={{ height: 10 }}></View>

            {/* Attachments */}
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
                {"Attachments"}
              </Text>
            </View>
            <View
              style={[
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .attachmentFieldContainer,
              ]}
            >
              <View
                style={[
                  GetKYC6ScreenStyles(Android_Theme_Light)
                    .attachmentContentContainer,
                ]}
              >
                <View
                  style={[
                    GetKYC6ScreenStyles(Android_Theme_Light)
                      .attachmentProofContainer,
                  ]}
                >
                  <Text>{"Image_001.png"}</Text>
                  <Android_Theme_Light.ICON_CIRCLE_X></Android_Theme_Light.ICON_CIRCLE_X>
                </View>
              </View>
              <View
                style={[
                  GetKYC6ScreenStyles(Android_Theme_Light).leftButtonContainer,
                ]}
              >
                {/* cameraButton */}
                <CommonButton
                  type={"0"} // 0 or 1
                  text={""}
                  borderRadius={60}
                  title={null}
                  width={"90%"}
                  leftIcon={Android_Theme_Light.ICON_CAMERA}
                  backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
                  onPress={() => this.handleCameraButtonPress()}
                />
              </View>

              <View
                style={[
                  GetKYC6ScreenStyles(Android_Theme_Light).rightButtonContainer,
                ]}
              >
                {/* fileButton */}
                <CommonButton
                  type={"0"} // 0 or 1
                  text={""}
                  borderRadius={60}
                  title={null}
                  width={"90%"}
                  leftIcon={Android_Theme_Light.ICON_EXTERNALOPEN}
                  backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
                  onPress={() => this.handleFileButtonPress()}
                />
              </View>
            </View>

            {/* <View style={{ height: 20 }}></View> */}
            {/* </View> */}
          </ScrollView>

          <CommonButton
            type={"1"} // 0 or 1
            title={"Next"}
            width={"90%"}
            backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
            onPress={() => this.handleNextButtonPress()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default KYC6Screen;
