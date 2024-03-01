import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import FTScreenStyles from "./FTScreenStyles";
import Index from "../../../navigators/NavIndex";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import CommonSpinnerLong from "../../../components/Common/CommonSpinnerLong";
import ValidationDialogs from "../../../components/Common/ValidationDialogs";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import BottomBar from "../../../components/Common/BottomBar/BottomBar";
import { Android_Theme_Light } from "../../../../styles/Themes";
import SelectDropDown from "../../../components/Common/Dropdown/SelectDropDown";
import LinearGradient from "react-native-linear-gradient";

import CommonDropDown from "../../../components/Common/Dropdown/CommonDropDown";

import DashboardTitleBar from "../../../components/Common/TitleBar/DashboardTitleBar";

class FTScreen extends Component {

  AccountList = [
    {
      value: 1,
      label: '0010007710 - Primary Account',
      AccNo: '0010007710',
      AccName: 'Primary Account',
      AccBalance: 6700450
    },
    {
      value: 2,
      label: '0010008068 - Myifi Acc',
      AccNo: '0010008068',
      AccName: 'Myifi Acc',
      AccBalance: 495000
    },
    {
      value: 3,
      label: '0010009940 - Other Savings',
      AccNo: '0010009940',
      AccName: 'Other Savings',
      AccBalance: 7900
    },

  ]

  TransferTypeList = [ 
    {
      value: 1,
      label: 'Own Account Transfer'
    },
    {
      value: 2,
      label: 'Registerd Payee'
    },
    {
      value: 3,
      label: 'Unregisterd Payee'
    }
  ]

  RegisteredPayee_List = [ 
    {
      value: 1,
      label: 'Ranesh de Silva - Wedding Photographer',
      type: 'I',
      Nickname: 'Wedding Photographer',
      AccNo: '0020008940',
      BankCode: '001',
      BankDesc: 'Mercantile Investments & Finance PLC'
    },
    {
      value: 2,
      label: 'ATPD Jayamaha',
      type: 'E',
      Nickname: 'Jayamaha payee',
      AccNo: '0140009920',
      BankCode: '005',
      BankDesc: 'Hatton National Bank'
    },
    {
      value: 3,
      label: 'RC Perera',
      type: 'I',
      Nickname: 'Internal payee',
      AccNo: '0010004922',
      BankCode: '001',
      BankDesc: 'Mercantile Investments & Finance PLC'
    },
    {
      value: 4,
      label: 'CK Chaminda - Chaminda Hardware',
      type: 'E',
      Nickname: 'Chaminda Hardware',
      AccNo: '0190009210',
      BankCode: '006',
      BankDesc: 'Sampath Bank'
    }
  ]

  Bank_List = [
    { 
      value: '001',
      label: 'Mercantile Investments & Finance PLC', 
    },
    { 
      value: '005',
      label: 'Hatton National Bank', 
    },
    { 
      value: '006',
      label: 'Sampath Bank', 
    }
  ]

  AccountType_List = [
    {
      value: 1,
      label: 'Internal'
    },
    {
      value: 2,
      label: 'External'
    },
  ]

  TransactionType_List = [
    {
      value: 1,
      label: 'NOW'
    },
    {
      value: 2,
      label: 'LATER'
    },
  ]

  ScheduleType_List = [
    {
      value: 1,
      label: 'One-Time'
    },
    {
      value: 2,
      label: 'Repeat'
    },
  ]

  FrequencyList = [
    { 
      value: "01",
      label: "Dialy", 
    },
    { 
      value: "02",
      label: "Weekly", 
    },
    { 
      value: "03",
      label: "Monthly", 
    },
    { 
     value: "04",
     label: "Quarter", 
    },
    { 
      value: "05",
      label: "Yearly", 
    }
  ]
  
