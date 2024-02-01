import { StyleSheet } from "react-native";

                                 //Nawodya 1/31/2024


export const GetBillPaymentTransferReceiptScreenStyles = (theme) => {

    const BillPaymentTransferReceiptScreenStyles = StyleSheet.create({
        container: {
            flexGrow: 1,

        },
        parentView: {
            flex: 1,
            justifyContent: 'space-between',
            marginTop: 30,
        },
        outView: {
            height:'200',
            justifyContent: 'space-between',
            marginTop: '10',
          //  backgroundColor:'red',

        },
        middleView: {
            flex: 1,
           
            // width: '100%',
           
            justifyContent: 'center',
           // height: '100%',
          // backgroundColor:'black',

        },
        // middleViewout: {

        // },
        // middleBoxLeft: {
        //     width: 150,
        //     height: 60,
        //     borderRightWidth: 1,
        //     borderRightColor: theme.DARK_GRAY_COLOR,
        //     borderBottomWidth: 1,
        //     borderBlockColor: theme.DARK_GRAY_COLOR,
        //     justifyContent: 'space-between',
        // },

        // middleBoxRight: {
        //     width: 150,
        //     height: 60,
        //     borderBottomWidth: 1,
        //     borderBlockColor: theme.DARK_GRAY_COLOR,
        //     justifyContent: 'space-between',

        // },
        // middlelastViewLeft: {
        //     width: 150,
        //     height: 40,
        //     borderRightWidth: 1,
        //     borderBlockColor: theme.DARK_GRAY_COLOR,
        //     borderRightColor: theme.DARK_GRAY_COLOR,
        // },

        // middlelastViewRight: {
        //     width: 150,
        //     height: 40,
        //     borderBlockColor: theme.DARK_GRAY_COLOR,

        // },
        bottomView: {
            height: 50,
            alignItems: 'flex-end',
        //    backgroundColor:'green',

        },
        // textSmall: {
        //     fontSize: theme.FONT_SIZE_SMALL,
        //     marginLeft: 8,
        //     color: theme.DARK_GRAY_COLOR,
        //     marginBottom: 5,
        // },
        // textLarge: {
        //     fontSize:theme.FONT_SIZE_LARGE,
        //     marginLeft: 8,
        //     color: theme.DARK_GRAY_COLOR,

        // },
        title: {
            marginTop:30,
            fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
            color: theme.DEEP_BLACK_COLOR,
            textAlign: 'center',
            fontFamily:theme.POPPINS_MEDIUM,
                  
        },
        secondTitle: {
            fontSize: theme.FONT_SIZE_HEADER_TWO,
            color: theme. LIGHT_BLUE_COLOR,
            textAlign: 'center',
            fontFamily:theme.POPPINS_MEDIUM,

        },
        prize: {
            fontSize: theme.FONT_SIZE_HEADER_ONE_MEDIUM,
            textAlign: 'center',
            color: theme.DEEP_BLACK_COLOR,
            fontWeight:'500',
        },

        logo: {
            
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: 100,
          //  backgroundColor: 'red',
     
        },

        // middleFirstViewLeft: {
        //     width: 150,
        //     height: 40,
        //     borderBlockColor: theme.DARK_GRAY_COLOR,
        //     borderBottomWidth:1,
        //     borderRightWidth: 1,
        //     borderColor:theme.DARK_GRAY_COLOR,
        // },
        // middleFirstViewRight: {
        //     width: 150,
        //     height: 40,
        //     borderBlockColor: theme.DARK_GRAY_COLOR,
        //     borderBottomWidth: 1,

        // },

        textsmall: {
            fontSize: theme.FONT_SIZE_HEADER_TWO,
            color:theme.DEEP_BLACK_COLOR,
            fontFamily:theme.  POPPINS_BOLD,
            marginTop:10,
          },
          amount: {
            fontSize: theme.FONT_SIZE_HEADER_ONE_MEDIUM,
            color:theme.DEEP_BLACK_COLOR,
            fontFamily: theme.  POPPINS_MEDIUM,
          },
          prizeContainer: {
            flexDirection: 'row',
            justifyContent:'center',
            alignItems:'center',
          }

    });

    return BillPaymentTransferReceiptScreenStyles;
};