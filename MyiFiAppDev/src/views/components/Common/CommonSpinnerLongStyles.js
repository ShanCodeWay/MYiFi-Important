/* Darshana 12.01.2024*/
import { StyleSheet } from "react-native";
import themes from "../../../styles/Themes";
import { Android_Theme_Light } from "../../../styles/Themes";
//Done by: Darshana 24/01/02

export const GetCommonSpinnerLongStyles = (theme) => {

const CommonSpinnerLongStyles = StyleSheet.create({

  
  ModelOuterView: {
    justifyContent    : "center",
    flex              : 1,
    alignContent      : "center",
    alignItems        : "center",
    backgroundColor   : "rgba(0, 0, 0, 0.4)",
    flexDirection     : 'row',
  },

  spinnerOuterStyle: {
    flexDirection     : "row",
    alignItems        : "center",
    borderBottomWidth : 1,
    height            : 50,
    backgroundColor   : "white",
    
  },

  IconOuterStyle: {
    justifyContent    : "center",
    alignItems        : "center",
    width             : "100%",
  
    
    
  },
  ModelInnerView: {
    backgroundColor   :theme.BACKGROUND_COLOR,
    width             : "80%",

    padding           : 12,

    maxHeight         : "80%",
    // minHeight: "20%",
    //  height: "60%",
    alignSelf         : "center",
    justifyContent    : "space-between",
    alignContent      : "center",

    borderRadius      : 15,
    
  },

  searchView: {
    width             : "100%",
    flexDirection     : "row",
    alignSelf         : "center",
    alignItems        : "center",
    alignContent      : "space-between",
    marginTop         : 10,
    borderColor       : theme.DARK_BLUE_COLOR,
    borderWidth       : 1,
    borderRadius      : 5,
    backgroundColor   : theme.BACKGROUND_COLOR,
  },

  SearchTextInput: {
    flex              : 1,
    fontSize          : theme.FONT_SIZE_MEDIUM,

    color             : theme.BLACK_COLOR,

    height            : 40,
  },

  SearchIconView: {
    paddingRight      : 12,
    alignItems        : "flex-end",
  },

  QuestionListOuterView: {
    marginTop         : 10,

    paddingTop        : 8,
    paddingBottom     : 8,
    maxHeight         : "70%",
  },

  singleQuestionView: {
    padding           : 12,
    borderBottomColor : theme.GRAY_COLOR,
    borderBottomWidth : 1,

    alignItems        : "flex-start",
  },

  CanselButtonView: {
    height            : 50,
    marginTop         : 15,
    justifyContent    : "center",
    alignItems        : "center",
    backgroundColor   : theme.DARK_BLUE_COLOR,
    borderWidth       : 1,
    borderRadius      : 10,
  },

  CanselButtonText: {
    color             : theme.WHITE_COLOR,
  },

  text: {
    color             : theme.BLACK_COLOR,

    fontSize          : theme.FONT_SIZE_MEDIUM,
  },

  textPlaceholder: {
    color             : theme.GRAY_COLOR,

    fontSize          : theme.FONT_SIZE_MEDIUM,
  },

  label: {
    fontSize          : theme.FONT_SIZE_MEDIUM,
  },

  mainview: {
    flexDirection     : "row",
    backgroundColor   : "black",
    width             : "100%",
    height            : "28%",


  },

  mainviewcol1: {
    
    justifyContent    : "center",
    alignItems        : "flex-start",
    
  },

  dropDownBtnContainer: {
    flexDirection     : 'row',
    justifyContent    : "center",
    alignItems        : "center",
    borderRadius      : 10,
    height            : "100%",
    width             : "100%",
    height            : 50,
    alignContent      : "center",
    
  },
  itemSelectedContainer: {

    justifyContent    : "center",
    alignItems        : "flex-end",
  },

  textStyleTitle: {
    color             : theme.DARK_BLUE_COLOR,
    fontFamily        : theme.POPPINS_MEDIUM,
    textAlign         : "left",
    fontSize          : 16,
    
  },
  left: {
    flex              : 6,
    paddingLeft       : 15,
    justifyContent    : "center",
    alignItems        : "flex-start",
    minHeight         : 14,
    
   },

  right:{  

    flex              : 1,
    justifyContent    : "center",
    alignItems        : "center",
    marginRight :10,
    minHeight         : 14,

  } ,

  middle:{  

    flex              : 6,
    flexDirection     : "row",
    justifyContent    : "flex-start",
    alignItems        : "flex-start",
    minHeight         : 14,

  } ,
  ItemText: {
    color             : theme.DARK_BLUE_COLOR,
    fontFamily        : theme.POPPINS_MEDIUM,
    flexDirection     : 'row',
    alignItems        : 'center',
  },
  ItemMoneyText: {
    color             : theme.DARK_GRAY_COLOR,
    fontFamily        : theme.POPPINS_BOLD,
  }

  ,
  ItemTextView: {
    flex              : 1,
    color             : theme.DARK_BLUE_COLOR,
    fontFamily        : theme.POPPINS_MEDIUM,
    flexDirection     : 'row',
    alignItems        : 'center',
  },

  ItemMoneyLeftTextView: {
    flex              : 3,
    flexDirection     : 'row',
    color             : theme.GRAY_COLOR,
    fontFamily        : theme.POPPINS_BOLD,
  }
  ,
  ItemMoneyRightTextView: {
    marginLeft        : 10,
    flex              : 3,
    flexDirection     : 'row',
    color             : theme.DARK_GRAY_COLOR,
    fontFamily        : theme.POPPINS_BOLD,
  }
  
  


});

return CommonSpinnerLongStyles;
}