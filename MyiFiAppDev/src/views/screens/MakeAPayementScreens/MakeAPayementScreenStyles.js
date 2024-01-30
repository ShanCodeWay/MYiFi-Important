import { StyleSheet } from "react-native";
import { Android_Theme_Light } from "../../../styles/Themes";

export default GetMakeAPayementScreenStyles = (theme) => {
  return StyleSheet.create({
    upperContainer: {
      flex: 1,
      //backgroundColor: "pink",
      width: "90%",
      justifyContent:"space-evenly"
    },

    middleContainer: {
      flex: 2,
      //backgroundColor: "green",
      width: "90%",
      justifyContent:"space-around"
    },

    bottomContainer: {
      height: 170,
      //backgroundColor: "gray",
      width: "90%",
      justifyContent:"center",
      //marginBottom:10,
      alignItems: "flex-end",
      
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

    bottomView: {
      alignItems: "flex-end",
      justifyContent: "flex-end",
      height: 70,
      //backgroundColor: "green",
    },

    // modalViewBackground: {
    //   flex: 1,
    //   justifyContent: "flex-end",
    //   alignItems: "center",
    //   borderTopEndRadius: 40,
    //   borderTopStartRadius: 40,
    //   backgroundColor: "transparent",
    //   zIndex: 0,
    // },

    // modalView: {
    //   width: "100%",
    //   height: 130,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   borderTopEndRadius: 40,
    //   borderTopStartRadius: 40,
    //   backgroundColor: theme.GRAY_COLOR,
    //   zIndex: 1,
    // },

    textTransfer: {
      fontFamily: theme.POPPINS_SEMIBOLD,
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      color: theme.DARK_BLUE_COLOR,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
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
