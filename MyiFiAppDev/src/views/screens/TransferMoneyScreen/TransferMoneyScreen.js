// Splash.js
import React, { Component } from "react";
import { View, Text, Touchable, Modal, Image, FlatList } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import {
  Android_Theme_Light,
  Android_Theme_Dark,
} from "../../../styles/Themes";
import MainTitleBar from "../../components/Common/TitleBar/MainTitleBar";
import GetTransferMoneyScreenStyles from "./TransferMoneyScreenStyles";
import CommonButton from "../../components/Common/MainButton/CommonButton";
import CommonInputField from "../../components/Common/TextInput/CommonInputField";
import CommonSpinner from "../../components/Common/CommonSpinner";

//Done by:
class TransferMoneyScreen extends Component {
  constructor(props) {
    super(props);
    this.AmountInputRef = React.createRef();
    this.RemarksInputRef = React.createRef();

    this.state = {
      selectedAccountFrom: null,
      //selectedCity: null,
    };
  }

  handleAccountFrom = (selectedAccountFrom) => {
    try {
      this.setState({ selectedAccountFrom });
    } catch (Error) {
      console.log("[TransferMoneyScreen] - handleAccountFrom - Error ", Error);
    }
  };

  handleType = (handleType) => {
    try {
      this.setState({ handleType });
    } catch (Error) {
      console.log("[TransferMoneyScreen] - handleTypeChange() EX: " + Error);
    }
  };

  handleAccountType = (handleAccountType) => {
    try {
      this.setState({ handleAccountType });
    } catch (Error) {
      console.log(
        "[TransferMoneyScreen] - handleAccountTypeChange() EX: " + Error
      );
    }
  };

  handleToAccount = (handleToAccount) => {
    try {
      this.setState({ handleToAccount });
    } catch (Error) {
      console.log("[TransferMoneyScreen] - handleToAccount() - Error ", Error);
    }
  };

  handleToPayee = (handleToPayee) => {
    try {
      this.setState({ handleToPayee });
    } catch (Error) {
      console.log("[TransferMoneyScreen] - handleToPayee() EX: " + Error);
    }
  };

