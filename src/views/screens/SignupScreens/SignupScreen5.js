  import React, { Component } from "react";
  import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import { TouchableOpacity } from "react-native-gesture-handler";
  import Button from "../../components/Common/CommonButton";
  import { useNavigation } from '@react-navigation/native';
  import TitleBar from "../../components/Common/TitleBar";
  import PaginationIndicator from "../../components/PaginationIndicator";
  import {SignupScreenStyles5} from "./styles/SignupScreen5Styles";
 
  import CommonInputField from '../../components/Common/CommonInputField';
  import Svg, { Path } from 'react-native-svg';
 
  
  import Icon_apple from '../../../assets/icons/Icon_apple.svg';
  import Icon_google from '../../../assets/icons/Icon_google.svg';
  import Icon_navLeft from '../../../assets/icons/Icon_navLeft.svg';
  import Icon_navRight from '../../../assets/icons/Icon_navRight.svg';


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
    

    //
    handleNextButtonPress = () => {
      try{ this.props.navigation.replace('SignupScreen1'); 
      console.log("Next buttonscreen pressed");
    
    } catch (error) { console.log ("error ", error); }
      
    };

    handleLeftButtonPress = () => {
      this.props.navigation.replace('SignupScreen4'); 
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

          
         
            
            <Button
              type='1'
              title="Next"
              borderRadius={35}
              onPress={this.handleNextButtonPress}
              textSize={20}
              btnWidth='30%'
            />
            
         

  </View>
      
  <View style={SignupScreenStyles5.bottomView}>
          <View style={SignupScreenStyles5.logoIcon}>

          <Icon_apple style={SignupScreenStyles5.logo} width={25} height={25} />
          


          <Icon_google style={SignupScreenStyles5.logo} width={25} height={25} />
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
