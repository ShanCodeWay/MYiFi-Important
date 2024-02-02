import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Switch,
  Touchable, Modal, Image, FlatList 

} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { GetSettingsScreenStyles } from "./SettingsScreenStyles";
import Index from "../../../../configs/Index";
import Colors from "../../../../styles/Colors";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import BottomTitleBar from "../../../components/Common/BottomTitleBar";
import LinearGradient from "react-native-linear-gradient";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  Android_Theme_Light,
  Android_Theme_Dark,
} from "../../../../styles/Themes";
import { GetGreeting } from "../../../../utils/helpers";
import SelectDropDown from "../../../components/Common/Dropdown/SelectDropDown";
import { version } from '../../../../../package.json';
//Done by: Darshana 26/01/2024

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName:  'Dhamitha Bandara',
      UserEMail: '',
      LastLogIn: '01/02/2024',
      
      selectedLanguage            : '',
      fingerSwitchEnabled: false,
      faceSwitchEnabled: false,
      themeSwitchEnabled: false,
      notificationSwitchEnabled: false,
      languageList:[
        { label: "English", value: "English" },
        { label: "සිංහල", value: "සිංහල" },
        { label: "தமிழ்", value: "தமிழ்" },
      ],
    }
   
  }
  

  /*componentDidUpdate(prevProps, prevState) {
      const { isVisibleValidationDialog }         = this.state;
    
      
      if (isVisibleValidationDialog !== prevState.isVisibleValidationDialog) {
        if (isVisibleValidationDialog) {
          StatusBar.setBackgroundColor("#1B1F52D5");
        } else {
          StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
        }
      }
    }*/ // This can use to color change status bar when validation Dialog pop-up

  componentDidMount() {
    try {
      StatusBar.setBackgroundColor(Colors.BLUE_ACCENT);
    } catch (Error) {
      console.log("[SettingsScreen] - componentDidMount - Error ", Error);
    }
  }

  componentWillUnmount() {
    try {
    } catch (Error) {
      console.log("[SettingsScreen] - componentWillUnmount - Error ", Error);
    }
  }

  handleNextButtonPress = () => {
    try {
      this.props.navigation.replace(Index.FUND_1);
      console.log("Next button pressed to navigate to FundScreen1");
    } catch (error) {
      console.log("[SettingsScreen] - Next_Button - Error ", error);
    }
  };

  handleResetPassword = () => {
    try {
      this.props.navigation.replace(Index.RESTPASSWORD);
      console.log("left pressed to navigate signup screen 4");
    } catch (error) {
      console.log("[SettingsScreen] - left_Button - Error ", error);
    }
  };

  handleLeftButtonPress = () => {
    try {
      this.props.navigation.replace(Index.SIGNUP_4);
      console.log("left pressed to navigate signup screen 4");
    } catch (error) {
      console.log("[SettingsScreen] - left_Button - Error ", error);
    }
  };

  handleBack = () => {
    try {
      this.props.navigation.replace("DashboardScreen");
      console.log("left pressed to navigate signup screen 4");
    } catch (error) {
      console.log("[SettingsScreen] - left_Button - Error ", error);
    }
  };

  handleLanguageSelection = (selectedLanguage) => {
    try {
      this.setState({ selectedLanguage });
    } catch (Error) {
      console.log("[WelcomeScreen] - handleLanguageSelection Ex: ", Error);
    }
  };

  fingerToggleSwitch = () => {
    if (this.state.faceSwitchEnabled) {
      this.setState({
        faceSwitchEnabled: false,
      });
    }
    this.setState((prevState) => ({
      fingerSwitchEnabled: !prevState.fingerSwitchEnabled,
    }));
  };
  
  faceToggleSwitch = () => {
    if (this.state.fingerSwitchEnabled) {
      this.setState({
        fingerSwitchEnabled: false,
      });
    }
    this.setState((prevState) => ({
      faceSwitchEnabled: !prevState.faceSwitchEnabled,
    }));
  };

  themeToggleSwitch = () => {
    this.setState((prevState) => ({
      themeSwitchEnabled: !prevState.themeSwitchEnabled,
    }));
  };
  notificationToggleSwitch = () => {
    this.setState((prevState) => ({
      notificationSwitchEnabled: !prevState.notificationSwitchEnabled,
    }));
  };
  
  render() {
    
    return (
      <>
        <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
          {/* <MainTitleBar
              IconLeft    = {null}
              TitleText   = {null}
              TextAlign   = {'left'}
              IconRight   = {null}
              onPressLeft = {this.handleLeftButtonPress }/>

        Tittle Bar invisible

      */}
          
          <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
           {/*} <View style={GetCommonStyles(Android_Theme_Light).titleContainer}>
              <Text
                style={
                  GetCommonStyles(Android_Theme_Light).titleContainertitleText
                }
              >
                Settings
              </Text>
            </View>
              */}

        {/*Titlle View*/}
        <View style={GetSettingsScreenStyles(Android_Theme_Light).titleBarWrapper}>

        <LinearGradient
                      angle={70}
                      useAngle={true}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      colors={["#0044A9", "#4384DA", "#75B4FF"]}
                      style={GetSettingsScreenStyles(Android_Theme_Light)
                          .titleBarView
                      }
       > 

<View style={GetSettingsScreenStyles(Android_Theme_Light).mainTitleTextView}>
      <Text style={GetSettingsScreenStyles(Android_Theme_Light).mainTitleText}>
                Settings
      </Text>
</View>

            <View style={GetSettingsScreenStyles(Android_Theme_Light).titleBarRowView}>
           <View style={GetSettingsScreenStyles(Android_Theme_Light).titleBarRowViewFirstColumn}> 
           <TouchableOpacity 
            onPress={this.handleAccount}>
               <Image
                source={require("../../../../assets/images/Img_avatarPerson.png")}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
           </View>

           <View style={GetSettingsScreenStyles(Android_Theme_Light).titleBarRowViewSecondColumn}>
                      
            
              <Text style={ GetSettingsScreenStyles(Android_Theme_Light).textUserName}>
              {this.state.UserName}
              </Text>
           
            
             <Text style={GetSettingsScreenStyles(Android_Theme_Light).textLastLog} >
                 Last Log In: <Text style={GetSettingsScreenStyles(Android_Theme_Light).textDate}> {this.state.LastLogIn}</Text>
            </Text>
           
             
          </View> 


           <View style={GetSettingsScreenStyles(Android_Theme_Light).titleBarRowViewThirdColumn}> 
           <TouchableOpacity>

              <Android_Theme_Light.ICON_POWER
              width={30} 
              height={30}
              fill={Android_Theme_Light.WHITE_COLOR}/>  
           </TouchableOpacity>
           
           </View>         

            </View>

            
          

          </LinearGradient>
          </View>
         


             
            <KeyboardAwareScrollView
              keyboardShouldPersistTaps="always"
              behavior="padding"
              enableAutomaticScroll={false}
              enableOnAndroid = {true}
              contentContainerStyle={GetCommonStyles(Android_Theme_Light).keyboardAwareView}>


            <View
              style={GetSettingsScreenStyles(Android_Theme_Light).middleView}
            >
              <View
                style={[
                  GetSettingsScreenStyles(Android_Theme_Light)
                    .middleContainerView,
                ]}
              >
                <View style={{ height: 20 }} />



              
 
                <View style={GetSettingsScreenStyles(Android_Theme_Light)
                          .buttonContainerLanguage
                      }
                    >
                     
                <SelectDropDown
              title={"Select Language"}  
              width={"100%"}
              data={this.state.languageList}
              value={this.state.selectedLanguage || this.state.languageList[0].value}
              lable={this.state.selectedLanguage || this.state.languageList[0].label}
              onRef={(ref) => (this.parentReferenceItem = ref)}
              parentReferenceItem={this.handleLanguageSelection}
            />         
           </View>

                        <View style={{ height: 10 }} />


                          {/*Start of Input Filed View */}
                          <View style={GetSettingsScreenStyles(Android_Theme_Light).parentContainer}>
                                      <View style={GetSettingsScreenStyles(Android_Theme_Light).containerTitleView}>
                                          <Text style={GetSettingsScreenStyles(Android_Theme_Light).titleText}>
                                           Finger Print 
                                          </Text>

                                        </View>
                                                
                                                  <View style={GetSettingsScreenStyles(Android_Theme_Light).inputContainer }>
                                                   
                                                    <Text style={[
                                  GetSettingsScreenStyles(Android_Theme_Light).inputFieldText,
                                  { color: this.state.fingerSwitchEnabled ? Android_Theme_Light.DARK_BLUE_COLOR : Android_Theme_Light.DARK_GRAY_COLOR }
                                ]}>
                                  {this.state.fingerSwitchEnabled ? "Enabled" : "Disabled"}
                                </Text>  
                                                    <View style={ GetSettingsScreenStyles(Android_Theme_Light)
                                                          .iconContainer } >
                                                      <Switch
                                                          trackColor={{ false: '#767577', true: '#1B1F52' }}
                                                          thumbColor={this.state.fingerSwitchEnabled ? '#007BC2' : '#f4f3f4'}
                                                          onValueChange={this.fingerToggleSwitch} 
                                                          value={this.state.fingerSwitchEnabled}
                                                        />
                                                    </View>
                          </View>
                        </View>
                {/*End of Input Filed View */}

                <View style={{ height: 10 }} />


{/*Start of Input Filed View */}
<View style={GetSettingsScreenStyles(Android_Theme_Light).parentContainer}>
            <View style={GetSettingsScreenStyles(Android_Theme_Light).containerTitleView}>
                <Text style={GetSettingsScreenStyles(Android_Theme_Light).titleText}>
                Face ID  
                </Text>

              </View>
                      
                        <View style={GetSettingsScreenStyles(Android_Theme_Light).inputContainer }>
                         
                          <Text style={[
        GetSettingsScreenStyles(Android_Theme_Light).inputFieldText,
        { color: this.state.faceSwitchEnabled ? Android_Theme_Light.DARK_BLUE_COLOR : Android_Theme_Light.DARK_GRAY_COLOR }
      ]}>
        {this.state.faceSwitchEnabled ? "Enabled" : "Disabled"}
      </Text>  
                          <View style={ GetSettingsScreenStyles(Android_Theme_Light)
                                .iconContainer } >
                            <Switch
                                trackColor={{ false: '#767577', true: '#1B1F52' }}
                                thumbColor={this.state.faceSwitchEnabled ? '#007BC2' : '#f4f3f4'}
                                onValueChange={this.faceToggleSwitch} 
                                value={this.state.faceSwitchEnabled}
                              />
                          </View>
</View>
</View>
{/*End of Input Filed View */}

<View style={{ height: 10 }} />


{/*Start of Input Filed View */}
<View style={GetSettingsScreenStyles(Android_Theme_Light).parentContainer}>
            <View style={GetSettingsScreenStyles(Android_Theme_Light).containerTitleView}>
                <Text style={GetSettingsScreenStyles(Android_Theme_Light).titleText}>
                 Dark Mode
                </Text>

              </View>
                      
                        <View style={GetSettingsScreenStyles(Android_Theme_Light).inputContainer }>
                         
                          <Text style={[
        GetSettingsScreenStyles(Android_Theme_Light).inputFieldText,
        { color: this.state.themeSwitchEnabled ? Android_Theme_Light.DARK_BLUE_COLOR : Android_Theme_Light.DARK_GRAY_COLOR }
      ]}>
        {this.state.themeSwitchEnabled  ? "Enabled" : "Disabled"}
      </Text>  
                          <View style={ GetSettingsScreenStyles(Android_Theme_Light)
                                .iconContainer } >
                            <Switch
                                trackColor={{ false: '#767577', true: '#1B1F52' }}
                                thumbColor={this.state.themeSwitchEnabled  ? '#007BC2' : '#f4f3f4'}
                                onValueChange={this.themeToggleSwitch} 
                                value={this.state.themeSwitchEnabled }
                              />
                          </View>
</View>
</View>
{/*End of Input Filed View */}
                
                <View style={{ height: 5 }} />


                  {/*Start of Input Filed View */}
                  <View style={GetSettingsScreenStyles(Android_Theme_Light).parentContainer}>
                                      <View style={GetSettingsScreenStyles(Android_Theme_Light).containerTitleView}>
                                         

                                        </View>
                                                
                                                    <TouchableOpacity 
                                                         onPress={this.handleResetPassword}style={GetSettingsScreenStyles(Android_Theme_Light).inputContainer }>
                                                    
                                                    <Text style={GetSettingsScreenStyles(Android_Theme_Light)
                                                          .resetPasswordText}>
                                                      Reset Password
                                                    </Text>
                                                    <View style={ GetSettingsScreenStyles(Android_Theme_Light)
                                                          .iconContainer } >
                                                       
                                                      <Android_Theme_Light.ICON_FORWARD_NAVIGATE/>
                                                        
                                                    </View>
                                                    </TouchableOpacity>


                                                    </View>
                 {/*End of Input Filed View */}
                
                <View style={{ height: 10 }} />

              </View>
            </View>
            <View style= {GetSettingsScreenStyles(Android_Theme_Light).logoView}>
                 
              <Android_Theme_Light.MI_LOGO
              width={90} 
              height={90}
              />
              <View style= {GetSettingsScreenStyles(Android_Theme_Light).logoTextView}>       
              <Text style= {GetSettingsScreenStyles(Android_Theme_Light).logoText}>
                 version:  { version }
              </Text>
              </View> 
            
            </View>          

            </KeyboardAwareScrollView>
          </View>

          <View style={GetSettingsScreenStyles(Android_Theme_Light).bottomView}>
            <BottomTitleBar
              icon1={Android_Theme_Light.ICON_BACK_ARROWS}
              icon2={Android_Theme_Light.ICON_HOME}
              onPressIcon1={this.handleBack}
              onPressIcon2={this.handleHome}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default SettingsScreen;
