//KYCScreen3.js

import React, { Component } from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import GetKYC3ScreenStyles from "./KYC3ScreenStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";

//Done by: Randima
class KYC3Screen extends Component {
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

  OnBackButtonPress = () => {
    try {
      console.log("Next button pressed");
      this.props.navigation.navigate("KYC2Screen");
    } catch (Error) {
      console.log("[KYC3Screen2] - OnPress_BackButton - Error ", Error);
    }
  };

  OnForwardButtonPress = () => {
    try {
      this.props.navigation.navigate("KYC4Screen");
    } catch (Error) {
      console.log("[KYC3Screen] - OnForwardButtonPress - Error ", Error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        
        <MainTitleBar
          TitleText={" "}
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          onPressLeft={() => this.OnBackButtonPress()}
          IconRight={Android_Theme_Light.ICON_FORWARD_NAVIGATE}
          onPressRight={() => this.OnForwardButtonPress()}
        />

         {/* PageIndicator */}
        <PageIndicator totalNoOfPages={7} pageNumber={3} />
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

          {/* Title Text */}
          <View style={GetCommonStyles(Android_Theme_Light).topTitleContainer}>
            <Text
              style={GetCommonStyles(Android_Theme_Light).TextStyleH2Medium}
            >
              {"Smile for the \nCamera"}
            </Text>

            <Text
              style={
                GetCommonStyles(Android_Theme_Light).textStyleCaption1Medium
              }
            >
              {"Make it good..\nThis is going to be your profile picture."}
            </Text>
          </View>

          {/* Profile picture container */}
          <View
            style={GetKYC3ScreenStyles(Android_Theme_Light).profilePictureBox}
          >
            <Image
              style={GetKYC3ScreenStyles(Android_Theme_Light).profilePicture}
              // source={require("../../../../assets/images/sample_person.png")}
              resizeMode="contain"
            />
          </View>

          <View
            style={GetKYC3ScreenStyles(Android_Theme_Light).buttonContainer}
          >
            {/* Camera Button */}
            <CommonButton
              type={"0"}
              text={null}
              borderRadius={60}
              title={null}
              width={"20%"}
              textAlign={"center"}
              leftIcon={Android_Theme_Light.ICON_CAMERA}
              backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
              onPress={() => this.handleCameraButtonPress()}
            />

            {/* Next Button */}
            <CommonButton
              type={"1"}
              text={""}
              title={"Next"}
              width={"35%"}
              fontFamily={Android_Theme_Light.POPPINS_REGULAR}
              textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
              textColor={Android_Theme_Light.WHITE_COLOR}
              backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
              onPress={() => this.handleNextButtonPress()}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default KYC3Screen;
