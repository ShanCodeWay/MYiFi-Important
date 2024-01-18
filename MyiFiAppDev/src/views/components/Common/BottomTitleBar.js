// BottomTitleBar.js
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Android_Theme_Light } from "../../../styles/Themes";
import GetBottomTitleBarStyles from './BottomTitleBarStyles';

const BottomTitleBar = (props) => {
  try {
    return (
      <View style={GetBottomTitleBarStyles(Android_Theme_Light).bottomTitleBarContainer}>

        <View style={GetBottomTitleBarStyles(Android_Theme_Light).bottomTitleBarLeft} >
          <TouchableOpacity
            style={GetBottomTitleBarStyles(Android_Theme_Light).icon}
            onPress={props.onPressIcon1}
          >
            {props.icon1 && <props.icon1 />}
          </TouchableOpacity>
        </View>
        <View style={GetBottomTitleBarStyles(Android_Theme_Light).bottomTitleBarMiddle}></View>

        <View style={GetBottomTitleBarStyles(Android_Theme_Light).bottomTitleBarRight}>
          <TouchableOpacity
            style={GetBottomTitleBarStyles(Android_Theme_Light).icon}
            onPress={props.onPressIcon2}
          >
            {props.icon2 && <props.icon2 />}
          </TouchableOpacity>
        </View>
      </View>
    );
  } catch (error) {
    console.log("[BottomTitleBar] - Error ", error);
  }
};

export default BottomTitleBar;