  constructor(props) {
    super(props);

    this.transferFrom = React.createRef();
    this.transferTo = React.createRef();
    this.transferType = React.createRef();
    this.transferAmount = React.createRef();
    this.transferRemark = React.createRef();
    this.transferPurpose = React.createRef();
    this.scrollViewRef = React.createRef();

   

    this.state = {

      SelectedFromAccountID: 1,
      SelectedFromAccount: "",
      SelectedFromAccountAmount: "",

      SelectedTransferTypeVal: 1,
      SelectedTransferTypeDesc: "",

      SelectedToAccountID: 0,
      SelectedToAccount: "",
      SelectedToAccountAmount: "",

      RemarkVal: '',

      SelectedPayeeID: 0,
      SelectedPayee: '',
      SelectedPayeeAccNo: '',

      SelectedPayeeBankCode: '',
      SelectedPayeeBank: '',

      SelectedAccountTypeVal: 1,
      SelectedAccountTypeDesc: "",

      UnregToAccountNo:'',

      SelectedTransactionTypeVal:1,
      SelectedTransactionTypeDesc:'',

      SelectedScheduleTypeVal:1,
      SelectedScheduleTypeDesc:'',

      SelectedFrequencyTypeVal:'',
      SelectedFrequencyTypeDesc:'',








      scrollEnabled: false,
      selectedAccountType: null,
      toAccount: null,
      amount: "",
      isVisibleValidationDialog: false,
      isModalVisible: false,
      isZeroAmountModalVisible: false,
      isExpanded: false,
      isExpanded1: false,
      isExpanded2: false,
      isExpanded3: true,
      isExpanded4: false,
      isExpanded5: false,
      isExpanded6: false,
      isExpanded7: false,

      selectedAccountNum: "",
      selectedAccount: "",
      selectedBank: "",
      selectedBankCode: "",
      selectedAmount: "",
      selected_ID: "",
      selectedSchedule: "",
      selectedType: "",
      selectedAccountType: "",
      selectedFrequency: "",
      nickname: "",

    
      selectedAccount2: "",
      selectedAmount2: "",
      selected_ID2: "",

      spinnerData: [
        { label_1: "288-374-829", label_2: "457,685", value: "001" },
        { label_1: "355-567-234", label_2: "546,685.33", value: "002" },
        { label_1: "234-675-345", label_2: "757,685.45", value: "003" },
      ],
      Banklist: [
        { label_1: "Hatton National Bank", value: "001" },
        { label_1: "Seylan Bank", value: "002" },
        { label_1: "Bank of Ceylon", value: "003" },
        { label_1: "Peoples Bank", value: "004" },
        { label_1: "Amana Bank", value: "005" },
        { label_1: "Sampath Bank", value: "006" },
      ],
      accountTypeList: [
        { label_1: "Own Account Transfer", value: "Own-Account" },
        { label_1: "Registerd Payee", value: "Reg-Account" },
        { label_1: "Unregisterd Payee", value: "Unreg-Account" },
      ],
      shedualList: [
        { label_1: "One Time", value: "1" },
        { label_1: "Repeat", value: "2" },
      ],

      frequencyList: [
        { label_1: "Dialy", value: "01" },
        { label_1: "Weekly", value: "02" },
        { label_1: "Monthly", value: "03" },
        { label_1: "Quarter", value: "04" },
        { label_1: "Yearly", value: "05" },
      ],
      regList: [
        {
          label: "ADH Dissanyake",
          value: "B02",
          nickname: "Dasuna",
          accountNum: "300-192-449",
          bank: "Hatton National Bank",
        },
        {
          label: "TDK Silva",
          value: "B03",
          nickname: "Karan",
          accountNum: "701-182-548",
          bank: "Seylan Bank",
        },
        {
          label: "BMW Fernando",
          value: "B04",
          nickname: "Wembli",
          accountNum: "802-172-641",
          bank: "Bank of Ceylon",
        },
        {
          label: "BEN Perera",
          value: "B05",
          nickname: "Earn",
          accountNum: "903-162-742",
          bank: "Peoples Bank",
        },
        {
          label: "HLC Liyange",
          value: "B06",
          nickname: "Late",
          accountNum: "404-152-243",
          bank: "Amana Bank",
        },
      ],
      selectedName: "",
      selectedAccount: "",
      selectedBank: "",
      selectedNickname: "",
      tansferTypes: [
        { label_1: "Internal", value: "In" },
        { label_1: "External", value: "Ex" },
      ],
      selectedTransferType: "Internal",
      TransactionTimes: [
        { label_1: "Now", value: "1" },
        { label_1: "Later", value: "2" },
      ],
      SelectedTransactionTime: "Now",
    };
  }

  componentDidMount() {
    
    try {

      this.HandleFromAccount(this.state.SelectedFromAccountID); // Set default from account
      this.HandleFundTransferType(this.state.SelectedTransferTypeVal); // Set default fund transfer type
      this.HandleAccountType(this.state.SelectedAccountTypeVal)// Set default account type
      this.HandleTransactionType(this.state.SelectedTransactionTypeVal)// Set default transaction type
      this.HandleScheduleType(this.state.SelectedScheduleTypeVal)// Set default schedule type

      this.setState({

        //selectedFromAccount: this.state.spinnerData[0].label_1,
        //selectedFromAccountAmount: this.state.spinnerData[0].label_2,
        //selectedFromAccountID:this.state.spinnerData[0].value,


        selectedType: this.state.accountTypeList[0].label_1,

      


      });
    } 
    catch (Error) {
      console.log("[FTScreen] - componentDidMount - Error ", Error);
    }
  }

