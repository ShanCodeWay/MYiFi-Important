// KYC4Screen.js (Capture ID)

import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import GetKYC4ScreenStyles from "./KYC4ScreenStyles";
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

  OnBackButtonPress = () => {
    try {
      console.log("Next button pressed");
      this.props.navigation.navigate("KYC3Screen");
    } catch (Error) {
      console.log("[KYC4Screen] - OnPress_BackButton - Error ", Error);
    }
  };

  OnForwardButtonPress = () => {
    try {
      this.props.navigation.navigate("KYC5Screen");
    } catch (Error) {
      console.log("[KYC4Screen] - OnForwardButtonPress - Error ", Error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        {/* <MainTitleBar
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          TitleText={"Capture ID"}
          // TextAlign={"center"}
          IconRight={null}
          onPressLeft={() => this.OnPress_BackButton()}
        /> */}
        <MainTitleBar
          TitleText={" "}
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          onPressLeft={() => this.OnBackButtonPress()}
          IconRight={Android_Theme_Light.ICON_FORWARD_NAVIGATE}
          onPressRight={() => this.OnForwardButtonPress()}
        />

        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

           {/* PageIndicator */}
          <PageIndicator totalNoOfPages={7} pageNumber={4} />
         

          {/* Title Text */}
          <View style={GetCommonStyles(Android_Theme_Light).topTitleContainer}>
            {/* <Text
              style={GetCommonStyles(Android_Theme_Light).textStyleH1Medium}
            >
              {"Your ID"}
            </Text> */}

            {/* <Text style = {GetCommonStyles(Android_Theme_Light).textStyleCaption1Medium}>
            {"Hey..Scan in your NIC"}
              </Text> */}
            <Text style={GetKYC4ScreenStyles(Android_Theme_Light).text3}>
              {"NIC"}
            </Text>
          </View>

          <View style={GetKYC4ScreenStyles(Android_Theme_Light).boxesContainer}>
            <View style={GetKYC4ScreenStyles(Android_Theme_Light).boxPicture}>
              {/* <Image style={GetKYC4ScreenStyles(Android_Theme_Light).boxPicture}
            source={require("../../../../assets/images/sample_person.png")}
            resizeMode="contain"
          /> */}
            </View>
            <View style={GetKYC4ScreenStyles(Android_Theme_Light).boxPicture}>
              {/* <Image style={GetKYC4ScreenStyles(Android_Theme_Light).boxPicture}
            source={require("../../../../assets/images/sample_person.png")}
            resizeMode="contain"
          /> */}
            </View>
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

              {/* Camera Button */}
              <View
                style={GetKYC4ScreenStyles(Android_Theme_Light).buttonContainer}
              >
                <CommonButton
                  type={"0"}
                  text={null}
                  borderRadius={60}
                  title={null}
                  width={"40%"}
                  textAlign={"center"}
                  leftIcon={Android_Theme_Light.ICON_CAMERA}
                  backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
                  onPress={() => this.handleCameraButtonPress()}
                />
              </View>
            </View>
            <View style={GetKYC4ScreenStyles(Android_Theme_Light).box}>
              <Text style={GetKYC4ScreenStyles(Android_Theme_Light).boxText}>
                {"Rear Side"}
              </Text>

              {/* Camera Button */}
              <View
                style={GetKYC4ScreenStyles(Android_Theme_Light).buttonContainer}
              >
                <CommonButton
                  type={"0"}
                  text={null}
                  borderRadius={60}
                  title={null}
                  width={"40%"}
                  textAlign={"center"}
                  leftIcon={Android_Theme_Light.ICON_CAMERA}
                  backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
                  onPress={() => this.handleCameraButtonPress()}
                />
              </View>
            </View>
          </View>

          <View
            style={GetKYC4ScreenStyles(Android_Theme_Light).nextButtonContainer}
          >

            {/* Next Button */}
            <CommonButton
              type={"1"}
              text={""}
              title={"Next"}
              width={"50%"}
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

export default KYC4Screen;
