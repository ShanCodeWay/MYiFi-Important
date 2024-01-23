import { StyleSheet } from "react-native";
import { Android_Theme_Light } from "../../../styles/Themes";

export default GetTransferMoneyScreenStyles = (theme) => {
  return StyleSheet.create({
    transferFromContainer: {
      flex: 1,
      //backgroundColor: "yellow",
      width: "100%",
      justifyContent: "space-evenly",
      padding: 10
    },

    transferToContainer: {
      flex: 4,
      //backgroundColor: "white",
      width: "100%",
      justifyContent: "space-evenly",
      padding: 10
    },

    remarksContainer: {
      flex: 1,
      //backgroundColor: "red",
      width: "100%",
      justifyContent: "flex-start",
      padding: 10
    },

    doubleButtonContainer: {
      height: 80,
      //backgroundColor: "pink",
      width: "100%",
      justifyContent: "space-around",
      flexDirection: "row",
      padding: 10
    },

    nextButtonContainer: {
      height: 60,
      width: "100%",
      //backgroundColor: "green",
      justifyContent: "flex-end"
    },

    h1Text: {
      color: theme.DARK_GRAY_COLOR,
      fontFamily: theme.POPPINS_MEDIUM,
      fontSize: theme.FONT_SIZE_LARGE,
    },

    h2Text: {
      color: theme.DARK_GRAY_COLOR,
      fontFamily: theme.POPPINS_MEDIUM,
      fontSize: theme.FONT_SIZE_MEDIUM,
      alignSelf: "flex-end"
    },
  });
};
