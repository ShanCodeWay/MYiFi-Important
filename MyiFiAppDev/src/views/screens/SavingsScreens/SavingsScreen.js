// SavingsScreen.js

import React, { Component } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../styles/Themes";
import GetSavingsScreenStyles from "./SavingsScreenStyles";
import CommonCardButton from "../../components/Common/CardButton/CommonCardButton";
import CommonButton from "../../components/Common/MainButton/CommonButton";
import { AmountSeperation } from "../../../utils/helpers";
import BottomBar from "../../components/Common/BottomBar/BottomBar";

class SavingsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  InvestmentsList = [
    {
      id: 1,

      accNumber: "400123123",
      accName: "Regular",
      amount: 100000.0,
    },
    {
      id: 2,

      accNumber: "400345345",
      accName: "Money Market",
      amount: 200000.0,
    },
  ];

  InvestmentRenderItem = ({ item }) => (
    <View
      style={[
        GetSavingsScreenStyles(Android_Theme_Light).SavingsRowMainContainer,
      ]}
    >
      <View
        style={[
          GetSavingsScreenStyles(Android_Theme_Light).SavingsRowContainer,
        ]}
      >
        <View
          style={[
            GetSavingsScreenStyles(Android_Theme_Light).SavingsRowLeftView,
          ]}
        >
          <Text
            style={[
              GetSavingsScreenStyles(Android_Theme_Light).TextAccountNumber,
            ]}
          >
            {item.accNumber}
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Text
              style={[
                GetSavingsScreenStyles(Android_Theme_Light).textAccountName,
              ]}
            >
              {"Account Name: "}
            </Text>

            <Text
              style={[
                GetSavingsScreenStyles(Android_Theme_Light)
                  .textAccountNameValue,
              ]}
            >
              {item.accName}
            </Text>
          </View>
        </View>

        <View
          style={[
            GetSavingsScreenStyles(Android_Theme_Light).SavingsRowRightView,
          ]}
        >
          <View
            style={[
              GetCommonStyles(Android_Theme_Light).amountContainer,
            ]}
          >
            <Text
              style={[
                GetCommonStyles(Android_Theme_Light).amountRsText,
              ]}
            >
              {"Rs. "}
            </Text>

            <Text
              style={[
                GetCommonStyles(Android_Theme_Light)
                  .amountIntegerText,
                { fontSize: Android_Theme_Light.FONT_SIZE_HEADER_TWO },
              ]}
            >
              {AmountSeperation(item.amount)[0]}
            </Text>
            <Text
              style={[
                GetCommonStyles(Android_Theme_Light)
                  .amountDecimalText,
              ]}
            >
              {AmountSeperation(item.amount)[1]}
            </Text>
          </View>

          {/* view more button */}
          <CommonButton
            type={"1"}
            height={40}
            width={"100%"}
            title={"View More"}
            fontFamily={Android_Theme_Light.POPPINS_REGULAR}
            textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
            textColor={Android_Theme_Light.WHITE_COLOR}
            backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
            onPress={() =>
              this.props.navigation.navigate("SavingsTransactionScreen", {
               data: item,
              })
            }
          />
        </View>
      </View>

      <View
        style={[
          GetFixedDepositsScreenStyles(Android_Theme_Light).HorizontalDevider,
        ]}
      />
    </View>
  );

  handleBack = () => {
    try {
      this.props.navigation.navigate("InvestMainScreen");
    } catch (Error) {
      console.log("[SavingsScreen] -  handleBack() EX: " + Error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
    } catch (Error) {
      console.log("[SavingsScreen] -  handleHome() EX: " + Error);
    }
  };

  componentDidMount() {
    try {
      this.setState({
        TotalInvest: this.InvestmentsList.reduce(
          (balance, currentItem) => balance + currentItem.amount,
          0
        ),
      });
    } catch (Error) {
      console.log("[SavingsScreen] - componentDidMount() EX: " + Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[SavingsScreen] - componentWillUnmount() EX: " + Error);
    }
  }

  handleTransferMoneyButtonPress = () => {
    try {
      this.props.navigation.navigate("FTScreen");
      console.log("button pressed to navigate to FundTransfer_Screen");
    } catch (error) {
      console.log("[SavingsScreen] - Transfer_Money_Button - Error ", error);
    }
  };

  handleBillPaymentButtonPress = () => {
    try {
      this.props.navigation.navigate("BillPayment");
      console.log("button pressed to navigate to BillPayment_Screen");
    } catch (error) {
      console.log("[SavingsScreen] - Bill_Payment_Button - Error ", error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>


          {/* Upper View (User details and Buttons) */}
          <View style={[GetSavingsScreenStyles(Android_Theme_Light).UpperView]}>
            <View
              style={[GetSavingsScreenStyles(Android_Theme_Light).LeftView]}
            >
              <Text
                style={[
                  GetSavingsScreenStyles(Android_Theme_Light).TextSavings,
                ]}
              >
                {"Savings"}
              </Text>
              <Text
                style={[
                  GetSavingsScreenStyles(Android_Theme_Light).TextTotalSavings,
                ]}
              >
                {"Total Savings"}
              </Text>
              <View
                style={[GetCommonStyles(Android_Theme_Light).amountContainer]}
              >
                <Text
                  style={[GetCommonStyles(Android_Theme_Light).amountRsText]}
                >
                  {"Rs. "}
                </Text>
                <Text
                  style={[
                    GetCommonStyles(Android_Theme_Light).amountIntegerText,
                  ]}
                >
                  {AmountSeperation(this.state.TotalInvest)[0]}
                </Text>
                <Text
                  style={[
                    GetCommonStyles(Android_Theme_Light).amountDecimalText,
                  ]}
                >
                  {AmountSeperation(this.state.TotalInvest)[1]}
                </Text>
              </View>
            </View>

            <TouchableOpacity>
              <Image
                source={require("../../../assets/images/Img_avatarPerson.png")}
                style={{ width: 60, height: 60 }}
              />
            </TouchableOpacity>
          </View>

          {/* Middle Button View */}
          <View
            style={[
              GetSavingsScreenStyles(Android_Theme_Light).middleContainerView,
            ]}
          >
            <CommonCardButton
              width={"100%"}
              height={64}
              icon={Android_Theme_Light.ICON_SEND}
              text={"Transfer Money"}
              onPress={this.handleTransferMoneyButtonPress}
            />

            <CommonCardButton
              width={"100%"}
              height={64}
              icon={Android_Theme_Light.ICON_PAYMENT}
              text={"Bill Payment"}
              onPress={this.handleBillPaymentButtonPress}
            />
          </View>

          {/* Savings List Start */}
          <View
            style={[
              GetSavingsScreenStyles(Android_Theme_Light).SavingsContainerView,
            ]}
          >
            <Text
              style={[
                GetSavingsScreenStyles(Android_Theme_Light).textCurrentSavings,
              ]}
            >
              {"Current Savings"}
            </Text>

            {/* current savings flat list */}
            <View style={{ flex: 1, width: "100%" }}>
              <FlatList
                data={this.InvestmentsList}
                renderItem={this.InvestmentRenderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>

          {/* bottom view */}
          <View style={GetSavingsScreenStyles(Android_Theme_Light).bottomView}>
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

export default SavingsScreen;
