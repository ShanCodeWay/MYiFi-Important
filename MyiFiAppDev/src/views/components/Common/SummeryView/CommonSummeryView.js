// ValidationDialogs.js_Nawodya

import React, { useState, useEffect, useRef } from "react";
import { View, Text, FlatList } from "react-native";
import { Android_Theme_Light } from "../../../../styles/Themes";
import GetCommonSummeryViewStyles from "./CommonSummeryViewStyles";

const CommonSummeryView = (props) => {
  const SingleSummeryView = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
      <View
        style={[
          GetCommonSummeryViewStyles(Android_Theme_Light)
            .SummerySingleViewContainer,
          {
            borderRightColor: isEven
              ? Android_Theme_Light.DARK_GRAY_COLOR
              : null,
            borderRightWidth: isEven ? 1 : 0,
          },
        ]}
      >
        <View
          style={GetCommonSummeryViewStyles(Android_Theme_Light).LabelContainer}
        >
          <Text
            style={GetCommonSummeryViewStyles(Android_Theme_Light).TextLabel}
          >
            {item.label}
          </Text>
        </View>

        <View
          style={[
            GetCommonSummeryViewStyles(Android_Theme_Light).HorizontalDevider,
          ]}
        />
        <View
          style={[
            GetCommonSummeryViewStyles(Android_Theme_Light).ValueContainer,
          ]}
        >
          <Text
            style={[GetCommonSummeryViewStyles(Android_Theme_Light).TextValue]}
          >
            {item.value}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ width: props.width == null ? "100%" : props.width }}>
      <FlatList
        numColumns={props.numColumns == null ? 2 : props.numColumns}
        data={props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={SingleSummeryView}
      />
    </View>
  );
};

export default CommonSummeryView;
