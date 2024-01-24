import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import GetCommonButtonStyles  from "./CommonButtonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import Colors from "../../../../styles/Colors";
import Fonts from "../../../../styles/Fonts";

//Button 0 is Rectangle Shape Button
//Button 1 is Rounded Shape Button

const CommonButton = (props) => {

  const renderButton = () => {

    try{

    if (props.type === "0") {                               
                                                            
      return (

        <View style={GetCommonButtonStyles(Android_Theme_Light).parentContainer}>
          
          <TouchableOpacity
            style={[GetCommonButtonStyles(Android_Theme_Light).ButtonContainer,
              { 
                height: props.height || 45, 
                width: props.width || "100%",
                backgroundColor: props.backgroundColor || Android_Theme_Light.GRAY_COLOR,
                borderRadius: props.borderRadius || 10
              }
            ]}
            onPress={props.onPress}
          >
            {
              props.leftIcon ?

              <View style={GetCommonButtonStyles(Android_Theme_Light).iconContainer}>
                <props.leftIcon/>
              </View> : null
            }

            <View style={[GetCommonButtonStyles(Android_Theme_Light).textContainer,
              {alignItems: props.textAlign || "center"}]}>

              <Text 
                style={[GetCommonButtonStyles(Android_Theme_Light).buttonText,
                  {
                    color: props.textColor || Android_Theme_Light.DEEP_BLACK_COLOR,
                    fontFamily: props.fontFamily || Android_Theme_Light.POPPINS_REGULAR,
                    fontSize: props.textSize || 14,
                    //textAlign: props.textAlign || "center"
                  }
                ]}
              >
                {props.title}
              </Text>
            </View>
            
            {
              props.RightIcon ?

              <View style={GetCommonButtonStyles(Android_Theme_Light).iconContainer}>
                <props.RightIcon/>
              </View> : null
            }
            
          </TouchableOpacity>
        </View>
      );                                     
                                              
    } 
    else if (props.type === "1") {
      
      return (
        
        <View style={GetCommonButtonStyles(Android_Theme_Light).parentContainer}>
          
          <TouchableOpacity
            style={[GetCommonButtonStyles(Android_Theme_Light).ButtonContainer,
              {
                height: props.height || 45, 
                width: props.width || "100%",
                backgroundColor: props.backgroundColor || Android_Theme_Light.BLUE_COLOR,
                borderRadius: props.borderRadius || 25
              },
            ]}
            onPress={props.onPress}
          >

            {
              props.leftIcon ?

              <View style={GetCommonButtonStyles(Android_Theme_Light).iconContainer}>
                <props.leftIcon/>
              </View> : null
            }

            <View style={[GetCommonButtonStyles(Android_Theme_Light).textContainer,
              {alignItems: props.textAlign || "center"}]}>

              <Text
                style={[
                  GetCommonButtonStyles(Android_Theme_Light).buttonText,
                  {
                    marginLeft: props.textAlign == "flex-start" ? 10 : 0,
                    color: props.textColor || Android_Theme_Light.WHITE_COLOR,
                    fontFamily: props.fontFamily || Android_Theme_Light.POPPINS_SEMIBOLD,
                    fontSize: props.textSize || 15,
                    //textAlign: props.textAlign || "center"
                  },
                ]}
              >
                {props.title || "Ok"}
              </Text>

            </View>

            {
              props.RightIcon ?

              <View style={GetCommonButtonStyles(Android_Theme_Light).iconContainer}>
                <props.RightIcon/>
              </View> : null
            }
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
