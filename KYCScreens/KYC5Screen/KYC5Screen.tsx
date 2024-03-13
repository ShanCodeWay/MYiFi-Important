// KYC5Screen.js (KYC details)

import React, { useRef, useState, useEffect } from "react";
import { TextInput, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import GetKYC5ScreenStyles from "./KYC5ScreenStyles";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SelectDropDown from "../../../components/Common/Dropdown/SelectDropDown";
import { StackNavigationProp } from "@react-navigation/stack";
import PageIndicator from "../../../components/Common/PageIndicator/PageIndicator";
import { RootStackParams } from '../../../navigators/types';

type KYC5ScreenNavigationProp = StackNavigationProp<RootStackParams, 'KYC5Screen'>;

type Props = {
  navigation: KYC5ScreenNavigationProp;
  nicNumber: any;
};

const KYC5Screen: React.FC<Props> = ({ navigation, nicNumber }) => {

  const NICInputRef = useRef<TextInput>(null);
  const DOBInputRef = useRef<TextInput>(null);
  const TitleInputRef = useRef<TextInput>(null);
  const LastNameInputRef = useRef<TextInput>(null);
  const OtherNamesInputRef = useRef<TextInput>(null);
  const InitialsInputRef = useRef<TextInput>(null);
  const GenderInputRef = useRef<TextInput>(null);
  const EmailInputRef = useRef<TextInput>(null);
  const MobileInputRef = useRef<TextInput>(null);
  const ResidenceTelNoInputRef = useRef<TextInput>(null);
  const Address_1InputRef = useRef<TextInput>(null);
  const Address_2InputRef = useRef<TextInput>(null);
  const Address_3InputRef = useRef<TextInput>(null);
  const CityInputRef = useRef<TextInput>(null);
  const DistrictInputRef = useRef<TextInput>(null);
  const ProvinceInputRef = useRef<TextInput>(null);

  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);




 const handleTitle = (selectedTitle:any) => {
    try {
      setSelectedTitle;
    } catch (Error) {
      console.log("[KYC5Screen] - handleTitleSelction - Error ", Error);
    }
  };

  const handleGender = (selectedGender:any) => {
    try {
      setSelectedGender;
    } catch (Error) {
      console.log("[KYC5Screen] - handleGenderSelction - Error ", Error);
    }
  };

  const handleCity = (selectedCity: string) => {
    try {
      const cityData = {
        City_01: { district: "District_01", province: "Province_01" },
        City_02: { district: "District_02", province: "Province_02" },
        City_03: { district: "District_03", province: "Province_03" },
      };
  
      const { district, province } = (cityData as any)[selectedCity] || {};
  
      
        setSelectedCity;
        setSelectedDistrict (district || null);
        setSelectedProvince(province || null);
      
    } catch (Error) {
      console.log("[KYC5Screen] - handleCitySelection - Error ", Error);
    }
  };
  

  const handleInputChange = (value:any) => {
    try {
      console.log("Input value:", value);
    } catch (Error) {
      console.log("[KYC5Screen] - handleInputChange() EX: " + Error);
    }
  };

  const handleNICInputChange = (value:any) => {
    try {
      console.log("Input value:", value);
    } catch (Error) {
      console.log("[KYC5Screen] - handleInputChange() EX: " + Error);
    }
  };

  const handleNextButtonPress = () => {
    try {
      console.log("Next button pressed");
      navigation.navigate('KYC6Screen');
    } catch (error) {
      console.log("[KYC5Screen] - Next_Button - Error ", error);
    }
  };

  const OnBackButtonPress = () => {
    try {
      console.log("back button pressed");
      navigation.navigate('KYC4Screen');
    } catch (error) {
      console.log("[KYC5Screen] - OnBackButtonPress - Error ", error);
    }
  };

  const OnForwardButtonPress = () => {
    try {
      navigation.navigate('KYC6Screen');
    } catch (Error) {
      console.log("[KYC5Screen] - OnForwardButtonPress - Error ", Error);
    }
  };

 
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
       
        <MainTitleBar
          TitleText={"                    "}
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          onPressLeft={() =>OnBackButtonPress()}
          IconRight={Android_Theme_Light.ICON_FORWARD_NAVIGATE}
          onPressRight={() => OnForwardButtonPress()}
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
                    placeholder={nicNumber}
                    width={"100%"}
                    icon={Android_Theme_Light.ICON_NIC}
                    onInputChange={handleNICInputChange}
                    inputRef={NICInputRef}
                    nextInputRef={DOBInputRef}
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
                    onInputChange={handleInputChange}
                    inputRef={DOBInputRef}
                    nextInputRef={TitleInputRef}
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
                    value={selectedTitle}
                    lable={selectedTitle}
                    
                    parentReferenceItem={handleTitle}
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
                    onInputChange={handleInputChange}
                    inputRef={LastNameInputRef}
                    nextInputRef={OtherNamesInputRef}
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
                    onInputChange={handleInputChange}
                    inputRef={OtherNamesInputRef}
                    nextInputRef={InitialsInputRef}
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
                    onInputChange={handleInputChange}
                    inputRef={InitialsInputRef}
                    nextInputRef={GenderInputRef}
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
                    value={selectedGender}
                    lable={selectedGender}
                   
                    parentReferenceItem={handleGender}
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
                    onInputChange={handleInputChange}
                    inputRef={EmailInputRef}
                    nextInputRef={MobileInputRef}
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
                    onInputChange={handleInputChange}
                    inputRef={MobileInputRef}
                    nextInputRef={ResidenceTelNoInputRef}
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
                    onInputChange={handleInputChange}
                    inputRef={ResidenceTelNoInputRef}
                    nextInputRef={Address_1InputRef}
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
                    onInputChange={handleInputChange}
                    inputRef={Address_1InputRef}
                    nextInputRef={Address_2InputRef}
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
                    onInputChange={handleInputChange}
                    inputRef={Address_2InputRef}
                    nextInputRef={Address_3InputRef}
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
                    onInputChange={handleInputChange}
                    inputRef={Address_3InputRef}
                    nextInputRef={CityInputRef}
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
                    value={selectedCity}
                    lable={selectedCity}
                    
                    parentReferenceItem={handleCity}
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
                    value={selectedDistrict || ""}
                    title={"District"}
                    placeholder={""}
                    width={"100%"}
                    icon={Android_Theme_Light.ICON_VERIFIED}
                    onInputChange={handleInputChange}
                    inputRef={DistrictInputRef}
                    nextInputRef={ProvinceInputRef}
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
                    value={selectedProvince || ""}
                    title={"Province"}
                    placeholder={""}
                    width={"100%"}
                    icon={Android_Theme_Light.ICON_VERIFIED}
                    onInputChange={handleInputChange}
                    inputRef={ProvinceInputRef}
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
            
            title={"Next"}
            width={"50%"}
            fontFamily={Android_Theme_Light.POPPINS_REGULAR}
            textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
            textColor={Android_Theme_Light.WHITE_COLOR}
            backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
            onPress={() => handleNextButtonPress()}
          />
        </View>
      </SafeAreaView>
    );
  }


