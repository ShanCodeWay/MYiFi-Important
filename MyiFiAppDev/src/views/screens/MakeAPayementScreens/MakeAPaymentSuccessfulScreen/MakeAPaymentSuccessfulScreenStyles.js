import { StyleSheet } from "react-native";
import { Android_Theme_Dark } from "../../../../styles/Themes";

export default GetMakeAPaymentSuccessfulScreenStyles= (theme) => {
 
return StyleSheet.create({
    // topView: {
    //   height: 150,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   width: "100%",
    //   marginTop: -20,
    // },

    // middleView: {
    //   flex: 1,
    //   alignItems: "center",
    //   marginTop: 20,
    //   width: "100%",
    //   backgroundColor: "pink"
    // },

    middleContainer: {
        flex: 1,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: "green",
      },

    bottomContainer: {
        height: 150,
        width: "90%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        //backgroundColor: "gray",
      },

    bottomView: {
      height: 70,
      justifyContent: "center",
      alignItems: "center",
      //backgroundColor: "green",
    },

    textTitle: {
        color: theme.DARK_BLUE_COLOR,
        fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
        fontFamily: theme.POPPINS_MEDIUM,
      },

      subText: {
        color: theme.LIGHT_BLUE_COLOR,
        fontSize: theme.FONT_SIZE_HEADER_TWO,
        fontFamily: theme.POPPINS_MEDIUM,
        marginBottom: 15
      },

      subText2: {
        marginTop: 10,
        color: theme.DARK_GREEN_COLOR,
        fontSize: theme.FONT_SIZE_HEADER_TWO,
        fontFamily: theme.POPPINS_MEDIUM,
      },

      TextTotalAmount: {
        color: theme.DEEP_BLACK_COLOR,
        fontSize: theme.FONT_SIZE_30,
        fontFamily: theme.POPPINS_MEDIUM,
      },



    // titleView: {
    //   width: "80%",
    //   justifyContent: "center",
    //   alignItems: "center",
    // },

    // mainTitle: {
    //   fontFamily: theme.POPPINS_SEMIBOLD,
    //   fontSize: theme.FONT_SIZE_HEADER_ONE_MEDIUM,
    //   color: theme.DARK_BLUE_COLOR,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   textAlign: "center",
    //   width: "100%",
    // },



    // secondTitle: {
    //   fontFamily: theme.POPPINS_MEDIUM,
    //   fontSize: theme.FONT_SIZE_HEADER_TWO,
    //   color: theme.DARK_BLUE_COLOR,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   textAlign: "center",
    //   paddingBottom: 30,
    // },

    // secondTitle1: {
    //   fontFamily: theme.POPPINS_MEDIUM,
    //   fontSize: theme.FONT_SIZE_HEADER_TWO,
    //   color: theme.DARK_BLUE_COLOR,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   textAlign: "center",
    //   marginLeft: 100,
    //   marginRight: 100,
    //   paddingTop: 30,
    // },

    // button: {
    //   marginTop: 0,
    //   width: 150,
    // },
    // logoIcon: {
    //   height: 100,
    //   flexDirection: "row",
    //   justifyContent: "center",
    //   alignItems: "center",
    // },

    // logo: {
    //   flexDirection: "row",
    //   marginLeft: 20,
    //   fontSize: 20,
    // },

    // KeyboardAvoidingView: {
    //   flexGrowl: 1,
    // },
  });
};
