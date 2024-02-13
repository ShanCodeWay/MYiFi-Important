import { Platform, StatusBar, StyleSheet } from "react-native";

export const GetCommonStyles = (theme) => {
  
  const CommonStyles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: theme.SAFEAREA_BACKGROUND_COLOR,
    },

    //Main container style after safe area and title bar views
    mainContainer: {
      flex: 1,
      backgroundColor: theme.BACKGROUND_COLOR,
      justifyContent: "center",
      alignItems: "center",
    },

    mainParentContainer: {
      flex: 1,
      height:'100%',
      backgroundColor: theme.BACKGROUND_COLOR,
      justifyContent: "center",
      alignItems: "center",
      margin:10
    },

    topTitleContainer: {
      width: "100%",
      height: 100,
      justifyContent: "center",
      alignItems: "center",
    },

    bottombuttonContainer: {
      height: 100,
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      margin: 20,
    },

    keyboardAwareView: {
      alignItems: "center",
      flexGrow: 1,
      width: "100%",
    },

    //Common Text Styles
    textStyleH1Medium: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_ONE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      textAlign: "center",
    },

    textStyleCaption1Medium: {
      color: theme.DARK_GRAY_COLOR,
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      textAlign: "center",
    },

    textStyleCaption1MediumPO: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      textAlign: "center",
    },

    TextStyleH2Medium: {
      color: theme.TextStyleH1Color,
      fontSize: 24,
      fontFamily: theme.POPPINS_MEDIUM,
      textAlign: "center"
    },
    TextStyleH3Bold: {
      color: theme.TextStyleH3Color,
      fontSize: 20,
      fontFamily: theme.POPPINS_BOLD,
    },
    TextStyleH3Medium: {
      color: theme.TextStyleH3Color,
      fontSize: 20,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    TextStyleBody16Medium: {
      color: theme.TEXTSTYLE_BODY_COLOR,
      fontSize: 16,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    TextStyleBody14Medium: {
      color: theme.TEXTSTYLE_BODY_COLOR,
      fontSize: 14,
      fontFamily: theme.POPPINS_MEDIUM,
    },

    titleContainer: {
      flexDirection: "row",
      justifyContent: "center",
      width: "90%",
      alignItems: "center",
      height: 60,
    },

    titleContainertitleText: {
      fontFamily: theme.POPPINS_MEDIUM,
      fontSize: theme.FONT_SIZE_HEADER_ONE,
      color: theme.DARK_BLUE_COLOR,
      width: "100%",
    },

    // Amount View Styles (Eg: Rs. 34500.56)
    amountContainer: {
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
    },
    amountRsText: {
      color: theme.DARK_GRAY_COLOR,
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    amountIntegerText: {
      color: theme.DARK_GREEN_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    amountDecimalText: {
      color: theme.DARK_GREEN_COLOR,
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    balanceAmountTextContainer: {
      //flex:1,
      //height:'100%',
      flexDirection: "row",
      justifyContent:'flex-start',
      alignItems: "flex-end",
      textAlignVertical:'bottom',
    },
    textBalanceRs: {
      color: theme.DARK_GRAY_COLOR,
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      //marginLeft: 5,
      includeFontPadding:false
    },
    textBalanceIntegerAmount: {
      color: theme.DARK_GREEN_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_THREE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      includeFontPadding:false
    },
    textBalanceDecimalAmount: {
      color: theme.DARK_GREEN_COLOR,
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      includeFontPadding:false
    },
  });

  return CommonStyles;
};
