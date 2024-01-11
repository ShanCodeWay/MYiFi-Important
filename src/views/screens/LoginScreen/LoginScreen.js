// Splash.js
import React, { Component } from "react";
import { View, Text, Touchable, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CommonInputField from "../../components/Common/CommonInputField";
import Icon_Verfied from "../../../assets/icons/Icon_Verfied.svg";
import Icon_Eye from "../../../assets/icons/Icon_Eye.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import Index from "../../../configs/Index";
import {
  Android_Theme_Light,
  Android_Theme_Dark,
} from "../../../styles/Themes";
import CommonButton from "../../components/Common/CommonButton";
import Colors from "../../../styles/Colors";
import Fonts from "../../../styles/Fonts";
import LoginScreenStyles from "./LoginScreenStyles";
import FingerPrintLogin from "./FingerPrintLogin/FingerPrintLogin";
import FingerPrintLoginStyles from "./FingerPrintLogin/FingerPrintLoginStyles";
//import CommonSpinner from "../../components/Common/CommonSpinner";

//Done by: Dinuranga 23/01/05
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.inputRef1 = React.createRef();
    this.inputRef2 = React.createRef();

    this.state = {
      UserName: "",
      Password: "",
      isEnableFingerPrint: false,
    };
  }

  componentDidMount() {
    try {
    } catch (Error) {
      console.log("[LoginScreen] - componentDidMount - Error ", Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[LoginScreen] - componentWillUnmount - Error ", Error);
    }
  }

  handleUserNameInputChange = (text) => {
    try {
      console.log(text);
    } catch (Error) {
      console.log("[LoginScreen] - handleUserNameInputChange - Error ", Error);
    }
  };
  handlePasswordInputChange = (text) => {
    try {
      console.log(text);
    } catch (Error) {
      console.log("[LoginScreen] - handlePasswordInputChange - Error ", Error);
    }
  };
  onPressSignIn = () => {
    try {
      this.props.navigation.navigate("LoginScreen");
    } catch (Error) {
      console.log("[LoginScreen] - onPressSignIn - Error ", Error);
    }
  };
  onPressSignUp = () => {
    try {
      this.props.navigation.navigate(Index.SIGNUP_1);
    } catch (Error) {
      console.log("[LoginScreen] - onPressSignUp - Error ", Error);
    }
  };

  // test = (value) => {
  //   try {
  //   } catch (Error) {
  //     console.log("[ FDLoan_Request ] - AccountInterest - Error ", Error);
  //   }
  // };

  render() {
    return (
      <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
        <View style={LoginScreenStyles.ParentContainer}>

        <View
          style={GetCommonStyles(Android_Theme_Light).ScreenUpperSectionStyle}
        >
          <Text
            style={[GetCommonStyles(Android_Theme_Light).TextStyleH1Medium]}
          >
            Sign In
          </Text>

          <View style={LoginScreenStyles.ContainerSignInDescription}>
            <Text
              style={[
                GetCommonStyles(Android_Theme_Light).TextStyleCaption12Medium,
                { textAlign: "center" },
              ]}
            >
              {"Welcome back! You can continue to manage your finances"}
            </Text>
          </View>
       
       
       
       
       
        </View>
        {/* UserName */}
        <CommonInputField
          value={""} // Set value to the input field
          title={"User Name"}
          placeholder={"Enter Your Email"} //Hint text
          onInputChange={this.handleUserNameInputChange}
          icon={Icon_Verfied}
          inputRef={this.inputRef1}
          nextInputRef={this.inputRef2}
          width ={'90%'}
        />

        {/* Password */}
        <CommonInputField
          value={""} // Set value to the input field
          title={"Password"}
          placeholder={"Enter Your Password"} //Hint text
          isSecureText={true}
          onInputChange={this.handlePasswordInputChange}
          icon={Icon_Eye}
          inputRef={this.inputRef2}
          width ={'90%'}
        />

        {/* <View style={{ width: "80%" }}>
            <CommonButton
              type={"0"}
              title={"Sign-In"}
              textColor={Colors.BLACK_DEEP}
            />
          </View> */}

        {/* Signin Button  */}
        <CommonButton
          type={"1"}
          title={"Sign-In"}
          backgroundColor={Colors.GREEN_DARK}
          textColor={Colors.BLACK_DEEP}
          onPress={this.onPressSignIn}
          btnWidth={"80%"}
        />

        {/* Signup Button */}
        <CommonButton
          type={"1"}
          title={"Create an account"}
          backgroundColor={Colors.Dark_Blue}
          textColor={Colors.WHITE}
          fontFamily={Fonts.POPPINS_REGULAR}
          onPress={this.onPressSignUp}
          btnWidth={"60%"}
        />

        {/* Fingerprint */}
        <FingerPrintLogin
          isModalVisible={this.state.isEnableFingerPrint}
          onInputChange={this.handleUserNameInputChange}
        />

        {/* <View style={{ justifyContent: "center", padding: 1, height: 50 }}>
            <CommonSpinner
              data={[]}
              //title={"Select Account"}
              placeholder={"Loan Transfer Account"}
              value={'hashashd7788'}
              onRef={(ref) => (this.parentReferenceItem = ref)}
              parentReferenceItem={this.test.bind(this)}
            />
          </View> */}

        {/* Bottom text */}
        <View style={LoginScreenStyles.ContainerBottomDescription}>
          <Text
            style={[
              GetCommonStyles(Android_Theme_Light).TextStyleCaption12Medium,
              { textAlign: "center" },
            ]}
          >
            {"Enable "}
            <Text style={{ fontWeight: "bold" }}>Face Lock</Text>
            {" or "}
            <Text style={{ fontWeight: "bold" }}>Touch Lock</Text>
            {" for quick sign in"}
          </Text>
        </View>


        </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
