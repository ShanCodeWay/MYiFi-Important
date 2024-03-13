import { StyleSheet } from "react-native";

const GetKYC1ScreenStyles = (theme:any) => {
  return StyleSheet.create({
    listOuterContainer: {
      padding: 10,
      alignContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
      flex: 1,
    },

    textContainer: {
      flex: 1,
    },

    singleRowContainer: {
      flexDirection: "row",
      height: "15%",
    },

    textNumber: {
      color: theme.WHITE_COLOR,
      fontFamily: theme.POPPINS_SEMIBOLD,
    },

    textNumberCircle: {
      width: 50,
      height: 50,
      backgroundColor: theme.DARK_BLUE_COLOR,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      borderRadius: 50,
    },

    numberCircleLine: {
      width: 2,
      height: "100%",
      backgroundColor: theme.DARK_BLUE_COLOR,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },

    text1: {
      fontSize: theme.FONT_SIZE_18,
      color: theme.DEEP_BLACK_COLOR,
      fontFamily: theme.POPPINS_REGULAR,
    },

    text2: {
      fontSize: theme.FONT_SIZE_MEDIUM,
      color: theme.TEXTSTYLE_BODY_COLOR,
      textAlign: "justify",
      fontFamily: theme.POPPINS_LIGHT,
    },
    
    nextButtonContainer: {
      height: 55,
      justifyContent: "center",
    },
  });
};
export default GetKYC1ScreenStyles;