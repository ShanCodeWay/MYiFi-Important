import { StyleSheet } from 'react-native';

export default GetCommonCardButtonStyles = (theme) => {

  return StyleSheet.create({

    buttonParentContainer: {
      marginVertical: 5,
      justifyContent: "center",
    },
    
    buttonContainer: {
      width: "100%",
      height: "100%",
      alignContent: "center",
      alignItems: "center",
      //paddingHorizontal: "5%",
      borderRadius: 12,
      flexDirection: "row",
    },

    iconView: {
      width:50,
      height:'100%',
      justifyContent: "center",
      alignItems: "center",
    },

    textView: {
      flex:1,
      height:'100%',
      justifyContent: "center",
      alignItems: 'flex-start'
    },

    buttonText: {
      color: theme.BACKGROUND_COLOR,
      fontSize: theme.FONT_SIZE_BODY_ONE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
    },

    amountView: {
      flex:1,
      height: "100%",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      flexDirection:'row',
      marginRight:10,
      marginBottom:10
    },

    amountRsText: {
      color: theme.DARK_GREEN_COLOR,
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
    },

    amountIntegerText: {
      color: theme.DARK_GREEN_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_THREE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      includeFontPadding:false
    },
    amountDecimalText: {
      color: theme.DARK_GREEN_COLOR,
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
    },
  
  });
};


