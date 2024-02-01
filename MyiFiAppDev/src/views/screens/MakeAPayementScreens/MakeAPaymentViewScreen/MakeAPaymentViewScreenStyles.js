import { StyleSheet } from "react-native";

export default GetMakeAPaymentViewScreenStyles = (theme) => {
  return StyleSheet.create({
    upperContainer: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      width: "100%",
    },
    middleContainer: {
      flex: 1,
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
    },
    bottomContainer: {
      height: 250,
      width: "90%",
      justifyContent: "space-evenly",
      alignContent: "center",
      alignItems: "center",
    },

    bottomView: {
      alignItems: "flex-end",
      justifyContent: "flex-end",
      height: 70,
      
    },
    TextFD: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    subText: {
      color: theme.LIGHT_BLUE_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    TextTotalAmount: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_30,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    textTitle: {
      color: theme.DARK_BLUE_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    TextTotalAmount: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_30,
      fontFamily: theme.POPPINS_MEDIUM,
    },
  });
};
