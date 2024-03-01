// SavingsTransactionScreen.js

import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon_backArrows from "../../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../../assets/icons/Icon_home.svg";
import BottomBar from "../../../components/Common/BottomBar/BottomBar";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetSavingsTransactionScreenStyles from "./SavingsTransactionScreenStyles";
import CommonCardButton from "../../../components/Common/CardButton/CommonCardButton";
import Icon_arrowUp from "../../../../assets/icons/Icon_arrowUp.svg";
import Icon_arrowDown from "../../../../assets/icons/Icon_arrowDown.svg";
import { AmountSeperation } from "../../../../utils/helpers";

class SavingsTransactionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Date: "2023-11-23",
      SavingsAmount: 300000,
      SavingsObject: {},
      
    };
  }

  tansactionList = [
    {
      id: 1,
      type: "0",
      description: "CEFT/7181819/Dasun",
      amount: "- Rs. 1800.00",
      amountDescription: "Savings",
    },
    {
      id: 2,
      type: "1",
      description: "Silps/234535/Aurdi",
      amount: "  Rs. 23,000.00",
      amountDescription: "Wallet",
    },
    {
      id: 3,
      type: "0",
      description: "Pay/GoldL/Mercantile",
      amount: "- Rs. 12,300.00",
      amountDescription: "Wallet",
    },
    {
      id: 4,
      type: "0",
      description: "CEFT/7181819/Dasun",
      amount: "- Rs. 1800.00",
      amountDescription: "Savings",
    },

    {
      id: 5,
      type: "1",
      description: "Silps/234535/Aurdi",
      amount: "  Rs. 23,000.00",
      amountDescription: "Savings",
    },
    {
      id: 6,
      type: "0",
      description: "Pay/GoldL/Mercantile",
      amount: "- Rs. 12,300.00",
      amountDescription: "Savings",
    },
    {
      id: 7,
      type: "0",
      description: "CEFT/7181819/Dasun",
      amount: "- Rs. 1800.00",
      amountDescription: "Wallet",
    },
  ];

  transactionRenderItem = ({ item }) => (
    <View
      style={[
        GetSavingsTransactionScreenStyles(Android_Theme_Light)
          .transactionItemRowContainer,
      ]}
    >
      {item.type == "0" ? <Icon_arrowUp /> : <Icon_arrowDown />}

      <Text
        style={[
          GetSavingsTransactionScreenStyles(Android_Theme_Light)
            .texttransactionDescription,
        ]}
      >
        {item.description}
      </Text>
      <View
        style={[
          GetSavingsTransactionScreenStyles(Android_Theme_Light)
            .transactionAmountContainer,
        ]}
      >
        <Text
          style={[
            GetSavingsTransactionScreenStyles(Android_Theme_Light)
              .textTransactionAmount,
          ]}
        >
          {item.amount}
        </Text>
        <Text
          style={[
            GetSavingsTransactionScreenStyles(Android_Theme_Light)
              .textTransactionAmountDescription,
          ]}
        >
          {item.amountDescription}
        </Text>
      </View>
    </View>
  );

  componentDidMount() {
    try {
      console.log("this.props.route.params.data", this.props.route.params.data);
      console.log("this.props.route.params.data", this.props.route.params.data.amount);

      this.setState({
        SavingsObject: this.props.route.params.data,
        SavingsAmount: this.props.route.params.data.amount,
      });
    } catch (Error) {
      console.log(
        "[SavingsTransactionScreen] - componentDidMount() EX: " + Error
      );
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log(
        "[SavingsTransactionScreen] - componentWillUnmount() EX: " + Error
      );
    }
  }
  handleTransactionHistoryOnPress = () => {
    try {
      this.props.navigation.navigate("TransactionHistoryScreen");
    } catch (error) {
      console.log("[SavingsTransactionScreen] - handleHome - Error ", error);
    }
  };

  handleBack = () => {
    try {
      this.props.navigation.replace("SavingsScreen");
    } catch (error) {
      console.log("[SavingsTransactionScreen] - handleBack - Error ", error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.replace("DashboardScreen");
    } catch (error) {
      console.log("[SavingsTransactionScreen] - handleHome - Error ", error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          {/* Upper Container */}
          <View
            style={[
              GetSavingsTransactionScreenStyles(Android_Theme_Light)
                .UpperContainer,
            ]}
          >
            <Text
              style={[
                GetSavingsTransactionScreenStyles(Android_Theme_Light)
                  .TextSavings,
              ]}
            >
              {"Savings"}
            </Text>

            <Text
              style={[
                GetSavingsTransactionScreenStyles(Android_Theme_Light)
                  .TextAccountNumber,
              ]}
            >
              {this.state.SavingsObject.accNumber}
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
                {AmountSeperation(this.state.SavingsAmount)[0]}
              </Text>
              <Text
                style={[GetCommonStyles(Android_Theme_Light).amountDecimalText]}
              >
                {AmountSeperation(this.state.SavingsAmount)[1]}
              </Text>
            </View>
          </View>

          {/* Gap */}
          <View style={{ height: 20 }} />

          {/* Middle Container */}
          <View
            style={
              GetSavingsTransactionScreenStyles(Android_Theme_Light)
                .MiddleContainer
            }
          >
            <FlatList
              data={this.tansactionList}
              renderItem={this.transactionRenderItem}
              keyExtractor={(item) => item.id}
            />
          
          </View>

          {/* Bottom Container */}
          <View
            style={
              GetSavingsTransactionScreenStyles(Android_Theme_Light)
                .BottomContainer
            }
          >
            <CommonCardButton
              width={"90%"}
              height={60}
              icon={Android_Theme_Light.ICON_PAYNOW}
              text={"View Transaction History"}
              onPress={this.handleTransactionHistoryOnPress}
            />
          </View>

          {/* Bottom Bar */}
          <View
            style={
              GetSavingsTransactionScreenStyles(Android_Theme_Light).bottomView
            }
          >
            <BottomBar
              BackIcon={Icon_backArrows}
              HomeIcon={Icon_home}
              onPressBackButton={this.handleBack}
              onPressHomeButton={this.handleHome}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SavingsTransactionScreen;
