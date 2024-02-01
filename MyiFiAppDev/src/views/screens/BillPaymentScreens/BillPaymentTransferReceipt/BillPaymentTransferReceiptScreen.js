
import React, { Component } from 'react';         //Nawodya
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Main_Logo from "../../../../assets/icons/Icon_MI_LOGO_Description.svg";
import Icon_backArrows from "../../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../../assets/icons/Icon_home.svg";
import BottomTitleBar from '../../../components/Common/BottomTitleBar';
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { GetBillPaymentTransferReceiptScreenStyles } from "./BillPaymentTransferReceiptScreenStyles";
import Index from "../../../../configs/Index";
import CommonSummeryView from '../../../components/Common/SummeryView/CommonSummeryView';
import CommonSmallButton from "../../../components/Common/CommonSmallButton";

//Nawodya 1/31/2024
class BillPaymentTransferReceiptScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            SummeryList: [],
        }
    }



    componentDidMount() {
        try {
            //   console.log("this.props.params.data", this.props.route.params.data);
            //   console.log("this.props.params.amountEntered", this.props.route.params.amountEntered)

            this.setState({
                SummeryList: this.props.route.params.data.map((item) => {
                    return {
                        label: item.key,
                        value: item.value,
                    };
                }),

                // FdAmount : this.props.route.params.amountEntered
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

            clearTimeout(this.timeout);


        }
        catch (Error) {
            console.log('[BillPaymentTransferReceiptScreen] - componentWillUnmount() EX: ' + Error)
        }
    }



    handleBack = () => {
        try {
            this.props.navigation.navigate("BillPayment");
            console.log("Back button pressed to Navigate to Fund Transfer Screen");
        }
        catch (error) { console.log("[TransRecieptScreen] - Back_Button - Error ", error); }
    };

    handleHome = () => {
        try {
            this.props.navigation.replace(Index.SIGNUP_1);
            console.log("Home Button pressed to Navigate to SignupScreen1");
        } catch (error) { console.log("[TransRecieptScreen] - Home_Button - Error ", error); }

    };
    handleNext = () => {
        try {
            console.log("handleNext function called");
            this.props.navigation.navigate("BillPaymentOTPScreen", { data: this.state.SummeryList });
        } catch (error) {
            console.log("[TransRecieptScreen] - Home_Button - Error ", error);
        }
    };

    render() {


        return (

            <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>

                <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

                    <View style={GetBillPaymentTransferReceiptScreenStyles(Android_Theme_Light).outView}>
                        <Text style={GetBillPaymentTransferReceiptScreenStyles(Android_Theme_Light).title}>Almost there</Text>
                        <Text style={GetBillPaymentTransferReceiptScreenStyles(Android_Theme_Light).secondTitle}>Transfer</Text>

                    </View>


                    <View style={GetBillPaymentTransferReceiptScreenStyles(Android_Theme_Light).middleView}>


                        {/* <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middleViewout}>
                            <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middleFirstViewLeft}>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textLarge}></Text>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textSmall}>Recipient</Text>


                            </View>
                            <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middleBoxLeft}>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textLarge}>ATPD Jayamaha</Text>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textSmall}>Nick Name</Text>


                            </View>
                            <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middleBoxLeft}>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textLarge}>Dasuna</Text>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textSmall}>Type</Text>
                            </View>
                            <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middleBoxLeft}>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textLarge}>Transfer/CEFT</Text>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textSmall}>Reference</Text>
                            </View>
                            <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middlelastViewLeft}>

                            </View>
                        </View > */}
                        {/* <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middleViewout}> */}

                        {/* <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middleFirstViewRight}>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textLarge}></Text>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textSmall}>From</Text>
                            </View>
                            <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middleBoxRight}>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textLarge}>MyiFy/Dhamith</Text>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textSmall}>Time</Text>
                            </View>
                            <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middleBoxRight}>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textLarge}></Text>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textSmall}>Date</Text>
                            </View>
                            <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middleBoxRight}>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textLarge}></Text>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textSmall}>Remarks</Text>
                            </View>
                            <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middlelastViewRight}>
                                <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).textLarge}>trip collection</Text>
                            </View> */}


                        {/* </View > */}

                        <View
                            style={[ GetBillPaymentTransferReceiptScreenStyles(Android_Theme_Light).prizeContainer]}
                        >
                            <Text style={
                                GetBillPaymentTransferReceiptScreenStyles(Android_Theme_Light)
                                    .amount}  >Rs.</Text>
                            <Text style={
                                GetBillPaymentTransferReceiptScreenStyles(Android_Theme_Light)
                                    .amount}  >4000</Text>
                            <Text style={
                                GetBillPaymentTransferReceiptScreenStyles(Android_Theme_Light)
                                    .textsmall}  >.00</Text>

                        </View>

                        <CommonSummeryView
                            data={this.state.SummeryList}
                            width={"90%"}
                            numColumns={2}
                            TextColor={Android_Theme_Light.DARK_GRAY_COLOR}
                        />

                    </View>
                    <CommonSmallButton
                        onPress={this.handleNext}
                        text={"Next"}
                        width={"40%"}

                    />

                    <View style={GetBillPaymentTransferReceiptScreenStyles(Android_Theme_Light).logo}>

                        <Main_Logo width={70} height={70} />
                    </View>

                    <View style={GetBillPaymentTransferReceiptScreenStyles(Android_Theme_Light).bottomView}>

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


export default BillPaymentTransferReceiptScreen;
