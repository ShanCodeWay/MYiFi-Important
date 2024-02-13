import React, { Component } from "react"; //Nawodya
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTitleBar from "../../../components/Common/BottomBar/BottomBar";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetFixedDepositsViewScreenStyles from "./FixedDepositsViewScreenStyles";
import CommonCardButton from "../../../components/Common/CardButton/CommonCardButton";
import CommonSummeryView from "../../../components/Common/SummeryView/CommonSummeryView";
import { AmountSeperation } from "../../../../utils/helpers";

//Done by Dinuranga
class FixedDepositsViewScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Date: "2023-11-23",
      FdAmount: 300000,
      FdObject: {},
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
        FdObject: this.props.route.params.data,
        FdAmount: this.props.route.params.data.amount,
        SummeryList: this.SummeryList,
      });
    } catch (Error) {
      console.log(
        "[FixedDepositsViewScreen] - componentDidMount() EX: " + Error
      );
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log(
        "[FixedDepositsViewScreen] - componentWillUnmount() EX: " + Error
      );
    }
  }

  handleBack = () => {
    try {
      this.props.navigation.replace("FixedDepositsScreen");
    } catch (error) {
      console.log("[FixedDepositsViewScreen] - handleBack - Error ", error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.replace("FixedDepositsScreen");
    } catch (error) {
      console.log("[FixedDepositsViewScreen] - handleHome - Error ", error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          {/* Upper Container */}
          <View
            style={[
              GetFixedDepositsViewScreenStyles(Android_Theme_Light)
                .UpperContainer,
            ]}
          >
            <Text
              style={[
                GetFixedDepositsViewScreenStyles(Android_Theme_Light).TextFD,
              ]}
            >
              {"Fixed Deposits"}
            </Text>

            <Text
              style={[
                GetFixedDepositsViewScreenStyles(Android_Theme_Light).TextDate,
              ]}
            >
              {this.state.FdObject.date}
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
                {AmountSeperation(this.state.FdAmount)[0]}
              </Text>
              <Text
                style={[GetCommonStyles(Android_Theme_Light).amountDecimalText]}
              >
                {AmountSeperation(this.state.FdAmount)[1]}
              </Text>
            </View>
            {/* <Text
              style={[
                GetFixedDepositsViewScreenStyles(Android_Theme_Light)
                  .TextTotalAmount,
              ]}
            >
              {"Rs." +
                this.state.FdAmount.toString().replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                )}
            </Text> */}
          </View>

          {/* Middle Container */}
          <View
            style={
              GetFixedDepositsViewScreenStyles(Android_Theme_Light)
                .MiddleContainer
            }
          >
            <CommonSummeryView
              data={this.state.SummeryList}
              width={"90%"}
              numColumns={2}
            />
          </View>

          {/* Bottom Container Start */}
          <View
            style={
              GetFixedDepositsViewScreenStyles(Android_Theme_Light)
                .BottomContainer
            }
          >
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
              icon={Android_Theme_Light.ICON_SEND}
              text={"Send an Inquiry"}
            />

            <CommonCardButton
              width={"90%"}
              height={60}
              icon={Android_Theme_Light.ICON_SAVINGS}
              text={"Withdraw"}
              onPress={() =>
                this.props.navigation.navigate("FixedDepositsViewScreen")
              }
            />
          </View>

          {/* Bottom Bar */}
          <View
            style={
              GetFixedDepositsViewScreenStyles(Android_Theme_Light).bottomView
            }
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

export default FixedDepositsViewScreen;
