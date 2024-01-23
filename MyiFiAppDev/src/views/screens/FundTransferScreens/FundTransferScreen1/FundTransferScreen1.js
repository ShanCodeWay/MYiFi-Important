import React, { Component } from "react";
  import { View, Text, ScrollView, SafeAreaView, StatusBar,Modal } from "react-native";
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
        isModalVisible:       false,

        
      };
    }
    

    /*componentDidUpdate(prevProps, prevState) {
      const { isVisibleValidationDialog } = this.state;
    
      
      if (isVisibleValidationDialog !== prevState.isVisibleValidationDialog) {
        if (isVisibleValidationDialog) {
          StatusBar.setBackgroundColor("#1B1F52D5");
        } else {
          StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
        }
      }
    }*/  // This can use to colour change status bar when validation Dialog pop-up

    componentDidMount() {
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
      this.setState({ isModalVisible  : false });
    };


    handleValidationDialogYes = () => {
     
      this.props.navigation.navigate(Index.FUND_OTP); 
      this.setState({ isVisibleValidationDialog   : false });
      this.setState({ isModalVisible   : false });
    };

    toggleModal = () => {
      this.setState((prevState) => ({
        isModalVisible: !prevState.isModalVisible,
      }));
    };
  
    
    render() {

      const { isModalVisible } = this.state;

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
            contentContainerStyle     =  {{ flexGrow: 1, justifyContent: "flex-end", alignItems:"center" }}
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
        <View style = {{height:5}}/>
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
                          currency            = {"LKR"}
                          parentReferenceItem = {(label, value1) => {
                            this.setState({
                              selectedLabel   : label,
                              selectedValue1  : value1,
                            });
                          }}
                        />
        </View>
        <View style = {{height:20}}/>


 
        <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
          TRANSFER TO
        </Text>
        <View style = {{height:5}}/>
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
              label                 = {this.state.selectedAccountType}
              onRef                 = {(ref) => (this.parentReferenceItem = ref)}
              parentReferenceItem   = {this.handleAccountType}
           />
 <View style = {{height:10}}/>
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
           <View style = {{height:10}}/>
       
   
            <CommonInputField
               value          = {this.state.amount}
              title           = {"Amount *"}
              onInputChange   = {(text) => this.handleAmountInputChange(text)}
              inputRef        = {this.transferTo}
              nextInputRef    = {this.transferRemark}
              type            = {'currency'}
              width           = {"100%"}
             
            />
            <View style = {{height:10}}/>
          
 
            <CommonInputField
              value           = {this.state.selectedName}
              title           = {"Remark"}
              onInputChange   = {(text) => this.handlePasswordInputChange(text)}
              inputRef        = {this.transferRemark}
              nextInputRef    = {this.transferPurpose}
              placeholder     = {"Remark"}
              width           = {"100%"}
              
            />
 
       <View style = {{height:20}}/>

         <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
          OTHER DETAILS
        </Text>
        <View style = {{height:10}}/>
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
        
        <View style={GetFundTransferScreen1Styles(Android_Theme_Light).bottomView}
              >

            <CommonButton
                  type         = '1'
                  title        = {"Next"}
                  borderRadius = {35}
                  onPress      = {this.toggleModal}
                  textSize     = {20}
                  width        = {"60%"}
                  
            />

            </View>

            <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={this.toggleModal}
          >
            <View style={GetFundTransferScreen1Styles(Android_Theme_Light).modalViewBackground}>
             

              <View style={GetFundTransferScreen1Styles(Android_Theme_Light).modalView}>
              <Text style={GetFundTransferScreen1Styles(Android_Theme_Light).textTransfer}>
                {this.state.amount} 
              
              </Text>

                <CommonButton
                  type="1"
                  title={"Transfer " + this.state.amount}
                  borderRadius={35}
                  onPress={this.handleValidationDialog}
                  width={"60%"}
                />
              </View>
            </View>
            <ValidationDialogs
            title={"Verification"}
            description={"Transfer"}
            message={"Do You wish\n to Transfer "}
            transparent={true}
            isVisible={this.state.isVisibleValidationDialog}
            onRef={(ref) => (this.parentReferenceItem = ref)}
            parentReferenceItem={this.handleValidationDialogNo}
            onPressYes={this.handleValidationDialogYes}
            onPressNo={this.handleValidationDialogNo}
          />
          </Modal>

         
     
</SafeAreaView>

        </>

      );
    }
  }


  export default FundTransferScreen1;
