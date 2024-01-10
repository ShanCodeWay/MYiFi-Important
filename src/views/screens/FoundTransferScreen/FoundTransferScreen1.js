  import React, { Component } from "react";
  import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import { TouchableOpacity } from "react-native-gesture-handler";
  import Button from "../../components/Common/CommonButton";
  import { useNavigation } from '@react-navigation/native';
  import TitleBar from "../../components/Common/TitleBar";
  import PaginationIndicator from "../../components/PaginationIndicator";
  import FoundTransferScreenStyles1 from "./styles/FoundTransferScreenStyles1";
 
  import CommonInputField from '../../components/Common/CommonInputField';
  import CommonSpinner from '../../components/Common/CommonSpinner';

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

  class FoundTransferScreen1 extends Component {


    constructor(props) {
      super(props);
      this.state = {
        scrollEnabled: false,
        value: 3000,
      };
    }
    
    
    componentDidMount() 
    {
      try {
        
        StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
      } catch (Error) {
        console.log("[FoundTransferScreen1] - componentDidMount - Error ", Error);
      }
    }

    componentWillUnmount() 
    {
      try {
      } catch (Error) {
        console.log("[FoundTransferScreen1] - componentWillUnmount - Error ", Error);
      }
    }

   
    handleNextButtonPress = () => {
      try { this.props.navigation.replace('FoundTransferScreen2'); 
            console.log("Next button pressed to navigate to SignupScreen2");
          }
      catch 
            (error){ console.log("[FoundTransferScreen1] - Next_Button - Error ",error); }
    };

    handleLeftButtonPress = () => {
      try{ this.props.navigation.replace('SignupScreen5'); 
           console.log("left pressed to navigate to LoginScreen");
         }
      catch 
          (error){ console.log("[FoundTransferScreen1] - left_Button - Error ",error);}
      
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
        title="Transfer"
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

  <View style={FoundTransferScreenStyles1.middleView}> 

  <CommonSpinner/>
        
     
  </View>
      
  <View style={FoundTransferScreenStyles1.bottomView}>


      
         <Button
              type='1'
              title={"Transfer this  "+ this.state.value}
              borderRadius={35}
              onPress={this.handleNextButtonPress}
              textSize={20}
              btnWidth='80%'
            />


          <View style={FoundTransferScreenStyles1.logoIcon}>

          <Icon_apple style={FoundTransferScreenStyles1.logo} width={25} height={25} />
          


          <Icon_google style={FoundTransferScreenStyles1.logo} width={25} height={25} />
           
      
  </View>
          
          </View>
        
        
        </KeyboardAwareScrollView>
        
        
        </SafeAreaView>

        </>

        
      );
    }
  }

  export default FoundTransferScreen1;
