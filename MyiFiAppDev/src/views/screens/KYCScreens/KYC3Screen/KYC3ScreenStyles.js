import { StyleSheet } from "react-native";


export default GetKYC3Screen2Styles = (theme) => {
  return StyleSheet.create({
    titleText: {
      textAlign: "center",
      color: theme.DARK_BLUE_COLOR,
      fontFamily: theme.POPPINS_SEMIBOLD,
      fontSize: theme.FONT_SIZE_HEADER_ONE,
    },

    profilePictureBox: {
      backgroundColor: theme.BACKGROUND_COLOR,
      width: "100%",
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      //backgroundColor: "gray",
      //borderWidth: 2,
    },

    profilePicture: {
      height: "80%",
      width: "70%",
      borderWidth: 2,
      borderColor: "gray"
      //backgroundColor: "gray",
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
      //backgroundColor: "blue",
      height: 200,
      width: "100%",
    },

    topTitleContainer: {
      width: "100%",
      height: 100,
      justifyContent: "center",
      alignItems: "center",
    },

    
  });


};
