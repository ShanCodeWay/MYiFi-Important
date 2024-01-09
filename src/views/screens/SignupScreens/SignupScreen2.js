  import React, { Component } from "react";
  import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import { TouchableOpacity } from "react-native-gesture-handler";
  import Button from "../../components/Common/CommonButton";
  import { useNavigation } from '@react-navigation/native';
  import TitleBar from "../../components/Common/TitleBar";
  import PaginationIndicator from "../../components/PaginationIndicator";
  import {SignupScreenStyles2} from "./styles/SignupScreen2Styles";
 
  import CommonInputField from '../../components/Common/CommonInputField';
  import Svg, { Path } from 'react-native-svg';

  import Icon_Verified from '../../../assets/icons/Icon_Verfied.svg';
  import Icon_Eye from '../../../assets/icons/Icon_Eye.svg';

  import Icon_apple from '../../../assets/icons/Icon_apple.svg';
  import Icon_google from '../../../assets/icons/Icon_google.svg';
  import Icon_navLeft from '../../../assets/icons/Icon_navLeft.svg';
  import Icon_navRight from '../../../assets/icons/Icon_navRight.svg';
  

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
        
        nameLeft={Icon_navLeft}
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

       
        

  <View style={SignupScreenStyles2.middleView}> 


         

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
              title={"Password"}
              placeholder={"Enter Your Password"}
              isSecureText={true}
              onInputChange={(text) => this.handlePasswordInputChange(text)}
              icon={Icon_Eye}
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
      
  <View style={SignupScreenStyles2.bottomView}>

  <Button
              type='1'
              title="Next"
              borderRadius={35}
              onPress={this.handleNextButtonPress}
              textSize={20}
              btnWidth='30%'
            />
          <View style={SignupScreenStyles2.logoIcon}>


              <Icon_apple style={SignupScreenStyles2.logo} width={25} height={25} />
          


              <Icon_google style={SignupScreenStyles2.logo} width={25} height={25} />
   
  </View>
            


          </View>
        
        
          
        
        </KeyboardAwareScrollView>
        
        
        </SafeAreaView>

        </>

        
      );
    }
  }

  export default SignupScreen2;