  componentWillUnmount() {
    
    try {
    
    } 
    catch (Error) {
      console.log("[FTScreen] - componentWillUnmount - Error ", Error);
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedNickname !== this.state.selectedNickname) {
    
    }
  }

  //Select from Account
  HandleFromAccount = (SelectVal) => {
      
    try {

      console.log('HandleFromAccount SelectVal--',SelectVal)

      var AccountLabel = this.AccountList.find(option => option.value == SelectVal);
      var AccountLabeltmp = this.AccountList.filter((option) => option.value == SelectVal)

      console.log('SelectedAccountLabel--',AccountLabel)
      console.log('SelectedAccountLabeltmp--',AccountLabeltmp)

      var ToAccountList = this.AccountList.filter((option) => option.value !== SelectVal)
      console.log('ToAccountList-----------------------',ToAccountList)

      
      this.setState({ 
        SelectedFromAccountID:SelectVal,
        SelectedFromAccount: AccountLabel.label,
        SelectedFromAccountAmount: AccountLabel.AccBalance,

        SelectedToAccountID:ToAccountList[0].value,
        SelectedToAccount:ToAccountList[0].label,
        SelectedToAccountAmount: ToAccountList[0].AccBalance
      });

      console.log('SELECTED ACCOUNT ID:------',this.state.SelectedToAccountID)
    }
    catch (Error) {
      console.log("[FTScreen] - HandleFromAccount Ex: ", Error);
    }
  };

  HandleToAccount = (SelectVal) => {

    try {

      console.log('SelectVal--',SelectVal)

      var ToAccountLabel = this.AccountList.find(option => option.value == SelectVal);
      var ToAccountLabeltmp = this.AccountList.filter((option) => option.value == SelectVal)

      console.log('ToAccountLabel--',ToAccountLabel)
      console.log('ToAccountLabeltmp--',ToAccountLabeltmp)
      
      this.setState({ 
        SelectedToAccountID:SelectVal,
        SelectedToAccount: ToAccountLabel.label,
        SelectedToAccountAmount: ToAccountLabel.AccBalance
      });

      
      /*this.setState({
        selectedAccount2: this.state.spinnerData.find(
          (item) => item.value === value
        ).label_1,
        selectedAmount2: this.state.spinnerData.find(
          (item) => item.value === value
        ).label_2,
        selected_ID2: value,
      });*/

    }
    catch (Error) {
      console.log("[FTScreen] - HandleToAccount Ex: ", Error);
    }
  };

  //Select Transfer Type
  HandleFundTransferType = (SelectVal) => {
    
    try {

      console.log('SelectVal--',SelectVal)

      var TransferTypeLabel = this.TransferTypeList.find(option => option.value == SelectVal);
      var TransferTypeLabeltmp = this.TransferTypeList.filter((option) => option.value !== SelectVal)

      console.log('TransferTypeLabel--',TransferTypeLabel)
      console.log('TransferTypeLabeltmp--',TransferTypeLabeltmp)
      
      this.setState({ 
        SelectedTransferTypeVal:SelectVal,
        SelectedTransferTypeDesc: TransferTypeLabel.label,

      });


      
      
      /*let resetState = this.resetStateValues();

      if (value === "Own-Account") {
        this.setState({
          selectedType:  this.state.accountTypeList.find((item) => item.value === value).label_1,
          isExpanded: false,
          isExpanded1: false,
          isExpanded2: false,
          isExpanded3: true,
          isExpanded5: false,
          isExpanded6: false,
          isExpanded7: false,
          ...resetState,
        });
      } else if (value === "Unreg-Account") {
        this.setState({
          selectedType:  this.state.accountTypeList.find((item) => item.value === value).label_1,
          isExpanded: false,
          isExpanded1: false,
          isExpanded2: true,
          isExpanded3: false,
          isExpanded5: false,
          isExpanded6: false,
          isExpanded7: true,
          ...resetState,
        });
      } else if (value === "Reg-Account") {
        this.setState({
          selectedType:  this.state.accountTypeList.find((item) => item.value === value).label_1,
          isExpanded: false,
          isExpanded1: false,
          isExpanded5: true,
          isExpanded3: false,
          isExpanded2: false,
          isExpanded6: false,
          ...resetState,
        });
      } else {
        this.setState({
          selectedType: value,
          isExpanded: false,
          isExpanded1: false,
          isExpanded5: false,
          isExpanded3: false,
          isExpanded2: false,
          ...resetState,
        });
      }*/
    } catch (error) {
      console.log("[FTScreen] - HandleFundTransferType - Error ", error);
    }
  };

  OnAmountInputChange = (text) => {
    try {
      this.setState({ amount: text });
    } 
    catch (Error) {
      console.log("[FTScreen] - OnAmountInputChange - Ex: ", Error);
    }
  };