export default KYC5Screen;


// // KYC5Screen.js (KYC details)

// import React, { Component,RefObject  } from "react";
// import { TextInput } from "react-native";
// import { View, ScrollView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { GetCommonStyles } from "../../../../styles/CommonStyles";
// import { Android_Theme_Light } from "../../../../styles/Themes";
// import CommonButton from "../../../components/Common/MainButton/CommonButton";
// import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
// import GetKYC5ScreenStyles from "./KYC5ScreenStyles";
// import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import SelectDropDown from "../../../components/Common/Dropdown/SelectDropDown";
// import { RootStackParams } from '../../../navigators/types';
// import { StackNavigationProp } from "@react-navigation/stack";
// import PageIndicator from "../../../components/Common/PageIndicator/PageIndicator";

// type KYC5ScreenNavigationProp = StackNavigationProp<RootStackParams, 'KYC5Screen'>;

// type Props = {
//   navigation: KYC5ScreenNavigationProp;
//   nicNumber:any;
// };

// interface KYC5ScreenState {
//   selectedTitle: string | null;
//   selectedCity: string | null;
//   selectedDistrict: string | null;
//   selectedProvince: string | null;
//   selectedGender: string | null;
//   nicNumber:any;
// }

// class KYC5Screen extends Component <Props, KYC5ScreenState> {

//   private NICInputRef: React.RefObject<TextInput> = React.createRef();
//   private DOBInputRef: React.RefObject<TextInput> = React.createRef();
//   private TitleInputRef: React.RefObject<TextInput> = React.createRef();
//   private LastNameInputRef: React.RefObject<TextInput> = React.createRef();
//   private OtherNamesInputRef: React.RefObject<TextInput> = React.createRef();
  
