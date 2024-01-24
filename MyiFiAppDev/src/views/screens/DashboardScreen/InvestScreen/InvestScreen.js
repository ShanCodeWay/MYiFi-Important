
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { GetInvestScreenStyles } from "./InvestScreenStyles";
import CommonCardButton from "../../../components/Common/CommonCardButton";
import Icon_backArrows from "../../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../../assets/icons/Icon_home.svg";
import BottomTitleBar from '../../../components/Common/BottomTitleBar';



class InvestScreen extends Component {
  
  handleBack= () =>{
    try {
      this.props.navigation.navigate("DashboardScreen")
   

    }catch{

    }}

    
  handleHome= () =>{
    try {
      this.props.navigation.navigate("DashboardScreen")
                                      

    }catch{

    }}


  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <View style={GetInvestScreenStyles(Android_Theme_Light).topView}>
            <View
              style={GetInvestScreenStyles(Android_Theme_Light).textContainer}
            >
              <View
                style={GetInvestScreenStyles(Android_Theme_Light).textAndImage}
              >
                <Text
                  style={GetInvestScreenStyles(Android_Theme_Light).toperText}
                >
                  {"Invest"}
                </Text>
                <Image
                  source={require("../../../../assets/images/Img_avatarPerson.png")}
                  style={GetInvestScreenStyles(Android_Theme_Light).image}
                />
              </View>

              <Text
                style={GetInvestScreenStyles(Android_Theme_Light).middleText}
              >
                Total Investments
              </Text>

              <View
                style={GetCommonStyles(Android_Theme_Light).amountContainer}
              >
                <Text style={GetCommonStyles(Android_Theme_Light).amountRsText}>
                  Rs.
                </Text>
                <Text
                  style={GetCommonStyles(Android_Theme_Light).amountIntegerText}
                >
                  1,200,000
                </Text>
                <Text
                  style={GetCommonStyles(Android_Theme_Light).amountDecimalText}
                >
                  .00
                </Text>
              </View>
            </View>
            <View
              style={
                GetInvestScreenStyles(Android_Theme_Light).twoButtonContainer
              }
            >
              <CommonCardButton
                text={"Fixed Deposits"}
                height={90}
                amount={"900,000.00"}
                icon={Android_Theme_Light.ICON_INVEST}
                onPress={() =>
                  this.props.navigation.navigate("FixedDepositsScreen")
                }
              />
              <CommonCardButton
                onPress={() => null}
                text={"Savings"}
                height={90}
                amount={"300,000.00"}
                icon={Android_Theme_Light.ICON_LOAN}
              />
            </View>
            <View
              style={GetInvestScreenStyles(Android_Theme_Light).spaceContainer}
            ></View>
          </View>

          <View style={GetInvestScreenStyles(Android_Theme_Light).middleView}>
            <Image
              style={{ width: 300, height: 350, borderRadius: 10 }}
              source={{
                uri: "https://i.postimg.cc/sgbVwBMM/417154212-694920426120079-3500684663587443534-n.jpg",
              }}
            />
          </View>
          <View style={GetInvestScreenStyles(Android_Theme_Light).bottomView}>
            <BottomTitleBar
              icon1={Icon_backArrows}
              icon2={Icon_home}
              onPressIcon1={this.handleBack}
              onPressIcon2={this.handleHome}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}


export default InvestScreen;
