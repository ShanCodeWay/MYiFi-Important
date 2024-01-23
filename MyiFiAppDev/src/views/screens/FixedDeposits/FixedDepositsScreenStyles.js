import { StyleSheet } from "react-native";
import { Android_Theme_Light } from "../../../styles/Themes";

export default GetFixedDepositsScreenStyles = (theme) => {
  return StyleSheet.create({
    UpperView: {
      flexDirection: "row",
      width: "100%",
      padding: 10,
      alignItems: "flex-start",
      justifyContent: "space-between",
    },

    LeftView: {
      flex: 1,
    },
    InvestementRowLeftView: {
      flex: 3,
      justifyContent: "flex-start",
      alignContent: "flex-start",
      alignItems: "flex-start",
      verticalAlign: "top",
    },
    TextFixedDeposit: {
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      color: theme.DEEP_BLACK_COLOR,
    },
    TextFdInvest: {
      color: theme.DARK_GRAY_COLOR,
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    TextRs: {
      color: theme.DARK_GRAY_COLOR,
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    TextTotalInvest: {
      color: theme.DARK_GREEN_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    AmountContainer: {
      flexDirection: "row",
      alignItems: "flex-end",
    },
    middleContainerView: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
    },
    InvestmentsContainerView: {
      flex: 1,
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: 10,
    },
    InvestmentRowMainContainer: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      padding: 10,
    },
    InvestmentRowContainer: {
      flexDirection: "row",
    },
    HorizontalDevider: {
      height: 1,
      width: "100%",
      backgroundColor: theme.DARK_GRAY_COLOR,
      marginTop: 10,
    },
    TextDate: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    InvestementRowRightView: {
      flex: 2,
      justifyContent: "flex-start",
      alignContent: "flex-end",
      alignItems: "flex-end",
      verticalAlign: "bottom",
    },
    textFDAmount: {
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_MEDIUM,
      color: theme.DARK_GREEN_COLOR,
    },
    textRecentTransaction: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_MEDIUM,
    },
    textMDate: {
      fontSize: theme.FONT_SIZE_SMALL,
      fontFamily: theme.POPPINS_MEDIUM,
      color: theme.DARK_GRAY_COLOR,
    },
    textMDateValue: {
      fontSize: theme.FONT_SIZE_SMALL,
      fontFamily: theme.POPPINS_MEDIUM,
      color: theme.DEEP_BLACK_COLOR,
    },
  });
};
