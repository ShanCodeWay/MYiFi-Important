import React, { useEffect } from "react";
import { View, Text } from "react-native";
import GetPageIndicatorStyles  from "./PageIndicatorStyles";
import { Android_Theme_Light} from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";


export default PageIndicator = (props) => {

  useEffect(() => {
    
    return () => {
      
    };
  }, []);

  const Render_PageIndicator_Circles = () => {
    
    try {

      var TotalNoOfScreen = props.totalNoOfPages;
      var activeScreen = props.pageNumber - 1;

      var ArrIndicatorList = []

      for(let i=0;i<TotalNoOfScreen;i++){
        
        let ArrTotalIndicators = {
          id: i + 1,
          isActive: activeScreen == i ? true : false
        }

        ArrIndicatorList.push(ArrTotalIndicators)
      }

      console.log('ArrIndicatorList--', ArrIndicatorList)

      return ArrIndicatorList.map((obj, index) => {

        return (

          <View 
            key={index}
            style = {[GetPageIndicatorStyles(Android_Theme_Light).circleIndicator,{
              backgroundColor: obj.isActive ? Android_Theme_Light.DARK_GRAY_COLOR : 
              Android_Theme_Light.GRAY_COLOR}]}>

          </View>

        );
      })

      // -1 Because Page numbers start from 0 
      /*return Array.from({ length: TotalNoOfScreen }, (_, index) => (
        <View
          key={index}
          style={[
            GetPageIndicatorStyles(Android_Theme_Light).circle,
            index === activeScreen
              ? GetPageIndicatorStyles(Android_Theme_Light).activeCircle
              : GetPageIndicatorStyles(Android_Theme_Light).inactiveCircle,
          ]}
        />     
      ));*/ 
    }
    catch (error) {
      console.error("[Pagination-Indicator]-Error Render_PageIndicator_Circles circles EX:", error);
     
      return null;
    }
      
  };
  
  return (
    
    <View style={GetPageIndicatorStyles(Android_Theme_Light).parentContainer}>

      <View style={GetPageIndicatorStyles(Android_Theme_Light).circleContainer}>

        {Render_PageIndicator_Circles()}

      </View>
      
      <Text style={GetPageIndicatorStyles(Android_Theme_Light).indicatorText}>
        Step {props.pageNumber}/{props.totalNoOfPages}
      </Text>
    
    </View>
  );
  
};
