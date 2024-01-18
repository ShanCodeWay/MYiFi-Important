import { StyleSheet } from "react-native";
import Fonts from "../../../../styles/Fonts";
import Colors from "../../../../styles/Colors";



//Button 0 is Rectangle Shape Button
//Button 1 is Rounded Shape Button

export default GetCommonButtonStyles = (theme) => {

  const CommonButtonStyles = StyleSheet.create({

    parentContainer:{
      width:'100%',
      height:45,
      alignItems: "center",
      justifyContent: "center",
    },

    ButtonContainer: {
      //width:'100%',
      //height: '100%',
      //paddingHorizontal: 20,
      //backgroundColor: theme.GRAY_COLOR,
      //borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
    },

    iconContainer: {
      width:45,
      height:'100%',
      alignItems:'center',
      justifyContent:'center',
      margin:10
    },

    textContainer: {
      flex:1,
      height:'100%',
      justifyContent:'center',
    },

    buttonText: {
     marginLeft: 10,
    
    },
    
    button0OuterContainer:{
      width: "100%",
      height: 90,
      alignItems: "center",
      justifyContent: "center",


    },

  //Button 0 is Rectangle Shape Button
  //Button 1 is Rounded Shape Button
    
  
  //Button 0 is Rectangle Shape Button
  //Button 1 is Rounded Shape Button
    button1: {
      backgroundColor: theme.DARK_BLUE_COLOR,
      borderRadius: 10,
      alignItems: "center",
      justifyContent:"center",

      height:50
    },

    button1OuterContainer:{
      width: "100%",
      height: 65,
      alignItems: "center",
      justifyContent: "center",
    
    }
  });

  return CommonButtonStyles;

}