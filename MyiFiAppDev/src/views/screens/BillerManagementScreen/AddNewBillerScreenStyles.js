import { StyleSheet } from "react-native";

export const GetAddNewBillerScreenStyles = (theme) => {


    const AddNewBillerScreenStyles = StyleSheet.create({
        topView: {
            paddingTop: 10,
            width: "90%",
            justifyContent: 'flex-start',
            flex: 1,
        },

        bottomView: {
            height: 150,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
        },
        nickNameContainer: {
            paddingTop: 10,

        },
        billerCategoryContainer: {
            paddingTop: 10,
            flexDirection: "row",

        },
        serviceProviderContainer: {
            paddingTop: 10,
        },
        pakageContainer: {
            paddingTop: 10,
        },
        tellphoneNumberContainer: {
            paddingTop: 10,

        },
        accountNumberContainer: {
            paddingTop: 10,

        },
        billerCategoryContainer1: {
            flex: 1,
            flexDirection: "row",
            width: 100,
            //backgroundColor:"pink"
        },
        billerCategoryContainer2: {
            flex: 1,
            //backgroundColor:"pink"
        },
        labelText: {
            color:theme.  BLACK_COLOR,
            fontSize:theme.  FONT_SIZE_SMALL,
            fontFamily: theme.POPPINS_REGULAR,
            textAlign: "left",
           // fontWeight:'bold',
            //backgroundColor:'red',
            marginBottom:5,
        }
    });

    return AddNewBillerScreenStyles;

};

















