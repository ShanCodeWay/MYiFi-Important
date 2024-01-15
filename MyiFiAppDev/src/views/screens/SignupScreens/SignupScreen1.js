  import React, { Component } from "react";
  import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import { TouchableOpacity } from "react-native-gesture-handler";
  import Button from "../../components/Common/CommonButton";
  import { useNavigation } from '@react-navigation/native';
  import TitleBar from "../../components/Common/TitleBar";
  import PaginationIndicator from "../../components/PaginationIndicator";
  


  import Index from "../../../configs/Index";


  import CommonInputField from '../../components/Common/CommonInputField';

  
  import { GetCommonStyles } from "../../../styles/CommonStyles";
  import {GetSignupScreenStyles1} from "./styles/SignupScreen1Styles";

  import Icon_apple from '../../../assets/icons/Icon_apple.svg';
  import Icon_google from '../../../assets/icons/Icon_google.svg';
  import Icon_navLeft from '../../../assets/icons/Icon_navLeft.svg';
  import Icon_navRight from '../../../assets/icons/Icon_navRight.svg';

  import Colors from "../../../styles/Colors";
  import Fonts from "../../../styles/Fonts";
 

  import {
    Android_Theme_Light,
    Android_Theme_Dark,
  } from "../../../styles/Themes";

  //Done by: Darshana 24/01/02

  class SignupScreen1 extends Component {

    constructor(props) {
      super(props);
      this.inputNIC = React.createRef();
      this.inputUserName = React.createRef();
      this.state = {
        scrollEnabled: false,
      };
    }
    
    
    componentDidMount() 
    {
      try {
        
        StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
      } catch (Error) {
        console.log("[SignupScreen1] - componentDidMount - Error ", Error);
      }
    }

    componentWillUnmount() 
    {
      try {
      } catch (Error) {
        console.log("[SignupScreen1] - componentWillUnmount - Error ", Error);
      }
    }

   
    handleNextButtonPress = () => {
      try { this.props.navigation.replace(Index.SIGNUP_2); 
            console.log("Next button pressed to navigate to SignupScreen2");
          }
      catch 
            (error){ console.log("[SignupScreen1] - Next_Button - Error ",error); }
    };

    handleLeftButtonPress = () => {
      try{ this.props.navigation.replace('LoginScreen'); 
           console.log("left pressed to navigate to LoginScreen");
         }
      catch 
          (error){ console.log("[SignupScreen1] - left_Button - Error ",error);}
      
    };


    handlePasswordInputChange = (text) => {
    }


 



    
    render() {
      return (

        <> 
        
        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
       
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


<View style={GetSignupScreenStyles1(Android_Theme_Light).topView} >  
<View style={GetSignupScreenStyles1(Android_Theme_Light).titleView} > 
          
          <Text style={GetSignupScreenStyles1(Android_Theme_Light).mainTitle}>Sign Up</Text>
          <Text style={GetSignupScreenStyles1(Android_Theme_Light).secondTitle}>Create account so you can manage your personal finances
          </Text>

          </View>

  </View>       

  <View style={GetSignupScreenStyles1(Android_Theme_Light).middleView}> 


          <View style={GetSignupScreenStyles1(Android_Theme_Light).inputView}>

                          <CommonInputField
                            value={""}
                            title={"NIC Number"}
                            placeholder={"Enter Your NIC Number"}
                            onInputChange={(text) => this.handlePasswordInputChange(text)}
                            inputRef={this.inputNIC}
                            nextInputRef={this.inputUserName}
                            

                          />

                          <CommonInputField
                            value={""}
                            title={"User Name"}
                            placeholder={"Enter Your User Name"}
                            onInputChange={(text) => this.handlePasswordInputChange(text)}
                            inputRef={this.inputUserName}
                          />


          </View>

     
  </View>
  
 
      
  <View style={GetSignupScreenStyles1(Android_Theme_Light).bottomView}>


      
         <Button
              type='1'
              title="Next"
              borderRadius={35}
              onPress={this.handleNextButtonPress}
              textSize={20}
              btnWidth='30%'
            />


          <View style={GetSignupScreenStyles1(Android_Theme_Light).logoIcon}>

          <Icon_apple style={GetSignupScreenStyles1(Android_Theme_Light).logo} width={25} height={25} />
          
          <Icon_google style={GetSignupScreenStyles1(Android_Theme_Light).logo} width={25} height={25} />
           
      
  </View>
          
          </View>
        
        
          </KeyboardAwareScrollView>
        
       
        </SafeAreaView>

        </>

        
      );
    }
  }

  export default SignupScreen1;
