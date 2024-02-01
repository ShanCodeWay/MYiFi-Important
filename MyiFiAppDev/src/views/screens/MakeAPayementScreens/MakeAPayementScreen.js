// MakeAPayementScreen.js

import React, { Component } from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import Icon_backArrows from "../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../assets/icons/Icon_home.svg";
import { Android_Theme_Light } from "../../../styles/Themes";
import GetMakeAPayementScreenStyles from "./MakeAPayementScreenStyles";
import CommonButton from "../../components/Common/MainButton/CommonButton";
import CommonInputField from "../../components/Common/TextInput/CommonInputField";
import ValidationDialogs from "../../components/Common/ValidationDialogs";
import CommonSpinnerLong from "../../components/Common/CommonSpinnerLong";
import BottomTitleBar from "../../components/Common/BottomTitleBar";

// done by: Randima 2024/01/23
class MakeAPayementScreen extends Component {
  constructor(props) {
    super(props);
    this.TransferFromRef = React.createRef();
    this.AmountInputRef = React.createRef();
    this.RemarksInputRef = React.createRef();

    this.state = {
     
      isVisibleValidationDialog: false,
      selectedAmount: "",
      amount: "",
      selectedAccount: "40011122211",
      valueRemark: "",
      FdAccountNo: "405205405207",
    };
  }

  handleValidationDialog = () => {
    this.setState({ isVisibleValidationDialog: true });
  };

  handleValidationDialogYes = () => {
    const dataArray = [
      { key: "FD Account No", value: this.state.FdAccountNo },
      { key: "From", value: this.state.selectedAccount },
      { key: "Date", value: "2024-01-01" },
      { key: "Time", value: "15.23" },
      { key: "Remark", value: this.state.valueRemark },
      { key: "", value: "" },
    ];

    this.props.navigation.navigate("MakeAPaymentViewScreen", {
      data: dataArray,
      amountEntered: this.state.amount,
    });

    this.setState({ isVisibleValidationDialog: false });
  };

  handleValidationDialogNo = () => {
    this.setState({ isVisibleValidationDialog: false });
    // this.setState({ isModalVisible: false });
  };

  handleAccount = (selectedAccount) => {
    try {
      this.setState({ selectedAccount });
    } catch (Error) {
      console.log("[MakeAPayementScreen] - handleNameSelction - Error ", Error);
    }
  };

  handleAmountInputChange = (amount) => {
    try {
      console.log("*************", amount);
      this.setState({ amount: parseFloat(amount.replace(/,/g, "")) });
    } catch (Error) {
      console.log(
        "[MakeAPayementScreen] -  handleAmountInputChange() EX: " + Error
      );
    }
  };

  handleRemarkInputChange = (valueRemark) => {
    try {
      this.setState({ valueRemark: valueRemark });
      console.log("Input value:", valueRemark);
    } catch (Error) {
      console.log(
        "[MakeAPayementScreen] -  handleRemarkInputChange() EX: " + Error
      );
    }
  };

  handleNextButtonPress = () => {
    try {
      this.props.navigation.navigate("ValidationDialogs");
      console.log("button pressed to navigate to ");
    } catch (error) {
      console.log("[TransferMoneyScreen] - Next_Button - Error ", error);
    }
  };

