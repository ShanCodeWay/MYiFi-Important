  import React, { Component } from "react";
  import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import { TouchableOpacity } from "react-native-gesture-handler";
  import Button from "../../../components/Button";
  import { useNavigation } from '@react-navigation/native';
  import TitleBar from "../../../components/TitleBar";
  import PaginationIndicator from "../../../components/PaginationIndicator";
  import {styles as SignupScreenStyles4} from "./SignupScreen4Styles";
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import CommonInputField from '../../../components/CommonInPutField/CommonInputField';
  import Svg, { Path } from 'react-native-svg';
  import AppleIcon from '../../../assets/icons/apple.svg';
  import GoogleIcon from '../../../assets/icons/google.svg';


  class SignupScreen4 extends Component {

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
      this.props.navigation.replace('SignupScreen5'); 
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
        style={SignupScreenStyles4.mainView}
        > 
        
      

        

          


          <View style={SignupScreenStyles4.topView} >  
          <View style={SignupScreenStyles4.titleView} > 
         
          <Text style={SignupScreenStyles4.mainTitle}>Sign Up</Text>
          <Text style={SignupScreenStyles4.secondTitle}>Sucessfully signed up
          </Text>

          </View>

  </View>       

  <View style={SignupScreenStyles4.middleView}> 


          <View style={SignupScreenStyles4.inputView}>

         


          </View>

          
          <View style={SignupScreenStyles4.button}>
            
            <Button
              type='1'
              text="Next"
              borderRadius={35}
              onPress={this.handleNextButtonPress}
              textSize={20}
            />
            
          </View>

  </View>
      
  <View style={SignupScreenStyles4.bottomView}>
          <View style={SignupScreenStyles4.logoIcon}>

          <AppleIcon style={SignupScreenStyles4.logo} width={25} height={25} />
          


          <GoogleIcon style={SignupScreenStyles4.logo} width={25} height={25} />
  </View>
            


          </View>
        
        
          
        </View>
        </KeyboardAwareScrollView>
        
        
        </SafeAreaView>

        </>

        
      );
    }
  }

  export default SignupScreen4;
