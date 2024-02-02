// Splash.js
import React, { Component } from "react";
import { View, Text, Touchable, Modal, Image, FlatList } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import {
  Android_Theme_Light,
  Android_Theme_Dark,
} from "../../../styles/Themes";
import GetDashboardScreenStyles from "./DashboardScreenStyles";

import CommonCardButton from "../../components/Common/CommonCardButton";
import Icon_arrowUp from "../../../assets/icons/Icon_arrowUp.svg";
import Icon_arrowDown from "../../../assets/icons/Icon_arrowDown.svg";
import Index from "../../../configs/Index"; 

import { AmountSeperation, GetGreeting } from "../../../utils/helpers";

//import { DrawerActions } from '@react-navigation/native';

//Done by: Dinuranga 23/01/05
class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: 'Hi Dhamitha',
      Balance: 6700450.35,
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


  handleSendButton = () => {
    try {
      this.props.navigation.navigate("FTScreen");
    } catch {}
  };

  handleInvestButton = () => {
    try {
      this.props.navigation.navigate("InvestMainScreen");
    } catch {}
  };
  handlePaymentButton = () => {
    try {
      this.props.navigation.navigate(Index.BILL_1);
    } catch {}
  };
  handleLeasingLoanButton = () => {
    try {
      this.props.navigation.navigate('LeasingLoanMainScreen');
    } catch {}
  };
  handleTransferButton = () => {
    try {
      this.props.navigation.navigate(Index.FUND_1);
    } catch {}
  };
  handleLeasingLoas = () => {
    try {
      this.props.navigation.navigate("BillPayement");
    } catch {}
  };

  handleBillerManagement = () => {
    try {
      this.props.navigation.navigate("BillerManagementScreen");
    } catch {}
  };

  handleSettings = () => {
    try {
      //this.props.navigation.dispatch(DrawerActions.toggleDrawer());
      this.props.navigation.navigate(Index.SETT_1);
    } catch {}
  };

  transactionRenderItem = ({ item }) => (
    <View
      style={[
        GetDashboardScreenStyles(Android_Theme_Light)
          .transactionItemRowContainer,
      ]}
    >
      {item.type == "0" ? <Icon_arrowUp /> : <Icon_arrowDown />}

      <Text
        style={[
          GetDashboardScreenStyles(Android_Theme_Light)
            .texttransactionDescription,
        ]}
      >
        {item.description}
      </Text>
      <View
        style={[
          GetDashboardScreenStyles(Android_Theme_Light)
            .transactionAmountContainer,
        ]}
      >
        <Text
          style={[
            GetDashboardScreenStyles(Android_Theme_Light).textTransactionAmount,
          ]}
        >
          {item.amount}
        </Text>
        <Text
          style={[
            GetDashboardScreenStyles(Android_Theme_Light)
              .textTransactionAmountDescription,
          ]}
        >
          {item.amountDescription}
        </Text>
      </View>
    </View>
  );

  EasyAcessButton = ({ onPress, icon: IconComponent, title }) => {
    return (
      <View>
        <TouchableOpacity
          style={[
            GetDashboardScreenStyles(Android_Theme_Light).easyAccessButtonView,
          ]}
          onPress={onPress}
        >
          <View
            style={[
              GetDashboardScreenStyles(Android_Theme_Light)
                .easyAccessIconButtonView,
            ]}
          >
            <IconComponent />
          </View>
          <Text
            style={[
              GetDashboardScreenStyles(Android_Theme_Light)
                .textEasyAccessbtnTitle,
              {
                marginTop: 10,
              },
            ]}
          >
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[DashboardScreen] - componentDidMount() EX: " + Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[DashboardScreen] - componentWillUnmount() EX: " + Error);
    }
  }

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <View
            style={[GetDashboardScreenStyles(Android_Theme_Light).titleBarView]}
          >
            <TouchableOpacity 
            onPress={this.handleSettings}>
              <Android_Theme_Light.ICON_DRAWERMENU />
            </TouchableOpacity>

            <View
              style={[
                GetDashboardScreenStyles(Android_Theme_Light).greetingView,
              ]}
            >
              <Text
                style={[
                  GetDashboardScreenStyles(Android_Theme_Light).textUserName,
                ]}
              >
              {this.state.UserName}
              </Text>
              <Text
                style={[
                  GetDashboardScreenStyles(Android_Theme_Light).textGreeting,
                ]}
              >
              {GetGreeting()} 
              </Text>
            </View>

            <TouchableOpacity>
              <Image
                source={require("../../../assets/images/Img_avatarPerson.png")}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={[
              GetDashboardScreenStyles(Android_Theme_Light).middleContainerView,
            ]}
          >
            <View
              style={[
                GetDashboardScreenStyles(Android_Theme_Light)
                  .balanceContainerView,
              ]}
            >
              <View
                style={[
                  GetDashboardScreenStyles(Android_Theme_Light).topUpView,
                ]}
              >
                <Text
                  style={[
                    GetDashboardScreenStyles(Android_Theme_Light).textTopUP,
                  ]}
                >
                  Top Up
                </Text>
              </View>

              <Text
                style={[
                  GetDashboardScreenStyles(Android_Theme_Light).textBalance,
                ]}
              >
                Balance
              </Text>
              <View
                style={[
                  GetDashboardScreenStyles(Android_Theme_Light).AmountContainer,
                ]}
              >
                <Text
                  style={[
                    GetDashboardScreenStyles(Android_Theme_Light).textBalanceRs,
                  ]}
                >
                  {"Rs."}
                </Text>

                <Text
                  style={[
                    GetDashboardScreenStyles(Android_Theme_Light)
                      .textBalanceIntegerAmount,
                  ]}
                >
                  {AmountSeperation(this.state.Balance)[0]}
                </Text>
                <Text
                  style={[
                    GetDashboardScreenStyles(Android_Theme_Light)
                      .textBalanceDecimalAmount,
                  ]}
                >
                  {AmountSeperation(this.state.Balance)[1]}
                </Text>
              </View>
            </View>

            <CommonCardButton
              width={"100%"}
              height={64}
              icon={Android_Theme_Light.ICON_SEND}
              text={"Send"}
              onPress={() => this.handleSendButton()}
            />
            <CommonCardButton
              width={"100%"}
              height={64}
              icon={Android_Theme_Light.ICON_INVEST}
              text={"Invest"}
              onPress={() => this.handleInvestButton()}
            />
            <CommonCardButton
              width={"100%"}
              height={64}
              icon={Android_Theme_Light.ICON_PAYMENT}
              text={"Payments"}
              onPress={() => this.handlePaymentButton()}
            />
            <CommonCardButton
              width={"100%"}
              height={64}
              icon={Android_Theme_Light.ICON_LOAN}
              text={"Leasing/ Loans"}
              onPress={() => this.handleLeasingLoanButton()}
            />
            <CommonCardButton
              width={"100%"}
              height={64}
              icon={Android_Theme_Light.ICON_BILLER_MANAGEMENT}
              text={"Billers Management"}
              onPress={() => this.handleBillerManagement()}
            />
          </View>

          <View
            style={[
              GetDashboardScreenStyles(Android_Theme_Light).bottomContainerView,
            ]}
          >
            <Text
              style={[
                GetDashboardScreenStyles(Android_Theme_Light).textEasyAccess,
              ]}
            >
              Easy Access
            </Text>

            <View
              style={[
                GetDashboardScreenStyles(Android_Theme_Light)
                  .easyAccessContainerView,
              ]}
            >
              <this.EasyAcessButton
                title={"Transfer"}
                icon={Android_Theme_Light.ICON_EXTERNALOPEN}
                onPress={() => this.handleTransferButton()}
              />
              <this.EasyAcessButton
                title={"Payments"}
                icon={Android_Theme_Light.ICON_PAYMENT}
                onPress={() => this.handlePaymentButton()}
              />

              <this.EasyAcessButton
                title={"FD"}
                icon={Android_Theme_Light.ICON_INVEST}
                onPress={null}
              />
              <this.EasyAcessButton
                title={"Savings"}
                icon={Android_Theme_Light.ICON_SAVINGS}
                onPress={null}
              />
            </View>
            <Text
              style={[
                GetDashboardScreenStyles(Android_Theme_Light)
                  .textRecentTransaction,
              ]}
            >
              Recent Transactions
            </Text>

            <View style={{ flex: 1 }}>
              <FlatList
                data={this.tansactionList}
                renderItem={this.transactionRenderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>


          
        </View>
      </SafeAreaView>
    );
  }
}

export default DashboardScreen;
