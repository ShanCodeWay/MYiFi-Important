import React, { useEffect } from "react";
import { View, Text } from "react-native";
import GetPaginationIndicatorStyles  from "./PaginationIndicatorStyle ";
import {
  Android_Theme_Light,
  Android_Theme_Dark,
} from "../../styles/Themes";
import { GetCommonStyles } from "../../styles/CommonStyles";


//Done by: Darshana 24/01/02

const PaginationIndicator = (props) => {

  useEffect(() => {
    
    return () => {
      
    };
  }, []);

  const renderPaginationCircles = () => {
    try {
    const totalScreens = 3;
    const activeScreen = props.pageNumber - 1;
    // -1 Because Page numbers start from 0 
    return Array.from({ length: totalScreens }, (_, index) => (
      <View
        key={index}
        style={[
          GetPaginationIndicatorStyles(Android_Theme_Light).circle,
          index === activeScreen
            ? GetPaginationIndicatorStyles(Android_Theme_Light).activeCircle
            : GetPaginationIndicatorStyles(Android_Theme_Light).inactiveCircle,
        ]}
      />     
    ));   
      }
    catch (error) {
      console.error("[Pagination-Indicator]-Error rendering pagination circles EX:", error);
     
      return null;}
      
  };
try {return (
  <View style={GetPaginationIndicatorStyles(Android_Theme_Light).paginationIndicatorContainer}>
    <View style={GetPaginationIndicatorStyles(Android_Theme_Light).paginationIndicator}>
      {renderPaginationCircles()}
    </View>

    <Text style={GetPaginationIndicatorStyles(Android_Theme_Light).titleText}>{props.text}</Text>
  </View>
);
} catch (error) {{console.error("[Pagination-Indicator]-Error rendering pagination circles EX:", error);}}
  

};

export default PaginationIndicator;
