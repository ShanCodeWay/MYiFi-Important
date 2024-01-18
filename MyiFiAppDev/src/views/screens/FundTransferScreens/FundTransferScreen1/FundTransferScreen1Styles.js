import { StyleSheet } from "react-native";
import { Android_Theme_Light } from "../../../../styles/Themes";
import Fonts from "../../../../styles/Fonts";
//Done by: Darshana 24/01/02

export const  GetFundTransferScreen1Styles = (theme) => {

const FundTransferScreen1Styles = StyleSheet.create({
           
    topView: {
        height         : 150,
        justifyContent : "center",
        alignItems     : "center",
        width          : '100%',
        marginTop      : -20,
    },  
    
    middleView: {
        flex         : 1,
        elevation    : 10,
        marginLeft   : 20,
        marginRight  : 20,
        
       
    },

    bottomView: {
        height               : 140,
        justifyContent       : "center",
        alignItems           : "center",
        borderTopEndRadius   : 40,
        borderTopStartRadius : 40,
        backgroundColor      : theme.GRAY_COLOR,
        
      
        
    },    
    
    titleView: {
        
        width            : '80%',
        justifyContent   : "center",
        alignItems       : "center",
  
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
        flex           : 5,
        width          : '95%',
        justifyContent : "center",
        alignItems     : "center",
        
        

    }
        ,
    logoIcon:{
        height          : 100,
        flexDirection   : 'row',
        justifyContent  : "center",
        alignItems      : "center",

    },

    logo:{
        flexDirection   : 'row',
        marginLeft      : 20,
        fontSize        : 20,


    },

    KeyboardAvoidingView:{
        flexGrowl        : 1,
        
    },

    inputContainer: {
        marginTop        : 20,
        borderWidth      : 3,
        borderRadius     : 10,
        height           : 70
      },
     
      Button: {
        flexDirection    : 'row',

    },

    bottomView1: {

        flexDirection    : 'row',
        width            : '80%',
        
        justifyContent   : 'space-between',
    },    
    bottomView2: {
        
        width            : '40%',
        justifyContent   : "center",
    },  
    
    bottomView3: {
        justifyContent   : "center",
        alignItems       : "center",
        marginLeft       : 40,
        marginRight      : 40,
    }, 

      titleText: {
        fontFamily : theme.POPPINS_BOLD,
        color      : theme.DARK_BLUE_COLOR,
        fontSize   : theme.FONT_SIZE_MEDIUM,
        
  
        },  

    

bankView:{
    justifyContent  : "center",
    alignItems      : "center",
    width           : "100%",
    marginLeft      : 10,
    

},

});

return FundTransferScreen1Styles;
}
