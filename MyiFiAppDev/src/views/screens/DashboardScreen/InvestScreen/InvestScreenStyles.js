import { StyleSheet } from "react-native";

export const GetInvestScreenStyles = (theme) => {


    const InvestScreenStyles = StyleSheet.create({


        topView: {
            flex: 1,
            //backgroundColor: 'red',
            marginHorizontal: 20,
        },

        twoButtonContainer: {
            //backgroundColor: 'blue',
            alignContent: 'center',
            alignItems: 'center',
            height: '50%',
        },
        textContainer: {

            height: '30%',
            //backgroundColor:'green',
            marginLeft: 5,
            marginTop: 10,
            justifyContent: 'space-around',
        },

        toperText: {
            fontSize: theme.FONT_SIZE_HEADER_TWO,
            color: theme.BLACK_COLOR,
            fontWeight: '700',
            marginBottom: 10,

        },
        middleText: {
            fontSize: theme.FONT_SIZE_18,
            color: theme.BLACK_COLOR,
            fontWeight: '500',


        },
        bottomTextSmall: {
            fontSize: theme.FONT_SIZE_SMALL,
            fontWeight: '400',
            color: theme.DARK_GREEN_COLOR,
            paddingTop: 7,

        },
        bottomTextLarge: {
            fontSize: theme.FONT_SIZE_HEADER_TWO,
            fontWeight: '400',
            color: theme.DARK_GREEN_COLOR,
        },

        spaceContainer: {
            height: '10%',

        },

        middleView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            //backgroundColor: 'yellow',
        },

        bottomView: {
            height: '10%',

        },
        prizeTextContainer: {
            flexDirection: 'row',

        },

        image: {
            width: 40,
            height: 40,



        },
        textAndImage: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            //backgroundColor:'red',
            alignContent: 'center',
        },

    });

    return InvestScreenStyles;

};

















