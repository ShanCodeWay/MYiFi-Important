import { StyleSheet } from "react-native";

//Done by : Dinuranga 1/2/2024
export default GetCreateFDScreenStyles = (theme) => {
  return StyleSheet.create({
    topView: {
      height: 150,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    textInterest: {
      color: theme.WHITE_COLOR,
      fontFamily: theme.POPPINS_MEDIUM,
      fontSize: theme.FONT_SIZE_SMALL,
    },
    middleView: {
      flex: 1,
      justifyContent: "space-evenly",
      width: "95%",
      justifyContent: "flex-end",
    },

    interestboxGradient: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: 10,

      flex: 1,
      height: 70,
      alignContent: "center",
      paddingHorizontal: 10,
    },
    bottomView: {
      paddingTop: 10,
      height: 120,
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
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      borderTopEndRadius: 40,
      borderTopStartRadius: 40,
      backgroundColor: "transparent",
      zIndex: 0,
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
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
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
    textZeroTransfer: {
      fontFamily: theme.POPPINS_REGULAR,
      fontSize: theme.FONT_SIZE_MEDIUM,
      color: "red",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      width: "90%",
    },

    buttonContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    buttonContainer1: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "80%",
    },

    button: {
      width: 120,
      height: 50,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: theme.BLUE_COLOR,
      marginHorizontal: 0,
      justifyContent: "center",
      alignItems: "center",
    },

    buttonText: {
      textAlign: "center",
      fontFamily: theme.POPPINS_MEDIUM,
      fontSize: theme.FONT_SIZE_BODY_ONE_REGULAR,
      color: theme.DARK_BLUE_COLOR,
    },

    expandContainer: {
      justifyContent: "center",
      width: "100%",
    },

    addPayeeButton: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      backgroundColor: theme.DARK_GREEN_COLOR,
      height: 40,
      borderRadius: 20,
    },
    addPayeeButtonView: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    addPayeeButtonText: {
      fontFamily: theme.POPPINS_BOLD,
      fontSize: theme.FONT_SIZE_15,
    },

    //Input Filed View
    labelText: {
      fontFamily: theme.POPPINS_MEDIUM,
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
    },

    parentContainer: {
      flexDirection: "column",
      alignItems: "flex-start",
      height: 63,
    },

    labelContainer: {
      alignItems: "flex-start",
      width: "100%",
      height: 15,
    },

    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: theme.GRAY_COLOR,
    },
    inputFieldText: {
      flex: 1,
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_BODY_ONE_REGULAR,
      fontFamily: theme.POPPINS_REGULAR,
      paddingHorizontal: 0,
    },
    iconContainer: {
      width: 40,
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
  });
};
