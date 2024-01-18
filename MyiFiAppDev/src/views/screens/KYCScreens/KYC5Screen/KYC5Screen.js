// KYC5Screen.js (KYC details)

import { faKeycdn } from "@fortawesome/free-brands-svg-icons";
import React, { Component } from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import GetKYC5ScreenStyles from "./KYC5ScreenStyles";
import { Svg, Circle } from "react-native-svg";
import Colors from "../../../../styles/Colors";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import Icon_angleDown from "../../../../assets/icons/Icon_angleDown.svg";

class KYC5Screen extends Component {
  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[KYC5Screen] - componentDidMount() EX: " + Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[KYC5Screen] - componentWillUnmount() EX: " + Error);
    }
  }

  handleInputChange = (value) => {
    try {
      console.log("Input value:", value);
    } catch (Error) {
      console.log("[KYC5Screen] - handleInputChange() EX: " + Error);
    }
  };

  handleNextButtonPress = () => {
    try {
      console.log("Next button pressed");
      this.props.navigation.navigate("KYC6Screen");
    } catch (error) {
      console.log("[KYC5Screen] - Next_Button - Error ", error);
    }
  };

  OnPress_BackButton = () => {
    try {
      console.log("back button pressed");
      this.props.navigation.navigate("KYC4Screen");
    } catch (error) {
      console.log("[KYC5Screen] - OnPress_BackButton - Error ", error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        {/* <StatusBar backgroundColor="red" barStyle="dark-content" /> */}
        <MainTitleBar
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          TitleText={"KYC Details"}
          // TextAlign={"left"}
          IconRight={null}
          onPressLeft={() => this.OnPress_BackButton()}
        />

        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <ScrollView>
            <View
              style={
                GetKYC5ScreenStyles(Android_Theme_Light).backgroundContainer
              }
            >
              {/* NIC */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"NIC"}
                  placeholder={"NIC Number"}
                  width={"90%"}
                  icon={Android_Theme_Light.ICON_NIC}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* DOB */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Date of Birth"}
                  placeholder={"DOB"}
                  width={"90%"}
                  icon={Android_Theme_Light.ICON_CALENDER}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* Title */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Title"}
                  placeholder={".."}
                  width={"90%"}
                  icon={Android_Theme_Light.ICON_DROPDOWN}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* Last Name */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Last Name"}
                  placeholder={"DOB"}
                  width={"90%"}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* Other Names */}

              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Other Names"}
                  placeholder={"Other Names"}
                  width={"90%"}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* Initials */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Initials"}
                  placeholder={"Initials"}
                  width={"90%"}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* Gender */}

              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Gender"}
                  placeholder={"Gender"}
                  width={"90%"}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* Email */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Email"}
                  placeholder={"Email"}
                  width={"90%"}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* Mobile */}

              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Mobile"}
                  placeholder={"Mobile"}
                  width={"90%"}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* Residence Tel No */}

              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Residence Tel No"}
                  placeholder={"Residence Tel No"}
                  width={"90%"}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* Address 01 */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Address 01"}
                  placeholder={".."}
                  width={"90%"}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* Address 02 */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Address 02"}
                  placeholder={".."}
                  width={"90%"}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* Address 03 */}

              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Address 03"}
                  placeholder={".."}
                  width={"90%"}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* City */}

              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"City"}
                  placeholder={".."}
                  width={"90%"}
                  icon={Icon_angleDown}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* District */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"District"}
                  placeholder={".."}
                  width={"90%"}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* Province */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Province"}
                  placeholder={".."}
                  width={"90%"}
                  onInputChange={this.handleInputChange}
                />
              </View>

              {/* <View style={{ height: 20 }}></View> */}
            </View>
          </ScrollView>
          <CommonButton
            type={"1"} // 0 or 1
            text={""}
            title={"CONTINUE"}
            width={"90%"}
            backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
            hideIcon={"0"}
            textColor={Android_Theme_Light.WHITE_COLOR}
            onPress={() => this.handleNextButtonPress()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default KYC5Screen;
