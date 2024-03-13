import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import GetKYC6ScreenStyles from "./KYC6ScreenStyles";
import SelectDropDown from "../../../components/Common/Dropdown/SelectDropDown";
import { RootStackParams } from '../../../navigators/types';
import { StackNavigationProp } from "@react-navigation/stack";
import PageIndicator from "../../../components/Common/PageIndicator/PageIndicator";

type KYC6ScreenNavigationProp = StackNavigationProp<RootStackParams, 'KYC6Screen'>;

type Props = {
  navigation: KYC6ScreenNavigationProp;
};

const KYC6Screen: React.FC<Props> = ({ navigation }) => {
  const [selectedEmploymentStatus, setSelectedEmploymentStatus] = useState<any>(null);
  const [selectedOccupation, setSelectedOccupation] = useState<any>(null);



  

  const handleInputChange = (value:any) => {
    try {
      console.log("Input value:", value);
    } catch (Error) {
      console.log("[KYC6Screen] - HandleInputChange Ex: ", Error);
    }
  };

  const handleEmploymentStatus = (selectedEmploymentStatus:any) => {
    try {
      setSelectedEmploymentStatus;
    } catch (Error) {
      console.log("[KYC6Screen] - handleEmploymentStatus - Error ", Error);
    }
  };

  const handleOccupation = (selectedOccupation:any) => {
    try {
      setSelectedOccupation;
    } catch (Error) {
      console.log("[KYC6Screen] - handleOccupation - Error ", Error);
    }
  };

  const handleCameraButtonPress = () => {
    try {
      console.log("camera pressed");
    } catch (Error) {
      console.log("[KYC6Screen] - Camera_Button - Error ", Error);
    }
  };

  const handleFileButtonPress = () => {
    try {
      console.log("File Button pressed");
    } catch (Error) {
      console.log("[KYC6Screen] - File_Button - Error ", Error);
    }
  };

  const handleNextButtonPress = () => {
    try {
      navigation.navigate('KYCOtpScreen');
      console.log("button pressed to navigate to KYCOtpScreen");
    } catch (error) {
      console.log("[KYC6Screen] - Next_Button - Error ", error);
    }
  };

  const OnBackButtonPress = () => {
    try {
      console.log("Next button pressed");
      navigation.navigate('KYC5Screen');
    } catch (Error) {
      console.log("[KYC6Screen] - OnBackButtonPress Ex: ", Error);
    }
  };

  const OnForwardButtonPress = () => {
    try {
      navigation.navigate('KYCOtpScreen');
    } catch (Error) {
      console.log("[KYC6Screen] - OnForwardButtonPress - Error ", Error);
    }
  };

  
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <MainTitleBar
          TitleText={"                    "}
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          onPressLeft={() => OnBackButtonPress()}
          IconRight={Android_Theme_Light.ICON_FORWARD_NAVIGATE}
          onPressRight={() => OnForwardButtonPress()}
        />

        {/* PageIndicator */}
        <PageIndicator totalNoOfPages={7} pageNumber={6} />
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
       
       
     



          {/* ScrollView */}
          <ScrollView style={{ width: "100%" }}>
            {/* Employment Status */}
            <View
              style={
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .inputFieldTitleContainer
              }
            >
              <Text
                style={
                  GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
                }
              >
                {"Employment Status"}
              </Text>
            </View>

            {/* Gap */}
            <View style={{ height: 5 }} />


            <View
              style={[
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .commonInputFieldContainer,
              ]}
            >
              <SelectDropDown
                title={""}
                width={"100%"}
                data={[
                  {
                    label: "Employment_status_01",
                    value: "Employment_status_01",
                  },
                  {
                    label: "Employment_status_02",
                    value: "Employment_status_02",
                  },
                  {
                    label: "Employment_status_03",
                    value: "Employment_status_03",
                  },
                ]}
                placeholder={""}
                value={selectedEmploymentStatus}
                lable={selectedEmploymentStatus}
                parentReferenceItem={handleEmploymentStatus}
              />
            </View>

            {/* Occupation */}
            <View
              style={
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .inputFieldTitleContainer
              }
            >
              <Text
                style={
                  GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
                }
              >
                {"Occupation"}
              </Text>
            </View>

             {/* Gap */}
            <View style={{ height: 5 }} />
            
            <View
              style={[
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .commonInputFieldContainer,
              ]}
            >
              <SelectDropDown
                title={""}
                width={"100%"}
                data={[
                  { label: "Occupation_01", value: "Occupation_01" },
                  { label: "Occupation_02", value: "Occupation_02" },
                  {
                    label: "Occupation_03",
                    value: "Occupation_03",
                  },
                ]}
                placeholder={""}
                value={selectedOccupation}
                lable={selectedOccupation}
                parentReferenceItem={handleOccupation}
              />
            </View>

            {/* Name of the Employer */}
            <View
              style={
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .inputFieldTitleContainer
              }
            >
              <Text
                style={
                  GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
                }
              >
                {"Name of the Employer"}
              </Text>
            </View>
            <View
              style={[
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .commonInputFieldContainer,
              ]}
            >
              <CommonInputField
                value={""}
                title={""}
                placeholder={""}
                width={"100%"}
                icon={Android_Theme_Light.ICON_VERIFIED}
                onInputChange={handleInputChange}
              />
            </View>

            {/* Nature of the Business */}
            <View
              style={
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .inputFieldTitleContainer
              }
            >
              <Text
                style={
                  GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
                }
              >
                {"Nature of the Business"}
              </Text>
            </View>
            <View
              style={[
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .commonInputFieldContainer,
              ]}
            >
              <CommonInputField
                value={""}
                title={""}
                placeholder={""}
                width={"100%"}
                icon={Android_Theme_Light.ICON_VERIFIED}
                onInputChange={handleInputChange}
              />
            </View>

            {/* Average Monthly Income (LKR) */}
            <View
              style={
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .inputFieldTitleContainer
              }
            >
              <Text
                style={
                  GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
                }
              >
                {"Average Monthly Income (LKR)"}
              </Text>
            </View>
            <View
              style={[
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .commonInputFieldContainer,
              ]}
            >
              <CommonInputField
                value={""}
                title={""}
                placeholder={""}
                width={"100%"}
                type={"currency"}
                icon={Android_Theme_Light.ICON_VERIFIED}
                onInputChange={handleInputChange}
              />
            </View>
            <View style={{ height: 10 }}></View>

            {/* Source of Funds */}
            <View
              style={
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .inputFieldTitleContainer
              }
            >
              <Text
                style={
                  GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
                }
              >
                {"Source of Funds"}
              </Text>
            </View>
            <View
              style={[
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .commonInputFieldContainer,
              ]}
            >
              <CommonInputField
                value={""}
                title={""}
                placeholder={""}
                width={"100%"}
                icon={Android_Theme_Light.ICON_VERIFIED}
                onInputChange={handleInputChange}
              />
            </View>
            <View style={{ height: 10 }}></View>

            {/* Attachments */}
            <View
              style={
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .inputFieldTitleContainer
              }
            >
              <Text
                style={
                  GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
                }
              >
                {"Attachments"}
              </Text>
            </View>
            <View
              style={[
                GetKYC6ScreenStyles(Android_Theme_Light)
                  .attachmentFieldContainer,
              ]}
            >
              <View
                style={[
                  GetKYC6ScreenStyles(Android_Theme_Light)
                    .attachmentContentContainer,
                ]}
              >
                <View
                  style={[
                    GetKYC6ScreenStyles(Android_Theme_Light)
                      .attachmentProofContainer,
                  ]}
                >
                  <Text>{"Image_001.png"}</Text>
                  <Android_Theme_Light.ICON_CIRCLE_X></Android_Theme_Light.ICON_CIRCLE_X>
                </View>
              </View>
              <View
                style={[
                  GetKYC6ScreenStyles(Android_Theme_Light).leftButtonContainer,
                ]}
              >
                {/* Camera Button */}
                <CommonButton
                  type={"0"}
                  borderRadius={60}
                  title={""}
                  width={"90%"}
                  leftIcon={Android_Theme_Light.ICON_CAMERA}
                  backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
                  onPress={() => handleCameraButtonPress()}
                />
              </View>

              <View
                style={[
                  GetKYC6ScreenStyles(Android_Theme_Light).rightButtonContainer,
                ]}
              >
                {/* File Button */}
                <CommonButton
                  type={"0"}
                  borderRadius={60}
                  title={""}
                  width={"90%"}
                  leftIcon={Android_Theme_Light.ICON_EXTERNALOPEN}
                  backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
                  onPress={() => handleFileButtonPress()}
                />
              </View>
            </View>
          </ScrollView>

          <View
            style={GetKYC6ScreenStyles(Android_Theme_Light).nextButtonContainer}
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
        </View>
      </SafeAreaView>
    );
  }


