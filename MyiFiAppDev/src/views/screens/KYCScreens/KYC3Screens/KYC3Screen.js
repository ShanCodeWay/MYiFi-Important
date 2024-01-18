import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { GetKYC3ScreenStyles } from "./KYC3ScreenStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Svg, Circle } from "react-native-svg";
import Colors from "../../../../styles/Colors";
import Icon_camera from "../../../../assets/icons/Icon_camera.svg";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";

//Done by: Randima
class KYC3Screen extends Component {
  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[KYC3Screen] - componentDidMount - Error ", Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[KYC3Screen] - componentDidMount - Error ", Error);
    }
  }

  handleCameraPress = () => {
    try {
      console.log("camera pressed");
      this.props.navigation.navigate("KYC3Screen2");
    } catch (Error) {
      console.log("[KYC3Screen] - Camera_Button - Error ", Error);
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
          onPressLeft={() => {
            console.log("back button pressed");
            this.props.navigation.navigate("KYC2Screen");
          }}
        />
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <View style={GetKYC3ScreenStyles(Android_Theme_Light).textContainer}>
            <Text style={GetKYC3ScreenStyles(Android_Theme_Light).titleText}>
              {"Smile for the Camera"}
            </Text>
            <Text style={GetKYC3ScreenStyles(Android_Theme_Light).subTexts}>
              {"Tap to snap"}
            </Text>
          </View>

          <View
            style={GetKYC3ScreenStyles(Android_Theme_Light).buttonContainer}
          >
            <TouchableOpacity onPress={this.handleCameraPress}>
              <View
                style={GetKYC3ScreenStyles(Android_Theme_Light).cameraCircle}
              >
                <Android_Theme_Light.ICON_CAMERA width={30} height={30} fill={Android_Theme_Light.WHITE_COLOR}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default KYC3Screen;
