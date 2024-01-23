import { StyleSheet } from "react-native";

export default GetSignup_PasswordScreenStyles = (theme) => {

    const Signup_PasswordScreenStyles = StyleSheet.create({

        topView: {
            height         : 150,
            justifyContent : "center",
            alignItems     : "center",
            width          : '100%',
            marginTop      : -20,
        },  
        
        middleView: {
        
            flex           : 1,
            marginTop      : 20,
            margin         : 20,
            
            
        
        },

        bottomView: {
            height        : 70,
            alignItems    : "center",
            
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

    return Signup_PasswordScreenStyles;
}