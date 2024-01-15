import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CommonCardButtonStyles from "./CommonCardButtonStyles";
import Colors from "../../../styles/Colors";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../styles/Themes";

//Done by : Dinuranga
const CommonCardButton = (props) => {
  return (
    <View
      style={[
        CommonCardButtonStyles.buttonOuterContainer,
        {
          width: props.width == null ? "100%" : props.width,
          height: props.height == null ? 50 : props.height,
        },
      ]}
    >
      <TouchableOpacity onPress={props.onPress}>
        <LinearGradient
          angle={70}
          useAngle={true}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#0044A9", "#4384DA", "#75B4FF"]}
          style={[
            CommonCardButtonStyles.buttonContainer,
            {
              justifyContent: props.text == null ? "center" : "flex-start",
            },
          ]}
        >
          {props.icon ? (
            <View style={CommonCardButtonStyles.IconOuterStyle}>
              <props.icon fill={Colors.WHITE} />
            </View>
          ) : null}

          {props.text ? (
            <Text
              style={[
                GetCommonStyles(Android_Theme_Light).TextStyleBody16Medium,
                {
                  color: Colors.WHITE,
                },
              ]}
            >
              {props.text}
            </Text>
          ) : null}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default CommonCardButton;

//How to use
{
  /* <CommonSmallButton
onPress={() => null}
text={"Test"}
width={"40%"}
icon={Icon_Verfied}
/> */
}