  OnRemarkInputChange = (text) => {
    try {

      this.setState({ 
        RemarkVal: text 
      });
    
    } 
    catch (Error) {
      console.log("[FTScreen] - OnRemarkInputChange - Ex: ", Error);
    }
  };

  HandleRegisteredPayee = (SelectVal) => {
    
    try {

      console.log('HandleRegisteredPayee SelectVal--',SelectVal)

      var RegisteredPayeeLabel = this.RegisteredPayee_List.find(option => option.value == SelectVal);
      
      console.log('HandleRegisteredPayee RegisteredPayeeLabel--',RegisteredPayeeLabel)

      this.setState({ 
        SelectedPayeeID:SelectVal,
        SelectedPayee: RegisteredPayeeLabel.label,
        SelectedPayeeAccNo:RegisteredPayeeLabel.AccNo,
        SelectedPayeeBankCode:RegisteredPayeeLabel.BankCode,
        SelectedPayeeBank:RegisteredPayeeLabel.BankDesc
      });
     
    } 
    catch (error) {
      console.log("[FTScreen] - HandleRegisteredPayee Ex: ", error);
    }
  };

  OnRegisteredPayeeInputChange = (text) => {
    try {

      console.log('OnRegisteredPayeeInputChange---',text)

      this.setState({ 
        SelectedPayeeAccNo: text 
      });
    
    } 
    catch (Error) {
      console.log("[FTScreen] - OnRegisteredPayeeInputChange - Ex: ", Error);
    }
  };

  HandleBank = (SelectVal) => {
    try {

      console.log('SelectVal--',SelectVal)

      var BankLabel = this.Bank_List.find(option => option.value == SelectVal);

      console.log('BankLabel--',BankLabel)
      
      this.setState({ 
        SelectedPayeeBankCode:SelectVal,
        SelectedPayeeBank: BankLabel.label,
      });
     
    } 
    catch (error) {
      console.log("[FTScreen] - HandleBank - Ex: ", error);
    }
  };

  HandleAccountType = (SelectVal) => {
    
    try {

      console.log('SelectVal--',SelectVal)

      var AccountTypeLabel = this.AccountType_List.find(option => option.value == SelectVal);

      console.log('AccountTypeLabel--',AccountTypeLabel)
      
      this.setState({ 
        SelectedAccountTypeVal:SelectVal,
        SelectedAccountTypeDesc: AccountTypeLabel.label,
      });
     
    } 
    catch (error) {
      console.log("[FTScreen] - HandleAccountType - Ex: ", error);
    }
  };

  OnUnregPayee_ToAccountInputChange = (text) => {
    try {

      console.log('OnUnregPayee_ToAccountInputChange---',text)

      this.setState({ 
        UnregToAccountNo: text 
      });
    
    } 
    catch (Error) {
      console.log("[FTScreen] - OnUnregPayee_ToAccountInputChange - Ex: ", Error);
    }
  };

  HandleTransactionType = (SelectVal) => {
    try {

      console.log('SelectVal--',SelectVal)

      var TransactionType_Label = this.TransactionType_List.find(option => option.value == SelectVal);

      console.log('TransactionType_Label--',TransactionType_Label)
      
      this.setState({ 
        SelectedTransactionTypeVal:SelectVal,
        SelectedTransactionTypeDesc: TransactionType_Label.label,
      });
     
    } 
    catch (error) {
      console.log("[FTScreen] - HandleTransactionType - Ex: ", error);
    }
  };

  HandleScheduleType = (SelectVal) => {
    try {

      console.log('SelectVal--',SelectVal)

      var ScheduleType_Label = this.ScheduleType_List.find(option => option.value == SelectVal);

      console.log('ScheduleType_Label--',ScheduleType_Label)
      
      this.setState({ 
        SelectedScheduleTypeVal:SelectVal,
        SelectedScheduleTypeDesc: ScheduleType_Label.label,
      });
     
    } 
    catch (error) {
      console.log("[FTScreen] - HandleScheduleType - Ex: ", error);
    }
  };

  HandleFrequencyType = (SelectVal) => {
    try {

      console.log('SelectVal--',SelectVal)

      var FrequencyType_Label = this.FrequencyList.find(option => option.value == SelectVal);

      console.log('FrequencyType_Label--',FrequencyType_Label)
      
      this.setState({ 
        SelectedFrequencyTypeVal:SelectVal,
        SelectedFrequencyTypeDesc: FrequencyType_Label.label,
      });
     
    } 
    catch (error) {
      console.log("[FTScreen] - HandleFrequencyType - Ex: ", error);
    }
  };











