import * as React from "react";
import { StyleSheet } from "react-native";

export default GetCommonDropDownStyles = (theme)=> {

  const CommonDropDownStyles = StyleSheet.create({

    parentContainer: {
      flexDirection: "column",
      alignItems: "flex-start",
      //height: 100,
    },

    labelText: {
      fontFamily : theme.POPPINS_MEDIUM,
      color : theme.DEEP_BLACK_COLOR,
      fontSize : theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      textAlign: "left"
    },

    dropdown_Container: {
      flexDirection: "row",
      alignItems: "center",
      width:'100%',
      height:60,
      //borderBottomWidth: 1,
      //borderBottomColor: theme.GRAY_COLOR,
    },

    LinearBtnContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignContent: "center",
        flexDirection:'row',
    },
  
    left_Column: {
      flex: 1,
      height:'100%',
      justifyContent:'center',
      alignItems: "flex-start",
      marginLeft:20,
    },

    amount_Column: {
      flex: 1,
      height:'100%',
      justifyContent:'flex-end',
      alignItems: 'center',
      flexDirection:'row',
    },

    right_Column: {
      width:50,
      //height:'100%',
      justifyContent:'center',
      alignItems: "center",
    },

    isAccountValueText: {
      fontFamily : theme.POPPINS_REGULAR,
      color: theme.BACKGROUND_COLOR,
      fontSize: theme.FONT_SIZE_BODY_TWO_REGULAR,
      textAlign: "left",
    },

    valueText: {
      fontFamily : theme.POPPINS_REGULAR,
      color : theme.BACKGROUND_COLOR,
      fontSize : theme.FONT_SIZE_BODY_ONE_REGULAR,
      textAlign: "left"
    },

    amountText: {
        fontFamily : theme.POPPINS_MEDIUM,
        color : theme.BACKGROUND_COLOR,
        fontSize : theme.FONT_SIZE_HEADER_THREE_MEDIUM,
        textAlign: "right",
        includeFontPadding:false
    },

    lkrText: {
        fontFamily : theme.POPPINS_REGULAR,
        color : theme.BACKGROUND_COLOR,
        fontSize : theme.FONT_SIZE_BODY_TWO_REGULAR,
        marginLeft:10,
        textAlign: "right",
        includeFontPadding:false
    },

   
    dropDownBtnText: {
      textAlign:'center',
      textAlignVertical:'center',
      fontFamily:theme.POPPINS_REGULAR,
      fontSize:theme.FONT_SIZE_BODY_TWO_REGULAR,
      color:theme.BACKGROUND_COLOR
    },
    
    ModelParentContainer: {
      justifyContent: 'flex-end',
      flex: 1,
      alignContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjust the opacity here
    },

    ModelContainer: {
      backgroundColor: theme.BACKGROUND_COLOR,
      width: "100%",
      minHeight:'50%',
      maxHeight: "80%",
      //padding: 12,
      //alignSelf: "center",
      //alignContent: "center",
      //borderRadius: 10,
      borderTopLeftRadius: 30,
      borderTopRightRadius:30
    },
    
    searchView: {
      //height: 50,
      //width: "100%",
      alignItems:'flex-start',
      justifyContent:'flex-start',
      margin:10,
    },

    flatListContainer: {
      //flex:1,
      //height:'100%'
      margin:10,
      minHeight:'20%',
    },

    cancelButtonView: {
      //height: 45,
      //width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.Dark_Blue,
      margin:10,
    },

    listRowContainer: {
      width:'100%',
      height:45,
      borderBottomColor: theme.DARK_GRAY_COLOR,
      borderBottomWidth: 1,
      textAlign:'center',
      justifyContent:'center',
      alignItems:'flex-start'
    },

    listRowText: {
      fontFamily:theme.POPPINS_MEDIUM,
      color:theme.DEEP_BLACK_COLOR,
      fontSize:theme.FONT_SIZE_CAPTION_ONE_MEDIUM,
      alignItems: "flex-start",
    },

    touchable_container: {
      flexDirection: "row",
      width: "100%",
      height: "100%",
    },

  });

  return CommonDropDownStyles;

}
