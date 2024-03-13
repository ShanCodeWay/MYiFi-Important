import React, { useState,useRef,useEffect } from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import { CommonActions } from '@react-navigation/native';
import Index from "../../../navigators/NavIndex";
import Svg, { Path } from "react-native-svg";

import Icon_CircleChecked from "../../../../assets/icons/Icon_CircleChecked.svg";
import MI_Logo from "../../../../assets/icons/MI_Logo.svg";
import Colors from "../../../../styles/Colors";

import { GetCommonStyles } from "../../../../styles/CommonStyles";
import  GetKYCSuccessfulScreenStyles  from "./KYCSuccessfulScreenStyles";

import {
  Android_Theme_Light,
  Android_Theme_Dark,
} from "../../../../styles/Themes";
import { RootStackParams } from '../../../navigators/types';
import { StackNavigationProp } from "@react-navigation/stack";
import PageIndicator from "../../../components/Common/PageIndicator/PageIndicator";

type KYCSuccessfulScreenNavigationProp = StackNavigationProp<RootStackParams, 'KYCSuccessfulScreen'>;

type Props = {
  navigation: KYCSuccessfulScreenNavigationProp;
};

interface KYCSuccessfulScreenState {
  scrollEnabled: boolean;
}

const KYCSuccessfulScreen = ({ navigation }: Props) => {
const [scrollEnabled, setScrollEnabled] = useState<boolean>(false);

 
 const handleNextButtonPress = () => {
    try {
      navigation.dispatch(
        CommonActions.reset({
          index: 0, // Navigate to the first screen in the stack
          routes: [{ name: 'LoginScreen' }], // Specify the screen
        })
      );
    } catch (error) {
      console.log("[KYCSuccessfulScreen] - Next_Button - Error ", error);
    }
  };

  const handleLeftButtonPress = () => {
    try {
      navigation.navigate("KYCOtpScreen");
      console.log("left pressed to navigate to KYCOtpScreen");
    } catch (error) {
      console.log("[KYCSuccessfulScreen] - left_Button - Error ", error);
    }
  };

  const handlePasswordInputChange = (text:string) => {};

 
    return (
      <>
        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
          <MainTitleBar
            IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
            TitleText={""}
            TextAlign={"left"}
            
            onPressLeft={handleLeftButtonPress}
          />

          <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={50}
            enableOnAndroid={true}
            enableAutomaticScroll={false}
            keyboardOpeningTime={300}
            
            onKeyboardDidShow={(frames) => {}}
            onKeyboardDidHide={(frames) => {}}
          >
            <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
              <View
                style={
                  GetKYCSuccessfulScreenStyles(Android_Theme_Light).middleView
                }
              >
                <Android_Theme_Light.ICON_CIRCLECHECKED
                  width={90}
                  height={100}
                />
                <Text
                  style={
                    GetKYCSuccessfulScreenStyles(Android_Theme_Light)
                      .secondTitle
                  }
                >
                  {"Registration Succesful!"}
                </Text>
                <Text
                  style={
                    GetKYCSuccessfulScreenStyles(Android_Theme_Light).mainTitle
                  }
                >
                  {"Welcome to"}
                </Text>
                <MI_Logo />
                <Text
                  style={
                    GetKYCSuccessfulScreenStyles(Android_Theme_Light)
                      .secondTitle1
                  }
                >
                  {"You can now sign in to your Account!"}
                </Text>
              </View>

              <View
                style={
                  GetKYCSuccessfulScreenStyles(Android_Theme_Light).bottomView
                }
              >
                <CommonButton
                  type="1"
                  title="Sign in"
                  borderRadius={35}
                  onPress={handleNextButtonPress}
                  fontFamily={Android_Theme_Light.POPPINS_REGULAR}
                  textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
                  textColor={Android_Theme_Light.WHITE_COLOR}
                  backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
                  width={"50%"}
                />

                <View
                  style={
                    GetKYCSuccessfulScreenStyles(Android_Theme_Light).logoIcon
                  }
                ></View>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </>
    );
  }


export default KYCSuccessfulScreen;




// import React, { Component } from "react";
// import { View, Text, SafeAreaView, StatusBar } from "react-native";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import CommonButton from "../../../components/Common/MainButton/CommonButton";
// import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
// import { CommonActions } from '@react-navigation/native';
// import Index from "../../../navigators/NavIndex";
// import Svg, { Path } from "react-native-svg";

// import Icon_CircleChecked from "../../../../assets/icons/Icon_CircleChecked.svg";
// import MI_Logo from "../../../../assets/icons/MI_Logo.svg";
// import Colors from "../../../../styles/Colors";

