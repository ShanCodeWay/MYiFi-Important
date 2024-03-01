import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetLeasingLoanMainScreenStyles from "./LeasingLoanMainScreenStyles";
import CommonCardButton from "../../../components/Common/CardButton/CommonCardButton";
import BottomBar from "../../../components/Common/BottomBar/BottomBar";
import { AmountSeperation } from "../../../../utils/helpers";
import Index from "../../../navigators/NavIndex";
import DashboardTitleBar from "../../../components/Common/TitleBar/DashboardTitleBar";

class LeasingLoanMainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VehicleLoanBalance: 185500.35,
      GoldLoanBalance: 350000.5,
    };
  }

  componentDidMount() {

    try {
      
    } 
    catch(error) {
      console.log("[LeasingLoanMainScreen] - componentDidMount Ex: ",error);
    }
  }
  handleBack = () => {
    try {
      this.props.navigation.navigate(Index.DASHBOARD);
    } 
    catch(error) {
      console.log("[LeasingLoanMainScreen] - handleBack() EX: " + Error);
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.navigate(Index.DASHBOARD);
    } 
    catch(error){
      console.log("[LeasingLoanMainScreen] - handleHome() EX: " + Error);
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
            TitleText = {'Leasing/Loans'}
            //TitleMessage = {GetGreeting()}
            //IconBell = {Android_Theme_Light.ICON_BELL}
            //IconProfilePic = {Android_Theme_Light.IMAGE_PROFILE_PIC}
          />

          <TopSummaryBar
            TitleText = {'Total Credit Facilities'}
            AmountText = { this.state.VehicleLoanBalance + this.state.GoldLoanBalance}/>

          <View style={GetLeasingLoanMainScreenStyles(Android_Theme_Light).cardContainer}>

            <CommonCardButton
                text={"Leasing/Vehicle Loans"}
                height={65}
                amount={this.state.VehicleLoanBalance}
                icon={Android_Theme_Light.ICON_LOAN}
                onPress={() =>
                  this.props.navigation.navigate("LeasingLoanScreen")}
              />
              
              <CommonCardButton
                text={"Gold Loans"}
                height={65}
                amount={this.state.GoldLoanBalance}
                icon={Android_Theme_Light.ICON_GOLDLOAN}
                onPress={() =>
                  this.props.navigation.navigate("GoldLoanScreen")}
              />

          </View>

          <View style={GetLeasingLoanMainScreenStyles(Android_Theme_Light).addContainer}>

            <Image
              resizeMode='contain'
              style={{ width: "90%", height: "90%", borderRadius: 0 }}
              source={{
                 uri: "https://i.postimg.cc/5yww9Yr0/Screenshot-20240126-170908-Facebook.jpg"
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

export default LeasingLoanMainScreen;
