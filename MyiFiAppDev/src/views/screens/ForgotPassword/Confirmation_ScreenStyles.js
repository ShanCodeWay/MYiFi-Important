import { StyleSheet } from "react-native";

export default GetConfirmation_ScreenStyles = (theme) => {
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

    /*POLICY View */

    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent black background
      justifyContent: "center",
      alignItems: "center",
    },
    policyView: {
      width: 300,
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
    },
    policyContainer: {
      marginBottom: 10,
      alignSelf: "flex-end"
    },
    policyTitle: {
      fontFamily: theme.POPPINS_MEDIUM,
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      textAlign: "right",
      justifyContent: "center",
      alignItems: "center",
    },
    policyTextContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
    },

    policyText: {
      fontFamily: theme.POPPINS_BOLD,
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_MEDIUM,
      marginBottom: 5,
    },
    policyItem: {
      fontFamily: theme.POPPINS_MEDIUM,
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_MEDIUM,
      marginBottom: 5,
    },

    bottomButton: {
      alignSelf: "flex-end",
      padding: 10,
      borderRadius: 15,
    },
    buttonText: {
      color: "white",
    },
  });
};
