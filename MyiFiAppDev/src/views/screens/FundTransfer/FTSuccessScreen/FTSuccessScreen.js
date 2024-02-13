import React, { Component } from "react";
import { View, Text,  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTitleBar from "../../../components/Common/BottomBar/BottomBar";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetFTSuccessScreenStyles from "./FTSuccessScreenStyles";
import CommonSmallButton from "../../../components/Common/CommonSmallButton";
import Index from "../../../../configs/Index";
import { AmountSeperation } from "../../../../utils/helpers";
import CommonSummeryView from "../../../components/Common/SummeryView/CommonSummeryView";


//Done by Dinuranga 24-1-31
class FTSuccessScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: true,
      Amount: 45555.9,
    };
  }
  SummeryList = [
    {
      label: "Start Date",
      value: "2023/01/12",
    },
    {
      label: "Ends",
      value: "2028/01/13",
    },
    {
      label: "No. Payments",
      value: "60",
    },
    {
      label: "Rental",
      value: "Rs.49.000",
    },
    {
      label: "Arrears",
      value: "Rs.49,000",
    },
    {
      label: "Next Payment",
      value: "2023/08/29",
    },
    {
      label: "This Month",
      value: "Rs.102,000",
    },
    {
      label: "Payment Status",
      value: "Pending",
    },
  ];

  componentDidMount() {
    try {


       this.setState({
         Amount: this.props.route.params.amount,
       });
    } catch (error) {
      console.log(
        "[FTSuccessScreen] - componentDidMount Ex: ",
        error
      );
    }
  }

  componentWillUnmount() {
    try {
      clearTimeout(this.timeout);
    } catch (error) {
      console.log(
        "[FTSuccessScreen] - componentWillUnmount Ex: ",
        error,
        error
      );
    }
  }

  handleBack = () => {
    try {
      this.props.navigation.replace(Index.FUND_1);
      console.log("Back button pressed to Navigate to Fund Transfer Screen");
    } catch (error) {
      console.log("[FTSuccessScreen] - handleBack() - Ex: ", error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.replace(Index.DASHBOARD);
      console.log("Home Button pressed to Navigate to SignupScreen1");
    } catch (error) {
      console.log("[FTSuccessScreen] - handleHome() - Ex: ", error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <View
            style={
              GetFTSuccessScreenStyles(Android_Theme_Light)
                .UpperContainer
            }
          >
            {/* Upper Titles */}
            {this.state.success ? (
              <View>
                <Text
                  style={
                    GetFTSuccessScreenStyles(Android_Theme_Light)
                      .title
                  }
                >
                  Receipt
                </Text>
                <Text
                  style={
                    GetFTSuccessScreenStyles(Android_Theme_Light)
                      .secondTitle
                  }
                >
                  Transfer
                </Text>
              </View>
            ) : null}

            {/* Status Indicator Icon */}
            <View>
              <View
                style={
                  GetFTSuccessScreenStyles(Android_Theme_Light)
                    .circleCheckedView
                }
              >
                {this.state.success ? (
                  <Android_Theme_Light.ICON_CIRCLECHECKED
                    width={80}
                    height={80}
                  />
                ) : (
                  <Android_Theme_Light.ICON_CIRCLE_X width={80} height={80} />
                )}
              </View>

              {/* Status Description */}
              <View style={[, { width: "80%" }]}>
                <Text
                  style={[
                    GetFTSuccessScreenStyles(Android_Theme_Light)
                      .success,
                    {
                      color: this.state.success
                        ? Android_Theme_Light.DARK_GREEN_COLOR
                        : "red",
                    },
                  ]}
                >
                  {this.state.success
                    ? "Transaction Successful"
                    : "Transaction unsuccessful: Network error. Please try again later."}
                </Text>
              </View>
            </View>

            {/* Amount Container */}
            {this.state.success ? (
              <View
                style={[GetCommonStyles(Android_Theme_Light).amountContainer]}
              >
                <Text
                  style={
                    GetFTSuccessScreenStyles(Android_Theme_Light)
                      .prize
                  }
                >
                  Rs.
                </Text>
                <Text
                  style={
                    GetFTSuccessScreenStyles(Android_Theme_Light)
                      .prize
                  }
                >
                  {AmountSeperation(this.state.Amount)[0]}
                </Text>
                <Text
                  style={[
                    GetFTSuccessScreenStyles(Android_Theme_Light)
                      .prize,
                    {
                      fontSize: Android_Theme_Light.FONT_SIZE_HEADER_TWO_MEDIUM,
                    },
                  ]}
                >
                  {AmountSeperation(this.state.Amount)[1]}
                </Text>
              </View>
            ) : null}
          </View>

          {/* Middle Container */}
          {this.state.success ? (
            <View
              style={
                GetFTSuccessScreenStyles(Android_Theme_Light)
                  .MiddleContainer
              }
            >
              <CommonSummeryView
                data={this.SummeryList}
                width={"90%"}
                numColumns={2}
              />
            </View>
          ) : null}

          {/* MI Logo */}
          <View
            style={[
              GetFTSuccessScreenStyles(Android_Theme_Light).logo,
              {
                marginTop: !this.state.success ? 30 : 0,
              },
            ]}
          >
            <Android_Theme_Light.ICON_MI_LOGO_DESCRIPTION_ANDROID height={60} />
          </View>

          {/* Share Button */}
          {this.state.success ? (
            <View
              style={
                GetFTSuccessScreenStyles(Android_Theme_Light)
                  .commonSmallButton
              }
            >
              <CommonSmallButton
                onPress={() => null}
                text={"Share"}
                width={"35%"}
                icon={Android_Theme_Light.ICON_MAIL}
              />
            </View>
          ) : null}
        </View>
        {/* Bottom Bar */}
        <View
          style={
            GetFTSuccessScreenStyles(Android_Theme_Light).bottomView
          }
        >
          <BottomTitleBar
            icon1={Android_Theme_Light.ICON_BACK_ARROWS }
            icon2={Android_Theme_Light.ICON_HOME}
            onPressIcon1={this.handleBack}
            onPressIcon2={this.handleHome}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default FTSuccessScreen;
