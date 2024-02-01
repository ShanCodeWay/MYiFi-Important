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
import CommonSpinnerLong from "../../../components/Common/CommonSpinnerLong";
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

//Done by: Darshana 26/01/2024

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName:  'Dhamitha Bandara',
      UserEMail: 'damithaB@gmail.com',
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

            <View
              style={[
                GetSettingsScreenStyles(Android_Theme_Light).titleBarRowView,
              ]}
            >
          
            <TouchableOpacity 
            onPress={this.handleAccount}>
               <Image
                source={require("../../../../assets/images/Img_avatarPerson.png")}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>

            <View style={GetSettingsScreenStyles(Android_Theme_Light).greetingView}>
              <View style={GetSettingsScreenStyles(Android_Theme_Light).greetingViewFirstRow}>
              <Text style={ GetSettingsScreenStyles(Android_Theme_Light).textUserName}>
              {this.state.UserName}
              </Text>
              <TouchableOpacity>

              <Android_Theme_Light.ICON_LOG_OUT
              width={30} 
              height={30}
              fill={Android_Theme_Light.WHITE_COLOR}/>  
           </TouchableOpacity>
              
              </View>
              

              <View style={
                  GetSettingsScreenStyles(Android_Theme_Light).textUserDetails
                }> 
              <Text
                style={[
                  GetSettingsScreenStyles(Android_Theme_Light).textUserEmail,
                ]}
              >
              {this.state.UserEMail}
              </Text>
              <Text
                style={[
                  GetSettingsScreenStyles(Android_Theme_Light).textLastLog,
                ]}
              >
                
                 Last Seen:<Text style={[
                  GetSettingsScreenStyles(Android_Theme_Light).textDate,
                ]}> {this.state.LastLogIn}</Text>
              </Text>
              </View>
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
                <View style={{ height: 10 }} />

                <View style={GetSettingsScreenStyles(Android_Theme_Light).containerTitleView}>
                  
                  <Text style={GetSettingsScreenStyles(Android_Theme_Light).titleText}>
                                  Select Language
                   </Text>

                </View>  
                <View style={GetSettingsScreenStyles(Android_Theme_Light)
                          .buttonContainerLanguage
                      }
                    >
                     
                <SelectDropDown
              width={"100%"}
              data={this.state.languageList}
              placeholder={""}
              value={this.state.selectedLanguage || this.state.languageList[0].value}
              lable={this.state.selectedLanguage || this.state.languageList[0].label}
              onRef={(ref) => (this.parentReferenceItem = ref)}
              parentReferenceItem={this.handleLanguageSelection}
            />         
           </View>

                        <View style={{ height: 10 }} />

                    <View style={GetSettingsScreenStyles(Android_Theme_Light).containerTitleView}>
                     
                     <Text style={GetSettingsScreenStyles(Android_Theme_Light).titleText}>
                       Security
                     </Text>

                    </View>
                    <View
                      
                      style={GetSettingsScreenStyles(Android_Theme_Light)
                          .buttonContainer
                      }
                    >
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonMain}>   
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonLeft}>




                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonLeftSecond}>
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).notificationTextView}> 
                       <Text style= {GetSettingsScreenStyles(Android_Theme_Light).notificationText}>
                       Fingerprint : 
                       
                      </Text>
                      <Text style={[
                                  GetSettingsScreenStyles(Android_Theme_Light).buttonLeftSecondText,
                                  { color: this.state.fingerSwitchEnabled ? Android_Theme_Light.DARK_BLUE_COLOR : Android_Theme_Light.DARK_GRAY_COLOR }
                                ]}>
                                  {this.state.fingerSwitchEnabled ? "Enabled" : "Disabled"}
                                </Text>     
                      </View>  
                       </View>

                      </View>
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonRight}>
                      <Switch
                          trackColor={{ false: '#767577', true: '#1B1F52' }}
                          thumbColor={this.state.fingerSwitchEnabled ? '#007BC2' : '#f4f3f4'}
                          onValueChange={this.fingerToggleSwitch} 
                          value={this.state.fingerSwitchEnabled}
                        />
                      </View>
                     </View>
                      
                    </View>

                    <View style={{ height: 10 }} />

                     <View style={GetSettingsScreenStyles(Android_Theme_Light)
                          .buttonContainer
                      }
                    >
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonMain}>   
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonLeft}>
                     
                     <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonLeftSecond}>
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).notificationTextView}> 
                       <Text style= {GetSettingsScreenStyles(Android_Theme_Light).notificationText}>
                       Face ID : 
                       
                      </Text>
                      <Text style={[
                                  GetSettingsScreenStyles(Android_Theme_Light).buttonLeftSecondText,
                                  { color: this.state.faceSwitchEnabled ? Android_Theme_Light.DARK_BLUE_COLOR : Android_Theme_Light.DARK_GRAY_COLOR }
                                ]}>
                                  {this.state.faceSwitchEnabled ? "Enabled" : "Disabled"}
                                </Text>      
                      </View>  
                       </View>






                              
                      </View>
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonRight}>
                      <Switch
                          trackColor={{ false: '#767577', true: '#1B1F52' }}
                          thumbColor={this.state.faceSwitchEnabled ? '#007BC2' : '#f4f3f4'}
                          onValueChange={this.faceToggleSwitch} 
                          value={this.state.faceSwitchEnabled}
                        />
                      </View>
                     </View>
                      
                    </View>

                    <View style={{ height: 10 }} />
                    <View style={GetSettingsScreenStyles(Android_Theme_Light).containerTitleView}>
                     
                     <Text style={GetSettingsScreenStyles(Android_Theme_Light).titleText}>
                       Theme
                     </Text>

                    </View>
                    <View
                      style={GetSettingsScreenStyles(Android_Theme_Light)
                          .buttonContainer
                      }
                    >
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonMain}>   
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonLeft}>
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonLeftSecond}>
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).notificationTextView}> 
                       <Text style= {GetSettingsScreenStyles(Android_Theme_Light).notificationText}>
                        Dark Mode: 
                       
                      </Text>
                      <Text style={[
                                  GetSettingsScreenStyles(Android_Theme_Light).buttonLeftSecondText,
                                  { color: this.state.themeSwitchEnabled ? Android_Theme_Light.DARK_BLUE_COLOR : Android_Theme_Light.DARK_GRAY_COLOR }
                                ]}>
                                   {" "}{this.state.themeSwitchEnabled ? "Enabled" : "Disabled"}
                      </Text>        
                      </View>  
                       </View>
                      </View>
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonRight}>
                      <Switch
                          trackColor={{ false: '#767577', true: '#1B1F52' }}
                          thumbColor={this.state.themeSwitchEnabled ? '#007BC2' : '#f4f3f4'}
                          onValueChange={this.themeToggleSwitch} 
                          value={this.state.themeSwitchEnabled}
                        />
                      </View>
                     </View>
                      
                    </View>  



                    <View style={{ height: 10 }} />
                    <View style={GetSettingsScreenStyles(Android_Theme_Light).containerTitleView}>
                     
                     <Text style={GetSettingsScreenStyles(Android_Theme_Light).titleText}>
                       Notification
                     </Text>

                    </View>
                    <View
                      style={GetSettingsScreenStyles(Android_Theme_Light)
                          .buttonContainer
                      }
                    >
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonMain}>   
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonLeft}>
                        
                       <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonLeftSecond}>
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).notificationTextView}> 
                       <Text style= {GetSettingsScreenStyles(Android_Theme_Light).notificationText}>
                        Notification: 
                       
                      </Text>
                      <Text style={[
                                  GetSettingsScreenStyles(Android_Theme_Light).buttonLeftSecondText,
                                  { color: this.state.notificationSwitchEnabled ? Android_Theme_Light.DARK_BLUE_COLOR : Android_Theme_Light.DARK_GRAY_COLOR }
                                ]}>
                                   {" "}{this.state.notificationSwitchEnabled ? "Enabled" : "Disabled"}
                      </Text>        
                      </View>  
                       </View>
                      </View>
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonRight}>
                      <Switch
                          trackColor={{ false: '#767577', true: '#1B1F52' }}
                          thumbColor={this.state.notificationSwitchEnabled ? '#007BC2' : '#f4f3f4'}
                          onValueChange={this.notificationToggleSwitch} 
                          value={this.state.notificationSwitchEnabled}
                        />
                      </View>
                     </View>
                      
                    </View>

                    <View style={{ height: 10 }} />

                    <View
                      style={GetSettingsScreenStyles(Android_Theme_Light)
                          .buttonContainer
                      }
                    >
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonMain}>   
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonLeft}>
                       <Text style= {GetSettingsScreenStyles(Android_Theme_Light).buttonLeftFirstText}>
                            Reset Password
                       </Text>          
                      
                       
                      </View>
                      <View style= {GetSettingsScreenStyles(Android_Theme_Light).buttonRight}>
                        <TouchableOpacity >
                        {/*onPress={handleResetPassword}*/}
                       <Android_Theme_Light.ICON_FORWARD_NAVIGATE/>
                       </TouchableOpacity>
                      </View>
                     </View>
                      
                    </View>  
            <View style= {GetSettingsScreenStyles(Android_Theme_Light).logoView}>
              <View style= {GetSettingsScreenStyles(Android_Theme_Light).logoTextView}>       
              <Text style= {GetSettingsScreenStyles(Android_Theme_Light).logoText}>0.0.0.1V </Text>
              </View>    
              <Android_Theme_Light.MI_LOGO
              width={90} 
              height={90}
              />
            
            </View>          


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
