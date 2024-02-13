
import React, { Component } from 'react';         //Nawodya
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Main_Logo from "../../../../assets/icons/Icon_MI_LOGO_Description.svg";
import Icon_backArrows from "../../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../../assets/icons/Icon_home.svg";
import BottomTitleBar from '../../../components/Common/BottomBar/BottomBar';
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { GetBillPaymentTransferReceiptScreenStyles } from "./BillPaymentTransferReceiptScreenStyles";
import Index from "../../../../configs/Index";
import CommonSummeryView from '../../../components/Common/SummeryView/CommonSummeryView';
import CommonSmallButton from "../../../components/Common/CommonSmallButton";
import { AmountSeperation } from '../../../../utils/helpers';

//Nawodya 1/31/2024
class BillPaymentTransferReceiptScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            SummeryList: [],
            amountPass: '',
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

                amountPass: this.props.route.params.amountEntered
            },

            );


        } catch (Error) {
            console.log(
                "[BillPaymentTransferReceiptScreen] - componentDidMount() EX: " + Error
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
        catch (error) { console.log("[BillPaymentTransferReceiptScreen] - Back_Button - Error ", error); }
    };

    handleHome = () => {
        try {
            this.props.navigation.navigate("DashboardScreen");
            console.log("Home Button pressed to Navigate to DashboardScreen");
        } catch (error) { console.log("[BillPaymentTransferReceiptScreen] - Home_Button - Error ", error); }

    };
    handleNext = () => {
        try {
            console.log("handleNext function called");
            this.props.navigation.navigate("BillPaymentOTPScreen", { data: this.state.SummeryList , amountPassOTP : this.state.amountPass });
        } catch (error) {
            console.log("[BillPaymentTransferReceiptScreen] - Home_Button - Error ", error);
        }
    };

    render() {


        return (

            <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>

                <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

                    <View style={GetBillPaymentTransferReceiptScreenStyles(Android_Theme_Light).outView}>
                        <Text style={GetBillPaymentTransferReceiptScreenStyles(Android_Theme_Light).title}>Almost there</Text>
                        <Text style={GetBillPaymentTransferReceiptScreenStyles(Android_Theme_Light).secondTitle}>BillPayment</Text>
               
                    </View>


                    <View style={GetBillPaymentTransferReceiptScreenStyles(Android_Theme_Light).middleView}>


                    <View
                            style={[GetBillPaymentTransferReceiptScreenStyles(Android_Theme_Light).prizeContainer]}
                        >
                            <Text style={[GetCommonStyles(Android_Theme_Light).amountRsText]}>
                                {"Rs "}
                            </Text>
                            <Text
                                style={[GetCommonStyles(Android_Theme_Light).amountIntegerText]}
                            >
                                {AmountSeperation(this.state.amountPass)[0]}
                            </Text>
                            <Text
                                style={[GetCommonStyles(Android_Theme_Light).amountDecimalText]}
                            >
                                {AmountSeperation(this.state.amountPass)[1]}
                            </Text>
                        </View>

                        {/* </View > */}

                        {/* <View
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

                        </View> */}


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
