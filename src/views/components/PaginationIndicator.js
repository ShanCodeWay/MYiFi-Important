import React, { useEffect } from "react";
import { View, Text } from "react-native";
import PaginationIndicatorStyles  from "./PaginationIndicatorStyle ";

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
          PaginationIndicatorStyles.circle,
          index === activeScreen
            ? PaginationIndicatorStyles.activeCircle
            : PaginationIndicatorStyles.inactiveCircle,
        ]}
      />
    ));
      }
    catch (error) {
      console.error("Error rendering pagination circles:", error);
      // Handle the error or log it as needed
      // You can return a fallback UI or null if desired
      return null;}
      
  };

  return (
    <View style={PaginationIndicatorStyles.paginationIndicatorContainer}>
      <View style={PaginationIndicatorStyles.paginationIndicator}>
        {renderPaginationCircles()}
      </View>

      <Text style={PaginationIndicatorStyles.titleText}>{props.text}</Text>
    </View>
  );

};

export default PaginationIndicator;
