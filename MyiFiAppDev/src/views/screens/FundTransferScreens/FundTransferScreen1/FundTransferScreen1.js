import React, { Component } from "react";
  import { View, Text, ScrollView, SafeAreaView, StatusBar, } from "react-native";
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import CommonButton from "../../../components/Common/MainButton/CommonButton";
  import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
  import { GetFundTransferScreen1Styles } from "./FundTransferScreen1Styles";
  import Index from "../../../../configs/Index";
  import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
  import CommonSpinner from '../../../components/Common/CommonSpinner';
  import CommonSpinnerLong from '../../../components/Common/CommonSpinnerLong';
  import ValidationDialogs from "../../../components/Common/ValidationDialogs";
  import Colors from "../../../../styles/Colors";

  import { GetCommonStyles } from "../../../../styles/CommonStyles";

  import {
    Android_Theme_Light,
    Android_Theme_Dark,
  } from "../../../../styles/Themes";


  //Done by: Darshana 24/01/02

  class FundTransferScreen1 extends Component {


    constructor(props) {
      super(props);

      this.transferFrom    = React.createRef();
      this.transferTo      = React.createRef();
      this.transferType    = React.createRef();
      this.transferAmmount = React.createRef();
      this.transferRemark  = React.createRef();
      this.transferPurpose = React.createRef();

      this.state = {
        scrollEnabled:      false,
        selectedAccount:     null,
        selectedAccountType: null,
        toAccount:           null,
        amount:                '',
        isVisibleValidationDialog:false,

        
      };
    }
    
    componentDidMount() 
    {
      try {
        
        StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
      } catch (Error) {
        console.log("[fundTransferScreen1] - componentDidMount - Error ", Error);
      }
    }

    componentWillUnmount() 
    {
      try {
      } catch (Error) {
        console.log("[fundTransferScreen1] - componentWillUnmount - Error ", Error);
      }
    }

   
    handleNextButtonPress = () => {
      try { this.props.navigation.replace(Index.FUND_1); 
            console.log("Next button pressed to navigate to FundScreen1");
          }
      catch 
            (error){ console.log("[fundTransferScreen1] - Next_Button - Error ",error); }
    };

    handleLeftButtonPress = () => {
      try{
        this.props.navigation.replace(Index.SIGNUP_4); 
      console.log("left pressed to navigate signup screen 4");
      }
      catch (error){ console.log("[fundTransferScreen1] - left_Button - Error ",error);}
      
    };


    handlePasswordInputChange = (text) => {
    };


    handleAccount= (selectedAccount) => {
      try {
        
      this.setState({ selectedAccount});}
      catch (Error) {
        console.log("[fundTransferScreen1] - handleNameSelction - Error ", Error);
      }
    };

    handleAccountType= (selectedAccountType) => {
      try {
        
      this.setState({ selectedAccountType});}
      catch (Error) {
        console.log("[fundTransferScreen1] - handleNameSelction - Error ", Error);
      }
    };

    handleToAccount= (toAccount) => {
      try {
        
      this.setState({ toAccount});}
      catch (Error) {
        console.log("[fundTransferScreen1] - handleNameSelction - Error ", Error);
      }
    };

    handleAmountInputChange = (text) => {

      try{
      this.setState({ amount                      : text });}
      catch(Error) { console.log("[fundTransferScreen1] - handleAmountInputChange - Error ", Error); }
    };


    handleValidationDialog = () => {
      this.setState({ isVisibleValidationDialog   : true });
    };



    handleValidationDialogNo = () => {
      this.setState({ isVisibleValidationDialog   : false });
    };


    handleValidationDialogYes = () => {
     
      this.props.navigation.navigate(Index.TRS_1); 
      this.setState({ isVisibleValidationDialog   : false });
    };
    
    render() {
      return (

        <> 
        
<SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        
        <MainTitleBar
              IconLeft    = {Android_Theme_Light.ICON_BACK_ARROW}
              TitleText   = {"Transfer Money"}
              TextAlign   = {'left'}
              IconRight   = {null}
              onPressLeft = {this.handleLeftButtonPress }/>

       <KeyboardAwareScrollView
            contentContainerStyle     =  {{ flexGrow: 1 }}
            keyboardShouldPersistTaps ="handled"
            extraScrollHeight         ={10}
            enableOnAndroid           ={true}
            enableAutomaticScroll     ={false}
            keyboardOpeningTime       ={300}
            scrollToPosition          ={{ x: 0, y: 0, animated: true }}
            onKeyboardDidShow         ={(frames) => {
              
            }}
            onKeyboardDidHide={(frames) => {
             
            }}
          > 
  <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>  
  <View style={GetFundTransferScreen1Styles(Android_Theme_Light).middleView}> 
 
  <ScrollView> 
        <Text style={GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
          TRANSFER FROM
        </Text>
        <View style={GetFundTransferScreen1Styles(Android_Theme_Light).bankView}> 

                        <CommonSpinnerLong
                          width={"100%"}
                          data={[
                            { label: "Sampath Bank", value:'457685', value1: "A"},  
                            { label: "Seylan Bank", value: '546685', value1: "B" },
                            { label: "Bank of Ceylon", value: '757685', value1: "C" },
                            { label: "Peoples Bank", value: '36685', value1: "D" },
                            { label: "Amana Bank", value: '257685', value1: "E" },
                            { label: "Sampath Bank", value: '44685', value1: "F" },
                            { label: "Seylan Bank", value: '37685', value1: "G" },
                          ]}



                          placeholder         = {"Select Bank"}

                          value               = {this.state.selectedLabel}
                          value1              = {this.state.selectedValue1}
                          onRef               = {(ref) => (this.parentReferenceItem = ref)}
                          inputRef            = {this.transferFrom}
                          nextInputRef        = {this.transferTo}
                          parentReferenceItem = {(label, value1) => {
                            this.setState({
                              selectedLabel   : label,
                              selectedValue1  : value1,
                            });
                          }}
                        />
        </View>


 
        <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
          TRANSFER TO
        </Text>
           <CommonSpinner
              title  = {"Type *"}

              width  = {"100%"}
              data={[

                    { label : "Own Account Transfer", value: "Own-Account" },
                    { label : "Local Account Transfer", value: "Local-Account" },
                    { label : "International Account Transfer", value: "International-Account" },
              
              ]}
              placeholder           = {"Select Your Account Type"}
              value                 = {this.state.selectedAccountType}
              lable                 = {this.state.selectedAccountType}
              onRef                 = {(ref) => (this.parentReferenceItem = ref)}
              parentReferenceItem   = {this.handleAccountType}
           />
 
          <CommonSpinner
            title                 = {"To Account *"}

            width                 = {"100%"}
            data={[

                    { label : "BOC-234382432", value: "BOC-234382432" },
                    { label : "PET-364637463", value: "PET-364637463" },
                    { label : "SAM-534654387", value: "SAM-534654387" },
                  
            ]}
            placeholder           = {"Select Transfer Account *"}
            value                 = {this.state.toAccount}
            lable                 = {this.state.toAccount}
            onRef                 = {(ref) => (this.parentReferenceItem = ref)}
            parentReferenceItem   = {this.handleToAccount}
          />
       
   
            <CommonInputField
               value          = {this.state.amount}
              title           = {"Amount *"}
              onInputChange   = {(text) => this.handleAmountInputChange(text)}
              inputRef        = {this.transferTo}
              nextInputRef    = {this.transferRemark}
              type            = {'currency'}
             
            />
          
 
            <CommonInputField
              value           = {this.state.selectedName}
              title           = {"Remark"}
              onInputChange   = {(text) => this.handlePasswordInputChange(text)}
              inputRef        = {this.transferRemark}
              nextInputRef    = {this.transferPurpose}
              placeholder     = {"Remark"}
              
            />
 


         <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
          OTHER DETAILS
        </Text>
          <CommonSpinner
            title       = {"Purpose *"}
            width       = {"100%"}
            data={[

              { label   : "Personal", value: "Personal" },
              { label   : "Bill-pay", value: "Bill-pay" },
              { label   : "Loan-Pay", value: "Loan-Pay" },
            
            ]}
            placeholder = {"Purpose"}
            value       = {this.state.toAccount}
            lable       = {this.state.toAccount}
            onRef       = {(ref) => (this.parentReferenceItem = ref)}
            
            parentReferenceItem   = {this.handleToAccount}
          />
 

  <View style={GetFundTransferScreen1Styles(Android_Theme_Light).bottomView3}>
          <View style={GetFundTransferScreen1Styles(Android_Theme_Light).bottomView1}>

                <View style = {GetFundTransferScreen1Styles(Android_Theme_Light).bottomView2}>

                </View>
  
          </View>
  </View>

  </ScrollView>

  </View>
  </View>
        </KeyboardAwareScrollView>
  
            <View style={GetFundTransferScreen1Styles(Android_Theme_Light).bottomView}>

                  <CommonButton
                        type         = '1'
                        title        = {"Transfer "+ this.state.amount}
                        borderRadius = {35}
                        onPress      = {this.handleValidationDialog}
                        textSize     = {20}
                        btnWidth     = {"60%"}
                  />

            </View>
            
                  <ValidationDialogs
                    title               = {"Verification"}
                    description         = {"Transfer"}
                    message             = {"Do You wish\n to Transfer "+ this.state.amount +" ?"}
                    isVisible           = {this.state.isVisibleValidationDialog}
                    onRef               = {(ref) => (this.parentReferenceItem = ref)}
                    parentReferenceItem = {this.handleValidationDialogNo}
                    onPressYes          = {this.handleValidationDialogYes}
                    onpressNo           = {this.handleValidationDialogNo}
                  />
     
</SafeAreaView>

        </>

      );
    }
  }


  export default FundTransferScreen1;
