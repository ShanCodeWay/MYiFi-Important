import { StyleSheet } from "react-native";

export default GetQR_PaymentSuccessScreenStyles= (theme) => {
 
return StyleSheet.create({

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

      errorMsg : {
        fontSize:theme.FONT_SIZE_HEADER_TWO,
        color: 'red',
        fontFamily: theme.POPPINS_MEDIUM,
       
    }
  });
};
