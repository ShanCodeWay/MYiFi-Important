import React, { Component } from "react";
import { View, Text,SafeAreaView, StatusBar, } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CommonButton from "../../components/Common/MainButton/CommonButton";
import MainTitleBar from "../../components/Common/TitleBar/MainTitleBar";
import PageIndicator from "../../components/Common/PageIndicator/PageIndicator";

import Index from "../../../configs/Index";
import CommonInputField from "../../components/Common/TextInput/CommonInputField";

import {GetCommonStyles } from "../../../styles/CommonStyles";
import GetSignup_UsernameScreenStyles from "./Signup_UsernameScreenStyles";

import {Android_Theme_Light} from "../../../styles/Themes";

class Signup_UsernameScreen extends Component {

  constructor(props) {
    
    super(props);
    
    this.inputNIC = React.createRef();
    this.inputUserName = React.createRef();
    
    this.state = {
      scrollEnabled: false,
    };
  }
  
  
  componentDidMount() {
    try {
    
    } 
    catch (Error) {
      console.log("[SignupScreen1] - componentDidMount Ex: ", Error);
    }
  }

  componentWillUnmount() {
    
    try {
    } 
    catch (Error) {
      console.log("[SignupScreen1] - componentWillUnmount Ex: ", Error);
    }
  }
 
  OnNextButtonPress = () => {

    try { 
      
      this.props.navigation.replace(Index.SIGNUP_2); 
      console.log("Next button pressed to navigate to SignupScreen2");
    }
    catch (error){ 
      console.log("[SignupScreen1] - OnBackButtonPress Ex: ",error); 
    }
  };

  OnBackButtonPress = () => {
    try{ 
      
      this.props.navigation.replace('LoginScreen'); 
      console.log("left pressed to navigate to LoginScreen");
    }
    catch (error){ 
      console.log("[SignupScreen1] - OnBackButtonPress Ex: ",error);
    }
  };

  Handle_Nic = (text) => {

    try{ 
    }
    catch (error){ 
      console.log("[SignupScreen1] - Handle_Nic Ex: ",error);
    }
  }

  Handle_Username = (text) => {

    try{ 
    }
    catch (error){ 
      console.log("[SignupScreen1] - Handle_Username Ex: ",error);
    }
  }

  render() {

    return (

      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
     
        <MainTitleBar
          IconLeft = {Android_Theme_Light.ICON_BACK_ARROW}
          onPressLeft   = {()=>this.OnBackButtonPress() }/>
          
        <PageIndicator
          totalNoOfPages = {3}
          pageNumber = {1}/> 
      
        {/*<KeyboardAwareScrollView
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
          >*/}

        

        <View style = {GetCommonStyles(Android_Theme_Light).mainContainer}>

          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always"
            behavior="padding"
            //keyboardShouldPersistTaps="handled"
            enableAutomaticScroll={false}
            enableOnAndroid = {true}
            //extraScrollHeight={150}
            //contentInset={{ bottom: this.state.contentBottom }}
            //onKeyboardWillHide={() => this.setState({ contentBottom: 0 })}
            //onKeyboardDidHide={() => this.setState({ contentBottom: 0 })}
            //onKeyboardDidShow={() => this.setState({ contentBottom: 0, })}
            contentContainerStyle={GetCommonStyles(Android_Theme_Light).keyboardAwareView}>

            <View style = {GetCommonStyles(Android_Theme_Light).topTitleContainer} >
        
              <Text style = {GetCommonStyles(Android_Theme_Light).textStyleH1Medium}>
                Sign Up
              </Text>
                
              <Text style = {GetCommonStyles(Android_Theme_Light).textStyleCaption1Medium}>
                Create account so you can {"\n"} manage your personal finances
              </Text>

            </View>       

            <View style = {GetSignup_UsernameScreenStyles(Android_Theme_Light).middleView}>

              <CommonInputField
                value = {""}
                title = {"NIC Number"}
                placeholder = {"Enter Your NIC Number"}
                onInputChange = {(text) => this.Handle_Nic(text)}
                icon={Android_Theme_Light.ICON_VERIFIED}
                inputRef = {this.inputNIC}
                nextInputRef = {this.inputUserName}
                returnKeyType="next"/>

              <View style = {{height:20}}/>
                        
              <CommonInputField
                value = {""}
                title = {"User Name"}
                placeholder = {"Enter Your User Name"}
                onInputChange = {(text) => this.Handle_Username(text)}
                icon={Android_Theme_Light.ICON_VERIFIED}
                inputRef = {this.inputUserName}/>


            </View>

          </KeyboardAwareScrollView>

          <View style = {GetCommonStyles(Android_Theme_Light).bottombuttonContainer}>

            {/* Next Button  */}
            <CommonButton
              type={"1"}
              title={"Next"}
              fontFamily = {Android_Theme_Light.POPPINS_SEMIBOLD}
              textSize = {Android_Theme_Light.FONT_SIZE_15}
              textColor = {Android_Theme_Light.WHITE_COLOR}
              backgroundColor={Android_Theme_Light.BLUE_COLOR}
              onPress={()=>this.OnNextButtonPress()}
              width={"50%"}/>

          </View>
    
        </View>
          
      </SafeAreaView>

    );
  }
}

export default Signup_UsernameScreen;