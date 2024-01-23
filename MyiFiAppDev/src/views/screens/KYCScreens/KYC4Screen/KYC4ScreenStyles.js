import { StyleSheet } from "react-native";
import Colors from "../../../../styles/Colors";

export const GetKYC4ScreenStyles = (theme) => {
  const KYC4ScreenStyles = StyleSheet.create({
    text1: {
      color: theme.DARK_BLUE_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_ONE,
      fontFamily: theme.POPPINS_SEMIBOLD,
      textAlign: "center",
    },
    text2: {
      color: theme.TextStyleCaptionColor,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_REGULAR,
      textAlign: "center",
    },
    text3: {
      color: theme.BLUE_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_SEMIBOLD,
      textAlign: "center",
    },

    textContainer:{
      flexDirection: "column",
      alignItems: "center",
      // backgroundColor: 'gray',
      justifyContent: 'space-evenly',
      flex: 2,
    },

    boxesContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      // backgroundColor: 'red',
      justifyContent:'center',
      flex: 2,
    },
    cameraButtonSContainer: {
      flexDirection: "row",
      // backgroundColor: 'blue',
      justifyContent:'space-around',
      flex: 2,
    },
    buttonContainer: {
      alignItems: "center",
    },
    boxPicture: {
      width: 180,
      height: 180,
      // backgroundColor: Colors.GRAY,
      marginRight: 5,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      color: theme.TextStyleCaptionColor,
    },
    box: {
      width: 180,
      height: 180,
      justifyContent: "space-around",
      alignItems: "center",
      // borderColor: Colors.GRAY,
    },
    boxText: {
      color: theme.TextStyleCaptionColor,
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_REGULAR,
      justifyContent: 'flex-start',

    },
    alignContainer: {
      alignItems: "center",
    },
    cameraCircle: {
      backgroundColor: theme.COMMON_BUTTON_BACKGROUND_COLOR,
      borderRadius: 500,
      height: 100,
      width: 100,
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    },
    nextButtonContainer: {
      flex: 1,
      justifyContent: "flex-end",
    },
  });

  return KYC4ScreenStyles;
};
