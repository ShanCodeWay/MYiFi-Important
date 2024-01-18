  import React, { Component } from "react";
  import { View, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
 
  
  import Index from "../../../../configs/Index";
  import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
  import CommonSpinner from "../../../components/Common/CommonSpinner"; 
  import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
  import CommonButton from "../../../components/Common/MainButton/CommonButton";
  import PaginationIndicator from "../../../components/PaginationIndicator";

  import Colors from "../../../../styles/Colors";

  import { GetCommonStyles } from "../../../../styles/CommonStyles";
  import {GetSignupScreenStyles2} from "./SignupScreen2Styles";

  import {
    Android_Theme_Light,
    Android_Theme_Dark,
  } from "../../../../styles/Themes";


//Done by: Darshana 24/01/02

  class SignupScreen2 extends Component {

    constructor(props) {
      super(props);
      this.answer     = React.createRef();
      this.name       = React.createRef();
      this.password   = React.createRef();
      this.confirm    = React.createRef();
      this.state = {
        scrollEnabled : false,
        selectedName  : null,
      };
    }
    
    handleNameSelection = (selectedName) => {
      try {
        
      this.setState({ selectedName });}
      catch (Error) {
        console.log("[SignupScreen2] - handleNameSelction - Error ", Error);
      }
    };
    
    componentDidMount() {
      try {
        
        StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
      } catch (Error) {
        console.log("[SignupScreen2] - componentDidMount - Error ", Error);
      }
    }

    componentWillUnmount() {
      try {
      } catch (Error) {
        console.log("[SignupScreen2] - componentWillUnmount - Error ", Error);
      }
    }

  
    
    handleNextButtonPress = () => {
      try {  this.props.navigation.replace(Index.SIGNUP_3); 
             console.log("Next button pressed to Navigate to SignupScreen3");
          }
      catch (error){ console.log("[SignupScreen2] - Next_Button - Error ",error); }
    };

    handleLeftButtonPress = () => {
      try{
        this.props.navigation.replace(Index.SIGNUP_1); 
      console.log("left pressed to Navigate to SignupScreen1");
      }catch (error){ console.log("[SignupScreen2] - left_Button - Error ",error);}
      
    };

    handlePasswordInputChange = (text) => {
      
    }

    render() {
      return (

        <> 
        
        <SafeAreaView style = {GetCommonStyles(Android_Theme_Light).safeAreaView}>

        <MainTitleBar
          IconLeft   = {Android_Theme_Light.ICON_BACK_ARROW}
          TitleText  = {""}
          TextAlign  = {'left'}
          IconRight  = {null}
          onPressLeft= {this.handleLeftButtonPress }/>

          
        <PaginationIndicator
          text      = "Step 2/3"
          pageNumber= {2}
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

       
        
<View style= {GetCommonStyles(Android_Theme_Light).mainContainer}>
  <View style= {GetSignupScreenStyles2(Android_Theme_Light).middleView}>
     
  <CommonSpinner
        title = {"Security Question"}
        width = {"100%"}
        data={[

          { label : "Timmy", value: "Timmy" },
          { label : "Garfield", value: "Garfield" },
          { label : "woofy", value: "woofy" },
          { label : "tom", value: "tom" },
          { label : "jerry", value: "jerry" },
        ]}
        placeholder        = {"What is your pet name?"}
        value              = {this.state.selectedName}
        lable              = {this.state.selectedName}
        onRef              = {(ref) => (this.parentReferenceItem = ref)}
        parentReferenceItem= {this.handleNameSelection}
  />

          <CommonInputField
              value        = {this.state.selectedName}
              title        = {"Security Answer"}
              onInputChange= {(text) => this.handlePasswordInputChange(text)}
              inputRef     = {this.confirm}
              nextInputRef = {this.answer} 
            />

          <CommonInputField
              value         = {""}
              title         = {"Mother's Maiden Name"}
              onInputChange = {(text) => this.handlePasswordInputChange(text)}
              inputRef      = {this.answer}
              nextInputRef  = {this.name}
            
          />


            <CommonInputField
              value        = {""}
              title        = {"Password"}
              placeholder  = {"Enter Your Password"}
              isSecureText = {true}
              onInputChange= {(text) => this.handlePasswordInputChange(text)}
              icon         = {Android_Theme_Light.ICON_EYE}
              inputRef     = {this.name}
              nextInputRef = {this.password}
            />

             <CommonInputField
              value        = {""}
              title        = {"Confirm Password"}
              placeholder  = {"Re-Enter Your Password"}
              isSecureText = {true}
              onInputChange= {(text) => this.handlePasswordInputChange(text)}
              inputRef     = {this.password}
              nextInputRef = {this.confirm}
            />
     
  </View>
      
  <View style = {GetSignupScreenStyles2(Android_Theme_Light).bottomView}>

  <CommonButton
              type        = '1'
              title       = "Next"
              borderRadius= {35}
              onPress     = {this.handleNextButtonPress}
              textSize    = {20}
              btnWidth    = {"60%"}
            />
  <View style     = {GetSignupScreenStyles2(Android_Theme_Light).logoIcon}>

    {/*added two logos deleted here */}
  </View>
            
  </View>
        
  </View>
          
        
  </KeyboardAwareScrollView>
        
</SafeAreaView>

</> 
      );
    }
  }
export default SignupScreen2;
