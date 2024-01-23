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
import { GetAddBillerStyles } from "./AddBillerStyles";
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

//Done by: Darshana 24/01/23

class AddBiller extends Component {
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
      selectedCategory: null,
      selectedProvider: null,
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
      console.log("[AddBiller] - componentDidMount - Error ", Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[AddBiller] - componentWillUnmount - Error ", Error);
    }
  }

  handleNextButtonPress = () => {
    try {
      this.props.navigation.replace(Index.FUND_1);
      console.log("Next button pressed to navigate to AddBiller");
    } catch (error) {
      console.log("[AddBiller] - Next_Button - Error ", error);
    }
  };

  handleLeftButtonPress = () => {
    try {
      this.props.navigation.replace(Index.BILL_1);
      console.log("left pressed to navigate BillPayement");
    } catch (error) {
      console.log("[AddBiller] - left_Button - Error ", error);
    }
  };
  handleCategory = (selectedCategory) => {
    try {
      this.setState({ selectedCategory });
    } catch (Error) {
      console.log("[AddBiller] - handleCategory - Error ", Error);
    }
  };

  handleProvider = (selectedProvider) => {
    try {
      this.setState({ selectedProvider });
    } catch (Error) {
      console.log("[AddBiller] - handleProvider - Error ", Error);
    }
  };

  render() {
    return (
      <>
        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
          <MainTitleBar
            IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
            TitleText={"Add New Biller"}
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
              <View style={GetAddBillerStyles(Android_Theme_Light).middleView}>
                <View style={{ height: 10 }} />

                <CommonInputField
                  value={this.state.selectedName}
                  title={"Nick Name"}
                  onInputChange={(text) => this.handlePasswordInputChange(text)}
                  inputRef={this.transferRemark}
                  nextInputRef={this.transferPurpose}
                  placeholder={"Enter Nick Name"}
                  width={"100%"}
                />

                <View style={{ height: 20 }} />

                <Text style={GetAddBillerStyles(Android_Theme_Light).titleText}>
                  Category
                </Text>
                <View style={{ height: 5 }} />
                <View style={GetAddBillerStyles(Android_Theme_Light).bankView}>
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

                <Text style={GetAddBillerStyles(Android_Theme_Light).titleText}>
                  Provider
                </Text>
                <View style={{ height: 5 }} />
                <View style={GetAddBillerStyles(Android_Theme_Light).bankView}>
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
                  title={"Account Number"}
                  onInputChange={(text) => this.handlePasswordInputChange(text)}
                  inputRef={this.transferRemark}
                  nextInputRef={this.transferPurpose}
                  placeholder={"Enter Account Number"}
                  width={"100%"}
                />

                <View style={{ height: 20 }} />
              </View>
            </View>
          </KeyboardAwareScrollView>

          <View style={GetAddBillerStyles(Android_Theme_Light).bottomView}>
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

export default AddBiller;
