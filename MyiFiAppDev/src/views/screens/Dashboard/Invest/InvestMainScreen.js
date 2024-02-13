import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetInvestMainScreenStyles from "./InvestMainScreenStyles";
import CommonCardButton from "../../../components/Common/CardButton/CommonCardButton";
import BottomBar from "../../../components/Common/BottomBar/BottomBar";
import { AmountSeperation } from "../../../../utils/helpers";
import DashboardTitleBar from "../../../components/Common/TitleBar/DashboardTitleBar";
import Index from "../../../../configs/Index";

class InvestMainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FdBalance: 900500.35,
      SavingsBalance: 350000.5,
      TotalInvestment: 0,
    };
  }

  componentDidMount() {
    try {
      this.setState({
        TotalInvestment: this.state.FdBalance + this.state.SavingsBalance,
      });
    } 
    catch(error) {
      console.log("[InvestMainScreen] - componentDidMount Ex: ",error);
    }
  }

  handleBack = () => {
    try {
      this.props.navigation.navigate(Index.DASHBOARD);
    } 
    catch(error) {
      console.log("[InvestMainScreen] - handleBack() EX: ", error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.navigate(Index.DASHBOARD);
    } 
    catch(error) {
      console.log("[InvestMainScreen] - handleHome() EX: " + Error);
    }
  };

  handleSavingsButtonPress = () => {
    try {
      this.props.navigation.navigate("SavingsScreen");
      console.log("button pressed to navigate to Savings_Screen");
    } 
    catch(error) {
      console.log("[InvestMainScreen] - Savings_Button - Ex: ", error);
    }
  };

  render() {
    
    return (
      
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>

        <DashboardTitleBar
          //menuIcon = {Android_Theme_Light.ICON_DRAWERMENU }
          //onPressMenu = {()=>this.onPressMenu() }
          // = {() => this.onPressNotifications()}
          //onPressProfilePic = {() => this.onPressProfilePic()}
          TitleText = {'Invest'}
          //TitleMessage = {GetGreeting()}
          //IconBell = {Android_Theme_Light.ICON_BELL}
          //IconProfilePic = {Android_Theme_Light.IMAGE_PROFILE_PIC}
        />

        <View style = {GetCommonStyles(Android_Theme_Light).mainParentContainer}>

          <View style={GetInvestMainScreenStyles(Android_Theme_Light).topTotalInvestContainer}>

            <Text
              style={GetInvestMainScreenStyles(Android_Theme_Light).totInvestText}>
                
              Total Investments

            </Text>

            <View
              style={GetCommonStyles(Android_Theme_Light).balanceAmountTextContainer}>

              <Text
                style={GetCommonStyles(Android_Theme_Light).textBalanceRs}>
                Rs.
              </Text>

              <Text
                style={GetCommonStyles(Android_Theme_Light).textBalanceIntegerAmount}>
                      
                {AmountSeperation(this.state.TotalInvestment)[0]}
              </Text>
                  
              <Text
                style={GetCommonStyles(Android_Theme_Light).textBalanceDecimalAmount}>
                  
                {AmountSeperation(this.state.TotalInvestment)[1]}
              </Text>

            </View>

          </View>

          <View style={GetInvestMainScreenStyles(Android_Theme_Light).cardContainer}>

            <CommonCardButton
              text={"Fixed Deposits"}
              height={65}
              amount={this.state.FdBalance}
              icon={Android_Theme_Light.ICON_INVEST}
              onPress={() =>
                this.props.navigation.navigate("FixedDepositsScreen")}
            />
            
            <CommonCardButton
              text={"Savings"}
              height={65}
              amount={this.state.SavingsBalance}
              icon={Android_Theme_Light.ICON_LOAN}
              onPress ={this.handleSavingsButtonPress}
            />
            
          </View>

          <View style={GetInvestMainScreenStyles(Android_Theme_Light).addContainer}>

          <Image
                resizeMode='contain'
                style={{ width: "100%", height: "100%", borderRadius: 0 }}
                source={{
                  //uri: "https://i.postimg.cc/sgbVwBMM/417154212-694920426120079-3500684663587443534-n.jpg",
                  //uri: "https://i.ibb.co/vcY5LrH/395766311-653960710216051-4808326345482705522-n.jpg",
                  uri: "https://i.ibb.co/FbdjP7c/385813432-641432961468826-3213421074883791327-n.jpg"
                }}
              />
            
          </View>

          <BottomBar
            BackIcon={Android_Theme_Light.ICON_BACK_ARROWS}
            HomeIcon={Android_Theme_Light.ICON_HOME}
            onPressBackButton={this.handleBack}
            onPressHomeButton={this.handleHome}
          />

        </View>
      </SafeAreaView>
    );
  }
}

export default InvestMainScreen;
