  import React, { Component } from "react";
  import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import { TouchableOpacity } from "react-native-gesture-handler";
  import Button from "../../components/Common/CommonButton";
  import { useNavigation } from '@react-navigation/native';
  import TitleBar from "../../components/Common/TitleBar";
  import PaginationIndicator from "../../components/PaginationIndicator";
  import {SignupScreenStyles1} from "./styles/SignupScreen1Styles";
 
  import CommonInputField from '../../components/Common/CommonInputField';
 
  import Icon_apple from '../../../assets/icons/Icon_apple.svg';
  import Icon_google from '../../../assets/icons/Icon_google.svg';
  import Icon_navLeft from '../../../assets/icons/Icon_navLeft.svg';
  import Icon_navRight from '../../../assets/icons/Icon_navRight.svg';

  class SignupScreen1 extends Component {

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
      
      try { 
      this.props.navigation.replace('LoginScreen');
      console.log("Login button pressed"); } 
      
      catch
      (error){ console.log(error); }

    };
    
    handleNextButtonPress = () => {

      this.props.navigation.replace('SignupScreen2'); 
      console.log("Next button pressed");
    };

    handleLeftButtonPress = () => {
      this.props.navigation.replace('LoginScreen'); 
      console.log("left pressed");
    };

    handleRightButtonPress = () => {
      try{
      this.props.navigation.replace('SignupScreen2'); 
      console.log("right pressed");
      }catch 
      (error){ console.log(error); }
    
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
          text="Step 1/3"
          pageNumber={1}
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

      
        
      

        

          


          <View style={SignupScreenStyles1.topView} >  
          <View style={SignupScreenStyles1.titleView} > 
          
          <Text style={SignupScreenStyles1.mainTitle}>Sign Up</Text>
          <Text style={SignupScreenStyles1.secondTitle}>Create account so you can manage your personal finances
          </Text>

          </View>

  </View>       

  <View style={SignupScreenStyles1.middleView}> 


          <View style={SignupScreenStyles1.inputView}>

                          <CommonInputField
                            value={""}
                            title={"NIC Number"}
                            placeholder={"Enter Your NIC Number"}
                            onInputChange={(text) => this.handlePasswordInputChange(text)}
                            inputRef={(ref) => (this.inputRef1 = ref)}  
                            nextInputRef={this.inputRef2}
                          />

                          <CommonInputField
                            value={""}
                            title={"User Name"}
                            placeholder={"Enter Your User Name"}
                            onInputChange={(text) => this.handlePasswordInputChange(text)}
                            inputRef={(ref) => (this.inputRef2 = ref)}  
                            nextInputRef={this.inputRef1}  
                          />


          </View>

          
          
          
            
         

  </View>
      
  <View style={SignupScreenStyles1.bottomView}>


      
         <Button
              type='1'
              title="Next"
              borderRadius={35}
              onPress={this.handleNextButtonPress}
              textSize={20}
              btnWidth='30%'
            />


          <View style={SignupScreenStyles1.logoIcon}>

          <Icon_apple style={SignupScreenStyles1.logo} width={25} height={25} />
          


          <Icon_google style={SignupScreenStyles1.logo} width={25} height={25} />
           
      
  </View>
            


          </View>
        
        
          
       
        </KeyboardAwareScrollView>
        
        
        </SafeAreaView>

        </>

        
      );
    }
  }

  export default SignupScreen1;
