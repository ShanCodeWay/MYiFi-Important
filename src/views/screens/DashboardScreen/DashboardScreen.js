// Splash.js
import React, { Component } from "react";
import { View, Text, Touchable, Modal, Image } from "react-native";
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

//Done by: Dinuranga 23/01/05
class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state1: "",
    };
  }

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

          <ScrollView style={{ width: "100%" }}>
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
                  icon={Icon_externalOpen}
                  onPress={null}
                />
                <EasyAcessButton
                  title={"FD"}
                  icon={Icon_externalOpen}
                  onPress={null}
                />
                <EasyAcessButton
                  title={"Savings"}
                  icon={Icon_externalOpen}
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

              <View>

                
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default DashboardScreen;
