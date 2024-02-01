import { StyleSheet } from "react-native"

export default GetQR_PaymentScreenStyles = (theme) => {
    return StyleSheet.create({

        upperContainer: {
            flex: 1,
            width: "90%",
            justifyContent:"space-evenly",
           // backgroundColor: "yellow"
          },
      
          middleContainer: {
            flex: 2,
            width: "90%",
            justifyContent:"space-evenly",
            //backgroundColor: "pink"
          },
      
          bottomContainer: {
            height: 50,
            width: "90%",
            alignItems: "flex-end",
            justifyContent:"center",
            //backgroundColor: "gray"
          },

          bottomView: {
            height: 70,
            alignItems: "flex-end",
            justifyContent: "flex-end",
            //backgroundColor: "red"
          },

          qrBox: {
            height: 100,
            width: 100,
            //backgroundColor: "gray",
            alignSelf: "center",
           
          },

          profilePicture: {
            height: "100%",
            width: "100%",
            borderWidth: 2,
            borderColor: "gray",
            //backgroundColor: "red",
          },

          textTitle: {
            color: theme.DARK_BLUE_COLOR,
            fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
            fontFamily: theme.POPPINS_MEDIUM,
          },
      
          textSubTitle: {
            color: theme.DARK_BLUE_COLOR,
            fontSize: theme.FONT_SIZE_LARGE,
            fontFamily: theme.POPPINS_MEDIUM,
          },
    });
}