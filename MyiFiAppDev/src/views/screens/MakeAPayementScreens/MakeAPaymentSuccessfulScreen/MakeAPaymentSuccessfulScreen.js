import React, { Component } from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";

import Index from "../../../../configs/Index";
import Svg, { Path } from "react-native-svg";
import Icon_backArrows from "../../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../../assets/icons/Icon_home.svg";
import Colors from "../../../../styles/Colors";

import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetMakeAPaymentSuccessfulScreenStyles from "./MakeAPaymentSuccessfulScreenStyles";

import {
  Android_Theme_Light,
  Android_Theme_Dark,
} from "../../../../styles/Themes";
import BottomTitleBar from "../../../components/Common/BottomTitleBar";
import { AmountSeperation } from "../../../../utils/helpers";

// done by: Randima 2024/01/24
class MakeAPaymentSuccessfulScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Date: "2023-11-23",
      amountInSummaryView: "",
    };
  }

  componentDidMount() {
    try {
      StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
      this.setState({

        amountInSummaryView : this.props.route.params.amountInSummary
      },
      
      );
    } catch (Error) {
      console.log(
        "[MakeAPaymentSuccessfulScreen] - componentDidMount - Error ",
        Error
      );
    }
  }
  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log(
        "[MakeAPaymentSuccessfulScreen] - componentWillUnmount - Error ",
        Error
      );
    }
  }

  handleNextButtonPress = () => {
    try {
      //   this.props.navigation.replace(Index.FUND_1);
      console.log("Next button pressed to NAvigate _");
    } catch (error) {
      console.log(
        "[MakeAPaymentSuccessfulScreen] - Next_Button - Error ",
        error
      );
    }
  };

  handleBack = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
      console.log("left pressed to navigate to MakeAPaymentOtpScreen");
    } catch (error) {
      console.log(
        "[MakeAPaymentSuccessfulScreen] - left_Button - Error ",
        error
      );
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
      console.log("left pressed to navigate to MakeAPaymentOtpScreen");
    } catch (error) {
      console.log(
        "[MakeAPaymentSuccessfulScreen] - left_Button - Error ",
        error
      );
    }
  };

  handlePasswordInputChange = (text) => {};

  render() {
    return (
      <>
        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
          

          <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
            {/* Middle Container */}
            <View
              style={[
                GetMakeAPaymentSuccessfulScreenStyles(Android_Theme_Light)
                  .middleContainer,
              ]}
            >
              {/* <View style={{ height: 100 }}></View> */}

              <Text
                style={[
                  GetMakeAPaymentSuccessfulScreenStyles(Android_Theme_Light)
                    .textTitle,
                ]}
              >
                {"Receipt"}
              </Text>

              <Text
                style={[
                  GetMakeAPaymentSuccessfulScreenStyles(Android_Theme_Light)
                    .subText,
                ]}
              >
                {"FD Payment"}
              </Text>
              <Android_Theme_Light.ICON_CIRCLECHECKED></Android_Theme_Light.ICON_CIRCLECHECKED>

              <Text
                style={[
                  GetMakeAPaymentSuccessfulScreenStyles(Android_Theme_Light)
                    .subText2,
                ]}
              >
                {"Success"}
              </Text>

              <View
              style={[GetCommonStyles(Android_Theme_Light).amountContainer]}
            >
              <Text style={[GetCommonStyles(Android_Theme_Light).amountRsText]}>
                {"Rs "}
              </Text>
              <Text
                style={[GetCommonStyles(Android_Theme_Light).amountIntegerText]}
              >
                 {  AmountSeperation(this.state.amountInSummaryView)[0]}
              </Text>
              <Text
                style={[GetCommonStyles(Android_Theme_Light).amountDecimalText]}
              >
                 {AmountSeperation(this.state.amountInSummaryView)[1]}
              </Text>
            </View>
            </View>

            {/* <View style={{ height: 50 }}></View> */}

            {/* Middle Container */}

            {/* Bottom Container*/}
            <View
              style={
                GetMakeAPaymentSuccessfulScreenStyles(Android_Theme_Light)
                  .bottomContainer
              }
            >
              <Android_Theme_Light.ICON_MI_LOGO_DESCRIPTION_ANDROID />
            </View>

            {/* Bottom Bar */}
            <View
              style={
                GetMakeAPaymentSuccessfulScreenStyles(Android_Theme_Light)
                  .bottomView
              }
            >
              <BottomTitleBar
                icon1={Icon_backArrows}
                icon2={Icon_home}
                onPressIcon1={this.handleBack}
                onPressIcon2={this.handleHome}
              />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default MakeAPaymentSuccessfulScreen;
