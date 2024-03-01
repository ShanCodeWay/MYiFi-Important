// NotificationsCentreScreen.js
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { GetCommonStyles } from '../../../styles/CommonStyles';
import { GetNotificationsCentreScreenStyles } from './NotificationsCentreScreenStyles';
import { Android_Theme_Light } from '../../../styles/Themes';
import BottomBar from '../../components/Common/BottomBar/BottomBar';
import Icon_backArrows from '../../../assets/icons/Icon_backArrows.svg';
import Icon_home from '../../../assets/icons/Icon_home.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
                                                                        // Done by Nawodya 2/6/2024
class NotificationsCentreScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: '0',
          alert: 'Transaction Alert',
          name: 'CR Transaction was performed on your account ******* 1567 with 8,000LKR',
          isRead: false,
        },
        {
          id: '1',
          alert: 'Transaction Alert',
          name: 'CR Transaction was performed on your account ******* 1567 with 8,000LKR',
          isRead: false,
        },
        {
          id: '2',
          alert: 'Transaction Alert',
          name: 'CR Transaction was performed on your account ******* 1567 with 8,000LKR',
          isRead: false,
        },
      ],
    };
  }

  renderItem = ({ item }) => {
    const titleStyle = this.state.data[item.id].isRead
      ? GetNotificationsCentreScreenStyles(Android_Theme_Light).titleGray
      : GetNotificationsCentreScreenStyles(Android_Theme_Light).titleBlack;

    const descriptionStyle = this.state.data[item.id].isRead
      ? GetNotificationsCentreScreenStyles(Android_Theme_Light).descriptionGray
      : GetNotificationsCentreScreenStyles(Android_Theme_Light).descriptionBlack;

    const topLineStyle = this.state.data[item.id].isRead
      ? GetNotificationsCentreScreenStyles(Android_Theme_Light).topLineGray
      : GetNotificationsCentreScreenStyles(Android_Theme_Light).topLineBlack;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState((prevState) => {
            const newData = [...prevState.data];
            newData[item.id].isRead = true;
            return { data: newData };
          });
          this.props.navigation.navigate('NotificationsPage');
        }}
      >
        <Text style={topLineStyle}>{item.topline}</Text>
        <Text style={titleStyle}>{item.alert}</Text>
        <Text style={descriptionStyle}>{item.name}</Text>
       
      </TouchableOpacity>
    );
  };
  handleHome = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
      console.log("left pressed to navigate to MakeAPaymentOtpScreen");
    } catch (error) {
      console.log(
        "[NotificationsCentreScreen] - left_Button - Error ",
        error
      );
    }
  };

  handleBack = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
      console.log("left pressed to navigate to MakeAPaymentOtpScreen");
    } catch (error) {
      console.log(
        "[NotificationsCentreScreen] - left_Button - Error ",
        error
      );
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
      <View style={GetNotificationsCentreScreenStyles(Android_Theme_Light).titleContainer}>
         <Text style={GetNotificationsCentreScreenStyles(Android_Theme_Light).mainTittle}>Notifications Centre</Text>
                    
                </View> 
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <View style={GetNotificationsCentreScreenStyles(Android_Theme_Light).middleView}>
            <FlatList
              data={this.state.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={this.renderItem}
            />
          </View>
          <View style={GetNotificationsCentreScreenStyles(Android_Theme_Light).bottomView}>
            <BottomBar
              BackIcon={Icon_backArrows}
              HomeIcon={Icon_home}
              onPressBackButton={this.handleBack}
              onPressHomeButton={this.handleHome}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default NotificationsCentreScreen;
