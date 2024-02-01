import { StyleSheet } from "react-native";

export default GetWelcomeScreenStyles = (theme) => {
  return StyleSheet.create({
    upperContainer: {
      height: 250,
      //backgroundColor: "gray",
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
    },

    bottomContainer: {
      flex: 1,
      //backgroundColor: "pink",
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 30
    },

    textTitle: {
      color: theme.DARK_BLUE_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_ONE_MEDIUM,
      fontFamily: theme.POPPINS_SEMIBOLD,
    },

    textSubTitle: {
      color: theme.DARK_BLUE_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_MEDIUM,
    },
  });
};
