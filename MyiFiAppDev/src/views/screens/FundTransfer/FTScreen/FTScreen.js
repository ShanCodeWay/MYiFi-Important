import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import FTScreenStyles from "./FTScreenStyles";
import Index from "../../../../configs/Index";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import CommonSpinnerLong from "../../../components/Common/CommonSpinnerLong";
import ValidationDialogs from "../../../components/Common/ValidationDialogs";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import BottomTitleBar from "../../../components/Common/BottomBar/BottomBar";
import { Android_Theme_Light } from "../../../../styles/Themes";
import SelectDropDown from "../../../components/Common/Dropdown/SelectDropDown";
import LinearGradient from "react-native-linear-gradient";

//Done by: Darshana 26/01/2024

class FTScreen extends Component {
  constructor(props) {
    super(props);

    this.transferFrom = React.createRef();
    this.transferTo = React.createRef();
    this.transferType = React.createRef();
    this.transferAmount = React.createRef();
    this.transferRemark = React.createRef();
    this.transferPurpose = React.createRef();
    this.scrollViewRef = React.createRef();
    this.state = {
      scrollEnabled: false,
      selectedAccountType: null,
      toAccount: null,
      amount: "",
      isVisibleValidationDialog: false,
      isModalVisible: false,
      isZeroAmountModalVisible: false,
      isExpanded: false,
      isExpanded1: false,
      isExpanded2: false,
      isExpanded3: true,
      isExpanded4: false,
      isExpanded5: false,
      isExpanded6: false,
      isExpanded7: false,

      selectedAccountNum: "",
      selectedAccount: "",
      selectedBank: "",
      selectedBankCode: "",
      selectedAmount: "",
      selected_ID: "",
      selectedSchedule: "",
      selectedType: "",
      selectedAccountType: "",
      selectedFrequency: "",
      nickname: "",

      selectedFromAccount: "",
      selectedFromAccountAmount: "",
      selectedFromAccountID: "",
      selectedAccount2: "",
      selectedAmount2: "",
      selected_ID2: "",

      spinnerData: [
        { label_1: "288-374-829", label_2: "457,685", value: "001" },
        { label_1: "355-567-234", label_2: "546,685.33", value: "002" },
        { label_1: "234-675-345", label_2: "757,685.45", value: "003" },
      ],
      Banklist: [
        { label_1: "Hatton National Bank", value: "001" },
        { label_1: "Seylan Bank", value: "002" },
        { label_1: "Bank of Ceylon", value: "003" },
        { label_1: "Peoples Bank", value: "004" },
        { label_1: "Amana Bank", value: "005" },
        { label_1: "Sampath Bank", value: "006" },
      ],
      accountTypeList: [
        { label_1: "Own Account Transfer", value: "Own-Account" },
        { label_1: "Registerd Payee", value: "Reg-Account" },
        { label_1: "Unregisterd Payee", value: "Unreg-Account" },
      ],
      shedualList: [
        { label_1: "One Time", value: "1" },
        { label_1: "Repeat", value: "2" },
      ],

      frequencyList: [
        { label_1: "Dialy", value: "01" },
        { label_1: "Weekly", value: "02" },
        { label_1: "Monthly", value: "03" },
        { label_1: "Quarter", value: "04" },
        { label_1: "Yearly", value: "05" },
      ],
      regList: [
        {
          label: "ADH Dissanyake",
          value: "B02",
          nickname: "Dasuna",
          accountNum: "300-192-449",
          bank: "Hatton National Bank",
        },
        {
          label: "TDK Silva",
          value: "B03",
          nickname: "Karan",
          accountNum: "701-182-548",
          bank: "Seylan Bank",
        },
        {
          label: "BMW Fernando",
          value: "B04",
          nickname: "Wembli",
          accountNum: "802-172-641",
          bank: "Bank of Ceylon",
        },
        {
          label: "BEN Perera",
          value: "B05",
          nickname: "Earn",
          accountNum: "903-162-742",
          bank: "Peoples Bank",
        },
        {
          label: "HLC Liyange",
          value: "B06",
          nickname: "Late",
          accountNum: "404-152-243",
          bank: "Amana Bank",
        },
      ],
      selectedName: "",
      selectedAccount: "",
      selectedBank: "",
      selectedNickname: "",
      tansferTypes: [
        { label_1: "Internal", value: "In" },
        { label_1: "External", value: "Ex" },
      ],
      selectedTransferType: "Internal",
      TransactionTimes: [
        { label_1: "Now", value: "1" },
        { label_1: "Later", value: "2" },
      ],
      SelectedTransactionTime: "Now",
    };
  }

  /*componentDidUpdate(prevProps, prevState) {
      const { isVisibleValidationDialog }         = this.state;
    
      
      if (isVisibleValidationDialog !== prevState.isVisibleValidationDialog) {
        if (isVisibleValidationDialog) {
          StatusBar.setBackgroundColor("#1B1F52D5");
        } else {
          StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
        }
      }
    }*/ // This can use to color change status bar when validation Dialog pop-up

