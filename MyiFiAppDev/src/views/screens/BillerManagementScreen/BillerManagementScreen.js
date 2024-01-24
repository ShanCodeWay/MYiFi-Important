import React, { Component } from 'react';
import { View, Text, FlatList, Image, Icon, TouchableOpacity } from 'react-native';
import { GetCommonStyles } from "../../../styles/CommonStyles";
import { GetBillerManagementScreenStyles } from "./BillerManagementScreenStyles";
import { Android_Theme_Light } from "../../../styles/Themes";
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon_backArrows from "../../../assets/icons/Icon_backArrows.svg";
import Icon_home from "../../../assets/icons/Icon_home.svg";
import BottomTitleBar from '../../components/Common/BottomTitleBar';
import CommonSmallButton from '../../components/Common/CommonSmallButton';
import MainTitleBar from "../../components/Common/TitleBar/MainTitleBar";


class BillerManagementScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            state1: "",
        };
    }

    handleBack = () => {
        try {
            this.props.navigation.navigate("DashboardScreen")


        } catch {

        }
    }

    handleHome = () => {
        try {
            this.props.navigation.navigate("DashboardScreen")


        } catch {

        }
    }

    handleLeftButtonPress = () => {
        try {
            this.props.navigation.navigate("DashboardScreen")


        } catch {

        }
    }

    billerList = [
        {
            id: 1,
            contactNumber: "0772790918",
            name: "My Dialog",
            imageUri: 'https://logowik.com/content/uploads/images/659_dialog.jpg', // Replace with the actual image URL

        },

        {
            id: 2,
            contactNumber: "0767891119",
            name: "Amma",
            imageUri: 'https://island.lk/wp-content/uploads/2023/06/SLT-MOBITEL-Enterprise-Logo.png', // Replace with the actual image URL

        },
    ];


    render() {
        return (
            <SafeAreaView style={GetCommonStyles(Android_Theme_Light).safeAreaView}>
                <View style={GetCommonStyles(Android_Theme_Light).mainContainer}>

                    <View style={GetBillerManagementScreenStyles(Android_Theme_Light).topView}>
                        <View style={GetBillerManagementScreenStyles(Android_Theme_Light).textBillerImage}>
                            {/* <View>
                                <Text style={GetBillerManagementScreenStyles(Android_Theme_Light).textBiller}>Biller Management</Text>
                            </View> */}
                            {/* <View>
                                <Image
                                    source={require('../../../assets/images/Img_avatarPerson.png')}
                                    style={GetBillerManagementScreenStyles(Android_Theme_Light).image}
                                />
                            </View> */}
                            <MainTitleBar
                                IconLeft={Android_Theme_Light.ICON_BACK_ARROW}
                                TitleText={"Biller Management"}
                                TextAlign={'left'}
                                IconRight={null}
                                onPressLeft={this.handleLeftButtonPress} />

                        </View>
                        <FlatList
                            data={this.billerList}
                            renderItem={({ item }) => (
                                <TouchableOpacity>
                                    <View style={GetBillerManagementScreenStyles(Android_Theme_Light).mainButtonContainer}>
                                        <View style={GetBillerManagementScreenStyles(Android_Theme_Light).buttonImage}>
                                            <Image source={{ uri: item.imageUri }} style={GetBillerManagementScreenStyles(Android_Theme_Light).itemImage} />
                                        </View>
                                        <View style={GetBillerManagementScreenStyles(Android_Theme_Light).buttonText}>
                                            <Text style={GetBillerManagementScreenStyles(Android_Theme_Light).itemText}>{item.name}</Text>
                                            <Text style={GetBillerManagementScreenStyles(Android_Theme_Light).itemText1}>{item.contactNumber}</Text>
                                        </View>
                                        <View style={GetBillerManagementScreenStyles(Android_Theme_Light).buttonIcon}>
                                            <Android_Theme_Light.ICON_FORWARD_NAVIGATE />
                                        </View>

                                    </View>

                                </TouchableOpacity>
                            )}
                        />
                    </View>

                    <View style={GetBillerManagementScreenStyles(Android_Theme_Light).bottomView}>
                        <View style={GetBillerManagementScreenStyles(Android_Theme_Light).bottomIcon}>
                            <CommonSmallButton
                                onPress={() => null}
                                text={"Add Biller"}
                                width={"50%"}
                                icon={Android_Theme_Light.ICON_PLUS}
                            />
                        </View>
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

export default BillerManagementScreen;
