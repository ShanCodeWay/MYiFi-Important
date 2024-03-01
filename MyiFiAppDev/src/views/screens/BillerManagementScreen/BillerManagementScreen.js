import React, { Component } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import { GetBillerManagementScreenStyles } from "./BillerManagementScreenStyles";
import { Android_Theme_Light } from "../../../styles/Themes";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomBar from "../../components/Common/BottomBar/BottomBar";
import CommonSmallButton from "../../components/Common/CommonSmallButton";
import MainTitleBar from "../../components/Common/TitleBar/MainTitleBar";

class BillerManagementScreen extends Component {
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
      console.log("[BillerManagementScreen] - componentDidMount - Error ", Error);
    }
  }
  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log(
        "[BillerManagementScreen] - componentWillUnmount - Error ",
        Error
      );
    }
  }

  handleBack = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
    } catch (Error) {
      console.log(
        "[BillerManagementScreen] - handleBack - Error ",
        Error
      );
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
    } catch (Error) {
        console.log(
          "[BillerManagementScreen] - handleHome - Error ",
          Error
        );
      }
  };

  handleLeftButtonPress = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
    } catch (Error) {
        console.log(
          "[BillerManagementScreen] - handleLeftButtonPress - Error ",
          Error
        );
      }
  };

  handlAddBiller = () => {
    try {
      this.props.navigation.navigate("AddNewBillerScreen");
    } catch (Error) {
        console.log(
          "[BillerManagementScreen] - handlAddBiller - Error ",
          Error
        );
      }
  };

  billerList = [
    {
      id: 1,
      contactNumber: "0772790918",
      name: "My Dialog",
      imageUri: "https://logowik.com/content/uploads/images/659_dialog.jpg", // Replace with the actual image URL
    },

    {
      id: 2,
      contactNumber: "0767891119",
      name: "Amma",
      imageUri:
        "https://island.lk/wp-content/uploads/2023/06/SLT-MOBITEL-Enterprise-Logo.png", // Replace with the actual image URL
    },
  ];

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          <View
            style={GetBillerManagementScreenStyles(Android_Theme_Light).topView}
          >
            <View
              style={
                GetBillerManagementScreenStyles(Android_Theme_Light)
                  .textBillerImage
              }
            >
              <MainTitleBar
                TitleText={"Biller Management"}
                TextAlign={"left"}
                IconRight={null}
                onPressLeft={this.handleLeftButtonPress}
              />
            </View>
            <FlatList
              data={this.billerList}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View
                    style={
                      GetBillerManagementScreenStyles(Android_Theme_Light)
                        .mainButtonContainer
                    }
                  >
                    <View
                      style={
                        GetBillerManagementScreenStyles(Android_Theme_Light)
                          .buttonImage
                      }
                    >
                      <Image
                        source={{ uri: item.imageUri }}
                        style={
                          GetBillerManagementScreenStyles(Android_Theme_Light)
                            .itemImage
                        }
                      />
                    </View>
                    <View
                      style={
                        GetBillerManagementScreenStyles(Android_Theme_Light)
                          .buttonText
                      }
                    >
                      <Text
                        style={
                          GetBillerManagementScreenStyles(Android_Theme_Light)
                            .itemText
                        }
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={
                          GetBillerManagementScreenStyles(Android_Theme_Light)
                            .itemText1
                        }
                      >
                        {item.contactNumber}
                      </Text>
                    </View>
                    <View
                      style={
                        GetBillerManagementScreenStyles(Android_Theme_Light)
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
              GetBillerManagementScreenStyles(Android_Theme_Light).bottomView
            }
          >
            <View
              style={
                GetBillerManagementScreenStyles(Android_Theme_Light).bottomIcon
              }
            >
              <CommonSmallButton
                onPress={this.handlAddBiller}
                text={"Add Biller"}
                width={"50%"}
                icon={Android_Theme_Light.ICON_PLUS}
              />
            </View>
        
            <BottomBar
            BackIcon={Android_Theme_Light.ICON_BACK_ARROWS}
            HomeIcon={Android_Theme_Light.ICON_HOME}
            onPressBackButton={this.handleBack}
            onPressHomeButton={this.handleHome}
          />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default BillerManagementScreen;
