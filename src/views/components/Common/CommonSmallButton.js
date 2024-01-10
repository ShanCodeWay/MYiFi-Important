import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CommonSmallButtonStyles from "./CommonSmallButtonStyles";
import Colors from "../../../styles/Colors";
//Done by : Randima
//Modified by : Dinuranga
const CommonSmallButton = (props) => {
  return (
    <View
      style={[
        CommonSmallButtonStyles.buttonOuterContainer,
        { width: props.width == null ? "100%" : props.width },
      ]}
    >
      <TouchableOpacity onPress={props.onPress}>
        <LinearGradient
          angle={70}
          useAngle={true}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#0044A9", "#4384DA", "#75B4FF"]}
          style={[CommonSmallButtonStyles.buttonContainer]}
        >
          {props.icon ? (
            <View style={CommonSmallButtonStyles.IconOuterStyle}>
              <props.icon fill={Colors.WHITE} />
            </View>
          ) : null}
          <Text style={CommonSmallButtonStyles.buttonText}>{props.text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default CommonSmallButton;

//How to use
{
  /* <CommonSmallButton
onPress={() => null}
text={"Test"}
width={"40%"}
icon={Icon_Verfied}
/> */
}