//   private InitialsInputRef: React.RefObject<TextInput> = React.createRef();
//   private GenderInputRef: React.RefObject<TextInput> = React.createRef();
//   private EmailInputRef: React.RefObject<TextInput> = React.createRef();
//   private MobileInputRef: React.RefObject<TextInput> = React.createRef();
//   private ResidenceTelNoInputRef: React.RefObject<TextInput> = React.createRef();
//   private Address_1InputRef: React.RefObject<TextInput> = React.createRef();
//   private Address_2InputRef: React.RefObject<TextInput> = React.createRef();
//   private Address_3InputRef: React.RefObject<TextInput> = React.createRef();
//   private CityInputRef: React.RefObject<TextInput> = React.createRef();
//   private DistrictInputRef: React.RefObject<TextInput> = React.createRef();
//   private ProvinceInputRef: React.RefObject<TextInput> = React.createRef();

//   parentReferenceItem: any;

//   constructor(props:any) {
//     super(props);

//     this.state = {
//       nicNumber: "",
//       selectedTitle: null,
//       selectedCity: null,
//       selectedDistrict: null,
//       selectedProvince: null,
//       selectedGender: null,
//     };
//   }

//   componentDidMount() {
//     try {
//     } catch (Error) {
//       console.log("[KYC5Screen] - componentDidMount() EX: " + Error);
//     }
//   }

//   componentWillUnmount() {
//     try {
//     } catch (Error) {
//       console.log("[KYC5Screen] - componentWillUnmount() EX: " + Error);
//     }
//   }

//   handleTitle = (selectedTitle:any) => {
//     try {
//       this.setState({ selectedTitle });
//     } catch (Error) {
//       console.log("[KYC5Screen] - handleTitleSelction - Error ", Error);
//     }
//   };

//   handleGender = (selectedGender:any) => {
//     try {
//       this.setState({ selectedGender });
//     } catch (Error) {
//       console.log("[KYC5Screen] - handleGenderSelction - Error ", Error);
//     }
//   };

//   handleCity = (selectedCity: string) => {
//     try {
//       const cityData = {
//         City_01: { district: "District_01", province: "Province_01" },
//         City_02: { district: "District_02", province: "Province_02" },
//         City_03: { district: "District_03", province: "Province_03" },
//       };
  
//       const { district, province } = (cityData as any)[selectedCity] || {};
  
//       this.setState({
//         selectedCity,
//         selectedDistrict: district || null,
//         selectedProvince: province || null,
//       });
//     } catch (Error) {
//       console.log("[KYC5Screen] - handleCitySelection - Error ", Error);
//     }
//   };
  

//   handleInputChange = (value:any) => {
//     try {
//       console.log("Input value:", value);
//     } catch (Error) {
//       console.log("[KYC5Screen] - handleInputChange() EX: " + Error);
//     }
//   };

//   handleNICInputChange = (value:any) => {
//     try {
//       console.log("Input value:", value);
//     } catch (Error) {
//       console.log("[KYC5Screen] - handleInputChange() EX: " + Error);
//     }
//   };

//   handleNextButtonPress = () => {
//     try {
//       console.log("Next button pressed");
//       this.props.navigation.navigate('KYC6Screen');
//     } catch (error) {
//       console.log("[KYC5Screen] - Next_Button - Error ", error);
//     }
//   };

//   OnBackButtonPress = () => {
//     try {
//       console.log("back button pressed");
//       this.props.navigation.navigate('KYC4Screen');
//     } catch (error) {
//       console.log("[KYC5Screen] - OnBackButtonPress - Error ", error);
//     }
//   };

//   OnForwardButtonPress = () => {
//     try {
//       this.props.navigation.navigate('KYC6Screen');
//     } catch (Error) {
//       console.log("[KYC5Screen] - OnForwardButtonPress - Error ", Error);
//     }
//   };

//   render() {
//     return (
//       <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
       
//         <MainTitleBar
//           TitleText={"                    "}
//           IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
//           onPressLeft={() => this.OnBackButtonPress()}
//           IconRight={Android_Theme_Light.ICON_FORWARD_NAVIGATE}
//           onPressRight={() => this.OnForwardButtonPress()}
//         />
//         <KeyboardAwareScrollView
//           contentContainerStyle={{
//             flexGrow: 1,
//             justifyContent: "flex-end",
//           }}
//           keyboardShouldPersistTaps="handled"
//           extraScrollHeight={10}
//           enableOnAndroid={true}
//           enableAutomaticScroll={false}
//           keyboardOpeningTime={300}
          
//           onKeyboardDidShow={(frames) => {}}
//           onKeyboardDidHide={(frames) => {}}
//         >
//           <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

