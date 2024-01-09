  import React, { Component } from "react";
  import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar,Image } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import { TouchableOpacity } from "react-native-gesture-handler";
  import Button from "../../../components/Button";
  import { useNavigation } from '@react-navigation/native';
  import TitleBar from "../../../components/TitleBar";
  import PaginationIndicator from "../../../components/PaginationIndicator";
  import {styles as SignupScreenStyles3} from "./SignupScreen3Styles";
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import CommonInputField from '../../../components/CommonInPutField/CommonInputField';
  import {photo} from '../../../assets/images/photo.jpg';
  import AppleIcon from '../../../assets/icons/apple.svg';
  import GoogleIcon from '../../../assets/icons/google.svg';



  class SignupScreen3 extends Component {

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
      this.props.navigation.replace('SignupScreen4'); 
      console.log("buttonscreen pressed");
    };

    handleLeftButtonPress = () => {
      this.props.navigation.replace('ButtonScreen'); 
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
        
        onPressLeft={this.handleButtonPress} 
        
        />
        <PaginationIndicator
          text="Step 3/3"
          pageNumber={3}
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
        style={SignupScreenStyles3.mainView}
        > 
        
          <View style={SignupScreenStyles3.topView} >  
          <View style={SignupScreenStyles3.titleView} > 

          <Text style={SignupScreenStyles3.mainTitle}>OTP</Text>
          <Text style={SignupScreenStyles3.secondTitle}>
           
          </Text>

          </View>

  </View>       

  <View style={SignupScreenStyles3.middleView}> 


          <View style={SignupScreenStyles3.inputView}>
          
         
    


          </View>

          
          <View style={SignupScreenStyles3.button}>
           
            <Button
              type='1'
              text="Next"
              borderRadius={35}
              width="70%"

              onPress={this.handleNextButtonPress}
              textSize={20}
            />
            
          </View>

  </View>
      
  <View style={SignupScreenStyles3.bottomView}>
          <View style={SignupScreenStyles3.logoIcon}>

          <AppleIcon style={SignupScreenStyles3.logo} width={25} height={25} />
          


          <GoogleIcon style={SignupScreenStyles3.logo} width={25} height={25} />
  </View>
            


          </View>
        
        
          
        </View>
        </KeyboardAwareScrollView>
        
        
        </SafeAreaView>

        </>

        
      );
    }
  }

  export default SignupScreen3;
