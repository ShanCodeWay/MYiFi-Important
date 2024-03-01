import React, { Component } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import {  GetPayeeRegistrationScreenStyles } from "./PayeeRegistrationScreenStyles";
import { Android_Theme_Light } from "../../../styles/Themes";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon_backArrows from "../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../assets/icons/Icon_home.svg";
import BottomBar from "../../components/Common/BottomBar/BottomBar";
import CommonSmallButton from "../../components/Common/CommonSmallButton";
import MainTitleBar from "../../components/Common/TitleBar/MainTitleBar";
import Index from "../../navigators/NavIndex";

class PayeeRegistrationScreen extends Component {
  //Done by Nawodya
  constructor(props) {
    super(props);

    this.state = {
      state1: "",
    };
  }

  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[PayeeRegistrationScreen] - componentDidMount - Error ", Error);
    }
  }
  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log(
        "[PayeeRegistrationScreen] - componentWillUnmount - Error ",
        Error
      );
    }
  }

  handleBack = () => {
    try {
      this.props.navigation.navigate(Index.SEND_MAIN_SCREEN);
    } catch (Error) {
      console.log(
        "[PayeeRegistrationScreen] - handleBack - Error ",
        Error
      );
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
    } catch (Error) {
        console.log(
          "[PayeeRegistrationScreen] - handleHome - Error ",
          Error
        );
      }
  };

  handleLeftButtonPress = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
    } catch (Error) {
        console.log(
          "[PayeeRegistrationScreen] - handleLeftButtonPress - Error ",
          Error
        );
      }
  };

  handlAddPayee = () => {
    try {
      this.props.navigation.navigate("AddNewPayeeScreen");
    } catch (Error) {
        console.log(
          "[PayeeRegistrationScreen] - handlAddBiller - Error ",
          Error
        );
      }
  };

  PayeeList = [
    {
      id: 1,
      name: "Dasuna",
      accountNumber: "32772790918",
      bankName :"- NSB",
      imageUri: "https://upload.wikimedia.org/wikipedia/en/3/33/National_Savings_Bank_logo.png", 
    },

    {
      id: 2,
      name: "Amma",
      accountNumber: "34767891119",   
      bankName:"- Sampath bank",
      imageUri:
        "https://www.lankabusinessonline.com/wp-content/uploads/2020/09/Sampath-Bank-new-logo.jpg", 
    },
  ];

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <View
            style={GetPayeeRegistrationScreenStyles(Android_Theme_Light).topView}
          >
            <View
              style={
                GetPayeeRegistrationScreenStyles(Android_Theme_Light)
                  .textBillerImage
              }
            >
              <MainTitleBar
        
                TitleText={"Payee Registration"}
                TextAlign={"left"}
                IconRight={null}
                onPressLeft={this.handleLeftButtonPress}
              />
            </View>
            <FlatList
              data={this.PayeeList}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View
                    style={
                        GetPayeeRegistrationScreenStyles(Android_Theme_Light)
                        .mainButtonContainer
                    }
                  >
                    <View
                      style={
                        GetPayeeRegistrationScreenStyles(Android_Theme_Light)
                          .buttonImage
                      }
                    >
                      <Image
                        source={{ uri: item.imageUri }}
                        style={
                            GetPayeeRegistrationScreenStyles(Android_Theme_Light)
                            .itemImage
                        }
                      />
                    </View>
                    <View
                      style={
                        GetPayeeRegistrationScreenStyles(Android_Theme_Light)
                          .buttonText
                      }
                    >
                      <Text
                        style={
                            GetPayeeRegistrationScreenStyles(Android_Theme_Light)
                            .itemText
                        }
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={
                            GetPayeeRegistrationScreenStyles(Android_Theme_Light)
                            .itemText1
                        }
                      >
                        {item.accountNumber} { item.bankName }
                      </Text>
                    </View>
                    <View
                      style={
                        GetPayeeRegistrationScreenStyles(Android_Theme_Light)
                          .buttonIcon
                      }
                    >
                      <Android_Theme_Light.ICON_FORWARD_NAVIGATE />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>

          <View
            style={
                GetPayeeRegistrationScreenStyles(Android_Theme_Light).bottomView
            }
          >
            <View
              style={
                GetPayeeRegistrationScreenStyles(Android_Theme_Light).bottomIcon
              }
            >
              <CommonSmallButton
                onPress={this.handlAddPayee }
                text={"Add Payee"}
                width={"50%"}
                icon={Android_Theme_Light.ICON_PLUS}
              />
            </View>
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

export default PayeeRegistrationScreen;
