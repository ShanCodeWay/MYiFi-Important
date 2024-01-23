import { StyleSheet } from "react-native";

export default GetKYC6ScreenStyles = (theme) => {
  const KYC6ScreenStyles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
    },

    titleContainer: {
      backgroundColor: theme.BLUE_COLOR,
      padding: 20,
      alignSelf: "flex-start",
      width: "100%",
    },

    commonInputFieldContainer: {
      marginHorizontal: 10,
    },

    titleText: {
      fontSize: theme.FONT_SIZE_18,
      color: theme.WHITE_COLOR,
    },

    inputFieldTitleContainer: {
      backgroundColor: theme.LIGHT_BLUE_COLOR,
      //marginVertical: 5,
      padding: 10,
      alignSelf: "flex-start",
      width: "100%",
      // //backgroundColor:"red"
    },

    inputFieldTitleText: {
      fontSize: theme.FONT_SIZE_LARGE,
      color: theme.WHITE_COLOR,
    },

    attachmentFieldContainer: {
      height: 80,
      //backgroundColor: "pink",
      width: "100%",
      justifyContent: "space-around",
      flexDirection: "row",
      flex: 1,
      //padding: 10,
    },

    attachmentContentContainer: {
      //backgroundColor: "pink",
      height: 80,
      //width: 220,
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
    },

    attachmentProofContainer: {
      height: 30,
      width: "80%",
      justifyContent: "space-between",
      borderWidth: 1,
      flexDirection: "row",
    },

    leftButtonContainer: {
      height: 80,
      //backgroundColor: "red",
      justifyContent: "center",
      flex: 1
      //padding: 10,
    },

    rightButtonContainer: {
      height: 80,
      //backgroundColor: "white",
      justifyContent: "center",
      flex: 1,
      //padding: 10,
    },

   
  });

  return KYC6ScreenStyles;
};
