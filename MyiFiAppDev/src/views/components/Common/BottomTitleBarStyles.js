// BottomTitleBarStyles.js
import { StyleSheet } from "react-native";

export default GetBottomTitleBarStyles = (theme) => {

  const BottomTitleBarStyles = StyleSheet.create({

    bottomTitleBarContainer: {
      flexDirection: "row",
      justifyContent: 'space-around',
      height: 50,
      //backgroundColor: 'red',
      flex: 1,
    },

    bottomTitleBarLeft: {
      width: "100%",
      flex: 1,
      //backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },


    bottomTitleBarMiddle: {
      width: "10%",
      // backgroundColor: 'green',

    },

    bottomTitleBarRight: {
      width: "100%",
      flex: 1,
      //backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'flex-start',


    },


  });


  return BottomTitleBarStyles;

}