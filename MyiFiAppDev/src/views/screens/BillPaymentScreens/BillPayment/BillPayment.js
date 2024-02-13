import React, { Component } from "react";
import { View, Text, SafeAreaView, StatusBar, Modal, TouchableOpacity, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import MainTitleBar from "../../../components/Common/TitleBar/MainTitleBar";
import { GetBillPaymentStyles } from "./BillPaymentStyles";
import Index from "../../../../configs/Index";
import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import CommonSpinner from '../../../components/Common/CommonSpinner';
import CommonSpinnerLong from '../../../components/Common/CommonSpinnerLong';
import ValidationDialogs from "../../../components/Common/ValidationDialogs";
import Colors from "../../../../styles/Colors";
import CommonCardButton from "../../../components/Common/CardButton/CommonCardButton";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import {
  Android_Theme_Light,
  Android_Theme_Dark,
} from "../../../../styles/Themes";
import BottomTitleBar from "../../../components/Common/BottomBar/BottomBar";

//Done by: Darshana 24/01/26
//Done by:Nawodya

class BillPayment extends Component {


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
      scrollEnabled: true,
      selectedAccountType: null,
      toAccount: null,
      amount: "",
      isVisibleValidationDialog: false,
      isModalVisible: false,
      isExpanded: false,
      isExpanded1: false,
      isExpanded2: false,
      isExpanded3: true,
      isExpanded4: false,

      selectedAccountNum: '',
      selectedAccount: '',
      selectedProvider: '',
      selectedProviderNum: '',
      selectedAmount: '',
      selected_ID: '',
      selectedSchedule: '',
      selectedType: '',
      selectedAccountType: '',
      selectedFrequency: '',
      selectedNickName: '',
      selectedRemark: '',
      selectedPurpose: '',
      selectedTransferFrom: '',
      selectedTransferTo: '',
      selectedTransferType: '',
      selectedCategory: '',
      selectedBillerName: '',
    };
  }

  payementData = [
    { name: "Water Supply", category: "Home", nickname: "mywater" },
    { name: "Home Electricity", category: "Electricity", nickname: "HomeElectricity" },
    { name: "Home Telephone", category: "Telephone", nickname: "homePhone" },
    { name: "My Mobitel", category: "Mobile", nickname: "MyMobitel" },
    { name: "Dialog Television", category: "Home", nickname: "HomeTv" },
  ];

  transformData(paymentData) {
    return paymentData.map(item => ({
      label_1: item.name,
      label_2: item.category,
      value: item.nickname
    }));
  }


  accountData = [
    { label_1: "MyFi", label_2: '457,685', value: '001' },
    { label_1: "Venum", label_2: '546,685.33', value: '002' },
    { label_1: "Infinity", label_2: '757,685.45', value: '003' },
    { label_1: "Havlock", label_2: '36,685.56', value: '004' },
    { label_1: "Nirwaan", label_2: '257,685.76', value: '005' },
    { label_1: "Focus", label_2: '44,685.88', value: '006' },
    { label_1: "Cedar", label_2: '37,685.65', value: '007' },
  ]






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
      //StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
      const transformedData = this.transformData(this.payementData);
      this.setState({ transformedData });
    } catch (Error) {
      console.log("[BillPayment] - componentDidMount - Error ", Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[BillPayment] - componentWillUnmount - Error ", Error);
    }
  }


  handleNextButtonPress = () => {
    try {
      this.props.navigation.replace(Index.FUND_1);
      console.log("Next button pressed to navigate to FundScreen1");
    }
    catch
    (error) { console.log("[BillPayment] - Next_Button - Error ", error); }
  };

  handleLeftButtonPress = () => {
    try {
      this.props.navigation.replace(Index.SIGNUP_4);
      console.log("left pressed to navigate signup screen 4");
    }
    catch (error) { console.log("[BillPayment] - left_Button - Error ", error); }

  };


  handleInputChange = (text) => {
    try {
      this.setState({ amount: text });
    }
    catch (Error) { console.log("[BillPayment] - handleInputChange - Error ", Error); }
  };
  handleInputChangeRemark = (text) => {
    try {
      this.setState({ selectedRemark: text });
    }
    catch (Error) { console.log("[BillPayment] - handleInputChange - Error ", Error); }
  };

  handleAccount = (selectedAccount) => {
    try {

      this.setState({ selectedAccount });
    }
    catch (Error) {
      console.log("[BillPayment] - handleAccount - Error ", Error);
    }
  };

  handleAccountType = (selectedAccountType) => {
    try {

      this.setState({ selectedAccountType });
    }
    catch (Error) {
      console.log("[BillPayment] - handleAccountType - Error ", Error);
    }
  };

  handleToAccount = (toAccount) => {
    try {

      this.setState({ toAccount });
    }
    catch (Error) {
      console.log("[BillPayment] - handleToAccount - Error ", Error);
    }
  };

  handleAmountInputChange = (amount) => {
    try {
      this.setState({ amount: parseFloat(amount.replace(/,/g, "")) });
    }
    catch (Error) { console.log("[BillPayment] - handleAmountInputChange - Error ", Error); }
  };


  handleValidationDialog = () => {
    try {
      this.setState({ isVisibleValidationDialog: true });
    }
    catch (Error) { console.log("[BillPayment] - handleValidationDialog - Error ", Error); }

  };



  handleValidationDialogNo = () => {
    try {
      this.setState({ isVisibleValidationDialog: false });
      this.setState({ isModalVisible: false });
    }
    catch (Error) { console.log("[BillPayment] - handleValidationDialogNo - Error ", Error); }
  };


  // handleValidationDialogYes = () => {
  //   try{
  //     this.props.navigation.navigate("BillPaymentTransferReceiptScreen");
  //   // this.props.navigation.navigate(Index.FUND_OTP); 
  //   this.setState({ isVisibleValidationDialog: false });
  //   this.setState({ isModalVisible           : false }); }
  //   catch(Error) { console.log("[BillPayment] - handleValidationDialogYes - Error ", Error); }
  // };

  handleValidationDialogYes = () => {
    const dataArray = [
      { key: "select Account", value: this.state.selectedAccount },
      { key: "Nick Name", value:this.state.selectedNickName },
      { key: "Select Biller", value: this.state.selectedBillerName },
      { key: "Category", value: this.state.selectedCategory  },
       { key: "Amount *", value: this.state.amount },
      { key: "Remark", value: this.state.selectedRemark },

    ];
    this.props.navigation.navigate("BillPaymentTransferReceiptScreen", {
      data: dataArray,
      amountEntered: this.state.amount,
    });
  };

  toggleModal = () => {
    try {
      this.setState((prevState) => ({
        isModalVisible: !prevState.isModalVisible,
      }));
    } catch (Error) {
      console.log("[BillPayment] - toggleModal - Error ", Error);
    }
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
    } catch (error) {
      console.log("[BillPayment] - toggleExpand - Error ", error);
    }
  };





  handleSpinnerSelection = (label_1) => {
    try {
      this.setState({
        selectedSchedule: label_1,
      });

      if (label_1 === "Repeat") {
        this.setState({ isExpanded1: true });
        this.scrollViewRef.current.scrollToEnd({ animated: true });
      } else {
        this.setState({ isExpanded1: false });
      }
    }
    catch (Error) { console.log("[BillPayment] - handleSpinnerSelection - Error ", Error); }
  };

  handleTypeSelection = (label_1) => {
    try {
      this.setState({
        selectedType: label_1,
      });

      if (label_1 === "New Bill Payment") {
        this.setState({ isExpanded2: true });
        this.setState({ isExpanded3: false });
      } else {
        this.setState({ isExpanded3: true });
        this.setState({ isExpanded2: false });
      }
    }
    catch (Error) { console.log("[BillPayment] - handleTypeSelection - Error ", Error); }
  };

  handleAddPayeeButton = () => {
    try {
      this.props.navigation.replace("AddNewBillerScreen");
      console.log("left pressed to navigate BillerManagementScreen");
    }
    catch (Error) { console.log("[BillPayment] - handleAddPayeeButton - Error ", Error); }
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







  render() {

    const { isModalVisible } = this.state;
    const { isExpanded } = this.state;
    const { isExpanded1 } = this.state;
    const { isExpanded2 } = this.state;
    const { isExpanded3 } = this.state;
    const { isExpanded4 } = this.state;



    return (

      <>

        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>

          {/* <MainTitleBar
              IconLeft   = {null}
              TitleText  = {null}
              TextAlign  = {'left'}
              IconRight  = {null}
              onPressLeft= {this.handleLeftButtonPress }/>

        Tittle Bar invisible

      */}

          <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end", alignItems: "center" }}
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={10}
            enableOnAndroid={true}
            enableAutomaticScroll={false}
            keyboardOpeningTime={300}
            scrollToPosition={{ x: 0, y: 0, animated: true }}
            ref={this.scrollViewRef}
            onKeyboardDidShow={(frames) => {

            }}
            onKeyboardDidHide={(frames) => {

            }}
          >


            <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
              <View style={GetCommonStyles(Android_Theme_Light).titleContainer}>
                <Text style={GetCommonStyles(Android_Theme_Light).titleContainertitleText}>
                  Bill Payments
                </Text>
              </View>

              <View style={GetBillPaymentStyles(Android_Theme_Light).middleView}>


                <ScrollView
                  ref={this.scrollViewRef}
                >



                  <View style={{ height: 5 }} />

                  <View style={GetBillPaymentStyles(Android_Theme_Light).bankView}>

                    <CommonSpinnerLong
                      width={"100%"}
                      data={this.accountData}



                      placeholder={this.state.selectedAccount}
                      lable_1={this.state.selectedAccount || "MyiFi"}
                      lable_2={this.state.selectedAmount || '457,685.54'}
                      lable_2Show={true}
                      value={this.state.selected_ID || ''}
                      onRef={(ref) => (this.parentReferenceItem = ref)}
                      inputRef={this.transferFrom}
                      nextInputRef={this.transferTo}
                      currency={"LKR"}
                      parentReferenceItem={(label_1, label_2, value) => {
                        this.setState({
                          selectedAccount: label_1,
                          selectedAmount: label_2,
                          selected_ID: value,
                        });
                      }}
                    />
                  </View>

                  <View style={{ height: 20 }} />

                  <Text style={GetBillPaymentStyles(Android_Theme_Light).titleText}>
                    Payment To
                  </Text>

                  <View style={GetBillPaymentStyles(Android_Theme_Light).paymentTo}>
                    <View style={GetBillPaymentStyles(Android_Theme_Light).paymentToInput}>
                      <CommonSpinnerLong
                        width={"100%"}
                        data={this.state.transformedData}
                        placeholder={"Select Biller"}
                        lable_1={this.state.selectedBillerName}
                        lable_2Show={false}
                        value={''}
                        onRef={(ref) => (this.parentReferenceItem = ref)}

                        parentReferenceItem={(label_1, label_2, value,) => {
                          this.setState({
                            selectedBillerName: label_1,
                            selectedCategory: label_2,
                            selectedNickName: value
                          });


                        }}
                      />
                    </View>
                    <View style={GetBillPaymentStyles(Android_Theme_Light).addPayeeButton}>
                      <CommonCardButton
                        width={"100%"}
                        height={"100%"}
                        icon={Android_Theme_Light.ICON_PLUS}
                        text={"Add New"}
                        onPress={() => this.handleAddPayeeButton()}
                      />
                    </View>


                  </View>
                  <View style={{ height: 10 }} />
                  <CommonInputField
                    value={this.state.selectedBillerName}
                    title={"Category"}
                    onInputChange={(text) => this.handleInputChange(text)}
                    inputRef={this.transferRemark}
                    nextInputRef={this.transferPurpose}
                    placeholder={this.state.selectedCategory || "Category"}
                    width={"100%"}
                    icon={Android_Theme_Light.ICON_VERIFIED}
                    readOnly={true}
                  />
                  <View style={{ height: 10 }} />
                  <CommonInputField
                    value={this.state.selectedNickName}
                    title={"Nick Name"}
                    onInputChange={(text) => this.handleInputChange(text)}
                    inputRef={this.transferRemark}
                    nextInputRef={this.transferPurpose}
                    placeholder={this.state.selectedNickName || "Nick Name"}
                    width={"100%"}
                    icon={Android_Theme_Light.ICON_VERIFIED}
                    readOnly={true}
                  />



                  <View style={{ height: 10 }} />
                  <CommonInputField
                    value={this.state.amount}
                    title={"Amount *"}
                    onInputChange={(text) => this.handleAmountInputChange(text)}
                    inputRef={this.transferTo}
                    nextInputRef={this.transferRemark}
                    type={'currency'}
                    width={"100%"}
                    icon={Android_Theme_Light.ICON_VERIFIED}
                  />
                  <View style={{ height: 10 }} />


                  <CommonInputField
                    value={this.state.selectedRemark}
                    title={"Remark"}
                    onInputChange={(text) => this.handleInputChangeRemark(text)}
                    inputRef={this.transferRemark}
                    nextInputRef={this.transferPurpose}
                    placeholder={"Remark"}
                    width={"100%"}
                    icon={Android_Theme_Light.ICON_VERIFIED}
                  />

                  <View style={{ height: 10 }} />



                  <View style={GetBillPaymentStyles(Android_Theme_Light).buttonContainer}>
                    <View style={GetBillPaymentStyles(Android_Theme_Light).buttonContainer1}>

                      <TouchableOpacity onPress={() => this.setState({ isExpanded: false })}>

                        <View
                          style={[
                            GetBillPaymentStyles(Android_Theme_Light).button,
                            {
                              backgroundColor: this.state.isExpanded
                                ? Android_Theme_Light.WHITE_COLOR
                                : Android_Theme_Light.BLUE_COLOR
                            }
                          ]}
                        >
                          <Text style={[GetBillPaymentStyles(Android_Theme_Light).buttonText,
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
                          style={[GetBillPaymentStyles(Android_Theme_Light).button,
                          {
                            backgroundColor: this.state.isExpanded
                              ? Android_Theme_Light.BLUE_COLOR
                              : Android_Theme_Light.WHITE_COLOR
                          }
                          ]}
                        >
                          <Text style={[GetBillPaymentStyles(Android_Theme_Light).buttonText,
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
                    <View style={GetBillPaymentStyles(Android_Theme_Light).expandContainer}>
                      <Text style={GetBillPaymentStyles(Android_Theme_Light).titleText}>
                        Schedule Type
                      </Text>
                      <View style={{ height: 5 }} />
                      <View style={GetBillPaymentStyles(Android_Theme_Light).bankView}>

                        <CommonSpinnerLong
                          width={"100%"}
                          data={[
                            { label_1: "One Time", value: '01' },
                            { label_1: "Repeat", value: '03' },
                          ]}
                          placeholder={this.state.selectedSchedule}
                          lable_1={this.state.selectedSchedule || "One Time"}
                          lable_2Show={false}
                          value={''}
                          search={false}
                          onRef={(ref) => (this.parentReferenceItem = ref)}
                          currency={"LKR"}
                          parentReferenceItem={(label_1, label_2, value) => {
                            this.setState({
                              selectedSchedule
                                : label_1,
                            });
                            this.handleSpinnerSelection(label_1, value);
                          }}

                        />

                      </View>
                      <View style={{ height: 20 }} />

                      {this.state.isExpanded1 && (
                        <>
                          <View style={{ height: 10 }} />
                          <Text style={GetBillPaymentStyles(Android_Theme_Light).titleText}>
                            Frequency
                          </Text>
                          <View style={{ height: 5 }} />
                          <View
                            style={GetBillPaymentStyles(Android_Theme_Light).bankView}
                          >
                            <CommonSpinnerLong
                              width={"100%"}
                              data={[
                                { label_1: "Dialy", value: '01' },
                                { label_1: "Weekly", value: '02' },
                                { label_1: "Monthly", value: '03' },
                                { label_1: "Quarter", value: '04' },
                                { label_1: "Yearly", value: '05' },
                              ]}
                              placeholder={"Select Frequency"}
                              lable_1={this.state.selectedFrequency}
                              lable_2Show={false}
                              value={''}
                              search={false}
                              onRef={(ref) => (this.parentReferenceItem = ref)}

                              parentReferenceItem={(label_1, label_2, value) => {
                                this.setState({
                                  selectedFrequency: label_1,
                                });

                              }}

                            />
                          </View>

                          <View style={{ height: 20 }} />
                          <CommonInputField
                            value={""}
                            title={"Date From *"}
                            onInputChange={""}
                            inputRef={this.transferTo}
                            nextInputRef={this.transferRemark}
                            type={"date"}
                            width={"100%"}
                            icon={Android_Theme_Light.ICON_CALENDER}
                            readOnly={true}
                          />

                          <View style={{ height: 20 }} />
                          <CommonInputField
                            value={""}
                            title={"Date To *"}
                            onInputChange={""}
                            inputRef={this.transferTo}
                            nextInputRef={this.transferRemark}
                            type={"date"}
                            width={"100%"}
                            icon={Android_Theme_Light.ICON_CALENDER}
                            readOnly={true}
                          />
                        </>
                      )}


                      <View style={{ height: 20 }} />
                      {!this.state.isExpanded1 && (
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
                      )}

                      <View style={{ height: 20 }} />
                    </View>
                  )}
                  <View style={{ height: 20 }} />

                  <View style={GetBillPaymentStyles(Android_Theme_Light).bottomView3}>
                    <View style={GetBillPaymentStyles(Android_Theme_Light).bottomView1}>

                      <View style={GetBillPaymentStyles(Android_Theme_Light).bottomView2}>

                      </View>

                    </View>
                  </View>

                </ScrollView>

              </View>
            </View>
          </KeyboardAwareScrollView>

          <View style={GetBillPaymentStyles(Android_Theme_Light).bottomView}>

            <CommonButton
              type='1'
              title={"Next"}
              borderRadius={35}
              onPress={this.toggleModal}
              textSize={20}
              width={"60%"}
            />

            <BottomTitleBar
              icon1={Android_Theme_Light.ICON_BACK_ARROWS}
              icon2={Android_Theme_Light.ICON_HOME}
              onPressIcon1={this.handleBack}
              onPressIcon2={this.handleHome}
            />

          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={this.toggleModal}
          >
            <View style={GetBillPaymentStyles(Android_Theme_Light).modalViewBackground}>


              <View style={GetBillPaymentStyles(Android_Theme_Light).modalView}>
                <Text style={GetBillPaymentStyles(Android_Theme_Light).textTransfer}>
                  {"LKR: " + this.state.amount}

                </Text>

                <CommonButton
                  type="1"
                  title={"Transfer LKR: " + this.state.amount}
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


export default BillPayment;
