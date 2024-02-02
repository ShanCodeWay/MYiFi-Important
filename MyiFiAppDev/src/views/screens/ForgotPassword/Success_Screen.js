import React, { Component } from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import Icon_backArrows from "../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../assets/icons/Icon_home.svg";
import Colors from "../../../styles/Colors";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../styles/Themes";
import BottomTitleBar from "../../components/Common/BottomTitleBar";
import GetSuccess_ScreenStyles from './Success_ScreenStyles'

// done by: Randima 2024/02/01
class Success_Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      successChecked: false,
    };
  }

  componentDidMount() {
    try {
      StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
      console.log("####", this.props.route.params.success);
      this.setState({
        successChecked: this.props.route.params.success,
      });
    } catch (Error) {
      console.log(
        "[Success_Screen] - componentDidMount - Error ",
        Error
      );
    }
  }
  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log(
        "[Success_Screen] - componentWillUnmount - Error ",
        Error
      );
    }
  }


  handleBack = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
      console.log("left pressed to navigate to ....");
    } catch (error) {
      console.log(
        "[Success_Screen] - left_Button - Error ",
        error
      );
    }
  };

  handleHome = () => {
    try {
      this.props.navigation.navigate("DashboardScreen");
      console.log("left pressed to navigate to ....");
    } catch (error) {
      console.log(
        "[Success_Screen] - left_Button - Error ",
        error
      );
    }
  };


  render() {
    return (
      <>
        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
          <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>


            {/* Middle Container */}
            <View
              style={[
                GetSuccess_ScreenStyles(Android_Theme_Light)
                  .middleContainer,
              ]}
            >
             

              <Text
                style={[
                  GetSuccess_ScreenStyles(Android_Theme_Light)
                    .textTitle,
                ]}
              >
                {"Password Change"}
              </Text>

              <Text
                style={[
                  GetSuccess_ScreenStyles(Android_Theme_Light)
                    .subText,
                ]}
              >
                {""}
              </Text>

              {/* ICON_CIRCLECHECKED or ICON_CIRCLE_X */}
              {this.state.successChecked ? (
                <Android_Theme_Light.ICON_CIRCLECHECKED />
              ) : (
                <Android_Theme_Light.ICON_CIRCLE_X width={100} height={100} />
              )}

              {/* Success or Failed Text */}
              <Text
                style={[
                  GetSuccess_ScreenStyles(Android_Theme_Light)
                    .subText2,
                ]}
              >
                {this.state.successChecked ? (
                  "Success"
                ) : (
                  <Text
                    style={
                      GetSuccess_ScreenStyles(Android_Theme_Light)
                        .errorMsg
                    }
                  >
                    {"Failed"}
                  </Text>
                )}
              </Text>
              
            </View>

            {/* Bottom Container*/}
            <View
              style={
                GetSuccess_ScreenStyles(Android_Theme_Light)
                  .bottomContainer
              }
            >
              <Android_Theme_Light.ICON_MI_LOGO_DESCRIPTION_ANDROID />
            </View>

            {/* Bottom Bar */}
            <View
              style={
                GetSuccess_ScreenStyles(Android_Theme_Light)
                  .bottomView
              }
            >
              <BottomTitleBar
                icon1={Icon_backArrows}
                icon2={Icon_home}
                onPressIcon1={this.handleBack}
                onPressIcon2={this.handleHome}
              />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default Success_Screen;
