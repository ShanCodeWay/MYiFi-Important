import { Platform, StatusBar, StyleSheet } from "react-native";
import Fonts from "./Fonts";
import Theme from "./Themes"


export const GetCommonStyles = (theme) => {
  
  const CommonStyles = StyleSheet.create({
    
    safeAreaView: {
      flex: 1,
      backgroundColor: theme.SAFEAREA_BACKGROUND_COLOR,
    },

    //Main container style after safe area and title bar views
    mainContainer: {
      flex: 1,
      backgroundColor: theme.WHITE_COLOR,
      justifyContent: "center",
    },

    ScreenUpperSectionStyle: {
  
      justifyContent: "center",
      alignItems: "center",
    },

    //Common Text Styles
    TextStyleH1Medium: {
      color: theme.TextStyleH1Color,
      fontSize: 40,
      fontFamily: Fonts.POPPINS_MEDIUM,
    },

    TextStyleH2Medium: {
      color: theme.TextStyleH1Color,
      fontSize: 24,
      fontFamily: Fonts.POPPINS_MEDIUM,
    },
    TextStyleH3Bold: {
      color: theme.TextStyleH3Color,
      fontSize: 20,
      fontFamily: Fonts.POPPINS_BOLD,
    },
    TextStyleH3Medium: {
      color: theme.TextStyleH3Color,
      fontSize: 20,
      fontFamily: Fonts.POPPINS_MEDIUM,
    },
    TextStyleBody16Medium: {
      color: theme.TEXTSTYLE_BODY_COLOR,
      fontSize: 16,
      fontFamily: Fonts.POPPINS_MEDIUM,
    },


    TextStyleCaption12Medium: {
      color: theme.TextStyleCaptionColor,
      fontSize: 12,
      fontFamily: Fonts.POPPINS_MEDIUM,
    },
    TextStyleBody14Medium: {
      color: theme.TEXTSTYLE_BODY_COLOR,
      fontSize: 14,
      fontFamily: Fonts.POPPINS_MEDIUM,
    },
  });

  return CommonStyles;
};
