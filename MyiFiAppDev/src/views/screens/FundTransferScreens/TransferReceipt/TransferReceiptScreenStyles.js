import { StyleSheet } from "react-native";



export const GetTransferReceiptScreenStyles = (theme) => {

    const TransferReceiptScreenStyles = StyleSheet.create({
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
            justifyContent: 'space-between',
            marginTop: '10',
            //backgroundColor:'red',

        },
        middleView: {
            flex: 3,
            flexDirection: 'row',
            width: '100%',
            paddingHorizontal: 30,
            justifyContent: 'flex-start',
            height: '100%',

        },
        middleViewout: {

        },
        middleBoxLeft: {
            width: 150,
            height: 60,
            borderRightWidth: 1,
            borderRightColor: theme.TextStyleCaptionColor,
            borderBottomWidth: 1,
            borderBlockColor: theme.TextStyleCaptionColor,
            justifyContent: 'space-between',
        },

        middleBoxRight: {
            width: 150,
            height: 60,
            borderBottomWidth: 1,
            borderBlockColor: theme.TextStyleCaptionColor,
            justifyContent: 'space-between',

        },
        middlelastViewLeft: {
            width: 150,
            height: 40,
            borderRightWidth: 1,
            borderBlockColor: theme.TextStyleCaptionColor,
            borderRightColor: theme.TextStyleCaptionColor,
        },

        middlelastViewRight: {
            width: 150,
            height: 40,
            borderBlockColor: theme.TextStyleCaptionColor,

        },
        bottomView: {
            flex: 1,

        },
        textSmall: {
            fontSize: theme.FONT_SIZE_SMALL,
            marginLeft: 8,
            color: theme.TextStyleCaptionColor,
            marginBottom: 5,
        },
        textLarge: {
            fontSize:theme.FONT_SIZE_LARGE,
            marginLeft: 8,
            color: theme.TextStyleCaptionColor,

        },
        title: {
            marginTop:30,
            fontSize: theme.FONT_SIZE_HEADER_ONE,
            color: theme.TextStyleH1Color,
            textAlign: 'center',
            fontWeight:'500',
            
            
        },
        secondTitle: {
            fontSize: theme.FONT_SIZE_LARGE,
            color: 'blue',
            textAlign: 'center',
            fontWeight:'500',


        },
        prize: {
            fontSize: theme.FONT_SIZE_HEADER_ONE,
            textAlign: 'center',
            color: theme.TextStyleH1Color,
            fontWeight:'500',
        },

        logo: {
            marginHorizontal: 40,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'flex-start',
           //backgroundColor: 'blue',
        },

        middleFirstViewLeft: {
            width: 150,
            height: 40,
            borderBlockColor: theme.TextStyleCaptionColor,
            borderBottomWidth:1,
            borderRightWidth: 1,
            borderColor:theme.TextStyleCaptionColor,
        },
        middleFirstViewRight: {
            width: 150,
            height: 40,
            borderBlockColor: theme.TextStyleCaptionColor,
            borderBottomWidth: 1,

        },

    });

    return TransferReceiptScreenStyles;
};