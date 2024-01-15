  import React, { Component } from "react";
  import { View, Text, Touchable, ScrollView, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import { TouchableOpacity } from "react-native-gesture-handler";
  import Button from "../../components/Common/CommonButton";
  import { useNavigation } from '@react-navigation/native';
  import TitleBar from "../../components/Common/TitleBar";
  import PaginationIndicator from "../../components/PaginationIndicator";
  import FundTransferScreenStyles1 from "./styles/FundTransferScreenStyles1";
  import Index from "../../../configs/Index";
  import CommonInputField from '../../components/Common/CommonInputField';
  import CommonSpinner from '../../components/Common/CommonSpinner';
  import CommonSmallButton from "../../components/Common/CommonSmallButton";

  import Icon_apple from '../../../assets/icons/Icon_apple.svg';
  import Icon_google from '../../../assets/icons/Icon_google.svg';
  import Icon_navLeft from '../../../assets/icons/Icon_navLeft.svg';
  import Icon_navRight from '../../../assets/icons/Icon_navRight.svg';
  import Icon_Verified from '../../../assets/icons/Icon_Verfied.svg';

  import Colors from "../../../styles/Colors";
  import Fonts from "../../../styles/Fonts";
  import { GetCommonStyles } from "../../../styles/CommonStyles";

  import {
    Android_Theme_Light,
    Android_Theme_Dark,
  } from "../../../styles/Themes";
import CommonButton from "../../components/Common/CommonButton";

  //Done by: Darshana 24/01/02

  class FundTransferScreen1 extends Component {


    constructor(props) {
      super(props);
      this.state = {
        scrollEnabled: false,
        selectedAccount: null,
        selectedAccountType: null,
        toAccount: null,
        amount: '',
        
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
      try { this.props.navigation.replace(Index.FOUND_2); 
            console.log("Next button pressed to navigate to SignupScreen2");
          }
      catch 
            (error){ console.log("[FoundTransferScreen1] - Next_Button - Error ",error); }
    };

    handleLeftButtonPress = () => {
      try{ this.props.navigation.replace(Index.SIGNUP_5); 
           console.log("left pressed to navigate to LoginScreen");
         }
      catch 
          (error){ console.log("[FoundTransferScreen1] - left_Button - Error ",error);}
      
    };


    handlePasswordInputChange = (text) => {
    };


    handleAccount= (selectedAccount) => {
      try {
        
      this.setState({ selectedAccount});}
      catch (Error) {
        console.log("[FoundTransferScreen1] - handleNameSelction - Error ", Error);
      }
    };

    handleAccountType= (selectedAccountType) => {
      try {
        
      this.setState({ selectedAccountType});}
      catch (Error) {
        console.log("[FoundTransferScreen1] - handleNameSelction - Error ", Error);
      }
    };

    handleToAccount= (toAccount) => {
      try {
        
      this.setState({ toAccount});}
      catch (Error) {
        console.log("[FoundTransferScreen1] - handleNameSelction - Error ", Error);
      }
    };

    handleAmountInputChange = (text) => {

      try{
      this.setState({ amount: text });}
      catch(Error) { console.log("[FoundTransferScreen1] - handleAmountInputChange - Error ", Error); }
    };

    
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
            extraScrollHeight={10}
            enableOnAndroid={true}
            enableAutomaticScroll={false}
            keyboardOpeningTime={300}
            scrollToPosition={{ x: 0, y: 0, animated: true }}
            onKeyboardDidShow={(frames) => {
              
            }}
            onKeyboardDidHide={(frames) => {
             
            }}
          >    
  <View style={FundTransferScreenStyles1.middleView}> 

  
  <ScrollView> 

  <ElevatedView
          elevation={5}
          style={FundTransferScreenStyles1.stayElevated}
        > 
        <Text style={FundTransferScreenStyles1.titleText}>
          TRANSFER FROM
        </Text>
            <CommonSpinner
            title={"Account *"}

            width={"90%"}
            data={[

              { label: "Commercial", value: "COM-456222" },
              { label: "Peoples", value: "PET-34567890" },
              { label: "BOC", value: "BOC-4344545" },
              { label: "NDB", value: "NDB-244235" },
              { label: "SAMPATH", value: "SAM-34534654" },
            ]}
            placeholder={"Select Your Account"}
            value={this.state.selectedAccount} 
            lable={this.state.selectedAccount} 
            onRef={(ref) => (this.parentReferenceItem = ref)}
            parentReferenceItem={this.handleAccount}
          />
 </ElevatedView>

 <ElevatedView
          elevation={5}
          style={FundTransferScreenStyles1.stayElevated}
        > 
        <Text style={FundTransferScreenStyles1.titleText}>
          TRANSFER TO
        </Text>
           <CommonSpinner
            title={"Type *"}

            width={"90%"}
            data={[

              { label: "Own Account Transfer", value: "Own-Account" },
              { label: "Local Account Transfer", value: "Local-Account" },
              { label: "International Account Transfer", value: "International-Account" },
            
            ]}
            placeholder={"Select Your Account Type"}
            value={this.state.selectedAccountType} 
            lable={this.state.selectedAccountType} 
            onRef={(ref) => (this.parentReferenceItem = ref)}
            parentReferenceItem={this.handleAccountType}
          />
 
          <CommonSpinner
            title={"To Account *"}

            width={"90%"}
            data={[

              { label: "BOC-234382432", value: "BOC-234382432" },
              { label: "PET-364637463", value: "PET-364637463" },
              { label: "SAM-534654387", value: "SAM-534654387" },
            
            ]}
            placeholder={"Select Transfer Account *"}
            value={this.state.toAccount} 
            lable={this.state.toAccount} 
            onRef={(ref) => (this.parentReferenceItem = ref)}
            parentReferenceItem={this.handleToAccount}
          />
       
   
            <CommonInputField
               value={this.state.amount} 
              title={"Amount *"}
              onInputChange={(text) => this.handleAmountInputChange(text)}
              inputRef={this.confirm}
              nextInputRef={this.answer}
              type={'currency'}
             
            />
          
 
            <CommonInputField
              value={this.state.selectedName}
              title={"Remark"}
              onInputChange={(text) => this.handlePasswordInputChange(text)}
              inputRef={this.confirm}
              nextInputRef={this.answer}
              placeholder={"Remark"}
              
            />
</ElevatedView> 

<ElevatedView
          elevation={5}
          style={FundTransferScreenStyles1.stayElevated}
        > 
         <Text style={FundTransferScreenStyles1.titleText}>
          OTHER DETAILS
        </Text>
<CommonSpinner
            title={"Purpose *"}

            width={"90%"}
            data={[

              { label: "Personal", value: "Personal" },
              { label: "Bill-pay", value: "Bill-pay" },
              { label: "Loan-Pay", value: "Loan-Pay" },
            
            ]}
            placeholder={"Purpose"}
            value={this.state.toAccount} 
            lable={this.state.toAccount} 
            onRef={(ref) => (this.parentReferenceItem = ref)}
            parentReferenceItem={this.handleToAccount}
          />
</ElevatedView> 

<View style={FundTransferScreenStyles1.bottomView3}>
        <View style={FundTransferScreenStyles1.bottomView1}>

<View style={FundTransferScreenStyles1.bottomView2}>


<CommonSmallButton
onPress={() => null}
text={"Now"}
width={"100%"}

/> 
</View>


  <View style={FundTransferScreenStyles1.bottomView2}>

  <CommonSmallButton
onPress={() => null}
text={"Later"}
width={"100%"}

/> 
  </View>
  
   </View>
        </View>
   </ScrollView>
         
            
        

</View>
     
     </KeyboardAwareScrollView>
  
  <View style={FundTransferScreenStyles1.bottomView}>

  

         <Button
              type='1'
              title={"Transfer "+ this.state.amount}
              borderRadius={35}
              onPress={this.handleNextButtonPress}
              textSize={20}
              btnWidth='80%'
            />


          <View style={FundTransferScreenStyles1.logoIcon}>

          <Icon_apple style={FundTransferScreenStyles1.logo} width={25} height={25} />
          


          <Icon_google style={FundTransferScreenStyles1.logo} width={25} height={25} />
           
          
  </View>
          
          </View>
        
        
     
        
        
        </SafeAreaView>

        </>

        
      );
    }
  }

  export default FundTransferScreen1;
