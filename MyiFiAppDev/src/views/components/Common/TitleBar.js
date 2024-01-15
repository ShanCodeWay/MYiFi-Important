import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TitleBarStyles from "./TitleBarStyle";

const TitleBar = (props) => {
  try {
    return (
      <View style={TitleBarStyles.titleBarContainer}>
        <View style={TitleBarStyles.titleBarItem}>

          {props.nameLeft ? (
            <TouchableOpacity
              style={TitleBarStyles.left}
              onPress={props.onPressLeft}
            >
              {props.nameLeft && <props.nameLeft />}
            </TouchableOpacity>
          ) : (
            <View style={TitleBarStyles.left} />
          )}

          <View style={TitleBarStyles.middle}>
            <Text style={[
              TitleBarStyles.titleText,
              { textAlign: props.textAlign || "left" }
            ]}>
              {props.title}
            </Text>
          </View>

          {props.nameRight ? (
            <TouchableOpacity
              style={TitleBarStyles.right}
              onPress={props.onPressRight}
            >
              {props.nameRight && <props.nameRight />}
            </TouchableOpacity>
          ) : (
            <View style={TitleBarStyles.right} />
          )}
        </View>
      </View>
    );
  } catch (Error) {
    console.log("[TitleBar] - Error ", Error);
  }
};

export default TitleBar;
