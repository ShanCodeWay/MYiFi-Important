import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetSendMainScreenStyles from "./SendMainScreenStyles";
import CommonCardButton from "../../../components/Common/CardButton/CommonCardButton";
import BottomBar from "../../../components/Common/BottomBar/BottomBar";
import { AmountSeperation } from "../../../../utils/helpers";
import DashboardTitleBar from "../../../components/Common/TitleBar/DashboardTitleBar";
import TopSummaryBar from "../../../components/Common/TopSummaryBar/TopSummaryBar";
import Index from "../../../navigators/NavIndex";

class SendMainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
     TotalAccountBalance: 990000,
    };
  }

  componentDidMount() {
    try {
      
    } 
    catch(error) {
      console.log("[SendMainScreen] - componentDidMount Ex: ",error);
    }
  }

  handleBack = () => {
    try {
      this.props.navigation.navigate(Index.DASHBOARD);
    } 
    catch(error) {
      console.log("[SendMainScreen] - handleBack() EX: ", error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.navigate(Index.DASHBOARD);
    } 
    catch(error) {
      console.log("[SendMainScreen] - handleHome() EX: " + Error);
    }
  };

  render() {
    
    return (
      
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>

        <View style = {GetCommonStyles(Android_Theme_Light).mainParentContainer}>

          <DashboardTitleBar
            //menuIcon = {Android_Theme_Light.ICON_DRAWERMENU }
            //onPressMenu = {()=>this.onPressMenu() }
            // = {() => this.onPressNotifications()}
            //onPressProfilePic = {() => this.onPressProfilePic()}
            TitleText = {'Send'}
            //TitleMessage = {GetGreeting()}
            //IconBell = {Android_Theme_Light.ICON_BELL}
            //IconProfilePic = {Android_Theme_Light.IMAGE_PROFILE_PIC}
          />

          <TopSummaryBar
            TitleText = {'Total Balance'}
            AmountText = {this.state.TotalAccountBalance}/>

          <View style={GetSendMainScreenStyles(Android_Theme_Light).cardContainer}>

            <CommonCardButton
              text={"Fund Transfer"}
              height={65}
              amount={this.state.FdBalance}
              icon={Android_Theme_Light.ICON_EXTERNALOPEN}
              onPress={() =>
                this.props.navigation.navigate(Index.FUND_1)}
            />
            
            <CommonCardButton
              text={"Payee Management"}
              height={65}
              amount={this.state.SavingsBalance}
              icon={Android_Theme_Light.ICON_PAYEE_MANAGEMENT}
              onPress={() =>
                this.props.navigation.navigate(Index.PAYEE_MANAGEMENT_SCREEN)}
            />
            
          </View>

          <View style={GetSendMainScreenStyles(Android_Theme_Light).addContainer}>

          <Image
                resizeMode='contain'
                style={{ width: "90%", height: "90%", borderRadius: 0 }}
                source={{
                  uri: "https://i.ibb.co/D4tH48L/345850852-1359266144933079-5420388226038156377-n.jpg"
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

export default SendMainScreen;
