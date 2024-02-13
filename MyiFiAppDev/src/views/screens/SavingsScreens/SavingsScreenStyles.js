import { StyleSheet } from "react-native";

export default GetSavingsScreenStyles = (theme) => {
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

    SavingsRowLeftView: {
      flex: 3,
      justifyContent: "flex-start",
      alignContent: "flex-start",
      alignItems: "flex-start",
      verticalAlign: "top",
    },

    TextSavings: {
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      color: theme.DEEP_BLACK_COLOR,
    },

    TextTotalSavings: {
      color: theme.DARK_GRAY_COLOR,
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_MEDIUM,
    },

    middleContainerView: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
    },

    SavingsContainerView: {
      flex: 1,
      width: "95%",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: 10,
    },

    SavingsRowMainContainer: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      padding: 10,
    },

    SavingsRowContainer: {
      flexDirection: "row",
    },

    HorizontalDevider: {
      height: 1,
      width: "100%",
      backgroundColor: theme.DARK_GRAY_COLOR,
      marginTop: 10,
    },

    TextAccountNumber: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_MEDIUM,
    },

    SavingsRowRightView: {
      flex: 2,
      justifyContent: "flex-start",
      alignContent: "flex-end",
      alignItems: "flex-end",
      verticalAlign: "bottom",
    },

    textCurrentSavings: {
      color: theme.DEEP_BLACK_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_MEDIUM,
    },

    textAccountName: {
      fontSize: theme.FONT_SIZE_SMALL,
      fontFamily: theme.POPPINS_MEDIUM,
      color: theme.DARK_GRAY_COLOR,
    },

    textAccountNameValue: {
      fontSize: theme.FONT_SIZE_SMALL,
      fontFamily: theme.POPPINS_MEDIUM,
      color: theme.DEEP_BLACK_COLOR,
    },

    bottomView: {
      height: "10%",
      width: "100%",
    },
  });
};
