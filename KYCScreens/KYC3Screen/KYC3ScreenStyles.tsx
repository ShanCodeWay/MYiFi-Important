import { StyleSheet } from "react-native";


const GetKYC3Screen2Styles = (theme:any) => {
  return StyleSheet.create({
    titleText: {
      textAlign: "center",
      color: theme.DARK_BLUE_COLOR,
      fontFamily: theme.POPPINS_SEMIBOLD,
      fontSize: theme.FONT_SIZE_HEADER_ONE,
    },


    profilePicture: {
      width: 250,
      height: 250,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      flex: 1,
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

    cameraContainer: {
      position: 'absolute',
      backgroundColor: 'red',
      height: '100%',
      width: '100%',
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {

      flex: 1,
      backgroundColor: `rgba(143, 197, 255, 0.8)`,
      justifyContent: 'center',
      alignItems: 'center',
    },

    
  });


};
export default GetKYC3Screen2Styles;