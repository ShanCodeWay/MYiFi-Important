import { StyleSheet } from "react-native";
import {Android_Theme_Dark} from "../../styles/Themes";
import Fonts from "../../../styles/Fonts";

export default GetSplashScreenStyles = (theme) => {

  const SplashScreenStyles = StyleSheet.create({
    
    topLogoContainer: {
      flex: 2,
      width: '100%',
      backgroundColor: theme.BACKGROUND_COLOR,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      paddingStart:20,
    },
    
    bottomNameContainer: {
      flex:1,
      width: '100%',
      backgroundColor: theme.SPLASH_BOTTOM_COLOR,
      alignItems: "topleft",
    },

    titleView: {
      flex:1,
    },

    footerView: {
      height:40,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginLeft:20
    },

    titleText:{
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      fontFamily:theme.POPPINS_MEDIUM,
      color: theme.BACKGROUND_COLOR,
      marginLeft: 20,
      marginTop:0,
    },

    descriptionTest:{
      fontSize: theme.FONT_SIZE_BODY_TWO_REGULAR,
      fontFamily: theme.POPPINS_REGULAR,
      color: theme.BACKGROUND_COLOR,
      //marginTop: 5,
      marginLeft: 20,
        
    },

    footerText:{
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      color: theme.WHITE_COLOR,
      marginTop: 0,
      marginLeft: 20,  
    },

  });

  return SplashScreenStyles;
};