import { StyleSheet } from "react-native";

export const GetAddNewPayeeScreenStyles = (theme) => {


    const AddNewPayeeScreen = StyleSheet.create({
        topView: {
            padding: 10,
            width: "100%",
            justifyContent: 'flex-start',
            flex: 1,
            // marginTop: 10,
        },

        bottomView: {
            height: 150,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          //  backgroundColor: theme.LIGHT_BLUE_COLOR,
        },
        nickNameContainer: {
            paddingTop: 10,
           // backgroundColor: 'red',

        },

        pakageContainer: {
            paddingTop: 10,
            width: "100%",
           // backgroundColor: 'pink',
        },

        tellphoneNumberContainer: {
            paddingTop: 10,
          //  backgroundColor: 'yellow',

        },
        accountNumberContainer: {
            paddingTop: 10,
          //  backgroundColor: 'blue',

        },
      
        labelText: {
            color:theme.  BLACK_COLOR,
            fontSize:theme.  FONT_SIZE_SMALL,
            fontFamily: theme.POPPINS_REGULAR,
            textAlign: "left",
            marginBottom:5,
      
        }
    });

    return AddNewPayeeScreen;

};

















