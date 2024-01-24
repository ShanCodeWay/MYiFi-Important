import { StyleSheet } from "react-native";
import Colors from "../../../../styles/Colors";
import Fonts from "../../../../styles/Fonts";

import { Android_Theme_Light } from "../../../../styles/Themes";

export default GetCommonInputFieldStyle = (theme) => {

  const CommonInputFieldStyles = StyleSheet.create({

    labelText: {
      fontFamily : theme.POPPINS_BOLD,
      color      : theme.DARK_BLUE_COLOR,
      fontSize   : theme.FONT_SIZE_MEDIUM,
    },
    
    parentContainer: {
      flexDirection: "column",
      alignItems: "flex-start",
      //height: 100,
    },
  
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      width:'100%',
      height:48,
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