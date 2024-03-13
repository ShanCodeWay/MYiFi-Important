//KYCScreen3.js

import React, { useState,useEffect,useRef } from "react";
import { View, Text, Image, SafeAreaView, Modal } from "react-native";
import GetKYC3ScreenStyles from "./KYC3ScreenStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import { RootStackParams } from '../../../navigators/types';
import { StackNavigationProp } from "@react-navigation/stack";
import PageIndicator from "../../../components/Common/PageIndicator/PageIndicator";
import CameraComponent from "../../../components/Common/CameraComponent/CameraComponent";

type KYC3ScreenNavigationProp = StackNavigationProp<RootStackParams, 'KYC3Screen'>;

type Props = {
  navigation: KYC3ScreenNavigationProp;
};


const KYC3Screen: React.FC<Props>=({navigation}) => {

const [isActive, setIsActive] = useState<boolean>(false);
const [imagePath, setImagePath] = useState<string>('');

const handleCaptureImage = (path:string) => {
  setImagePath(path);
};


 const handleCameraButtonPress = async () => {
    try {
      console.log("camera pressed");
      setIsActive(true);
      console.log("setIsActive", isActive);
      setImagePath('');
    } catch (Error) {
      console.log("[KYC3Screen] - Camera_Button - Error ", Error);
    }
  };

  const handleNextButtonPress = async () => {
    try {
      setIsActive(false);
      console.log('isActive after setIsActive(false):', isActive); 
      await new Promise(resolve => setTimeout(resolve, 300)); 
      navigation.navigate('KYC4Screen');
      console.log("button pressed to navigate to KYC4Screen");
    } catch (error) {
      console.log("[KYC3Screen] - Next_Button - Error ", error);
    }
  };

 const OnBackButtonPress = () => {
    try {
      setIsActive(false);
      console.log("Next button pressed");
      navigation.navigate('KYC2Screen');
    } catch (Error) {
      console.log("[KYC3Screen] - OnPress_BackButton - Error ", Error);
    }
  };

 const OnForwardButtonPress = () => {
    try {
      setIsActive(false);
      navigation.navigate('KYC4Screen');
    } catch (Error) {
      console.log("[KYC3Screen] - OnForwardButtonPress - Error ", Error);
    }
  };


  const handleCloseCamera = () => {
    setIsActive(false);
    
  }

    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
         {/* Modal for Camera Component */}
       <Modal
        visible={isActive}
        animationType="slide"
        transparent={true}
      >
        <View style={GetKYC3ScreenStyles(Android_Theme_Light).modalContainer}>
          <CameraComponent
            onClose={handleCloseCamera}
            cameraType={'front'}
            isActive={isActive}
            onCapture={handleCaptureImage}
          />
        </View>
      </Modal>

        <MainTitleBar
          TitleText={" "}
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          onPressLeft={() => OnBackButtonPress()}
          IconRight={Android_Theme_Light.ICON_FORWARD_NAVIGATE}
          onPressRight={() => OnForwardButtonPress()}
        />

         {/* PageIndicator */}
        <PageIndicator totalNoOfPages={7} pageNumber={3} />
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

          {/* Title Text */}
          <View style={GetCommonStyles(Android_Theme_Light).topTitleContainer}>
            <Text
              style={GetCommonStyles(Android_Theme_Light).TextStyleH2Medium}
            >
              {"Smile for the \nCamera"}
            </Text>

            <Text
              style={
                GetCommonStyles(Android_Theme_Light).textStyleCaption1Medium
              }
            >
              {"Make it good..\nThis is going to be your profile picture."}
            </Text>
          </View>

          {/* Profile picture container */}
       {/* Profile picture container */}

 
 <View style={GetKYC3ScreenStyles(Android_Theme_Light).profilePicture}>
  {imagePath !== '' ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={{
          width: '150%',
          aspectRatio: 3 / 2,
          transform: [{ rotate: '90deg' }],
          resizeMode: 'contain',
          borderWidth: 2,
          borderColor: 'gray',
        }}
        source={{ uri: `file://${imagePath}` }}
      />
    </View>
  ) : (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: '150%', aspectRatio: 3 / 2 }}>
        <Android_Theme_Light.IMAGE_SELFI_PIC width={"100%"} />
      </View>
    </View>
  )}
