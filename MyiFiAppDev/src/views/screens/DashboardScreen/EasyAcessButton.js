import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Colors from "../../../styles/Colors";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../styles/Themes";
import DashboardScreenStyles from "./DashboardScreenStyles";

//Modified by : Dinuranga
const EasyAcessButton = (props) => {
  return (
    <TouchableOpacity
    style={[DashboardScreenStyles.easyAccessButtonView]}
    onPress={props.onPress}
  >
    <View style={[DashboardScreenStyles.easyAccessIconButtonView]}>
      <props.icon />
    </View>
    <Text
      style={[
        GetCommonStyles(Android_Theme_Light)
          .TextStyleCaption12Medium,
        {
          marginTop: 10,
        },
      ]}
    >
    {props.title}
    </Text>
  </TouchableOpacity>
  );
};

export default EasyAcessButton;

//How to use
{
  /* <CommonSmallButton
onPress={() => null}
text={"Test"}
width={"40%"}
icon={Icon_Verfied}
/> */
}