//              {/* PageIndicator */}
//             <PageIndicator totalNoOfPages={7} pageNumber={5} />

//             {/* Title Text */}
//             {/* <View style={GetCommonStyles(Android_Theme_Light).topTitleContainer}> */}
//             {/* <Text
//               style={GetCommonStyles(Android_Theme_Light).textStyleH1Medium}
//             >
//               {"KYC Details"}
//             </Text> */}

//             {/* <Text style = {GetCommonStyles(Android_Theme_Light).textStyleCaption1Medium}>
//                 Create account so you can {"\n"} manage your personal finances
//               </Text> */}
//             {/* </View> */}

//             {/* ScrollView */}
//             <ScrollView>
//               <View
//                 style={
//                   GetKYC5ScreenStyles(Android_Theme_Light).backgroundContainer
//                 }
//               >
              
//                 {/* NIC */}
//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <CommonInputField
//                     value={""}
//                     title={"NIC"}
//                     placeholder={this.props.nicNumber}
//                     width={"100%"}
//                     icon={Android_Theme_Light.ICON_NIC}
//                     onInputChange={this.handleNICInputChange}
//                     inputRef={this.NICInputRef}
//                     nextInputRef={this.DOBInputRef}
//                     editable={false}
//                   />
//                 </View>


//                 {/* DOB */}
//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <CommonInputField
//                     value={""}
//                     title={"Date of Birth"}
//                     placeholder={""}
//                     width={"100%"}
//                     icon={Android_Theme_Light.ICON_CALENDER}
//                     onInputChange={this.handleInputChange}
//                     inputRef={this.DOBInputRef}
//                     nextInputRef={this.TitleInputRef}
//                     editable={false}
//                   />
//                 </View>
           


//                 {/* Title */}
//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <SelectDropDown
//                     title={"Title"}
//                     width={"100%"}
//                     data={[
//                       { label: "Title_01", value: "Title_01" },
//                       { label: "Title_02", value: "Title_02" },
//                       {
//                         label: "Title_03",
//                         value: "Title_03",
//                       },
//                     ]}
//                     placeholder={""}
//                     value={this.state.selectedTitle}
//                     lable={this.state.selectedTitle}
//                     onRef={(ref:any) => (this.parentReferenceItem = ref)}
//                     parentReferenceItem={this.handleTitle}
//                   />
//                 </View>

//                 {/* Last Name */}
//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <CommonInputField
//                     value={""}
//                     title={"Last Name"}
//                     placeholder={""}
//                     width={"100%"}
//                     icon={Android_Theme_Light.ICON_VERIFIED}
//                     onInputChange={this.handleInputChange}
//                     inputRef={this.LastNameInputRef}
//                     nextInputRef={this.OtherNamesInputRef}
//                   />
//                 </View>


//                 {/* Other Names */}
//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <CommonInputField
//                     value={""}
//                     title={"Other Names"}
//                     placeholder={"Other Names"}
//                     width={"100%"}
//                     icon={Android_Theme_Light.ICON_VERIFIED}
//                     onInputChange={this.handleInputChange}
//                     inputRef={this.OtherNamesInputRef}
//                     nextInputRef={this.InitialsInputRef}
//                   />
//                 </View>


//                 {/* Initials */}
//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <CommonInputField
//                     value={""}
//                     title={"Initials"}
//                     placeholder={"Initials"}
//                     width={"100%"}
//                     icon={Android_Theme_Light.ICON_VERIFIED}
//                     onInputChange={this.handleInputChange}
//                     inputRef={this.InitialsInputRef}
//                     nextInputRef={this.GenderInputRef}
//                   />
//                 </View>


//                 {/* Gender */}
//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <SelectDropDown
//                     title={"Gender"}
//                     width={"100%"}
//                     data={[
//                       { label: "Male", value: "Male" },
//                       { label: "Female", value: "Female" },
//                     ]}
//                     placeholder={""}
//                     value={this.state.selectedGender}
//                     lable={this.state.selectedGender}
//                     onRef={(ref:any) => (this.parentReferenceItem = ref)}
//                     parentReferenceItem={this.handleGender}
//                   />
//                 </View>


//                 {/* Email */}
//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <CommonInputField
//                     value={""}
//                     title={"Email"}
//                     placeholder={"Email"}
//                     width={"100%"}
//                     icon={Android_Theme_Light.ICON_VERIFIED}
//                     onInputChange={this.handleInputChange}
//                     inputRef={this.EmailInputRef}
//                     nextInputRef={this.MobileInputRef}
//                   />
//                 </View>