export default KYC6Screen;



// // KYC5Screen.js (KYC details screeen 2)

// import React, { Component } from "react";
// import { View, Text, ScrollView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { GetCommonStyles } from "../../../../styles/CommonStyles";
// import { Android_Theme_Light } from "../../../../styles/Themes";
// import CommonButton from "../../../components/Common/MainButton/CommonButton";
// import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
// import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
// import GetKYC6ScreenStyles from "./KYC6ScreenStyles";
// import SelectDropDown from "../../../components/Common/Dropdown/SelectDropDown";
// import { RootStackParams } from '../../../navigators/types';
// import { StackNavigationProp } from "@react-navigation/stack";
// import PageIndicator from "../../../components/Common/PageIndicator/PageIndicator";

// type KYC6ScreenNavigationProp = StackNavigationProp<RootStackParams, 'KYC6Screen'>;

// type Props = {
//   navigation: KYC6ScreenNavigationProp;
  
// };

// interface KYC6ScreenState {
//   selectedEmploymentStatus:any;
//   selectedOccupation:any;
// }

// class KYC6Screen extends Component <Props, KYC6ScreenState> {
//   constructor(props:any) {
//     super(props);

//     this.state = {
//       //nicNumber: props.nicNumber || "",
//       selectedEmploymentStatus: null,
//       selectedOccupation: null,
//     };
//   }
//   componentDidMount() {
//     try {
//     } catch (Error) {
//       console.log("[KYC6Screen] - componentDidMount Ex: ", Error);
//     }
//   }

