
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
      console.log("n....")

    }catch{

    }}

    
  handleHome= () =>{
    try {
      this.props.navigation.navigate("DashboardScreen")
      console.log("n....")

    }catch{

    }}


  render() {
    return (

      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

          <View style={GetInvestScreenStyles(Android_Theme_Light).topView}>
            <View style={GetInvestScreenStyles(Android_Theme_Light).textContainer}>
              <View style={GetInvestScreenStyles(Android_Theme_Light).textAndImage}>
                <Text style={GetInvestScreenStyles(Android_Theme_Light).toperText}> INVEST</Text>
                <Image
                  source={require('../../../../assets/images/Img_avatarPerson.png')}
                  style={GetInvestScreenStyles(Android_Theme_Light).image}
                />
              </View>

              <Text style={GetInvestScreenStyles(Android_Theme_Light).middleText}>Total Investments</Text>

              <View style={GetInvestScreenStyles(Android_Theme_Light).prizeTextContainer}>
                <Text style={GetInvestScreenStyles(Android_Theme_Light).bottomTextSmall}>Rs.</Text>
                <Text style={GetInvestScreenStyles(Android_Theme_Light).bottomTextLarge}>1,200,000</Text>
                <Text style={GetInvestScreenStyles(Android_Theme_Light).bottomTextSmall}>.00</Text>
              </View>

            </View>
            <View style={GetInvestScreenStyles(Android_Theme_Light).twoButtonContainer}>
              <CommonCardButton
                onPress={() => null}
                text={"Fixed Deposits"}
                width={"95%"}
                height={"50%"}
                amount={"900,000.00"}
                icon={Android_Theme_Light.ICON_INVEST}
              />
              <CommonCardButton
                onPress={() => null}
                text={"Savings"}
                width={"95%"}
                height={"50%"}
                amount={"300,000.00"}
                icon={Android_Theme_Light.ICON_LOAN}
              />
            </View>
            <View style={GetInvestScreenStyles(Android_Theme_Light).spaceContainer}>
            </View>

          </View>
          <View style={GetInvestScreenStyles(Android_Theme_Light).middleView}>
            <Image
              style={{ width: 250, height: 250 }}
              source={{
                uri: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/international-day-of-banks-design-template-30daffb4ab91d92b63906a7fe5d9df6a_screen.jpg?ts=1637390247"

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
