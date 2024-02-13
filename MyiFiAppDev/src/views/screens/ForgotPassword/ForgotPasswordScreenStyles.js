import { StyleSheet } from "react-native";

export default GetForgotPasswordScreenStyles = (theme) => {
  return StyleSheet.create({
    middleContainer: {
      flex: 1,
      //width: "90%",
      justifyContent: "center",
      alignItems: "center",
      //backgroundColor: "",
      marginLeft: 20,
      marginRight: 20,
    },

    textStyleH1Medium: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_30,
      fontFamily: theme.POPPINS_MEDIUM,
      textAlign: "center",
    },
  });
};
