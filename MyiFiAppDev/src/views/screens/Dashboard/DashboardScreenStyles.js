import { StyleSheet } from "react-native";

export default GetDashboardScreenStyles = (theme) => {
  
  return StyleSheet.create({
  
    topBalanceContainer: {
      flexDirection: "row",
      //width: "100%",
      height:50,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 10,
      marginRight:10,
    },
    topUpButton: {
      justifyContent: "center",
      alignItems: "center",
      width: 80,
      height: 50,
      backgroundColor: theme.BLUE_COLOR,
      borderRadius: 10,
    },
    textTopUP: {
      color: theme.BACKGROUND_COLOR,
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      fontFamily:theme.POPPINS_MEDIUM,
      includeFontPadding:false
    },
    balanceTextContainer: {
      flex:1,
      height:'100%',
      flexDirection: "row",
      justifyContent:'flex-start',
      alignItems: "center",
      textAlignVertical:'center',
      marginLeft:10,
    },
    balanceAmountTextContainer: {
      //flex:1,
      //height:'100%',
      flexDirection: "row",
      justifyContent:'flex-start',
      alignItems: "flex-end",
      textAlignVertical:'bottom',
    },
    textBalance: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_THREE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      includeFontPadding:false
    },
    textBalanceRs: {
      color: theme.DARK_GRAY_COLOR,
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      marginLeft: 5,
      includeFontPadding:false
    },
    textBalanceIntegerAmount: {
      color: theme.DARK_GREEN_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_THREE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      includeFontPadding:false
    },
    textBalanceDecimalAmount: {
      color: theme.DARK_GREEN_COLOR,
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      includeFontPadding:false
    },
    keyboardAwareView: {
      alignItems: "center",
      flexGrow: 1,
      //width: "100%",
      margin:10,
    },
    middleContainer: {
      width: '100%',
      //flexDirection:'row',
      justifyContent: "center",
      alignItems: "center",
    },
    mainButtonContainer: {
      //width: "100%",
      flexDirection:'column',
      //height:"100%",
      justifyContent: "center",
      alignItems: "center",
    },
    textEasyAccess: {
      marginTop:10,
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_THREE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    easyAccessContainer: {
      width: "100%",
      height:75,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
    },
    easyAccessLeftView: {
      flex:1,
      height:'100%',
      flexDirection: "row",
      alignItems:"flex-start",
      justifyContent: "flex-start",
    },
    easyAccessRightView: {
      width: 75,
      height:'100%',
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    easyAccessButtonView: {
      width:75,
      height:85,
      justifyContent: "center",
      alignItems: "center",
    },
    easyAccessIconButtonView: {
      justifyContent: "center",
      width: 60,
      height: 60,
      borderRadius: 10,
      backgroundColor: theme.LIGHT_BLUE_COLOR,
      alignItems: "center",
    },
    easyAccessTextView: {
      justifyContent: "center",
      width: "100%",
      height: 25,
      justifyContent:'center',
      alignItems: "center",
    },
    textEasyAccessbtn: {
      marginTop: 5,
      color: theme.DARK_GRAY_COLOR,
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    easyAccessMoreButtonView: {
      justifyContent: "center",
      width: 60,
      height: 60,
      borderRadius: 60/2,
      backgroundColor: theme.GRAY_COLOR,
      alignItems: "center",
    },
    textRecentTransaction: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_THREE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      alignSelf: "flex-start",
      marginTop:20,
      marginLeft:0
    },
    transactionItemRowContainer: {
      width: "100%",
      height:50,
      marginBottom:4,
      flexDirection: "row",
      justifyContent:'center',
      alignItems: "center"
    },
    recent_trns_icon_view: {
      width: 28,
      height:'100%',
      justifyContent:'center',
      alignItems:'flex-start',
    },
    recent_trns_desc_view: {
      flex: 1,
      height:'100%',
      justifyContent:'center',
      alignItems: 'flex-start',
    },
    recent_trns_amount_view: {
      width: 120,
      height:'100%',
      justifyContent:'center',
      alignItems: 'flex-end',
    },
    texttransactionDescription: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_BODY_TWO_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      includeFontPadding:false
    },
    textTransactionAmount: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_BODY_ONE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      includeFontPadding:false
    },
    textTransactionAmountDescription: {
      color: theme.DARK_GRAY_COLOR,
      fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      includeFontPadding:false
    }
  });
};
