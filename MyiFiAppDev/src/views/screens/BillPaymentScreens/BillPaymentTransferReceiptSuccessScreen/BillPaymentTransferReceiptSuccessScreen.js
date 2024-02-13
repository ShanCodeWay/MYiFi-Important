import React, { Component } from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import Icon_backArrows from "../../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../../assets/icons/Icon_home.svg";
import Colors from "../../../../styles/Colors";

import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { GetBillPaymentTransferReceiptSuccessScreenStyles } from "./BillPaymentTransferReceiptSuccessStyles";
import CommonSummeryView from '../../../components/Common/SummeryView/CommonSummeryView';
import {
  Android_Theme_Light,
} from "../../../../styles/Themes";
import BottomTitleBar from "../../../components/Common/BottomBar/BottomBar";
import { AmountSeperation } from "../../../../utils/helpers";


// done by: Nawodya 2024/01/31
class BillPaymentTransferReceiptSuccessScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      successChecked: true,
      amountPayment : "",
      SummeryList: [],
    };
  }
 
  componentDidMount() {
    try {
      //StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
      console.log("************",this.props.route.params.amountPaymenToPay)
      this.setState({
        SummeryList: this.props.route.params.data,
        successChecked: this.props.route.params.success,
        amountPayment: this.props.route.params.amountPaymenToPay,
      });
    } catch (Error) {
      console.log(
        "[BillPaymentTransferReceiptSuccessScreen ] - componentDidMount - Error ",
        Error
      );
    }
  }
  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log(
        "[BillPaymentTransferReceiptSuccessScreen ] - componentWillUnmount - Error ",
        Error
      );
    }
  }

  handleNextButtonPress = () => {
    try {
      //   this.props.navigation.replace(Index.FUND_1);
      console.log("Next button pressed to NAvigate _");
    } catch (error) {
      console.log(
        "[BillPaymentTransferReceiptSuccessScreen ] - Next_Button - Error ",
        error
      );
    }
  };

  handleBack = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
      console.log("left pressed to navigate to MakeAPaymentOtpScreen");
    } catch (error) {
      console.log(
        "[BillPaymentTransferReceiptSuccessScreen ] - left_Button - Error ",
        error
      );
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
      console.log("left pressed to navigate to MakeAPaymentOtpScreen");
    } catch (error) {
      console.log(
        "[BillPaymentTransferReceiptSuccessScreen ] - left_Button - Error ",
        error
      );
    }
  };

  handlePasswordInputChange = (text) => { };

  render() {
    return (
      <>
        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
          <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
            {/* Middle Container */}
            <View
              style={[
                GetBillPaymentTransferReceiptSuccessScreenStyles(Android_Theme_Light)
                  .middleContainer,
              ]}
            >
     {this.state.successChecked ? (<View style={GetBillPaymentTransferReceiptSuccessScreenStyles(Android_Theme_Light).outView}>
        <Text style={GetBillPaymentTransferReceiptSuccessScreenStyles(Android_Theme_Light).title}>Almost there</Text>
       <Text style={GetBillPaymentTransferReceiptSuccessScreenStyles(Android_Theme_Light).secondTitle}>BillPayment</Text>

             </View> ):null
        

     }
             

              {/* ICON_CIRCLECHECKED or ICON_CIRCLE_X */}
              {this.state.successChecked ? (
                <Android_Theme_Light.ICON_CIRCLECHECKED />
              ) : (
                <Android_Theme_Light.ICON_CIRCLE_X width={100} height={100} />
              )}

              {/* Success or Failed Text */}
              <Text
                style={[
                  GetBillPaymentTransferReceiptSuccessScreenStyles(Android_Theme_Light)
                    .subText2,
                ]}
              >
                {this.state.successChecked ? (
                  "Success"
                ) : (
                  <Text
                    style={
                      GetBillPaymentTransferReceiptSuccessScreenStyles(Android_Theme_Light)
                        .errorMsg
                    }
                  >
                    {"Payment Failed"}
                  </Text>
                )}
              </Text>


              {this.state.successChecked ? (
          

          <View
          style={[GetBillPaymentTransferReceiptSuccessScreenStyles(Android_Theme_Light).prizeContainer]}
      >
          <Text style={[GetCommonStyles(Android_Theme_Light).amountRsText]}>
              {"Rs "}
          </Text>
          <Text
              style={[GetCommonStyles(Android_Theme_Light).amountIntegerText]}
          >
              {AmountSeperation(this.state.amountPayment)[0]}
          </Text>
          <Text
              style={[GetCommonStyles(Android_Theme_Light).amountDecimalText]}
          >
              {AmountSeperation(this.state.amountPayment)[1]}
          </Text>
      </View>
              ) : null}

              {this.state.successChecked ? (
                  <CommonSummeryView
                  data={this.state.SummeryList}
                  width={"90%"}
                  numColumns={2}
                  TextColor={Android_Theme_Light.DARK_GRAY_COLOR}
                />
              ):null}
            


            </View>

            {/* Middle Container */}

            {/* Bottom Container*/}
            <View
              style={
                GetBillPaymentTransferReceiptSuccessScreenStyles(Android_Theme_Light)
                  .bottomContainer
              }
            >
              <Android_Theme_Light.ICON_MI_LOGO_DESCRIPTION_ANDROID />
            </View>

            {/* Bottom Bar */}
            <View
              style={
                GetBillPaymentTransferReceiptSuccessScreenStyles(Android_Theme_Light)
                  .bottomView
              }

            >
              {/* <Text style={GetBillPaymentTransferReceiptSuccessScreenStyles(Android_Theme_Light).prize}>Rs.4000.00</Text>
                        <CommonSummeryView
                            data={this.state.SummeryList}
                            width={"90%"}
                            numColumns={2}
                            TextColor={Android_Theme_Light.DARK_GRAY_COLOR}
                        /> */}
              <BottomTitleBar
                icon1={Icon_backArrows}
                icon2={Icon_home}
                onPressIcon1={this.handleBack}
                onPressIcon2={this.handleHome}
              />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default BillPaymentTransferReceiptSuccessScreen;
