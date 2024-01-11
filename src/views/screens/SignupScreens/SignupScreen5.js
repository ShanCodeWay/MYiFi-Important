  import React, { Component } from "react";
  import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import { TouchableOpacity } from "react-native-gesture-handler";
  import Button from "../../components/Common/CommonButton";
  import { useNavigation } from '@react-navigation/native';
  import TitleBar from "../../components/Common/TitleBar";
  import PaginationIndicator from "../../components/PaginationIndicator";
  import SignupScreenStyles5 from "./styles/SignupScreen5Styles";
  import Index from "../../../configs/Index";
  import CommonInputField from '../../components/Common/CommonInputField';
  import Svg, { Path } from 'react-native-svg';
 
  
  import Icon_apple from '../../../assets/icons/Icon_apple.svg';
  import Icon_google from '../../../assets/icons/Icon_google.svg';
  import Icon_navLeft from '../../../assets/icons/Icon_navLeft.svg';
  import Icon_navRight from '../../../assets/icons/Icon_navRight.svg';

  import Colors from "../../../styles/Colors";
  import Fonts from "../../../styles/Fonts";

  import { GetCommonStyles } from "../../../styles/CommonStyles";
  import {
    Android_Theme_Light,
    Android_Theme_Dark,
  } from "../../../styles/Themes";


  //Done by: Darshana 24/01/02

  class SignupScreen5 extends Component {

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
        console.log("[SignupScreen5] - componentDidMount - Error ", Error);
      }

    }

    componentWillUnmount() {
      try {
      } catch (Error) {
        console.log("[SignupScreen5] - componentWillUnmount - Error ", Error);
      }
    }

    handleNextButtonPress = () => {
      try { 
      this.props.navigation.replace(Index.FOUND_1); 
      console.log("Next button pressed");}
      catch (error){ console.log("[SignupScreen5] - Next_Button - Error ",error); }
    };

    handleLeftButtonPress = () => {
      try{
        this.props.navigation.replace(Index.SIGNUP_4); 
      console.log("left pressed");
      }
      catch (error){ console.log("[SignupScreen5] - left_Button - Error ",error);}
      
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

     


          <View style={SignupScreenStyles5.topView} >  
          <View style={SignupScreenStyles5.titleView} > 
       
          <Text style={SignupScreenStyles5.mainTitle}>Registration Sucessful! </Text>
          <Text style={SignupScreenStyles5.secondTitle}>
            Welcome to 
          </Text>

          </View>

  </View>       

  <View style={SignupScreenStyles5.middleView}> 
<View style={SignupScreenStyles5.middleView1}>
      <Text > hi</Text>
    </View >  
    
      <View style={SignupScreenStyles5.middleView2}>
      <Text > hi </Text>
    </View> 
               
  

  </View>
  
           
  <View style={SignupScreenStyles5.bottomView}>


           
          <View style={SignupScreenStyles5.logoIcon}>

          <Icon_apple style={SignupScreenStyles5.logo} width={25} height={25} />
          


          <Icon_google style={SignupScreenStyles5.logo} width={25} height={25} />
  </View>
            


          </View>
        
        
    
       
        </KeyboardAwareScrollView>
        <View style={SignupScreenStyles5.bottomView3}>
        <View style={SignupScreenStyles5.bottomView1}>

<View style={SignupScreenStyles5.bottomView2}>


<Button
     type='1'
     title="Next"
     borderRadius={35}
     onPress={this.handleNextButtonPress}
     textSize={20}
     btnWidth='100%'
   />
</View>


  <View style={SignupScreenStyles5.bottomView2}>

  <Button
     type='1'
     title="Next"
     borderRadius={35}
     onPress={this.handleNextButtonPress}
     textSize={20}
     btnWidth='100%'
   /> 
  </View>

 
   
   
   </View>
        </View>
      
        </SafeAreaView>

        </>

        
      );
    }
  }

  export default SignupScreen5;
