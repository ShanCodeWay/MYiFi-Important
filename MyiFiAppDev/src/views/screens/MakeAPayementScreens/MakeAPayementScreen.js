// Splash.js
import React, { Component } from "react";
import { View, Text, Touchable, Modal, Image, FlatList } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import Icon_backArrows from "../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../assets/icons/Icon_home.svg";
import {
  Android_Theme_Light,
  Android_Theme_Dark,
} from "../../../styles/Themes";
import MainTitleBar from "../../components/Common/TitleBar/MainTitleBar";
import GetMakeAPayementScreenStyles from "./MakeAPayementScreenStyles";
import CommonButton from "../../components/Common/MainButton/CommonButton";
import CommonInputField from "../../components/Common/TextInput/CommonInputField";
import CommonSpinner from "../../components/Common/CommonSpinner";
import ValidationDialogs from "../../components/Common/ValidationDialogs";
import CommonSpinnerLong from "../../components/Common/CommonSpinnerLong";
import BottomTitleBar from "../../components/Common/BottomTitleBar";

// done by: Randima 2024/01/23
class MakeAPayementScreen extends Component {
  constructor(props) {
    super(props);
    this.TransferFromRef = React.createRef();
    //this.RemarksInputRef = React.createRef();
    this.AmountInputRef = React.createRef();
    this.RemarksInputRef = React.createRef();

    this.state = {
      selectedAccountFrom: null,
      amount: "",
      isVisibleValidationDialog: false,
      selectedLabel:'400124'
      // isModalVisible: false,

      //selectedCity: null,
    };
  }

  handleValidationDialog = () => {
    this.setState({ isVisibleValidationDialog: true });
  };

  handleValidationDialogNo = () => {
    this.setState({ isVisibleValidationDialog: false });
    // this.setState({ isModalVisible: false });
  };

  // toggleModal = () => {
  //   this.setState((prevState) => ({
  //     isModalVisible: !prevState.isModalVisible,
  //   }));
  // };

  handleValidationDialogYes = () => {
    this.props.navigation.navigate("MakeAPaymentViewScreen");
    this.setState({ isVisibleValidationDialog: false });
    // this.setState({ isModalVisible: false });
  };

  handleAccountFrom = (selectedAccountFrom) => {
    try {
      this.setState({ selectedAccountFrom });
    } catch (Error) {
      console.log("[TransferMoneyScreen] - handleAccountFrom - Error ", Error);
    }
  };

  test = (value) => {


  }
  handleAmountInputChange = (text) => {
    try {
      this.setState({ amount: text });
    } catch (Error) {
      console.log("[BillPayement] - handleAmountInputChange - Error ", Error);
    }
  };

  handleRemarkInputChange = (value) => {
    try {
      console.log("Input value:", value);
    } catch (Error) {
      console.log(
        "[TransferMoneyScreen] -  handleRemarkInputChange() EX: " + Error
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
      console.log("[TransferMoneyScreen] - componentDidMount() EX: " + Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log(
        "[TransferMoneyScreen] - componentWillUnmount() EX: " + Error
      );
    }
  }

  render() {
    const { isModalVisible } = this.state;
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "flex-end",
            //alignItems: "center",
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
            <View style={{ height: 40 }}></View>

            {/* upperContainer View Starts */}
            <View
              style={
                GetMakeAPayementScreenStyles(Android_Theme_Light).upperContainer
              }
            >
              <Text
                style={[
                  GetMakeAPayementScreenStyles(Android_Theme_Light).textTitle,
                ]}
              >
                {"Transfer"}
              </Text>

              <View
                style={[
                  GetMakeAPayementScreenStyles(Android_Theme_Light)
                    .transferFromContainer,
                ]}
              >
                <CommonSpinnerLong
                  width={"100%"}
                  data={[
                    { label: "400123", value: "450000", value1: "A" },
                    { label: "400124", value: "550000", value1: "B" },
                    {
                      label: "400125",
                      value: "750000",
                      value1: "C",
                    },
                  ]}
                  placeholder={"400125"}
                  value={this.state.selectedLabel}
                  // value1={this.state.selectedValue1}
                  valueShow={true}
                  //onRef={(ref) => (this.parentReferenceItem = ref)}
                //  inputRef={this.TransferFromRef}
                 // nextInputRef={this.AmountInputRef}
                  currency={"LKR"}

                  onRef={(ref) => (this.parentReferenceItem = ref)}
                  parentReferenceItem={this.test.bind(this)}

       
                />
{/* <CommonSpinner
width={"90%"}
data={[
  { label: "Sampath Bank", value: "B02" },
  { label: "Seylan Bank", value: "B03" },
  { label: "Bank of Ceylon", value: "B04" },
  { label: "Peoples Bank", value: "B05" },
  { label: "Amana Bank", value: "B076" },
  { label: "Sampath Bank", value: "B08" },
  { label: "Seylan Bank", value: "B09" },
]}
//title={"Select Account"}
placeholder={"Select Bank"}
value={this.state.selecteBank}
valueShow           = {false}  /* Set valueShow to false to hide the middle section 
currency={"LKR"}
onRef={(ref) => (this.parentReferenceItem = ref)}
parentReferenceItem={this.test.bind(this)}
/> */}


              </View>
            </View>
            {/* upperContainer View ends */}

            {/* middleContainer View Starts */}
            <View
              style={
                GetMakeAPayementScreenStyles(Android_Theme_Light)
                  .middleContainer
              }
            >
              <Text
                style={[
                  GetMakeAPayementScreenStyles(Android_Theme_Light).h1Text,
                ]}
              >
                {"Send to :"}
              </Text>

              {/* <View style={{ height: 5 }}></View> */}

              {/* Gold Loan No */}
              <CommonInputField
                value={""}
                title={"FD Account No"}
                placeholder={"45252525"}
                width={"100%"}
                icon={Android_Theme_Light.ICON_VERIFIED}
                onInputChange={this.handleAmountInputChange}
                nextInputRef={this.AmountInputRef}
                readOnly={true}
              />
              {/* <View style={{ height: 5 }}></View> */}

              {/* Amount(LKR) */}
              <CommonInputField
                value={this.state.amount}
                title={"Amount"}
                onInputChange={(text) => this.handleAmountInputChange(text)}
                icon={Android_Theme_Light.ICON_VERIFIED}
                inputRef={this.AmountInputRef}
                nextInputRef={this.RemarksInputRef}
                type={"currency"}
                width={"100%"}
              />
              {/* <View style={{ height: 5 }}></View> */}
              <CommonInputField
                value={""}
                title={"Remarks"}
                placeholder={"Remarks (Optional)"}
                width={"100%"}
                icon={Android_Theme_Light.ICON_VERIFIED}
                onInputChange={this.handleRemarkInputChange}
                inputRef={this.NICInputRef}
              />
            </View>
            {/* middleContainer View ends */}

            <View style={{ height: 80 }}></View>
            <View
              style={
                GetMakeAPayementScreenStyles(Android_Theme_Light)
                  .bottomContainer
              }
            >
              <CommonButton
                type={"1"} // 0 or 1
                text={""}
                title={"Next"}
                width={"100%"}
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
              <BottomTitleBar
                icon1={Icon_backArrows}
                icon2={Icon_home}
                onPressIcon1={this.handleBack}
                onPressIcon2={this.handleHome}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>

        <ValidationDialogs
          title={"Verification"}
          description={"payment"}
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
