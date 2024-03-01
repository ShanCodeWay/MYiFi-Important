import React, { Component } from "react"; //Nawodya
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomBar from "../../../components/Common/BottomBar/BottomBar";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetCreateFDConfirmationScreenStyles from "./CreateFDConfirmationScreenStyles";
import CommonSmallButton from "../../../components/Common/CommonSmallButton";
import CommonSummeryView from "../../../components/Common/SummeryView/CommonSummeryView";
import { AmountSeperation } from "../../../../utils/helpers";
import Index from "../../../navigators/NavIndex";

//Done by Dinurnaga 24-1-31
class CreateFDConfirmationScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Date: "2023-11-23",
      Amount: 4500,
    };
  }

  SummeryList = [
    {
      label: "Account",
      value: "288-374-829",
    },
    {
      label: "Amount",
      value: parseFloat(this.props.route.params.data.replace(",", "")).toFixed(
        2
      ),
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
        Amount: 
    

          parseFloat(
            this.props.route.params.data.replace(",", "")
          ).toFixed(2),
        
      });
    } catch (Error) {
      console.log(
        "[CreateFDConfirmationScreen] - componentDidMount() EX: " + Error
      );
    }
  }

  componentWillUnmount() {
    try {
      clearTimeout(this.timeout);
    } catch (Error) {
      console.log(
        "[CreateFDConfirmationScreen] - componentWillUnmount() EX: " + Error
      );
    }
  }

  handleBack = () => {
    try {
      this.props.navigation.replace(Index.FD_CREATE_SCREEN);
      console.log("Back button pressed to Navigate to FD Create Screen");
    } catch (error) {
      console.log("[CreateFDConfirmationScreen] - handleBack() - Ex: ", error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.replace(Index.FD_SCREEN_1);
      console.log("Home Button pressed to Navigate to SignupScreen1");
    } catch (error) {
      console.log("[CreateFDConfirmationScreen] - handleHome() - EX: ", error);
    }
  };
  handleContinue = () => {
    try {
      this.props.navigation.replace(Index.FD_CREATE_OTP_SCREEN, {
        amount: this.state.Amount,
      });
    } catch (error) {
      console.log(
        "[CreateFDConfirmationScreen] - handleContinue() - Ex: ",
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
              GetCreateFDConfirmationScreenStyles(Android_Theme_Light).outView
            }
          >
            <View>
              <Text
                style={
                  GetCreateFDConfirmationScreenStyles(Android_Theme_Light).title
                }
              >
                Almost there
              </Text>
              <Text
                style={
                  GetCreateFDConfirmationScreenStyles(Android_Theme_Light)
                    .secondTitle
                }
              >
                Fixed Deposit
              </Text>
            </View>

            <View
              style={[GetCommonStyles(Android_Theme_Light).amountContainer]}
            >
              <Text
                style={
                  GetCreateFDConfirmationScreenStyles(Android_Theme_Light).prize
                }
              >
                {"Rs. "}
              </Text>
              <Text
                style={
                  GetCreateFDConfirmationScreenStyles(Android_Theme_Light).prize
                }
              >
                {AmountSeperation(this.state.Amount)[0]}
              </Text>
              <Text
                style={
                  GetCreateFDConfirmationScreenStyles(Android_Theme_Light).prize
                }
              >
                {AmountSeperation(this.state.Amount)[1]}
              </Text>
            </View>
          </View>

          {/* Middle Container */}
          <View
            style={
              GetCreateFDConfirmationScreenStyles(Android_Theme_Light)
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
              GetCreateFDConfirmationScreenStyles(Android_Theme_Light).logo
            }
          >
            <Android_Theme_Light.ICON_MI_LOGO_DESCRIPTION_ANDROID
              width={70}
              height={70}
            />
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
              GetCreateFDConfirmationScreenStyles(Android_Theme_Light)
                .bottomView
            }
          >
            <BottomBar
              BackIcon={Android_Theme_Light.ICON_BACK_ARROWS}
              HomeIcon={Android_Theme_Light.ICON_HOME}
              onPressBackButton={this.handleBack}
              onPressHomeButton={this.handleHome}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default CreateFDConfirmationScreen;
