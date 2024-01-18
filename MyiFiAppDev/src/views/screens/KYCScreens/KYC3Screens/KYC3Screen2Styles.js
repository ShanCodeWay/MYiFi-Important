import { StyleSheet } from "react-native";
import Colors from "../../../../styles/Colors";
import Fonts from "../../../../styles/Fonts";

export const GetKYC3Screen2Styles = (theme) => {
  const KYC3Screen2Styles = StyleSheet.create({
    
    titleText: {
      // marginTop: 70,
      textAlign: "center",
      color: theme.TextStyleH1Color,
      // fontFamily: Fonts.POPPINS_BOLD,
      fontSize: theme.FONT_SIZE_HEADER_ONE,
    },

    profilePicCircle: {
      backgroundColor: theme.GRAY_COLOR,
      borderRadius: 500,
      height: 200,
      width: 200,
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      // marginTop: 50
    },

    subText: {
        // paddingTop: 30,
        textAlign: 'center',
        // alignContent: 'center',
        color: theme.TextStyleCaptionColor ,
        // fontFamily: Fonts.POPPINS_BOLD,
        fontSize: theme.FONT_SIZE_HEADER_TWO
       
    },
    profilePicContainer: {
      alignItems: 'center',
      justifyContent:'space-around',
      flex: 3,
      // backgroundColor: 'red'
  },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 2,
        // backgroundColor: 'blue'
    },

    nextButtonContainer: {
      flex: 1,
      justifyContent: "flex-end",
    
    },
    cameraCircle:{
        backgroundColor: theme.COMMON_BUTTON_BACKGROUND_COLOR,
        borderRadius: 500,
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }

    
  });

  return KYC3Screen2Styles;
};
