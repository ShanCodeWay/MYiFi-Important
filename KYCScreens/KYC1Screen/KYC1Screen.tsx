// KYC1Screen.js (Getting started)

import React, { useEffect,useRef } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import GetKYC1ScreenStyles from "./KYC1ScreenStyles";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import { RootStackParams } from '../../../navigators/types';
import { StackNavigationProp } from "@react-navigation/stack";

type KYC1ScreenNavigationProp = StackNavigationProp<RootStackParams, 'KYC1Screen'>;

type Props = {
  navigation: KYC1ScreenNavigationProp;
};


const KYC1Screen: React.FC<Props>=({navigation}) => {
//Done by: Randima


const handleLeftButtonPress = () => {
    try {
      navigation.replace('LoginScreen');
      console.log("left pressed to navigate to LoginScreen");
    } catch (error) {
      console.log("[KYC1Screen] - left_Button() Ex:  ", error);
    }
  };

  const handleNextButtonPress = () => {
    try {
      navigation.navigate('KYC2Screen');
      console.log("button pressed to navigate to KYC2Screen");
    } catch (error) {
      console.log("[KYC1Screen] - next_Button() Ex:  ", error);
    }
  };

  const renderSingleRow = ({ rowNumber, title, description }: { rowNumber: any; title: string; description: string }): JSX.Element => {
    return (
      <View
        style={[GetKYC1ScreenStyles(Android_Theme_Light).singleRowContainer]}
      >
        <View style={{ alignItems: "center", width: 60, height: "100%" }}>
          <View
            style={[GetKYC1ScreenStyles(Android_Theme_Light).textNumberCircle]}
          >
            <Text style={[GetKYC1ScreenStyles(Android_Theme_Light).textNumber]}>
              {rowNumber}
            </Text>
          </View>
          {rowNumber == "7" ? null : (
            <View
              style={[
                GetKYC1ScreenStyles(Android_Theme_Light).numberCircleLine,
              ]}
            />
          )}
        </View>

        <View style={[GetKYC1ScreenStyles(Android_Theme_Light).textContainer]}>
          <Text style={GetKYC1ScreenStyles(Android_Theme_Light).text1}>
            {title}
          </Text>
          <Text style={GetKYC1ScreenStyles(Android_Theme_Light).text2}>
            {description}
          </Text>
        </View>
      </View>
    );
  };

  const OnBackButtonPress = () => {
    try {
      navigation.navigate('WelcomeScreen');
    } catch (Error) {
      console.log("[KYC1Screen] - OnBackButtonPress - Error ", Error);
    }
  };

  const OnForwardButtonPress = () => {
    try {
      navigation.navigate('KYC2Screen');
    } catch (Error) {
      console.log("[KYC1Screen] - OnForwardButtonPress - Error ", Error);
    }
  };

  
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <MainTitleBar
          TitleText={" "}
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          onPressLeft={() => OnBackButtonPress()}
          IconRight={Android_Theme_Light.ICON_FORWARD_NAVIGATE}
          onPressRight={() => OnForwardButtonPress()}
        />

        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

          {/* List Container */}
          <View
            style={[
              GetKYC1ScreenStyles(Android_Theme_Light).listOuterContainer,
            ]}
          >
            {/* 1 */}
            {renderSingleRow({
                          rowNumber: 1,
                          title: "Validate your NIC",
                          description: "Check your NIC is already registered or not."
                        })}  

            {/* 2 */}
            {renderSingleRow({
               rowNumber:2,
               title:"Smile for the camera",
               description:"Make it look good. This is going to be your profile picture."
             }
               
              )}

            {/* 3 */}
            {  renderSingleRow({
               rowNumber:3,
               title:"Your ID",
               description:"Scan in your NIC."

            })
              }
           
           

            {/* 4 */}

            { renderSingleRow(

              {
                rowNumber:4,
                title:"Hey..Scan in your NIC",
                description:"Scan in your NIC."
             
             })}
           
         

            {/* 5 */}
             { renderSingleRow(
              {
                rowNumber:5,
                title:"Know your info",
                description:"In addition to the information collected under 'About you', we require some further details. Please provide them here."
             
             })}

            {/* 6 */}
            { renderSingleRow(
              {
              rowNumber:6,
              title:"Current Location and Signature",
              description:"Capture your signature and current location."
            })}

            {/* 7 */}
            { renderSingleRow(
              {
              rowNumber:7,
              title:"Insert OTP",
              description:
                "Almost there. Enter the OTP and submit the details."
              })}
          </View>

          {/* OK,GOT IT Button */}
          <View
            style={GetKYC1ScreenStyles(Android_Theme_Light).nextButtonContainer}
          >
            <CommonButton
              type={"1"}
              title={"OK,GOT IT!"}
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


export default KYC1Screen;


// import React, { Component } from "react";
// import { View, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { GetCommonStyles } from "../../../../styles/CommonStyles";
// import { Android_Theme_Light } from "../../../../styles/Themes";
// import CommonButton from "../../../components/Common/MainButton/CommonButton";
// import GetKYC1ScreenStyles from "./KYC1ScreenStyles";
// import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
// import { RootStackParams } from '../../../navigators/types';
// import { StackNavigationProp } from "@react-navigation/stack";

// type KYC1ScreenNavigationProp = StackNavigationProp<RootStackParams, 'KYC1Screen'>;

// type Props = {
//   navigation: KYC1ScreenNavigationProp;
// };

// interface KYC1ScreenState {

   
// }

// class KYC1Screen extends Component <Props, KYC1ScreenState> {
// //Done by: Randima


//   componentDidMount() {
//     try {
//     } catch (Error) {
//       console.log("[KYC1Screen] - componentDidMount() Ex: ", Error);
//     }
//   }

//   componentWillUnmount() {
//     try {
//     } catch (Error) {
//       console.log("[KYC1Screen] - componentDidMount() Ex:  ", Error);
//     }
//   }

//   handleLeftButtonPress = () => {
//     try {
//       this.props.navigation.replace('LoginScreen');
//       console.log("left pressed to navigate to LoginScreen");
//     } catch (error) {
//       console.log("[KYC1Screen] - left_Button() Ex:  ", error);
//     }
//   };

//   handleNextButtonPress = () => {
//     try {
//       this.props.navigation.navigate('KYC2Screen');
//       console.log("button pressed to navigate to KYC2Screen");
//     } catch (error) {
//       console.log("[KYC1Screen] - next_Button() Ex:  ", error);
//     }
//   };

//   renderSingleRow = ({ number, title, description }: { number: any; title: string; description: string }): JSX.Element  => {
//     return (
//       <View
//         style={[GetKYC1ScreenStyles(Android_Theme_Light).singleRowContainer]}
//       >
//         <View style={{ alignItems: "center", width: 60, height: "100%" }}>
//           <View
//             style={[GetKYC1ScreenStyles(Android_Theme_Light).textNumberCircle]}
//           >
//             <Text style={[GetKYC1ScreenStyles(Android_Theme_Light).textNumber]}>
//               {number}
//             </Text>
//           </View>
//           {number == "7" ? null : (
//             <View
//               style={[
//                 GetKYC1ScreenStyles(Android_Theme_Light).numberCircleLine,
//               ]}
//             />
//           )}
//         </View>

//         <View style={[GetKYC1ScreenStyles(Android_Theme_Light).textContainer]}>
//           <Text style={GetKYC1ScreenStyles(Android_Theme_Light).text1}>
//             {title}
//           </Text>
//           <Text style={GetKYC1ScreenStyles(Android_Theme_Light).text2}>
//             {description}
//           </Text>
//         </View>
//       </View>
//     );
//   };

//   OnBackButtonPress = () => {
//     try {
//       this.props.navigation.navigate('WelcomeScreen');
//     } catch (Error) {
//       console.log("[KYC1Screen] - OnBackButtonPress - Error ", Error);
//     }
//   };

//   OnForwardButtonPress = () => {
//     try {
//       this.props.navigation.navigate('KYC2Screen');
//     } catch (Error) {
//       console.log("[KYC1Screen] - OnForwardButtonPress - Error ", Error);
//     }
//   };

//   render() {
//     return (
//       <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
//         <MainTitleBar
//           TitleText={" "}
//           IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
//           onPressLeft={() => this.OnBackButtonPress()}
//           IconRight={Android_Theme_Light.ICON_FORWARD_NAVIGATE}
//           onPressRight={() => this.OnForwardButtonPress()}
//         />

//         <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

//           {/* List Container */}
//           <View
//             style={[
//               GetKYC1ScreenStyles(Android_Theme_Light).listOuterContainer,
//             ]}
//           >
//             {/* 1 */}
//             <this.renderSingleRow
//               number={1}
//               title={"Validate your NIC"}
//               description={"Check your NIC is already registered or not."}
//             />

//             {/* 2 */}
//             <this.renderSingleRow
//               number={2}
//               title={"Smile for the camera"}
//               description={
//                 "Make it look good. This is going to be your profile picture."
//               }
//             />

//             {/* 3 */}
//             <this.renderSingleRow
//               number={3}
//               title={"Your ID"}
//               description={"Scan in your NIC."}
//             />

//             {/* 4 */}
//             <this.renderSingleRow
//               number={4}
//               title={"About you"}
//               description={
//                 "We want to know a little bit about you. Give us some details."
//               }
//             />

//             {/* 5 */}
//             <this.renderSingleRow
//               number={5}
//               title={"Know your info"}
//               description={
//                 "In addition to the information collected under 'About you', we require some further details. Please provide them here."
//               }
//             />

//             {/* 6 */}
//             <this.renderSingleRow
//               number={6}
//               title={"Current Location and Signature"}
//               description={"Capture your signature and current location."}
//             />

//             {/* 7 */}
//             <this.renderSingleRow
//               number={7}
//               title={"Insert OTP"}
//               description={
//                 "Almost there. Enter the OTP and submit the details."
//               }
//             />
//           </View>

//           {/* OK,GOT IT Button */}
//           <View
//             style={GetKYC1ScreenStyles(Android_Theme_Light).nextButtonContainer}
//           >
//             <CommonButton
//               type={"1"}
//               title={"OK,GOT IT!"}
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

// export default KYC1Screen;