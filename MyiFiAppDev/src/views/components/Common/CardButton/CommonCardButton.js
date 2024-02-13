import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import GetCommonCardButtonStyles from "./CommonCardButtonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { AmountSeperation } from "../../../../utils/helpers";

const CommonCardButton = (props) => {
  return (
    <View
      style={[GetCommonCardButtonStyles(Android_Theme_Light).buttonParentContainer,
        {
          width: props.width == null ? "100%" : props.width,
          height: props.height == null ? 50 : props.height,
        },
      ]}>

      <TouchableOpacity 
        onPress={props.onPress}>

        <LinearGradient
          angle={70}
          useAngle={true}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#0044A9", "#1356B7", "#4082D8", "#75B4FF"]}
          style={GetCommonCardButtonStyles(Android_Theme_Light).buttonContainer}>
          
          {
          
            props.icon ? (
              
              <View 
                style={GetCommonCardButtonStyles(Android_Theme_Light).iconView}>
                
                <props.icon  width = {props.iconWidth || 22} height = {props.iconHeight || 22} 
                  fill = {Android_Theme_Light.WHITE_COLOR} />
              </View> 
            ) : null
          }

          {
          
            props.text ? (

              <View 
                style={GetCommonCardButtonStyles(Android_Theme_Light).textView}>
            
                <Text
                  style={GetCommonCardButtonStyles(Android_Theme_Light).buttonText}>
                  {props.text}
                </Text>

              </View>
            ) : null
          
          }

          {
          
            props.amount ? (
            
              <View 
                style={GetCommonCardButtonStyles(Android_Theme_Light).amountView}>
                
                <Text style={ GetCommonCardButtonStyles(Android_Theme_Light).amountRsText}>
                  Rs.
                </Text>
                
                <Text style={GetCommonCardButtonStyles(Android_Theme_Light).amountIntegerText}>
                  {AmountSeperation(props.amount)[0]}
                </Text>
                
                <Text style={GetCommonCardButtonStyles(Android_Theme_Light).amountDecimalText}>
                  {AmountSeperation(props.amount)[1]}
                </Text>

              </View>
           
            ) : null
          }

        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default CommonCardButton;

//How to use

/*
<CommonCardButton
  onPress={() => null}
  text={"Test"}
  width={"40%"}
  icon={Icon_Verfied}
  iconWidth={25}
  iconHeight={25}/> 
*/

