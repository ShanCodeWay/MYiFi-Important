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
import PaginationIndicator from "../../../components/Common/PageIndicator/PageIndicator";
import CommonCardButton from "../../../components/Common/CommonCardButton";
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

  handleCameraButtonPress = () => {
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
      this.props.navigation.navigate("KYC2Screen");
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
          {/* <View style={{ height: 20 }}></View> */}
          {/* <PaginationIndicator></PaginationIndicator> */}
          {/* <View style={{ height: 5 ,backgroundColor: 'pink'}}></View> */}
          {/* <View
            style={
              GetKYC3Screen2Styles(Android_Theme_Light).indictorContainer
            }
          ></View> */}
          <View style={{ height: 10 }}></View>
          <PaginationIndicator></PaginationIndicator>
          <View
            style={
              GetKYC3Screen2Styles(Android_Theme_Light).profilePicTextContainer
            }
          >
            <Text style={GetKYC3Screen2Styles(Android_Theme_Light).titleText}>
              {"Smile for the \nCamera"}
            </Text>
            {/* <View style={{ height: 15 }}></View> */}
            <Text style={GetKYC3Screen2Styles(Android_Theme_Light).subText}>
              {"Make it good..\nThis is going to be your profile picture."}
            </Text>
            {/* <View style={{ height: 15 }}></View> */}

            {/* <View style={{ height: 5 }}></View> */}
          </View>
          <View
            style={GetKYC3Screen2Styles(Android_Theme_Light).profilePictureBox}
          >
            <Image     style={GetKYC3Screen2Styles(Android_Theme_Light).profilePicture}
              source={require("../../../../assets/images/sample_person.png")}
            />
          </View>

          <View
            style={GetKYC3Screen2Styles(Android_Theme_Light).buttonContainer}
          >
            {/* <View style={{ height: 30 }}></View> */}
            <CommonButton
              type={"0"} // 0 or 1
              text={""}
              borderRadius={60}
              title={null}
              width={"20%"}
              leftIcon={Android_Theme_Light.ICON_CAMERA}
              backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
              onPress={() => this.handleCameraButtonPress()}
            />
            {/* <View style={{ height: 40 }}></View> */}
            <CommonButton
              type={"1"} // 0 or 1
              text={""}
              title={"Next"}
              width={"35%"}
              backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
              onPress={() => this.handleNextButtonPress()}
            />
          </View>
          {/* <View style={{ height: 25 }}></View> */}
        </View>
      </SafeAreaView>
    );
  }
}

export default KYC3Screen2;
