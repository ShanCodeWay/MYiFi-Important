import React, { Component } from "react"; //Nawodya
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Main_Logo from "../../../../assets/icons/Icon_MI_LOGO_Description.svg";
import Icon_backArrows from "../../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../../assets/icons/Icon_home.svg";
import BottomTitleBar from "../../../components/Common/BottomTitleBar";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetFundTransferConfirmationScreenStyles from "./FundTransferConfirmationScreenStyles";
import CommonSmallButton from "../../../components/Common/CommonSmallButton";
import CommonSummeryView from "../../../components/Common/SummeryView/CommonSummeryView";
import { AmountSeperation } from "../../../../utils/helpers";


//Done by Dinurnaga 24-1-31
class FundTransferConfirmationScreen extends Component {
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
        "[FundTransferConfirmationScreen] - componentDidMount() EX: " + Error
      );
    }
  }

  componentWillUnmount() {
    try {
      clearTimeout(this.timeout);
    } catch (Error) {
      console.log(
        "[FundTransferConfirmationScreen] - componentWillUnmount() EX: " + Error
      );
    }
  }

  handleBack = () => {
    try {
      this.props.navigation.replace("FTScreen");
      console.log("Back button pressed to Navigate to Fund Transfer Screen");
    } catch (error) {
      console.log(
        "[FundTransferConfirmationScreen] - handleBack() - Ex: ",
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
        "[FundTransferConfirmationScreen] - handleHome() - EX: ",
        error
      );
    }
  };
  handleContinue = () => {
    try {
      this.props.navigation.replace("FundTransferOTPScreen");
      // console.log("Home Button pressed to Navigate to SignupScreen1");
    } catch (error) {
      console.log(
        "[FundTransferConfirmationScreen] - handleContinue() - Ex: ",
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
              GetFundTransferConfirmationScreenStyles(Android_Theme_Light)
                .outView
            }
          >
            <View>
              <Text
                style={
                  GetFundTransferConfirmationScreenStyles(Android_Theme_Light)
                    .title
                }
              >
                Almost there
              </Text>
              <Text
                style={
                  GetFundTransferConfirmationScreenStyles(Android_Theme_Light)
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
                  GetFundTransferConfirmationScreenStyles(Android_Theme_Light)
                    .prize
                }
              >
                Rs.
              </Text>
              <Text
                style={
                  GetFundTransferConfirmationScreenStyles(Android_Theme_Light)
                    .prize
                }
              >
                {AmountSeperation(this.state.Amount)[0]}
              </Text>
              <Text
                style={[
                  GetFundTransferConfirmationScreenStyles(Android_Theme_Light)
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
              GetFundTransferConfirmationScreenStyles(Android_Theme_Light)
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
              GetFundTransferConfirmationScreenStyles(Android_Theme_Light).logo
            }
          >
            <Main_Logo width={70} height={70} />
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
              GetFundTransferConfirmationScreenStyles(Android_Theme_Light)
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
    );
  }
}

export default FundTransferConfirmationScreen;