  handleNextButtonPress = () => {
    try {
      const tolerance = 0.001;
      if (Math.abs(this.state.amount - 0.0) < tolerance) {
        this.showZeroAmountModal();
        console.log("amount zero");
      } else {
        this.toggleModal();
        console.log("amount not zero");
      }
    } catch (error) {
      console.log("[FTScreen] - handleNextButtonPress - Error ", error);
    }
  };

  handleLeftButtonPress = () => {
    try {
      this.props.navigation.replace(Index.SIGNUP_4);
      console.log("left pressed to navigate signup screen 4");
    } catch (error) {
      console.log("[FTScreen] - left_Button - Error ", error);
    }
  };

 

  handleNickNameInputChange = (text) => {
    try {
      this.setState({ selectedNickname: text });
    } catch (error) {
      console.log("[FTScreen] - handleNickNameInputChange - Error ", error);
    }
  };

  handleAccountnumInputChange = (text) => {
    try {
      this.setState({ selectedAccountNum: text });
    } catch (error) {
      console.log("[FTScreen] - handleAccountnumInputChange - Error ", error);
    }
  };

  handleAccount = (selectedAccount) => {
    try {
      this.setState({ selectedAccount });
    } 
    catch (Error) {
      console.log("[FTScreen] - handleAccount - Error ", Error);
    }
  };

  handleAccountType = (selectedAccountType) => {
    try {
      this.setState({ selectedAccountType });
    } catch (Error) {
      console.log("[FTScreen] - handleAccountType - Error ", Error);
    }
  };

  handleToAccount = (toAccount) => {
    try {
      this.setState({ toAccount });
    } catch (Error) {
      console.log("[FTScreen] - handleToAccount - Error ", Error);
    }
  };



  handleValidationDialog = () => {
    try {
      this.setState({ isVisibleValidationDialog: true });
    } catch (Error) {
      console.log("[FTScreen] - handleValidationDialog - Error ", Error);
    }
  };

  handleValidationDialogNo = () => {
    try {
      this.setState({ isVisibleValidationDialog: false });
      this.setState({ isModalVisible: false });
    } catch (Error) {
      console.log("[FTScreen] - handleValidationDialogNo - Error ", Error);
    }
  };

  handleValidationDialogYes = () => {
    try {
      this.props.navigation.navigate(Index.TRS_1, { data: this.state.amount });
      this.setState({ isVisibleValidationDialog: false });
      this.setState({ isModalVisible: false });
    } catch (Error) {
      console.log("[FTScreen] - handleValidationDialogYes - Error ", Error);
    }
  };

  toggleModal = () => {
    try {
      this.setState((prevState) => ({
        isModalVisible: !prevState.isModalVisible,
      }));
    } catch (Error) {
      console.log("[FTScreen] - toggleModal - Error ", Error);
    }
  };

  showZeroAmountModal = () => {
    try {
      this.setState((prevState) => ({
        isZeroAmountModalVisible: !prevState.isZeroAmountModalVisible,
      }));
    } catch (Error) {
      console.log("[FTScreen] - showZeroAmountModal - Error ", Error);
    }
  };

  handleSpinnerSelection = (value) => {
    try {
      this.setState({
        selectedSchedule: this.state.shedualList.find(
          (item) => item.value === value
        ).label_1,
      });

      if (value === "2") {
        this.setState({ isExpanded1: true });
        this.scrollViewRef.current.scrollToEnd({ animated: true });
      } else {
        this.setState({ isExpanded1: false });
      }
    } catch (Error) {
      console.log("[FTScreen] - handleSpinnerSelection - Error ", Error);
    }
  };

 

  handleTransferTypeSelection = (value) => {
    try {
      if (value === "In") {
        this.setState({
          selectedTransferType: this.state.tansferTypes.find(
            (item) => item.value === "In"
          ).label_1,
          isExpanded6: false,
          isExpanded7: true,
        });
      } else {
        this.setState({
          selectedTransferType: this.state.tansferTypes.find(
            (item) => item.value === "Ex"
          ).label_1,
          isExpanded6: true,
          isExpanded7: false,
        });
      }
    } catch (error) {
      console.log("[FTScreen] - handleTypeSelection - Error ", error);
    }
  };

 

  resetStateValues = () => {
    return {
      selectedAccountNum: "",
      selectedAccount: "",
      selectedBank: "",
      selectedBankCode: "",
      selectedAmount: "",
      selected_ID: "",
      selectedSchedule: "",
      selectedFrequency: "",
      nickname: "",
      selectedName: "",
      selectedFromAccount: "",
      selectedFromAccountAmount: "",
      selectedFromAccountID: "",
      selectedAccount2: "",
      selectedAmount2: "",
      selected_ID2: "",
      selectedTransferType: "",
    };
  };

