import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetLeasingLoanMainScreenStyles from "./LeasingLoanMainScreenStyles";
import CommonCardButton from "../../../components/Common/CardButton/CommonCardButton";
import BottomTitleBar from "../../../components/Common/BottomBar/BottomBar";
import { AmountSeperation } from "../../../../utils/helpers";


//Done by: Dinuranga 
class LeasingLoanMainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      VehicleLoanBalance: 185500.35,
      GoldLoanBalance: 350000.5,
    };
  }

  handleBack = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
    } catch {
      console.log("[LeasingLoanMainScreen] - handleBack() EX: " + Error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
    } catch {
      console.log("[LeasingLoanMainScreen] - handleHome() EX: " + Error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <View
            style={GetLeasingLoanMainScreenStyles(Android_Theme_Light).topView}
          >


            {/* Upper summery details */}
            <View
              style={
                GetLeasingLoanMainScreenStyles(Android_Theme_Light)
                  .textContainer
              }
            >
              <View
                style={
                  GetLeasingLoanMainScreenStyles(Android_Theme_Light)
                    .textAndImage
                }
              >
                <Text
                  style={
                    GetLeasingLoanMainScreenStyles(Android_Theme_Light)
                      .toperText
                  }
                >
                  {"Leasing/Loans"}
                </Text>
                <Image
                  source={require("../../../../assets/images/Img_avatarPerson.png")}
                  style={
                    GetLeasingLoanMainScreenStyles(Android_Theme_Light).image
                  }
                />
              </View>

              <Text
                style={
                  GetLeasingLoanMainScreenStyles(Android_Theme_Light).middleText
                }
              >
                Total Credit Facilities
              </Text>

              <View
                style={GetCommonStyles(Android_Theme_Light).amountContainer}
              >
                <Text style={GetCommonStyles(Android_Theme_Light).amountRsText}>
                  Rs.
                </Text>
                <Text
                  style={GetCommonStyles(Android_Theme_Light).amountIntegerText}
                >
                  {
                    AmountSeperation(
                      this.state.VehicleLoanBalance + this.state.GoldLoanBalance
                    )[0]
                  }
                </Text>
                <Text
                  style={GetCommonStyles(Android_Theme_Light).amountDecimalText}
                >
                  {
                    AmountSeperation(
                      this.state.VehicleLoanBalance + this.state.GoldLoanBalance
                    )[1]
                  }
                </Text>
              </View>
            </View>


            {/* Button Container */}
            <View
              style={
                GetLeasingLoanMainScreenStyles(Android_Theme_Light)
                  .twoButtonContainer
              }
            >
              <CommonCardButton
                text={"Leasing/Vehicle Loans"}
                height={90}
                amount={this.state.VehicleLoanBalance}
                icon={Android_Theme_Light.ICON_LOAN}
                onPress={() =>
                  this.props.navigation.navigate("LeasingLoanScreen")
                }
              />
              <CommonCardButton
                onPress={() => this.props.navigation.navigate("GoldLoanScreen")}
                text={"Gold Loans"}
                height={90}
                amount={this.state.GoldLoanBalance}
                icon={Android_Theme_Light.ICON_GOLDLOAN}
              />
            </View>
          </View>


          {/* Banner View */}
          <View
            style={
              GetLeasingLoanMainScreenStyles(Android_Theme_Light).middleView
            }
          >
            <Image
              resizeMode="contain"
              style={{ width: "80%", height: "100%", borderRadius: 10 }}
              source={{
                uri: "https://i.postimg.cc/5yww9Yr0/Screenshot-20240126-170908-Facebook.jpg",
              }}
            />
          </View>
        </View>
        <View
          style={GetLeasingLoanMainScreenStyles(Android_Theme_Light).bottomView}
        >
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

export default LeasingLoanMainScreen;
