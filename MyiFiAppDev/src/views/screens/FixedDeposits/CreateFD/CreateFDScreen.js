import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Modal,
  
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import GetCreateFDScreenStyles from "./CreateFDScreenStyles";
import Index from "../../../navigators/NavIndex";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import CommonSpinnerLong from "../../../components/Common/CommonSpinnerLong";
import ValidationDialogs from "../../../components/Common/ValidationDialogs";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import BottomBar from "../../../components/Common/BottomBar/BottomBar";
import { Android_Theme_Light } from "../../../../styles/Themes";
import SelectDropDown from "../../../components/Common/Dropdown/SelectDropDown";
import LinearGradient from "react-native-linear-gradient";

//Done by: Dinuranga 12/02/2024
class CreateFDScreen extends Component {
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

      toAccount: null,
      amount: "",
      isVisibleValidationDialog: false,
      isModalVisible: false,
      isZeroAmountModalVisible: false,
      selectedFrequency: "",
      selectedDuration: "",
      selectedPaymentType: "",
      selectedFromAccount: "",
      selectedFromAccountAmount: "",
      selectedFromAccountID: "",
      selectedToAccount: "",
      selectedToAccountAmount: "",
      selectedToAccountID: "",

      spinnerData: [
        { label_1: "288-374-829", label_2: "457,685", value: "001" },
        { label_1: "355-567-234", label_2: "546,685.33", value: "002" },
        { label_1: "234-675-345", label_2: "757,685.45", value: "003" },
      ],

