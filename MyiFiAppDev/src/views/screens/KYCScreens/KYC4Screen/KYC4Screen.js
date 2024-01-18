// KYC4Screen.js (Capture ID)

import { faKeycdn } from "@fortawesome/free-brands-svg-icons";
import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
// import CommonInputField from '../../../Components/CommonInputField/CommonInputField';
import { GetKYC4ScreenStyles } from "./KYC4ScreenStyles";
import { Svg, Circle } from "react-native-svg";
import Colors from "../../../../styles/Colors";
import Camera from "../../../../assets/icons/Icon_camera.svg";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";

//Done by: Randima

class KYC4Screen extends Component {
  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[KYC4Screen] - componentDidMount - Error ", Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[KYC4Screen] - componentDidMount - Error ", Error);
    }
  }

  handleCameraPressFront = () => {
    try {
      console.log("Circle front camera pressed");
    } catch (Error) {
      console.log("[KYC4Screen] - Front_camera_Button - Error ", Error);
    }
  };

  handleCameraPressRear = () => {
    try {
      console.log("Circle rear camera pressed");
    } catch (Error) {
      console.log("[KYC4Screen] - Rear_camera_Button - Error ", Error);
    }
  };

  handleNextButtonPress = () => {
    try {
      this.props.navigation.navigate("KYC5Screen");
      console.log("button pressed to navigate to KYC5Screen");
    } catch (error) {
      console.log("[KYC4Screen] - Next_Button - Error ", error);
    }
  };

  OnPress_BackButton = () => {
    try {
      console.log("Next button pressed");
      this.props.navigation.navigate("KYC3Screen2");
    } catch (Error) {
      console.log("[KYC4Screen] - OnPress_BackButton - Error ", Error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <MainTitleBar
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          TitleText={"Capture ID"}
          // TextAlign={"center"}
          IconRight={null}
          onPressLeft={() => this.OnPress_BackButton()}
        />

        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <View style={GetKYC4ScreenStyles(Android_Theme_Light).textContainer}>
            <Text style={GetKYC4ScreenStyles(Android_Theme_Light).text1}>
              {"Your ID"}
            </Text>
            <Text style={GetKYC4ScreenStyles(Android_Theme_Light).text2}>
              {"Hey..Scan in your NIC"}
            </Text>
            <Text style={GetKYC4ScreenStyles(Android_Theme_Light).text3}>
              {"NIC"}
            </Text>
          </View>

          <View style={GetKYC4ScreenStyles(Android_Theme_Light).boxesContainer}>
            <View
              style={GetKYC4ScreenStyles(Android_Theme_Light).boxPicture}
            ></View>
            <View
              style={GetKYC4ScreenStyles(Android_Theme_Light).boxPicture}
            ></View>
          </View>

          <View
            style={
              GetKYC4ScreenStyles(Android_Theme_Light).cameraButtonSContainer
            }
          >
            <View style={GetKYC4ScreenStyles(Android_Theme_Light).box}>
              <Text style={GetKYC4ScreenStyles(Android_Theme_Light).boxText}>
                {"Front Side"}
              </Text>

              <View
                style={GetKYC4ScreenStyles(Android_Theme_Light).buttonContainer}
              >
                <TouchableOpacity onPress={this.handleCameraPressFront}>
                  <View
                    style={
                      GetKYC4ScreenStyles(Android_Theme_Light).cameraCircle
                    }
                  >
                    <Android_Theme_Light.ICON_NIC
                      width={30}
                      height={30}
                      fill={Android_Theme_Light.WHITE_COLOR}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={GetKYC4ScreenStyles(Android_Theme_Light).box}>
              <Text style={GetKYC4ScreenStyles(Android_Theme_Light).boxText}>
                {"Rear Side"}
              </Text>
              <View
                style={GetKYC4ScreenStyles(Android_Theme_Light).buttonContainer}
              >
                <TouchableOpacity onPress={this.handleCameraPressRear}>
                  <View
                    style={
                      GetKYC4ScreenStyles(Android_Theme_Light).cameraCircle
                    }
                  >
                    <Android_Theme_Light.ICON_NIC
                      width={30}
                      height={30}
                      fill={Android_Theme_Light.WHITE_COLOR}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={GetKYC4ScreenStyles(Android_Theme_Light).nextButtonContainer}
          >
            <Text style={GetKYC4ScreenStyles(Android_Theme_Light).text2}>
              {"Scan of both side of NIC"}
            </Text>

            <CommonButton
              type={"1"} // 0 or 1
              text={""}
              title={"Next"}
              width={"90%"}
              backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
              // textColor={Android_Theme_Light.WHITE_COLOR}
              onPress={() => this.handleNextButtonPress()}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default KYC4Screen;
