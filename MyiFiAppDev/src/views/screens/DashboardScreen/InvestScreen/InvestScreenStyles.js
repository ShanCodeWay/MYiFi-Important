import { StyleSheet } from "react-native";

export const GetInvestScreenStyles = (theme) => {


    const InvestScreenStyles = StyleSheet.create({


        topView: {
            flex: 1,
            //backgroundColor: 'red',
            marginHorizontal: 20,
            width:'95%',
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
            marginTop: 10,
            justifyContent: 'space-around',
        },

        toperText: {
            fontSize: theme.FONT_SIZE_HEADER_ONE,
            color: theme.BLACK_COLOR,
            fontWeight: '700',
            marginBottom: 10,

        },
        middleText: {
            fontSize: theme.FONT_SIZE_18,
            color: theme.BLACK_COLOR,
            fontWeight: '500',


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
            width: '100%',

        },
        prizeTextContainer: {
            flexDirection: "row",
      alignContent: "center",
      alignItems: "center",

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

















