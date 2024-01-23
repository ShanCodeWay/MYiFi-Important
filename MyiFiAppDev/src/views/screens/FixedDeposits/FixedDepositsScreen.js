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
      amount: 300000,
    },
    {
      id: 2,

      date: "2024-11-27",
      MDate: "2024-12-21",
      amount: 1200000,
    },
    {
      id: 3,

      date: "2024-03-27",
      MDate: "2024-10-27",
      amount: 600000,
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
          <View
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
          </View>

          <CommonButton
            type={"1"}
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
                style={[
                  GetFixedDepositsScreenStyles(Android_Theme_Light)
                    .AmountContainer,
                ]}
              >
                <Text
                  style={[
                    GetFixedDepositsScreenStyles(Android_Theme_Light).TextRs,
                  ]}
                >
                  {"Rs. "}
                </Text>
                <Text
                  style={[
                    GetFixedDepositsScreenStyles(Android_Theme_Light)
                      .TextTotalInvest,
                  ]}
                >
                  {this.state.TotalInvest.toString().replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ","
                  )}
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
        </View>
      </SafeAreaView>
    );
  }
}

export default FixedDepositsScreen;
