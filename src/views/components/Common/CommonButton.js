import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles as buttonStyles } from "./CommonButtonStyles";
import Icon_Lock from "../../../assets/icons/Icon_Lock.svg";

import Icon_Forward_Navigate from "../../../assets/icons/Icon_Forward_Navigate.svg";
const numberOfChevrons = 3;
import { CommonButtonStyles } from "./CommonButtonStyles";

const CommonButton = (props) => {
  const renderButton = () => {
    if (props.type === "0") {
      return (
        <View style={CommonButtonStyles.button0OuterContainer}>
          <TouchableOpacity
            style={[
              CommonButtonStyles.button0,
              {
                width: props.btnWidth == null ? "100%" : props.btnWidth,
                backgroundColor: props.backgroundColor || "#A5B4CB",
                borderRadius: props.borderRadius || 10,
              },
            ]}
            onPress={props.onPress}
          >
            <Icon_Lock />
            <Text
              style={[
                CommonButtonStyles.text,
                {
                  color: props.textColor || "#EEF5FF",
                  fontFamily: props.fontFamily || "Poppins-Medium",
                  fontSize: props.textSize || 15,
                },
              ]}
            >
              {props.title}
            </Text>

            <Icon_Forward_Navigate />
          </TouchableOpacity>
        </View>
      );
    } else if (props.type === "1") {
      return (
        <View style={CommonButtonStyles.button1OuterContainer}>
          <TouchableOpacity
            style={[
              CommonButtonStyles.button1,
              {
                width: props.btnWidth == null ? "100%" : props.btnWidth,
                backgroundColor: props.backgroundColor || "#00377B",
                borderRadius: props.borderRadius || 25,
              },
            ]}
            onPress={props.onPress}
          >
            <Text
              style={[
                CommonButtonStyles.text,
                {
                  color: props.textColor || "#EEF5FF",
                  fontFamily: props.fontFamily || "Poppins-SemiBold",
                  fontSize: props.textSize || 15,
                },
              ]}
            >
              {props.title || "Ok"}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return renderButton();
};

export default CommonButton;
