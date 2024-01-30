import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import GetCardButtonSettingsStyles from "./CardButtonSettingsStyles";
import Colors from "../../../../styles/Colors";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { AmountSeperation } from "../../../../utils/helpers";

//Done by : Darshana
const CardButtonSettings = (props) => {
  return (

    <><View
    style={GetCardButtonSettingsStyles(Android_Theme_Light).cardTitleView} >
      {props.icon ? (
              <View
                style={GetCardButtonSettingsStyles(Android_Theme_Light).IconOuterStyle}
              >
                <props.icon fill={Colors.DEEP_BLACK_COLOR} />
              </View>
            ) : null}

            {props.text ? (
              <Text
                style={[
                  GetCommonStyles(Android_Theme_Light).TextStyleBody16Medium,
                  {
                    color: Colors.DEEP_BLACK_COLOR,
                  },
                ]}
              >
                {props.text}
              </Text>
            ) : null}



      <Text>Hi</Text>
    </View>
    
    <View
      style={[
        GetCardButtonSettingsStyles(Android_Theme_Light).buttonOuterContainer,
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
              GetCardButtonSettingsStyles(Android_Theme_Light).buttonContainer,
              {
                justifyContent: props.text == null ? "center" : "flex-start",
              },
            ]}
          >
            {props.icon ? (
              <View
                style={GetCardButtonSettingsStyles(Android_Theme_Light).IconOuterStyle}
              >
                <props.icon fill={Colors.DEEP_BLACK_COLOR} />
              </View>
            ) : null}

            {props.text ? (
              <Text
                style={[
                  GetCommonStyles(Android_Theme_Light).TextStyleBody16Medium,
                  {
                    color: Colors.BLACK,
                  },
                ]}
              >
                {props.text}
              </Text>
            ) : null}

            {props.amount ? (
              <View
                style={[
                  GetCardButtonSettingsStyles(Android_Theme_Light).BalanceContainer,
                ]}
              >


                <View
                  style={GetCommonStyles(Android_Theme_Light).amountContainer}
                >

                  <Text style={[GetCommonStyles(Android_Theme_Light).amountRsText, { color: Android_Theme_Light.DARK_GREEN_COLOR }]}>
                    Rs.
                  </Text>
                  <Text
                    style={GetCommonStyles(Android_Theme_Light).amountIntegerText}
                  >
                    {AmountSeperation(props.amount)[0]}
                  </Text>
                  <Text
                    style={GetCommonStyles(Android_Theme_Light).amountDecimalText}
                  >
                    {AmountSeperation(props.amount)[1]}
                  </Text>
                </View>
              </View>
            ) : null}
          </LinearGradient>
        </TouchableOpacity>
        <View
          style={GetCardButtonSettingsStyles(Android_Theme_Light).bottomView}
        >
          <Text>Hi</Text>
        </View>


      </View></>

   
   
  
  );
};

export default CardButtonSettings;

//How to use
{
  /* <CommonSmallButton
onPress={() => null}
text={"Test"}
width={"40%"}
icon={Icon_Verfied}
/> */
}
