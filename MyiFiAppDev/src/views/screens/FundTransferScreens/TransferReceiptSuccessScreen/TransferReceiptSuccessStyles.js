import { StyleSheet } from "react-native";



export const GetTransferReceiptSuccessStyles = (theme) => {

    const TransferReceiptSuccessStyles = StyleSheet.create({
        container: {
            flexGrow: 1,

        },
        parentView: {
            flex: 1,
            justifyContent: 'space-between',
            marginTop: 30,
        },
        outView: {
            flex: 3,
            //backgroundColor:'green',
            marginTop: '10',
            justifyContent: 'center',
            justifyContent: 'space-between',

            //backgroundColor:'red',

        },
        middleView: {
            flex: 3,
            flexDirection: 'row',
            width: '100%',
            paddingHorizontal: 30,
            justifyContent: 'flex-start',
            height: '100%',
            //backgroundColor:'red',



        },

        middleBoxLeft: {
            width: 150,
            height: 60,
            borderRightWidth: 1,
            borderRightColor: theme.DARK_GRAY_COLOR,
            borderBottomWidth: 1,
            borderBlockColor: theme.DARK_GRAY_COLOR,
            justifyContent: 'space-between',
        },

        middleBoxRight: {
            width: 150,
            height: 60,
            borderBottomWidth: 1,
            borderBlockColor: theme.DARK_GRAY_COLOR,
            justifyContent: 'space-between',

        },
        middlelastViewLeft: {
            width: 150,
            height: 40,
            borderRightWidth: 1,
            borderBlockColor: theme.DARK_GRAY_COLOR,
            borderRightColor: theme.DARK_GRAY_COLOR,
        },

        middlelastViewRight: {

            width: 150,
            height: 40,
            borderBlockColor: theme.DARK_GRAY_COLOR,

        },
        bottomView: {
            flex: 1,
            // backgroundColor:'red',
            alignItems: 'flex-end',

        },
        textSmall: {
            fontSize: theme.FONT_SIZE_SMALL,
            marginLeft: 8,
            color: theme.DARK_GRAY_COLOR,
            marginBottom: 5,
        },
        textLarge: {
            fontSize: theme.FONT_SIZE_LARGE,
            marginLeft: 8,
            color: theme.DARK_GRAY_COLOR,

        },
        title: {
            marginTop: 30,
            fontSize: theme.FONT_SIZE_HEADER_ONE,
            color: theme.DEEP_BLACK_COLOR,
            textAlign: 'center',
            fontWeight: '500',

        },
        secondTitle: {
            fontSize: theme.FONT_SIZE_LARGE,
            color: 'blue',
            textAlign: 'center',
            fontWeight: '500',
        },
        prize: {
            fontSize: theme.FONT_SIZE_HEADER_ONE_MEDIUM,
            textAlign: 'center',
            color: theme.DEEP_BLACK_COLOR,
            fontWeight: '500',
        },

        logo: {
            marginHorizontal: 10,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '10%',

        },

        middleFirstViewLeft: {
            width: 150,
            height: 40,
            borderBlockColor: theme.DARK_GRAY_COLOR,
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderColor: theme.DARK_GRAY_COLOR,
        },
        middleFirstViewRight: {
            width: 150,
            height: 40,
            borderBlockColor: theme.DARK_GRAY_COLOR,
            borderBottomWidth: 1,

        },


        circleCheckedView: {
            //backgroundColor:'red',
            alignItems: 'center',
            height: '40%',
            width: '100%',
            justifyContent: 'center',

        },

        success: {
            color: theme.DARK_GREEN_COLOR,
            textAlign: 'center',
            fontSize: theme.FONT_SIZE_LARGE,
            fontWeight: 'bold',

        },

        commonSmallButton: {
            alignItems: 'center',
            height: '10%',
            width: '100%',
            justifyContent: 'center',
            //backgroundColor:'red',     
        },

        errorContainer : {
            alignItems:'center',
            justifyContent:'space-around',

        },

        errorMsg : {
            fontSize:theme.FONT_SIZE_LARGE,
            color:'red',
            fontWeight:'bold',
           
        }


    });

    return TransferReceiptSuccessStyles;
};