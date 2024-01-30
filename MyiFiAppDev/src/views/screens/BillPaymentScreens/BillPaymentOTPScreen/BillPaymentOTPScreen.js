import React, { Component, useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Modal,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import { GetBillPayementOTPScreenStyles } from "./BillPaymentOTPScreenStyles";
import Index from "../../../../configs/Index";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import CommonSpinner from "../../../components/Common/CommonSpinner";
import CommonSpinnerLong from "../../../components/Common/CommonSpinnerLong";
import ValidationDialogs from "../../../components/Common/ValidationDialogs";
import Colors from "../../../../styles/Colors";
import CommonCardButton from "../../../components/Common/CommonCardButton";

import { GetCommonStyles } from "../../../../styles/CommonStyles";

import {
  Android_Theme_Light,
  Android_Theme_Dark,
} from "../../../../styles/Themes";

//Done by: Darshana 24/01/22

class BillPayementOTPScreen extends Component {
  constructor(props) {
    super(props);

    this.transferFrom = React.createRef();
    this.transferTo = React.createRef();
    this.transferType = React.createRef();
    this.transferAmmount = React.createRef();
    this.transferRemark = React.createRef();
    this.transferPurpose = React.createRef();

    this.state = {
      scrollEnabled: false,
      selectedAccount: null,
      selectedCategory: null,
      selectedProvider: null,
      selectedShedual: null,
      toAccount: null,
      amount: "",
      isVisibleValidationDialog: false,
      isModalVisible: false,
      selectedFromAccount: {},
      selectedToAccount: {},
      isExpanded: false,
    };
  }

  /*componentDidUpdate(prevProps, prevState) {
      const { isVisibleValidationDialog } = this.state;
    
      
      if (isVisibleValidationDialog !== prevState.isVisibleValidationDialog) {
        if (isVisibleValidationDialog) {
          StatusBar.setBackgroundColor("#1B1F52D5");
        } else {
          StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
        }
      }
    }*/ // This can use to colour change status bar when validation Dialog pop-up

  componentDidMount() {
    try {
      StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
    } catch (Error) {
      console.log("[BillPayementOTPScreen] - componentDidMount - Error ", Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[BillPayementOTPScreen] - componentWillUnmount - Error ", Error);
    }
  }

  handleAddButtonPress = () => {
    try {
      this.props.navigation.replace(Index.ADD_BILL);
      console.log("Next button pressed to navigate to AddBiller");
    } catch (error) {
      console.log("[AddBiller] - Next_Button - Error ", error);
    }
  };

  handleNextButtonPress = () => {
    try {
      this.props.navigation.replace(Index.FUND_1);
      console.log("Next button pressed to navigate to BillPayementOTPScreen");
    } catch (error) {
      console.log("[BillPayementOTPScreen] - Next_Button - Error ", error);
    }
  };

  handleLeftButtonPress = () => {
    try {
      this.props.navigation.replace(Index.BILL_1);
      console.log("left pressed to navigate signup screen 4");
    } catch (error) {
      console.log("[BillPayementOTPScreen] - left_Button - Error ", error);
    }
  };

  handlePasswordInputChange = (text) => {};

  handleCategory = (selectedCategory) => {
    try {
      this.setState({ selectedCategory });
    } catch (Error) {
      console.log("[BillPayementOTPScreen] - handleCategory - Error ", Error);
    }
  };

  handleShedual = (selectedShedual) => {
    try {
      this.setState({ selectedShedual });
    } catch (Error) {
      console.log("[BillPayementOTPScreen] - handleShedual - Error ", Error);
    }
  };

  handleProvider = (selectedProvider) => {
    try {
      this.setState({ selectedProvider });
    } catch (Error) {
      console.log("[BillPayementOTPScreen] - handleProvider - Error ", Error);
    }
  };

  handleAccount = (selectedAccount) => {
    try {
      this.setState((prevState) => ({
        selectedFromAccount: {
          ...prevState.selectedFromAccount,
          ...selectedAccount,
        },
      }));
    } catch (Error) {
      console.log("[BillPayementOTPScreen] - handleAccount - Error ", Error);
    }
  };

  handleToAccount = (toAccount) => {
    try {
      if (toAccount.value1 !== this.state.selectedFromAccount.value1) {
        this.setState((prevState) => ({
          selectedToAccount: {
            ...prevState.selectedToAccount,
            ...toAccount,
          },
        }));
      } else {
        console.log("Please select a different account for transfer");
      }
    } catch (Error) {
      console.log("[BillPayementOTPScreen] - handleToAccount - Error ", Error);
    }
  };

  handleAmountInputChange = (text) => {
    try {
      this.setState({ amount: text });
    } catch (Error) {
      console.log("[BillPayementOTPScreen] - handleAmountInputChange - Error ", Error);
    }
  };

  handleValidationDialog = () => {
    this.setState({ isVisibleValidationDialog: true });
  };

  handleValidationDialogNo = () => {
    this.setState({ isVisibleValidationDialog: false });
    this.setState({ isModalVisible: false });
  };

  handleValidationDialogYes = () => {
    this.props.navigation.navigate(Index.FUND_OTP);
    this.setState({ isVisibleValidationDialog: false });
    this.setState({ isModalVisible: false });
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  };

  toggleExpand = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    const { isExpanded } = this.state;

    return (
      <>
        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
          <MainTitleBar
            IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
            TitleText={"Bill Payment"}
            TextAlign={"left"}
            IconRight={null}
            onPressLeft={this.handleLeftButtonPress}
          />

          <KeyboardAwareScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-end",
              alignItems: "center",
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
              <View
                style={GetBillPayementOTPScreenStyles(Android_Theme_Light).middleView}
              >
                <View style={{ height: 5 }} />

                <Text
                  style={GetBillPayementOTPScreenStyles(Android_Theme_Light).titleText}
                >
                  TRANSFER FROM
                </Text>
                <View style={{ height: 5 }} />
                <View
                  style={GetBillPayementOTPScreenStyles(Android_Theme_Light).bankView}
                >
                  <CommonSpinnerLong
                    width={"100%"}
                    data={[
                      { label: "Sampath Bank", value: "457685", value1: "A" },
                      { label: "Seylan Bank", value: "546685", value1: "B" },
                      { label: "Bank of Ceylon", value: "757685", value1: "C" },
                      { label: "Peoples Bank", value: "36685", value1: "D" },
                      { label: "Amana Bank", value: "257685", value1: "E" },
                      { label: "Sampath Bank", value: "44685", value1: "F" },
                      { label: "Seylan Bank", value: "37685", value1: "G" },
                    ]}
                    placeholder={"Select Bank"}
                    value={this.state.selectedFromAccount.label}
                    value1={this.state.selectedFromAccount.value1}
                    onRef={(ref) => (this.parentReferenceItem = ref)}
                    inputRef={this.transferFrom}
                    nextInputRef={this.transferTo}
                    currency={"LKR"}
                    parentReferenceItem={(label, value1) => {
                      this.handleAccount({ label, value1 });
                    }}
                  />
                </View>
                <View style={{ height: 20 }} />

                <Text
                  style={GetBillPayementOTPScreenStyles(Android_Theme_Light).titleText}
                >
                  TRANSFER TO
                </Text>
                <View style={{ height: 5 }} />

                <View
                  style={
                    GetBillPayementOTPScreenStyles(Android_Theme_Light).spinnerContainer
                  }
                >
                  <View
                    style={GetBillPayementOTPScreenStyles(Android_Theme_Light).spinner}
                  >
                    <CommonSpinnerLong
                      width={"100%"}
                      data={[
                        { label: "Bill-Payee", value: "12345", value1: "A" },
                        { label: "Ez-Cash", value: "77684", value1: "B" },
                        { label: "M-Cash", value: "098554", value1: "C" },
                        { label: "Wallet", value: "236434", value1: "D" },
                        { label: "Bit-Coins", value: "257685", value1: "E" },
                        { label: "Real-me", value: "234685", value1: "F" },
                      ]}
                      placeholder={"To Payee"}
                      value={this.state.selectedToAccount.label}
                      value1={this.state.selectedToAccount.value1}
                      onRef={(ref) => (this.parentReferenceItem = ref)}
                      inputRef={this.transferTo}
                      nextInputRef={this.transferType}
                      parentReferenceItem={(label, value1) => {
                        this.handleToAccount({ label, value1 });
                      }}
                    />
                  </View>

                  <View
                    style={GetBillPayementOTPScreenStyles(Android_Theme_Light).addbutton}
                  >
                    <CommonCardButton
                      onPress={this.handleAddButtonPress}
                      text={"New"}
                      width={"100%"}
                      icon={Android_Theme_Light.ICON_PLUS}
                    />
                  </View>
                </View>

                <View style={{ height: 20 }} />
                <CommonInputField
                  value={this.state.amount}
                  title={"Amount *"}
                  onInputChange={(text) => this.handleAmountInputChange(text)}
                  inputRef={this.transferTo}
                  nextInputRef={this.transferRemark}
                  type={"currency"}
                  width={"100%"}
                />
                <View style={{ height: 10 }} />

                <Text
                  style={GetBillPayementOTPScreenStyles(Android_Theme_Light).titleText}
                >
                  Category
                </Text>
                <View style={{ height: 5 }} />
                <View
                  style={GetBillPayementOTPScreenStyles(Android_Theme_Light).bankView}
                >
                  <CommonSpinnerLong
                    width={"100%"}
                    data={[
                      { label: "Water Bill ", value: "Water-Bill" },
                      { label: "Electricity Bill", value: "Electricity-Bill" },
                      { label: "Telephone Bill", value: "Telephone-Bill" },
                    ]}
                    placeholder={"Select Category*"}
                    value={this.state.selectedCategory}
                    value1={""}
                    label={this.state.selectedCategory}
                    onRef={(ref) => (this.parentReferenceItem = ref)}
                    parentReferenceItem={this.handleCategory}
                  />
                </View>
                <View style={{ height: 20 }} />

                <Text
                  style={GetBillPayementOTPScreenStyles(Android_Theme_Light).titleText}
                >
                  Provider
                </Text>
                <View style={{ height: 5 }} />
                <View
                  style={GetBillPayementOTPScreenStyles(Android_Theme_Light).bankView}
                >
                  <CommonSpinnerLong
                    width={"100%"}
                    data={[
                      {
                        label: "National Water Supply ",
                        value: "National-Water-Supply",
                      },
                      {
                        label: "Ceyloan Electricity Board",
                        value: "Ceyloan-Electricity-Board",
                      },
                      {
                        label: "Srilanka Telecome",
                        value: "Srilanka-Telecome",
                      },
                    ]}
                    placeholder={"Select Provider*"}
                    value={this.state.selectedProvider}
                    value1={""}
                    label={this.state.selectedProvider}
                    onRef={(ref) => (this.parentReferenceItem = ref)}
                    parentReferenceItem={this.handleProvider}
                  />
                </View>

                <View style={{ height: 20 }} />

                <CommonInputField
                  value={this.state.selectedName}
                  title={"Remarks"}
                  onInputChange={(text) => this.handlePasswordInputChange(text)}
                  inputRef={this.transferRemark}
                  nextInputRef={this.transferPurpose}
                  placeholder={"Remark (Optional)"}
                  width={"100%"}
                />

                <View style={{ height: 20 }} />
              </View>

              <View
                style={
                  GetBillPayementOTPScreenStyles(Android_Theme_Light).buttonContainer
                }
              >
                <View style={GetBillPayementOTPScreenStyles(Android_Theme_Light).button}>
                  <CommonButton
                    type="0"
                    title={"Now"}
                    borderRadius={10}
                    onPress={""}
                    textSize={20}
                    width={"100%"}
                    backgroundColor={Android_Theme_Light.LIGHT_BLUE_COLOR}
                  />
                </View>

                <View style={GetBillPayementOTPScreenStyles(Android_Theme_Light).button}>
                  <CommonButton
                    type="0"
                    title={"Later"}
                    borderRadius={10}
                    onPress={this.toggleExpand}
                    textSize={20}
                    width={"100%"}
                    backgroundColor={Android_Theme_Light.DARK_GRAY_COLOR}
                  />
                </View>
              </View>

              {isExpanded && (
                <View
                  style={
                    GetBillPayementOTPScreenStyles(Android_Theme_Light).expandContainer
                  }
                >
                  <Text
                    style={GetBillPayementOTPScreenStyles(Android_Theme_Light).titleText}
                  >
                    Shedual Type
                  </Text>
                  <View style={{ height: 5 }} />
                  <View
                    style={GetBillPayementOTPScreenStyles(Android_Theme_Light).bankView}
                  >
                    <CommonSpinnerLong
                      width={"100%"}
                      data={[
                        { label: "One Time", value: "One-time" },
                        { label: "Favourite", value: "Favourite" },
                        { label: "Many", value: "Many" },
                      ]}
                      placeholder={"Select Shedual Type"}
                      value={this.state.selectedShedual}
                      value1={""}
                      label={this.state.selectedShedual}
                      onRef={(ref) => (this.parentReferenceItem = ref)}
                      parentReferenceItem={this.handleShedual}
                    />
                  </View>
                  <View style={{ height: 20 }} />

                  <CommonInputField
                    value={""}
                    title={"Transaction Date *"}
                    onInputChange={""}
                    inputRef={this.transferTo}
                    nextInputRef={this.transferRemark}
                    type={"date"}
                    width={"100%"}
                    icon={Android_Theme_Light.ICON_CALENDER}
                    readOnly={true}
                  />
                </View>
              )}
            </View>
          </KeyboardAwareScrollView>

          <View style={GetBillPayementOTPScreenStyles(Android_Theme_Light).bottomView}>
            <CommonButton
              type="1"
              title={"Next"}
              borderRadius={35}
              onPress={""}
              textSize={20}
              width={"60%"}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default BillPayementOTPScreen;
