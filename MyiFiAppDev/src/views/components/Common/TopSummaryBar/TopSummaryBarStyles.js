import { StyleSheet } from "react-native";

export default GetTopSummaryBarStyles = (theme) => {
    
    const TopSummaryBarStyles = StyleSheet.create({

        mainContainer: {
            width:'100%',
            height: 50,
            backgroundColor:theme.BACKGROUND_COLOR,
            justifyContent:'flex-start',
            alignItems:"center",
            //marginTop:10,
            //margin:10
        },

        middleText: {
            width:'100%',
            height:'100%',
            //marginLeft: 10
        },

        titleText:{
            color: theme.DEEP_BLACK_COLOR,
            fontFamily: theme.POPPINS_MEDIUM,
            fontSize: theme.FONT_SIZE_BODY_ONE_MEDIUM,
            textAlign:'left',
            includeFontPadding:false,
        },

        balanceAmountTextContainer: {
            //flex:1,
            //height:'100%',
            flexDirection: "row",
            justifyContent:'flex-start',
            alignItems: "flex-end",
            textAlignVertical:'bottom',
          },
          textBalanceRs: {
            color: theme.DARK_GRAY_COLOR,
            fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
            fontFamily: theme.POPPINS_MEDIUM,
            //marginLeft: 5,
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

    });

    return TopSummaryBarStyles ;

}