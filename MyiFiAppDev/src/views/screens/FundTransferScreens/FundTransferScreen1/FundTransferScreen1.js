import React, { Component } from "react";
  import { View, Text, ScrollView, SafeAreaView, StatusBar,Modal, TouchableOpacity } from "react-native";
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
  import CommonCardButton from "../../../components/Common/CommonCardButton";
  import { GetCommonStyles } from "../../../../styles/CommonStyles";
  import BottomTitleBar from "../../../components/Common/BottomTitleBar";
  import {
    Android_Theme_Light,
    Android_Theme_Dark,
  } from "../../../../styles/Themes";
  import SelectDropDown from "../../../components/Common/Dropdown/SelectDropDown";

  //Done by: Darshana 26/01/2024

  class FundTransferScreen1 extends Component {


    constructor(props) {
      super(props);

      this.transferFrom    = React.createRef();
      this.transferTo      = React.createRef();
      this.transferType    = React.createRef();
      this.transferAmount  = React.createRef();
      this.transferRemark  = React.createRef();
      this.transferPurpose = React.createRef();
      this.scrollViewRef   = React.createRef();
      this.state = {
        scrollEnabled            : false,
        selectedAccountType      : null,
        toAccount                : null,
        amount                   : '',
        isVisibleValidationDialog: false,
        isModalVisible           : false,
        isExpanded               : false,
        isExpanded1              : false,
        isExpanded2              : false,
        isExpanded3              : true,
        isExpanded4              : false,
        isExpanded5              : false,

        selectedAccountNum  : '',
        selectedAccount     : '',
        selectedBank        : '',
        selectedBankNum     : '',
        selectedAmount      : '',
        selected_ID         : '',
        selectedSchedule    : '',
        selectedType        : '',
        selectedAccountType : '',
        selectedFrequency   : '',
        nickname            : '',

        selectedAccount1: '',
        selectedAmount1: '',
        selected_ID1: '',
        selectedAccount2: '',
        selectedAmount2: '',
        selected_ID2: '',

        spinnerData: [
          { label_1: "288-374-829", label_2: '457,685',    value: '001' },
          { label_1: "355-567-234", label_2: '546,685.33', value: '002' },
          { label_1: "234-675-345", label_2: '757,685.45', value: '003' },
        ],
        Banklist: [
          { label_1 : "Hatton National Bank" ,  value:'001'},
          { label_1 : "Seylan Bank",            value:'002'},
          { label_1 : "Bank of Ceylon",         value:'003'},
          { label_1 : "Peoples Bank",           value:'004'},
          { label_1 : "Amana Bank",             value:'005'},
          { label_1 : "Sampath Bank",           value:'006'},
        ],
        accountTypeList :[
          { label_1 : "Own Account Transfer",    value: "Own-Account"   },
          { label_1 : "Registerd Payee",         value: "Reg-Account"   },
          { label_1 : "Unregisterd Payee",       value: "Unreg-Account" },
        ] ,
        shedualList:  [
          { label_1 : "One Time",  value:'01' },
          { label_1 : "Repeat",    value:'03' },
        ],

        frequencyList:[
          { label_1 : "Dialy",    value:'01' },
          { label_1 : "Weekly",   value:'02' },
          { label_1 : "Monthly",  value:'03' },
          { label_1 : "Quarter",  value:'04' },
          { label_1 : "Yearly",   value:'05' },
        ],
        regList:[
          { label: "ADH Dissanyake", value: "B02", nickname: "Dasuna", accountNum:"300-192-449",  bank: "Hatton National Bank" },
          { label: "TDK Silva",      value: "B03", nickname: "Karan",  accountNum:"701-182-548",  bank: "Seylan Bank" },
          { label: "BMW Fernando",   value: "B04", nickname: "Wembli", accountNum:"802-172-641",  bank: "Bank of Ceylon"},
          { label: "BEN Perera",     value: "B05", nickname: "Earn",   accountNum:"903-162-742",  bank: "Peoples Bank"},
          { label: "HLC Liyange",    value: "B06", nickname: "Late",   accountNum:"404-152-243",  bank: "Amana Bank"},
        ],
        selectedName:     "",
        selectedAccount:  "",
        selectedBank:     "",
        selectedNickname: "",
      };
    }
    

    /*componentDidUpdate(prevProps, prevState) {
      const { isVisibleValidationDialog }         = this.state;
    
      
      if (isVisibleValidationDialog !== prevState.isVisibleValidationDialog) {
        if (isVisibleValidationDialog) {
          StatusBar.setBackgroundColor("#1B1F52D5");
        } else {
          StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
        }
      }
    }*/  // This can use to color change status bar when validation Dialog pop-up

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
   
      console.log('Input changed:', text);
    };


    handleAccount= (selectedAccount) => {
      try {
        
      this.setState({ selectedAccount});}
      catch (Error) {
        console.log("[fundTransferScreen1] - handleAccount - Error ", Error);
      }
    };

    handleAccountType= (selectedAccountType) => {
      try {
        
      this.setState({ selectedAccountType});}
      catch (Error) {
        console.log("[fundTransferScreen1] - handleAccountType - Error ", Error);
      }
    };

    handleToAccount= (toAccount) => {
      try {
        
      this.setState({ toAccount});}
      catch (Error) {
        console.log("[fundTransferScreen1] - handleToAccount - Error ", Error);
      }
    };

    handleAmountInputChange = (text) => {

      try{
      this.setState({ amount : text });}
      catch(Error) { console.log("[fundTransferScreen1] - handleAmountInputChange - Error ", Error); }
    };


    handleValidationDialog = () => {
      try{
      this.setState({ isVisibleValidationDialog : true });
      }
      catch(Error) { console.log("[fundTransferScreen1] - handleValidationDialog - Error ", Error); }
    };



    handleValidationDialogNo = () => {
      try{
      this.setState({ isVisibleValidationDialog: false });
      this.setState({ isModalVisible: false });}
      catch(Error) { console.log("[fundTransferScreen1] - handleValidationDialogNo - Error ", Error); }
    };


    handleValidationDialogYes = () => {
      try{
      this.props.navigation.navigate(Index.FUND_OTP); 
      this.setState({ isVisibleValidationDialog   : false });
      this.setState({ isModalVisible              : false });}
      catch(Error) { console.log("[fundTransferScreen1] - handleValidationDialogYes - Error ", Error); }
    };

    toggleModal = () => {
      try{
      this.setState((prevState) => ({
        isModalVisible : !prevState.isModalVisible,
      }));}
      catch(Error) { console.log("[fundTransferScreen1] - toggleModal - Error ", Error); }
    };

    


    handleSpinnerSelection = (label_1) => {
      try{
      this.setState({
        selectedSchedule : label_1,
      });
    
      if (label_1 === "Repeat") {
        this.setState({ isExpanded1 : true });
        this.scrollViewRef.current.scrollToEnd({ animated: true });
      } else {
        this.setState({ isExpanded1 : false });
      }}
      catch(Error) { console.log("[fundTransferScreen1] - handleSpinnerSelection - Error ", Error); }
    };

    handleTypeSelection = (label_1) => {
      try {
        let resetState = this.resetStateValues();

        if (label_1 === "Own Account Transfer") {
          this.setState({
            selectedType: label_1,
            isExpanded2: false,
            isExpanded3: true,
            isExpanded5: false,
            ...resetState,
          });
        } else if (label_1 === "Unregisterd Payee") {
          this.setState({
            selectedType: label_1,
            isExpanded2: true,
            isExpanded3: false,
            isExpanded5: false,
            ...resetState,
          });
        } else if (label_1 === "Registerd Payee") {
          this.setState({
            selectedType: label_1,
            isExpanded5: true,
            isExpanded3: false,
            isExpanded2: false,
            ...resetState,
          });
        } else {
          this.setState({
            selectedType: label_1,
            isExpanded5: false,
            isExpanded3: false,
            isExpanded2: false,
            ...resetState,
          });
        }
      } catch (error) {
        console.log("[fundTransferScreen1] - handleTypeSelection - Error ", error);
      }
    };

    resetStateValues = () => {
      return {
        selectedAccountNum: '',
        selectedAccount: '',
        selectedBank: '',
        selectedBankNum: '',
        selectedAmount: '',
        selected_ID: '',
        selectedSchedule: '',
        selectedFrequency: '',
        nickname: '',
        selectedName: '',
        selectedAccount1: '',
        selectedAmount1: '',
        selected_ID1: '',
        selectedAccount2: '',
        selectedAmount2: '',
        selected_ID2: '',
      };
    };

    
    

    toggleExpand = () => {
      try {
        this.setState(
          (prevState) => ({
            isExpanded: !prevState.isExpanded,
          }),
          () => {
            if (this.state.isExpanded) {
              this.scrollViewRef.current.scrollToEnd({ animated: true });
            }
          }
        );
      }
      catch(Error) { console.log("[fundTransferScreen1] - toggleExpand - Error ", Error); }
    };

    handleAddPayeeButton = () => {
      try {
        this.setState(
          (prevState) => ({
            isExpanded4: !prevState.isExpanded4,
          }),
          () => {
            if (this.state.isExpanded4) {
              this.scrollViewRef.current.scrollToEnd({ animated: true });
            }
          }
        );
      } catch (error) {
        console.log("[fundTransferScreen1] - handleAddPayeeButton - Error ", error);
      }
    };

    handleHome = () => {
      try {
        this.props.navigation.replace("DashboardScreen");
        console.log("Home Button pressed to Navigate to DashboardScreen");
      } catch (error) {
        console.log("[fundTransferScreen1] - Home_Button - Error ", error);
      }
    }

    handleBack = () => { 
      try {
        this.props.navigation.replace("DashboardScreen");
        console.log("Home Button pressed to Navigate to DashboardScreen");
      } catch (error) {
        console.log("[fundTransferScreen1] - Home_Button - Error ", error);
      }
    }

    handleSpinnerChange1 = (label_1, label_2, value) => {
      this.setState({
        selectedAccount1: label_1,
        selectedAmount1: label_2,
        selected_ID1: value,
        selectedAccount2: '',
        selectedAmount2: '',
        selected_ID2: '',
      });
    };
  
    handleSpinnerChange2 = (label_1, label_2, value) => {
      this.setState({
        selectedAccount2: label_1,
        selectedAmount2: label_2,
        selected_ID2: value,
      });
    };

    handleNameSelect = (SelectVal) => {
      try {
        const selectedPerson = this.state.regList.find(person => person.label === SelectVal);
    
        console.log('selectedPerson--', selectedPerson);
    
        if (selectedPerson) {
          this.setState({
            selectedName: SelectVal,
            selectedAccount: selectedPerson.accountNum,
            selectedBank: selectedPerson.bank,
            selectedNickname: selectedPerson.nickname,
          });
        }
      } catch (error) {
        console.log("[fundTransferScreen1] - handleNameSelect Error: ", error);
      }
    };

    
    
    
  





    

    render() {

      const { isModalVisible } = this.state;
      const { isExpanded }     = this.state;
      const { isExpanded1 }    = this.state;
      const { isExpanded2 }    = this.state;
      const { isExpanded3 }    = this.state;
      const { isExpanded4 }    = this.state;
      const {
        selectedAccount1,
        selectedAmount1,
        selected_ID1,
        selectedAccount2,
        selectedAmount2,
        selected_ID2,
        spinnerData,
        Banklist,
        accountTypeList,
        shedualList,
        frequencyList,
        regList
      } = this.state;

      return (

        <> 
        
<SafeAreaView style = {GetCommonStyles(Android_Theme_Light).safeAreaView}>
        
       {/* <MainTitleBar
              IconLeft    = {null}
              TitleText   = {null}
              TextAlign   = {'left'}
              IconRight   = {null}
              onPressLeft = {this.handleLeftButtonPress }/>

        Tittle Bar invisible

      */}     

       <KeyboardAwareScrollView
            contentContainerStyle     = {{ flexGrow: 1, justifyContent: "flex-end", alignItems:"center" }}
            keyboardShouldPersistTaps = "handled"
            extraScrollHeight         = {10}
            enableOnAndroid           = {true}
            enableAutomaticScroll     = {false}
            keyboardOpeningTime       = {300}
            scrollToPosition          = {{ x: 0, y: 0, animated: true }}
            ref                       ={this.scrollViewRef}
            onKeyboardDidShow         ={(frames) => {
              
            }}
            onKeyboardDidHide={(frames) => {
             
            }}
          > 

     
  <View style= {GetCommonStyles(Android_Theme_Light).mainContainer}>
  <View style= {GetCommonStyles(Android_Theme_Light).titleContainer}>
  <Text  style = {GetCommonStyles(Android_Theme_Light).titleContainertitleText}>
          Transfer
  </Text>
 </View>    
 
  <View style = {GetFundTransferScreen1Styles(Android_Theme_Light).middleView}>
 
  <ScrollView> 
        <View style= {{height:5}}/>
        <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
          From
        </Text>
    
              
        <CommonSpinnerLong
          width               = {"100%"}
          data                = {spinnerData}
          placeholder         = {selectedAccount1 || spinnerData[1].label_1}
          lable_1             = {selectedAccount1}
          lable_2             = {selectedAmount1 || spinnerData[1].label_2}
          lable_2Show         = {true}
          value               = {selected_ID1}
          onRef               = {(ref) => (this.parentReferenceItem1 = ref)}
          inputRef            = {this.transferFrom}
          nextInputRef        = {this.transferTo}
          currency            = {"LKR"}
          parentReferenceItem = {this.handleSpinnerChange1}
        />

        
        <View style = {{height:20}}/>
        <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
          Type
        </Text> 

        <CommonSpinnerLong
                width       = {"100%"}
                data        = {accountTypeList}
                placeholder = {this.state.selectedType}
                lable_1     = {this.state.selectedType || accountTypeList[0].label_1}
                lable_2Show = {false}
                search      = {false}
                value       = {''}
                onRef       = {(ref) => (this.parentReferenceItem = ref)}
                parentReferenceItem={(label_1, label_2, value) => {
                  this.setState({
                    selectedType : label_1,
                  });
                  this.handleTypeSelection(label_1, value);
                }}
              />

              

              {this.state.isExpanded2 && (<> 
                <View style = {{ height: 20 }} />
                <View> 
                <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
                Send to
              </Text>

              <CommonInputField
                  value        = {this.state.selectedName}
                  title        = {"Name"}
                  onInputChange= {(text) => this.handlePasswordInputChange(text)}
                  inputRef     = {this.transferName}
                  nextInputRef = {this.transferPurpose}
                  placeholder  = {"Insert Name"}
                  width        = {"100%"}
                  icon         = {Android_Theme_Light.ICON_VERIFIED}
              />
              

 <View style = {{ height: 20 }} />
            <CommonInputField
              value        = {this.state.selectedName}
              title        = {"Account Number"}
              onInputChange= {(text) => this.handlePasswordInputChange(text)}
              inputRef     = {this.transferName}
              nextInputRef = {this.transferPurpose}
              placeholder  = {"Insert Account Number"}
              width        = {"100%"}
              icon         = {Android_Theme_Light.ICON_VERIFIED}
              
            />
          
 <View style = {{height:20}}/>
       <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
          Bank
        </Text>
 

                      <CommonSpinnerLong
                        width = {"100%"}
                        data={Banklist}
                        placeholder = {this.state.selectedBank}
                        lable_1     = {this.state.selectedBank ||Banklist[1].label_1}
                        value       = {this.state.selectedBankNum}
                        lable_2Show = {false}  /* Set valueShow to false to hide the middle section */
                        onRef       = {(ref) => (this.parentReferenceItem = ref)}
                        inputRef    = {this.transferFrom}
                        nextInputRef= {this.transferTo}
                        currency    = {""}
                        parentReferenceItem = {(label_1, value) => {
                          this.setState({
                            selectedBank   : label_1,
                            selectedBankNum: value,
                          });
                        }}
                      />
                
                  <View style = {{height:10}}/>
                  <View style={GetFundTransferScreen1Styles(Android_Theme_Light).addPayeeButtonView}>
                      <View style={[GetFundTransferScreen1Styles(Android_Theme_Light).addPayeeButton, { backgroundColor: this.state.isExpanded4 ? Android_Theme_Light.DARK_GRAY_COLOR : Android_Theme_Light.DARK_GREEN_COLOR }]}>
                        <TouchableOpacity onPress={() => this.handleAddPayeeButton()}>
                          <Text style={GetFundTransferScreen1Styles(Android_Theme_Light).addPayeeButtonText}> 
                            Add as payee
                          </Text>                 
                        </TouchableOpacity>
                      </View>
                    </View>

                  {this.state.isExpanded4 && (<>    
                  
                      <CommonInputField
                            value        = {this.state.nickname}
                            title        = {"Add Nick Name*"}
                            onInputChange= {(text) => this.handleAmountInputChange(text)} width = {"100%"}
                            icon         = {Android_Theme_Light.ICON_VERIFIED}
                      />
                  
                  </>  )} 

            </View>
            </>
              )}           

        
        
 {this.state.isExpanded3 && (<> 
                <View style = {{ height: 20 }} />
                <View> 
                <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
                To
              </Text>
      
             

         
              <CommonSpinnerLong
                width                 = {"100%"}
                data                  = {spinnerData.filter((item) => item.label_1 !== selectedAccount1)}
                placeholder={
                  selectedAccount2 ||
                  (spinnerData.find(item => item.label_1 !== selectedAccount1)?.label_1) ||
                  spinnerData[0].label_1
                }
                lable_1               = {selectedAccount2}
                lable_2               = {(spinnerData.find(item => item.label_1 !== selectedAccount1)?.label_2) || ""}
                lable_2Show           = {true}
                value                 = {selected_ID2}
                onRef                 = {(ref) => (this.parentReferenceItem2 = ref)}
                inputRef              = {this.transferFrom}
                nextInputRef          = {this.transferTo}
                currency              = {"LKR"}
                parentReferenceItem   = {this.handleSpinnerChange2}
              />
              </View>
      <View style = {{height:20}}/>
            
            </>
              )} 

{/*this is expand5 view of Registerd Payee */}

{this.state.isExpanded5 && (<> 

                <View style= {{ height: 20 }} />
                <View> 
                <Text style= {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
                Send
              </Text>
<View style= {GetFundTransferScreen1Styles(Android_Theme_Light).bankView}>
  
         <SelectDropDown
                width               = {"95%"}
                data                = {this.state.regList.map(person => ({ label: person.label, value: person.label }))}
                title               = {"Select Name"}
                placeholder         = {"Select Name"}
                lable               = {this.state.selectedName}
                value               = {this.state.selectedName}
                onRef               = {(ref) => (this.parentReferenceItemName = ref)}
                parentReferenceItem = {this.handleNameSelect}
              />
              

        <SelectDropDown
              width                       = {"95%"}
              data                        = {this.state.regList
                .filter(person => person.label === this.state.selectedName)
                .map(person => ({ label: person.accountNum, value: person.accountNum }))}
              title                       = {"Select Account"}
              placeholder                 = {this.state.selectedAccount}
              lable                       = {this.state.selectedAccount}
              value                       = {this.state.selectedAccount}
              onRef                       = {(ref) => (this.parentReferenceItemAccount = ref)}
              parentReferenceItem         = {this.handleNameSelect}
        />

        <SelectDropDown
              width                        = {"95%"}
                data                        = {this.state.regList
                  .filter(person => person.label === this.state.selectedName)
                  .map(person => ({ label: person.bank, value: person.bank}))}
                title                       = {"Select Bank"}
                placeholder                 = {this.state.selectedBank}
                value                       = {this.state.selectedBank}
                lable                       = {this.state.selectedBank}
                onRef                       = {(ref) => (this.parentReferenceItemBank = ref)}
                parentReferenceItem         = {this.handleNameSelect}
        />

        <View style= {{ height: 20 }} />
        
        <CommonInputField
                value        = {this.state.selectedNickname}
                title        = {"NickName"}
                onInputChange= {(text) => this.handlePasswordInputChange(text)}
                inputRef     = {this.transferName}
                nextInputRef = {this.transferPurpose}
                placeholder  = {this.state.selectedNickname}
                width        = {"100%"}
                icon         = {Android_Theme_Light.ICON_VERIFIED}
                readOnly     = {"true"}
        />
          </View>
 <View style = {{height:20}}/>
                      </View>
                  <View style = {{height:10}}/>
                  
                 
                  </>
                   )}

{/*this is End expand5 view of Registerd Payee */}



                       
      <View style = {{height:20}}/>
      <View style= {GetFundTransferScreen1Styles(Android_Theme_Light).inputView}>
            <CommonInputField
                  value        = {this.state.amount}
                  title        = {"Amount *"}
                  onInputChange= {(text) => this.handleAmountInputChange(text)}
                  inputRef     = {this.transferTo}
                  nextInputRef = {this.transferRemark}
                  type         = {'currency'}
                  width        = {"100%"}
                  icon         = {Android_Theme_Light.ICON_VERIFIED}
            />

       <View style = {{height:10}}/>
          
            <CommonInputField
                  value        = {this.state.selectedName }
                  title        = {"Remark"}
                  onInputChange= {(text) => this.handlePasswordInputChange(text)}
                  inputRef     = {this.transferRemark}
                  nextInputRef = {this.transferPurpose}
                  placeholder  = {"Remark"}
                  width        = {"100%"}
                  icon         = {Android_Theme_Light.ICON_VERIFIED}
            />
      </View>
       <View style = {{height:20}}/>



       <View style = {GetFundTransferScreen1Styles(Android_Theme_Light).buttonContainer}>
       <View style = {GetFundTransferScreen1Styles(Android_Theme_Light).buttonContainer1}>

      <TouchableOpacity onPress = {() => this.setState({ isExpanded: false })}>
      <View
          style={[GetFundTransferScreen1Styles(Android_Theme_Light).button,
            {
              backgroundColor                     : this.state.isExpanded
                ? Android_Theme_Light.WHITE_COLOR
                                                  : Android_Theme_Light.BLUE_COLOR
            }
          ]}
        >
          <Text style = {[GetFundTransferScreen1Styles(Android_Theme_Light).buttonText,
             {
              color: this.state.isExpanded
                ? Android_Theme_Light.DARK_BLUE_COLOR
                : Android_Theme_Light.WHITE_COLOR
            }
        
          
          ]}>
            Now
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress= {this.toggleExpand}>
        <View
          style={[
            GetFundTransferScreen1Styles(Android_Theme_Light).button,
            {
              backgroundColor: this.state.isExpanded
                ? Android_Theme_Light.BLUE_COLOR
                : Android_Theme_Light.WHITE_COLOR
            }
          ]}
        >
          <Text style= {[GetFundTransferScreen1Styles(Android_Theme_Light).buttonText,
             {
              color: this.state.isExpanded
                ? Android_Theme_Light.WHITE_COLOR
                : Android_Theme_Light.DARK_BLUE_COLOR
            } 
          ]}>
            Later
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    </View>
    {isExpanded && (
                <View
                  style={GetFundTransferScreen1Styles(Android_Theme_Light).expandContainer}>
                     <View style = {{ height: 10 }} />
                  <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
                    Schedule Type
                  </Text>
                  <View style = {{ height: 5 }} />
                  <View
                    style = {GetFundTransferScreen1Styles(Android_Theme_Light).bankView}
                  >
                    <CommonSpinnerLong
                      width = {"100%"}
                      data={shedualList}
                      placeholder = {this.state.selectedSchedule}
                      lable_1     = {this.state.selectedSchedule||shedualList[0].label_1}
                      lable_2Show = {false}
                      value       = { ''}
                      search      = {false}
                      onRef       = {(ref) => (this.parentReferenceItem = ref)}
                      currency    = {"LKR"}
                      parentReferenceItem = {(label_1,label_2,value) => {
                        this.setState({
                          selectedSchedule
                                                  : label_1,
                        });
                        this.handleSpinnerSelection(label_1, value);
                      }}      

                    />

                  </View>
            <View style = {{ height: 20 }} />

            {this.state.isExpanded1 && (
              
     <>       
      <View style = {{ height: 10 }} />
                  <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
                    Frequency
                  </Text>
                  <View style = {{ height: 5 }} />
     <View
    style = {GetFundTransferScreen1Styles(Android_Theme_Light).bankView}
      >
                          <CommonSpinnerLong
                                width = {"100%"}
                                data={frequencyList}
                                placeholder  = {"Select Frequency"}
                                lable_1      = {this.state.selectedFrequency}
                                lable_2Show  = {false}
                                value        = {''}
                                search       = {false}
                                onRef        = {(ref) => (this.parentReferenceItem = ref)}

                                parentReferenceItem = {(label_1,label_2,value) => {
                                  this.setState({
                                    selectedFrequency: label_1,
                                  });
                                  
                                }}      

                    />
                    </View>

                          <View style = {{ height: 20 }} />
                          <CommonInputField
                              value         = {""}
                              title         = {"Date From *"}
                              onInputChange = {""}
                              inputRef      = {this.transferTo}
                              nextInputRef  = {this.transferRemark}
                              type          = {"date"}
                              width         = {"100%"}
                              icon          = {Android_Theme_Light.ICON_CALENDER}
                              readOnly      = {true}
                          />

                          <View style = {{ height: 20 }} />
                          <CommonInputField
                              value         = {""}
                              title         = {"Date To *"}
                              onInputChange = {""}
                              inputRef      = {this.transferTo}
                              nextInputRef  = {this.transferRemark}
                              type          = {"date"}
                              width         = {"100%"}
                              icon          = {Android_Theme_Light.ICON_CALENDER}
                              readOnly      = {true}
                          />
                      </>
                  )}

                  
         <View style = {{ height: 20 }} />
         {!this.state.isExpanded1 && (
                  <CommonInputField
                      value         = {""}
                      title         = {"Transaction Date *"}
                      onInputChange = {""}
                      inputRef      = {this.transferTo}
                      nextInputRef  = {this.transferRemark}
                      type          = {"date"}
                      width         = {"100%"}
                      icon          = {Android_Theme_Light.ICON_CALENDER}
                      readOnly      = {true}
                  />
              )}
          <View style= {{ height: 20 }} />
                </View>



              )}
    <View style = {{height:20}}/>

  <View style = {GetFundTransferScreen1Styles(Android_Theme_Light).bottomView3}>
          <View style = {GetFundTransferScreen1Styles(Android_Theme_Light).bottomView1}>

                <View style = {GetFundTransferScreen1Styles(Android_Theme_Light).bottomView2}>

                </View>
  
          </View>
  </View>

  </ScrollView>

  </View>
  </View>


        </KeyboardAwareScrollView>
        
        <View style = {GetFundTransferScreen1Styles(Android_Theme_Light).bottomView}
              >

            <CommonButton
                  type        = '1'
                  title       = {"Next"}
                  borderRadius= {35}
                  onPress     = {this.toggleModal}
                  textSize    = {20}
                  width       = {"60%"}
                  
            />

          
             <BottomTitleBar
                 icon1={Android_Theme_Light.ICON_BACK_ARROWS}
                 icon2={Android_Theme_Light.ICON_HOME}
                 onPressIcon1={this.handleBack}
                 onPressIcon2={this.handleHome}
             />      

            </View>

          <Modal
            animationType = "slide"
            transparent   = {true}
            visible       = {isModalVisible}
            onRequestClose= {this.toggleModal}
          >
            <View style = {GetFundTransferScreen1Styles(Android_Theme_Light).modalViewBackground}>
             

              <View style = {GetFundTransferScreen1Styles(Android_Theme_Light).modalView}>
              <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).textTransfer}>
                {"LKR "+this.state.amount} 
              
              </Text>

                <CommonButton
                  type         = "1"
                  title        = {"Transfer " +"LKR "+ this.state.amount }
                  borderRadius = {35}
                  onPress      = {this.handleValidationDialog}
                  width        = {"60%"}
                />
              </View>
            </View>
            <ValidationDialogs
                  title               = {"Verification"}
                  description         = {"Transfer"}
                  message             = {"Do You wish\n to Transfer "}
                  transparent         = {true}
                  isVisible           = {this.state.isVisibleValidationDialog}
                  onRef               = {(ref) => (this.parentReferenceItem = ref)}
                  parentReferenceItem = {this.handleValidationDialogNo}
                  onPressYes          = {this.handleValidationDialogYes}
                  onPressNo           = {this.handleValidationDialogNo}
          />
          </Modal>

        
     
</SafeAreaView>

        </>

      );
    }
  }


  export default FundTransferScreen1;
