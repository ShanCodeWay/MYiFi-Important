import { StyleSheet } from "react-native";
import Colors from "../../../../styles/Colors";
import Fonts from "../../../../styles/Fonts";

export const GetKYC3Screen2Styles = (theme) => {
  const KYC3Screen2Styles = StyleSheet.create({
    titleText: {
      textAlign: "center",
      color: theme.DARK_BLUE_COLOR,
      fontFamily: theme.POPPINS_SEMIBOLD,
      fontSize: theme.FONT_SIZE_HEADER_ONE,
    },

    profilePicTextContainer: {
      //backgroundColor: "yellow",
      alignItems: "center",
      justifyContent: "space-evenly",
      flex: 2,
      width: "100%",
      height: "100%",
    },

    profilePictureBox: {
      backgroundColor: theme.BACKGROUND_COLOR,
      //boxfit: true,
      width: "100%",
      //height: 400,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      flex: 3,
      //backgroundColor: "red",
    },

    profilePicture: {
      height: "100%",
    },

    subText: {
      textAlign: "center",
      color: theme.TextStyleCaptionColor,
      fontSize: theme.FONT_SIZE_LARGE,
      fontFamily: theme.POPPINS_SEMIBOLD,
    },

    buttonContainer: {
      alignItems: "center",
      justifyContent: "space-evenly",
      flex: 2,
      //backgroundColor: "blue",
      width: "100%",
    },
  });

  return KYC3Screen2Styles;
};