  handleAmountInputChange = (value) => {
    try {
      console.log("Input value:", value);
    } catch (Error) {
      console.log(
        "[TransferMoneyScreen] - handleAmountInputChange() EX: " + Error
      );
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

  handleNowButtonPress = () => {
    try {
      this.props.navigation.navigate("");
      console.log("button pressed to navigate to ");
    } catch (error) {
      console.log("[TransferMoneyScreen] - Next_Button - Error ", error);
    }
  };

  handleLaterButtonPress = () => {
    try {
      this.props.navigation.navigate("");
      console.log("button pressed to navigate to ");
    } catch (error) {
      console.log("[TransferMoneyScreen] - Next_Button - Error ", error);
    }
  };

  handleNextButtonPress = () => {
    try {
      this.props.navigation.navigate("");
      console.log("button pressed to navigate to ");
    } catch (error) {
      console.log("[TransferMoneyScreen] - Next_Button - Error ", error);
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
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <MainTitleBar
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          TitleText={"Transfer Money"}
          IconRight={null}
          //onPressLeft={() => this.OnPress_BackButton()}
        />
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <View
            style={[
              GetTransferMoneyScreenStyles(Android_Theme_Light)
                .transferFromContainer,
            ]}
          >
            <Text
              style={[GetTransferMoneyScreenStyles(Android_Theme_Light).h1Text]}
            >
              {"TRANSFER FROM"}
            </Text>

            <CommonSpinner
              title={null}
              width={"100%"}
              data={[
                { label: "00912345671", value: "00912345671" },
                { label: "00912345672", value: "00912345672" },
                {
                  label: "00912345673",
                  value: "00912345673",
                },
              ]}
              placeholder={""}
              value={this.state.selectedAccountFrom}
              lable={this.state.selectedAccountFrom}
              parentReferenceItem={this.handleAccountFrom}
            />
            <View style={{ height: 20 }}></View>
            <Text
              style={[GetTransferMoneyScreenStyles(Android_Theme_Light).h2Text]}
            >
              {"Balance LKR"}
            </Text>
          </View>
          <View
            style={[
              GetTransferMoneyScreenStyles(Android_Theme_Light)
                .transferToContainer,
            ]}
          >
            <Text
              style={[GetTransferMoneyScreenStyles(Android_Theme_Light).h1Text]}
            >
              {"TRANSFER TO"}
            </Text>
            
            <View style={{ height: 5 }}></View>

            {/* Type */}
            <CommonSpinner
              title={"Type"}
              width={"100%"}
              data={[
                {
                  label: "own account transfer",
                  value: "own account transfer",
                },
                { label: "Registered Payee", value: "Registered Payee" },
                {
                  label: "Unregistered Payee",
                  value: "Unregistered Payee",
                },
              ]}
              placeholder={""}
              value={this.state.selectedAccountFrom}
              lable={this.state.selectedAccountFrom}
              parentReferenceItem={this.handleType}
            />
            <View style={{ height: 5 }}></View>
            {/* Account Type*/}
            <CommonSpinner
              title={"Account Type"}
              width={"100%"}
              data={[
                { label: "Internal", value: "Internal" },
                { label: "Test_01", value: "Test_01" },
                {
                  label: "Test_02",
                  value: "Test_02",
                },
              ]}
              placeholder={""}
              value={this.state.selectedAccountFrom}
              lable={this.state.selectedAccountFrom}
              parentReferenceItem={this.handleAccountType}
            />
            <View style={{ height: 5 }}></View>
            {/* To Account */}
            {/* <CommonSpinner
              title={"To Account"}
              width={"100%"}
              data={[
                { label: "00912345671", value: "00912345671" },
                { label: "00912345672", value: "00912345672" },
                {
                  label: "00912345673",
                  value: "00912345673",
                },
              ]}
              placeholder={""}
              value={this.state.selectedAccountFrom}
              lable={this.state.selectedAccountFrom}
              parentReferenceItem={this.handleToAccount}
            /> */}
            <View style={{ height: 5 }}></View>
            {/* To Payee* */}
            {/* <CommonSpinner
              title={"To Payee*"}
              width={"100%"}
              data={[
                { label: "00912345671", value: "00912345671" },
                { label: "00912345672", value: "00912345672" },
                {
                  label: "00912345673",
                  value: "00912345673",
                },
              ]}
              placeholder={""}
              value={this.state.selectedAccountFrom}
              lable={this.state.selectedAccountFrom}
              parentReferenceItem={this.handleToPayee}
            /> */}
            <View style={{ height: 5 }}></View>
            {/* Amount(LKR)* */}
            <CommonInputField
              value={""}
              title={"Amount(LKR)*"}
              placeholder={"Amount"}
              width={"100%"}
              //icon={Android_Theme_Light.ICON_NIC}
              onInputChange={this.handleAmountInputChange}
              inputRef={this.AmountInputRef}
              nextInputRef={this.RemarksInputRef}
              //editable={false}
            />
            <View style={{ height: 5 }}></View>
            <Text
              style={[GetTransferMoneyScreenStyles(Android_Theme_Light).h2Text]}
            >
              {"Daily Limit LKR"}
            </Text>
          </View>
          <View
            style={[
              GetTransferMoneyScreenStyles(Android_Theme_Light)
                .remarksContainer,
            ]}
          >
            {/* <Text
              style={[GetTransferMoneyScreenStyles(Android_Theme_Light).h1Text]}
            >
              {"Remarks"}
            </Text> */}

            <CommonInputField
              value={""}
              title={"Remarks"}
              placeholder={"Remarks (Optional)"}
              width={"100%"}
              //icon={Android_Theme_Light.ICON_NIC}
              onInputChange={this.handleRemarkInputChange}
              inputRef={this.NICInputRef}
              //editable={false}
            />
          </View>
          <View
            style={[
              GetTransferMoneyScreenStyles(Android_Theme_Light)
                .doubleButtonContainer,
            ]}
          >
            <CommonButton
              type={"1"} // 0 or 1
              text={""}
              title={"Now"}
              width={"30%"}
              backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
              hideIcon={"0"}
              textColor={Android_Theme_Light.WHITE_COLOR}
              onPress={() => this.handleNowButtonPress()}
            />
            <CommonButton
              type={"1"} // 0 or 1
              text={""}
              title={"Later"}
              width={"30%"}
              backgroundColor={Android_Theme_Light.WHITE_COLOR}
              hideIcon={"0"}
              textColor={Android_Theme_Light.DARK_BLUE_COLOR}
              border
              onPress={() => this.handleLaterButtonPress()}
            />
          </View>
          <View
            style={[
              GetTransferMoneyScreenStyles(Android_Theme_Light)
                .nextButtonContainer,
            ]}
          >
            <CommonButton
              type={"1"} // 0 or 1
              text={""}
              title={"Next"}
              width={"90%"}
              //leftIcon={Android_Theme_Light.ICON_CAMERA}
              backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
              onPress={() => this.handleNextButtonPress()}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default TransferMoneyScreen;
