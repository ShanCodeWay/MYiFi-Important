import { StyleSheet } from "react-native";
import {Android_Theme_Dark} from "../../styles/Themes";
import Fonts from "../../../styles/Fonts";

export const GetSplashScreenStyles = (theme) => {

  const SplashScreenStyles = StyleSheet.create({
    
    topLogoContainer: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      fontFamily: theme.POPPINS_BOLD,
      backgroundColor: theme.BACKGROUND_COLOR
    },
    
    bottomNameContainer: {
      flex:2,
      backgroundColor: '#00003c',
      alignItems: "topleft",
    },

    svgimage: { 
      marginLeft: 20,
      marginBottom:1, 
    },

    text1:{
      fontSize: 35,
      fontWeight: "bold",
      color: 'white',
      marginLeft: 20,
      marginTop:20,
    },

    text2:{
      fontSize: 14,
      color: 'white',
      marginTop: 10,
      marginLeft: 20,
        
    },

    text3:{
      fontSize: 25,
      color: 'white',
      fontWeight: '600',
      marginTop: 60,
      marginLeft: 20,  
    },

  });

  return SplashScreenStyles;
};