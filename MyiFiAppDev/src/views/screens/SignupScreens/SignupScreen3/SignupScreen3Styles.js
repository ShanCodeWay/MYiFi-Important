import { StyleSheet } from "react-native";
import {Android_Theme_Dark} from "../../../../styles/Themes";

export const  GetSignupScreenStyles3 = (theme) => {
//Done by: Darshana 24/01/02

const SignupScreenStyles3 = StyleSheet.create({
                
    topView: {
        height: 150,
        width : '100%',
    },  
    
    middleView: {
    
        flex          : 1,
        marginLeft    : 30,
        marginRight   : 30,
        justifyContent: "center",
        alignItems    : "center",
        
     
        
    },

    bottomView: {
        height         : 150,
        justifyContent : "center",
        alignItems     : "center",
    },    
    
    titleView: {
        
        width          : '100%',
        justifyContent : "center",
        alignItems     : "center",
       
        },            
    
    mainTitle: {
                fontFamily     :theme.POPPINS_SEMIBOLD,
                fontSize       :theme.FONT_SIZE_HEADER_ONE_MEDIUM,
                color          :theme.DARK_BLUE_COLOR,
                justifyContent : "center",
                alignItems     : "center",
                textAlign      : 'center',
                width          : '70%',
    },

    secondTitle:{
        fontFamily     : theme.POPPINS_MEDIUM,
        fontSize       : theme.FONT_SIZE_HEADER_TWO,
        color          : theme.DARK_GRAY_COLOR,
        marginBottom   : 10,
        marginTop      : 12,
        justifyContent : 'center',
        alignItems     : 'center',
        textAlign      : 'center',
        marginLeft     : 10,
        marginRight    : 10,
        

    },

    logoIcon:{
        height        : 100,
        flexDirection : 'row',
        justifyContent: "center",
        alignItems    : "center",

    },

    logo:{
        flexDirection : 'row',
        marginLeft    : 20,
        fontSize      : 20,


    },

    KeyboardAvoidingView:{
        flexGrowl : 1,
        
    },
    textOtp: {
        fontSize   : theme.FONT_SIZE_HEADER_ONE,
        color      : theme.BLACK_COLOR,
        textAlign  : "center",
        
      },
    
      enterText: {   
      },
      input: {
      },
      timer: {
        fontSize       : 16,
        marginBottom   : 10,
        justifyContent : "center",
        alignItems     : "center",
        color          : theme.WHITE_COLOR,
        
       
      
      },
      timerOuter: {
        backgroundColor : theme.LIGHT_BLUE_COLOR,
        width           : 150,
        height          : 60,
        marginTop       : 20,
        borderRadius    : 10,
        justifyContent  : "center",
        alignItems      : "center",
  
     
      },
  
      resendText: {
        fontSize : theme.FONT_SIZE_LARGE,
        color    : theme.BLACK_COLOR,
        
      },
      

});

return SignupScreenStyles3;
}