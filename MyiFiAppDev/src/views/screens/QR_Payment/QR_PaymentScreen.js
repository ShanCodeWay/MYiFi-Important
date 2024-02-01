import React, { Component } from "react";
import { View, Text, Image } from "react-native";
const { SafeAreaView } = require("react-native-safe-area-context");
const { Android_Theme_Light } = require("../../../styles/Themes");
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import GetQR_PaymentScreenStyles from "./QR_PaymentScreenStyles";
import CommonSpinnerLong from "../../components/Common/CommonSpinnerLong";
import CommonInputField from "../../components/Common/TextInput/CommonInputField";
import CommonButton from "../../components/Common/MainButton/CommonButton";
import BottomTitleBar from "../../components/Common/BottomTitleBar";
import ValidationDialogs from "../../components/Common/ValidationDialogs";

//Done by Randima 2024/01/31
class QR_PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.TransferFromRef = React.createRef();
    this.MerchantNameInputRef = React.createRef();
    this.AmountInputRef = React.createRef();
    this.RemarksInputRef = React.createRef();

    this.state = {
      isVisibleValidationDialog: false,
      selectedAmount: "",
      merchantName: "",
      amount: "",
      selectedAccount: "40011122211",
      valueRemark: "",
    };
  }

  handleValidationDialog = () => {
    this.setState({ isVisibleValidationDialog: true });
  };

  handleValidationDialogYes = () => {
    if (this.state.amount == 0.0) {
      const success = false;
      this.props.navigation.navigate("QR_PaymentSuccessScreen",{success: success});
    } else {
      const success = true;
      this.props.navigation.navigate("QR_PaymentSuccessScreen", {
        amountEntered: this.state.amount,
        success: success
      });
    }

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
      console.log("[QR_PaymentScreen] - handleNameSelction - Error ", Error);
    }
  };

  handleAmountInputChange = (amount) => {
    try {
      console.log("*************", amount);
      this.setState({ amount: parseFloat(amount.replace(/,/g, "")) });
    } catch (Error) {
      console.log(
        "[QR_PaymentScreen] -  handleAmountInputChange() EX: " + Error
      );
    }
  };

  handleRemarkInputChange = (valueRemark) => {
    try {
      this.setState({ valueRemark: valueRemark });
      console.log("Input value:", valueRemark);
    } catch (Error) {
      console.log(
        "[QR_PaymentScreen] -  handleRemarkInputChange() EX: " + Error
      );
    }
  };

  handleNextButtonPress = () => {
    try {
      this.props.navigation.navigate("ValidationDialogs");
      console.log("button pressed to navigate to ");
    } catch (error) {
      console.log("[QR_PaymentScreen] - Next_Button - Error ", error);
    }
  };

  handleBack = () => {
    try {
      this.props.navigation.replace("DashboardScreen");
    } catch (error) {
      console.log("[QR_PaymentScreen] - handleBack - Error ", error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.replace("DashboardScreen");
    } catch (error) {
      console.log("[QR_PaymentScreen] - handleHome - Error ", error);
    }
  };

  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[QR_PaymentScreen] - componentDidMount() EX: " + Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[QR_PaymentScreen] - componentWillUnmount() EX: " + Error);
    }
  }
  render() {
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
                GetQR_PaymentScreenStyles(Android_Theme_Light).upperContainer
              }
            >
              <Text
                style={GetQR_PaymentScreenStyles(Android_Theme_Light).textTitle}
              >
                {"QR Payment"}
              </Text>

              <Text
                style={
                  GetQR_PaymentScreenStyles(Android_Theme_Light).textSubTitle
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
              style={
                GetQR_PaymentScreenStyles(Android_Theme_Light).middleContainer
              }
            >
              {/* QR image */}
              <View
                style={GetQR_PaymentScreenStyles(Android_Theme_Light).qrBox}
              >
                <Image
                  style={
                    GetQR_PaymentScreenStyles(Android_Theme_Light)
                      .profilePicture
                  }
                  source={require("../../../assets/images/FullQR_Static.png")}
                  resizeMode="contain"
                />
              </View>

              {/* Scan QR Button */}
              <CommonButton
                type={"1"}
                width={"40%"}
                title={"Scan QR Code"}
                fontFamily={Android_Theme_Light.POPPINS_SEMIBOLD}
                textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
                textColor={Android_Theme_Light.DEEP_BLACK_COLOR}
                backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
                onPress={this.onPresKycSignUp}
              />

              {/* Merchant Name */}
              <CommonInputField
                value={this.state.merchantName}
                title={"Merchant Name"}
                placeholder={""}
                width={"100%"}
                icon={Android_Theme_Light.ICON_VERIFIED}
                onInputChange={() => null}
                inputRef={this.MerchantNameInputRef}
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
                GetQR_PaymentScreenStyles(Android_Theme_Light).bottomContainer
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
              style={GetQR_PaymentScreenStyles(Android_Theme_Light).bottomView}
            >
              {/* Bottom Title Bar */}
              <BottomTitleBar
                icon1={Android_Theme_Light.ICON_BACK_ARROWS}
                icon2={Android_Theme_Light.ICON_HOME}
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

export default QR_PaymentScreen;
