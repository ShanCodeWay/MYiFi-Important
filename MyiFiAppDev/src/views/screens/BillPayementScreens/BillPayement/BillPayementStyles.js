import { StyleSheet } from "react-native";
import { Android_Theme_Light } from "../../../../styles/Themes";
//Done by: Darshana 24/01/22

export const GetBillPayementStyles = (theme) => {
  const BillPayementStyles = StyleSheet.create({
    topView: {
      height: 150,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginTop: -20,
    },

    middleView: {
      flex: 1,
      width: "90%",
      justifyContent: "center",
    },

    bottomView: {
      height: 70,
      alignItems: "center",
    },
    modalView: {
      width: "100%",
      height: 130,
      justifyContent: "center",
      alignItems: "center",
      borderTopEndRadius: 40,
      borderTopStartRadius: 40,
      backgroundColor: theme.GRAY_COLOR,
      zIndex: 1,
    },

    modalViewBackground: {
      position: "relative",
      alignItems: "center",
      borderTopEndRadius: 40,
      borderTopStartRadius: 40,
      backgroundColor: "black",
    },

    titleView: {
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
    },

    mainTitle: {
      fontFamily: theme.POPPINS_SEMIBOLD,
      fontSize: theme.FONT_SIZE_HEADER_ONE_MEDIUM,
      color: theme.DARK_BLUE_COLOR,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
    },

    secondTitle: {
      fontFamily: theme.POPPINS_MEDIUM,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      color: theme.DARK_GRAY_COLOR,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
    },

    inputView: {
      flex: 5,
      width: "95%",
      justifyContent: "center",
      alignItems: "center",
    },
    logoIcon: {
      height: 100,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },

    logo: {
      flexDirection: "row",
      marginLeft: 20,
      fontSize: 20,
    },

    KeyboardAvoidingView: {
      flexGrowl: 1,
    },

    inputContainer: {
      marginTop: 20,
      borderWidth: 3,
      borderRadius: 10,
      height: 70,
    },

    Button: {
      flexDirection: "row",
    },

    bottomView1: {
      flexDirection: "row",
      width: "80%",

      justifyContent: "space-between",
    },
    bottomView2: {
      width: "40%",
      justifyContent: "center",
    },

    bottomView3: {
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 40,
      marginRight: 40,
    },

    titleText: {
      fontFamily: theme.POPPINS_BOLD,
      color: theme.DARK_BLUE_COLOR,
      fontSize: theme.FONT_SIZE_MEDIUM,
    },

    bankView: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },

    textTransfer: {
      fontFamily: theme.POPPINS_SEMIBOLD,
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      color: theme.DARK_BLUE_COLOR,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
    },

    addButonView: {
      flex: 1,
      flexDirection: "row",
      paddingLeft: 14,
      justifyContent: "center",
    },

    toPayee: {
      flex: 3,
      marginRight: 10,
      justifyContent: "center",
    },

    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "80%",
    },

    button: {
      flex: 1,
      width: "50%",
      padding: 10,
    },

    spinnerContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
    },

    spinner: {
      flex: 3,
      width: "100%",
    },

    addbutton: {
      flex: 1,
      width: "100%",
      marginLeft: 8,
    },
    expandContainer: {
      justifyContent: "center",
      width: "90%",
    },
  });

  return BillPayementStyles;
};
