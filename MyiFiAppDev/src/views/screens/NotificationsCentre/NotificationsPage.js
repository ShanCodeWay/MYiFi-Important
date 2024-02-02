import React, { Component } from 'react';
import { View, Text, Icon, TouchableOpacity } from 'react-native';     // Done by Nawodya
import { GetCommonStyles } from "../../../styles/CommonStyles";
import { GetNotificationsPageStyles } from "./NotificationsPageStyles";
import { Android_Theme_Light } from "../../../styles/Themes";
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonSmallButton from '../../components/Common/CommonSmallButton';
import Icon_backArrows from "../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../assets/icons/Icon_home.svg";
import BottomTitleBar from '../../components/Common/BottomTitleBar';
import MainTitleBar from "../../components/Common/TitleBar/MainTitleBar";

class NotificationsPage extends Component {


    handleBack = () => {
        try {
          this.props.navigation.navigate("NotificationsCentreScreen");
          console.log("left pressed to navigate to MakeAPaymentOtpScreen");
        } catch (error) {
          console.log(
            "[MakeAPaymentSuccessfulScreen] - left_Button - Error ",
            error
          );
        }
      };
    
      handleHome = () => {
        try {
          this.props.navigation.navigate("DashboardScreen");
          console.log("left pressed to navigate to MakeAPaymentOtpScreen");
        } catch (error) {
          console.log(
            "[MakeAPaymentSuccessfulScreen] - left_Button - Error ",
            error
          );
        }
      };
    
    render() {
        return (

            <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
             
                <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
             
               <View style={GetNotificationsPageStyles(Android_Theme_Light).titleContainer}>
               <MainTitleBar TitleText="Notifications Center"/>
                    
                </View> 


                    <View style={GetNotificationsPageStyles(Android_Theme_Light).topLine} />

                    <View style={GetNotificationsPageStyles(Android_Theme_Light).toperContainer}>

                        <View style={GetNotificationsPageStyles(Android_Theme_Light).textContainer}>
                            <Text style={GetNotificationsPageStyles(Android_Theme_Light).title}>Transaction Alert C/R</Text>
                            <Text style={GetNotificationsPageStyles(Android_Theme_Light).discription}>CR Transcation was performed  on your account ******** 1567 with 8,000LKR</Text>
                        </View>

                        <View style={GetNotificationsPageStyles(Android_Theme_Light).buttonContainer}>
                            <CommonSmallButton
                                //onPress={() => null}
                                text={"View Receipt"}
                                width={"50%"}
                           
                            />

                        </View>


                    </View>

                    <View style={GetNotificationsPageStyles(Android_Theme_Light).bottomContainer}>
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

export default NotificationsPage;
