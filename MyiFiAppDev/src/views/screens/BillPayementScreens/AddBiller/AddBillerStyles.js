import { StyleSheet } from "react-native";
import { Android_Theme_Light } from "../../../../styles/Themes";
//Done by: Darshana 24/01/23

export const GetAddBillerStyles = (theme) => {
  const AddBillerStyles = StyleSheet.create({
    middleView: {
      flex: 1,
      width: "90%",
    },

    bottomView: {
      height: 70,
      alignItems: "center",
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
  });

  return AddBillerStyles;
};
