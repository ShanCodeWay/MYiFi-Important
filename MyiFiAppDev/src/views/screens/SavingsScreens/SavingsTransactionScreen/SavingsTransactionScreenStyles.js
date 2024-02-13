import { StyleSheet } from "react-native";

export default GetSavingsTransactionScreenStyles = (theme) => {
  return StyleSheet.create({
    UpperContainer: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      //backgroundColor: 'pink'
    },
    MiddleContainer: {
      flex: 1,
      marginLeft: 8,
      marginRight:8,
      justifyContent: "center",
      //backgroundColor: 'yellow'
    },
    BottomContainer: {
      width: "100%",
      height: 100,
      justifyContent: "flex-start",
      alignContent: "center",
      alignItems: "center",
      //backgroundColor: 'green'
    },

    bottomView: {
      alignItems: "flex-end",
      justifyContent: "flex-end",
      height: 60,
    },
    TextSavings: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    TextAccountNumber: {
      color: theme.LIGHT_BLUE_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    TextTotalAmount: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_30,
      fontFamily: theme.POPPINS_MEDIUM,
    },

    transactionItemRowContainer: {
      width: "100%",
      justifyContent: "space-between",
      flexDirection: "row",
      alignContent: "flex-start",
      alignItems: "flex-start",
      alignSelf: "center",
    },
    texttransactionDescription: {
      color: theme.DARK_GRAY_COLOR,
      fontSize: theme.FONT_SIZE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      flex: 1,
      paddingLeft: 10,
    },
    textTransactionAmount: {
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_MEDIUM,
      color: theme.DEEP_BLACK_COLOR,
    },
    textTransactionAmountDescription: {
      fontSize: theme.FONT_SIZE_SMALL,
      fontFamily: theme.POPPINS_MEDIUM,
      color: theme.DARK_GRAY_COLOR,
    },

    transactionAmountContainer: {
      justifyContent: "flex-end",

      alignItems: "flex-end",
    },
  });
};
