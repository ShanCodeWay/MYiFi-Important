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
        selectedAccountType: null,
        toAccount:           null,
        amount:                '',
        isVisibleValidationDialog:false,
        isModalVisible:       false,
        isExpanded: false,
        isExpanded1: false,
        isExpanded2: false,
        isExpanded3: true,

        selectedAccountNum: '',
        selectedAccount:'',
        selectedBank:'',
        selectedBankNum:'',
        selectedAmount: '',
        selected_ID:'',
        selectedShedual:'',
        selectedType:'',
        selectedAccountType:'',
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

    toggleExpand = () => {
      this.setState((prevState) => ({
        isExpanded: !prevState.isExpanded,
      }));
    };


    handleSpinnerSelection = (label_1) => {
      this.setState({
        selectedShedual: label_1,
      });
    
      if (label_1 === "Many") {
        this.setState({ isExpanded1: true });
      } else {
        this.setState({ isExpanded1: false });
      }
    };

    handleTypeSelection = (label_1) => {
      this.setState({
        selectedType: label_1,
      });
    
      if (label_1 === "Local Account Transfer" || label_1 === "International Account Transfer") {
        this.setState({ isExpanded2: true });
        this.setState({ isExpanded3: false });
      } else {
        this.setState({ isExpanded3: true });
        this.setState({ isExpanded2: false });
      }
    };
    
    
  
    
    render() {

      const { isModalVisible } = this.state;
      const { isExpanded } = this.state;
      const { isExpanded1 } = this.state;
      const { isExpanded2 } = this.state;
      const { isExpanded3 } = this.state;
      

      return (

        <> 
        
<SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        
       {/* <MainTitleBar
              IconLeft    = {null}
              TitleText   = {null}
              TextAlign   = {'left'}
              IconRight   = {null}
              onPressLeft = {this.handleLeftButtonPress }/>

        Tittle Bar invisible

      */}     

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
  <View style={GetCommonStyles(Android_Theme_Light).titleContainer}> 
 <Text style={GetCommonStyles(Android_Theme_Light).titleContainertitleText}>
          Transfer
  </Text>
 </View>    
 
  <View style={GetFundTransferScreen1Styles(Android_Theme_Light).middleView}> 
 
  <ScrollView> 
        <View style = {{height:5}}/>
        <View style={GetFundTransferScreen1Styles(Android_Theme_Light).bankView}> 

                        <CommonSpinnerLong
                          width={"100%"}
                          data={[
                            { label_1: "MyFi",           label_2: '457,685',     value:'001' },  
                            { label_1: "Venum",    label_2: '546,685.33',  value:'002' },
                            { label_1: "Infinity", label_2: '757,685.45',  value:'003' },
                            { label_1: "Havlock",   label_2: '36,685.56',   value:'004' },
                            { label_1: "Nirwaan",     label_2: '257,685.76',  value:'005' },
                            { label_1: "Focus",   label_2: '44,685.88',   value:'006' },
                            { label_1: "Cedar",    label_2: '37,685.65',   value:'007' },
                          ]}



                          placeholder         = {this.state.selectedAccount}
                          lable_1             = {this.state.selectedAccount || "MyiFi"}
                          lable_2             = {this.state.selectedAmount  || '457,685.54'}
                          lable_2Show         = {true}
                          value               = {this.state.selected_ID  || ''}
                          onRef               = {(ref) => (this.parentReferenceItem = ref)}
                          inputRef            = {this.transferFrom}
                          nextInputRef        = {this.transferTo}
                          currency            = {"LKR"}
                          parentReferenceItem = {(label_1,label_2,value) => {
                            this.setState({
                              selectedAccount: label_1,
                              selectedAmount:  label_2,
                              selected_ID:     value,
                            });
                          }}
                        />
        </View>
        <View style = {{height:20}}/>
        <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
          Type
        </Text> 

        <CommonSpinnerLong
                width={"100%"}
                data={[
                  { label_1: "Own Account Transfer", value: "Own-Account" },
                  { label_1: "Local Account Transfer", value: "Local-Account" },
                  { label_1: "International Account Transfer", value: "International-Account" },
                ]}
                placeholder={this.state.selectedType}
                lable_1={this.state.selectedType || "Own Account Transfer"}
                lable_2Show={false}
                value={''}
                onRef={(ref) => (this.parentReferenceItem = ref)}
                parentReferenceItem={(label_1, label_2, value) => {
                  this.setState({
                    selectedType: label_1,
                  });
                  this.handleTypeSelection(label_1, value);
                }}
              />

              

              {this.state.isExpanded2 && (<> 
                <View style={{ height: 20 }} />
                <View> 
                <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
                Send to
              </Text>

              <CommonInputField
              value           = {this.state.selectedName}
              title           = {"Name"}
              onInputChange   = {(text) => this.handlePasswordInputChange(text)}
              inputRef        = {this.transferName}
              nextInputRef    = {this.transferPurpose}
              placeholder     = {"Insert Name"}
              width           = {"100%"}
              icon={Android_Theme_Light.ICON_VERIFIED}
              
            />
 <View style={{ height: 20 }} />
            <CommonInputField
              value           = {this.state.selectedName}
              title           = {"Account Number"}
              onInputChange   = {(text) => this.handlePasswordInputChange(text)}
              inputRef        = {this.transferName}
              nextInputRef    = {this.transferPurpose}
              placeholder     = {"Insert Account Number"}
              width           = {"100%"}
              icon={Android_Theme_Light.ICON_VERIFIED}
              
            />
          
 <View style = {{height:20}}/>
       <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
          Bank
        </Text>
        <View style={GetFundTransferScreen1Styles(Android_Theme_Light).bankView}> 

                      <CommonSpinnerLong
                        width={"100%"}
                        data={[
                          { label_1: "MyFi",            label_2: "BOC-234382432"  , value:'001' },  
                          { label_1: "Seylan Bank",     label_2: "PET-364637463"  , value:'002'},
                          { label_1: "Bank of Ceylon",  label_2: "SAM-09980387"   , value:'003'},
                          { label_1: "Peoples Bank",    label_2: "SAM-5347978387" , value:'004'},
                          { label_1: "Amana Bank",      label_2: "SAM-57554387"  ,  value:'005'},
                          { label_1: "Sampath Bank",    label_2: "SAM-53499887"  ,  value:'006'},
                          
                        ]}



                        placeholder         = {this.state.selectedBank}
                        lable_1             = {this.state.selectedBank || "Hatton National Bank"}
                        value               = {this.state.selectedBankNum}
                        lable_2Show         = {false}  /* Set valueShow to false to hide the middle section */
                        onRef               = {(ref) => (this.parentReferenceItem = ref)}
                        inputRef            = {this.transferFrom}
                        nextInputRef        = {this.transferTo}
                        currency            = {""}
                        parentReferenceItem = {(label_1, value) => {
                          this.setState({
                            selectedBank: label_1,
                            selectedBankNum: value,
                          });
                        }}
                      />
                      </View>
                  <View style = {{height:20}}/>
              

            </View>
            </>
              )}           

        
        
 {this.state.isExpanded3 && (<> 
                <View style={{ height: 20 }} />
                <View> 
                <Text style = {GetFundTransferScreen1Styles(Android_Theme_Light).titleText}>
                Account
              </Text>
      
      <CommonSpinnerLong
                width={"100%"}
                data={[
                  { label_1: "Current Account", value: "C-Account" },
                  { label_1: "Saving Account", value: "S-Account" },
                  { label_1: "Fixed Account", value: "FD-Account" },
                ]}
                placeholder={this.state.selectedAccountType}
                lable_1={this.state.selectedAccountType|| "Current Account"}
                lable_2Show={false}
                value={''}
                onRef={(ref) => (this.parentReferenceItem = ref)}
                parentReferenceItem={(label_1, label_2, value) => {
                  this.setState({
                    selectedAccountType: label_1,
                  });
                }}
              />
 <View style = {{height:20}}/>
            </View>
            </>
              )} 









          
          

            <CommonInputField
              value          = {this.state.amount || '8000,677'}
              title           = {"Amount *"}
              onInputChange   = {(text) => this.handleAmountInputChange(text)}
              inputRef        = {this.transferTo}
              nextInputRef    = {this.transferRemark}
              type            = {'currency'}
              width           = {"100%"}
              icon={Android_Theme_Light.ICON_VERIFIED}
             
            />
            <View style = {{height:10}}/>
          
 
            <CommonInputField
              value           = {this.state.selectedName || "trip collection"}
              title           = {"Remark"}
              onInputChange   = {(text) => this.handlePasswordInputChange(text)}
              inputRef        = {this.transferRemark}
              nextInputRef    = {this.transferPurpose}
              placeholder     = {"Remark"}
              width           = {"100%"}
              icon={Android_Theme_Light.ICON_VERIFIED}
              
            />
 
       <View style = {{height:20}}/> 

       {isExpanded && (
                <View
                  style={
                    GetFundTransferScreen1Styles(Android_Theme_Light).expandContainer
                  }
                >
                  <Text
                    style={GetFundTransferScreen1Styles(Android_Theme_Light).titleText}
                  >
                    Shedual Type
                  </Text>
                  <View style={{ height: 5 }} />
                  <View
                    style={GetFundTransferScreen1Styles(Android_Theme_Light).bankView}
                  >
                    <CommonSpinnerLong
                      width={"100%"}
                      data={[
                        { label_1: "One Time",  label_2: "One-time" ,value:'01'   },
                        { label_1: "Favourite", label_2: "Favourite",value:'02'   },
                        { label_1: "Many",      label_2: "Many"     ,value:'03'    },
                      ]}
                      placeholder         = {this.state.selectedShedual}
                      lable_1             = {this.state.selectedShedual || "One Time"}
                      lable_2Show         = {false}   
                      value               = { ''}
                      onRef               = {(ref) => (this.parentReferenceItem = ref)}
                      currency            = {"LKR"}    
                      parentReferenceItem = {(label_1,label_2,value) => {
                        this.setState({
                          selectedShedual: label_1,
                        });
                        this.handleSpinnerSelection(label_1, value);
                      }}      

                    />

                  </View>
                  <View style={{ height: 20 }} />

                  {this.state.isExpanded1 && (
          
                       <CommonInputField
                        value           = {this.state.selectedFrequency }
                        title           = {"Frequency"}
                        onInputChange   = {(text) => this.handlePasswordInputChange(text)}
        
                        placeholder     = {"Frequency"}
                        width           = {"100%"}
                        icon={Android_Theme_Light.ICON_VERIFIED}
                        
                      />
 
                )}
                  <View style={{ height: 20 }} />
                  <CommonInputField
                    value={""}
                    title={"Transaction Date *"}
                    onInputChange={""}
                    inputRef={this.transferTo}
                    nextInputRef={this.transferRemark}
                    type={"date"}
                    width={"100%"}
                    icon={Android_Theme_Light.ICON_CALENDER}
                    readOnly={true}
                  />
                   <View style={{ height: 20 }} />
                </View>
              )}

       <View style={GetFundTransferScreen1Styles(Android_Theme_Light).buttonContainer}>
       <View style={GetFundTransferScreen1Styles(Android_Theme_Light).buttonContainer1}>

      <TouchableOpacity onPress={() => this.setState({ isExpanded: false })}>
      <View
          style={[
            GetFundTransferScreen1Styles(Android_Theme_Light).button,
            {
              backgroundColor: this.state.isExpanded
                ? Android_Theme_Light.WHITE_COLOR
                : Android_Theme_Light.BLUE_COLOR
            }
          ]}
        >
          <Text style={[GetFundTransferScreen1Styles(Android_Theme_Light).buttonText,
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

      <TouchableOpacity onPress={this.toggleExpand}>
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
          <Text style={[GetFundTransferScreen1Styles(Android_Theme_Light).buttonText,
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
    <View style = {{height:20}}/>

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
                  title={"Transfer " + this.state.amount }
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
