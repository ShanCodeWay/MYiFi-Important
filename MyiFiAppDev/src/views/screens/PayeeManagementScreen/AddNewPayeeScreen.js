import React, { Component } from "react";
import { View, Text } from "react-native";
import { GetCommonStyles } from "../../../styles/CommonStyles";
import { GetAddNewPayeeScreenStyles } from "./AddNewPayeeScreenStyles";
import { Android_Theme_Light } from "../../../styles/Themes";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonInputField from "../../components/Common/TextInput/CommonInputField";
import CommonSpinnerLong from "../../components/Common/CommonSpinnerLong";
import BottomBar from "../../components/Common/BottomBar/BottomBar";
import CommonSmallButton from "../../components/Common/CommonSmallButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MainTitleBar from "../../components/Common/TitleBar/MainTitleBar";
import SelectDropDown from "../../components/Common/Dropdown/SelectDropDown";

import Index from "../../navigators/NavIndex";

// Done by Nawodya 2/12/2024

class AddNewPayeeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectAccountType: "",
            selectAccountTypeName: "",
            selectBank: "",                       // selectedCatogery: "",  
            selectBranch: "",                    // selectedCatogeryID: "",
            AccountTypeID: "",
            selectBranchName: "",
        };
    }

    componentDidMount() {
        try {
        } catch (Error) {
            console.log("[AddNewPayeeScreen] - componentDidMount - Error ", Error);
        }
    };
    componentWillUnmount() {
        try {
        } catch (Error) {
            console.log(
                "[AddNewPayeeScreen] - componentWillUnmount - Error ",
                Error
            );
        }
    };

    handleSave = () => {
        try {
            this.props.navigation.navigate("PayeeRegistrationScreen");
        } catch (error) {
            console.log(
                "[AddNewPayeeScreen] - handleSave - Error ",
                error
            );
        }
    };

    handleBack = () => {
        try {
            this.props.navigation.navigate("PayeeRegistrationScreen");
        } catch (error) {
            console.log(
                "[AddNewPayeeScreen] - handleBack - Error ",
                error
            );
        }
    };

    handleHome = () => {
        try {
            this.props.navigation.navigate("DashboardScreen");
        } catch (error) {
            console.log(
                "[AddNewPayeeScreen] - handleHome - Error ",
                error
            );
        }
    };

    Bank = [
        { label_1: "Hatton National Bank", value: "001" },
        { label_1: "Seylan Bank", value: "002" },
        { label_1: "Bank of Ceylon", value: "003" },
        { label_1: "Peoples Bank", value: "004" },
        { label_1: "Amana Bank", value: "005" },
        { label_1: "Sampath Bank", value: "006" },
    ];
    Branch = [
        { label: "Dehiwala", label_2: "457,685", value: "001" },    
        { label: "Nugegoda", label_2: "457,685", value: "002" },   
        { label: "Moratuwa", label_2: "457,685", value: "003" },           

    ];
    AccountType = [
        { label: "Internal", label_2: "457,685", value: "001" },
        { label: "External", label_2: "546,685.33", value: "002" },
    ];

    render() {
  
        return (
            <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "flex-end",

                    }}
                    keyboardShouldPersistTaps="handled"
                    extraScrollHeight={10}
                    enableOnAndroid={true}
                    enableAutomaticScroll={false}
                    keyboardOpeningTime={300}
                    scrollToPosition={{ x: 0, y: 0, animated: true }}
                    onKeyboardDidShow={(frames) => { }}
                    onKeyboardDidHide={(frames) => { }}
                >
                       <MainTitleBar
                TitleText={"Add New Payee"}
                TextAlign={"left"}
                IconRight={null}
                onPressLeft={this.handleLeftButtonPress}
              />

                    <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
                        <View
                            style={GetAddNewPayeeScreenStyles(Android_Theme_Light).topView}
                        >
                            <View
                                style={
                                    GetAddNewPayeeScreenStyles(Android_Theme_Light)
                                        .nickNameContainer
                                }
                            >

                                <CommonInputField
                                    value={""}
                                    title={"Nick Name"}                                  //Nickname
                                    icon={Android_Theme_Light.ICON_VERIFIED}
                                    inputRef={this.inputRef2}
                                    nextInputRef={this.inputRef1}
                                />
                            </View>

                       

                        <View
                            style={
                                GetAddNewPayeeScreenStyles(Android_Theme_Light)
                                    .pakageContainer
                            }
                        >
                         
                            {/* <CommonSpinnerLong
                                width={"100%"}
                                data={this.AccountType}
                                placeholder={"add some placeholder"}
                                lable_1={this.state.selectAccountType|| "Select Account Type"}              //AccountType
                                lable_2Show={false}
                                value={this.state.selectAccountType || ""}
                                search={false}
                                onRef={(ref) => (this.parentReferenceItem = ref)}
                                inputRef={this.transferFrom}
                                nextInputRef={this.transferTo}
                                currency={"LKR"}
                                parentReferenceItem={(label_1, label_2, value) => {
                                    this.setState({
                                 
                                        AccountTypeID: value,
                                        selectAccountType: label_1,
                                    });
                                }}
                            /> */}
                                      <SelectDropDown
                            width={"96%"}
                            title={"Account Type*"}
                            data={this.AccountType}
                            placeholder={
                              this.state.selectAccountType|| "Select Account Type"
                            }
                            label={  this.state.selectAccountTypeName }
                            value={this.state.selectAccountType || ""}
                            onRef={(ref) =>
                              (this.parentReferenceItemName = ref)
                            }
                            
                            parentReferenceItem={(  value) => {
                                this.setState({
                                    AccountTypeID: value,
                                    selectAccountType: value,
                                    selectAccountTypeName:  this.AccountType.find(
                                        (item) => item.value === value
                                      ).label,
                                });
                            }}
                          />

                            </View>
                            {this.state.AccountTypeID === "002" ? (
                                <View
                                    style={
                                    GetAddNewPayeeScreenStyles(Android_Theme_Light)
                                        .pakageContainer
                                }
                            >
                                <Text
                                    style={
                                        GetAddNewPayeeScreenStyles(Android_Theme_Light).labelText
                                    }
                                >
                                    Bank*
                                </Text>
                                <CommonSpinnerLong
                                    width={"100%"}
                                    data={this.Bank}
                                    placeholder={"add some placeholder"}
                                    lable_1={this.state.selectBank || "Select Bank"}               //Bank
                                    lable_2Show={false}
                                    value={this.state.selectBank || ""}
                                    search={false}
                                    onRef={(ref) => (this.parentReferenceItem = ref)}
                                    inputRef={this.transferFrom}
                                    nextInputRef={this.transferTo}
            
                                    parentReferenceItem={(label_1, label_2, value) => {
                                        this.setState({
                                           // PakageType: label_1,
                                           selectBank: label_1,
                                        });
                                    }}
                                />
                            </View>
                        ) : null}

                        {this.state.AccountTypeID === "002" ? (
                            <View
                                style={
                                    GetAddNewPayeeScreenStyles(Android_Theme_Light)
                                        .pakageContainer
                                }
                            >
                                {/* <Text
                                    style={
                                        GetAddNewPayeeScreenStyles(Android_Theme_Light).labelText
                                    }
                                >
                                    Branch*
                                </Text> */}
                                {/* <CommonSpinnerLong
                                    title={"Branch *"}
                                    width={"100%"}
                                    data={this.Branch}
                                    placeholder={"add some placeholder"}
                                    lable_1={this.state.selectBranch || "Select Branch"}                    //branch                     
                                    lable_2Show={false}
                                    value={this.state.selectBranch || ""}
                                    search={false}
                                    onRef={(ref) => (this.parentReferenceItem = ref)}
                                    inputRef={this.transferFrom}
                                    nextInputRef={this.transferTo}
                                    currency={"LKR"}
                                    parentReferenceItem={(label_1, label_2, value) => {
                                        this.setState({
                                          selectBranch: label_1,
                                        });
                                    }}
                                /> */}
                                <SelectDropDown
                            width={"96%"}
                            title={"Branch*"}
                            data={this.Branch }
                            placeholder={
                              this.state. selectBranch|| "Select Branch "
                            }
                            label={  this.state.selectBranchName }
                            value={this.state. selectBranch|| ""}
                            onRef={(ref) =>
                              (this.parentReferenceItemName = ref)
                            }
                            parentReferenceItem={(value) => {
                                this.setState({
                                    selectBranch: value,
                                    selectBranchName:  this.Branch.find(
                                        (item) => item.value === value
                                      ).label,
                                });
                            }}
                          />

                            </View>
                        ) : null}

                        <View
                            style={
                                GetAddNewPayeeScreenStyles(Android_Theme_Light)
                                    .tellphoneNumberContainer
                            }
                        >
                            <CommonInputField
                                value={""} // Set value to the input field                     //Account name
                                title={"Account Name"}
                                icon={Android_Theme_Light.ICON_VERIFIED} 
                                inputRef={this.inputRef2} //Not mandatory
                                nextInputRef={this.inputRef1} //Not mandatory
                                //readOnly={true}                // Disable user input
                                width={"100%"}
                            />
                        </View>

                            <View
                                style={
                                    GetAddNewPayeeScreenStyles(Android_Theme_Light)
                                        .accountNumberContainer
                                }
                            >
                                <CommonInputField
                                    value={""} // Set value to the input field
                                    title={"Account Number"}                                                      //Account Number
                                    icon={Android_Theme_Light.ICON_VERIFIED} //Not mandatory
                                    inputRef={this.inputRef2} //Not mandatory
                                    nextInputRef={this.inputRef1} //Not mandatory
                                    //readOnly={true}                // Disable user input
                                    width={"100%"}
                                />
                            </View>
                     
                    </View>
                    </View>

                    <View
                        style={
                            GetAddNewPayeeScreenStyles(Android_Theme_Light).bottomView
                        }
                    >
                        <CommonSmallButton
                            onPress={this.handleSave}
                            text={"Save"}
                            width={"40%"}
                        // icon={Icon_Verfied}
                        />
                    </View>

                    <BottomBar
                        BackIcon={Android_Theme_Light.ICON_BACK_ARROWS}
                        HomeIcon={Android_Theme_Light.ICON_HOME}
                        onPressBackButton={this.handleBack}
                        onPressHomeButton={this.handleHome}
                    />
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}
export default AddNewPayeeScreen;