  componentDidMount() {
    try {


      this.setState({
        selectedFromAccount: this.state.spinnerData[0].label_1,
        selectedFromAccountAmount: this.state.spinnerData[0].label_2,
        selectedFromAccountID:this.state.spinnerData[0].value,


        selectedType: this.state.accountTypeList[0].label_1,

      


      });
    } catch (Error) {
      console.log("[FTScreen] - componentDidMount - Error ", Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[FTScreen] - componentWillUnmount - Error ", Error);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedNickname !== this.state.selectedNickname) {
    }
  }

  handleNextButtonPress = () => {
    try {
      const tolerance = 0.001;
      if (Math.abs(this.state.amount - 0.0) < tolerance) {
        this.showZeroAmountModal();
        console.log("amount zero");
      } else {
        this.toggleModal();
        console.log("amount not zero");
      }
    } catch (error) {
      console.log("[FTScreen] - handleNextButtonPress - Error ", error);
    }
  };

  handleLeftButtonPress = () => {
    try {
      this.props.navigation.replace(Index.SIGNUP_4);
      console.log("left pressed to navigate signup screen 4");
    } catch (error) {
      console.log("[FTScreen] - left_Button - Error ", error);
    }
  };

  handlePasswordInputChange = (text) => {
    console.log("Input changed:", text);
  };

  handleNickNameInputChange = (text) => {
    try {
      this.setState({ selectedNickname: text });
    } catch (error) {
      console.log("[FTScreen] - handleNickNameInputChange - Error ", error);
    }
  };

  handleAccountnumInputChange = (text) => {
    try {
      this.setState({ selectedAccountNum: text });
    } catch (error) {
      console.log("[FTScreen] - handleAccountnumInputChange - Error ", error);
    }
  };

  handleAccount = (selectedAccount) => {
    try {
      this.setState({ selectedAccount });
    } catch (Error) {
      console.log("[FTScreen] - handleAccount - Error ", Error);
    }
  };

  handleAccountType = (selectedAccountType) => {
    try {
      this.setState({ selectedAccountType });
    } catch (Error) {
      console.log("[FTScreen] - handleAccountType - Error ", Error);
    }
  };

  handleToAccount = (toAccount) => {
    try {
      this.setState({ toAccount });
    } catch (Error) {
      console.log("[FTScreen] - handleToAccount - Error ", Error);
    }
  };

  handleAmountInputChange = (text) => {
    try {
      this.setState({ amount: text });
    } catch (Error) {
      console.log("[FTScreen] - handleAmountInputChange - Error ", Error);
    }
  };

  handleValidationDialog = () => {
    try {
      this.setState({ isVisibleValidationDialog: true });
    } catch (Error) {
      console.log("[FTScreen] - handleValidationDialog - Error ", Error);
    }
  };

  handleValidationDialogNo = () => {
    try {
      this.setState({ isVisibleValidationDialog: false });
      this.setState({ isModalVisible: false });
    } catch (Error) {
      console.log("[FTScreen] - handleValidationDialogNo - Error ", Error);
    }
  };

  handleValidationDialogYes = () => {
    try {
      this.props.navigation.navigate(Index.TRS_1, { data: this.state.amount });
      this.setState({ isVisibleValidationDialog: false });
      this.setState({ isModalVisible: false });
    } catch (Error) {
      console.log("[FTScreen] - handleValidationDialogYes - Error ", Error);
    }
  };

  toggleModal = () => {
    try {
      this.setState((prevState) => ({
        isModalVisible: !prevState.isModalVisible,
      }));
    } catch (Error) {
      console.log("[FTScreen] - toggleModal - Error ", Error);
    }
  };

  showZeroAmountModal = () => {
    try {
      this.setState((prevState) => ({
        isZeroAmountModalVisible: !prevState.isZeroAmountModalVisible,
      }));
    } catch (Error) {
      console.log("[FTScreen] - showZeroAmountModal - Error ", Error);
    }
  };

  handleSpinnerSelection = (value) => {
    try {
      this.setState({
        selectedSchedule: this.state.shedualList.find(
          (item) => item.value === value
        ).label_1,
      });

      if (value === "2") {
        this.setState({ isExpanded1: true });
        this.scrollViewRef.current.scrollToEnd({ animated: true });
      } else {
        this.setState({ isExpanded1: false });
      }
    } catch (Error) {
      console.log("[FTScreen] - handleSpinnerSelection - Error ", Error);
    }
  };

  handleTypeSelection = (value) => {
    try {
      let resetState = this.resetStateValues();

      if (value === "Own-Account") {
        this.setState({
          selectedType:  this.state.accountTypeList.find((item) => item.value === value).label_1,
          isExpanded: false,
          isExpanded1: false,
          isExpanded2: false,
          isExpanded3: true,
          isExpanded5: false,
          isExpanded6: false,
          isExpanded7: false,
          ...resetState,
        });
      } else if (value === "Unreg-Account") {
        this.setState({
          selectedType:  this.state.accountTypeList.find((item) => item.value === value).label_1,
          isExpanded: false,
          isExpanded1: false,
          isExpanded2: true,
          isExpanded3: false,
          isExpanded5: false,
          isExpanded6: false,
          isExpanded7: true,
          ...resetState,
        });
      } else if (value === "Reg-Account") {
        this.setState({
          selectedType:  this.state.accountTypeList.find((item) => item.value === value).label_1,
          isExpanded: false,
          isExpanded1: false,
          isExpanded5: true,
          isExpanded3: false,
          isExpanded2: false,
          isExpanded6: false,
          ...resetState,
        });
      } else {
        this.setState({
          selectedType: value,
          isExpanded: false,
          isExpanded1: false,
          isExpanded5: false,
          isExpanded3: false,
          isExpanded2: false,
          ...resetState,
        });
      }
    } catch (error) {
      console.log("[FTScreen] - handleTypeSelection - Error ", error);
    }
  };

  handleTransferTypeSelection = (value) => {
    try {
      if (value === "In") {
        this.setState({
          selectedTransferType: this.state.tansferTypes.find(
            (item) => item.value === "In"
          ).label_1,
          isExpanded6: false,
          isExpanded7: true,
        });
      } else {
        this.setState({
          selectedTransferType: this.state.tansferTypes.find(
            (item) => item.value === "Ex"
          ).label_1,
          isExpanded6: true,
          isExpanded7: false,
        });
      }
    } catch (error) {
      console.log("[FTScreen] - handleTypeSelection - Error ", error);
    }
  };

  handleBankSelection = (value) => {
    try {
      this.setState({
        selectedBank: this.state.Banklist.find((item) => item.value === value)
          .label_1,
        selectedBankCode: value,
      });
    } catch (error) {
      console.log("[FTScreen] - handleTypeSelection - Error ", error);
    }
  };

  resetStateValues = () => {
    return {
      selectedAccountNum: "",
      selectedAccount: "",
      selectedBank: "",
      selectedBankCode: "",
      selectedAmount: "",
      selected_ID: "",
      selectedSchedule: "",
      selectedFrequency: "",
      nickname: "",
      selectedName: "",
      selectedFromAccount: "",
      selectedFromAccountAmount: "",
      selectedFromAccountID: "",
      selectedAccount2: "",
      selectedAmount2: "",
      selected_ID2: "",
      selectedTransferType: "",
    };
  };

  toggleExpand = () => {
    try {
      this.setState(
        (prevState) => ({
          isExpanded: true,
          isExpanded1: false,
          selectedSchedule: "",
        }),
        () => {
          if (this.state.isExpanded) {
            this.scrollViewRef.current.scrollToEnd({ animated: true });
          }
        }
      );
    } catch (Error) {
      console.log("[FTScreen] - toggleExpand - Error ", Error);
    }
  };

  handleAddPayeeButton = () => {
    try {
      this.setState(
        (prevState) => ({
          isExpanded4: !prevState.isExpanded4,
        }),
        () => {
          if (this.state.isExpanded4) {
            this.scrollViewRef.current.scrollToEnd({ animated: true });
          }
        }
      );
    } catch (error) {
      console.log("[FTScreen] - handleAddPayeeButton - Error ", error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.replace("DashboardScreen");
      console.log("Home Button pressed to Navigate to DashboardScreen");
    } catch (error) {
      console.log("[FTScreen] - Home_Button - Error ", error);
    }
  };

  handleBack = () => {
    try {
      this.props.navigation.replace("DashboardScreen");
      console.log("Home Button pressed to Navigate to DashboardScreen");
    } catch (error) {
      console.log("[FTScreen] - Home_Button - Error ", error);
    }
  };

  handleSpinnerChange1 = (label_1, label_2, value) => {
    this.setState({
      selectedFromAccount: label_1,
      selectedFromAccountAmount: label_2,
      selectedFromAccountID: value,

      selectedAccount2: "",
      selectedAmount2: "",
      selected_ID2: "",
    });
  };

  handleSpinnerChange2 = (value) => {
    this.setState({
      selectedAccount2: this.state.spinnerData.find(
        (item) => item.value === value
      ).label_1,
      selectedAmount2: this.state.spinnerData.find(
        (item) => item.value === value
      ).label_2,
      selected_ID2: value,
    });
  };

  handleNameSelect = (SelectVal) => {
    try {
      const selectedPerson = this.state.regList.find(
        (person) => person.label === SelectVal
      );

      console.log("selectedPerson--", selectedPerson);

      if (selectedPerson) {
        this.setState(
          {
            selectedName: SelectVal,
            selectedAccount: selectedPerson.accountNum,
            selectedBank: selectedPerson.bank,
            selectedNickname: selectedPerson.nickname,
          },
          () => {
            console.log("State updated:", this.state.selectedNickname);
          }
        );
      }
    } catch (error) {
      console.log("[FTScreen] - handleNameSelect Error: ", error);
    }
  };

  render() {
    const { isModalVisible } = this.state;
    const { isZeroAmountModalVisible } = this.state;
    const { isExpanded } = this.state;

    const {
      selectedAccount2,

      spinnerData,
      Banklist,
      accountTypeList,
      shedualList,
      frequencyList,
      tansferTypes,
      regList,
    } = this.state;

    return (
      <>
        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
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
            ref={this.scrollViewRef}
            onKeyboardDidShow={(frames) => {}}
            onKeyboardDidHide={(frames) => {}}
          >
            <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
              <View style={GetCommonStyles(Android_Theme_Light).titleContainer}>
                <Text
                  style={
                    GetCommonStyles(Android_Theme_Light).titleContainertitleText
                  }
                >
                  Transfer
                </Text>
              </View>

              <View style={FTScreenStyles(Android_Theme_Light).middleView}>
                <ScrollView>
                  <View style={{ height: 5 }} />
                  <Text style={FTScreenStyles(Android_Theme_Light).titleText}>
                    From
                  </Text>

                  <CommonSpinnerLong
                    width={"100%"}
                    data={this.state.spinnerData}
                    placeholder={
                      this.state.selectedFromAccount || spinnerData[1].label_1
                    }
                    lable_1={this.state.selectedFromAccount}
                    lable_2={
                      this.state.selectedFromAccountAmount ||
                      spinnerData[1].label_2
                    }
                    lable_2Show={true}
                    value={this.state.selectedFromAccountID}
                    onRef={(ref) => (this.parentReferenceItem1 = ref)}
                    inputRef={this.transferFrom}
                    nextInputRef={this.transferTo}
                    currency={"LKR"}
                    parentReferenceItem={this.handleSpinnerChange1}
                  />

                  <View style={{ height: 20 }} />
                  <Text style={FTScreenStyles(Android_Theme_Light).titleText}>
                    Type
                  </Text>
                  {/* 
                  <CommonSpinnerLong
                    width={"100%"}
                    data={this.state.accountTypeList}
                    placeholder={this.state.selectedType }
                    lable_1={
                      this.state.selectedType 
                    }
                    lable_2Show={false}
                    search={false}
                    value={""}
                    onRef={(ref) => (this.parentReferenceItem = ref)}
                    parentReferenceItem={(label_1, label_2, value) => {
                  
                      this.handleTypeSelection(label_1, value);
                    }}
                  /> */}

                  {/* Type selection- added by Dinuranga */}
                  <View style={FTScreenStyles(Android_Theme_Light).bankView}>
                    <SelectDropDown
                      width={"100%"}
                      data={this.state.accountTypeList.map((item) => {
                        return {
                          label: item.label_1,
                          value: item.value,
                        };
                      })}
                      placeholder={this.state.selectedType}
                      lable={this.state.selectedType}
                      value={this.state.selectedType}
                      onRef={(ref) => (this.parentReferenceItemName = ref)}
                      parentReferenceItem={this.handleTypeSelection}
                    />
                  </View>

                  {this.state.isExpanded2 && (
                    <>
                      <View style={{ height: 20 }} />

                      {/* 
                      <CommonSpinnerLong
                        width={"100%"}
                        data={tansferTypes}
                        placeholder={this.state.selectedTransferType}
                        lable_1={
                          this.state.selectedTransferType || tansferTypes[0].label_1
                        }
                        lable_2Show={false}
                        search={false}
                        value={""}
                        onRef={(ref) => (this.parentReferenceItem = ref)}
                        parentReferenceItem={(label_1, label_2, value) => {
                          this.setState({
                            selectedTransferType: label_1,
                          });
                          this.handleTransferTypeSelection(label_1, value);
                        }}
                      /> */}

                      {/* Transfer type selection DropDown- added by Dinuranga */}
                      <View
                        style={FTScreenStyles(Android_Theme_Light).bankView}
                      >
                        <SelectDropDown
                          width={"100%"}
                          data={this.state.tansferTypes.map((item) => ({
                            label: item.label_1,

                            value: item.value,
                          }))}
                          placeholder={
                            this.state.selectedTransferType ||
                            tansferTypes[0].label_1
                          }
                          lable={this.state.selectedTransferType}
                          value={this.state.selectedTransferType}
                          onRef={(ref) => (this.parentReferenceItemName = ref)}
                          parentReferenceItem={this.handleTransferTypeSelection}
                        />
                      </View>

                      <View>
                        {this.state.isExpanded6 && (
                          <View>
                            <View style={{ height: 20 }} />
                            <Text
                              style={
                                FTScreenStyles(Android_Theme_Light).titleText
                              }
                            >
                              Send to
                            </Text>

                            <View style={{ height: 20 }} />
                            <CommonInputField
                              value={this.state.selectedName}
                              title={"Account Number"}
                              onInputChange={(text) =>
                                this.handlePasswordInputChange(text)
                              }
                              inputRef={this.transferName}
                              nextInputRef={this.transferPurpose}
                              placeholder={"Insert Account Number"}
                              width={"100%"}
                              icon={Android_Theme_Light.ICON_VERIFIED}
                            />

                            <View style={{ height: 20 }} />
                            <Text
                              style={
                                FTScreenStyles(Android_Theme_Light).titleText
                              }
                            >
                              Bank
                            </Text>
                            {/* 
                            <CommonSpinnerLong
                              width={"100%"}
                              data={Banklist}
                              placeholder={this.state.selectedBank}
                              lable_1={
                                this.state.selectedBank || Banklist[1].label_1
                              }
                              value={this.state.selectedBankCode}
                              lable_2Show={
                                false
                              } 
                              onRef={(ref) => (this.parentReferenceItem = ref)}
                              inputRef={this.transferFrom}
                              nextInputRef={this.transferTo}
                              currency={""}
                              parentReferenceItem={(label_1, value) => {
                                this.setState({
                                  selectedBank: label_1,
                                  selectedBankCode: value,
                                });
                              }}
                            />
                            */}

                            {/* Bank Selection DropDown- added by Dinuranga */}
                            <View
                              style={
                                FTScreenStyles(Android_Theme_Light).bankView
                              }
                            >
                              <SelectDropDown
                                width={"100%"}
                                data={this.state.Banklist.map((item) => ({
                                  label: item.label_1,

                                  value: item.value,
                                }))}
                                placeholder={
                                  this.state.selectedBank || "Select Bank"
                                }
                                lable={this.state.selectedBank}
                                value={this.state.selectedBank}
                                onRef={(ref) =>
                                  (this.parentReferenceItemName = ref)
                                }
                                parentReferenceItem={this.handleBankSelection}
                              />
                            </View>
                          </View>
                        )}

                        {this.state.isExpanded7 && (
                          <View>
                            <View style={{ height: 20 }} />
                            <Text
                              style={
                                FTScreenStyles(Android_Theme_Light).titleText
                              }
                            >
                              Send to
                            </Text>
                            <View style={{ height: 20 }} />
                            <CommonInputField
                              value={this.state.selectedAccountNum}
                              title={"Account Number"}
                              onInputChange={(text) =>
                                this.handlePasswordInputChange(text)
                              }
                              inputRef={this.transferName}
                              nextInputRef={this.transferPurpose}
                              placeholder={"Insert Account Number"}
                              width={"100%"}
                              icon={Android_Theme_Light.ICON_VERIFIED}
                            />

                            <View style={{ height: 20 }} />
                          </View>
                        )}

                        <View style={{ height: 10 }} />
                        <View
                          style={
                            FTScreenStyles(Android_Theme_Light)
                              .addPayeeButtonView
                          }
                        >
                          <LinearGradient
                            angle={70}
                            useAngle={true}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            colors={
                              this.state.isExpanded4
                                ? ["#7FDDE5", "#7FDCE5", "#6FBBE5"]
                                : ["#D9D9D9", "#D9D9D9", "#D9D9D9"]
                            }
                            style={
                              FTScreenStyles(Android_Theme_Light).addPayeeButton
                            }
                          >
                            <TouchableOpacity
                              onPress={() => this.handleAddPayeeButton()}
                            >
                              <Text
                                style={[
                                  FTScreenStyles(Android_Theme_Light)
                                    .addPayeeButtonText,
                                  {
                                    color: this.state.isExpanded4
                                      ? Android_Theme_Light.DARK_BLUE_COLOR
                                      : Android_Theme_Light.GRAY_COLOR,
                                  },
                                ]}
                              >
                                {" "}
                                Add as payee
                              </Text>
                            </TouchableOpacity>
                          </LinearGradient>
                        </View>

                        {this.state.isExpanded4 && (
                          <>
                            <CommonInputField
                              value={this.state.nickname}
                              title={"Add Nick Name*"}
                              onInputChange={(text) =>
                                this.handleAmountInputChange(text)
                              }
                              width={"100%"}
                              icon={Android_Theme_Light.ICON_VERIFIED}
                            />
                          </>
                        )}
                      </View>
                    </>
                  )}

                  {this.state.isExpanded3 && (
                    <>
                      <View style={{ height: 20 }} />
                      <View>
                        <Text
                          style={FTScreenStyles(Android_Theme_Light).titleText}
                        >
                          To
                        </Text>

                        {/* Commented By Dinuranga */}
                        {/* <CommonSpinnerLong
                          width={"100%"}
                          data={spinnerData.filter(
                            (item) => item.label_1 !== selectedFromAccount
                          )}
                          placeholder={
                            selectedAccount2 ||
                            spinnerData.find(
                              (item) => item.label_1 !== selectedFromAccount
                            )?.label_1 ||
                            spinnerData[0].label_1
                          }
                          lable_1={selectedAccount2}
                          lable_2={
                            spinnerData.find(
                              (item) => item.label_1 !== selectedFromAccount
                            )?.label_2 || ""
                          }
                          lable_2Show={true}
                          value={selected_ID2}
                          onRef={(ref) => (this.parentReferenceItem2 = ref)}
                          inputRef={this.transferFrom}
                          nextInputRef={this.transferTo}
                          currency={"LKR"}
                          parentReferenceItem={this.handleSpinnerChange2}
                        /> */}

                        {/* To Account Select DropDown- added by Dinuranga */}
                        <View
                          style={FTScreenStyles(Android_Theme_Light).bankView}
                        >
                          <SelectDropDown
                            width={"96%"}
                            data={this.state.spinnerData
                              .filter(
                                (item) =>
                                  item.label_1 !==
                                  this.state.selectedFromAccount
                              )
                              .map((person) => ({
                                label:
                                  "Account:  " +
                                  person.label_1 +
                                  "\n" +
                                  "Balance:  " +
                                  person.label_2,

                                value: person.value,
                              }))}
                            placeholder={
                              this.state.selectedAccount2 || "Select Account"
                            }
                            lable={this.state.selectedAccount2}
                            value={this.state.selectedAccount2}
                            onRef={(ref) =>
                              (this.parentReferenceItemName = ref)
                            }
                            parentReferenceItem={this.handleSpinnerChange2}
                          />
                        </View>
                      </View>
                      <View style={{ height: 20 }} />
                    </>
                  )}

                  {/*this is expand5 view of Registerd Payee */}

                  {this.state.isExpanded5 && (
                    <>
                      <View style={{ height: 20 }} />
                      <View>
                        <Text
                          style={FTScreenStyles(Android_Theme_Light).titleText}
                        >
                          Send
                        </Text>
                        <View
                          style={FTScreenStyles(Android_Theme_Light).bankView}
                        >
                          <SelectDropDown
                            width={"100%"}
                            data={this.state.regList.map((person) => ({
                              label:
                                "Name: " +
                                person.label +
                                ", NickName: " +
                                person.nickname +
                                ", Account Num: " +
                                person.accountNum +
                                ", Bank: " +
                                person.bank,
                              value: person.label,
                            }))}
                            title={"Select Name"}
                            placeholder={"Select Name"}
                            lable={this.state.selectedName}
                            value={this.state.selectedName}
                            onRef={(ref) =>
                              (this.parentReferenceItemName = ref)
                            }
                            parentReferenceItem={this.handleNameSelect}
                          />
                        </View>
                        <View style={{ height: 20 }} />

                        {/*Add View to */}
                        <View
                          style={
                            FTScreenStyles(Android_Theme_Light).parentContainer
                          }
                        >
                          <View
                            style={
                              FTScreenStyles(Android_Theme_Light).labelContainer
                            }
                          >
                            <Text
                              style={
                                FTScreenStyles(Android_Theme_Light).labelText
                              }
                            >
                              Account Number
                            </Text>
                          </View>
                          <View
                            style={
                              FTScreenStyles(Android_Theme_Light).inputContainer
                            }
                          >
                            <Text
                              style={
                                FTScreenStyles(Android_Theme_Light)
                                  .inputFieldText
                              }
                            >
                              {this.state.selectedAccount}
                            </Text>
                            <View
                              style={
                                FTScreenStyles(Android_Theme_Light)
                                  .iconContainer
                              }
                            >
                              <Android_Theme_Light.ICON_VERIFIED
                                fill={
                                  this.state.selectedAccount
                                    ? Android_Theme_Light.BLUE_COLOR
                                    : Android_Theme_Light.GRAY_COLOR
                                }
                              />
                            </View>
                          </View>
                        </View>

                        {/*Add View to */}
                      </View>
                      <View style={{ height: 10 }} />
                    </>
                  )}

                  {/*this is End expand5 view of Registerd Payee */}

                  <View style={FTScreenStyles(Android_Theme_Light).inputView}>
                    <CommonInputField
                      value={this.state.amount}
                      title={"Amount *"}
                      onInputChange={(text) =>
                        this.handleAmountInputChange(text)
                      }
                      inputRef={this.transferTo}
                      nextInputRef={this.transferRemark}
                      type={"currency"}
                      width={"100%"}
                      icon={Android_Theme_Light.ICON_VERIFIED}
                    />

                    <View style={{ height: 10 }} />

                    <CommonInputField
                      value={this.state.selectedName}
                      title={"Remark"}
                      onInputChange={(text) =>
                        this.handlePasswordInputChange(text)
                      }
                      inputRef={this.transferRemark}
                      nextInputRef={this.transferPurpose}
                      placeholder={"Remark"}
                      width={"100%"}
                      icon={Android_Theme_Light.ICON_VERIFIED}
                    />
                  </View>
                  <View style={{ height: 20 }} />

                  {/* Previous Now /Later Button */}
                  {/* <View
                    style={FTScreenStyles(Android_Theme_Light).buttonContainer}
                  >
                    <View
                      style={
                        FTScreenStyles(Android_Theme_Light).buttonContainer1
                      }
                    >
                      <TouchableOpacity
                        onPress={() => this.setState({ isExpanded: false })}
                      >
                        <View
                          style={[
                            FTScreenStyles(Android_Theme_Light).button,
                            {
                              backgroundColor: this.state.isExpanded
                                ? Android_Theme_Light.WHITE_COLOR
                                : Android_Theme_Light.BLUE_COLOR,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              FTScreenStyles(Android_Theme_Light).buttonText,
                              {
                                color: this.state.isExpanded
                                  ? Android_Theme_Light.DARK_BLUE_COLOR
                                  : Android_Theme_Light.WHITE_COLOR,
                              },
                            ]}
                          >
                            Now
                          </Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={this.toggleExpand}>
                        <View
                          style={[
                            FTScreenStyles(Android_Theme_Light).button,
                            {
                              backgroundColor: this.state.isExpanded
                                ? Android_Theme_Light.BLUE_COLOR
                                : Android_Theme_Light.WHITE_COLOR,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              FTScreenStyles(Android_Theme_Light).buttonText,
                              {
                                color: this.state.isExpanded
                                  ? Android_Theme_Light.WHITE_COLOR
                                  : Android_Theme_Light.DARK_BLUE_COLOR,
                              },
                            ]}
                          >
                            Later
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View> */}

                  {/* Transaction Time Added By Dinuranga */}
                  <CommonSpinnerLong
                    width={"100%"}
                    data={this.state.TransactionTimes}
                    placeholder={this.state.SelectedTransactionTime}
                    lable_1={this.state.SelectedTransactionTime}
                    lable_2Show={false}
                    value={this.state.SelectedTransactionTime}
                    onRef={(ref) => (this.parentReferenceItem2 = ref)}

                    parentReferenceItem={(label_1, label_2, value) => {
                      value == 1
                        ? this.setState({ isExpanded: false })
                        : this.toggleExpand();
                      this.setState({
                        SelectedTransactionTime: label_1,
                      });
                    }}
                  />

                  {isExpanded && (
                    <View
                      style={
                        FTScreenStyles(Android_Theme_Light).expandContainer
                      }
                    >
                      <View style={{ height: 10 }} />
                      <Text
                        style={FTScreenStyles(Android_Theme_Light).titleText}
                      >
                        Schedule Type
                      </Text>
                      <View style={{ height: 5 }} />

                      {/* <View
                        style={FTScreenStyles(Android_Theme_Light).bankView}
                      >
                        <CommonSpinnerLong
                          width={"100%"}
                          data={shedualList}
                          placeholder={this.state.selectedSchedule}
                          lable_1={
                            this.state.selectedSchedule ||
                            shedualList[0].label_1
                          }
                          lable_2Show={false}
                          value={""}
                          search={false}
                          onRef={(ref) => (this.parentReferenceItem = ref)}
                          currency={"LKR"}
                          parentReferenceItem={(label_1, label_2, value) => {
                            this.setState({
                              selectedSchedule: label_1,
                            });
                            this.handleSpinnerSelection(label_1, value);
                          }}
                        />
                      </View> */}

                      {/* Shedule type DropDown- added by Dinuranga */}
                      <View
                        style={FTScreenStyles(Android_Theme_Light).bankView}
                      >
                        <SelectDropDown
                          width={"100%"}
                          data={this.state.shedualList.map((item) => ({
                            label: item.label_1,

                            value: item.value,
                          }))}
                          placeholder={
                            this.state.selectedSchedule || "Select Shedule"
                          }
                          lable={this.state.selectedSchedule}
                          value={this.state.selectedSchedule}
                          onRef={(ref) => (this.parentReferenceItemName = ref)}
                          parentReferenceItem={this.handleSpinnerSelection}
                        />
                      </View>

                      <View style={{ height: 20 }} />

                      {this.state.isExpanded1 && (
                        <>
                          <View style={{ height: 10 }} />
                          <Text
                            style={
                              FTScreenStyles(Android_Theme_Light).titleText
                            }
                          >
                            Frequency
                          </Text>
                          <View style={{ height: 5 }} />

                          {/* Commented by Dinuranga */}
                          {/* <View
                            style={FTScreenStyles(Android_Theme_Light).bankView}
                          >
                            <CommonSpinnerLong
                              width={"100%"}
                              data={frequencyList}
                              placeholder={"Select Frequency"}
                              lable_1={this.state.selectedFrequency}
                              lable_2Show={false}
                              value={""}
                              search={false}
                              onRef={(ref) => (this.parentReferenceItem = ref)}
                              parentReferenceItem={(
                                label_1,
                                label_2,
                                value
                              ) => {
                                this.setState({
                                  selectedFrequency: label_1,
                                });
                              }}
                            />
                          </View> */}

                          {/*Select Frequency DropDown- added by Dinuranga */}
                          <View
                            style={FTScreenStyles(Android_Theme_Light).bankView}
                          >
                            <SelectDropDown
                              width={"100%"}
                              data={this.state.frequencyList.map((item) => ({
                                label: item.label_1,

                                value: item.value,
                              }))}
                              placeholder={
                                this.state.selectedFrequency ||
                                "Select Frequency"
                              }
                              lable={this.state.selectedFrequency}
                              value={this.state.selectedFrequency}
                              onRef={(ref) =>
                                (this.parentReferenceItemName = ref)
                              }
                              parentReferenceItem={(value) => {
                                this.setState({
                                  selectedFrequency:
                                    this.state.frequencyList.find(
                                      (item) => item.value === value
                                    ).label_1,
                                });
                              }}
                            />
                          </View>

                          <View style={{ height: 20 }} />
                          <CommonInputField
                            value={""}
                            title={"Date From *"}
                            onInputChange={""}
                            inputRef={this.transferTo}
                            nextInputRef={this.transferRemark}
                            type={"date"}
                            width={"100%"}
                            icon={Android_Theme_Light.ICON_CALENDER}
                            readOnly={true}
                          />

                          <View style={{ height: 20 }} />
                          <CommonInputField
                            value={""}
                            title={"Date To *"}
                            onInputChange={""}
                            inputRef={this.transferTo}
                            nextInputRef={this.transferRemark}
                            type={"date"}
                            width={"100%"}
                            icon={Android_Theme_Light.ICON_CALENDER}
                            readOnly={true}
                          />
                        </>
                      )}

                      <View style={{ height: 20 }} />
                      {!this.state.isExpanded1 && (
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
                      )}
                      <View style={{ height: 20 }} />
                    </View>
                  )}
                  <View style={{ height: 20 }} />

                  <View style={FTScreenStyles(Android_Theme_Light).bottomView3}>
                    <View
                      style={FTScreenStyles(Android_Theme_Light).bottomView1}
                    >
                      <View
                        style={FTScreenStyles(Android_Theme_Light).bottomView2}
                      ></View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </KeyboardAwareScrollView>

          <View style={FTScreenStyles(Android_Theme_Light).bottomView}>
            <CommonButton
              type="1"
              title={"Next"}
              borderRadius={35}
              onPress={this.handleNextButtonPress}
              textSize={20}
              width={"60%"}
            />

            <BottomTitleBar
              icon1={Android_Theme_Light.ICON_BACK_ARROWS}
              icon2={Android_Theme_Light.ICON_HOME}
              onPressIcon1={this.handleBack}
              onPressIcon2={this.handleHome}
            />
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={this.toggleModal}
          >
            <TouchableWithoutFeedback onPress={this.toggleModal}>
              <View
                style={FTScreenStyles(Android_Theme_Light).modalViewBackground}
              >
                <View style={FTScreenStyles(Android_Theme_Light).modalView}>
                  <Text
                    style={FTScreenStyles(Android_Theme_Light).textTransfer}
                  >
                    {"LKR " + this.state.amount}
                  </Text>
                  <CommonButton
                    type="1"
                    title={"Transfer " + "LKR " + this.state.amount}
                    borderRadius={35}
                    onPress={this.handleValidationDialog}
                    width={"60%"}
                  />
                </View>
                <ValidationDialogs
                  title={"Verification"}
                  description={"Transfer"}
                  message={"Do You wish\n to Transfer "}
                  transparent={true}
                  isVisible={this.state.isVisibleValidationDialog}
                  onRef={(ref) => (this.parentReferenceItem = ref)}
                  parentReferenceItem={this.handleValidationDialogNo}
                  onPressYes={this.handleValidationDialogYes}
                  onPressNo={this.handleValidationDialogNo}
                />
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            visible={isZeroAmountModalVisible}
            onRequestClose={this.showZeroAmountModal}
          >
            <TouchableWithoutFeedback onPress={this.showZeroAmountModal}>
              <View
                style={FTScreenStyles(Android_Theme_Light).modalViewBackground}
              >
                <View style={FTScreenStyles(Android_Theme_Light).modalView}>
                  <Text
                    style={FTScreenStyles(Android_Theme_Light).textZeroTransfer}
                  >
                    Please enter an amount greater {'\n'} than 0 to proceed
                  </Text>


                  <View height={10}/>
                  <CommonButton
                    type="1"
                    title={"OK"}
                    borderRadius={35}
                    onPress={this.showZeroAmountModal}
                    width={"60%"}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </SafeAreaView>
      </>
    );
  }
}

export default FTScreen;
