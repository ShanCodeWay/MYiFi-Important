import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Icon_Lock from "../../../assets/icons/Icon_Lock.svg";
import Icon_Forward_Navigate from "../../../assets/icons/Icon_Forward_Navigate.svg";

import CommonButtonStyles  from "./CommonButtonStyles";


import Fonts from "../../../styles/Fonts";
import Colors from "../../../styles/Colors";

//Done by: Darshana 24/01/02

//Button 0 is Rectangle Shape Button
//Button 1 is Rounded Shape Button

const CommonButton = (props) => {
  const renderButton = () => {

    try{

    if (props.type === "0") {                               //Button 0 is Rectangle Shape Button
                                                            //Button 1 is Rounded Shape Button
      return (
        <View style={CommonButtonStyles.button0OuterContainer}>
          <TouchableOpacity
            style={[
              CommonButtonStyles.button0,
              {
                width: props.btnWidth == null ? "100%" : props.btnWidth,
                backgroundColor: props.backgroundColor || Colors.GRAY,
                borderRadius: props.borderRadius || 10,
              },
            ]}
            onPress={props.onPress}
          >
            {props.icon == null ? null : (
    <props.icon fill={inputValue ? "#00377B" : Colors.GRAY} />
  )}
            <Text
              style={[
                CommonButtonStyles.text,
                {
                  color: props.textColor || Colors.BLUE_ACCENT,
                  fontFamily: props.fontFamily || Fonts.POPPINS_BOLD,
                  fontSize: props.textSize || 15,
                },
              ]}
            >
              {props.title}
            </Text>
            {props.icon == null ? null : (
              
    <props.icon fill={inputValue ? "#00377B" : Colors.GRAY} />
  )}
            
          </TouchableOpacity>
        </View>
      );                                      //Button 0 is Rectangle Shape Button
                                              //Button 1 is Rounded Shape Button
    } else if (props.type === "1") {
      return (
        <View style={CommonButtonStyles.button1OuterContainer}>
          <TouchableOpacity
            style={[
              CommonButtonStyles.button1,
              {
                width: props.btnWidth == null ? "100%" : props.btnWidth,
                backgroundColor: props.backgroundColor || Colors.Blue,
                borderRadius: props.borderRadius || 25,
              },
            ]}
            onPress={props.onPress}
          >
            <Text
              style={[
                CommonButtonStyles.text,
                {
                  color: props.textColor || Colors.BLUE_ACCENT,
                  fontFamily: props.fontFamily || Fonts.POPPINS_SEMIBOLD,
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
  } 
  
  catch (error) {
    console.error("Error rendering button:", error);
  };
  
  };
  return renderButton();
};
//Button 0 is Rectangle Shape Button
//Button 1 is Rounded Shape Button
export default CommonButton;