</View>

          {/* // source={require("../../../../assets/images/sample_person.png")}
              // resizeMode="contain" */}
          <View
            style={GetKYC3ScreenStyles(Android_Theme_Light).buttonContainer}
          >
            {/* Camera Button */}
            <CommonButton
              type={"1"}
              borderRadius={60}
              title={''}
              width={"35%"}
              textAlign="center"
              fontFamily={Android_Theme_Light.POPPINS_REGULAR}
              textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
              textColor={Android_Theme_Light.WHITE_COLOR}
             
              Icon={Android_Theme_Light.ICON_CAMERA}

              backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}

              onPress={() => handleCameraButtonPress()}           />

            {/* Next Button */}
            <CommonButton
              type={"1"}
              textAlign="center"
              title={"Next"}
              width={"35%"}
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


export default KYC3Screen;



// //KYCScreen3.js

// import React, { Component } from "react";
// import { View, Text, Image, SafeAreaView } from "react-native";
// import GetKYC3ScreenStyles from "./KYC3ScreenStyles";
// import { Android_Theme_Light } from "../../../../styles/Themes";
// import CommonButton from "../../../components/Common/MainButton/CommonButton";
// import { GetCommonStyles } from "../../../../styles/CommonStyles";
// import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
// import { RootStackParams } from '../../../navigators/types';
// import { StackNavigationProp } from "@react-navigation/stack";
// import PageIndicator from "../../../components/Common/PageIndicator/PageIndicator";

// type KYC3ScreenNavigationProp = StackNavigationProp<RootStackParams, 'KYC3Screen'>;

// type Props = {
//   navigation: KYC3ScreenNavigationProp;
// };

// interface KYC3ScreenState {
  
   
// }

// class KYC3Screen extends Component <Props, KYC3ScreenState> {
//   componentDidMount() {
//     try {
//     } catch (Error) {
//       console.log("[KYC3Screen] - componentDidMount - Error ", Error);
//     }
//   }
  

//   componentWillUnmount() {
//     try {
//     } catch (Error) {
//       console.log("[KYC3Screen] - componentDidMount - Error ", Error);
//     }
//   }

//   handleCameraButtonPress = () => {
//     try {
//       console.log("camera pressed");
//     } catch (Error) {
//       console.log("[KYC3Screen] - Camera_Button - Error ", Error);
//     }
//   };

//   handleNextButtonPress = () => {
//     try {
//       this.props.navigation.navigate('KYC4Screen');
//       console.log("button pressed to navigate to KYC4Screen");
//     } catch (error) {
//       console.log("[KYC3Screen] - Next_Button - Error ", error);
//     }
//   };

//   OnBackButtonPress = () => {
//     try {
//       console.log("Next button pressed");
//       this.props.navigation.navigate('KYC2Screen');
//     } catch (Error) {
//       console.log("[KYC3Screen] - OnPress_BackButton - Error ", Error);
//     }
//   };

//   OnForwardButtonPress = () => {
//     try {
//       this.props.navigation.navigate('KYC4Screen');
//     } catch (Error) {
//       console.log("[KYC3Screen] - OnForwardButtonPress - Error ", Error);
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

//          {/* PageIndicator */}
//         <PageIndicator totalNoOfPages={7} pageNumber={3} />
//         <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

//           {/* Title Text */}
//           <View style={GetCommonStyles(Android_Theme_Light).topTitleContainer}>
//             <Text
//               style={GetCommonStyles(Android_Theme_Light).TextStyleH2Medium}
//             >
//               {"Smile for the \nCamera"}
//             </Text>

//             <Text
//               style={
//                 GetCommonStyles(Android_Theme_Light).textStyleCaption1Medium
//               }
//             >
//               {"Make it good..\nThis is going to be your profile picture."}
//             </Text>
//           </View>

//           {/* Profile picture container */}
//           <View
//             style={GetKYC3ScreenStyles(Android_Theme_Light).profilePictureBox}
//           >
//             <View
//               style={GetKYC3ScreenStyles(Android_Theme_Light).profilePicture}
//               // source={require("../../../../assets/images/sample_person.png")}
//               // resizeMode="contain"
//             />
//           </View>

//           <View
//             style={GetKYC3ScreenStyles(Android_Theme_Light).buttonContainer}
//           >
//             {/* Camera Button */}
//             <CommonButton
//               type={"0"}
//               borderRadius={60}
//               width={"20%"}
//               textAlign={"center"}
//               leftIcon={Android_Theme_Light.ICON_CAMERA}
//               backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
//               onPress={() => this.handleCameraButtonPress()} title={""}            />

//             {/* Next Button */}
//             <CommonButton
//               type={"1"}
              
//               title={"Next"}
//               width={"35%"}
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

// export default KYC3Screen;
