import React, { Component } from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import Icon_backArrows from "../../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../../assets/icons/Icon_home.svg";
import Colors from "../../../../styles/Colors";

import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetMakeAPaymentSuccessfulScreenStyles from "./MakeAPaymentSuccessfulScreenStyles";

import { Android_Theme_Light } from "../../../../styles/Themes";
import BottomTitleBar from "../../../components/Common/BottomTitleBar";
import { AmountSeperation } from "../../../../utils/helpers";

// done by: Randima 2024/01/24
class MakeAPaymentSuccessfulScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      successChecked: false,
      amountPayment: "",
    };
  }

  componentDidMount() {
    try {
      StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
      console.log("final", this.props.route.params.fdpayment);
      console.log("final", this.props.route.params.success);
      this.setState({
        amountPayment: this.props.route.params.fdpayment,
        successChecked: this.props.route.params.success,
      });
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

              {/* ICON_CIRCLECHECKED or ICON_CIRCLE_X */}
              {this.state.successChecked ? (
                <Android_Theme_Light.ICON_CIRCLECHECKED />
              ) : (
                <Android_Theme_Light.ICON_CIRCLE_X width={100} height={100} />
              )}

              {/* Success or Failed Text */}
              <Text
                style={[
                  GetMakeAPaymentSuccessfulScreenStyles(Android_Theme_Light)
                    .subText2,
                ]}
              >
                {this.state.successChecked ? (
                  "Success"
                ) : (
                  <Text
                    style={
                      GetMakeAPaymentSuccessfulScreenStyles(Android_Theme_Light)
                        .errorMsg
                    }
                  >
                    {"Payment Failed"}
                  </Text>
                )}
              </Text>

              {/* Amount displayed or not */}
              {this.state.successChecked ? (
                <View
                  style={[GetCommonStyles(Android_Theme_Light).amountContainer]}
                >
                  <Text
                    style={[GetCommonStyles(Android_Theme_Light).amountRsText]}
                  >
                    {"Rs "}
                  </Text>
                  <Text
                    style={[
                      GetCommonStyles(Android_Theme_Light).amountIntegerText,
                    ]}
                  >
                    {AmountSeperation(this.state.amountPayment)[0]}
                  </Text>
                  <Text
                    style={[
                      GetCommonStyles(Android_Theme_Light).amountDecimalText,
                    ]}
                  >
                    {AmountSeperation(this.state.amountPayment)[1]}
                  </Text>
                </View>
              ) : null}
            </View>

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
