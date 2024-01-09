  import React, { Component } from "react";
  import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar,Image } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import { TouchableOpacity } from "react-native-gesture-handler";
  import Button from "../../components/Common/CommonButton";
  import { useNavigation } from '@react-navigation/native';
  import TitleBar from "../../components/Common/TitleBar";
  import PaginationIndicator from "../../components/PaginationIndicator";
  import {SignupScreenStyles3} from "./styles/SignupScreen3Styles";
  
  import CommonInputField from '../../components/Common/CommonInputField';


  import Icon_apple from '../../../assets/icons/Icon_apple.svg';
  import Icon_google from '../../../assets/icons/Icon_google.svg';
  import Icon_navLeft from '../../../assets/icons/Icon_navLeft.svg';
  import Icon_navRight from '../../../assets/icons/Icon_navRight.svg';



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
      this.props.navigation.replace('SignupScreen2'); 
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

          
         
           
            <Button
              type='1'
              title="Next"
              borderRadius={35}
              btnWidth='30%'

              onPress={this.handleNextButtonPress}
              textSize={20}
            />
            
         

  </View>
      
  <View style={SignupScreenStyles3.bottomView}>
          <View style={SignupScreenStyles3.logoIcon}>

          <Icon_apple style={SignupScreenStyles3.logo} width={25} height={25} />
          


          <Icon_google style={SignupScreenStyles3.logo} width={25} height={25} />
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
