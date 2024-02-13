import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Android_Theme_Light } from "../../../../styles/Themes";

import GetMainTitleBarStyle from "./MainTitleBarStyle"

const MainTitleBar = (props) => {
  
  try {
    
    return (
      
      <View style={GetMainTitleBarStyle(Android_Theme_Light).mainContainer}>

        {
          props.IconLeft ?
            <View style={GetMainTitleBarStyle(Android_Theme_Light).leftIcon}>

              <TouchableOpacity
                style={GetMainTitleBarStyle(Android_Theme_Light).button_Style}
                onPress={props.onPressLeft}>
              
                <props.IconLeft />
                
            </TouchableOpacity>

            </View> : null
        }
        
        {
          props.TitleText ?
            <View style={GetMainTitleBarStyle(Android_Theme_Light).middleText}>

              <Text style={[GetMainTitleBarStyle(Android_Theme_Light).titleText,
                { textAlign: props.TextAlign || "left" }]}>
              
                {props.TitleText}
              </Text>

            </View> : null
        }

        {
          props.IconRight ?
            <View style={GetMainTitleBarStyle(Android_Theme_Light).rightIcon}>

              <TouchableOpacity
                style={GetMainTitleBarStyle(Android_Theme_Light).button_Style}
                onPress={props.onPressRight}>
               
                <props.IconRight />

              </TouchableOpacity>

            </View> : null
        }
       
      </View>
    );
  } 
  catch (Error) {
    console.log("[TitleBar] - Error ", Error);
  }
};

export default MainTitleBar;
