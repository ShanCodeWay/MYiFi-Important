import { StyleSheet } from "react-native";
import Colors from "../../../../styles/Colors";

export const GetKYC4ScreenStyles = (theme) => {
  const KYC4ScreenStyles = StyleSheet.create({
    text1: {
      fontSize: theme.FONT_SIZE_HEADER_ONE,
      color: theme.TextStyleH1Color,
      textAlign: "center",
    },
    text2: {
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      color: theme.TextStyleCaptionColor,
      textAlign: "center",
      // marginTop: 20,
      // marginLeft: 20,
    },
    text3: {
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      color: theme.BLUE_COLOR,
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
      // backgroundColor: Colors.GRAY,
      // marginRight: 5,
      justifyContent: "space-around",
      alignItems: "center",
      // borderWidth: 2,
      // borderColor: Colors.GRAY,
    },
    boxText: {
      color: theme.TextStyleCaptionColor,
      // marginBottom: 20,
      fontSize: theme.FONT_SIZE_LARGE,
      justifyContent: 'flex-start',

    },
    alignContainer: {
      alignItems: "center",
      // marginTop: 15,
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
