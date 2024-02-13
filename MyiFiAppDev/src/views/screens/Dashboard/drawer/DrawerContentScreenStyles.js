import { StyleSheet } from "react-native";

export default GetDrawerContentScreenStyles = (theme) => {

    const DrawerContentScreenStyles =  StyleSheet.create({

        parentContainer:{
            flex:1,
        },
        topContainer:{
            height:50,
            width:'100%',
            flexDirection:'row',
            margin:10,
        },
        flatlistContainer:{
            flex:1,
            //width:'100%',
            margin:10,
        },
        footerContainer:{
            height:100,
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:20,
        },
        profilepic_View:{
            width:50,
            height:'100%',
            justifyContent:'center',
            alignItems:'center',
        },
        userdetails_View:{
            flex:1,
            height:'100%',
            justifyContent:'center',
            alignItems:'flex-start',
            marginLeft:10,
        },
        textUsername: {
            color: theme.DEEP_BLACK_COLOR,
            fontSize: theme.FONT_SIZE_BODY_ONE_REGULAR,
            fontFamily: theme.POPPINS_REGULAR,
            textAlign:'left'
        },
        signout_View:{
            width:80,
            height:40,
            backgroundColor:theme.DARK_GRAY_COLOR,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
        },
        textSignout: {
            color: theme.BACKGROUND_COLOR,
            fontSize: theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
            fontFamily: theme.POPPINS_MEDIUM,
            textAlign:'center'
        },


    })

    return DrawerContentScreenStyles;

}