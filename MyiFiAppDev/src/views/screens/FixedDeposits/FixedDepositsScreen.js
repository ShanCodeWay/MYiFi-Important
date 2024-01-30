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
import GetFixedDepositsScreenStyles from "./FixedDepositsScreenStyles";

import CommonCardButton from "../../components/Common/CommonCardButton";
import Icon_arrowUp from "../../../assets/icons/Icon_arrowUp.svg";
import Icon_arrowDown from "../../../assets/icons/Icon_arrowDown.svg";
import CommonButton from "../../components/Common/MainButton/CommonButton";
import { AmountSeperation } from "../../../utils/helpers";
import BottomTitleBar from "../../components/Common/BottomTitleBar";

//Done by: Dinuranga 23/01/19
class FixedDepositsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TotalInvest: 30000,
    };
  }
  InvestmentsList = [
    {
      id: 1,

      date: "2023-08-07",
      MDate: "2023-12-09",
      amount: 300000.45,
    },
    {
      id: 2,

      date: "2024-11-27",
      MDate: "2024-12-21",
      amount: 1200000.50,
    },
    {
      id: 3,

      date: "2024-03-27",
      MDate: "2024-10-27",
      amount: 600000.80,
    },
  ];

  InvestmentRenderItem = ({ item }) => (
    <View
      style={[
        GetFixedDepositsScreenStyles(Android_Theme_Light)
          .InvestmentRowMainContainer,
      ]}
    >
      <View
        style={[
          GetFixedDepositsScreenStyles(Android_Theme_Light)
            .InvestmentRowContainer,
        ]}
      >
        <View
          style={[
            GetFixedDepositsScreenStyles(Android_Theme_Light)
              .InvestementRowLeftView,
          ]}
        >
          <Text
            style={[GetFixedDepositsScreenStyles(Android_Theme_Light).TextDate]}
          >
            {item.date}
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Text
              style={[
                GetFixedDepositsScreenStyles(Android_Theme_Light).textMDate,
              ]}
            >
              {"Muturity Date: "}
            </Text>

            <Text
              style={[
                GetFixedDepositsScreenStyles(Android_Theme_Light)
                  .textMDateValue,
              ]}
            >
              {item.MDate}
            </Text>
          </View>
        </View>

        <View
          style={[
            GetFixedDepositsScreenStyles(Android_Theme_Light)
              .InvestementRowRightView,
          ]}
        >
          {/* <View
            style={[
              GetFixedDepositsScreenStyles(Android_Theme_Light).AmountContainer,
            ]}
          >
            <Text
              style={[GetFixedDepositsScreenStyles(Android_Theme_Light).TextRs]}
            >
              {"Rs. "}
            </Text>

            <Text
              style={[
                GetFixedDepositsScreenStyles(Android_Theme_Light).textFDAmount,
              ]}
            >
              {item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
          </View> */}


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
                  {"Rs. "}
                </Text>

                <Text
                  style={[
                    GetDashboardScreenStyles(Android_Theme_Light)
                      .textBalanceIntegerAmount,{fontSize:Android_Theme_Light.FONT_SIZE_HEADER_TWO} ,
                  ]}
                >
                  {AmountSeperation(item.amount)[0]}
                </Text>
                <Text
                  style={[
                    GetDashboardScreenStyles(Android_Theme_Light)
                      .textBalanceDecimalAmount,
                  ]}
                >
                  {AmountSeperation(item.amount)[1]}
                </Text>
              </View>


          

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
              this.props.navigation.navigate("FixedDepositsViewScreen", {
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
    } catch {}
  };

  handleHome = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
    } catch {}
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
      console.log("[FixedDepositsScreen] - componentDidMount() EX: " + Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log(
        "[FixedDepositsScreen] - componentWillUnmount() EX: " + Error
      );
    }
  }

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          {/* Upper View (User details and Buttons) */}
          <View
            style={[
              GetFixedDepositsScreenStyles(Android_Theme_Light).UpperView,
            ]}
          >
            <View
              style={[
                GetFixedDepositsScreenStyles(Android_Theme_Light).LeftView,
              ]}
            >
              <Text
                style={[
                  GetFixedDepositsScreenStyles(Android_Theme_Light)
                    .TextFixedDeposit,
                ]}
              >
                {"Fixed Deposits"}
              </Text>
              <Text
                style={[
                  GetFixedDepositsScreenStyles(Android_Theme_Light)
                    .TextFdInvest,
                ]}
              >
                {"FD Investments"}
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
          {/* Upper view End */}

          {/* Middle Button View */}
          <View
            style={[
              GetFixedDepositsScreenStyles(Android_Theme_Light)
                .middleContainerView,
            ]}
          >
            <CommonCardButton
              width={"100%"}
              height={64}
              icon={Android_Theme_Light.ICON_INVEST}
              text={"Create a New FD"}
              onPress={() => null}
            />

            <CommonCardButton
              width={"100%"}
              height={64}
              icon={Android_Theme_Light.ICON_LOAN}
              text={"Withdraw"}
              onPress={() => null}
            />
          </View>
          {/*End Middle Button View */}

          {/* Investments List Start */}
          <View
            style={[
              GetFixedDepositsScreenStyles(Android_Theme_Light)
                .InvestmentsContainerView,
            ]}
          >
            <Text
              style={[
                GetFixedDepositsScreenStyles(Android_Theme_Light)
                  .textRecentTransaction,
              ]}
            >
              {"Current Investments"}
            </Text>

            <View style={{ flex: 1, width: "100%" }}>
              <FlatList
                data={this.InvestmentsList}
                renderItem={this.InvestmentRenderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
          {/* Investments List End */}

          <View
            style={GetFixedDepositsScreenStyles(Android_Theme_Light).bottomView}
          >
            <BottomTitleBar
              icon1={Android_Theme_Light.ICON_BACK_ARROWS}
              icon2={Android_Theme_Light.ICON_HOME}
              onPressIcon1={this.handleBack}
              onPressIcon2={this.handleHome}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default FixedDepositsScreen;
