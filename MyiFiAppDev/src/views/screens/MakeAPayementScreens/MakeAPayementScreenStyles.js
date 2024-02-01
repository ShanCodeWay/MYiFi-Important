import { StyleSheet } from "react-native";

export default GetMakeAPayementScreenStyles = (theme) => {
  return StyleSheet.create({
    upperContainer: {
      flex: 1,
      width: "90%",
      justifyContent:"space-evenly"
    },

    middleContainer: {
      flex: 2,
      width: "90%",
      justifyContent:"space-around"
    },

    bottomContainer: {
      height: 170,
      width: "90%",
      justifyContent:"center",
      alignItems: "flex-end",
      
    },

    bottomView: {
      alignItems: "flex-end",
      justifyContent: "flex-end",
      height: 70
    },

    h1Text: {
      color: theme.DARK_BLUE_COLOR,
      fontFamily: theme.POPPINS_SEMIBOLD,
      fontSize: theme.FONT_SIZE_LARGE,
    },

    h2Text: {
      color: theme.DARK_GRAY_COLOR,
      fontFamily: theme.POPPINS_MEDIUM,
      fontSize: theme.FONT_SIZE_MEDIUM,
      alignSelf: "flex-end",
    },

    textTitle: {
      color: theme.DARK_BLUE_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
    },

    textSubTitle: {
      color: theme.DARK_BLUE_COLOR,
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_MEDIUM,
    },
  });
};
