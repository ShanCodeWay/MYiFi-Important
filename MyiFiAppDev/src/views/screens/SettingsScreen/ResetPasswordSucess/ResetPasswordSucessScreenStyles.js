import { StyleSheet } from "react-native";
import {Android_Theme_Dark} from "../../../../styles/Themes";

export default GetResetPasswordSucessScreenStyles = (theme) => {

    const ResetPasswordSucessScreenStyles = StyleSheet.create({
            
        topContainer: {
            flex: 1,
            //width: '100%',
            alignItems: "center",
            verticalAlign:'bottom',
            justifyContent:'flex-end',
        },
        
        bottomContainer: {
            flex: 2,
            alignItems: "center",
            verticalAlign:'top',
            justifyContent:'flex-start',
            //width: '100%',
            margin:20
        },  

        welcomeText: {
            fontFamily: theme.POPPINS_MEDIUM,
            fontSize: theme.FONT_SIZE_HEADER_ONE_MEDIUM,
            color: theme.DEEP_BLACK_COLOR,
        },
    
    });

    return ResetPasswordSucessScreenStyles;
}