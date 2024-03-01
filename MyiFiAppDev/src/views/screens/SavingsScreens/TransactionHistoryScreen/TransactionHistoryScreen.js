// TransactionHistoryScreenStyles.js

import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon_backArrows from "../../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../../assets/icons/Icon_home.svg";
import BottomBar from "../../../components/Common/BottomBar/BottomBar";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetTransactionHistoryScreenStyles from "./TransactionHistoryScreenStyles";
import CommonCardButton from "../../../components/Common/CardButton/CommonCardButton";
import Icon_arrowUp from "../../../../assets/icons/Icon_arrowUp.svg";
import Icon_arrowDown from "../../../../assets/icons/Icon_arrowDown.svg";
import { AmountSeperation } from "../../../../utils/helpers";

class TransactionHistoryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Date: "2023-11-23",
      SavingsAmount: 300000,
      SavingsObject: {},
      HistoryAppear: false,
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
        GetTransactionHistoryScreenStyles(Android_Theme_Light)
          .transactionItemRowContainer,
      ]}
    >
      {item.type == "0" ? <Icon_arrowUp /> : <Icon_arrowDown />}

      <Text
        style={[
          GetTransactionHistoryScreenStyles(Android_Theme_Light)
            .texttransactionDescription,
        ]}
      >
        {item.description}
      </Text>
      <View
        style={[
          GetTransactionHistoryScreenStyles(Android_Theme_Light)
            .transactionAmountContainer,
        ]}
      >
        <Text
          style={[
            GetTransactionHistoryScreenStyles(Android_Theme_Light)
              .textTransactionAmount,
          ]}
        >
          {item.amount}
        </Text>
        <Text
          style={[
            GetTransactionHistoryScreenStyles(Android_Theme_Light)
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

      this.setState({
        //SavingsObject: this.props.route.params.data,
        //SavingsAmount: this.props.route.params.data.amount,
        SummeryList: this.SummeryList,
      });
    } catch (Error) {
      console.log(
        "[TransactionHistoryScreen] - componentDidMount() EX: " + Error
      );
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log(
        "[TransactionHistoryScreen] - componentWillUnmount() EX: " + Error
      );
    }
  }
  handleTransactionHistoryOnPress = () => {
    try {
      this.props.navigation.replace("");
    } catch (error) {
      console.log("[TransactionHistoryScreen] - handleTransactionHistoryOnPress - Error ", error);
    }
  };

  handleFilterOnPress = () => {
    try {
      console.log("********");
      this.setState({ HistoryAppear: true });
    } catch (error) {
      console.log(
        "[TransactionHistoryScreen] - handleFilterOnPress - Error ",
        error
      );
    }
  };

  handleBack = () => {
    try {
      this.props.navigation.replace("SavingsTransactionScreen");
    } catch (error) {
      console.log("[TransactionHistoryScreen] - handleBack - Error ", error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.replace("DashboardScreen");
    } catch (error) {
      console.log("[TransactionHistoryScreen] - handleHome - Error ", error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          {/* Upper Container */}
          <View
            style={[
              GetTransactionHistoryScreenStyles(Android_Theme_Light)
                .UpperContainer,
            ]}
          >
            <Text
              style={[
                GetTransactionHistoryScreenStyles(Android_Theme_Light)
                  .TextSavings,
              ]}
            >
              {"Transaction History"}
            </Text>

            {/* Gap */}
            <View style={{ height: 20 }} />

            <View
              style={
                GetTransactionHistoryScreenStyles(Android_Theme_Light)
                  .calenderDatesSelectContainer
              }
            >
              <CommonCardButton
                width={"45%"}
                height={50}
                icon={Android_Theme_Light.ICON_CALENDER}
                text={"2023-03-17"}
                onPress={null}
              />
              <Text
                style={
                  GetTransactionHistoryScreenStyles(Android_Theme_Light).toText
                }
              >
                {"to"}
              </Text>
              <CommonCardButton
                width={"45%"}
                height={50}
                icon={Android_Theme_Light.ICON_CALENDER}
                text={"2024-01-20"}
                onPress={null}
              />
            </View>
          </View>

          <View
            style={
              GetTransactionHistoryScreenStyles(Android_Theme_Light)
                .allDatesSelectButtonContainer
            }
          >
            {/* Filter Button */}
            <CommonCardButton
              width={"30%"}
              height={50}
              icon={Android_Theme_Light.ICON_PAYMENT}
              text={"All"}
              onPress={this.handleFilterOnPress}
            />
          </View>

          {/* Gap */}
          <View style={{ height: 10 }} />

          {/* Middle Container */}
          <View
            style={
              GetTransactionHistoryScreenStyles(Android_Theme_Light)
                .MiddleContainer
            }
          >
            {this.state.HistoryAppear ? (
              <FlatList
                data={this.tansactionList}
                renderItem={this.transactionRenderItem}
                keyExtractor={(item) => item.id}
              />
            ) : null}
          </View>

          {/* Bottom Bar */}
          <View
            style={
              GetTransactionHistoryScreenStyles(Android_Theme_Light).bottomView
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

export default TransactionHistoryScreen;
