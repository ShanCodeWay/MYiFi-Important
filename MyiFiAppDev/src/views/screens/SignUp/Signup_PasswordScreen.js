  import React, { Component } from "react";
  import { View, SafeAreaView, StatusBar, Text} from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
 
  
  import Index from "../../../configs/Index";
  import CommonInputField from "../../components/Common/TextInput/CommonInputField";
  import CommonSpinner from "../../components/Common/CommonSpinner"; 
  import MainTitleBar from "../../components/Common/TitleBar/MainTitleBar";
  import CommonButton from "../../components/Common/MainButton/CommonButton";
  import PaginationIndicator from "../../components/Common/PageIndicator/PageIndicator";

  import { GetCommonStyles } from "../../../styles/CommonStyles";
  import GetSignup_PasswordScreenStyles from "./Signup_PasswordScreenStyles";

  import {Android_Theme_Light} from "../../../styles/Themes";

  class Signup_PasswordScreen extends Component {

    constructor(props) {
      super(props);
      
      this.answer = React.createRef();
      this.name = React.createRef();
      this.password = React.createRef();
      this.confirm = React.createRef();
      
      this.state = {
        scrollEnabled : false,
        selectedName  : null,
      };
    }
    
    componentDidMount() {
      
      try {
      

      } 
      catch (Error) {
        console.log("[SignupScreen2] - componentDidMount Ex: ", Error);
      }
    }

    componentWillUnmount() {
      try {
      } 
      catch (Error) {
        console.log("[SignupScreen2] - componentWillUnmount Ex: ", Error);
      }
    }

    handleNameSelection = (selectedName) => {
      
      try {
        
        this.setState({ selectedName });
      }
      catch (Error) {
        console.log("[SignupScreen2] - handleNameSelction Ex: ", Error);
      }
    };

    OnNextButtonPress = () => {
      try {  
        this.props.navigation.replace(Index.SIGNUP_3); 
        console.log("Next button pressed to Navigate to SignupScreen3");
      }
      catch (error){ 
        console.log("[SignupScreen2] - OnNextButtonPress Ex: ",error);
      }
    };

    OnBackButtonPress = () => {
      try{
        this.props.navigation.replace(Index.SIGNUP_1); 
        console.log("left pressed to Navigate to SignupScreen1");
      }
      catch (error){ 
        console.log("[SignupScreen2] - OnBackButtonPress Ex: ",error);}
      
    };

    handlePasswordInputChange = (text) => {
      
    }

    render() {

      const SecurityQuestion = [
        {label:"WHAT IS YOUR PET NAME", value:1}, {label:"WHAT IS YOUR NICK NAME", value:1}
      ]

      return (
        
        <SafeAreaView style = {GetCommonStyles(Android_Theme_Light).safeAreaView}>

          <MainTitleBar
            IconLeft = {Android_Theme_Light.ICON_BACK_ARROW}
            onPressLeft = {()=>this.OnBackButtonPress() }/>
          
          <PageIndicator
            totalNoOfPages = {3}
            pageNumber = {2}/> 
          
          <View style= {GetCommonStyles(Android_Theme_Light).mainContainer}>

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
            
              <View style= {GetSignup_PasswordScreenStyles(Android_Theme_Light).middleView}>
      
                <CommonSpinner
                  title = {"Security Question"}
                  width = {"100%"}
                  data={SecurityQuestion}
                  placeholder = {"Select security question"}
                  value = {this.state.selectedName}
                  lable = {this.state.selectedName}
                  onRef = {(ref) => (this.parentReferenceItem = ref)}
                  parentReferenceItem= {this.handleNameSelection}/>
                
                <View style = {{height:10}}/>

                <CommonInputField
                  value = {this.state.selectedName}
                  title = {"Security Answer"}
                  placeholder = {"Enter Your Security Answer"}
                  onInputChange = {(text) => this.handlePasswordInputChange(text)}
                  icon={Android_Theme_Light.ICON_VERIFIED}
                  inputRef = {this.confirm}
                  nextInputRef = {this.answer}
                  returnKeyType="next"/>

                <View style = {{height:10}}/>

                <CommonInputField
                  value         = {""}
                  title         = {"Mother's Maiden Name"}
                  placeholder = {"Enter Mother's Maiden Name"}
                  onInputChange = {(text) => this.handlePasswordInputChange(text)}
                  icon={Android_Theme_Light.ICON_VERIFIED}
                  inputRef      = {this.answer}
                  nextInputRef  = {this.name}
                  returnKeyType="next"/>

                <View style = {{height:10}}/>
                
                <CommonInputField
                  value = {""}
                  title = {"Password"}
                  placeholder = {"Enter Your Password"}
                  isSecureText = {true}
                  onInputChange= {(text) => this.handlePasswordInputChange(text)}
                  icon = {Android_Theme_Light.ICON_VIEW_PASSWORD}
                  inputRef = {this.name}
                  nextInputRef = {this.password}
                  returnKeyType="next"/>

                <View style = {{height:10}}/>
              
                <CommonInputField
                  value        = {""}
                  title        = {"Confirm Password"}
                  placeholder  = {"Re-Enter Your Password"}
                  isSecureText = {true}
                  onInputChange= {(text) => this.handlePasswordInputChange(text)}
                  icon = {Android_Theme_Light.ICON_VIEW_PASSWORD}
                  inputRef     = {this.password}
                  nextInputRef = {this.confirm}/>
      
              </View>

            </KeyboardAwareScrollView>
        
            <View style = {GetSignup_PasswordScreenStyles(Android_Theme_Light).bottombuttonContainer}>

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

      )
    }
  }

export default Signup_PasswordScreen;
