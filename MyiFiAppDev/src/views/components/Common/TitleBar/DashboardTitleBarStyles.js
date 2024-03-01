import { StyleSheet } from "react-native";

export default GetDashboardTitleBarStyles = (theme) => {
    
    const DashboardTitleBarStyles = StyleSheet.create({

        mainContainer: {
            height: 53,
            //width: '100%',
            flexDirection: 'row',
            backgroundColor:theme.BACKGROUND_COLOR,
            alignItems:"center",
            //marginTop:10,
            //margin:10
        },

        leftIcon: {
            width: 50,
            height:'100%',
        },

        button_Style: {
            //flex: 1,
            width: '100%',
            height:'100%',
            justifyContent: "center",
            alignItems: "center",
        },

        Menu_button_Style: {
            //flex: 1,
            width: '100%',
            height:'100%',
            //justifyContent: "center",
            alignItems: "center",
        },

        middleText: {
            flex: 1,
            //marginLeft: 10
        },

        rightIcon: {
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',   

        },

        titleText:{
            color: theme.DEEP_BLACK_COLOR,
            fontSize:theme.FONT_SIZE_HEADER_TWO_MEDIUM,
            fontFamily: theme.POPPINS_MEDIUM,
            textAlignVertical:"center",
            includeFontPadding:false
        },

        messageText:{
            color: theme.GRAY_COLOR,
            fontSize:theme.FONT_SIZE_BODY_ONE_MEDIUM,
            fontFamily: theme.POPPINS_MEDIUM,
            textAlignVertical:"center",
            includeFontPadding:false
        }

    });


    return DashboardTitleBarStyles ;

}