  toggleExpand = () => {
    try {
      this.setState(
        (prevState) => ({
          isExpanded: true,
          isExpanded1: false,
          selectedSchedule: "",
        }),
        () => {
          if (this.state.isExpanded) {
            this.scrollViewRef.current.scrollToEnd({ animated: true });
          }
        }
      );
    } catch (Error) {
      console.log("[FTScreen] - toggleExpand - Error ", Error);
    }
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
      console.log("[FTScreen] - handleAddPayeeButton - Error ", error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.replace("DashboardScreen");
      console.log("Home Button pressed to Navigate to DashboardScreen");
    } catch (error) {
      console.log("[FTScreen] - Home_Button - Error ", error);
    }
  };

  handleBack = () => {
    try {
      this.props.navigation.replace(Index.SEND_MAIN_SCREEN);
      console.log("Home Button pressed to Navigate to DashboardScreen");
    } catch (error) {
      console.log("[FTScreen] - Home_Button - Error ", error);
    }
  };

  handleSpinnerChange1 = (label_1, label_2, value) => {
    this.setState({
      selectedFromAccount: label_1,
      selectedFromAccountAmount: label_2,
      selectedFromAccountID: value,

      selectedAccount2: "",
      selectedAmount2: "",
      selected_ID2: "",
    });
  };

 

 

