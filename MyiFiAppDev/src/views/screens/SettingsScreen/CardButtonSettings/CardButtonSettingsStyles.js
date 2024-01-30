// CommonSmallButtonStyles.js

import { StyleSheet } from 'react-native';


export default GetCardButtonSettingsStyles = (theme) => {
  return StyleSheet.create({
    buttonContainer: {
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      paddingHorizontal: "5%",
      borderRadius: 12,
      width: "100%",
      height: "100%",
      flexDirection: "row",
    },

    buttonOuterContainer: {
      marginVertical: 5,
      justifyContent: "center",
    },

    buttonText: {
      color: theme.WHITE_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
    },
    rowContainer: {
      flexDirection: "row",
      alignItems: "center",
    },

    IconOuterStyle: {
    },

    BalanceContainer: {
      flex: 1,
      alignItems: "flex-end",
      height: "100%",
      justifyContent: "flex-end",
    },
    textAmount: {
      color: theme.DARK_GREEN_COLOR,
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_MEDIUM,
      //  textShadowColor: theme.DEEP_BLACK_COLOR,
      //   textShadowOffset: { width: 0.5, height: 0.1 },
      //   textShadowRadius: 1,
    },

    cardTitleView:{
      flexDirection:"row",
      backgroundColor:"red",
    },

    bottomView: {
      paddingHorizontal: "5%",
      borderRadius: 12,
      flexDirection: "row",
      backgroundColor:"red",
    },
  });
};