  handleBack = () => {
    try {
      this.props.navigation.replace("DashboardScreen");
    } catch (error) {
      console.log("[MakeAPaymentScreen] - handleBack - Error ", error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.replace("DashboardScreen");
    } catch (error) {
      console.log("[MakeAPaymentScreen] - handleHome - Error ", error);
    }
  };
  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[MakeAPaymentScreen] - componentDidMount() EX: " + Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log(
        "[MakeAPaymentScreen] - componentWillUnmount() EX: " + Error
      );
    }
  }

  render() {
    //const { isModalVisible } = this.state;
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={10}
          enableOnAndroid={true}
          enableAutomaticScroll={false}
          keyboardOpeningTime={300}
          scrollToPosition={{ x: 0, y: 0, animated: true }}
          onKeyboardDidShow={(frames) => {}}
          onKeyboardDidHide={(frames) => {}}
        >
          <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
            {/* upperContainer */}
            <View
              style={
                GetMakeAPayementScreenStyles(Android_Theme_Light).upperContainer
              }
            >
              <Text
                style={
                  GetMakeAPayementScreenStyles(Android_Theme_Light).textTitle
                }
              >
                {"Pay Now"}
              </Text>

              <Text
                style={
                  GetMakeAPayementScreenStyles(Android_Theme_Light)
                    .textSubTitle
                }
              >
                {"From"}
              </Text>

              {/* CommonSpinnerLong  */}
              <CommonSpinnerLong
                width={"100%"}
                data={[
                  {
                    label_1: "40011122211",
                    label_2: "457,685",
                    value: "001",
                  },
                  {
                    label_1: "40011122212",
                    label_2: "546,685.33",
                    value: "002",
                  },
                  {
                    label_1: "40011122213",
                    label_2: "757,685.45",
                    value: "003",
                  },
                  {
                    label_1: "40011122214",
                    label_2: "36,685.56",
                    value: "004",
                  },
                ]}
                placeholder={this.state.selectedAccount}
                lable_1={this.state.selectedAccount || "40011122211"}
                lable_2={this.state.selectedAmount || "457,685.54"}
                lable_2Show={true}
                value={this.state.selected_ID || ""}
                onRef={(ref) => (this.parentReferenceItem = ref)}
                inputRef={this.transferFrom}
                nextInputRef={this.transferTo}
                currency={"LKR"}
                parentReferenceItem={(label_1, label_2, value) => {
                  this.setState({
                    selectedAccount: label_1,
                    selectedAmount: label_2,
                    selected_ID: value,
                  });
                }}
              />
            </View>

            {/* middleContainer */}
            <View
              style={GetMakeAPayementScreenStyles(Android_Theme_Light).middleContainer}
            >
              {/* FD Account No */}
              <CommonInputField
                value={this.state.FdAccountNo}
                title={"FD Account No"}
                placeholder={""}
                width={"100%"}
                icon={Android_Theme_Light.ICON_VERIFIED}
                onInputChange={() => null}
                nextInputRef={this.AmountInputRef}
                readOnly={true}
              />

              {/* Amount(LKR) */}
              <CommonInputField
                value={this.state.amount}
                title={"Amount (LKR)"}
                onInputChange={this.handleAmountInputChange}
                icon={Android_Theme_Light.ICON_VERIFIED}
                inputRef={this.AmountInputRef}
                nextInputRef={this.RemarksInputRef}
                type={"currency"}
                width={"100%"}
              />

              {/* Remark */}
              <CommonInputField
                value={this.state.valueRemark}
                title={"Remarks"}
                placeholder={"Remarks (Optional)"}
                width={"100%"}
                icon={Android_Theme_Light.ICON_VERIFIED}
                onInputChange={this.handleRemarkInputChange}
                inputRef={this.RemarksInputRef}
              />
            </View>

            {/* bottomContainer */}
            <View
              style={
                GetMakeAPayementScreenStyles(Android_Theme_Light)
                  .bottomContainer
              }
            >
              <CommonButton
                type={"1"}
                text={""}
                title={"Next"}
                width={"50%"}
                backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
                onPress={this.handleValidationDialog}
              />
            </View>

            {/* Bottom Bar */}
            <View
              style={
                GetMakeAPayementScreenStyles(Android_Theme_Light).bottomView
              }
            >
              {/* Bottom Title Bar */}
              <BottomTitleBar
                icon1={Icon_backArrows}
                icon2={Icon_home}
                onPressIcon1={this.handleBack}
                onPressIcon2={this.handleHome}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>

        {/* ValidationDialogs*/}
        <ValidationDialogs
          title={"Verification"}
          discription={"payment"}
          message={"Do you wish\n to proceed? "}
          transparent={true}
          isVisible={this.state.isVisibleValidationDialog}
          onRef={(ref) => (this.parentReferenceItem = ref)}
          parentReferenceItem={this.handleValidationDialogNo}
          onPressYes={this.handleValidationDialogYes}
          onPressNo={this.handleValidationDialogNo}
        />
      </SafeAreaView>
    );
  }
}

export default MakeAPayementScreen;
