import { StyleSheet } from "react-native";

export const GetBillerManagementScreenStyles = (theme) => {


    const BillerManagementScreenStyles = StyleSheet.create({

        topView: {
            flex: 1,
            width: "100%",
            margin: 20,
        },

        bottomView: {
            height: '20%',
            width: "100%"
        },

        mainButtonContainer: {
            marginVertical: 5,
            backgroundColor: theme.GRAY_COLOR,
            height: 90,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
        },

        itemText: {
            fontSize: theme.FONT_SIZE_18,
            color: 'black',
            marginLeft: 10,
            fontWeight: '500',
        },
        itemText1: {
            fontSize: theme.FONT_SIZE_LARGE,
            color: 'white',
            marginLeft: 10,
        },
        itemImage: {
            width: 50,
            height: 50,
            resizeMode: 'contain',

            borderRadius: 10,
        },

        buttonImage: {
            height: '60%',
            marginLeft: 10,
        },
        buttonText: {
            flex: 1,
            height: '60%',
        },
        buttonIcon: {
            height: '60%',
            alignItems: 'center',
            justifyContent: 'center',
            width: '20%',
        },

        textBillerImage: {
            flexDirection: 'row',
            width: "100%",
            height: 60,
            justifyContent: 'space-around',
            alignContent: 'center',
            alignItems: 'center',
        },
        image: {
            height: '100%',
            width: '100%',
        },
        textBiller: {
            fontSize: theme.FONT_SIZE_HEADER_ONE,
            color: 'black',
            fontWeight: '800',
        },

        bottomIcon: {
            alignContent: 'center',
            alignItems: 'center',

        },

    });

    return BillerManagementScreenStyles;

};

















