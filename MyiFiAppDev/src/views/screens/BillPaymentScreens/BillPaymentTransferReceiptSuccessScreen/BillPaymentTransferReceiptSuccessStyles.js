import { StyleSheet } from "react-native";



//Nawodya 1/31/2024
export const GetBillPaymentTransferReceiptSuccessScreenStyles = (theme) => {

  const BillPaymentTransferReceiptSuccessScreenStyles = StyleSheet.create({
    amount: {
      fontSize: theme.FONT_SIZE_HEADER_ONE_MEDIUM,
      color:theme.DEEP_BLACK_COLOR,
    },
    container: {
      flexGrow: 1,

    },
    outView: {
      height: '200',
      justifyContent: 'space-between',
      marginTop: '10',
      //  backgroundColor:'red',

    },
    middleContainer: {
      flex: 1,
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
      //backgroundColor: "green",
    },

    bottomContainer: {
      height: 100,
      width: "90%",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      //backgroundColor: "gray",
    },

    bottomView: {
      height: 70,
      justifyContent: "center",
      alignItems: "center",
      //backgroundColor: "green",
    },

    textTitle: {
      color: theme.DARK_BLUE_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
    },

    subText: {
      color: theme.LIGHT_BLUE_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_MEDIUM,
      marginBottom: 15
    },

    subText2: {
      marginTop: 10,
      color: theme.DARK_GREEN_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_MEDIUM,
    },

    TextTotalAmount: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_30,
      fontFamily: theme.POPPINS_MEDIUM,
    },

    errorMsg: {
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      color: 'red',
      fontFamily: theme.POPPINS_MEDIUM,

    },
    prize: {
      fontSize: theme.FONT_SIZE_HEADER_ONE_MEDIUM,
      textAlign: 'center',
      color: theme.DEEP_BLACK_COLOR,
      fontWeight: '500',
    },
    title: {
      marginTop: 30,
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      color: theme.DEEP_BLACK_COLOR,
      textAlign: 'center',
      fontFamily: theme.POPPINS_MEDIUM,

    },
    secondTitle: {
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      color: theme.LIGHT_BLUE_COLOR,
      textAlign: 'center',
      fontFamily: theme.POPPINS_MEDIUM,

    },

    textsmall: {
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      color:theme.DEEP_BLACK_COLOR,
      fontFamily:theme.  POPPINS_BOLD,
      marginTop:10,
    },
    amount: {
      fontSize: theme.FONT_SIZE_HEADER_ONE_MEDIUM,
      color:theme.DEEP_BLACK_COLOR,
      fontFamily: theme.  POPPINS_MEDIUM,
    },


  });

  return BillPaymentTransferReceiptSuccessScreenStyles;
};