// import { GetCommonStyles } from "../../../../styles/CommonStyles";
// import  GetKYCSuccessfulScreenStyles  from "./KYCSuccessfulScreenStyles";

// import {
//   Android_Theme_Light,
//   Android_Theme_Dark,
// } from "../../../../styles/Themes";
// import { RootStackParams } from '../../../navigators/types';
// import { StackNavigationProp } from "@react-navigation/stack";
// import PageIndicator from "../../../components/Common/PageIndicator/PageIndicator";

// type KYCSuccessfulScreenNavigationProp = StackNavigationProp<RootStackParams, 'KYCSuccessfulScreen'>;

// type Props = {
//   navigation: KYCSuccessfulScreenNavigationProp;
//   nicNumber:any;
// };

// interface KYCSuccessfulScreenState {
//   scrollEnabled: boolean;
// }

// class KYCSuccessfulScreen extends Component <Props, KYCSuccessfulScreenState> {

//   constructor(props:any) {
//     super(props);
//     this.state = {
//       scrollEnabled: false,
//     };
//   }

//   componentDidMount() {
//     try {
//   //    StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
//     } catch (Error) {
//       console.log("[KYCSuccessfulScreen] - componentDidMount - Error ", Error);
//     }
//   }
//   componentWillUnmount() {
//     try {
//     } catch (Error) {
//       console.log(
//         "[KYCSuccessfulScreen] - componentWillUnmount - Error ",
//         Error
//       );
//     }
//   }

//   handleNextButtonPress = () => {
//     try {
      
//       this.props.navigation.dispatch(
//         CommonActions.reset({
//           index: 0, // Navigate to the first screen in the stack
//           routes: [{ name: 'LoginScreen' }], // Specify the screen
//         })
//       );
//     } catch (error) {
//       console.log("[KYCSuccessfulScreen] - Next_Button - Error ", error);
//     }
//   };

//   handleLeftButtonPress = () => {
//     try {
//       this.props.navigation.navigate("KYCOtpScreen");
//       console.log("left pressed to navigate to KYCOtpScreen");
//     } catch (error) {
//       console.log("[KYCSuccessfulScreen] - left_Button - Error ", error);
//     }
//   };

//   handlePasswordInputChange = (text:string) => {};

//   render() {
//     return (
//       <>
//         <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
//           <MainTitleBar
//             IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
//             TitleText={""}
//             TextAlign={"left"}
            
//             onPressLeft={this.handleLeftButtonPress}
//           />

//           <KeyboardAwareScrollView
//             contentContainerStyle={{ flexGrow: 1 }}
//             keyboardShouldPersistTaps="handled"
//             extraScrollHeight={50}
//             enableOnAndroid={true}
//             enableAutomaticScroll={false}
//             keyboardOpeningTime={300}
            
//             onKeyboardDidShow={(frames) => {}}
//             onKeyboardDidHide={(frames) => {}}
//           >
//             <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
//               <View
//                 style={
//                   GetKYCSuccessfulScreenStyles(Android_Theme_Light).middleView
//                 }
//               >
//                 <Android_Theme_Light.ICON_CIRCLECHECKED
//                   width={90}
//                   height={100}
//                 />
//                 <Text
//                   style={
//                     GetKYCSuccessfulScreenStyles(Android_Theme_Light)
//                       .secondTitle
//                   }
//                 >
//                   {"Registration Succesful!"}
//                 </Text>
//                 <Text
//                   style={
//                     GetKYCSuccessfulScreenStyles(Android_Theme_Light).mainTitle
//                   }
//                 >
//                   {"Welcome to"}
//                 </Text>
//                 <MI_Logo />
//                 <Text
//                   style={
//                     GetKYCSuccessfulScreenStyles(Android_Theme_Light)
//                       .secondTitle1
//                   }
//                 >
//                   {"You can now sign in to your Account!"}
//                 </Text>
//               </View>

//               <View
//                 style={
//                   GetKYCSuccessfulScreenStyles(Android_Theme_Light).bottomView
//                 }
//               >
//                 <CommonButton
//                   type="1"
//                   title="Sign in"
//                   borderRadius={35}
//                   onPress={this.handleNextButtonPress}
//                   fontFamily={Android_Theme_Light.POPPINS_REGULAR}
//                   textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
//                   textColor={Android_Theme_Light.WHITE_COLOR}
//                   backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
//                   width={"50%"}
//                 />

//                 <View
//                   style={
//                     GetKYCSuccessfulScreenStyles(Android_Theme_Light).logoIcon
//                   }
//                 ></View>
//               </View>
//             </View>
//           </KeyboardAwareScrollView>
//         </SafeAreaView>
//       </>
//     );
//   }
// }

// export default KYCSuccessfulScreen;
