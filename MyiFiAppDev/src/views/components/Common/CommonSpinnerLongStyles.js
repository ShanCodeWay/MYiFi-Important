/* Darshana 12.01.2024*/

import * as React from "react";
import { StyleSheet } from "react-native";

import themes from "../../../styles/Themes";
import { Android_Theme_Light } from "../../../styles/Themes";
import Colors from "../../../styles/Colors";
import Fonts from "../../../styles/Fonts";

const CommonSpinnerStyles = StyleSheet.create({
  ModelOuterView: {
    justifyContent: "center",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    flexDirection: 'row',
  },

  spinnerOuterStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    height: 50,
    backgroundColor:"white",
    
  },

  IconOuterStyle: {
    justifyContent: "center",
    alignItems: "center",
    width:"100%",
    
    
  },
  ModelInnerView: {
    backgroundColor: Android_Theme_Light.BACKGROUND_COLOR,
    width: "80%",

    padding: 12,

    maxHeight: "80%",
    // minHeight: "20%",
    //  height: "60%",
    alignSelf: "center",
    justifyContent: "space-between",
    alignContent: "center",

    borderRadius: 5,
    
  },

  searchView: {
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    alignContent: "space-between",
    marginTop: 10,
    borderColor: Colors.Dark_Blue,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Android_Theme_Light.BACKGROUND_COLOR,
  },

  SearchTextInput: {
    flex: 1,
    fontSize: 14,

    color: "black",

    height: 40,
  },

  SearchIconView: {
    paddingRight: 12,
    alignItems: "flex-end",
  },

  QuestionListOuterView: {
    marginTop: 10,

    paddingTop: 8,
    paddingBottom: 8,
    maxHeight: "70%",
  },

  singleQuestionView: {
    padding: 12,
    borderBottomColor: Colors.GRAY,
    borderBottomWidth: 1,

    alignItems: "flex-start",
  },

  CanselButtonView: {
    height: 50,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Dark_Blue,
    borderWidth: 1,
    borderRadius: 10,
  },

  CanselButtonText: {
    color: Colors.WHITE,
  },

  text: {
    color: Colors.BLACK_DEEP,

    fontSize: 14,
  },

  textPlaceholder: {
    color: Colors.GRAY,

    fontSize: 14,
  },

  label: {
    fontSize: 12,
  },

  mainview: {
    flexDirection: "row",
    backgroundColor: "black",
    width: "100%",
    height: "28%",


  },

  mainviewcol1: {
    
    justifyContent: "center",
    alignItems: "flex-start",
    
  },

  dropDownBtnContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: "100%",
    width:"100%",
    height: 50,
    alignContent: "center",
    marginVertical: 5,
    marginLeft: 25,
    marginRight: 25,
  },
  itemSelectedContainer: {

    justifyContent: "center",
    alignItems: "flex-end",
  },

  textStyleTitle: {
    color: Colors.Dark_Blue,
    textAlign: "left",
    fontSize: 16,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  left: {
    flex: 6,
    paddingLeft:4,
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight:14,
    
   },

  right:{  

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   
    minHeight:14,

  } ,

  middle:{  

    flex: 6,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    minHeight:14,

  } ,
  ItemText: {
    color: Colors.Dark_Blue,
    fontFamily: Fonts.POPPINS_MEDIUM,
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  ItemMoneyText: {
    color: Colors.GRAY_DARK,
    fontFamily: Fonts.POPPINS_BOLD,
  }

  ,
  ItemTextView: {
    flex: 1,
    color: Colors.Dark_Blue,
    fontFamily: Fonts.POPPINS_MEDIUM,
    flexDirection: 'row', 
    alignItems: 'center', 
  },

  ItemMoneyLeftTextView: {
    flex: 3,
    flexDirection: 'row', 
    color: Colors.GRAY_DARK,
    fontFamily: Fonts.POPPINS_BOLD,
  }
  ,
  ItemMoneyRightTextView: {
    marginLeft:10,
    flex: 3,
    flexDirection: 'row', 
    color: Colors.GRAY_DARK,
    fontFamily: Fonts.POPPINS_BOLD,
  }
  
  


});

export default CommonSpinnerStyles;
