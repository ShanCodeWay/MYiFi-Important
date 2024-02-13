import { StyleSheet } from "react-native";

export default GetGoldLoanViewScreenStyles = (theme) => {
  return StyleSheet.create({
    UpperContainer: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      padding: 10
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
    TextLease: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    TextLeaseID: {
      color: theme.LIGHT_BLUE_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    TextTotalAmount: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_30,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    amountRsText: {
      color: theme.DARK_GRAY_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_MEDIUM,
    },

    LoanIntegerText: {
 
        color: theme.DEEP_BLACK_COLOR,
        fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
        fontFamily: theme.POPPINS_MEDIUM,
    
    },


    LoanDecimalText: {
      color: theme.DARK_GRAY_COLOR,
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_MEDIUM,
    }
  });
};
