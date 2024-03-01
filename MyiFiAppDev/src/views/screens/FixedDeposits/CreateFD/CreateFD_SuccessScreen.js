import React, { Component } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomBar from "../../../components/Common/BottomBar/BottomBar";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetCreateFD_SuccessScreenStyles from "./CreateFD_SuccessScreenStyles";
import CommonSmallButton from "../../../components/Common/CommonSmallButton";
import Index from "../../../navigators/NavIndex";
import { AmountSeperation } from "../../../../utils/helpers";
import CommonSummeryView from "../../../components/Common/SummeryView/CommonSummeryView";

//Done by Dinuranga 24-1-31
class CreateFD_SuccessScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: true,
      Amount: 45555.9,
    };
  }
  SummeryList = [
    {
      label: "Account",
      value: "288-374-829",
    },
    {
      label: "Amount",
      value: parseFloat(
        this.props.route.params.amount.replace(",", "")
      ).toFixed(2),
    },
    {
      label: "Type",
      value: "Annually",
    },
    {
      label: "Duration",
      value: "6 Months",
    },
    {
      label: "Interest",
      value: "22.45%",
    },
    {
      label: "Maturity Date",
      value: "2024-07-12",
    },
    {
      label: "Payment Type",
      value: "Savings",
    },
    {
      label: "Interest Deposition",
      value: "288-374-829",
    },
  ];

  componentDidMount() {
    try {
      this.setState({
        Amount: this.props.route.params.amount,
      });
    } catch (error) {
      console.log("[CreateFD_SuccessScreen] - componentDidMount Ex: ", error);
    }
  }

  componentWillUnmount() {
    try {
      clearTimeout(this.timeout);
    } catch (error) {
      console.log(
        "[CreateFD_SuccessScreen] - componentWillUnmount Ex: ",
        error,
      );
    }
  }

  handleBack = () => {
    try {
      this.props.navigation.replace(Index.FD_SCREEN_1);
      console.log("Back button pressed to Navigate to FD screen");
    } catch (error) {
      console.log("[CreateFD_SuccessScreen] - handleBack() - Ex: ", error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.replace(Index.FD_SCREEN_1);
      console.log("Home Button pressed to Navigate to FD Screen");
    } catch (error) {
      console.log("[CreateFD_SuccessScreen] - handleHome() - Ex: ", error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <View
            style={
              GetCreateFD_SuccessScreenStyles(Android_Theme_Light)
                .UpperContainer
            }
          >
            {/* Upper Titles */}
            {this.state.success ? (
              <View>
                <Text
                  style={
                    GetCreateFD_SuccessScreenStyles(Android_Theme_Light).title
                  }
                >
                  Receipt
                </Text>
                <Text
                  style={
                    GetCreateFD_SuccessScreenStyles(Android_Theme_Light)
                      .secondTitle
                  }
                >
                  Fixed Deposit
                </Text>
              </View>
            ) : null}

            {/* Status Indicator Icon */}
            <View>
              <View
                style={
                  GetCreateFD_SuccessScreenStyles(Android_Theme_Light)
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
                    GetCreateFD_SuccessScreenStyles(Android_Theme_Light)
                      .success,
                    {
                      color: this.state.success
                        ? Android_Theme_Light.DARK_GREEN_COLOR
                        : "red",
                    },
                  ]}
                >
                  {this.state.success
                    ? "Created Successfully"
                    : "Failed to Create"}
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
                    GetCreateFD_SuccessScreenStyles(Android_Theme_Light).prize
                  }
                >
                  Rs.
                </Text>
                <Text
                  style={
                    GetCreateFD_SuccessScreenStyles(Android_Theme_Light).prize
                  }
                >
                  {AmountSeperation(this.state.Amount)[0]}
                </Text>
                <Text
                  style={[
                    GetCreateFD_SuccessScreenStyles(Android_Theme_Light).prize,
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
                GetCreateFD_SuccessScreenStyles(Android_Theme_Light)
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
              GetCreateFD_SuccessScreenStyles(Android_Theme_Light).logo,
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
                GetCreateFD_SuccessScreenStyles(Android_Theme_Light)
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
            GetCreateFD_SuccessScreenStyles(Android_Theme_Light).bottomView
          }
        >
          <BottomBar
            BackIcon={Android_Theme_Light.ICON_BACK_ARROWS}
            HomeIcon={Android_Theme_Light.ICON_HOME}
            onPressBackButton={this.handleBack}
            onPressHomeButton={this.handleHome}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default CreateFD_SuccessScreen;
