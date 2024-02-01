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

  middleContainerView: {
    width: "100%",
  },


  containerTitleView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    
  },
  
  titleText: {
    fontFamily: theme.POPPINS_BOLD,
    color     : theme.DARK_BLUE_COLOR,
    fontSize  : theme.FONT_SIZE_MEDIUM,
   
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
      paddingHorizontal: "5%",
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
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      height: 60,
      justifyContent: "space-between",
      paddingHorizontal: 10,
    },

    mainTitleTextView:{
      
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
      paddingLeft: 10, 
     },

    greetingViewFirstRow:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",  
      
    },
  
    textUserDetails:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      alignItems: "center",  
      
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
      textAlign: 'right',
      alignItems: "center",   
     
    },

    textDate : {
      color: theme.WHITE_COLOR,
      fontSize: theme. FONT_SIZE_SMALL, 
      fontFamily: theme.POPPINS_MEDIUM, 
      alignItems: "center",  
    },

    logoView:{
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
    }
    ,

    logoTextView:{
      position: 'absolute',
    }
    ,

    logoText:{
      color: theme.DARK_BLUE_COLOR,
      fontSize: theme. FONT_SIZE_SMALL, 
      fontFamily: theme.POPPINS_MEDIUM, 
     
    }
    


    


});

return SettingsScreenStyles;
}
