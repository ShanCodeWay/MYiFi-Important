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
  import CommonSpinnerLong from '../../components/Common/CommonSpinnerLong';

  import Svg, { Path } from 'react-native-svg';
 
  
  import Icon_apple from '../../../assets/icons/Icon_apple.svg';
  import Icon_google from '../../../assets/icons/Icon_google.svg';
  import Icon_navLeft from '../../../assets/icons/Icon_navLeft.svg';
  import Icon_navRight from '../../../assets/icons/Icon_navRight.svg';

  import Colors from "../../../styles/Colors";
  import Fonts from "../../../styles/Fonts";

  import { GetCommonStyles } from "../../../styles/CommonStyles";
  import {GetSignupScreenStyles5} from "./styles/SignupScreen5Styles";

  import {
    Android_Theme_Light,
    Android_Theme_Dark,
  } from "../../../styles/Themes";


  //Done by: Darshana 24/01/02

  class SignupScreen5 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        scrollEnabled: false,
        selectedAccount: '',
        selectedAccountType: null,
        selectedLabel: '',
        selectedValue1: '',
        toAccount: null,
        amount: '',
        scrollEnabled: false,
      };
    }
    
    
   componentDidMount() {
      
      try {
        StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
      } catch (Error) {
        console.log("[SignupScreen5] - componentDidMount - Error ", Error);
      }

    }

    componentWillUnmount() {
      try {
      } catch (Error) {
        console.log("[SignupScreen5] - componentWillUnmount - Error ", Error);
      }
    }

    handleNextButtonPress = () => {
      try { 
      this.props.navigation.replace(Index.FUND_1); 
      console.log("Next button pressed to NAvigate Fund transfer Screen");}
      catch (error){ console.log("[SignupScreen5] - Next_Button - Error ",error); }
    };

    handleLeftButtonPress = () => {
      try{
        this.props.navigation.replace(Index.SIGNUP_4); 
      console.log("left pressed to navigate signup screen 4");
      }
      catch (error){ console.log("[SignupScreen5] - left_Button - Error ",error);}
      
    };

    handlePasswordInputChange = (text) => {  
    }

  

    handleAccount= (selectedAccount,selectedAccountBalance) => {
      try {
        
      this.setState({ selectedAccount});
      this.setState({ selectedAccountBalance});}
      catch (Error) {
        console.log("[FundTransferScreen1] - handleNameSelction - Error ", Error);
      }
    };

    handleAccountType= (selectedAccountType) => {
      try {
        
      this.setState({ selectedAccountType});}
      catch (Error) {
        console.log("[FundTransferScreen1] - handleNameSelction - Error ", Error);
      }
    };

    handleToAccount= (toAccount) => {
      try {
        
      this.setState({ toAccount});}
      catch (Error) {
        console.log("[FundTransferScreen1] - handleNameSelction - Error ", Error);
      }
    };

    handleAmountInputChange = (text) => {

      try{
      this.setState({ amount: text });}
      catch(Error) { console.log("[FundTransferScreen1] - handleAmountInputChange - Error ", Error); }
    };
    render() {
      return (

        <> 
        
        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        
        <TitleBar
       nameLeft={Icon_navLeft}
       onPressLeft={this.handleLeftButtonPress} 
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

     


          <View style={GetSignupScreenStyles5(Android_Theme_Light).topView} >  
          <View style={GetSignupScreenStyles5(Android_Theme_Light).titleView} > 
       
          <Text style={GetSignupScreenStyles5(Android_Theme_Light).mainTitle}>Registration Sucessful! </Text>
          <Text style={GetSignupScreenStyles5(Android_Theme_Light).secondTitle}>
            Welcome to 
          </Text>

          </View>

  </View>       

  <View style={GetSignupScreenStyles5(Android_Theme_Light).middleView}> 
<View style={GetSignupScreenStyles5(Android_Theme_Light).middleView1}>
      <Text > hi</Text>
    </View >  
    
      <View style={GetSignupScreenStyles5(Android_Theme_Light).middleView2}>
      <Text > hi </Text>
    </View> 
               
  

  </View>
 
  <View style={GetSignupScreenStyles5(Android_Theme_Light).bankView}> 
  <CommonSpinnerLong
  width={"90%"}
  data={[
    { label: "Sampath Bank", value:'457685', value1: "A"},  
    { label: "Seylan Bank", value: '546685', value1: "B" },
    { label: "Bank of Ceylon", value: '757685', value1: "C" },
    { label: "Peoples Bank", value: '36685', value1: "D" },
    { label: "Amana Bank", value: '257685', value1: "E" },
    { label: "Sampath Bank", value: '44685', value1: "F" },
    { label: "Seylan Bank", value: '37685', value1: "G" },
  ]}



  placeholder={"Select Bank"}

  value={this.state.selectedLabel}
  value1={this.state.selectedValue1}
  onRef={(ref) => (this.parentReferenceItem = ref)}
  parentReferenceItem={(label, value1) => {
    this.setState({
      selectedLabel: label,
      selectedValue1: value1,
    });
  }}
/>

</View>
           
  <View style={GetSignupScreenStyles5(Android_Theme_Light).bottomView}>


           
          <View style={GetSignupScreenStyles5(Android_Theme_Light).logoIcon}>

          <Icon_apple style={GetSignupScreenStyles5(Android_Theme_Light).logo} width={25} height={25} />
          


          <Icon_google style={GetSignupScreenStyles5(Android_Theme_Light).logo} width={25} height={25} />
  </View>
            


          </View>
        
        
    
       
        </KeyboardAwareScrollView>
        <View style={GetSignupScreenStyles5(Android_Theme_Light).bottomView3}>
        <View style={GetSignupScreenStyles5(Android_Theme_Light).bottomView1}>

<View style={GetSignupScreenStyles5(Android_Theme_Light).bottomView2}>


<Button
     type='1'
     title="Next"
     borderRadius={35}
     onPress={this.handleNextButtonPress}
     textSize={20}
     btnWidth='100%'
   />
</View>


  <View style={GetSignupScreenStyles5(Android_Theme_Light).bottomView2}>

  <Button
     type='1'
     title="Next"
     borderRadius={35}
     onPress={this.handleNextButtonPress}
     textSize={20}
     btnWidth='100%'
   /> 
  </View>


  
 
   
   
   </View>
        </View>
      
        </SafeAreaView>

        </>

        
      );
    }
  }

  export default SignupScreen5;
