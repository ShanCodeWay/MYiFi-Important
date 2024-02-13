// Splash.js
import React, { Component } from "react";
import { View, Text, Image, FlatList } from "react-native";
import {  TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import {
  Android_Theme_Light,
} from "../../../styles/Themes";
import GetLeasingLoanScreenStyles from "./LeasingLoanScreenStyles";
import CommonCardButton from "../../components/Common/CardButton/CommonCardButton";
import CommonButton from "../../components/Common/MainButton/CommonButton";
import { AmountSeperation } from "../../../utils/helpers";
import BottomTitleBar from "../../components/Common/BottomBar/BottomBar";

//Done by: Dinuranga 23/01/19
class LeasingLoanScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TotalInvest: 30000,
    };
  }
  InvestmentsList = [
    {
      id: 1,

      LeaseId: "VLAK000378",
      Rental: 4900,
      amount: 85500.0,
    },

    {
      id: 2,
      LeaseId: "VLAK000379",
      Rental: 9000,
      amount: 100000.3,
    },
  ];

  InvestmentRenderItem = ({ item }) => (
    <View
      style={[
        GetLeasingLoanScreenStyles(Android_Theme_Light)
          .InvestmentRowMainContainer,
      ]}
    >
      <View
        style={[
          GetLeasingLoanScreenStyles(Android_Theme_Light)
            .InvestmentRowContainer,
        ]}
      >
        <View
          style={[
            GetLeasingLoanScreenStyles(Android_Theme_Light)
              .InvestementRowLeftView,
          ]}
        >
          <Text
            style={[GetLeasingLoanScreenStyles(Android_Theme_Light).TextDate]}
          >
            {item.LeaseId}
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Text
              style={[
                GetLeasingLoanScreenStyles(Android_Theme_Light).textMDate,
              ]}
            >
              {"Rental: "}
            </Text>

            <Text
              style={[
                GetLeasingLoanScreenStyles(Android_Theme_Light).textMDateValue,
              ]}
            >
              {"Rs." + AmountSeperation(item.Rental)[0]}
            </Text>
          </View>
        </View>

        <View
          style={[
            GetLeasingLoanScreenStyles(Android_Theme_Light)
              .InvestementRowRightView,
          ]}
        >
          {/* <View
            style={[
              GetLeasingLoanScreenStyles(Android_Theme_Light).AmountContainer,
            ]}
          >
            <Text
              style={[GetLeasingLoanScreenStyles(Android_Theme_Light).TextRs]}
            >
              {"Rs. "}
            </Text>

            <Text
              style={[
                GetLeasingLoanScreenStyles(Android_Theme_Light).textFDAmount,
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
                  .textBalanceIntegerAmount,
                { fontSize: Android_Theme_Light.FONT_SIZE_HEADER_TWO },
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
              this.props.navigation.navigate("LeasingLoanViewScreen", {
                data: item,
              })
            }
          />
        </View>
      </View>

      <View
        style={[
          GetLeasingLoanScreenStyles(Android_Theme_Light).HorizontalDevider,
        ]}
      />
    </View>
  );

  handleMakeAPayment = () => {
    try {
      this.props.navigation.navigate("MakeAPayementScreen");
    } catch {
      console.log('[LeasingLoanScreen] - handleMakeAPayment() EX: ' + Error)
    }
  };

  handleBack = () => {
    try {
      this.props.navigation.navigate("LeasingLoanMainScreen");
    } catch {
      console.log("[LeasingLoanScreen] - handleBack() EX: " + Error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.navigate("LeasingLoanMainScreen");
    } catch {
      console.log("[LeasingLoanScreen] - handleHome() EX: " + Error);
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
      console.log("[LeasingLoanScreen] - componentDidMount() EX: " + Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[LeasingLoanScreen] - componentWillUnmount() EX: " + Error);
    }
  }

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          {/* Upper View (User details and Buttons) */}
          <View
            style={[GetLeasingLoanScreenStyles(Android_Theme_Light).UpperView]}
          >
            <View
              style={[GetLeasingLoanScreenStyles(Android_Theme_Light).LeftView]}
            >
              <Text
                style={[
                  GetLeasingLoanScreenStyles(Android_Theme_Light)
                    .TextFixedDeposit,
                ]}
              >
                {"Leasing/Loans"}
              </Text>
              <Text
                style={[
                  GetLeasingLoanScreenStyles(Android_Theme_Light).TextFdInvest,
                ]}
              >
                {"Total Leasing and Loans"}
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

          {/* Middle Buttons View */}
          <View
            style={[
              GetLeasingLoanScreenStyles(Android_Theme_Light)
                .middleContainerView,
            ]}
          >
            <CommonCardButton
              width={"100%"}
              height={64}
              icon={Android_Theme_Light.ICON_LOAN}
              text={"Apply for a new Leasing"}
              onPress={() => null}
            />

            <CommonCardButton
              width={"100%"}
              height={64}
              icon={Android_Theme_Light.ICON_PAYNOW}
              text={"Make a Payment"}
              onPress={() => this.handleMakeAPayment()}
            />
          </View>
          {/*End Middle Button View */}

          {/* Investments List Start */}
          <View
            style={[
              GetLeasingLoanScreenStyles(Android_Theme_Light)
                .InvestmentsContainerView,
            ]}
          >
            <View
              style={
                GetLeasingLoanScreenStyles(Android_Theme_Light)
                  .LoanFacilityTextContainer
              }
            >
              <Text
                style={[
                  GetLeasingLoanScreenStyles(Android_Theme_Light)
                    .textRecentTransaction,
                ]}
              >
                {"Current Leasing/ Loans Facilities"}
              </Text>
            </View>

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
            style={GetLeasingLoanScreenStyles(Android_Theme_Light).bottomView}
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

export default LeasingLoanScreen;
