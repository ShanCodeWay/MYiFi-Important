import React, { Component } from "react"; //Nawodya
import { View, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomBar from "../../../components/Common/BottomBar/BottomBar";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetGoldLoanViewScreenStyles from "./GoldLoanViewScreenStyles";
import CommonCardButton from "../../../components/Common/CardButton/CommonCardButton";
import CommonSummeryView from "../../../components/Common/SummeryView/CommonSummeryView";
import { AmountSeperation } from "../../../../utils/helpers";

//Done By: Dinuranga 24/01/30
class GoldLoanViewScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Date: "2023-11-23",
      LeaseAmount: 300000,
      ObjLease: {},
      SummeryList: [],
    };
  }
  SummeryList = [
    {
      label: "Start Date",
      value: "2023/01/12",
    },
    {
      label: "Ends",
      value: "2028/01/13",
    },
    {
      label: "No. Payments",
      value: "60",
    },
    {
      label: "Rental",
      value: "Rs.49.000",
    },
    {
      label: "Arrears",
      value: "Rs.49,000",
    },
    {
      label: "Next Payment",
      value: "2023/08/29",
    },
    {
      label: "This Month",
      value: "Rs.102,000",
    },
    {
      label: "Payment Status",
      value: "Pending",
    },
  ];

  componentDidMount() {
    try {
      console.log("this.props.route.params.data", this.props.route.params.data);

      this.setState({
        ObjLease: this.props.route.params.data,
        LeaseAmount: this.props.route.params.data.amount,
        SummeryList: this.SummeryList,
      });
    } catch (Error) {
      console.log("[GoldLoanViewScreen] - componentDidMount() EX: " + Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log(
        "[GoldLoanViewScreen] - componentWillUnmount() EX: " + Error
      );
    }
  }

  handleBack = () => {
    try {
      this.props.navigation.replace("GoldLoanScreen");
    } catch (error) {
      console.log("[GoldLoanViewScreen] - handleBack() - EX: ", error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.replace("LeasingLoanMainScreen");
    } catch (error) {
      console.log("[GoldLoanViewScreen] - handleHome() - EX: ", error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          {/* Upper Details Container */}
          <View
            style={[
              GetGoldLoanViewScreenStyles(Android_Theme_Light)
                .UpperContainer,
            ]}
          >
            <Text
              style={[
                GetGoldLoanViewScreenStyles(Android_Theme_Light).TextLease,
              ]}
            >
              {"Gold Loans"}
            </Text>

            <Text
              style={[
                GetGoldLoanViewScreenStyles(Android_Theme_Light).TextLeaseID,
              ]}
            >
              {this.state.ObjLease.LeaseId}
            </Text>

            <View
              style={[GetCommonStyles(Android_Theme_Light).amountContainer]}
            >
              <Text
                style={[
                  GetGoldLoanViewScreenStyles(Android_Theme_Light)
                    .amountRsText,
                ]}
              >
                {"Rs "}
              </Text>
              <Text
                style={[
                  GetGoldLoanViewScreenStyles(Android_Theme_Light)
                    .LoanIntegerText,
                ]}
              >
                {AmountSeperation(this.state.LeaseAmount)[0]}
              </Text>
              <Text
                style={[
                  GetGoldLoanViewScreenStyles(Android_Theme_Light)
                    .LoanDecimalText,
                ]}
              >
                {AmountSeperation(this.state.LeaseAmount)[1]}
              </Text>
            </View>
          </View>

          {/* Middle Summery Details */}
          <View
            style={
              GetGoldLoanViewScreenStyles(Android_Theme_Light)
                .MiddleContainer
            }
          >
            <CommonSummeryView
              data={this.state.SummeryList}
              width={"90%"}
              numColumns={2}
            />
          </View>

          {/*bottom Button Container */}
          <View
            style={
              GetGoldLoanViewScreenStyles(Android_Theme_Light)
                .BottomContainer
            }
          >
            <CommonCardButton
              width={"90%"}
              height={60}
              icon={Android_Theme_Light.ICON_SEND}
              text={"Send an Inquiry"}
            />

            <CommonCardButton
              width={"90%"}
              height={60}
              icon={Android_Theme_Light.ICON_PAYNOW}
              text={"Make a Payment"}
              onPress={() =>
                this.props.navigation.navigate("MakeAPayementScreen")
              }
            />

            <CommonCardButton
              width={"90%"}
              height={60}
              icon={Android_Theme_Light.ICON_SAVINGS}
              text={"Previous payments"}
              onPress={() =>
                this.props.navigation.navigate("GoldLoanViewScreen")
              }
            />
          </View>

          {/* Bottom Bar */}
          <View
            style={
              GetGoldLoanViewScreenStyles(Android_Theme_Light).bottomView
            }
          >
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

export default GoldLoanViewScreen;
