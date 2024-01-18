  import React, { Component } from "react";
  import { View, Text,SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import CommonButton from "../../../components/Common/MainButton/CommonButton";
  import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
  import PaginationIndicator from "../../../components/PaginationIndicator";
  
  import Index from "../../../../configs/Index";
  import CommonInputField from "../../../components/Common/TextInput/CommonInputField";

  
  import {GetCommonStyles } from "../../../../styles/CommonStyles";
  import {GetSignupScreenStyles1} from "./SignupScreen1Styles";

  import Colors from "../../../../styles/Colors";
  
  import {
    Android_Theme_Light,
    Android_Theme_Dark,
  } from "../../../../styles/Themes";

  //Done by: Darshana 24/01/02

  class SignupScreen1 extends Component {

    constructor(props) {
      super(props);
      this.inputNIC      = React.createRef();
      this.inputUserName = React.createRef();
      this.state = {
        scrollEnabled    : false,
      };
    }
    
    
    componentDidMount() 
    {
      try {
        
        StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
      } catch (Error) {
        console.log("[SignupScreen1] - componentDidMount - Error ", Error);
      }
    }

    componentWillUnmount() 
    {
      try {
      } catch (Error) {
        console.log("[SignupScreen1] - componentWillUnmount - Error ", Error);
      }
    }

   
    handleNextButtonPress = () => {
      try { this.props.navigation.replace(Index.SIGNUP_2); 
            console.log("Next button pressed to navigate to SignupScreen2");
          }
      catch 
            (error){ console.log("[SignupScreen1] - Next_Button - Error ",error); }
    };

    handleLeftButtonPress = () => {
      try{ this.props.navigation.replace('LoginScreen'); 
           console.log("left pressed to navigate to LoginScreen");
         }
      catch 
          (error){ console.log("[SignupScreen1] - left_Button - Error ",error);}
      
    };


    handlePasswordInputChange = (text) => {
    }
 
    render() {
      return (

        <> 
        
        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
       
        <MainTitleBar
          IconLeft      = {Android_Theme_Light.ICON_BACK_ARROW}
          TitleText     = {""}
          TextAlign     = {'left'}
          IconRight     = {null}
          onPressLeft   = {this.handleLeftButtonPress }/>

          
        <PaginationIndicator
          text          = "Step 1/3"
          pageNumber    = {1}
          /> 
        
        <KeyboardAwareScrollView
              contentContainerStyle       = {{ flexGrow: 1 }}
              keyboardShouldPersistTaps   = "handled"
              extraScrollHeight           = {50}
              enableOnAndroid             = {true}
              enableAutomaticScroll       = {false}
              keyboardOpeningTime         = {300}
              scrollToPosition            = {{ x: 0, y: 0, animated: true }}
              onKeyboardDidShow={(frames) => {
                
              }}
              onKeyboardDidHide={(frames) => {
              
              }}
            >

<View style  = {GetCommonStyles(Android_Theme_Light).mainContainer}>

<View style  = {GetSignupScreenStyles1(Android_Theme_Light).topView} >
<View style  = {GetSignupScreenStyles1(Android_Theme_Light).titleView} >
          
          <Text style = {GetSignupScreenStyles1(Android_Theme_Light).mainTitle}>
                Sign Up
          </Text>
          <Text style = {GetSignupScreenStyles1(Android_Theme_Light).secondTitle}>
                Create account so you can manage your personal finances
          </Text>

</View>

</View>       

  <View style = {GetSignupScreenStyles1(Android_Theme_Light).middleView}>

  <View style = {GetSignupScreenStyles1(Android_Theme_Light).inputView}>

                          <CommonInputField
                            value         = {""}
                            title         = {"NIC Number"}
                            placeholder   = {"Enter Your NIC Number"}
                            onInputChange = {(text) => this.handlePasswordInputChange(text)}
                            inputRef      = {this.inputNIC}
                            nextInputRef  = {this.inputUserName}
                           />

                          <CommonInputField
                            value         = {""}
                            title         = {"User Name"}
                            placeholder   = {"Enter Your User Name"}
                            onInputChange = {(text) => this.handlePasswordInputChange(text)}
                            inputRef      = {this.inputUserName}
                          />

  </View>
   
  </View>
      
  <View style = {GetSignupScreenStyles1(Android_Theme_Light).bottomView}>

         <CommonButton
              type         = '1'
              title        = "Next"
              borderRadius = {35}
              onPress      = {this.handleNextButtonPress}
              textSize     = {20}
              btnWidth     = {"60%"}
            />


          <View style = {GetSignupScreenStyles1(Android_Theme_Light).logoIcon}>
    
  </View>
          
  </View>

  </View>
  </KeyboardAwareScrollView>
        
       
</SafeAreaView>

</>
   
      );
    }
  }

export default SignupScreen1;
