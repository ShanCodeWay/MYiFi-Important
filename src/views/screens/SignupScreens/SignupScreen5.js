  import React, { Component } from "react";
  import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import { TouchableOpacity } from "react-native-gesture-handler";
  import Button from "../../../components/Button";
  import { useNavigation } from '@react-navigation/native';
  import TitleBar from "../../../components/TitleBar";
  import PaginationIndicator from "../../../components/PaginationIndicator";
  import {styles as SignupScreenStyles5} from "./SignupScreen5Styles";
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import CommonInputField from '../../../components/CommonInPutField/CommonInputField';
  import Svg, { Path } from 'react-native-svg';
  import AppleIcon from '../../../assets/icons/apple.svg';
  import GoogleIcon from '../../../assets/icons/google.svg';


  class SignupScreen5 extends Component {

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
    
    handleButtonPress = () => {
      this.props.navigation.replace('ButtonScreen'); 
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
        nameRight="chevron-right"
        nameLeft="chevron-left"
        onPressLeft={this.handleButtonPress} 
        onPressRight={this.handleRightButtonPress} 
        />
        <PaginationIndicator
          text="Step 5/5"
          pageNumber={5}
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
        style={SignupScreenStyles5.mainView}
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


          <View style={SignupScreenStyles5.inputView}>

         
       


          </View>

          
          <View style={SignupScreenStyles5.button}>
            
            <Button
              type='1'
              text="Next"
              borderRadius={35}
              onPress={this.handleLoginPress}
              textSize={20}
            />
            
          </View>

  </View>
      
  <View style={SignupScreenStyles5.bottomView}>
          <View style={SignupScreenStyles5.logoIcon}>

          <AppleIcon style={SignupScreenStyles5.logo} width={25} height={25} />
          


          <GoogleIcon style={SignupScreenStyles5.logo} width={25} height={25} />
  </View>
            


          </View>
        
        
          
        </View>
        </KeyboardAwareScrollView>
        
        
        </SafeAreaView>

        </>

        
      );
    }
  }

  export default SignupScreen5;
