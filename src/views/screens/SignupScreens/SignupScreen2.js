  import React, { Component } from "react";
  import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import { TouchableOpacity } from "react-native-gesture-handler";
  import Button from "../../../components/Button";
  import { useNavigation } from '@react-navigation/native';
  import TitleBar from "../../../components/TitleBar";
  import PaginationIndicator from "../../../components/PaginationIndicator";
  import {styles as SignupScreenStyles2} from "./SignupScreen2Styles";
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import CommonInputField from '../../../components/CommonInPutField/CommonInputField';
  import Svg, { Path } from 'react-native-svg';
  import VerifiedIcon from '../../../assets/icons/verified.svg';
  import EyeIcon from '../../../assets/icons/eye.svg';
   import AppleIcon from '../../../assets/icons/apple.svg';
  import GoogleIcon from '../../../assets/icons/google.svg';
  

  class SignupScreen2 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        scrollEnabled: false,
      };
    }
    
    
    componentDidMount() {
      StatusBar.setBackgroundColor('#EEF5FF');


    }

    componentWillUnmount() {}

    handleLoginPress = () => {
      this.props.navigation.replace('LoginScreen');
      console.log("Login button pressed"); 
    };
    
    handleNextButtonPress = () => {
      this.props.navigation.replace('SignupScreen3'); 
      console.log("next button pressed");
    };

    handleLeftButtonPress = () => {
      this.props.navigation.replace('SignupScreen1'); 
      console.log("left pressed");
    };

    handleRightButtonPress = () => {
      this.props.navigation.replace('ButtonScreen'); 
      console.log("right pressed");
    };

    handlePasswordInputChange = (text) => {
      
    }

    render() {
      return (

        <> 
        
        <SafeAreaView 
          style={{
            flex:1,
            backgroundColor: '#EEF5FF',
          }}
        >
        
        <TitleBar
        
        nameLeft="chevron-left"
        onPressLeft={this.handleLeftButtonPress} 
        
        />
        <PaginationIndicator
          text="Step 2/3"
          pageNumber={2}
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

        <View 
        style={SignupScreenStyles2.mainView}
        > 
        
        

  <View style={SignupScreenStyles2.middleView}> 


          <View style={SignupScreenStyles2.inputView}>

          <CommonInputField
              value={""}
              title={"Security Question"}
              placeholder={"What is your pet name?"}
              onInputChange={(text) => this.handlePasswordInputChange(text)}
              
              inputRef={this.inputRef2}
              nextInputRef={this.inputRef1}
              
            />

<CommonInputField
              value={""}
              title={"Security Answer"}
              placeholder={"Enter Your Security Answer"}
              onInputChange={(text) => this.handlePasswordInputChange(text)}
              
              inputRef={this.inputRef2}
              nextInputRef={this.inputRef1}
              
            />

<CommonInputField
              value={""}
              title={"Enter Email Address"}
              placeholder={"Enter Your Email Address"}
              onInputChange={(text) => this.handlePasswordInputChange(text)}
              
              inputRef={this.inputRef2}
              nextInputRef={this.inputRef1}
              icon={VerifiedIcon} 
            />



            <CommonInputField
              value={""}
              title={"Password"}
              placeholder={"Enter Your Password"}
              isSecureText={true}
              onInputChange={(text) => this.handlePasswordInputChange(text)}
              icon={EyeIcon}
              inputRef={this.inputRef2}
              nextInputRef={this.inputRef1}
            />

             <CommonInputField
              value={""}
              title={"Confirm Password"}
              placeholder={"Re-Enter Your Password"}
              isSecureText={true}
              onInputChange={(text) => this.handlePasswordInputChange(text)}
              
              inputRef={this.inputRef2}
              nextInputRef={this.inputRef1}
            />
       


          </View>

          
          <View style={SignupScreenStyles2.button}>
            
            <Button
              type='1'
              text="Next"
              borderRadius={35}
              onPress={this.handleNextButtonPress}
              textSize={20}
            />
            
          </View>

  </View>
      
  <View style={SignupScreenStyles2.bottomView}>
          <View style={SignupScreenStyles2.logoIcon}>


              <AppleIcon style={SignupScreenStyles2.logo} width={25} height={25} />
          


              <GoogleIcon style={SignupScreenStyles2.logo} width={25} height={25} />
   
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
