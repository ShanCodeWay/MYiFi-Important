
import { StyleSheet } from "react-native";

export default GetKYC6ScreenStyles = (theme) => {
  const KYC6ScreenStyles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
    },

    titleContainer: {
      backgroundColor: theme.BLUE_COLOR,
      padding: 15,
      alignSelf: "flex-start",
      width: "100%",
    },

    titleText: {
      fontSize: theme.FONT_SIZE_18,
      color: theme.WHITE_COLOR,
    },

    inputFieldTitleContainer: {
      backgroundColor: theme.LIGHT_BLUE_COLOR,
      padding: 10,
      alignSelf: "flex-start",
      width: "100%",
    
    },

    inputFieldTitleText: {
      fontSize: theme.FONT_SIZE_LARGE,
      color: theme.WHITE_COLOR,
    },

    text1: {
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      color: theme.DEEP_BLACK_COLOR,
    },

    text2: {
      fontSize: theme.FONT_SIZE_18,
      color: theme.DARK_GRAY_COLOR,
      marginTop: 20,
      marginLeft: 20,
    },

    text3: {
      fontSize: 18,
      color: theme.BLUE_COLOR,
      fontFamily: theme.POPPINS_BOLD,
      marginTop: 60,
      marginLeft: 20,
    },

    boxesContainer: {
      flexDirection: "row",
      marginTop: 20,
    },

    boxPicture: {
      width: 180,
      height: 180,

      marginRight: 5,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderColor: theme.GRAY_COLOR,
    },

    box: {
      width: 180,
      height: 180,
      marginRight: 5,
      justifyContent: "center",
      alignItems: "center",
    },

    boxText: {
      color: theme.DARK_GRAY_COLOR,
      marginBottom: 20,
      fontSize: theme.FONT_SIZE_LARGE,
    },
  });

  return KYC6ScreenStyles;
};