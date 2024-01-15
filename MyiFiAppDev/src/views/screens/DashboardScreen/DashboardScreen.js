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
import Colors from "../../../styles/Colors";
import Fonts from "../../../styles/Fonts";
import DashboardScreenStyles from "./DashboardScreenStyles";
import TitleBar from "../../components/Common/TitleBar";
import Icon_navMenu from "../../../assets/icons/Icon_navMenu.svg";
import CommonCardButton from "../../components/Common/CommonCardButton";
import Icon_send from "../../../assets/icons/Icon_send.svg";
import Icon_invest from "../../../assets/icons/Icon_invest.svg";
import Icon_payments from "../../../assets/icons/Icon_payments.svg";
import Icon_loan from "../../../assets/icons/Icon_loan.svg";
import Icon_externalOpen from "../../../assets/icons/Icon_externalOpen.svg";
import LinearGradient from "react-native-linear-gradient";
import EasyAcessButton from "./EasyAcessButton";
import Icon_arrowUp from "../../../assets/icons/Icon_arrowUp.svg";
import Icon_arrowDown from "../../../assets/icons/Icon_arrowDown.svg";

//Done by: Dinuranga 23/01/05
class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state1: "",
    };
  }
  tansactionList = [
    {
      id: 1,
      type: "0",
      description: "CEFT/7181819/Dasun",
      amount: "- Rs. 1800.00",
    },
    {
      id: 2,
      type: "1",
      description: "Silps/234535/Aurdi",
      amount: "  Rs. 23,000.00",
    },
    {
      id: 3,
      type: "0",
      description: "Pay/GoldL/Mercantile",
      amount: "- Rs. 12,300.00",
    },
    {
      id: 4,
      type: "0",
      description: "CEFT/7181819/Dasun",
      amount: "- Rs. 1800.00",
    },

    {
      id: 5,
      type: "1",
      description: "Silps/234535/Aurdi",
      amount: "  Rs. 23,000.00",
    },
    {
      id: 6,
      type: "0",
      description: "Pay/GoldL/Mercantile",
      amount: "- Rs. 12,300.00",
    },
    {
      id: 7,
      type: "0",
      description: "CEFT/7181819/Dasun",
      amount: "- Rs. 1800.00",
    },
  ];

  transactionRenderItem = ({ item }) => (
    <View
      style={[
        ,
        //DashboardScreenStyles.transactionRenderItemView
        {
          padding: 10,
          width: "100%",
          // backgroundColor: 'red',
          justifyContent: "space-between",
          flexDirection: "row",
          alignContent: "flex-start",
          alignItems: "center",

          alignSelf: "center",
        },
      ]}
    >
      <View style={{ marginHorizontal: 10 }}>
        {item.type == "0" ? <Icon_arrowUp /> : <Icon_arrowDown />}
      </View>

      <Text
        style={[
          GetCommonStyles(Android_Theme_Light).TextStyleBody14Medium,
          { color: Colors.BLACK_DEEP, flex: 1 },
        ]}
      >
        {item.description}
      </Text>
      <Text
        style={[
          GetCommonStyles(Android_Theme_Light).TextStyleBody16Medium,
          { color: Colors.BLACK_DEEP },
        ]}
      >
        {item.amount}
      </Text>
    </View>
  );

  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[] - componentDidMount - Error ", Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[] - componentWillUnmount - Error ", Error);
    }
  }

  testFunction = () => {
    try {
    } catch (Error) {
      console.log("[] - testFunction - Error ", Error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={DashboardScreenStyles.ParentContainer}>
          <View style={[DashboardScreenStyles.titleBarView]}>
            <Icon_navMenu />

            <View style={[DashboardScreenStyles.greetingView]}>
              <Text
                style={[GetCommonStyles(Android_Theme_Light).TextStyleH2Medium]}
              >
                Hi Dhamitha,
              </Text>
              <Text
                style={[
                  GetCommonStyles(Android_Theme_Light).TextStyleBody16Medium,
                ]}
              >
                Good Morning!
              </Text>
            </View>
            <Image
              source={require("../../../assets/images/Img_avatarPerson.png")}
              style={{ width: 40, height: 40 }}
            />
          </View>

          <View style={[DashboardScreenStyles.middleContainerView]}>
            <View style={[DashboardScreenStyles.balanceContainerView]}>
              <View style={[DashboardScreenStyles.topUpView]}>
                <Text
                  style={[
                    GetCommonStyles(Android_Theme_Light)
                      .TextStyleCaption12Medium,
                    {
                      color: Colors.BLUE_ACCENT,
                    },
                  ]}
                >
                  Top Up
                </Text>
              </View>

              <Text
                style={[
                  GetCommonStyles(Android_Theme_Light).TextStyleBody16Medium,
                ]}
              >
                Balance
              </Text>

              <Text
                style={[
                  GetCommonStyles(Android_Theme_Light).TextStyleH3Medium,
                  { color: Colors.GREEN_DARK },
                ]}
              >
                {"  Rs. 6,700,450.00"}
              </Text>
            </View>

            <CommonCardButton
              width={"95%"}
              height={64}
              icon={Icon_send}
              text={"Send"}
            />
            <CommonCardButton
              width={"95%"}
              height={64}
              icon={Icon_invest}
              text={"Invest"}
            />
            <CommonCardButton
              width={"95%"}
              height={64}
              icon={Icon_payments}
              text={"Payments"}
            />
            <CommonCardButton
              width={"95%"}
              height={64}
              icon={Icon_loan}
              text={"Leasing/ Loans"}
            />
          </View>

          <View style={[DashboardScreenStyles.bottomContainerView]}>
            <Text
              style={[GetCommonStyles(Android_Theme_Light).TextStyleH3Medium]}
            >
              Easy Access
            </Text>

            <View style={[DashboardScreenStyles.easyAccessContainerView]}>
              <EasyAcessButton
                title={"Transfer"}
                icon={Icon_externalOpen}
                onPress={null}
              />
              <EasyAcessButton
                title={"Payments"}
                icon={Icon_payments}
                onPress={null}
              />
              <EasyAcessButton title={"FD"} icon={Icon_invest} onPress={null} />
              <EasyAcessButton
                title={"Savings"}
                icon={Icon_loan}
                onPress={null}
              />
              <EasyAcessButton
                title={"Transfer"}
                icon={Icon_externalOpen}
                onPress={null}
              />
            </View>
            <Text
              style={[GetCommonStyles(Android_Theme_Light).TextStyleH3Medium]}
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
