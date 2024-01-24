import { StyleSheet } from "react-native";
import Colors  from "../../../styles/Colors";
import { Android_Theme_Light } from "../../../../styles/Themes";

export default GetLoginScreenStyles = (theme) => {

  const LoginScreenStyles = StyleSheet.create({
  
    middleContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginLeft:20,
      marginRight:20
    },

    textStyleSignIn: { color: Colors.BLACK_DEEP, fontSize: 40 },
    ContainerSignInDescription: {
      width: 300,
      marginTop: 20,
      marginBottom: 20,
    },
    textStyleSignInDescription: { color: "#7C8DA6", textAlign: "center" },

    ContainerBottomDescription: {
      flexDirection: 'row',
      //width:'100%',
      marginTop: 20,
      //marginBottom: 20,
      alignItems:'center',
      justifyContent:'center',
    },
    textStyleBottomDescription: {
      //color: "#7C8DA6",
      textAlign: "center",
      fontSize: 12,
      fontFamily:theme.POPPINS_MEDIUM
    },

  });

  return LoginScreenStyles;
}
