import { StyleSheet } from "react-native";
//Done by: Darshana 02/02/2024
export default GetResetPasswordScreenStyles = (theme) => {

    const ResetPasswordScreenStyles = StyleSheet.create({ 
        
        middleView: {
            flex : 1,
            marginTop : 20,
            margin : 20,
        },

        bottombuttonContainer: {

            height: 100,
            width:'100%',
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginBottom:20,
            backgroundColor: 'red`'
          }, 

          bottomView: {
            paddingTop: 10,
            height: 120,
            alignItems: "center",
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
            
        },

        /*POLICY View */


        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(6, 15, 61, 0.60)', 
            justifyContent: 'center',
            alignItems: 'center',
          },
          policyView: {
            width: 300,
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
          },
          policyContainer: {
           
          },
          policyTitleView: {
            flexDirection: 'row', 
            textAlign: 'right',
           
          },
          policyTitle: {
            
            fontFamily: theme.POPPINS_MEDIUM,
            color: theme.DEEP_BLACK_COLOR,
            fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
            textAlign: 'right',
            justifyContent: 'center',
            alignItems: 'center',
            
          },
          policyTextContainer: {
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'flex-end' },

          policyText: {
            flex:1,
            fontFamily: theme.POPPINS_BOLD,
            color: theme.DEEP_BLACK_COLOR,
            fontSize: theme.FONT_SIZE_MEDIUM,
            marginBottom: 5,
          },
          policyItem: {
            fontFamily: theme.POPPINS_MEDIUM,
            color: theme.DEEP_BLACK_COLOR,
            fontSize: theme.FONT_SIZE_10,
            marginBottom: 5,
          },
        
          bottomButton: {
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 15,
            
          },    
          bottomButtonView: {
            width: '100%',
            borderRadius: 15,
            
          },
          buttonText: {
            color: 'white',
          },

          crossIconButtonContainer: {
            position: 'absolute',
            top: 0,
            right: 0,
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
          },
          
        
    });

    return ResetPasswordScreenStyles;
}