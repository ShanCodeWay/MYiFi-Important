
import React, { Component } from 'react';         //Nawodya
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Main_Logo from "../../../../assets/icons/Icon_MI_LOGO_Description.svg";
import Icon_backArrows from "../../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../../assets/icons/Icon_home.svg";
import BottomTitleBar from '../../../components/Common/BottomTitleBar';
import { Android_Theme_Light } from "../../../../styles/Themes";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { GetTransferReceiptScreenStyles } from "./TransferReceiptScreenStyles";
import Index from "../../../../configs/Index";

class TransferReceiptScreen extends Component {
    componentDidMount() {

        try {
    
          this.timeout = setTimeout(() => {
    
            this.props.navigation.navigate(Index.TRS_2);
          }, 1500);
    
        }
        catch(Error){
          console.log('[TransferReceiptScreen] - componentDidMount() EX: ' + Error)
        }
      }
    
      componentWillUnmount() {
    
        try {
    
          clearTimeout(this.timeout);
        
    
        }
        catch(Error){
          console.log('[TransferReceiptScreen] - componentWillUnmount() EX: ' + Error)
        }
      }



    handleBack = () => {
        try {
            this.props.navigation.replace(Index.FUND_1);
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

    render() {

        return (

            <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>

                <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

                    <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).outView}>
                        <View>
                            <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).title}>Almost there</Text>
                            <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).secondTitle}>Transfer</Text>
                        </View>
                        <Text style={GetTransferReceiptScreenStyles(Android_Theme_Light).prize}>Rs.4000.00</Text>

                    </View>


                    <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middleView}>


                        <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middleViewout}>
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
                        </View >
                        <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middleViewout}>
                            <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).middleFirstViewRight}>
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
                            </View>


                        </View >

                    </View>
                    <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).logo}>
                        <Main_Logo width={"30%"} />
                    </View>

                    <View style={GetTransferReceiptScreenStyles(Android_Theme_Light).bottomView}>

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


export default TransferReceiptScreen;
