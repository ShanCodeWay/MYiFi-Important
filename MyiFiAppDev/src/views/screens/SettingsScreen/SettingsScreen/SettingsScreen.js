import React, { Component } from "react";
  import { View, Text, ScrollView, SafeAreaView, StatusBar,Modal, TouchableOpacity } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import CommonButton from "../../../components/Common/MainButton/CommonButton";
  import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
  import { GetSettingsScreenStyles } from "./SettingsScreenStyles";
  import Index from "../../../../configs/Index";
  import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
  import CommonSpinner from '../../../components/Common/CommonSpinner';
  import CommonSpinnerLong from '../../../components/Common/CommonSpinnerLong';
  import ValidationDialogs from "../../../components/Common/ValidationDialogs";
  import Colors from "../../../../styles/Colors";
  import CommonCardButton from "../../../components/Common/CommonCardButton";
  import { GetCommonStyles } from "../../../../styles/CommonStyles";
  import BottomTitleBar from "../../../components/Common/BottomTitleBar";
  import LinearGradient from "react-native-linear-gradient";
  import {
    Android_Theme_Light,
    Android_Theme_Dark,
  } from "../../../../styles/Themes";

  import CardButtonSettings from "../CardButtonSettings/CardButtonSettings";


  //Done by: Darshana 26/01/2024

  class SettingsScreen extends Component {


    constructor(props) {
      super(props);

     
    }
    

    /*componentDidUpdate(prevProps, prevState) {
      const { isVisibleValidationDialog }         = this.state;
    
      
      if (isVisibleValidationDialog !== prevState.isVisibleValidationDialog) {
        if (isVisibleValidationDialog) {
          StatusBar.setBackgroundColor("#1B1F52D5");
        } else {
          StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
        }
      }
    }*/  // This can use to color change status bar when validation Dialog pop-up

    componentDidMount() {
      try {
          StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
        
      } catch (Error) {
        console.log("[SettingsScreen] - componentDidMount - Error ", Error);
      }
    }

    componentWillUnmount() 
    {
      try {
      } catch (Error) {
        console.log("[SettingsScreen] - componentWillUnmount - Error ", Error);
      }
    }

   
    handleNextButtonPress = () => {
      try { this.props.navigation.replace(Index.FUND_1); 
            console.log("Next button pressed to navigate to FundScreen1");
          }
      catch 
            (error){ console.log("[SettingsScreen] - Next_Button - Error ",error); }
    };

    handleLeftButtonPress = () => {
      try{
        this.props.navigation.replace(Index.SIGNUP_4); 
      console.log("left pressed to navigate signup screen 4");
      }
      catch (error){ console.log("[SettingsScreen] - left_Button - Error ",error);}
      
    };

    handleBack= () => {
      try{
        this.props.navigation.replace("DashboardScreen"); 
      console.log("left pressed to navigate signup screen 4");
      }
      catch (error){ console.log("[SettingsScreen] - left_Button - Error ",error);}
      
    };


   
    

    render() {

 
      

      return (

        <> 
        
<SafeAreaView style = {GetCommonStyles(Android_Theme_Light).safeAreaView}>
        
       {/* <MainTitleBar
              IconLeft    = {null}
              TitleText   = {null}
              TextAlign   = {'left'}
              IconRight   = {null}
              onPressLeft = {this.handleLeftButtonPress }/>

        Tittle Bar invisible

      */}     

      

     
  <View style= {GetCommonStyles(Android_Theme_Light).mainContainer}>
  <View style= {GetCommonStyles(Android_Theme_Light).titleContainer}>
  <Text  style = {GetCommonStyles(Android_Theme_Light).titleContainertitleText}>
          Settings
  </Text>
 </View>    
 
  <View style = {GetSettingsScreenStyles(Android_Theme_Light).middleView}>
  
  <View
            style={[
              GetSettingsScreenStyles(Android_Theme_Light).middleContainerView,
            ]}
          >
             <View style = {{ height: 10 }} />
                  <Text style = {GetSettingsScreenStyles(Android_Theme_Light).titleText}>
                    Frequency
                  </Text>

                  <View
      style={
        GetSettingsScreenStyles(Android_Theme_Light).buttonOuterContainer}
    >
      <TouchableOpacity onPress={""}>
        <LinearGradient
          angle={70}
          useAngle={true}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#0044A9", "#4384DA", "#75B4FF"]}
          style={
            GetSettingsScreenStyles(Android_Theme_Light).buttonContainer}
        >
          
            <View
              style={
                GetSettingsScreenStyles(Android_Theme_Light).IconOuterStyle
              }
            >
              
            </View>
     
            <Text
              style={
                GetCommonStyles(Android_Theme_Light).TextStyleBody16Medium }
            >
           </Text>
         

            
               
               
                 
                
             
       
        
        </LinearGradient>
      </TouchableOpacity>
    </View>




                  <View style = {{ height: 10 }} />
                  <Text style = {GetSettingsScreenStyles(Android_Theme_Light).titleText}>
                    Frequency
                  </Text>
                  <View style = {{ height: 10 }} />
                  <Text style = {GetSettingsScreenStyles(Android_Theme_Light).titleText}>
                    Frequency
                  </Text>
                  <View style = {{ height: 10 }} />
                  <Text style = {GetSettingsScreenStyles(Android_Theme_Light).titleText}>
                    Frequency
                  </Text>
 

                                        
</View>
  </View>
 
  </View>

        
        <View style = {GetSettingsScreenStyles(Android_Theme_Light).bottomView}
              >


          
             <BottomTitleBar
                 icon1={Android_Theme_Light.ICON_BACK_ARROWS}
                 icon2={Android_Theme_Light.ICON_HOME}
                 onPressIcon1={this.handleBack}
                 onPressIcon2={this.handleHome}
             />      

            </View>

          

        
     
</SafeAreaView>

        </>

      );
    }
  }


  export default SettingsScreen;
