
import { StyleSheet } from "react-native";


const GetKYC5ScreenStyles = (theme:any) => {
  return StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
    },
    commonInputFieldContainer: {
        marginVertical: 5
    },
    nextButtonContainer: {
      height: 55,
      justifyContent: "center",
    },
  });
};

export default GetKYC5ScreenStyles;