//   componentWillUnmount() {
//     try {
//     } catch (Error) {
//       console.log("[KYC6Screen] - componentWillUnmount Ex: ", Error);
//     }
//   }

//   handleInputChange = (value:any) => {
//     try {
//       console.log("Input value:", value);
//     } catch (Error) {
//       console.log("[KYC6Screen] - HandleInputChange Ex: ", Error);
//     }
//   };

//   handleEmploymentStatus = (selectedEmploymentStatus:any) => {
//     try {
//       this.setState({ selectedEmploymentStatus });
//     } catch (Error) {
//       console.log("[KYC6Screen] - handleEmploymentStatus - Error ", Error);
//     }
//   };

//   handleOccupation = (selectedOccupation:any) => {
//     try {
//       this.setState({ selectedOccupation });
//     } catch (Error) {
//       console.log("[KYC6Screen] - handleOccupation - Error ", Error);
//     }
//   };

//   handleCameraButtonPress = () => {
//     try {
//       console.log("camera pressed");
//     } catch (Error) {
//       console.log("[KYC6Screen] - Camera_Button - Error ", Error);
//     }
//   };

//   handleFileButtonPress = () => {
//     try {
//       console.log("File Button pressed");
//     } catch (Error) {
//       console.log("[KYC6Screen] - File_Button - Error ", Error);
//     }
//   };

//   handleNextButtonPress = () => {
//     try {
//       this.props.navigation.navigate('KYCOtpScreen');
//       console.log("button pressed to navigate to KYCOtpScreen");
//     } catch (error) {
//       console.log("[KYC6Screen] - Next_Button - Error ", error);
//     }
//   };

//   OnBackButtonPress = () => {
//     try {
//       console.log("Next button pressed");
//       this.props.navigation.navigate('KYC5Screen');
//     } catch (Error) {
//       console.log("[KYC6Screen] - OnBackButtonPress Ex: ", Error);
//     }
//   };

//   OnForwardButtonPress = () => {
//     try {
//       this.props.navigation.navigate('KYCOtpScreen');
//     } catch (Error) {
//       console.log("[KYC6Screen] - OnForwardButtonPress - Error ", Error);
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

