import { StyleSheet } from "react-native";



export default GetFTSuccessScreenStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
    },

    UpperContainer: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },

    MiddleContainer: {
      flex: 1,
      justifyContent: "center",
    },

    bottomView: {
      height: 60,
      alignItems: "flex-end",
    },

    title: {
      fontSize: theme.FONT_SIZE_HEADER_ONE,
      color: theme.DEEP_BLACK_COLOR,
      textAlign: "center",
    },
    secondTitle: {
      fontSize: theme.FONT_SIZE_LARGE,
      color: theme.BLUE_COLOR,
      textAlign: "center",
      fontFamily: theme.POPPINS_MEDIUM,
    },
    prize: {
      fontSize: theme.FONT_SIZE_30,
      textAlign: "center",
      color: theme.DEEP_BLACK_COLOR,
      fontFamily: theme.POPPINS_MEDIUM,
    },

    logo: {
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
    },

    circleCheckedView: {
      //backgroundColor:'red',
      alignItems: "center",

      margin: 10,
      justifyContent: "center",
    },

    success: {
      textAlign: "center",
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_MEDIUM,
    },

    commonSmallButton: {
      alignItems: "center",
      height: "10%",
      width: "100%",
      justifyContent: "center",
      //backgroundColor:'red',
    },
  });
};