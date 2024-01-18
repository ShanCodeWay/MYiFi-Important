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
    },

    topTitleContainer: {
      width: '100%',
      height:100,
      justifyContent: "center",
      alignItems: "center",
    },

    keyboardAwareView: {
      //alignItems: "center",
      flexGrow: 1,
    },

    //Common Text Styles
    textStyleH1Medium: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_ONE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      textAlign:'center'
    },

    textStyleCaption1Medium: {
      color: theme.DARK_GRAY_COLOR,
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      textAlign:'center'
    },

    TextStyleH2Medium: {
      color: theme.TextStyleH1Color,
      fontSize: 24,
      fontFamily: theme.POPPINS_MEDIUM,
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
  });

  return CommonStyles;
};
