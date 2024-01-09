
import { StyleSheet } from "react-native";
import {Android_Theme_Dark} from "../../styles/Themes";
import Fonts from "../../../styles/Fonts";

const SplashScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
      },
      upperSection: {
        flex: 1,

        justifyContent: "flex-end",
        alignItems: "flex-start",
        fontFamily: Fonts.POPPINS_BOLD,

       
      },
      lowerSection: {
        flex: 0.9,
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
})

export default SplashScreenStyles;