//                 {/* Mobile */}
//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <CommonInputField
//                     value={""}
//                     title={"Mobile"}
//                     placeholder={"Mobile"}
//                     width={"100%"}
//                     icon={Android_Theme_Light.ICON_VERIFIED}
//                     onInputChange={this.handleInputChange}
//                     inputRef={this.MobileInputRef}
//                     nextInputRef={this.ResidenceTelNoInputRef}
//                   />
//                 </View>

//                 {/* Residence Tel No */}
//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <CommonInputField
//                     value={""}
//                     title={"Residence Tel No"}
//                     placeholder={"Residence Tel No"}
//                     width={"100%"}
//                     icon={Android_Theme_Light.ICON_VERIFIED}
//                     onInputChange={this.handleInputChange}
//                     inputRef={this.ResidenceTelNoInputRef}
//                     nextInputRef={this.Address_1InputRef}
//                   />
//                 </View>

//                 {/* Address 01 */}
//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <CommonInputField
//                     value={""}
//                     title={"Address 01"}
//                     placeholder={""}
//                     width={"100%"}
//                     icon={Android_Theme_Light.ICON_VERIFIED}
//                     onInputChange={this.handleInputChange}
//                     inputRef={this.Address_1InputRef}
//                     nextInputRef={this.Address_2InputRef}
//                   />
//                 </View>

//                 {/* Address 02 */}
//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <CommonInputField
//                     value={""}
//                     title={"Address 02"}
//                     placeholder={""}
//                     width={"100%"}
//                     icon={Android_Theme_Light.ICON_VERIFIED}
//                     onInputChange={this.handleInputChange}
//                     inputRef={this.Address_2InputRef}
//                     nextInputRef={this.Address_3InputRef}
//                   />
//                 </View>

//                 {/* Address 03 */}

//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <CommonInputField
//                     value={""}
//                     title={"Address 03"}
//                     placeholder={""}
//                     width={"100%"}
//                     icon={Android_Theme_Light.ICON_VERIFIED}
//                     onInputChange={this.handleInputChange}
//                     inputRef={this.Address_3InputRef}
//                     nextInputRef={this.CityInputRef}
//                   />
//                 </View>

//                 {/* City */}
//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <SelectDropDown
//                     title={"City"}
//                     width={"100%"}
//                     data={[
//                       { label: "City_01", value: "City_01" },
//                       { label: "City_02", value: "City_02" },
//                       {
//                         label: "City_03",
//                         value: "City_03",
//                       },
//                     ]}
//                     placeholder={""}
//                     value={this.state.selectedCity}
//                     lable={this.state.selectedCity}
//                     onRef={(ref:any) => (this.parentReferenceItem = ref)}
//                     parentReferenceItem={this.handleCity}
//                   />
//                 </View>

//                 {/* District */}
//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <CommonInputField
//                     value={this.state.selectedDistrict || ""}
//                     title={"District"}
//                     placeholder={""}
//                     width={"100%"}
//                     icon={Android_Theme_Light.ICON_VERIFIED}
//                     onInputChange={this.handleInputChange}
//                     inputRef={this.DistrictInputRef}
//                     nextInputRef={this.ProvinceInputRef}
//                     editable={false}
//                   />
//                 </View>

//                 {/* Province */}
//                 <View
//                   style={[
//                     GetKYC5ScreenStyles(Android_Theme_Light)
//                       .commonInputFieldContainer,
//                   ]}
//                 >
//                   <CommonInputField
//                     value={this.state.selectedProvince || ""}
//                     title={"Province"}
//                     placeholder={""}
//                     width={"100%"}
//                     icon={Android_Theme_Light.ICON_VERIFIED}
//                     onInputChange={this.handleInputChange}
//                     inputRef={this.ProvinceInputRef}
//                     editable={false}
//                   />
//                 </View>
//               </View>
//             </ScrollView>
//           </View>
//         </KeyboardAwareScrollView>
//         <View
//           style={GetKYC5ScreenStyles(Android_Theme_Light).nextButtonContainer}
//         >

//           {/* Next Button */}
//           <CommonButton
//             type={"1"} 
            
//             title={"Next"}
//             width={"50%"}
//             fontFamily={Android_Theme_Light.POPPINS_REGULAR}
//             textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
//             textColor={Android_Theme_Light.WHITE_COLOR}
//             backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
//             onPress={() => this.handleNextButtonPress()}
//           />
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// export default KYC5Screen;