//         {/* PageIndicator */}
//         <PageIndicator totalNoOfPages={7} pageNumber={6} />
//         <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
       
       
     



//           {/* ScrollView */}
//           <ScrollView style={{ width: "100%" }}>
//             {/* Employment Status */}
//             <View
//               style={
//                 GetKYC6ScreenStyles(Android_Theme_Light)
//                   .inputFieldTitleContainer
//               }
//             >
//               <Text
//                 style={
//                   GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
//                 }
//               >
//                 {"Employment Status"}
//               </Text>
//             </View>

//             {/* Gap */}
//             <View style={{ height: 5 }} />


//             <View
//               style={[
//                 GetKYC6ScreenStyles(Android_Theme_Light)
//                   .commonInputFieldContainer,
//               ]}
//             >
//               <SelectDropDown
//                 title={""}
//                 width={"100%"}
//                 data={[
//                   {
//                     label: "Employment_status_01",
//                     value: "Employment_status_01",
//                   },
//                   {
//                     label: "Employment_status_02",
//                     value: "Employment_status_02",
//                   },
//                   {
//                     label: "Employment_status_03",
//                     value: "Employment_status_03",
//                   },
//                 ]}
//                 placeholder={""}
//                 value={this.state.selectedEmploymentStatus}
//                 lable={this.state.selectedEmploymentStatus}
//                 parentReferenceItem={this.handleEmploymentStatus}
//               />
//             </View>

//             {/* Occupation */}
//             <View
//               style={
//                 GetKYC6ScreenStyles(Android_Theme_Light)
//                   .inputFieldTitleContainer
//               }
//             >
//               <Text
//                 style={
//                   GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
//                 }
//               >
//                 {"Occupation"}
//               </Text>
//             </View>

//              {/* Gap */}
//             <View style={{ height: 5 }} />
            
//             <View
//               style={[
//                 GetKYC6ScreenStyles(Android_Theme_Light)
//                   .commonInputFieldContainer,
//               ]}
//             >
//               <SelectDropDown
//                 title={""}
//                 width={"100%"}
//                 data={[
//                   { label: "Occupation_01", value: "Occupation_01" },
//                   { label: "Occupation_02", value: "Occupation_02" },
//                   {
//                     label: "Occupation_03",
//                     value: "Occupation_03",
//                   },
//                 ]}
//                 placeholder={""}
//                 value={this.state.selectedOccupation}
//                 lable={this.state.selectedOccupation}
//                 parentReferenceItem={this.handleOccupation}
//               />
//             </View>

//             {/* Name of the Employer */}
//             <View
//               style={
//                 GetKYC6ScreenStyles(Android_Theme_Light)
//                   .inputFieldTitleContainer
//               }
//             >
//               <Text
//                 style={
//                   GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
//                 }
//               >
//                 {"Name of the Employer"}
//               </Text>
//             </View>
//             <View
//               style={[
//                 GetKYC6ScreenStyles(Android_Theme_Light)
//                   .commonInputFieldContainer,
//               ]}
//             >
//               <CommonInputField
//                 value={""}
//                 title={""}
//                 placeholder={""}
//                 width={"100%"}
//                 icon={Android_Theme_Light.ICON_VERIFIED}
//                 onInputChange={this.handleInputChange}
//               />
//             </View>

//             {/* Nature of the Business */}
//             <View
//               style={
//                 GetKYC6ScreenStyles(Android_Theme_Light)
//                   .inputFieldTitleContainer
//               }
//             >
//               <Text
//                 style={
//                   GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
//                 }
//               >
//                 {"Nature of the Business"}
//               </Text>
//             </View>
//             <View
//               style={[
//                 GetKYC6ScreenStyles(Android_Theme_Light)
//                   .commonInputFieldContainer,
//               ]}
//             >
//               <CommonInputField
//                 value={""}
//                 title={""}
//                 placeholder={""}
//                 width={"100%"}
//                 icon={Android_Theme_Light.ICON_VERIFIED}
//                 onInputChange={this.handleInputChange}
//               />
//             </View>

