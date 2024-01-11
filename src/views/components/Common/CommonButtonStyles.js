import { StyleSheet } from "react-native";
import Fonts from "../../../styles/Fonts";
import Colors from "../../../styles/Colors";
import { DefaultTheme } from "@react-navigation/native";

//Done by: Darshana 24/01/09

//Button 0 is Rectangle Shape Button
//Button 1 is Rounded Shape Button

const CommonButtonStyles = StyleSheet.create({

  text: {
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 20,
    alignItems: "center",
    textAlign: "center",
    color: Colors.BLUE_ACCENT,
  },
//Button 0 is Rectangle Shape Button
//Button 1 is Rounded Shape Button
  button0: {
    paddingHorizontal: 20,
    flexDirection: "row",
    backgroundColor: Colors.GRAY,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    height:50
    
  },
  button0OuterContainer:{
    width: "100%",
    height: 90,
    alignItems: "center",
    justifyContent: "center",


  },
//Button 0 is Rectangle Shape Button
//Button 1 is Rounded Shape Button
  button1: {
    backgroundColor: Colors.Blue,
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

export default CommonButtonStyles;