  render() {

    
    console.log('SelectedPayeeAccNo---------------------------',this.state.SelectedPayeeAccNo)

    const { isModalVisible } = this.state;
    const { isZeroAmountModalVisible } = this.state;
    const { isExpanded } = this.state;

    const {
      selectedAccount2,

      spinnerData,
      Banklist,
      accountTypeList,
      shedualList,
      frequencyList,
      tansferTypes,
      regList,
    } = this.state;

    return (
      <>
        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>

          <View style = {GetCommonStyles(Android_Theme_Light).mainParentContainer}>

            <DashboardTitleBar
              //menuIcon = {Android_Theme_Light.ICON_DRAWERMENU }
              //onPressMenu = {()=>this.onPressMenu() }
              // = {() => this.onPressNotifications()}
              //onPressProfilePic = {() => this.onPressProfilePic()}
              TitleText = {'Transfer'}
              //TitleMessage = {GetGreeting()}
              //IconBell = {Android_Theme_Light.ICON_BELL}
              //IconProfilePic = {Android_Theme_Light.IMAGE_PROFILE_PIC}
            />

            <View style={FTScreenStyles(Android_Theme_Light).middleContainer}>

              <KeyboardAwareScrollView
              
                contentContainerStyle={GetCommonStyles(Android_Theme_Light).keyboardAwareView}
                keyboardShouldPersistTaps="always"
                behavior="padding"
                enableOnAndroid={true}
                enableAutomaticScroll={false}
                ref={this.scrollViewRef}>

                {/* FROM ACCOUNT */}
                <CommonDropDown
                  title={"From"}
                  data={this.AccountList}
                  isAccount={true}
                  //placeholder={'Select From Account'}
                  value={this.state.SelectedFromAccountID}
                  label={this.state.SelectedFromAccount}
                  amountlabel={this.state.SelectedFromAccountAmount}
                  onRef = {(ref) => (this.parentReferenceItem = ref)}
                  parentReferenceItem= {this.HandleFromAccount}/>

                {/* Gap */}
                <View style = {{height:20}}/>

                {/* TRANSFER TYPE */}
                <SelectDropDown
                  title={"Transfer Type"}
                  data={this.TransferTypeList}
                  placeholder={'Select transfer type'}
                  label={this.state.SelectedTransferTypeDesc}
                  value={this.state.SelectedTransferTypeVal}
                  onRef={(ref) => (this.parentReferenceItem = ref)}
                  parentReferenceItem={this.HandleFundTransferType}
                />

                {/* Gap */}
                <View style = {{height:20}}/>

                {

                  // Own Account Transfer 
                  this.state.SelectedTransferTypeVal === 1 ? 

                    /* TO ACCOUNT DROP DOWN */
                    <CommonDropDown
                      title={"To"}
                      data={this.AccountList.filter((option) => option.value !== this.state.SelectedFromAccountID)}
                      isAccount={true}
                      //placeholder={'Select to Account'}
                      value={this.state.SelectedToAccountID}
                      label={this.state.SelectedToAccount}
                      amountlabel={this.state.SelectedToAccountAmount}
                      onRef = {(ref) => (this.parentReferenceItem = ref)}
                      parentReferenceItem= {this.HandleToAccount}/>
                  
                  // Registered Payee Transfer
                  : this.state.SelectedTransferTypeVal === 2 ? 

                    <>

                      {/* REGISTERED PAYEE LIST DROP DOWN*/}
                      <SelectDropDown
                        data={this.RegisteredPayee_List}
                        title={"Send to"}
                        placeholder={"Select Payee"}
                        value={this.state.SelectedPayeeID}
                        label={this.state.SelectedPayee}
                        onRef={(ref) => (this.parentReferenceItemName = ref)}
                        parentReferenceItem={this.HandleRegisteredPayee}
                      />

                      { 
                        
                        this.state.SelectedPayeeID ? 

                          <>
                          
                            {/* Gap */}
                            <View style = {{height:20}}/>
                            
                            {/* PAYEE BANK */}
                            <CommonDropDown
                              disabled={true}
                              title={"Bank"}
                              data={this.Bank_List}
                              placeholder={this.state.SelectedPayeeBank || "Select Bank"}
                              label={this.state.SelectedPayeeBank}
                              value={this.state.SelectedPayeeBankCode}
                              onRef={(ref) =>
                              (this.parentReferenceItemName = ref)
                              }
                              parentReferenceItem={this.HandleBank}
                            />

                            {/* Gap */}
                            <View style = {{height:20}}/>

                            {/* TO ACCOUNT NO*/}
                            <CommonInputField
                              readOnly = {true}
                              value={this.state.SelectedPayeeAccNo}
                              title={"Account Number"}
                              onInputChange={this.OnRegisteredPayeeInputChange}
                              //inputRef={this.transferName}
                              //nextInputRef={this.transferPurpose}
                              placeholder={"Account Number"}
                              icon={Android_Theme_Light.ICON_VERIFIED}
                            /> 

                          </> 
                        : null
                      }
                    </>

                  // Unregistered Payee Transfer
                  : this.state.SelectedTransferTypeVal === 3 ? 

                    <>

                      {/* Gap */}
                      <View style = {{height:20}}/>

                      {/* ACCOUNT TYPE */}
                      <SelectDropDown
                        title={"Account Type"}
                        data={this.AccountType_List}
                        placeholder={'Select account type'}
                        value={this.state.SelectedAccountTypeVal}
                        label={this.state.SelectedAccountTypeDesc}
                        onRef={(ref) => (this.parentReferenceItem = ref)}
                        parentReferenceItem={this.HandleAccountType}
                      />

                      {/* Gap */}
                      <View style = {{height:20}}/>

                      {

                        this.state.SelectedAccountTypeVal !== 1 ? 

                          <> 

                            {/* UNREGISTERED PAYEE BANK */}
                            <CommonDropDown
                              title={"Bank"}
                              data={this.Bank_List}
                              placeholder={this.state.SelectedPayeeBank || "Select Bank"}
                              label={this.state.SelectedPayeeBank}
                              value={this.state.SelectedPayeeBankCode}
                              onRef={(ref) => (this.parentReferenceItemName = ref)}
                              parentReferenceItem={this.HandleBank}
                            />

                            {/* Gap */}
                            <View style = {{height:20}}/>

                          </> 
                        
                        : null
                      }

                      {/* UNREG PAYEE TO ACCOUNT */}
                      <CommonInputField
                        title={"Account Number"}
                        value={this.state.UnregToAccountNo}
                        onInputChange={(text) =>
                          this.OnUnregPayee_ToAccountInputChange(text)
                        }
                        //inputRef={this.tr}
                        nextInputRef={this.transferAmount}
                        placeholder={"Enter payee account number"}
                        icon={Android_Theme_Light.ICON_VERIFIED}
                        returnKeyType="next"
                      /> 
                    </>
                  : null
                
                }

                {/* Gap */}
                <View style = {{height:20}}/>

                {/* AMOUNT */}
                <CommonInputField
                  value={this.state.amount}
                  title={"Amount*"}
                  onInputChange={(text) =>
                    this.OnAmountInputChange(text)
                  }
                  inputRef={this.transferAmount}
                  nextInputRef={this.transferRemark}
                  type={"currency"}
                  //width={"100%"}
                  icon={Android_Theme_Light.ICON_VERIFIED}
                />

                {/* Gap */}
                <View style = {{height:20}}/>

                {/* REMARK */}
                <CommonInputField
                  value={this.state.RemarkVal}
                  title={"Remark"}
                  placeholder={"Remark"}
                  onInputChange={(text) =>
                    this.OnRemarkInputChange(text)
                   }
                  inputRef={this.transferRemark}
                  //nextInputRef={this.transferPurpose}
                  icon={Android_Theme_Light.ICON_VERIFIED}
                />

                {/* Gap */}
                <View style = {{height:20}}/>

                {/* UNREGISTERED PAYEE BANK */}
                <CommonDropDown
                  title={"Transaction Type"}
                  data={this.TransactionType_List}
                  placeholder={this.state.SelectedTransactionTypeDesc || "Select Transaction Type"}
                  value={this.state.SelectedTransactionTypeVal}
                  label={this.state.SelectedTransactionTypeDesc}
                  onRef={(ref) => (this.parentReferenceItem = ref)}
                  parentReferenceItem={this.HandleTransactionType}
                />

                { 
                
                  this.state.SelectedTransactionTypeVal !== 1 ? 

                    <>

                      {/* Gap */}
                      <View style = {{height:20}}/>

                      {/* SCHEDULE TYPE */}
                      <SelectDropDown
                        data={this.ScheduleType_List}
                        placeholder={this.state.SelectedScheduleTypeDesc || "Select Schedule"}
                        value={this.state.SelectedScheduleTypeVal}
                        label={this.state.SelectedScheduleTypeDesc}
                        onRef={(ref) => (this.parentReferenceItem = ref)}
                        parentReferenceItem={this.HandleScheduleType}
                      />

                      { 
                
                        this.state.SelectedScheduleTypeVal !== 1 ? 

                          <>

                            {/* Gap */}
                            <View style = {{height:20}}/>
                      
                            {/* FREAQUENCY TYPE */}
                            <SelectDropDown
                              data={this.FrequencyList}
                              placeholder={this.state.SelectedFrequencyTypeVal || "Select Frequency"}
                              value={this.state.SelectedFrequencyTypeVal}
                              label={this.state.SelectedFrequencyTypeDesc}
                              onRef={(ref) => (this.parentReferenceItem = ref)}
                              parentReferenceItem={this.HandleFrequencyType}/>

                          </>    
                        : null
                      }

                      {/* Gap */}
                      <View style = {{height:20}}/>

                      <CommonInputField
                         value={""}
                        title={"Date From *"}
                        onInputChange={""}
                        inputRef={this.transferTo}
                        nextInputRef={this.transferRemark}
                        type={"date"}
                        icon={Android_Theme_Light.ICON_CALENDER}
                        readOnly={true}
                      />

                      { 
                
                        this.state.SelectedScheduleTypeVal !== 1 ? 

                          <>

                            {/* Gap */}
                            <View style = {{height:20}}/>
                         
                            <CommonInputField
                              value={""}
                              title={"Date To *"}
                              onInputChange={""}
                              inputRef={this.transferTo}
                              nextInputRef={this.transferRemark}
                              type={"date"}
                            
                              icon={Android_Theme_Light.ICON_CALENDER}
                              readOnly={true}
                            />

                          </> 
                        : null
                      }

                    </> 
                  
                  : null

                }

              </KeyboardAwareScrollView>

            </View>

          </View>

          <View style={FTScreenStyles(Android_Theme_Light).bottomView}>
            <CommonButton
              type="1"
              title={"Next"}
              borderRadius={35}
              onPress={this.handleNextButtonPress}
              textSize={20}
              width={"60%"}
            />

            <BottomBar
              BackIcon={Android_Theme_Light.ICON_BACK_ARROWS}
              HomeIcon={Android_Theme_Light.ICON_HOME}
              onPressBackButton={this.handleBack}
              onPressHomeButton={this.handleHome}
            />
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={this.toggleModal}
          >
            <TouchableWithoutFeedback onPress={this.toggleModal}>
              <View
                style={FTScreenStyles(Android_Theme_Light).modalViewBackground}
              >
                <View style={FTScreenStyles(Android_Theme_Light).modalView}>
                  <Text
                    style={FTScreenStyles(Android_Theme_Light).textTransfer}
                  >
                    {"LKR " + this.state.amount}
                  </Text>
                  <CommonButton
                    type="1"
                    title={"Transfer " + "LKR " + this.state.amount}
                    borderRadius={35}
                    onPress={this.handleValidationDialog}
                    width={"60%"}
                  />
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
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            visible={isZeroAmountModalVisible}
            onRequestClose={this.showZeroAmountModal}
          >
            <TouchableWithoutFeedback onPress={this.showZeroAmountModal}>
              <View
                style={FTScreenStyles(Android_Theme_Light).modalViewBackground}
              >
                <View style={FTScreenStyles(Android_Theme_Light).modalView}>
                  <Text
                    style={FTScreenStyles(Android_Theme_Light).textZeroTransfer}
                  >
                    Please enter an amount greater {'\n'} than 0 to proceed
                  </Text>


                  <View height={10}/>
                  <CommonButton
                    type="1"
                    title={"OK"}
                    borderRadius={35}
                    onPress={this.showZeroAmountModal}
                    width={"60%"}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </SafeAreaView>
      </>
    );
  }
}

export default FTScreen;
