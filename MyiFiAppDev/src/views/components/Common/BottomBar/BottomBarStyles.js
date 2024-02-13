// BottomTitleBarStyles.js
import { StyleSheet } from "react-native";

export default GetBottomBarStyles = (theme) => {

  const BottomBarStyles = StyleSheet.create({

    parentContainer: {
      width:'100%',
      height: 50,
      flexDirection: "row",
      justifyContent: 'center',
    },
    leftContainer: {
      flex: 1,
      height: "100%",
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightContainer: {
      flex: 1,
      height: "100%",
      flexDirection: "row",
      justifyContent: 'center',
    },
    buttonContainer: {
      width: '100%',
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center',
    },
  });


  return BottomBarStyles;

}