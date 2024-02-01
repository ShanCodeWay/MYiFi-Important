// MakeAPaymentViewScreen.js

import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon_backArrows from "../../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../../assets/icons/Icon_home.svg";
import BottomTitleBar from "../../../components/Common/BottomTitleBar";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetMakeAPaymentViewScreenStyles from "./MakeAPaymentViewScreenStyles";
import CommonSummeryView from "../../../components/Common/SummeryView/CommonSummeryView";
import CommonButton from "../../../components/Common/MainButton/CommonButton";
import { AmountSeperation } from "../../../../utils/helpers";

// done by: Randima 2024/01/23
class MakeAPaymentViewScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FdAmount: "",
      FDAccountNumber: "",
      FDPayNowArray: [],
    };
  }
  

  SingleSummeryView = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
      <View
        style={{
          width: "50%",
          height: 80,
          borderRightColor: isEven ? Android_Theme_Light.DARK_GRAY_COLOR : null,
          borderRightWidth: isEven ? 1 : 0,
        }}
      >
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text
            style={{
              paddingLeft: 10,
              fontSize: Android_Theme_Light.FONT_SIZE_SMALL,
              fontFamily: Android_Theme_Light.POPPINS_REGULAR,
              color: Android_Theme_Light.DARK_GRAY_COLOR,
            }}
          >
            {item.label}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            height: 1,
            width: "100%",
            backgroundColor: Android_Theme_Light.DARK_GRAY_COLOR,
          }}
        />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              paddingLeft: 10,
              fontSize: Android_Theme_Light.FONT_SIZE_LARGE,
              fontFamily: Android_Theme_Light.POPPINS_MEDIUM,
              color: Android_Theme_Light.DEEP_BLACK_COLOR,
            }}
          >
            {item.value}
          </Text>
        </View>
      </View>
    );
  };

  handleNextButtonPress = () => {
    try {
      this.props.navigation.navigate("MakeAPaymentOtpScreen",{amountPayed: this.state.FdAmount});
      console.log("button pressed to navigate to MakeAPaymentOtpScreen");
    } catch (error) {
      console.log("[MakeAPaymentViewScreen] - Next_Button - Error ", error);
    }
  };

  componentDidMount() {
    try {
      console.log("this.props.params.data", this.props.route.params.data);
      console.log("this.props.params.amountEntered", this.props.route.params.amountEntered)
      
      this.setState({
        FDPayNowArray: this.props.route.params.data.map((item) => {
          return {
            label: item.key,
            value: item.value,
          };
        }),
        
        FdAmount : this.props.route.params.amountEntered
      },
      
      );


    } catch (Error) {
      console.log(
        "[MakeAPaymentViewScreen] - componentDidMount() EX: " + Error
      );
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log(
        "[MakeAPaymentViewScreen] - componentWillUnmount() EX: " + Error
      );
    }
  }

  handleBack = () => {
    try {
      this.props.navigation.replace("MakeAPayementScreen");
    } catch (error) {
      console.log("[MakeAPaymentViewScreen] - handleBack - Error ", error);
    }
  };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
          

          {/* Upper Container */}
          <View
            style={[
              GetMakeAPaymentViewScreenStyles(Android_Theme_Light)
                .upperContainer,
            ]}
          >
            <View style={{ height: 30 }}></View>

            <Text
              style={[
                GetMakeAPaymentViewScreenStyles(Android_Theme_Light).textTitle,
              ]}
            >
              {"Almost there"}
            </Text>

            <Text
              style={[
                GetMakeAPaymentViewScreenStyles(Android_Theme_Light).subText,
              ]}
            >
              {"Make a payment"}
            </Text>
            <View style={{ height: 30 }}></View>

            <View
              style={[GetCommonStyles(Android_Theme_Light).amountContainer]}
            >
              <Text style={[GetCommonStyles(Android_Theme_Light).amountRsText]}>
                {"Rs "}
              </Text>
              <Text
                style={[GetCommonStyles(Android_Theme_Light).amountIntegerText]}
              >
                {AmountSeperation(this.state.FdAmount)[0]}
              </Text>
              <Text
                style={[GetCommonStyles(Android_Theme_Light).amountDecimalText]}
              >
                {AmountSeperation(this.state.FdAmount)[1]}
              </Text>
            </View>
          </View>

          <View style={{ height: 10 }}></View>


          {/* Middle Container */}
          <View
            style={
              GetMakeAPaymentViewScreenStyles(Android_Theme_Light)
                .middleContainer
            }
          >
            <CommonSummeryView
              data={this.state.FDPayNowArray}
              width={"90%"}
              numColumns={2}
              TextColor={Android_Theme_Light.DARK_GRAY_COLOR}
            />
          </View>


          {/* Bottom Container */}
          <View
            style={
              GetMakeAPaymentViewScreenStyles(Android_Theme_Light)
                .bottomContainer
            }
          >
            {/* MI_LOGO */}
            <Android_Theme_Light.ICON_MI_LOGO_DESCRIPTION_ANDROID />
            <CommonButton
              type={"1"}
              text={""}
              title={"Next"}
              width={"50%"}
              backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
              onPress={this.handleNextButtonPress}
            />
          </View>


          {/* Bottom Bar */}
          <View
            style={
              GetMakeAPaymentViewScreenStyles(Android_Theme_Light).bottomView
            }
          >

            {/* Bottom Title Bar */}
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

export default MakeAPaymentViewScreen;
