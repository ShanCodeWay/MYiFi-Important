  import React, { Component } from "react";
  import { View, SafeAreaView, StatusBar, Text} from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
 
  
  import Index from "../../../../configs/Index";
  import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
  import SelectDropDown from "../../../components/Common/Dropdown/SelectDropDown"; 
  import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
  import CommonButton from "../../../components/Common/MainButton/CommonButton";
  import PaginationIndicator from "../../../components/Common/PageIndicator/PageIndicator";

  import { GetCommonStyles } from "../../../../styles/CommonStyles";
  import GetResetPasswordScreenStyles from "./ResetPasswordScreenStyles";

  import {Android_Theme_Light} from "../../../../styles/Themes";

  class ResetPasswordScreen extends Component {

    constructor(props) {
      super(props);
      
      this.answer = React.createRef();
      this.name = React.createRef();
      this.password = React.createRef();
      this.confirm = React.createRef();
      
      this.state = {
        scrollEnabled : false,
        SelectedQuestion : null,
        SelectedQuestionLabel:'',
        SecurityQuestionList : [
          {label:"WHAT IS YOUR PET NAME", value:1}, {label:"WHAT IS YOUR NICK NAME", value:2}
        ]
      };
    }
    
    componentDidMount() {
      
      try {
      

      } 
      catch (Error) {
        console.log("[ResetPasswordScreen] - componentDidMount Ex: ", Error);
      }
    }

    componentWillUnmount() {
      try {
      } 
      catch (Error) {
        console.log("[ResetPasswordScreen] - componentWillUnmount Ex: ", Error);
      }
    }

    HandleSecQuestion = (SelectVal) => {
      
      try {

        console.log('SelectVal--',SelectVal)

        var QuestionLabel = this.state.SecurityQuestionList.find(option => option.value == SelectVal);
        var QuestionLabeltmp = this.state.SecurityQuestionList.filter((option) => option.value !== SelectVal)

        console.log('QuestionLabel--',QuestionLabel)
        console.log('QuestionLabeltmp--',QuestionLabeltmp)
        
        this.setState({ 
          SelectedQuestion:SelectVal,
          SelectedQuestionLabel: QuestionLabel.label
        });
      }
      catch (Error) {
        console.log("[ResetPasswordScreen] - HandleSecQuestion Ex: ", Error);
      }
    };

    OnNextButtonPress = () => {
      try {  
        this.props.navigation.replace(Index.SIGNUP_3); 
        console.log("Next button pressed to Navigate to SignupScreen3");
      }
      catch (error){ 
        console.log("[ResetPasswordScreen] - OnNextButtonPress Ex: ",error);
      }
    };

    OnBackButtonPress = () => {
      try{
        this.props.navigation.replace(Index.SIGNUP_1); 
        console.log("left pressed to Navigate to SignupScreen1");
      }
      catch (error){ 
        console.log("[ResetPasswordScreen] - OnBackButtonPress Ex: ",error);}
      
    };

    handlePasswordInputChange = (text) => {
      
    }

    render() {

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
            
              <View style= {GetResetPasswordScreenStyles(Android_Theme_Light).middleView}>
      
                <SelectDropDown
                  title = {"Security Question"}
                  //width = {"100%"}
                  data={this.state.SecurityQuestionList}
                  placeholder = {"Select security question"}
                  value = {this.state.SelectedQuestion}
                  lable = {this.state.SelectedQuestionLabel}
                  onRef = {(ref) => (this.parentReferenceItem = ref)}
                  parentReferenceItem= {this.HandleSecQuestion}/>
                
                <View style = {{height:10}}/>

                <CommonInputField
                  value = {""}
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
        
            <View style = {GetResetPasswordScreenStyles(Android_Theme_Light).bottombuttonContainer}>

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

export default ResetPasswordScreen;