//             {/* Average Monthly Income (LKR) */}
//             <View
//               style={
//                 GetKYC6ScreenStyles(Android_Theme_Light)
//                   .inputFieldTitleContainer
//               }
//             >
//               <Text
//                 style={
//                   GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
//                 }
//               >
//                 {"Average Monthly Income (LKR)"}
//               </Text>
//             </View>
//             <View
//               style={[
//                 GetKYC6ScreenStyles(Android_Theme_Light)
//                   .commonInputFieldContainer,
//               ]}
//             >
//               <CommonInputField
//                 value={""}
//                 title={""}
//                 placeholder={""}
//                 width={"100%"}
//                 type={"currency"}
//                 icon={Android_Theme_Light.ICON_VERIFIED}
//                 onInputChange={this.handleInputChange}
//               />
//             </View>
//             <View style={{ height: 10 }}></View>

//             {/* Source of Funds */}
//             <View
//               style={
//                 GetKYC6ScreenStyles(Android_Theme_Light)
//                   .inputFieldTitleContainer
//               }
//             >
//               <Text
//                 style={
//                   GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
//                 }
//               >
//                 {"Source of Funds"}
//               </Text>
//             </View>
//             <View
//               style={[
//                 GetKYC6ScreenStyles(Android_Theme_Light)
//                   .commonInputFieldContainer,
//               ]}
//             >
//               <CommonInputField
//                 value={""}
//                 title={""}
//                 placeholder={""}
//                 width={"100%"}
//                 icon={Android_Theme_Light.ICON_VERIFIED}
//                 onInputChange={this.handleInputChange}
//               />
//             </View>
//             <View style={{ height: 10 }}></View>

//             {/* Attachments */}
//             <View
//               style={
//                 GetKYC6ScreenStyles(Android_Theme_Light)
//                   .inputFieldTitleContainer
//               }
//             >
//               <Text
//                 style={
//                   GetKYC6ScreenStyles(Android_Theme_Light).inputFieldTitleText
//                 }
//               >
//                 {"Attachments"}
//               </Text>
//             </View>
//             <View
//               style={[
//                 GetKYC6ScreenStyles(Android_Theme_Light)
//                   .attachmentFieldContainer,
//               ]}
//             >
//               <View
//                 style={[
//                   GetKYC6ScreenStyles(Android_Theme_Light)
//                     .attachmentContentContainer,
//                 ]}
//               >
//                 <View
//                   style={[
//                     GetKYC6ScreenStyles(Android_Theme_Light)
//                       .attachmentProofContainer,
//                   ]}
//                 >
//                   <Text>{"Image_001.png"}</Text>
//                   <Android_Theme_Light.ICON_CIRCLE_X></Android_Theme_Light.ICON_CIRCLE_X>
//                 </View>
//               </View>
//               <View
//                 style={[
//                   GetKYC6ScreenStyles(Android_Theme_Light).leftButtonContainer,
//                 ]}
//               >
//                 {/* Camera Button */}
//                 <CommonButton
//                   type={"0"}
//                   borderRadius={60}
//                   title={""}
//                   width={"90%"}
//                   leftIcon={Android_Theme_Light.ICON_CAMERA}
//                   backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
//                   onPress={() => this.handleCameraButtonPress()}
//                 />
//               </View>

//               <View
//                 style={[
//                   GetKYC6ScreenStyles(Android_Theme_Light).rightButtonContainer,
//                 ]}
//               >
//                 {/* File Button */}
//                 <CommonButton
//                   type={"0"}
//                   borderRadius={60}
//                   title={""}
//                   width={"90%"}
//                   leftIcon={Android_Theme_Light.ICON_EXTERNALOPEN}
//                   backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
//                   onPress={() => this.handleFileButtonPress()}
//                 />
//               </View>
//             </View>
//           </ScrollView>

//           <View
//             style={GetKYC6ScreenStyles(Android_Theme_Light).nextButtonContainer}
//           >
//             {/* Next Button */}
//             <CommonButton
//               type={"1"}
//               title={"Next"}
//               width={"50%"}
//               fontFamily={Android_Theme_Light.POPPINS_REGULAR}
//               textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
//               textColor={Android_Theme_Light.WHITE_COLOR}
//               backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
//               onPress={() => this.handleNextButtonPress()}
//             />
//           </View>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// export default KYC6Screen;
