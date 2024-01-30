import { StyleSheet } from "react-native";

export default GetFixedDepositsViewScreenStyles = (theme) => {
  return StyleSheet.create({
    UpperContainer: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
    MiddleContainer: {
      flex: 1,
      justifyContent: "center",
    },
    BottomContainer: {
      width: "100%",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
  
    },

    bottomView: {
      alignItems: "flex-end",
      justifyContent: "flex-end",
      height: 60,

    },
    TextFD: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    TextDate: {
      color: theme.LIGHT_BLUE_COLOR,
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
