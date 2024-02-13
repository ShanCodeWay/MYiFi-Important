// Splash.js
import React, { Component } from "react";
import { View, Text,  Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../styles/Themes";
import GetDashboardScreenStyles from "./DashboardScreenStyles";

import CommonCardButton from "../../components/Common/CardButton/CommonCardButton";
import Index from "../../../configs/Index";
import { AmountSeperation, GetGreeting } from "../../../utils/helpers";

import { DrawerActions } from '@react-navigation/native';
import DashboardTitleBar from "../../components/Common/TitleBar/DashboardTitleBar";

class DashboardScreen extends Component {

  tansactionList = [
    {
      id: 1,
      type: "0",
      description: "CEFT/7181819/Dasun",
      amount: "- Rs. 1800.00",
      amountDescription: "Savings",
    },
    {
      id: 2,
      type: "1",
      description: "Silps/234535/Aurdi",
      amount: "  Rs. 23,000.00",
      amountDescription: "Wallet",
    },
    {
      id: 3,
      type: "0",
      description: "Pay/GoldL/Mercantile",
      amount: "- Rs. 12,300.00",
      amountDescription: "Wallet",
    },
    {
      id: 4,
      type: "0",
      description: "CEFT/7181819/Dasun",
      amount: "- Rs. 1800.00",
      amountDescription: "Savings",
    },

    {
      id: 5,
      type: "1",
      description: "Silps/234535/Aurdi",
      amount: "  Rs. 23,000.00",
      amountDescription: "Savings",
    },
    {
      id: 6,
      type: "0",
      description: "Pay/GoldL/Mercantile",
      amount: "- Rs. 12,300.00",
      amountDescription: "Savings",
    },
    {
      id: 7,
      type: "0",
      description: "CEFT/7181819/Dasun",
      amount: "- Rs. 1800.00",
      amountDescription: "Wallet",
    },
  ];

  MainButtonList = [
    {
      id: 1,
      label: "Send",
      icon: Android_Theme_Light.ICON_SEND,
      onPress: ()=> this.OnSendButtonPress()
    },
    {
      id: 2,
      label: "Invest",
      icon: Android_Theme_Light.ICON_INVEST,
      onPress: ()=> this.OnInvestButtonPress()
    },
    {
      id: 3,
      label: "Payments",
      icon: Android_Theme_Light.ICON_PAYMENT,
      onPress: ()=> this.OnPaymentsButtonPress()
    },
    {
      id: 4,
      label: "Leasing/Loans",
      icon: Android_Theme_Light.ICON_LOAN,
      onPress: ()=> this.OnLeaseLoanButtonPress()
    },
  ]
  
  EasyAccessList = [
    {
      id: 1,
      label: "Transfer",
      icon: Android_Theme_Light.ICON_EXTERNALOPEN,
      onPress: ()=> this.OnPress_EasyTransferButton()
    },
    {
      id: 2,
      label: "Payments",
      icon: Android_Theme_Light.ICON_EASY_PAYMENT,
      onPress: ()=> this.OnPress_EasyPaymentsButton()
    },
    {
      id: 3,
      label: "FD",
      icon: Android_Theme_Light.ICON_INVEST,
      onPress: ()=> this.OnPress_EasyFDButton()
    },
    {
      id: 4,
      label: "Savings",
      icon: Android_Theme_Light.ICON_LOAN,
      onPress: ()=> this.OnPress_EasySavingsButton()
    },
  ]

  constructor(props) {
    
    super(props);

    this.state = {
      UserName: 'Hi Dhamith,',
      Balance: 6700450.35,
    };

  }

  componentDidMount() {
    try {

    } 
    catch (error) {
      console.log("[DashboardScreen] - componentDidMount() EX: " + error);
    }
  }

  componentWillUnmount() {
    try {
    } 
    catch (error) {
      console.log("[DashboardScreen] - componentWillUnmount() EX: " + error);
    }
  }

  OnSendButtonPress = () => {

    try {
      this.props.navigation.navigate("FTScreen");
    } 
    catch(error) {
      console.log("[DashboardScreen] - OnSendButtonPress() Ex: ", error);
    }
  }

  OnInvestButtonPress = () => {
    try {
      this.props.navigation.navigate("InvestMainScreen");
    } 
    catch(error){
      console.log("[DashboardScreen] - OnInvestButtonPress() Ex: ", error);
    }
  }

  OnPaymentsButtonPress = () => {
    try {
      this.props.navigation.navigate(Index.BILL_1);
    } 
    catch(error){
      console.log("[DashboardScreen] - OnPaymentsButtonPress() Ex: ", error);
    }
  }

  OnLeaseLoanButtonPress = () => {
    try {
      this.props.navigation.navigate("SavingsScreen");
    } 
    catch(error){
      console.log("[DashboardScreen] - OnLeaseLoanButtonPress() Ex: ", error);
    }
  }

  OnPress_EasyTransferButton = () => {
    try {
      this.props.navigation.navigate(Index.FUND_1);
    }  
    catch(error){
      console.log("[DashboardScreen] - OnPress_EasyTransferButton() Ex: ", error);
    }
  };

  OnPress_EasyPaymentsButton = () => {
    try {
      this.props.navigation.navigate('LeasingLoanMainScreen');
    }    
    catch(error){
      console.log("[DashboardScreen] - OnPress_EasyPaymentsButton() Ex: ", error);
    }
  }

  OnPress_EasyFDButton = () => {
    try {
      this.props.navigation.navigate("BillPayement");
    } 
    catch(error){
      console.log("[DashboardScreen] - OnPress_EasyFDButton() Ex: ", error);
    }
  };

  OnPress_EasySavingsButton = () => {
    try {
      this.props.navigation.navigate("BillPayement");
    } 
    catch(error){
      console.log("[DashboardScreen] - OnPress_EasySavingsButton() Ex: ", error);
    }
  };

  onPressMenu = () => {
    try {
      
      this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    
    } 
    catch(error) {
      console.log("[DashboardScreen] - onPressMenu() Ex: ", error);
    }
  };

  onPressNotifications = () => {
    try {
      this.props.navigation.navigate("NotificationsCentreScreen");
    } 
    catch(error) {
      console.log("[DashboardScreen] - onPressNotifications() Ex: ", error);
    }
  };

  onPressProfilePic = () => {
    try {
      //this.props.navigation.navigate("NotificationsCentreScreen");
    } 
    catch(error){
      console.log("[DashboardScreen] - onPressProfilePic() Ex: ", error);
    }
  };

  onPressMore = () => {
    try {
      //this.props.navigation.navigate("NotificationsCentreScreen");
    } 
    catch(error){
      console.log("[DashboardScreen] - onPressMore() Ex: ", error);
    }
  }
  
  RenderMainButtonList = () => {
    try {

      return (

        this.MainButtonList.map((Button) => {

          console.log('Button--',Button)

          return (
        
            <CommonCardButton
              height={65}
              icon={Button.icon}
              text={Button.label}
              onPress={Button.onPress}/>

          )
        })
      )
    } 
    catch (Error) {
      console.log("[DashboardScreen] - RenderMainButtonList() EX: " + Error);
    }
  }

  RenderEasyAccessList = () => {

    try {

      return (

        this.EasyAccessList.map((item) => {

        console.log('RenderEasyAccessList--',item)

        return (
          
          <View 
            style={GetDashboardScreenStyles(Android_Theme_Light).easyAccessButtonView}>
            
            <TouchableOpacity
              style={GetDashboardScreenStyles(Android_Theme_Light).easyAccessIconButtonView}
              onPress={item.onPress}>

              <item.icon/>
              
            </TouchableOpacity>

            <View 
              style={GetDashboardScreenStyles(Android_Theme_Light).easyAccessTextView}>
              
              <Text
                style={GetDashboardScreenStyles(Android_Theme_Light).textEasyAccessbtn}>
                {item.label}
              </Text>
              
            </View>

          </View>
        );
      })
      )
    }
    catch (Error) {
      console.log("[DashboardScreen] - RenderEasyAccessList() EX: " + Error);
    }
  }

  RenderRecentTransactions = () => {
    
    try {

      return (

        this.tansactionList.map((item) => {

          console.log('RenderRecentTransactions--',item)

          return (
        
            <View
              style={GetDashboardScreenStyles(Android_Theme_Light).transactionItemRowContainer}>

              <View
                style={GetDashboardScreenStyles(Android_Theme_Light).recent_trns_icon_view}>

                {
                  item.type == "0" ? 
                    <Android_Theme_Light.ICON_SEND_ARROW width = {20} height = {20} /> : 
                    <Android_Theme_Light.ICON_RECEIVE_ARROW width = {20} height = {20}/>
                
                }

              </View>

              <View
                style={GetDashboardScreenStyles(Android_Theme_Light).recent_trns_desc_view}>

                <Text 
                  style={GetDashboardScreenStyles(Android_Theme_Light).texttransactionDescription}>
                  
                  {item.description}

                </Text>

              </View>

              <View
                style={GetDashboardScreenStyles(Android_Theme_Light).recent_trns_amount_view}>

                <Text
                  style={GetDashboardScreenStyles(Android_Theme_Light).textTransactionAmount}>
                  
                  {item.amount}
                
                </Text>
          
                <Text
                  style={GetDashboardScreenStyles(Android_Theme_Light).textTransactionAmountDescription}>
            
                  {item.amountDescription}
                
                </Text>

              </View>

            </View>
          )
        })
      )
    }
    catch (Error) {
      console.log("[DashboardScreen] - RenderRecentTransactions() EX: " + Error);
    }
   
  }

  render() {

    return (

      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>

        <DashboardTitleBar
          menuIcon = {Android_Theme_Light.ICON_DRAWERMENU }
          onPressMenu = {()=>this.onPressMenu() }
          onPressNotifications = {() => this.onPressNotifications()}
          onPressProfilePic = {() => this.onPressProfilePic()}
          TitleText = {this.state.UserName}
          TitleMessage = {GetGreeting()}
          IconBell = {Android_Theme_Light.ICON_BELL}
          IconProfilePic = {Android_Theme_Light.IMAGE_PROFILE_PIC}/>

        <View
          style={GetDashboardScreenStyles(Android_Theme_Light).topBalanceContainer}>
          
          <View
            style={GetDashboardScreenStyles(Android_Theme_Light).topUpButton}>
            
            <Text
              style={GetDashboardScreenStyles(Android_Theme_Light).textTopUP}>
              Top Up
            </Text>
          
          </View>

          <View
            style={GetDashboardScreenStyles(Android_Theme_Light).balanceTextContainer}>
            
            <Text
              style={GetDashboardScreenStyles(Android_Theme_Light).textBalance}>
              Balance
            </Text>

            <View
              style={GetDashboardScreenStyles(Android_Theme_Light).balanceAmountTextContainer}>

              <Text
                style={GetDashboardScreenStyles(Android_Theme_Light).textBalanceRs}>
                Rs.
              </Text>

              <Text
                style={GetDashboardScreenStyles(Android_Theme_Light).textBalanceIntegerAmount}>
                    
                {AmountSeperation(this.state.Balance)[0]}
              </Text>
                
              <Text
                style={GetDashboardScreenStyles(Android_Theme_Light).textBalanceDecimalAmount}>
                
                {AmountSeperation(this.state.Balance)[1]}
              </Text>

            </View>

          </View>  
             
        </View>

        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always"
          behavior="padding"
          //keyboardShouldPersistTaps="handled"
          enableAutomaticScroll={false}
          enableOnAndroid = {true}
          contentContainerStyle={GetDashboardScreenStyles(Android_Theme_Light).keyboardAwareView}>

          <View
            style={GetDashboardScreenStyles(Android_Theme_Light).middleContainer}>
           
            <this.RenderMainButtonList/>

            <Text
              style={GetDashboardScreenStyles(Android_Theme_Light).textEasyAccess}>
              Easy Access
            </Text>

            <View
              style={GetDashboardScreenStyles(Android_Theme_Light).easyAccessContainer}>

              <View
                style={GetDashboardScreenStyles(Android_Theme_Light).easyAccessLeftView}>

                <this.RenderEasyAccessList/>

              </View>

              <View
                style={GetDashboardScreenStyles(Android_Theme_Light).easyAccessRightView}>

                <View 
                  style={GetDashboardScreenStyles(Android_Theme_Light).easyAccessButtonView}>
            
                  <TouchableOpacity
                    style={GetDashboardScreenStyles(Android_Theme_Light).easyAccessMoreButtonView}
                    onPress={() => this.onPressMore()}>

                    <Android_Theme_Light.ICON_MORE/>
              
                  </TouchableOpacity>

                  {/*Empty view*/}
                  <View
                    style={GetDashboardScreenStyles(Android_Theme_Light).easyAccessTextView}>
                  </View>

                </View>

              </View>
              
            </View>

            <Text
              style={GetDashboardScreenStyles(Android_Theme_Light).textRecentTransaction}>
              Recent Transactions
            </Text>

            <this.RenderRecentTransactions/>
              
          </View>

        </KeyboardAwareScrollView>
          
      </SafeAreaView>
    );
  }
}

export default DashboardScreen;
