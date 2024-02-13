import { StyleSheet } from "react-native";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { hoverGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/gestures/hoverGesture";
//Done by: Darshana 02/02/2024

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

  middleContainerView: {
    width: "100%",
    flexDirection: "column",
  },


  containerTitleView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    
  },
  
  titleText: {
      fontFamily : theme.POPPINS_MEDIUM,
      color : theme.DEEP_BLACK_COLOR,
      fontSize : theme.FONT_SIZE_SMALL,
      textAlign: "left"
   
},  

titleIconView:{
    width: 35,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  
},

    buttonContainerLanguage: {
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      paddingVertical: "2%",
      borderRadius: 12,
      width: "100%",
      flexDirection: "row",
    },
    buttonContainer: {
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      paddingHorizontal: "5%",
      borderRadius: 12,
      width: "100%",
      minHeight: 50,
      flexDirection: "row",
    },

    buttonOuterContainer: {
      marginVertical: 5,
      justifyContent: "center",
    },
    buttonMain:{
       width:"100%",
       height:"100%",
       flexDirection: "row",
       justifyContent: "space-between",
    },
    buttonLeft:{
      width:"80%",
      flexDirection: "column",
      justifyContent: "center",
      
    },
    buttonLeftFirst:{
      
    },
    buttonLeftSecond:{
      
      
    },
    notificationText:{
      color:Android_Theme_Light.DARK_BLUE_COLOR,
      fontFamily: Android_Theme_Light.POPPINS_MEDIUM,
      fontSize:Android_Theme_Light.FONT_SIZE_15,

      textAlign: 'left',
      
    },
    notificationTextView:{
      flexDirection: 'row',
      
      justifyContent: 'space-between',
     
      
    },

    buttonRight:{
      width:"20%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "left",
    },

    buttonLeftFirstText:{
      fontFamily: Android_Theme_Light.POPPINS_MEDIUM,
      fontSize:Android_Theme_Light.FONT_SIZE_15,
      color:Android_Theme_Light.DARK_BLUE_COLOR,
      justifyContent: "center",  
    },
    buttonLeftSecondText:{
      fontFamily: Android_Theme_Light.POPPINS_MEDIUM,
      fontSize:Android_Theme_Light.FONT_SIZE_15,
      color:Android_Theme_Light.DARK_GRAY_COLOR,
      justifyContent:'space-between'
      
    },


    /*Title_Bar_Styles */
    titleBarRowView: {
      flexDirection: "row",
      width: "100%",
      alignItems:"center",
       height: 60,
      justifyContent: "center",
      
    },

  titleBarRowViewFirstColumn:{ 
    
   width:60,
   alignItems:"center",
  },
  titleBarRowViewSecondColumn: {
   
    flex: 1,
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
  },
  titleBarRowViewThirdColumn:{ 
    
    width:60,
    alignItems:"center",
  },
    mainTitleTextView:{
      alignItems:"center",
    },
    mainTitleText:{
      fontFamily: theme.POPPINS_MEDIUM,
      fontSize: theme.FONT_SIZE_HEADER_ONE,
      color: theme.WHITE_COLOR,
      width: "100%",
      paddingHorizontal: 10,
      
      marginTop: 10,
    },

    titleBarView: {
     
    },
    
    titleBarWrapper: {
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      overflow: 'hidden', 
      alignItems: "center",  
    },
    greetingView: {
      flex: 1,
      marginLeft: 10,
     },

    greetingViewFirstRow:{
      width: '95%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
    },
  
    textUserDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '75%',
      justifyContent: 'flex-start', 
     
    },

    textUserName: {
      fontFamily: theme.POPPINS_SEMIBOLD,
      fontSize: theme.FONT_SIZE_BODY_ONE_REGULAR,
      color: theme.WHITE_COLOR,
      alignItems: "center", 
     
      
    },
    textUserEmail: {
      fontFamily: theme.POPPINS_SEMIBOLD,
      fontSize: theme.FONT_SIZE_SMALL,
     color: theme.WHITE_COLOR,
     alignItems: "center",  
     
    },
    textLastLog: {
      color: theme.WHITE_COLOR,
      fontSize: theme.FONT_SIZE_SMALL,
      fontFamily: theme.POPPINS_MEDIUM,
       alignItems: "center", 
    },

    textDate : {
      color: theme.WHITE_COLOR,
      fontSize: theme. FONT_SIZE_SMALL, 
      fontFamily: theme.POPPINS_MEDIUM, 
      alignItems: "center",  
    },

    logoView:{
      justifyContent: 'center',
      alignItems: 'center',
      
      
    }
    ,

    logoTextView:{
    position:'absolute',
    alignItems: 'center',
    
   
    }
    ,

    logoText:{
      marginTop: 80,
      color: theme.DARK_BLUE_COLOR,
      fontSize: theme. FONT_SIZE_SMALL, 
      fontFamily: theme.POPPINS_MEDIUM, 
      alignItems: 'center',
     
    },

      //Input Filed View
      labelText: {
        fontFamily: theme.POPPINS_MEDIUM,
        color: theme.DEEP_BLACK_COLOR,
        fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      },
  
      parentContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
        height: 63,
      },
  
      labelContainer: {
        alignItems: "flex-start",
        width: "100%",
        height: 15,
      },
  
      inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: theme.GRAY_COLOR,
      },
      inputFieldText: {
        flex: 1,
        fontFamily : theme.POPPINS_REGULAR,
        color : theme.DEEP_BLACK_COLOR,
        fontSize : theme.FONT_SIZE_LARGE,
        textAlign: "left"
      },
      iconContainer: {
        width: 40,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      },
      resetPasswordText: {
        flex: 1,
        fontFamily : theme.POPPINS_MEDIUM,
        color : theme.DEEP_BLACK_COLOR,
        fontSize : theme.FONT_SIZE_SMALL,
        textAlign: "left"
      },

        /*exit View */


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
        exitView: {
        
          width:300,
          backgroundColor: Android_Theme_Light.BACKGROUND_COLOR,
          padding: 20,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        },
        exitContainer: {
          marginBottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
        exitTitle: {
          
          fontFamily: theme.POPPINS_MEDIUM,
          color: theme.DEEP_BLACK_COLOR,
          fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
          textAlign: 'right',
          justifyContent: 'center',
          alignItems: 'center',
          
        },
        exitTextContainer: {
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'flex-end',
          backgroundColor:'red'
         },

        exitText: {
          
          fontFamily: theme.POPPINS_BOLD,
          color: theme.DEEP_BLACK_COLOR,
          fontSize: theme.FONT_SIZE_MEDIUM,
          marginBottom: 5,
        },
        exitItem: {
          fontFamily: theme.POPPINS_MEDIUM,
          color: theme.DEEP_BLACK_COLOR,
          fontSize: theme.FONT_SIZE_MEDIUM,
          marginBottom: 5,
        },
        bottomButtonView: {
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          borderRadius: 15,
          height: 70,
          
        },

        bottomButton: {

        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 15,
        },

        buttonText: {
          color: 'white',
        },
    


    


});

return SettingsScreenStyles;
}
