import React, { Component } from "react"; //Nawodya
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Main_Logo from "../../../../assets/icons/Icon_MI_LOGO_Description.svg";
import Icon_backArrows from "../../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../../assets/icons/Icon_home.svg";
import BottomTitleBar from "../../../components/Common/BottomTitleBar";
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import GetMakeAPaymentViewScreenStyles from "./MakeAPaymentViewScreenStyles";
import Index from "../../../../configs/Index";
import CommonCardButton from "../../../components/Common/CommonCardButton";
import CommonSummeryView from "../../../components/Common/SummeryView/CommonSummeryView";
import CommonButton from "../../../components/Common/MainButton/CommonButton";

// done by: Randima 2024/01/23
class MakeAPaymentViewScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Date: "2023-11-23",
      FdAmount: 300000,
    };
  }
  InvestmentsList = [
    {
      label: "Recipient",
      value: "ATPD Jayamaha",
    },
    {
      label: "From",
      value: "",
    },
    {
      label: "Nick Name",
      value: "",
    },
    {
      label: "Time",
      value: "",
    },
    {
      label: "Type",
      value: "",
    },
    {
      label: "Date",
      value: "",
    },
    {
      label: "Reference",
      value: "",
    },
    {
      label: "Remarks",
      value: "gold loan",
    },
  ];

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
      this.props.navigation.navigate("MakeAPaymentOtpScreen");
      console.log("button pressed to navigate to MakeAPaymentOtpScreen");
    } catch (error) {
      console.log("[MakeAPaymentViewScreen] - Next_Button - Error ", error);
    }
  };

  componentDidMount() {
    try {
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
            <Text
              style={[
                GetFixedDepositsViewScreenStyles(Android_Theme_Light)
                  .TextTotalAmount,
              ]}
            >
              {"Rs." +
                this.state.FdAmount.toString().replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                )}
            </Text>
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
            data={this.InvestmentsList}
            width={"90%"}
            numColumns={2}
            TextColor={Android_Theme_Light.DARK_GRAY_COLOR}
          />
          </View>

          {/* Bottom Container Start */}
          <View
            style={
              GetMakeAPaymentViewScreenStyles(Android_Theme_Light)
                .bottomContainer
            }
          >
            <Android_Theme_Light.ICON_MI_LOGO_DESCRIPTION_ANDROID/>
            <CommonButton
                type={"1"} // 0 or 1
                text={""}
                title={"Next"}
                width={"100%"}
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
