import { StyleSheet } from "react-native";
import Colors  from "../../../styles/Colors";

const LoginScreenStyles = StyleSheet.create({
  ParentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyleSignIn: { color: Colors.BLACK_DEEP, fontSize: 40 },
  ContainerSignInDescription: {
    width: 300,
    marginTop: 20,
    marginBottom: 20,
  },
  textStyleSignInDescription: { color: "#7C8DA6", textAlign: "center" },

  ContainerBottomDescription: {
    width: 200,
    marginTop: 20,
    marginBottom: 20,
  },
  textStyleBottomDescription: {
    color: "#7C8DA6",
    textAlign: "center",
    fontSize: 12,
  },

});

export default LoginScreenStyles;
