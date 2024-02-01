import { StyleSheet } from "react-native";

export default GetOTPTimerStyles = (theme) => {

    const OTPTimerStyles = StyleSheet.create({

        parentContainer: {
            height:50,
            flexDirection:'row',
            alignItems: "center",
            justifyContent: "center",
        },

        ButtonContainer: {
            height:'100%',
            borderRadius: 10,
            backgroundColor:theme.LIGHT_BLUE_COLOR,
            justifyContent: "center",
            alignItems:"center"
        },

        timerText: {
            color:theme.BACKGROUND_COLOR,
            fontSize: theme.FONT_SIZE_HEADER_THREE_BOLD,
            fontFamily: theme.POPPINS_BOLD,
            textAlignVertical:'center'
          },

      
    });

    return OTPTimerStyles;
}