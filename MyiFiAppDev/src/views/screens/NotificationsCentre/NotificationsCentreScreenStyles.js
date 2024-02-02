// NotificationsCentreScreenStyles.js
import { StyleSheet } from "react-native";

export const GetNotificationsCentreScreenStyles = (theme) => {
  const NotificationsCentreScreenStyles = StyleSheet.create({

    descriptionGray: {
      fontFamily:theme.POPPINS_MEDIUM,
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      marginBottom: 5,
      marginLeft: 10,
      color: theme.GRAY_COLOR,
   

    },
    descriptionBlack: {
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      marginBottom: 5,
      marginLeft: 10,
      color: theme.DEEP_BLACK_COLOR,
      fontFamily:theme.POPPINS_MEDIUM,

    },
    titleGray: {
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      marginBottom: 5,
      marginLeft: 10,   
      fontFamily:theme.  POPPINS_BOLD,
      color: theme.GRAY_COLOR,

    },
    titleBlack: {
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      marginBottom: 5,
      marginLeft: 10,
      fontFamily:theme.  POPPINS_BOLD,
      color: theme.DEEP_BLACK_COLOR,

    },
    middleView: {
      flex: 1,
      width: "100%",
      margin: 10,
      padding: 10,
     // backgroundColor: "red",
    },
    bottomView: {
      height: 100,
     // backgroundColor: "blue",
      width: "100%",
    },

    topLineGray: {
      backgroundColor: theme.GRAY_COLOR,
      height: 1,
      width: "100%",
      marginBottom: 5, // Adjust the margin as needed
      // Adjust the marginTop as needed
    },
    topLineBlack: {
      backgroundColor:theme.GRAY_COLOR,
      height: 1,
      width: "100%",
      marginBottom: 5,
      // Adjust the marginTop as needed
    },


    titleContainer: {
     // backgroundColor: "pink",
      width: "100%",
      height: 60,
    


    
    },
    mainTittle:{
      fontFamily:theme.  POPPINS_MEDIUM,
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      color: theme.DEEP_BLACK_COLOR,
      marginLeft:15,
      paddingTop:10,

    }
   

  });

  return NotificationsCentreScreenStyles;
};
