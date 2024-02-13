// KYC2Screen.js (Validate your NIC)

import React, { Component } from "react";
import { View, Alert, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import GetKYC2ScreenStyles from "./KYC2ScreenStyles";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import PageIndicator from "../../../components/Common/PageIndicator/PageIndicator";

//Done by: Randima
class KYC2Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nicNumber: "",
    };
    
  }

  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[KYC2Screen] - componentDidMount - Error ", Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[KYC2Screen] - componentDidMount - Error ", Error);
    }
  }

  handleNICInputChange = (value) => {
    this.setState({ nicNumber: value });
  };

  handleSearch = () => {




    if (this.state.nicNumber != "" ) {
      this.props.navigation.navigate("KYC3Screen");
    } else {
      Alert.alert("NIC not found");
    }
  };

  OnBackButtonPress = () => {
    try {
      this.props.navigation.navigate("KYC1Screen");
    } catch (Error) {
      console.log("[KYC2Screen] - OnPress_BackButton - Error ", Error);
    }
  };

  OnForwardButtonPress = () => {
    try {
      this.props.navigation.navigate("KYC3Screen");
    } catch (Error) {
      console.log("[KYC2Screen] - OnForwardButtonPress - Error ", Error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <MainTitleBar
          TitleText={"                    "}
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          onPressLeft={() => this.OnBackButtonPress()}
          IconRight={Android_Theme_Light.ICON_FORWARD_NAVIGATE}
          onPressRight={() => this.OnForwardButtonPress()}
        />

        {/* PageIndicator */}
        <PageIndicator totalNoOfPages={7} pageNumber={2} />

        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          {/* Title Text */}
          {/* <View style={GetCommonStyles(Android_Theme_Light).topTitleContainer}>
            <Text
              style={GetCommonStyles(Android_Theme_Light).textStyleH1Medium}
            >
              {"Validate Your NIC"}
            </Text> */}

          {/* <Text style = {GetCommonStyles(Android_Theme_Light).textStyleCaption1Medium}>
                Create account so you can {"\n"} manage your personal finances
              </Text> */}
          {/* </View> */}
          <View
            style={GetKYC2ScreenStyles(Android_Theme_Light).middleContainer}
          >
            {/* NIC Search Box */}
            <CommonInputField
              value={""}
              title={"NIC Number*"}
              placeholder={""}
              onInputChange={this.handleNICInputChange}
              icon={Android_Theme_Light.ICON_VERIFIED}
              width={"90%"}
              //inputRef={this.inputRef2}
            />

            {/* Gap */}
            <View style={{ height: 10 }}></View>

            {/* Search Button */}
            <CommonButton
              type={"1"}
              text={""}
              title={"Search"}
              width={"50%"}
              fontFamily={Android_Theme_Light.POPPINS_REGULAR}
              textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
              textColor={Android_Theme_Light.WHITE_COLOR}
              backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
              onPress={() => this.handleSearch()}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default KYC2Screen;
