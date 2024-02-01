import { StyleSheet } from "react-native";

export default GetResetPasswordScreenStyles = (theme) => {

    const ResetPasswordScreenStyles = StyleSheet.create({ 
        
        middleView: {
            flex : 1,
            marginTop : 20,
            margin : 20,
        },

        bottombuttonContainer: {

            //height: 100,
            width:'100%',
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginBottom:20,
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

    return ResetPasswordScreenStyles;
}