import { StyleSheet } from "react-native";
import Colors from "../../../../styles/Colors";
import Fonts from "../../../../styles/Fonts";

import { Android_Theme_Light } from "../../../../styles/Themes";

export default GetCommonInputFieldStyle = (theme) => {

  const CommonInputFieldStyles = StyleSheet.create({

    labelText: {
      fontFamily : theme.POPPINS_MEDIUM,
      color : theme.DEEP_BLACK_COLOR,
      fontSize : theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
    },
    
    parentContainer: {
      flexDirection: "column",
      alignItems: "flex-start",
      height: 63,
    },

    labelContainer: {
      alignItems: 'flex-start',
      width:'100%',
      height:15,
    },
  
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      width:'100%',
      flex:1,
      borderBottomWidth: 1,
      borderBottomColor: theme.GRAY_COLOR,
    },
    inputFieldText: {
      flex: 1,
      //padding: 8,
      //width:'100%',
      //height:'100%',
      color:theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_BODY_ONE_REGULAR,
      fontFamily: theme.POPPINS_REGULAR,
      paddingHorizontal:0,
    },
    iconContainer: {
      width: 40,
      height: '100%',
      //marginLeft: 8,
      alignItems:'center',
      justifyContent:'center'
    },
   
  });

  return CommonInputFieldStyles;

}