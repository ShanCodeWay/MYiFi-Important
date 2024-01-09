import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TitleBarStyles } from "./TitleBarStyle";


const TitleBar = (props) => {
  return (
    <View style={TitleBarStyles.titleBarContainer}>
      <View style={TitleBarStyles.titleBarItem}>
        <TouchableOpacity
          style={TitleBarStyles.button}
          onPress={props.onPressLeft}
        >
          {props.nameLeft == null ? null : <props.nameLeft />}
        </TouchableOpacity>

        <TouchableOpacity style={TitleBarStyles.middle}>
          <Text style={TitleBarStyles.titleText}> </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={TitleBarStyles.button}
          onPress={props.onPressRight}
        >
          {props.nameRight == null ? null : <props.nameRight />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TitleBar;
