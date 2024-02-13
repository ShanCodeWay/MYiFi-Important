// NotificationsCentreScreenStyles.js
import { StyleSheet } from "react-native";

export const GetNotificationsPageStyles = (theme) => {
    const NotificationsPageStyles = StyleSheet.create({

        toperContainer: {
            flex: 1,
            //  backgroundColor: "red",

        },
        bottomContainer: {
            height: 50,
            //  backgroundColor: "blue",
            width: "100%",
        },
        textStyleH1Medium: {
            color: theme.DEEP_BLACK_COLOR,
            fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
            fontFamily: theme.POPPINS_MEDIUM,
            //  backgroundColor: "yellow",
            textAlign: 'left',
            width: "100%",
            paddingLeft: 20,

        },
        title: {
            color: "black",
            textAlign: "center",
            fontFamily: theme.POPPINS_BOLD,
            fontSize: theme.FONT_SIZE_SMALL,
            paddingTop: 10,

        },
        discription: {
            color: theme.BLACK_COLOR,
            textAlign: "center",
            fontFamily: theme.POPPINS_MEDIUM,
            fontSize: theme.FONT_SIZE_LARGE,
        },
        topLine: {
            backgroundColor: "black",
            height: 1,
            width: "90%",
            marginTop: 5,

        },
        textContainer: {
            justifyContent: 'space-between',
            // backgroundColor: 'green',
            height: 150,
            width: "80%",
        },
        buttonContainer: {
            //     backgroundColor: 'pink',
            alignContent: "center",
            alignItems: "center",
            justifyContent: 'flex-end',
            height: 150,

        },
        titleContainer: {
           // backgroundColor: "pink",
            width: "90%",
            height: 60,
            marginLeft: 20,

        },
        mainTittle: {
            fontFamily: theme.POPPINS_MEDIUM,
            fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
            color: theme.DEEP_BLACK_COLOR,
            //  marginLeft:20,
            paddingTop: 10,

        }

    });

    return NotificationsPageStyles;
};
