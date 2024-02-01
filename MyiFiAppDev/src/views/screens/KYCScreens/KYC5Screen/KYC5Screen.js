// KYC5Screen.js (KYC details)

import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import GetKYC5ScreenStyles from "./KYC5ScreenStyles";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SelectDropDown from "../../../components/Common/Dropdown/SelectDropDown";

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
      selectedDistrict: null,
      selectedProvince: null,
      selectedGender: null,
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

  handleGender = (selectedGender) => {
    try {
      this.setState({ selectedGender });
    } catch (Error) {
      console.log("[KYC5Screen] - handleGenderSelction - Error ", Error);
    }
  };

  handleCity = (selectedCity) => {
    try {
      const cityData = {
        City_01: { district: "District_01", province: "Province_01" },
        City_02: { district: "District_02", province: "Province_02" },
        City_03: { district: "District_03", province: "Province_03" },
      };

      const { district, province } = cityData[selectedCity] || {};

      this.setState({
        selectedCity,
        selectedDistrict: district || null,
        selectedProvince: province || null,
      });
    } catch (Error) {
      console.log("[KYC5Screen] - handleCitySelection - Error ", Error);
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

  OnBackButtonPress = () => {
    try {
      console.log("back button pressed");
      this.props.navigation.navigate("KYC4Screen");
    } catch (error) {
      console.log("[KYC5Screen] - OnBackButtonPress - Error ", error);
    }
  };

  OnForwardButtonPress = () => {
    try {
      this.props.navigation.navigate("KYC6Screen");
    } catch (Error) {
      console.log("[KYC5Screen] - OnForwardButtonPress - Error ", Error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
       
        <MainTitleBar
          TitleText={"                    "}
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          onPressLeft={() => this.OnBackButtonPress()}
          IconRight={Android_Theme_Light.ICON_FORWARD_NAVIGATE}
          onPressRight={() => this.OnForwardButtonPress()}
        />
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

             {/* PageIndicator */}
            <PageIndicator totalNoOfPages={7} pageNumber={5} />

            {/* Title Text */}
            {/* <View style={GetCommonStyles(Android_Theme_Light).topTitleContainer}> */}
            {/* <Text
              style={GetCommonStyles(Android_Theme_Light).textStyleH1Medium}
            >
              {"KYC Details"}
            </Text> */}

            {/* <Text style = {GetCommonStyles(Android_Theme_Light).textStyleCaption1Medium}>
                Create account so you can {"\n"} manage your personal finances
              </Text> */}
            {/* </View> */}

            {/* ScrollView */}
            <ScrollView>
              <View
                style={
                  GetKYC5ScreenStyles(Android_Theme_Light).backgroundContainer
                }
              >
              
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
           


                {/* Title */}
                <View
                  style={[
                    GetKYC5ScreenStyles(Android_Theme_Light)
                      .commonInputFieldContainer,
                  ]}
                >
                  <SelectDropDown
                    title={"Title"}
                    width={"100%"}
                    data={[
                      { label: "Title_01", value: "Title_01" },
                      { label: "Title_02", value: "Title_02" },
                      {
                        label: "Title_03",
                        value: "Title_03",
                      },
                    ]}
                    placeholder={""}
                    value={this.state.selectedTitle}
                    lable={this.state.selectedTitle}
                    onRef={(ref) => (this.parentReferenceItem = ref)}
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
                    icon={Android_Theme_Light.ICON_VERIFIED}
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
                    icon={Android_Theme_Light.ICON_VERIFIED}
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
                    icon={Android_Theme_Light.ICON_VERIFIED}
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
                  <SelectDropDown
                    title={"Gender"}
                    width={"100%"}
                    data={[
                      { label: "Male", value: "Male" },
                      { label: "Female", value: "Female" },
                    ]}
                    placeholder={""}
                    value={this.state.selectedGender}
                    lable={this.state.selectedGender}
                    onRef={(ref) => (this.parentReferenceItem = ref)}
                    parentReferenceItem={this.handleGender}
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
                    icon={Android_Theme_Light.ICON_VERIFIED}
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
                    icon={Android_Theme_Light.ICON_VERIFIED}
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
                    icon={Android_Theme_Light.ICON_VERIFIED}
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
                    icon={Android_Theme_Light.ICON_VERIFIED}
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
                    icon={Android_Theme_Light.ICON_VERIFIED}
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
                    icon={Android_Theme_Light.ICON_VERIFIED}
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
                  <SelectDropDown
                    title={"City"}
                    width={"100%"}
                    data={[
                      { label: "City_01", value: "City_01" },
                      { label: "City_02", value: "City_02" },
                      {
                        label: "City_03",
                        value: "City_03",
                      },
                    ]}
                    placeholder={""}
                    value={this.state.selectedCity}
                    lable={this.state.selectedCity}
                    onRef={(ref) => (this.parentReferenceItem = ref)}
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
                    value={this.state.selectedDistrict || ""}
                    title={"District"}
                    placeholder={""}
                    width={"100%"}
                    icon={Android_Theme_Light.ICON_VERIFIED}
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
                    value={this.state.selectedProvince || ""}
                    title={"Province"}
                    placeholder={""}
                    width={"100%"}
                    icon={Android_Theme_Light.ICON_VERIFIED}
                    onInputChange={this.handleInputChange}
                    inputRef={this.ProvinceInputRef}
                    editable={false}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </KeyboardAwareScrollView>
        <View
          style={GetKYC5ScreenStyles(Android_Theme_Light).nextButtonContainer}
        >

          {/* Next Button */}
          <CommonButton
            type={"1"} 
            text={""}
            title={"Next"}
            width={"50%"}
            fontFamily={Android_Theme_Light.POPPINS_REGULAR}
            textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
            textColor={Android_Theme_Light.WHITE_COLOR}
            backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
            hideIcon={"0"}
            onPress={() => this.handleNextButtonPress()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default KYC5Screen;
