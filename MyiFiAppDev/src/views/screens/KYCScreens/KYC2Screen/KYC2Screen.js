// KYC2Screen.js (Validate your NIC)

import React, { Component } from "react";
import { View, Text, StatusBar, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import { GetKYC2ScreenStyles } from "./KYC2ScreenStyles";
import Colors from "../../../../styles/Colors";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";

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
    const { nicNumber } = this.state;
  
    const sampleNICs = ["1234", "1111", "5555"];
  
    if (sampleNICs.includes(nicNumber)) {
      this.props.navigation.navigate("KYC3Screen2", { nicNumber }); 
      console.log(nicNumber)
    } else {
      Alert.alert("NIC not found");
    }
  };
  

  OnPress_BackButton = () => {
    try {
      console.log("back button pressed");
      this.props.navigation.navigate("KYC1Screen");
    } catch (Error) {
      console.log("[KYC2Screen] - OnPress_BackButton - Error ", Error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        {/* <StatusBar /> */}

        <MainTitleBar
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          TitleText={"Validate Your NIC"}
          TextAlign={"left"}
          IconRight={null}
          onPressLeft={() => this.OnPress_BackButton()}
        />
        {/* <PaginationIndicator/> */}
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <View
            style={GetKYC2ScreenStyles(Android_Theme_Light).middleContainer}
          >
            <CommonInputField
              value={""}
              title={"NIC Number*"}
              placeholder={""}
              onInputChange={this.handleNICInputChange}
              // icon={Icon_Eye}
              width={"90%"}
              //inputRef={this.inputRef2}
            />
            <View style={{height: 10}}></View>
            <CommonButton
              type={"1"} // 0 or 1
              text={""}
              title={"Search"}
              width={"90%"}
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
