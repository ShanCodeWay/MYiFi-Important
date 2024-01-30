import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetInvestMainScreenStyles from "./InvestMainScreenStyles";
import CommonCardButton from "../../../components/Common/CommonCardButton";
import BottomTitleBar from "../../../components/Common/BottomTitleBar";
import { AmountSeperation } from "../../../../utils/helpers";

class InvestMainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FdBalance: 900500.35,
      SavingsBalance: 350000.5,
      TotalInvestment: 0,
    };
  }

  componentDidMount() {
    try {
      this.setState({
        TotalInvestment: this.state.FdBalance + this.state.SavingsBalance,
      });
    } catch (Error) {
      console.log("[InvestMainScreen] - componentDidMount Ex: " + Error);
    }
  }

  handleBack = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
    } catch {
      console.log("[InvestMainScreen] - handleBack() EX: " + Error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
    } catch {
      console.log("[InvestMainScreen] - handleHome() EX: " + Error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <View style={GetInvestMainScreenStyles(Android_Theme_Light).topView}>

            {/* Summery details */}
            <View
              style={
                GetInvestMainScreenStyles(Android_Theme_Light).textContainer
              }
            >
              <View
                style={
                  GetInvestMainScreenStyles(Android_Theme_Light).textAndImage
                }
              >
                <Text
                  style={
                    GetInvestMainScreenStyles(Android_Theme_Light).toperText
                  }
                >
                  {"Invest"}
                </Text>
                <Image
                  source={require("../../../../assets/images/Img_avatarPerson.png")}
                  style={GetInvestMainScreenStyles(Android_Theme_Light).image}
                />
              </View>

              <Text
                style={
                  GetInvestMainScreenStyles(Android_Theme_Light).middleText
                }
              >
                Total Investments
              </Text>

              <View
                style={GetCommonStyles(Android_Theme_Light).amountContainer}
              >
                <Text style={GetCommonStyles(Android_Theme_Light).amountRsText}>
                  {" Rs."}
                </Text>
                <Text
                  style={GetCommonStyles(Android_Theme_Light).amountIntegerText}
                >
                  {AmountSeperation(this.state.TotalInvestment)[0]}
                </Text>
                <Text
                  style={GetCommonStyles(Android_Theme_Light).amountDecimalText}
                >
                  {AmountSeperation(this.state.TotalInvestment)[1]}
                </Text>
              </View>
            </View>

            {/* Button Container */}
            <View
              style={
                GetInvestMainScreenStyles(Android_Theme_Light)
                  .twoButtonContainer
              }
            >
              <CommonCardButton
                text={"Fixed Deposits"}
                height={90}
                amount={this.state.FdBalance}
                icon={Android_Theme_Light.ICON_INVEST}
                onPress={() =>
                  this.props.navigation.navigate("FixedDepositsScreen")
                }
              />
              <CommonCardButton
                onPress={() => null}
                text={"Savings"}
                height={90}
                amount={this.state.SavingsBalance}
                icon={Android_Theme_Light.ICON_LOAN}
              />
            </View>
          </View>


          {/* Custom Banner */}
          <View
            style={GetInvestMainScreenStyles(Android_Theme_Light).middleView}
          >
            <Image
              resizeMode="contain"
              style={{ width: "80%", height: "100%", borderRadius: 10 }}
              source={{
                uri: "https://i.postimg.cc/sgbVwBMM/417154212-694920426120079-3500684663587443534-n.jpg",
              }}
            />
          </View>
        </View>

        {/* Bottom Bar */}
        <View style={GetInvestMainScreenStyles(Android_Theme_Light).bottomView}>
          <BottomTitleBar
            icon1={Android_Theme_Light.ICON_BACK_ARROWS}
            icon2={Android_Theme_Light.ICON_HOME}
            onPressIcon1={this.handleBack}
            onPressIcon2={this.handleHome}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default InvestMainScreen;
