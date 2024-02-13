// BottomTitleBar.js
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Android_Theme_Light } from "../../../../styles/Themes";
import GetBottomBarStyles from './BottomBarStyles';

const BottomBar = (props) => {
  
  try {
    
    return (
      
      <View style={GetBottomBarStyles(Android_Theme_Light).parentContainer}>

        <View style={GetBottomBarStyles(Android_Theme_Light).leftContainer} >

          <View style={GetBottomBarStyles(Android_Theme_Light).leftContainer} >
            
          </View>

          <View style={GetBottomBarStyles(Android_Theme_Light).rightContainer}>

            <TouchableOpacity
              style={GetBottomBarStyles(Android_Theme_Light).buttonContainer}
              onPress={props.onPressBackButton}>

              <props.BackIcon width = {40} height = {40} />
            
            </TouchableOpacity>

          </View>
        
        </View>

        <View style={GetBottomBarStyles(Android_Theme_Light).rightContainer}>

          <View style={GetBottomBarStyles(Android_Theme_Light).leftContainer} >

            <TouchableOpacity
              style={GetBottomBarStyles(Android_Theme_Light).buttonContainer}
              onPress={props.onPressHomeButton}>
              
              <props.HomeIcon width = {25} height = {25}/>
            
            </TouchableOpacity>
            
          </View>

          <View style={GetBottomBarStyles(Android_Theme_Light).rightContainer}>

          </View>

        </View>
      </View>
    );
  } 
  catch (error) {
    console.log("[BottomBar] - Ex: ", error);
  }
};

export default BottomBar;
