import React, { Component } from "react"; //Nawodya
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTitleBar from "../../../components/Common/BottomBar/BottomBar";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetFTConfirmationScreenStyles from "./FTConfirmationScreenStyles";
import CommonSmallButton from "../../../components/Common/CommonSmallButton";
import CommonSummeryView from "../../../components/Common/SummeryView/CommonSummeryView";
import { AmountSeperation } from "../../../../utils/helpers";


//Done by Dinurnaga 24-1-31
class FTConfirmationScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Date: "2023-11-23",
      Amount: 4500,
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
        Amount: parseFloat(
          this.props.route.params.data.replace(",", "")
        ).toFixed(2),
      });
    } catch (Error) {
      console.log(
        "[FTConfirmationScreen] - componentDidMount() EX: " + Error
      );
    }
  }

  componentWillUnmount() {
    try {
      clearTimeout(this.timeout);
    } catch (Error) {
      console.log(
        "[FTConfirmationScreen] - componentWillUnmount() EX: " + Error
      );
    }
  }

  handleBack = () => {
    try {
      this.props.navigation.replace("FTScreen");
      console.log("Back button pressed to Navigate to Fund Transfer Screen");
    } catch (error) {
      console.log(
        "[FTConfirmationScreen] - handleBack() - Ex: ",
        error
      );
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.replace("DashboardScreen");
      console.log("Home Button pressed to Navigate to SignupScreen1");
    } catch (error) {
      console.log(
        "[FTConfirmationScreen] - handleHome() - EX: ",
        error
      );
    }
  };
  handleContinue = () => {
    try {
      this.props.navigation.replace("FTOTPScreen" , {amount: this.state.Amount});
      // console.log("Home Button pressed to Navigate to SignupScreen1");
    } catch (error) {
      console.log(
        "[FTConfirmationScreen] - handleContinue() - Ex: ",
        error
      );
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          {/* Upper Details Section */}
          <View
            style={
              GetFTConfirmationScreenStyles(Android_Theme_Light)
                .outView
            }
          >
            <View>
              <Text
                style={
                  GetFTConfirmationScreenStyles(Android_Theme_Light)
                    .title
                }
              >
                Almost there
              </Text>
              <Text
                style={
                  GetFTConfirmationScreenStyles(Android_Theme_Light)
                    .secondTitle
                }
              >
                Transfer
              </Text>
            </View>

            <View
              style={[GetCommonStyles(Android_Theme_Light).amountContainer]}
            >
              <Text
                style={
                  GetFTConfirmationScreenStyles(Android_Theme_Light)
                    .prize
                }
              >
                Rs.
              </Text>
              <Text
                style={
                  GetFTConfirmationScreenStyles(Android_Theme_Light)
                    .prize
                }
              >
                {AmountSeperation(this.state.Amount)[0]}
              </Text>
              <Text
                style={[
                  GetFTConfirmationScreenStyles(Android_Theme_Light)
                    .prize,
                  {
                    fontSize: Android_Theme_Light.FONT_SIZE_HEADER_TWO_MEDIUM,
                  },
                ]}
              >
                {AmountSeperation(this.state.Amount)[1]}
              </Text>
            </View>
          </View>

          {/* Middle Container */}
          <View
            style={
              GetFTConfirmationScreenStyles(Android_Theme_Light)
                .MiddleContainer
            }
          >
            <CommonSummeryView
              data={this.SummeryList}
              width={"90%"}
              numColumns={2}
              TextColor={Android_Theme_Light.GRAY_COLOR}
            />
          </View>

          {/* Myify Logo */}
          <View
            style={
              GetFTConfirmationScreenStyles(Android_Theme_Light).logo
            }
          >
            <Android_Theme_Light.ICON_MI_LOGO_DESCRIPTION_ANDROID width={70} height={70} />
          </View>

          {/* Continue Button */}
          <CommonSmallButton
            text={"Continue"}
            onPress={this.handleContinue}
            width={"50%"}
          />

          {/* Bottom bar */}
          <View
            style={
              GetFTConfirmationScreenStyles(Android_Theme_Light)
                .bottomView
            }
          >
            <BottomTitleBar
              icon1={Android_Theme_Light.ICON_BACK_ARROWS}
              icon2={Android_Theme_Light.ICON_HOME}
              onPressIcon1={this.handleBack}
              onPressIcon2={this.handleHome}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default FTConfirmationScreen;
