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
      paddingStart:10,
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
    },

    titleText:{
      fontSize: theme.FONT_SIZE_HEADER_ONE,
      fontWeight: "bold",
      color: theme.WHITE_COLOR,
      marginLeft: 10,
      marginTop:20,
    },

    descriptionTest:{
      fontSize: theme.FONT_SIZE_SMALL,
      color: theme.WHITE_COLOR,
      marginTop: 5,
      marginLeft: 10,
        
    },

    footerText:{
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      color: theme.WHITE_COLOR,
      marginTop: 0,
      marginLeft: 10,  
    },

  });

  return SplashScreenStyles;
};