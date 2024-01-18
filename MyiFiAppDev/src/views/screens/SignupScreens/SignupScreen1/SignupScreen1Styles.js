import { StyleSheet } from "react-native";
import {Android_Theme_Dark} from "../../../../styles/Themes";
import { Android_Theme_Light } from "../../../../styles/Themes";

export const  GetSignupScreenStyles1 = (theme) => {

//Done by: Darshana 24/01/02

const SignupScreenStyles1 = StyleSheet.create({
           
    topView: {
        height         : 150,
        justifyContent : "center",
        alignItems     : "center",
        width          : '100%',
        marginTop      : -20,
    },  
    
    middleView: {
    
        flex           : 1,
        justifyContent : "center",
        alignItems     : "center",
        width          : '100%',
    },

    bottomView: {
        height         : 150,
        justifyContent : "center",
        alignItems     : "center",
    },    
    
    titleView: {
        
        width          : '80%',
        justifyContent : "center",
        alignItems     : "center",
  
        },            
    
    mainTitle: {
                fontFamily    : theme.POPPINS_SEMIBOLD,
                fontSize      : theme.FONT_SIZE_HEADER_ONE_MEDIUM,
                color         : theme.DARK_BLUE_COLOR,
                justifyContent: "center",
                alignItems    : "center",
                textAlign     : 'center',
                width         : '100%',
    },

    secondTitle:{
        fontFamily     : theme.POPPINS_MEDIUM,
        fontSize       : theme.FONT_SIZE_HEADER_TWO,
        color          : theme.DARK_GRAY_COLOR,
        justifyContent : "center",
        alignItems     : "center",
        textAlign      : 'center',
        width          : '100%',

    },

    inputView: {
        flex    : 5,
        width   : '80%',
        
        

    },
    
    logoIcon:{
        height         : 100,
        flexDirection  : 'row',
        justifyContent : "center",
        alignItems     : "center",

    },

    logo:{
        flexDirection : 'row',
        marginLeft    : 20,
        fontSize      : 20,


    },

    KeyboardAvoidingView:{
        flexGrowl  : 1,
        
    }

});

return SignupScreenStyles1;

}