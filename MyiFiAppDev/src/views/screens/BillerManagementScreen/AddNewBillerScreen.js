import React, { Component } from 'react';
import { View, Text, Icon, TouchableOpacity } from 'react-native';     // Done by Nawodya
import { GetCommonStyles } from "../../../styles/CommonStyles";
import { GetAddNewBillerScreenStyles } from "./AddNewBillerScreenStyles";
import { Android_Theme_Light } from "../../../styles/Themes";
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonInputField from '../../components/Common/TextInput/CommonInputField';
import CommonSpinnerLong from '../../components/Common/CommonSpinnerLong';
import BottomTitleBar from '../../components/Common/BottomTitleBar';
import CommonSmallButton from '../../components/Common/CommonSmallButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Index from '../../../configs/Index';
class AddNewBillerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPakageType: '',
            selectedSchedule: '',
            selectedCatogery: '',
            selectedCatogeryID: '',
            selectedServiceProvider: '',
            Provider_ID: '',
        };
    }
    handleBack = () => {
        try {
            this.props.navigation.navigate(Index.BILL_1)

        } catch {

        }
    }

    handleHome = () => {
        try {
            this.props.navigation.navigate("DashboardScreen")

        } catch {

        }
    }
    BillerCategory = [
        { label_1: "Electric Bill", label_2: '457,685', value: '001' },
        { label_1: "Telephone Bill", label_2: '546,685.33', value: '002' },
        { label_1: "Water Bill", label_2: '757,685.45', value: '003' },
        { label_1: "Other Bill", label_2: '757,685.45', value: '004' },

    ]
    ServiceProvider = [
        { label_1: "Lanka Electric Company  ", value: '001', catCode: '001' },
        { label_1: "Lanka Electricity Board", value: '002', catCode: '001' },
        { label_1: "Mobitele", value: '001', catCode: '002' },
        { label_1: "Hutch", value: '002', catCode: '002' },
        { label_1: "LankaBell", value: '003', catCode: '002' },
        { label_1: "National Water Supply and Drainage Board", value: '003', catCode: '003' },
        { label_1: "Dish Tv Lanka", value: '003', catCode: '004'},
        { label_1: "ASK Cable Vision", value: '003', catCode: '004' },
    ]

    PakageType = [
        { label_1: "Pre Paid", label_2: '457,685', value: '001' },
        { label_1: "Post Paid", label_2: '546,685.33', value: '002' },
    ]
    render() {
        //  const { isExpanded }    = this.state;
        return (
            <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>

                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "flex-end",
                        //alignItems: "center",
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
                    <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

                        <View style={GetAddNewBillerScreenStyles(Android_Theme_Light).topView}>

                            <View style={GetAddNewBillerScreenStyles(Android_Theme_Light).nickNameContainer}>
                                <CommonInputField
                                    value={""} // Set value to the input field
                                    title={"Nick Name"}
                                    // placeholder={"Enter Your Password"} //Hint text
                                    // onInputChange={this.handlePasswordInputChange}
                                    icon={Android_Theme_Light.ICON_VERIFIED}             //Not mandatory
                                    inputRef={this.inputRef2}      //Not mandatory
                                    nextInputRef={this.inputRef1}   //Not mandatory
                                    //readOnly={true}                // Disable user input
                                    width={"100%"}
                                />
                            </View>

                            <View style={GetAddNewBillerScreenStyles(Android_Theme_Light).billerCategoryContainer}>

                                <View style={GetAddNewBillerScreenStyles(Android_Theme_Light).billerCategoryContainer2}>
                                <Text style={GetAddNewBillerScreenStyles(Android_Theme_Light).labelText} >Biller Category *</Text>
                                    <CommonSpinnerLong
                                        width={"100%"}
                                        data={this.BillerCategory}
                                        placeholder={"add some placeholder"}
                                        lable_1={this.state.selectedCatogery || " Select Biller Category"}
                                        lable_2={''}
                                        lable_2Show={false}
                                        value={this.state.selectedCatogeryID || ''}
                                        search={false}
                                        onRef={(ref) => (this.parentReferenceItem = ref)}
                                        inputRef={null}
                                        nextInputRef={null}
                                        currency={"LKR"}
                                        parentReferenceItem={(label_1, label_2, value) => {

                                            this.setState({
                                                selectedCatogery: label_1,
                                                selectedCatogeryID: value
                                            });



                                        }}
                                    />
                                </View>
                            </View>

                            <View style={GetAddNewBillerScreenStyles(Android_Theme_Light).serviceProviderContainer}>
                                <Text style={GetAddNewBillerScreenStyles(Android_Theme_Light).labelText} >Service Provider *</Text>
                                <CommonSpinnerLong
                                    width={"100%"}
                                    data={
                                        this.ServiceProvider.filter((item) => item.catCode === this.state.selectedCatogeryID)
                                    }
                                    placeholder={"add some placeholder"}
                                    lable_1={this.state.selectedServiceProvider || "Select Service Provider"}
                                    // lable_2={this.state.selectedAmount || '457,685.54'}
                                    lable_2Show={false}
                                    value={this.state.Provider_ID || ''}
                                    search={false}
                                    onRef={(ref) => (this.parentReferenceItem = ref)}
                                    inputRef={this.transferFrom}
                                    nextInputRef={this.transferTo}
                                    currency={"LKR"}
                                    parentReferenceItem={(label_1, label_2, value) => {
                                        this.setState({
                                            selectedServiceProvider: label_1,
                                            Provider_ID: value,
                                        });
                                    }}
                                />
                            </View>
                            {this.state.selectedCatogeryID === "002" ?
                                <View style={GetAddNewBillerScreenStyles(Android_Theme_Light).pakageContainer}>
                                                                 <Text style={GetAddNewBillerScreenStyles(Android_Theme_Light).labelText} >Package Type *</Text>   
                                    <CommonSpinnerLong
                                        width={"100%"}
                                        data={this.PakageType}
                                        placeholder={"add some placeholder"}
                                        lable_1={this.state.PakageType || "Select Package Type"} T
                                        //lable_2={this.state.selectedAmount || '457,685.54'}
                                        lable_2Show={false}
                                        value={this.state.selected_ID || ''}
                                        search={false}
                                        onRef={(ref) => (this.parentReferenceItem = ref)}
                                        inputRef={this.transferFrom}
                                        nextInputRef={this.transferTo}
                                        currency={"LKR"}
                                        parentReferenceItem={(label_1, label_2, value) => {
                                            this.setState({
                                                PakageType: label_1,
                                                PakageType_ID: value,
                                            });
                                        }}
                                    />
                                </View> : null
                            }
                            {this.state.selectedCatogeryID === "002" ?
                                <View style={GetAddNewBillerScreenStyles(Android_Theme_Light).tellphoneNumberContainer}>
                                    
                                    <CommonInputField
                                        value={""} // Set value to the input field
                                        title={"Tellphone Number"}
                                        //placeholder={"Enter Your Password"} //Hint text
                                        //onInputChange={this.handleInputChange} 
                                        icon={Android_Theme_Light.ICON_VERIFIED}
                                        inputRef={this.inputRef2}      //Not mandatory
                                        nextInputRef={this.inputRef1}   //Not mandatory
                                        //readOnly={true}                // Disable user input
                                        width={"100%"}
                                    />
                                </View> : null}
                            {this.state.selectedCatogeryID != "002" ?
                                <View style={GetAddNewBillerScreenStyles(Android_Theme_Light).accountNumberContainer}>
                                    <CommonInputField
                                        value={""} // Set value to the input field
                                        title={"Account Number"}
                                        //placeholder={"Enter Your Password"} //Hint text
                                        //onInputChange={this.handlePasswordInputChange}
                                        icon={Android_Theme_Light.ICON_VERIFIED}               //Not mandatory
                                        inputRef={this.inputRef2}      //Not mandatory
                                        nextInputRef={this.inputRef1}   //Not mandatory
                                        //readOnly={true}                // Disable user input
                                        width={"100%"}
                                    />
                                </View> : null}

                        </View>

                        <View style={GetAddNewBillerScreenStyles(Android_Theme_Light).bottomView}>
                            <CommonSmallButton
                                onPress={this.handleBack}
                                text={"Save"}
                                width={"40%"}
                            // icon={Icon_Verfied}
                            />
                         
                        </View>


                    </View>
                    <BottomTitleBar
                                icon1={Android_Theme_Light.ICON_BACK_ARROWS}
                                icon2={Android_Theme_Light.ICON_HOME}
                                onPressIcon1={this.handleBack}
                                onPressIcon2={this.handleHome}
                            />
                </KeyboardAwareScrollView>
            </SafeAreaView >
        );
    }
}
export default AddNewBillerScreen;
