import { StyleSheet } from "react-native";

export default GetDashboardScreenStyles = (theme) => {
  return StyleSheet.create({
    titleBarView: {
      flexDirection: "row",
      width: "100%",
      paddingHorizontal: 10,
      paddingTop: 10,

      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    balanceContainerView: {
      flexDirection: "row",
      width: "100%",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "flex-start",
      marginBottom: 10,
      marginTop: 10,
    },
    easyAccessContainerView: {
      flexDirection: "row",
      width: "100%",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    middleContainerView: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
    },
    bottomContainerView: {
      flex: 1,
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingHorizontal: 10,
    },
    greetingView: {
      flex: 1,
      paddingLeft: 20,
    },
    topUpView: {
      justifyContent: "center",
      alignItems: "center",
      width: 80,
      height: 50,
      backgroundColor: theme.BLUE_COLOR,
      borderRadius: 10,
      marginRight: 10,
    },
    easyAccessIconButtonView: {
      justifyContent: "center",
      width: 60 ,
      height: 60,
      borderRadius: 10,
      backgroundColor: theme.LIGHT_BLUE_COLOR,
      alignItems: "center",
    },
    easyAccessButtonView: {
      alignContent: "center",
      alignItems: "center",
      margin: 5,
    },
    textUserName: {
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      color: theme.DEEP_BLACK_COLOR,
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
    textGreeting: {
      color: theme.DARK_GRAY_COLOR,
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    textTopUP: {
      color: theme.WHITE_COLOR,

    },

    textBalance: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    textBalanceRs: {
      color: theme.DARK_GRAY_COLOR,
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_MEDIUM,
      marginLeft: 5,
    },
    textBalanceIntegerAmount: {
      color: theme.DARK_GREEN_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    textBalanceDecimalAmount: {
      color: theme.DARK_GREEN_COLOR,
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    textEasyAccess: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    textEasyAccessbtnTitle: {
      marginTop: 10,
      color: theme.DEEP_BLACK_COLOR,
    },
    textRecentTransaction: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_MEDIUM,
      alignSelf: "flex-start",
      marginVertical: 5,
    },
    transactionAmountContainer: {
      justifyContent: "flex-end",

      alignItems: "flex-end",
    },
    AmountContainer: {
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
    },
  });
};
