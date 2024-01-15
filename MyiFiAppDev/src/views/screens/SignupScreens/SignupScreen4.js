  import React, { Component } from "react";
  import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import { TouchableOpacity } from "react-native-gesture-handler";
  import Button from "../../components/Common/CommonButton";
  import { useNavigation } from '@react-navigation/native';
  import TitleBar from "../../components/Common/TitleBar";
  import PaginationIndicator from "../../components/PaginationIndicator";
  
  import Index from "../../../configs/Index";
  import CommonInputField from '../../components/Common/CommonInputField';
  import Svg, { Path } from 'react-native-svg';
 
  
  import Icon_apple from '../../../assets/icons/Icon_apple.svg';
  import Icon_google from '../../../assets/icons/Icon_google.svg';
  import Icon_navLeft from '../../../assets/icons/Icon_navLeft.svg';
  import Icon_navRight from '../../../assets/icons/Icon_navRight.svg';
  import Icon_CircleChecked from '../../../assets/icons/Icon_CircleChecked.svg';
  import MI_Logo from '../../../assets/icons/MI_Logo.svg'
  import Colors from "../../../styles/Colors";
  import Fonts from "../../../styles/Fonts";

  
  import { GetCommonStyles } from "../../../styles/CommonStyles";
  import {GetSignupScreenStyles4} from "./styles/SignupScreen4Styles";

  import {
    Android_Theme_Light,
    Android_Theme_Dark,
  } from "../../../styles/Themes";


  //Done by: Darshana 24/01/02

  class SignupScreen4 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        scrollEnabled: false,
      };
    }
    
    
    componentDidMount() {
      
      try {
        StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
      } catch (Error) {
        console.log("[SignupScreen4] - componentDidMount - Error ", Error);
      }
    }
    componentWillUnmount() {
      try {
      } catch (Error) {
        console.log("[SignupScreen4] - componentWillUnmount - Error ", Error);
      }
    }

    handleNextButtonPress = () => {
      try { 
      this.props.navigation.replace(Index.SIGNUP_5); 
      console.log("Next button pressed to navigate SignupScreen 5 ");}
      catch (error){ console.log("[SignupScreen4] - Next_Button - Error ",error); }
    };

    handleLeftButtonPress = () => {
      try{
        this.props.navigation.replace(Index.SIGNUP_3); 
      console.log("left pressed to navigate to SignupScreen 3 ");
          }
      catch (error){ console.log("[SignupScreen4] - left_Button - Error ",error);}
      
    };


    handlePasswordInputChange = (text) => {
      
    }

    render() {
      return (

        <> 
        
        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        
        <TitleBar
        nameLeft={Icon_navLeft}
        onPressLeft={this.handleLeftButtonPress} 
       
        />
       
        
        <KeyboardAwareScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
              extraScrollHeight={50}
              enableOnAndroid={true}
              enableAutomaticScroll={false}
              keyboardOpeningTime={300}
              scrollToPosition={{ x: 0, y: 0, animated: true }}
              onKeyboardDidShow={(frames) => {
                
              }}
              onKeyboardDidHide={(frames) => {
              
              }}
            >

    
          



  <View style={GetSignupScreenStyles4(Android_Theme_Light).middleView}> 

  <Icon_CircleChecked width={90} height={100} /> 
  <Text style={GetSignupScreenStyles4(Android_Theme_Light).secondTitle}>Registration Succesful!</Text>    
  <Text style={GetSignupScreenStyles4(Android_Theme_Light).mainTitle}>Welcome to
 </Text>           
 <MI_Logo />       
 <Text style={GetSignupScreenStyles4(Android_Theme_Light).secondTitle1}>
        You can now sign in to your Account!
</Text>          
        
     
         

  </View>
      
  <View style={GetSignupScreenStyles4(Android_Theme_Light).bottomView}>

  <Button
              type='1'
              title="Sign in"
              borderRadius={35}
              onPress={this.handleNextButtonPress}
              textSize={20}
              btnWidth='80%'
            />   
        
           


          <View style={GetSignupScreenStyles4(Android_Theme_Light).logoIcon}>

          <Icon_apple style={GetSignupScreenStyles4(Android_Theme_Light).logo} width={25} height={25} />
          


          <Icon_google style={GetSignupScreenStyles4(Android_Theme_Light).logo} width={25} height={25} />
  </View>
            


          </View>
        
        
          
       
        </KeyboardAwareScrollView>
        
        
        </SafeAreaView>

        </>

        
      );
    }
  }

  export default SignupScreen4;
