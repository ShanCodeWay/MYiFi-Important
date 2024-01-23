import { StyleSheet } from "react-native";

export const GetKYC1ScreenStyles = (theme) => {
  const KYC1ScreenStyles = StyleSheet.create({
    listOuterContainer: {
      padding: 10,
      //justifyContent: "space-between",
      alignContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
      flex: 1,
      // backgroundColor: 'blue',
    },
    textContainer: {
      flex:1,
      //backgroundColor: 'blue',
    },
    singleRowContainer: {
      flexDirection: "row",
      // alignContent: "center",
      // alignItems: "center",
      //width: '100%',
      height: '15%',
   //backgroundColor: 'pink',
    },
    textNumber: {
      color: theme.WHITE_COLOR,
      fontFamily: theme.POPPINS_SEMIBOLD
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
      height: '100%',
      backgroundColor: theme.DARK_BLUE_COLOR,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
    text1: {
      fontSize: theme.FONT_SIZE_18,
      color: theme.DEEP_BLACK_COLOR,
      fontFamily: theme.POPPINS_REGULAR
    },
    text2: {
      fontSize: theme.FONT_SIZE_MEDIUM,
      color: theme.TEXTSTYLE_BODY_COLOR,
      // fontFamily: theme.POPPINS_MEDIUM,
      textAlign: 'justify',
      fontFamily: theme.POPPINS_LIGHT
    },
    nextButtonContainer: {
      // backgroundColor: 'pink',
      height: 55,
      justifyContent: "center",
    },
  });

  return KYC1ScreenStyles;
};
