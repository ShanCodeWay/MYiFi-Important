import { StyleSheet } from "react-native";

export default GetMainTitleBarStyles = (theme) => {
    
    const MainTitleBarStyles = StyleSheet.create({

        mainContainer: {
            height: 50,
            width: '100%',
            flexDirection: 'row',
            backgroundColor:theme.BACKGROUND_COLOR,
            alignItems:"center"
        },

        leftIcon: {
            width: 50,
            height:'100%',
            justifyContent: 'center',
            alignItems: 'center',
        },

        button_Style: {
            //flex: 1,
            width: '100%',
            height: '100%',
            justifyContent: "center",
            alignItems: "center",
        },

        middleText: {
            flex: 1,
            marginLeft: 10
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
            textAlignVertical:"center"
        }

    });


    return MainTitleBarStyles ;

}