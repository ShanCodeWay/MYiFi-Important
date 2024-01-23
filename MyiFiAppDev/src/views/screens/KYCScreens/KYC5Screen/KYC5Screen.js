// KYC5Screen.js (KYC details)

import { faKeycdn } from "@fortawesome/free-brands-svg-icons";
import React, { Component } from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import GetKYC5ScreenStyles from "./KYC5ScreenStyles";
import { Svg, Circle } from "react-native-svg";
import Colors from "../../../../styles/Colors";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import Icon_angleDown from "../../../../assets/icons/Icon_angleDown.svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CommonSpinner from "../../../components/Common/CommonSpinner";

class KYC5Screen extends Component {
  constructor(props) {
    super(props);
    this.NICInputRef = React.createRef();
    this.DOBInputRef = React.createRef();
    this.TitleInputRef = React.createRef();
    this.LastNameInputRef = React.createRef();
    this.OtherNamesInputRef = React.createRef();
    this.InitialsInputRef = React.createRef();
    this.GenderInputRef = React.createRef();
    this.EmailInputRef = React.createRef();
    this.MobileInputRef = React.createRef();
    this.ResidenceTelNoInputRef = React.createRef();
    this.Address_1InputRef = React.createRef();
    this.Address_2InputRef = React.createRef();
    this.Address_3InputRef = React.createRef();
    this.CityInputRef = React.createRef();
    this.DistrictInputRef = React.createRef();
    this.ProvinceInputRef = React.createRef();

    this.state = {
      //nicNumber: props.nicNumber || "",
      selectedTitle: null,
      selectedCity: null,
    };
  }

  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[KYC5Screen] - componentDidMount() EX: " + Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[KYC5Screen] - componentWillUnmount() EX: " + Error);
    }
  }

  handleTitle = (selectedTitle) => {
    try {
      this.setState({ selectedTitle });
    } catch (Error) {
      console.log("[KYC5Screen] - handleTitleSelction - Error ", Error);
    }
  };

  handleCity = (selectedCity) => {
    try {
      this.setState({ selectedCity });
    } catch (Error) {
      console.log("[KYC5Screen] - handleCitySelction - Error ", Error);
    }
  };

  handleInputChange = (value) => {
    try {
      console.log("Input value:", value);
    } catch (Error) {
      console.log("[KYC5Screen] - handleInputChange() EX: " + Error);
    }
  };

  handleNICInputChange = (value) => {
    try {
      console.log("Input value:", value);
    } catch (Error) {
      console.log("[KYC5Screen] - handleInputChange() EX: " + Error);
    }
  };

  handleNextButtonPress = () => {
    try {
      console.log("Next button pressed");
      this.props.navigation.navigate("KYC6Screen");
    } catch (error) {
      console.log("[KYC5Screen] - Next_Button - Error ", error);
    }
  };

  OnPress_BackButton = () => {
    try {
      console.log("back button pressed");
      this.props.navigation.navigate("KYC4Screen");
    } catch (error) {
      console.log("[KYC5Screen] - OnPress_BackButton - Error ", error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        {/* <StatusBar backgroundColor="red" barStyle="dark-content" /> */}
        <MainTitleBar
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          TitleText={"KYC Details"}
          // TextAlign={"left"}
          IconRight={null}
          onPressLeft={() => this.OnPress_BackButton()}
        />

        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <ScrollView>
            <View
              style={
                GetKYC5ScreenStyles(Android_Theme_Light).backgroundContainer
              }
            >
              {/* <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always"
            behavior="padding"
            //keyboardShouldPersistTaps="handled"
            //enableAutomaticScroll={true}
            //extraScrollHeight={150}
            //contentInset={{ bottom: this.state.contentBottom }}
            //onKeyboardWillHide={() => this.setState({ contentBottom: 0 })}
            //onKeyboardDidHide={() => this.setState({ contentBottom: 0 })}
            //onKeyboardDidShow={() => this.setState({ contentBottom: 0, })}
            contentContainerStyle={
              GetCommonStyles(Android_Theme_Light).keyboardAwareView
            }> */}
              {/* NIC */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"NIC"}
                  placeholder={this.props.nicNumber}
                  width={"100%"}
                  icon={Android_Theme_Light.ICON_NIC}
                  onInputChange={this.handleNICInputChange}
                  inputRef={this.NICInputRef}
                  nextInputRef={this.DOBInputRef}
                  editable={false}
                />
              </View>

              {/* DOB */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Date of Birth"}
                  placeholder={""}
                  width={"100%"}
                  icon={Android_Theme_Light.ICON_CALENDER}
                  onInputChange={this.handleInputChange}
                  inputRef={this.DOBInputRef}
                  nextInputRef={this.TitleInputRef}
                  editable={false}
                />
              </View>
              <View style={{ height: 5 }}></View>
              {/* Title */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonSpinner
                  title={null}
                  width={"100%"}
                  data={[
                    { label: "Title_01", value: "Title_01" },
                    { label: "Title_02", value: "Title_02" },
                    {
                      label: "Title_03",
                      value: "Title_03",
                    },
                  ]}
                  placeholder={"Title"}
                  value={this.state.selectedTitle}
                  lable={this.state.selectedTitle}
                  //onRef={(ref) => (this.parentReferenceItem = ref)}
                  parentReferenceItem={this.handleTitle}
                />
              
              </View>

              {/* Last Name */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Last Name"}
                  placeholder={""}
                  width={"100%"}
                  onInputChange={this.handleInputChange}
                  inputRef={this.LastNameInputRef}
                  nextInputRef={this.OtherNamesInputRef}
                />
              </View>

              {/* Other Names */}

              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Other Names"}
                  placeholder={"Other Names"}
                  width={"100%"}
                  onInputChange={this.handleInputChange}
                  inputRef={this.OtherNamesInputRef}
                  nextInputRef={this.InitialsInputRef}
                />
              </View>

              {/* Initials */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Initials"}
                  placeholder={"Initials"}
                  width={"100%"}
                  onInputChange={this.handleInputChange}
                  inputRef={this.InitialsInputRef}
                  nextInputRef={this.GenderInputRef}
                />
              </View>

              {/* Gender */}

              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Gender"}
                  placeholder={"Gender"}
                  width={"100%"}
                  onInputChange={this.handleInputChange}
                  inputRef={this.GenderInputRef}
                  nextInputRef={this.EmailInputRef}
                />
              </View>

              {/* Email */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Email"}
                  placeholder={"Email"}
                  width={"100%"}
                  onInputChange={this.handleInputChange}
                  inputRef={this.EmailInputRef}
                  nextInputRef={this.MobileInputRef}
                />
              </View>

              {/* Mobile */}

              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Mobile"}
                  placeholder={"Mobile"}
                  width={"100%"}
                  onInputChange={this.handleInputChange}
                  inputRef={this.MobileInputRef}
                  nextInputRef={this.ResidenceTelNoInputRef}
                />
              </View>

              {/* Residence Tel No */}

              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Residence Tel No"}
                  placeholder={"Residence Tel No"}
                  width={"100%"}
                  onInputChange={this.handleInputChange}
                  inputRef={this.ResidenceTelNoInputRef}
                  nextInputRef={this.Address_1InputRef}
                />
              </View>

              {/* Address 01 */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Address 01"}
                  placeholder={""}
                  width={"100%"}
                  onInputChange={this.handleInputChange}
                  inputRef={this.Address_1InputRef}
                  nextInputRef={this.Address_2InputRef}
                />
              </View>

              {/* Address 02 */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Address 02"}
                  placeholder={""}
                  width={"100%"}
                  onInputChange={this.handleInputChange}
                  inputRef={this.Address_2InputRef}
                  nextInputRef={this.Address_3InputRef}
                />
              </View>

              {/* Address 03 */}

              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Address 03"}
                  placeholder={""}
                  width={"100%"}
                  onInputChange={this.handleInputChange}
                  inputRef={this.Address_3InputRef}
                  nextInputRef={this.CityInputRef}
                />
              </View>

              {/* City */}

              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonSpinner
                  title={null}
                  width={"100%"}
                  data={[
                    { label: "City_01", value: "City_01" },
                    { label: "City_02", value: "City_02" },
                    {
                      label: "City_03",
                      value: "City_03",
                    },
                  ]}
                  placeholder={"City"}
                  value={this.state.selectedTitle}
                  lable={this.state.selectedTitle}
                  //onRef={(ref) => (this.parentReferenceItem = ref)}
                  parentReferenceItem={this.handleCity}
                />
                
              </View>

              {/* District */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"District"}
                  placeholder={""}
                  width={"100%"}
                  onInputChange={this.handleInputChange}
                  inputRef={this.DistrictInputRef}
                  nextInputRef={this.ProvinceInputRef}
                  editable={false}
                />
              </View>

              {/* Province */}
              <View
                style={[
                  GetKYC5ScreenStyles(Android_Theme_Light)
                    .commonInputFieldContainer,
                ]}
              >
                <CommonInputField
                  value={""}
                  title={"Province"}
                  placeholder={""}
                  width={"100%"}
                  onInputChange={this.handleInputChange}
                  inputRef={this.ProvinceInputRef}
                  editable={false}
                />
              </View>

              {/* <View style={{ height: 20 }}></View> */}
              {/* </KeyboardAwareScrollView> */}
            </View>
          </ScrollView>
          <CommonButton
            type={"1"} // 0 or 1
            text={""}
            title={"Next"}
            width={"90%"}
            backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
            hideIcon={"0"}
            textColor={Android_Theme_Light.WHITE_COLOR}
            onPress={() => this.handleNextButtonPress()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default KYC5Screen;
