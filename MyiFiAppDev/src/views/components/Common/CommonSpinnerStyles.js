import * as React from "react";
import { StyleSheet } from "react-native";

import themes from "../../../styles/Themes";
import { Android_Theme_Light } from "../../../styles/Themes";
import Colors from "../../../styles/Colors";
import Fonts from "../../../styles/Fonts";

//added by Dinuranga 23-09-05
const CommonSpinnerStyles = StyleSheet.create({
  ModelOuterView: {
    justifyContent: "center",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjust the opacity here
  },

  spinnerOuterStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    height: 50,
  },

  IconOuterStyle: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginLeft: 5,
  },
  ModelInnerView: {
    backgroundColor: Android_Theme_Light.BACKGROUND_COLOR,
    width: "90%",

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
    justifyContent: "space-around",
    width: "100%",
    height: "100%",

    
  },

  mainviewcol1: {
    padding: 2,
    flex: 6,
    justifyContent: "center",
    alignItems: "flex-start",
    //backgroundColor:'yellow',
  },

  dropDownBtnContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: "100%",
    width: 70,
    height: 40,
    alignContent: "center",
    marginVertical: 5,
  },
  itemSelectedContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyleTitle: {
    color: Colors.Dark_Blue,
    textAlign: "left",
    fontSize: 12,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },

  title: {
    
    width: "100%",
    fontSize: 12,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
});

export default CommonSpinnerStyles;
