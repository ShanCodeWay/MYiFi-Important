import { StyleSheet } from "react-native";
import { Android_Theme_Light } from "../../../../styles/Themes";
//Done by: Darshana 26/01/2024

export const  GetSettingsScreenStyles = (theme) => {


const transparentBackgroundColor    = theme.BACKGROUND_COLOR + '33';
const SettingsScreenStyles = StyleSheet.create({
           
    topView: {
        height         : 150,
        justifyContent : "center",
        alignItems     : "center",
        width          : '100%',
        
    },  
    
    middleView: {
        flex           : 1,
        width          : '95%',
        
       
    },

    bottomView: {
        paddingTop : 10,
        height     : 100,
        alignItems : "center",
        
        
      
        
      
        
    },   
   
    
    
    KeyboardAvoidingView:{
        flexGrowl      : 1,
        
    },



  button: {
    width           : 120,
    height          : 50,
    borderRadius    : 20,
    borderWidth     : 2,
    
    marginHorizontal: 0,
    justifyContent  : "center",
    alignItems      : "center",
  },

  buttonText: {
    textAlign        : 'center',
    fontFamily       : theme.POPPINS_MEDIUM,
    fontSize         : theme. FONT_SIZE_BODY_ONE_REGULAR,
    
  },


  middleContainerView: {
    width: "100%",
    
    
  },

  titleText: {
    fontFamily: theme.POPPINS_BOLD,
    color     : theme.DARK_BLUE_COLOR,
    fontSize  : theme.FONT_SIZE_MEDIUM,
    

    },  

    buttonContainer: {
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      paddingHorizontal: "5%",
      borderRadius: 12,
      width: "100%",
      height: 50,
      flexDirection: "row",
    },

    buttonOuterContainer: {
      marginVertical: 5,
      justifyContent: "center",
    },


});

return SettingsScreenStyles;
}
