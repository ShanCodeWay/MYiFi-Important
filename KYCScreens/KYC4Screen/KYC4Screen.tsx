// KYC4Screen.js (Capture ID)

import React, { useEffect,useState } from "react";
import { View, Text, Image,Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import GetKYC4ScreenStyles from "./KYC4ScreenStyles";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import { RootStackParams } from '../../../navigators/types';
import { StackNavigationProp } from "@react-navigation/stack";
import PageIndicator from "../../../components/Common/PageIndicator/PageIndicator";
import CameraComponent from "../../../components/Common/CameraComponent/CameraComponent";

type KYC4ScreenNavigationProp = StackNavigationProp<RootStackParams, 'KYC4Screen'>;

type Props = {
  navigation: KYC4ScreenNavigationProp;
};



const KYC4Screen: React.FC <Props>=({navigation})=> {
//Done by: Randima

const [isActive, setIsActive] = useState<boolean>(false);
const [imagePath1, setImagePath1] = useState<string>('');
const [imagePath2, setImagePath2] = useState<string>('');
const [toggle, setToggle] = useState<boolean>(true);



  const handleNextButtonPress = async () => {
    try {
      setIsActive(true);
      console.log('isActive after setIsActive(false):', isActive); // Log the value of isActive
      await new Promise(resolve => setTimeout(resolve, 300)); 
      //navigation.navigate('KYC5Screen');
      console.log("button pressed to navigate to KYC4Screen");
    } catch (error) {
      console.log("[KYC4Screen] - Next_Button - Error ", error);
    }
  };

  const OnBackButtonPress = () => {
    try {
      setIsActive(false);
      console.log("Next button pressed");
      navigation.navigate('KYC3Screen');
    } catch (Error) {
      console.log("[KYC4Screen] - OnPress_BackButton - Error ", Error);
    }
  };

  const OnForwardButtonPress = () => {
    try {
      navigation.navigate('KYC5Screen');
    } catch (Error) {
      console.log("[KYC4Screen] - OnForwardButtonPress - Error ", Error);
    }
  };

 


  const handleCaptureImage = (path:string) => {
    if (toggle) {
      setImagePath1(path);
    } else {
      setImagePath2(path);
    }
    setToggle(!toggle); 
  };

  const handleCloseCamera = () => {
    setIsActive(false);
    
  }

  const handleCameraButtonPress = async () => {
    try {
      console.log("camera pressed");
      setIsActive(true);
      console.log("setIsActive", isActive);
    } catch (Error) {
      console.log("[KYC3Screen] - Camera_Button - Error ", Error);
    }
  };


    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>

<Modal
        visible={isActive}
        animationType="slide"
        transparent={true}
      >
        <View style={GetKYC4ScreenStyles(Android_Theme_Light).modalContainer}>
          <CameraComponent
            onClose={handleCloseCamera}
            cameraType={'back'}
            isActive={isActive}
            onCapture={handleCaptureImage}
          />
        </View>
      </Modal>


        {/* <MainTitleBar
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          TitleText={"Capture ID"}
          // TextAlign={"center"}
          IconRight={null}
          onPressLeft={() => this.OnPress_BackButton()}
        /> */}
        <MainTitleBar
          TitleText={" "}
          IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
          onPressLeft={() => OnBackButtonPress()}
          IconRight={Android_Theme_Light.ICON_FORWARD_NAVIGATE}
          onPressRight={() => OnForwardButtonPress()}
        />

        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

           {/* PageIndicator */}
          <PageIndicator totalNoOfPages={7} pageNumber={4} />
         

          {/* Title Text */}
          <View style={GetCommonStyles(Android_Theme_Light).topTitleContainer}>
            {/* <Text
              style={GetCommonStyles(Android_Theme_Light).textStyleH1Medium}
            >
              {"Your ID"}
            </Text> */}

            {/* <Text style = {GetCommonStyles(Android_Theme_Light).textStyleCaption1Medium}>
            {"Hey..Scan in your NIC"}
              </Text> */}
            <Text style={GetKYC4ScreenStyles(Android_Theme_Light).text3}>
              {"NIC"}
            </Text>
          </View>

          <View style={GetKYC4ScreenStyles(Android_Theme_Light).boxesContainer}>
            <View style={GetKYC4ScreenStyles(Android_Theme_Light).boxPicture}>
              {/* <Image style={GetKYC4ScreenStyles(Android_Theme_Light).boxPicture}
            source={require("../../../../assets/images/sample_person.png")}
            resizeMode="contain"
          /> */}
{imagePath1 !== '' ? (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image
      style={{
        width: '100%',
        aspectRatio: 1/1,
       
        resizeMode: 'contain',
        borderWidth: 2,
        borderColor: 'gray',
      }}
      source={{ uri: `file://${imagePath1}` }}
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
            <View style={GetKYC4ScreenStyles(Android_Theme_Light).boxPicture}>
            {imagePath2 !== '' ? (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image
      style={{
        width: '100%',
        aspectRatio: 3 / 2,
       
        resizeMode: 'contain',
        borderWidth: 2,
        borderColor: 'gray',
      }}
      source={{ uri: `file://${imagePath2}` }}
    />
  </View>
) : (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ width: '150%', aspectRatio: 3 / 2 }}>
      <Android_Theme_Light.IMAGE_SELFI_PIC width={"100%"} />
    </View>
  </View>
)}
              {/* <Image style={GetKYC4ScreenStyles(Android_Theme_Light).boxPicture}
            source={require("../../../../assets/images/sample_person.png")}
            resizeMode="contain"
          /> */}
            </View>
          </View>

          <View
            style={
              GetKYC4ScreenStyles(Android_Theme_Light).cameraButtonSContainer
            }
          >
            <View style={GetKYC4ScreenStyles(Android_Theme_Light).box}>
              <Text style={GetKYC4ScreenStyles(Android_Theme_Light).boxText}>
                {"Front Side"}
              </Text>

              {/* Camera Button */}
              <View
                style={GetKYC4ScreenStyles(Android_Theme_Light).buttonContainer}
              >
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
              </View>
            </View>
            <View style={GetKYC4ScreenStyles(Android_Theme_Light).box}>
              <Text style={GetKYC4ScreenStyles(Android_Theme_Light).boxText}>
                {"Rear Side"}
              </Text>

              {/* Camera Button */}
              <View
                style={GetKYC4ScreenStyles(Android_Theme_Light).buttonContainer}
              >
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
              </View>
            </View>
          </View>

          <View
            style={GetKYC4ScreenStyles(Android_Theme_Light).nextButtonContainer}
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


export default KYC4Screen;


// // KYC4Screen.js (Capture ID)

// import React, { Component } from "react";
// import { View, Text, Image } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { GetCommonStyles } from "../../../../styles/CommonStyles";
// import { Android_Theme_Light } from "../../../../styles/Themes";
// import CommonButton from "../../../components/Common/MainButton/CommonButton";
// import GetKYC4ScreenStyles from "./KYC4ScreenStyles";
// import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
// import { RootStackParams } from '../../../navigators/types';
// import { StackNavigationProp } from "@react-navigation/stack";
// import PageIndicator from "../../../components/Common/PageIndicator/PageIndicator";

// type KYC4ScreenNavigationProp = StackNavigationProp<RootStackParams, 'KYC4Screen'>;

// type Props = {
//   navigation: KYC4ScreenNavigationProp;
// };

// interface KYC4ScreenState {
 
   
// }

// class KYC4Screen extends Component <Props, KYC4ScreenState> {
// //Done by: Randima

//   componentDidMount() {
//     try {
//     } catch (Error) {
//       console.log("[KYC4Screen] - componentDidMount - Error ", Error);
//     }
//   }

//   componentWillUnmount() {
//     try {
//     } catch (Error) {
//       console.log("[KYC4Screen] - componentDidMount - Error ", Error);
//     }
//   }

//   handleCameraPressFront = () => {
//     try {
//       console.log("Circle front camera pressed");
//     } catch (Error) {
//       console.log("[KYC4Screen] - Front_camera_Button - Error ", Error);
//     }
//   };

//   handleCameraPressRear = () => {
//     try {
//       console.log("Circle rear camera pressed");
//     } catch (Error) {
//       console.log("[KYC4Screen] - Rear_camera_Button - Error ", Error);
//     }
//   };

//   handleNextButtonPress = () => {
//     try {
//       this.props.navigation.navigate('KYC5Screen');
//       console.log("button pressed to navigate to KYC5Screen");
//     } catch (error) {
//       console.log("[KYC4Screen] - Next_Button - Error ", error);
//     }
//   };

//   OnBackButtonPress = () => {
//     try {
//       console.log("Next button pressed");
//       this.props.navigation.navigate('KYC3Screen');
//     } catch (Error) {
//       console.log("[KYC4Screen] - OnPress_BackButton - Error ", Error);
//     }
//   };

//   OnForwardButtonPress = () => {
//     try {
//       this.props.navigation.navigate('KYC5Screen');
//     } catch (Error) {
//       console.log("[KYC4Screen] - OnForwardButtonPress - Error ", Error);
//     }
//   };

//   render() {
//     return (
//       <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
//         {/* <MainTitleBar
//           IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
//           TitleText={"Capture ID"}
//           // TextAlign={"center"}
//           IconRight={null}
//           onPressLeft={() => this.OnPress_BackButton()}
//         /> */}
//         <MainTitleBar
//           TitleText={" "}
//           IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
//           onPressLeft={() => this.OnBackButtonPress()}
//           IconRight={Android_Theme_Light.ICON_FORWARD_NAVIGATE}
//           onPressRight={() => this.OnForwardButtonPress()}
//         />

//         <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

//            {/* PageIndicator */}
//           <PageIndicator totalNoOfPages={7} pageNumber={4} />
         

//           {/* Title Text */}
//           <View style={GetCommonStyles(Android_Theme_Light).topTitleContainer}>
//             {/* <Text
//               style={GetCommonStyles(Android_Theme_Light).textStyleH1Medium}
//             >
//               {"Your ID"}
//             </Text> */}

//             {/* <Text style = {GetCommonStyles(Android_Theme_Light).textStyleCaption1Medium}>
//             {"Hey..Scan in your NIC"}
//               </Text> */}
//             <Text style={GetKYC4ScreenStyles(Android_Theme_Light).text3}>
//               {"NIC"}
//             </Text>
//           </View>

//           <View style={GetKYC4ScreenStyles(Android_Theme_Light).boxesContainer}>
//             <View style={GetKYC4ScreenStyles(Android_Theme_Light).boxPicture}>
//               {/* <Image style={GetKYC4ScreenStyles(Android_Theme_Light).boxPicture}
//             source={require("../../../../assets/images/sample_person.png")}
//             resizeMode="contain"
//           /> */}
//             </View>
//             <View style={GetKYC4ScreenStyles(Android_Theme_Light).boxPicture}>
//               {/* <Image style={GetKYC4ScreenStyles(Android_Theme_Light).boxPicture}
//             source={require("../../../../assets/images/sample_person.png")}
//             resizeMode="contain"
//           /> */}
//             </View>
//           </View>

//           <View
//             style={
//               GetKYC4ScreenStyles(Android_Theme_Light).cameraButtonSContainer
//             }
//           >
//             <View style={GetKYC4ScreenStyles(Android_Theme_Light).box}>
//               <Text style={GetKYC4ScreenStyles(Android_Theme_Light).boxText}>
//                 {"Front Side"}
//               </Text>

//               {/* Camera Button */}
//               <View
//                 style={GetKYC4ScreenStyles(Android_Theme_Light).buttonContainer}
//               >
//                 <CommonButton
//                   type={"0"}
                  
//                   borderRadius={60}
//                   title={""}
//                   width={"40%"}
//                   textAlign={"center"}
//                   leftIcon={Android_Theme_Light.ICON_CAMERA}
//                   backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
//                   onPress={() => null}
//                 />
//               </View>
//             </View>
//             <View style={GetKYC4ScreenStyles(Android_Theme_Light).box}>
//               <Text style={GetKYC4ScreenStyles(Android_Theme_Light).boxText}>
//                 {"Rear Side"}
//               </Text>

//               {/* Camera Button */}
//               <View
//                 style={GetKYC4ScreenStyles(Android_Theme_Light).buttonContainer}
//               >
//                 <CommonButton
//                   type={"0"}
                  
//                   borderRadius={60}
//                   title={""}
//                   width={"40%"}
//                   textAlign={"center"}
//                   leftIcon={Android_Theme_Light.ICON_CAMERA}
//                   backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}
//                   onPress={() => null}
//                 />
//               </View>
//             </View>
//           </View>

//           <View
//             style={GetKYC4ScreenStyles(Android_Theme_Light).nextButtonContainer}
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

// export default KYC4Screen;
