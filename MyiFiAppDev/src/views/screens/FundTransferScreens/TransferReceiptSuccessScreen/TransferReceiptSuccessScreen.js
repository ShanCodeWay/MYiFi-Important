import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon_backArrows from "../../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../../assets/icons/Icon_home.svg";
import BottomTitleBar from '../../../components/Common/BottomTitleBar'
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { GetTransferReceiptSuccessStyles } from "./TransferReceiptSuccessStyles";
import CommonSmallButton from "../../../components/Common/CommonSmallButton";


class TransferReceiptSuccessScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false, // Set this to true for success, false for error
        };
    }

    componentDidMount() {
        try {

            // setTimeout(() => {
            //     const dataIsValid = true; // Set this based on data validation logic
            //     this.setState({ success: dataIsValid });
            // }, 3000);
        } catch (error) {
            console.log("[TransferReceiptSuccessScreen] - componentDidMount Ex: ", error);
        }
    }

    componentWillUnmount() {
        try {
            clearTimeout(this.timeout);
        } catch (error) {
            console.log("[TransferReceiptSuccessScreen] - componentWillUnmount Ex: ", error);
        }
    }

    handleBack = () => {
        try {
            this.props.navigation.replace(Index.TRS_1);
            console.log("Back button pressed to Navigate to Fund Transfer Screen");
        } catch (error) {
            console.log("[TransRecieptScreen] - Back_Button - Error ", error);
        }
    };

    handleHome = () => {
        try {
            this.props.navigation.replace(Index.SIGNUP_1);
            console.log("Home Button pressed to Navigate to SignupScreen1");
        } catch (error) {
            console.log("[TransRecieptScreen] - Home_Button - Error ", error);
        }
    };

    render() {
        const { success } = this.state;

        return (
            <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
                <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>
                    {success ? (
                        <>
                            <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).outView}>
                                <View>
                                    <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).title}>Receipt</Text>
                                    <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).secondTitle}>Transfer</Text>
                                </View>

                                <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).circleCheckedView}>
                                    < Android_Theme_Light.ICON_CIRCLECHECKED width={90} height={90} />
                                </View>
                                <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).success}>Success</Text>
                                <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).prize}>Rs.4000.00</Text>
                            </View>

                            <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).middleView}>
                                <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).middleViewout}>
                                    <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).middleFirstViewLeft}>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textLarge}></Text>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textSmall}>Recipient</Text>
                                    </View>
                                    <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).middleBoxLeft}>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textLarge}>ATPD Jayamaha</Text>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textSmall}>Nick Name</Text>
                                    </View>
                                    <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).middleBoxLeft}>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textLarge}>Dasuna</Text>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textSmall}>Type</Text>
                                    </View>
                                    <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).middleBoxLeft}>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textLarge}>Transfer/CEFT</Text>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textSmall}>Reference</Text>
                                    </View>
                                    <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).middlelastViewLeft}>
                                    </View>
                                </View>
                                <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).middleViewout}>
                                    <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).middleFirstViewRight}>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textLarge}></Text>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textSmall}>From</Text>
                                    </View>
                                    <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).middleBoxRight}>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textLarge}>MyiFy/Dhamith</Text>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textSmall}>Time</Text>
                                    </View>
                                    <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).middleBoxRight}>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textLarge}></Text>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textSmall}>Date</Text>
                                    </View>
                                    <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).middleBoxRight}>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textLarge}></Text>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textSmall}>Remarks</Text>
                                    </View>
                                    <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).middlelastViewRight}>
                                        <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).textLarge}>trip collection</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).logo}>
                                <Android_Theme_Light.ICON_MI_LOGO_DESCRIPTION_ANDROID width={70} height={70} />
                            </View>

                            <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).commonSmallButton}>
                                <CommonSmallButton
                                    onPress={() => null}
                                    text={"Share"}
                                    width={"35%"}
                                    icon={Android_Theme_Light.ICON_MAIL}
                                />
                            </View>

                            <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).bottomView}>
                                <BottomTitleBar
                                    icon1={Icon_backArrows}
                                    icon2={Icon_home}
                                    onPressIcon1={this.handleBack}
                                    onPressIcon2={this.handleHome}
                                />
                            </View>
                        </>
                    ) : (
                        <View style={GetTransferReceiptSuccessStyles(Android_Theme_Light).errorContainer}>


                            <Android_Theme_Light.ICON_CIRCLE_X width={100} height={100} />



                            <Text style={GetTransferReceiptSuccessStyles(Android_Theme_Light).errorMsg}>Error: Data is incorrect</Text>

                        </View>
                    )}
                </View>
            </SafeAreaView>
        );
    }
}

export default TransferReceiptSuccessScreen;
