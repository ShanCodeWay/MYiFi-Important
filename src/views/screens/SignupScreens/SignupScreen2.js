  import React, { Component } from "react";
  import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import { TouchableOpacity } from "react-native-gesture-handler";
  import { useNavigation } from '@react-navigation/native';
  import SignupScreenStyles2 from "./styles/SignupScreen2Styles";
 
  import CommonInputField from '../../components/Common/CommonInputField';
  import CommonSpinner from "../../components/Common/CommonSpinner"; 
  import TitleBar from "../../components/Common/TitleBar";
  import Button from "../../components/Common/CommonButton";
  import PaginationIndicator from "../../components/PaginationIndicator";

  import Svg, { Path } from 'react-native-svg';

  import Icon_Verified from '../../../assets/icons/Icon_Verfied.svg';
  import Icon_Eye from '../../../assets/icons/Icon_Eye.svg';

  import Icon_apple from '../../../assets/icons/Icon_apple.svg';
  import Icon_google from '../../../assets/icons/Icon_google.svg';
  import Icon_navLeft from '../../../assets/icons/Icon_navLeft.svg';
  import Icon_navRight from '../../../assets/icons/Icon_navRight.svg';
  

  import Colors from "../../../styles/Colors";
  import Fonts from "../../../styles/Fonts";

  import { GetCommonStyles } from "../../../styles/CommonStyles";
  import {
    Android_Theme_Light,
    Android_Theme_Dark,
  } from "../../../styles/Themes";


//Done by: Darshana 24/01/02

  class SignupScreen2 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        scrollEnabled: false,
        selectedName: null,
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
      try {  this.props.navigation.replace('SignupScreen3'); 
             console.log("Next button pressed to Navigate to SignupScreen3");
          }
      catch (error){ console.log("[SignupScreen2] - Next_Button - Error ",error); }
    };

    handleLeftButtonPress = () => {
      try{
        this.props.navigation.replace('SignupScreen1'); 
      console.log("left pressed to Navigate to SignupScreen1");
      }catch (error){ console.log("[SignupScreen2] - left_Button - Error ",error);}
      
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


         
  <CommonSpinner
  title={"Security Question"}

  width={"100%"}
  data={[

    { label: "Timmy", value: "Timmy" },
    { label: "Garfield", value: "Garfield" },
    { label: "woofy", value: "woofy" },
    { label: "tom", value: "tom" },
    { label: "jerry", value: "jerry" },
  ]}
  placeholder={"What is your pet name?"}
  value={this.state.selectedName} 
  lable={this.state.selectedName} 
  onRef={(ref) => (this.parentReferenceItem = ref)}
  parentReferenceItem={this.handleNameSelection}
/>

<Text> { this.state.selectedName}</Text>

          <CommonInputField
              value={this.state.selectedName}
              title={"Security Answer"}
              onInputChange={(text) => this.handlePasswordInputChange(text)}
              inputRef={this.inputRef2}
              nextInputRef={this.inputRef1}
              editable={false}
              name={this.state.selectedName}
            />

          <CommonInputField
              value={""}
              title={"Mother's Maiden Name"}
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
