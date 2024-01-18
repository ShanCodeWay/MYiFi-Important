import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { GetKYC3Screen2Styles } from "./KYC3Screen2Styles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Svg, Circle } from "react-native-svg";
import Colors from "../../../../styles/Colors";
import Camera from "../../../../assets/icons/Icon_camera.svg";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
//Done by: Randima
class KYC3Screen2 extends Component {
  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[KYC3Screen2] - componentDidMount - Error ", Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[KYC3Screen2] - componentDidMount - Error ", Error);
    }
  }

  handleCameraPress = () => {
    try {
      console.log("camera pressed");
    } catch (Error) {
      console.log("[KYC3Screen2] - Camera_Button - Error ", Error);
    }
  };

  handleNextButtonPress = () => {
    try {
      this.props.navigation.navigate("KYC4Screen");
      console.log("button pressed to navigate to KYC4Screen");
    } catch (error) {
      console.log("[KYC3Screen2] - Next_Button - Error ", error);
    }
  };

  OnPress_BackButton = () => {
    try {
      console.log("Next button pressed");
      this.props.navigation.navigate("KYC3Screen");
    } catch (Error) {
      console.log("[KYC3Screen2] - OnPress_BackButton - Error ", Error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <MainTitleBar
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          TitleText={"Get Profile Picture"}
          // TextAlign={"center"}
          IconRight={null}
          onPressLeft={() => this.OnPress_BackButton()}
        />

        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <View
            style={
              GetKYC3Screen2Styles(Android_Theme_Light).profilePicContainer
            }
          >
            <Text style={GetKYC3Screen2Styles(Android_Theme_Light).titleText}>
              {"Smile for the Camera"}
            </Text>
            <View
              style={GetKYC3Screen2Styles(Android_Theme_Light).profilePicCircle}
            ></View>
          </View>

          <View
            style={GetKYC3Screen2Styles(Android_Theme_Light).buttonContainer}
          >
            <Text style={GetKYC3Screen2Styles(Android_Theme_Light).subText}>
              {"Tap to snap"}
            </Text>
            <TouchableOpacity onPress={this.handleCameraPress}>
              <View
                style={GetKYC3Screen2Styles(Android_Theme_Light).cameraCircle}
              >
                <Android_Theme_Light.ICON_CAMERA
                  width={30}
                  height={30}
                  fill={Android_Theme_Light.WHITE_COLOR}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={
              GetKYC3Screen2Styles(Android_Theme_Light).nextButtonContainer
            }
          >
            <CommonButton
              type={"1"} // 0 or 1
              text={""}
              title={"Next"}
              width={"90%"}
              backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
              onPress={() => this.handleNextButtonPress()}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default KYC3Screen2;