      frequencyList: [
        { label_1: "Monthly", value: "01" },
        { label_1: "Annually", value: "02" },
        { label_1: "BiAnnually", value: "03" },
        { label_1: "Daily", value: "04" },
        { label_1: "Maturity", value: "05" },
        { label_1: "Quaterly", value: "06" },
      ],
      DuarationList: [
        { label_1: "3 Months", value: "01" },
        { label_1: "6 Months", value: "02" },
        { label_1: "1 Year", value: "03" },
        { label_1: "2 Year", value: "04" },
        { label_1: "3 Year", value: "05" },
        { label_1: "5 Year", value: "06" },
      ],
      PaymentTypeList: [
        { label_1: "Savings Transfer", value: "01" },
        { label_1: "Payment Type 2", value: "02" },
      ],
    };
  }

  componentDidMount() {
    try {
      this.setState({
        selectedFromAccount: this.state.spinnerData[0].label_1,
        selectedFromAccountAmount: this.state.spinnerData[0].label_2,
        selectedFromAccountID: this.state.spinnerData[0].value,

        selectedToAccount: this.state.spinnerData[0].label_1,
        selectedToAccountAmount: this.state.spinnerData[0].label_2,
        selectedToAccountID: this.state.spinnerData[0].value,
      });
    } catch (Error) {
      console.log("[CreateFDScreen] - componentDidMount - EX: ", Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[CreateFDScreen] - componentWillUnmount - EX: ", Error);
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
      console.log("[CreateFDScreen] - handleNextButtonPress - EX: ", error);
    }
  };

  handleAmountInputChange = (text) => {
    try {
      this.setState({ amount: text });
    } catch (Error) {
      console.log("[CreateFDScreen] - handleAmountInputChange - EX: ", Error);
    }
  };

  handleValidationDialog = () => {
    try {
      this.setState({ isVisibleValidationDialog: true });
    } catch (Error) {
      console.log("[CreateFDScreen] - handleValidationDialog - EX: ", Error);
    }
  };

  handleValidationDialogNo = () => {
    try {
      this.setState({ isVisibleValidationDialog: false });
      this.setState({ isModalVisible: false });
    } catch (Error) {
      console.log("[CreateFDScreen] - handleValidationDialogNo - EX: ", Error);
    }
  };

  handleValidationDialogYes = () => {
    try {
      this.props.navigation.navigate(Index.FD_CREATE_CONFIRMATION_SCREEN, { data: this.state.amount });
      this.setState({ isVisibleValidationDialog: false });
      this.setState({ isModalVisible: false });
    } catch (Error) {
      console.log("[CreateFDScreen] - handleValidationDialogYes - EX: ", Error);
    }
  };

  toggleModal = () => {
    try {
      this.setState((prevState) => ({
        isModalVisible: !prevState.isModalVisible,
      }));
    } catch (Error) {
      console.log("[CreateFDScreen] - toggleModal - EX: ", Error);
    }
  };

  showZeroAmountModal = () => {
    try {
      this.setState((prevState) => ({
        isZeroAmountModalVisible: !prevState.isZeroAmountModalVisible,
      }));
    } catch (Error) {
      console.log("[CreateFDScreen] - showZeroAmountModal - EX: ", Error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.replace("DashboardScreen");
      console.log("Home Button pressed to Navigate to DashboardScreen");
    } catch (error) {
      console.log("[CreateFDScreen] - handleHome - EX: ", error);
    }
  };

  handleBack = () => {
    try {
      this.props.navigation.replace(Index.FD_SCREEN_1);
      console.log("Back Button pressed to Navigate to DashboardScreen");
    } catch (error) {
      console.log("[CreateFDScreen] - handleBack - EX: ", error);
    }
  };

  handleSpinnerChange1 = (label_1, label_2, value) => {
    try {
      this.setState({
        selectedFromAccount: label_1,
        selectedFromAccountAmount: label_2,
        selectedFromAccountID: value,
      });
    } catch (error) {
      console.log("[FTScreen] - handleSpinnerChange1 - EX: ", error);
    }
  };
  handleSpinnerChange2 = (label_1, label_2, value) => {
    try {
      this.setState({
        selectedToAccount: label_1,
        selectedToAccountAmount: label_2,
        selectedToAccountID: value,
      });
    } catch (error) {
      console.log("[FTScreen] - handleSpinnerChange2 - EX: ", error);
    }
  };
  handleTypeChange = (label_1, label_2, value) => {
    try {
      this.setState({
        selectedToAccount: label_1,
        selectedToAccountAmount: label_2,
        selectedToAccountID: value,
      });
    } catch (error) {
      console.log("[FTScreen] - handleTypeChange - EX: ", error);
    }
  };

  handleFdType = (value) => {
    try {
      this.setState({
        selectedFrequency: this.state.frequencyList.find(
          (item) => item.value === value
        ).label_1,
      });
    } catch (error) {
      console.log("[FTScreen] - handleFdType - Error ", error);
    }
  };
  handleDurationSelect = (value) => {
    try {
      this.setState({
        selectedDuration: this.state.DuarationList.find(
          (item) => item.value === value
        ).label_1,
      });
    } catch (error) {
      console.log("[FTScreen] - handleDurationSelect - Error ", error);
    }
  };
  handlePaymentType = (value) => {
    try {
      this.setState({
        selectedPaymentType: this.state.PaymentTypeList.find(
          (item) => item.value === value
        ).label_1,
      });
    } catch (error) {
      console.log("[FTScreen] - handlePaymentType - EX: ", error);
    }
  };

  render() {
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
                  Create Fixed Deposit
                </Text>
              </View>

              <View
                style={GetCreateFDScreenStyles(Android_Theme_Light).middleView}
              >
                <ScrollView>
                  <View style={{ height: 5 }} />

                  {/* Select Account */}
                  <Text
                    style={
                      GetCreateFDScreenStyles(Android_Theme_Light).titleText
                    }
                  >
                    Account
                  </Text>
                  <CommonSpinnerLong
                    width={"100%"}
                    data={this.state.spinnerData}
                    placeholder={
                      this.state.selectedFromAccount ||
                      this.state.spinnerData[1].label_1
                    }
                    lable_1={this.state.selectedFromAccount}
                    lable_2={
                      this.state.selectedFromAccountAmount ||
                      this.state.spinnerData[1].label_2
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

                  {/* FD Amount */}
                  <CommonInputField
                    value={this.state.amount}
                    title={"Amount *"}
                    onInputChange={(text) => this.handleAmountInputChange(text)}
                    inputRef={this.transferTo}
                    nextInputRef={this.transferRemark}
                    type={"currency"}
                    width={"100%"}
                    icon={Android_Theme_Light.ICON_VERIFIED}
                  />
                  <View style={{ height: 20 }} />

                  {/* FD Type */}
                  <Text
                    style={
                      GetCreateFDScreenStyles(Android_Theme_Light).titleText
                    }
                  >
                    Type
                  </Text>
                  <View style={{ height: 5 }} />

                  <View
                    style={
                      GetCreateFDScreenStyles(Android_Theme_Light).bankView
                    }
                  >
                    <SelectDropDown
                      width={"100%"}
                      data={this.state.frequencyList.map((item) => ({
                        label: item.label_1,

                        value: item.value,
                      }))}
                      placeholder={
                        this.state.selectedFrequency || "Select Frequency"
                      }
                      label={this.state.selectedFrequency}
                      value={this.state.selectedFrequency}
                      onRef={(ref) => (this.parentReferenceItemName = ref)}
                      parentReferenceItem={this.handleFdType}
                    />
                  </View>

                  <View style={{ height: 20 }} />

                  {/*Select Duration */}
                  <Text
                    style={
                      GetCreateFDScreenStyles(Android_Theme_Light).titleText
                    }
                  >
                    Duration
                  </Text>
                  <View style={{ height: 5 }} />

                  <View
                    style={
                      GetCreateFDScreenStyles(Android_Theme_Light).bankView
                    }
                  >
                    <SelectDropDown
                      width={"100%"}
                      data={this.state.DuarationList.map((item) => ({
                        label: item.label_1,

                        value: item.value,
                      }))}
                      placeholder={
                        this.state.selectedDuration || "Select Duration"
                      }
                      label={this.state.selectedDuration}
                      value={this.state.selectedDuration}
                      onRef={(ref) => (this.parentReferenceItemName = ref)}
                      parentReferenceItem={this.handleDurationSelect}
                    />
                  </View>

                  <View style={{ height: 20 }} />

                  {/* Intrest and maturity */}

                  {this.state.selectedDuration != "" ? (
                    <View style={[{ flexDirection: "row" }]}>
                      <LinearGradient
                        angle={70}
                        useAngle={true}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        colors={["#0044A9", "#0044A9", "#4384DA"]}
                        style={
                          GetCreateFDScreenStyles(Android_Theme_Light)
                            .interestboxGradient
                        }
                      >
                        <Android_Theme_Light.ICON_LOAN
                          width={30}
                          height={30}
                          fill={Android_Theme_Light.WHITE_COLOR}
                        />

                        <Text
                          style={
                            GetCreateFDScreenStyles(Android_Theme_Light)
                              .textInterest
                          }
                        >
                          {"22.45%" + "\nInterest"}
                        </Text>

                        <View />
                      </LinearGradient>
                      <View style={{ width: 20 }} />
                      <LinearGradient
                        angle={70}
                        useAngle={true}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        colors={["#0044A9", "#0044A9", "#4384DA"]}
                        style={
                          GetCreateFDScreenStyles(Android_Theme_Light)
                            .interestboxGradient
                        }
                      >
                        <Android_Theme_Light.ICON_CALENDER
                          width={30}
                          height={30}
                          fill={Android_Theme_Light.WHITE_COLOR}
                        />

                        <Text
                          style={
                            GetCreateFDScreenStyles(Android_Theme_Light)
                              .textInterest
                          }
                        >
                          {"2024-07-12" + "\nMaturity Date"}
                        </Text>

                        <View />
                      </LinearGradient>
                    </View>
                  ) : null}

                  <View style={{ height: 20 }} />

                  {/*Select Payment Type */}
                  <Text
                    style={
                      GetCreateFDScreenStyles(Android_Theme_Light).titleText
                    }
                  >
                    Payment Type
                  </Text>
                  <View style={{ height: 5 }} />

                  <View
                    style={
                      GetCreateFDScreenStyles(Android_Theme_Light).bankView
                    }
                  >
                    <SelectDropDown
                      width={"100%"}
                      data={this.state.PaymentTypeList.map((item) => ({
                        label: item.label_1,

                        value: item.value,
                      }))}
                      placeholder={
                        this.state.selectedPaymentType || "Select Payment Type"
                      }
                      label={this.state.selectedPaymentType}
                      value={this.state.selectedPaymentType}
                      onRef={(ref) => (this.parentReferenceItemName = ref)}
                      parentReferenceItem={this.handlePaymentType}
                    />
                  </View>

                  <View style={{ height: 20 }} />

                  {/* Interest Deposition Account */}
                  <Text
                    style={
                      GetCreateFDScreenStyles(Android_Theme_Light).titleText
                    }
                  >
                    Interest Deposition Account
                  </Text>
                  <CommonSpinnerLong
                    width={"100%"}
                    data={this.state.spinnerData}
                    placeholder={
                      this.state.selectedToAccount ||
                      this.state.spinnerData[1].label_1
                    }
                    lable_1={this.state.selectedToAccount}
                    lable_2={
                      this.state.selectedToAccountAmount ||
                      this.state.spinnerData[1].label_2
                    }
                    lable_2Show={true}
                    value={this.state.selectedToAccountID}
                    onRef={(ref) => (this.parentReferenceItem1 = ref)}
                    inputRef={this.transferFrom}
                    nextInputRef={this.transferTo}
                    currency={"LKR"}
                    parentReferenceItem={this.handleSpinnerChange2}
                  />

                  <View style={{ height: 20 }} />
                </ScrollView>
              </View>
            </View>
          </KeyboardAwareScrollView>

          <View style={GetCreateFDScreenStyles(Android_Theme_Light).bottomView}>
            <CommonButton
              type="1"
              title={"Next"}
              borderRadius={35}
              onPress={this.handleNextButtonPress}
              textSize={20}
              width={"60%"}
            />

            <BottomBar
              BackIcon={Android_Theme_Light.ICON_BACK_ARROWS}
              HomeIcon={Android_Theme_Light.ICON_HOME}
              onPressBackButton={this.handleBack}
              onPressHomeButton={this.handleHome}
            />
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.isModalVisible}
            onRequestClose={this.toggleModal}
          >
            <TouchableWithoutFeedback onPress={this.toggleModal}>
              <View
                style={
                  GetCreateFDScreenStyles(Android_Theme_Light)
                    .modalViewBackground
                }
              >
                <View
                  style={GetCreateFDScreenStyles(Android_Theme_Light).modalView}
                >
                  <Text
                    style={
                      GetCreateFDScreenStyles(Android_Theme_Light).textTransfer
                    }
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
            visible={this.state.isZeroAmountModalVisible}
            onRequestClose={this.showZeroAmountModal}
          >
            <TouchableWithoutFeedback onPress={this.showZeroAmountModal}>
              <View
                style={
                  GetCreateFDScreenStyles(Android_Theme_Light)
                    .modalViewBackground
                }
              >
                <View
                  style={GetCreateFDScreenStyles(Android_Theme_Light).modalView}
                >
                  <Text
                    style={
                      GetCreateFDScreenStyles(Android_Theme_Light)
                        .textZeroTransfer
                    }
                  >
                    Please enter an amount greater {"\n"} than 0 to proceed
                  </Text>

                  <View height={10} />
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

export default CreateFDScreen;
