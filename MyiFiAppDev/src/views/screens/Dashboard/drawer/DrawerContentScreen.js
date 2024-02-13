import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState } from "react";

import GetDrawerContentScreenStyles from "./DrawerContentScreenStyles"
import { Android_Theme_Light } from "../../../../styles/Themes";
import CommonCardButton from "../../../components/Common/CardButton/CommonCardButton";
import Index from "../../../../configs/Index";
import * as RootNavigation from "../../../navigators/RootNavigation"

const DrawerItem_List = [

    {
        id: 1,
        label: "Fund Transfer",
        key:1
    },
    {
        id: 2,
        label: "Bill Payments",
        key:2
    },
    {
        id: 3,
        label: "Billers Management",
        key:3
    },
    {
        id: 4,
        label: "Payee Management",
        key:4
    },
    {
        id: 5,
        label: "QR Payments",
        key:5
    },
    {
        id: 6,
        label: "Fixed Deposits",
        key:6
    },
    {
        id: 7,
        label: "Add Accounts",
        key:7
    },
    {
        id: 8,
        label: "Settings",
        key:8
    },
   
]



const ProcessFlatlist = ( {item} ) => {

    try {
        
        console.log('ProcessFlatlist item--', item)
        
        return (

            <RenderListItem
                label={item.label}
                image={item.id === 1 ? Android_Theme_Light.ICON_EXTERNALOPEN 
                    :  item.id === 2 ? Android_Theme_Light.ICON_PAYMENT 
                    :  item.id === 3 ? Android_Theme_Light.ICON_BILLER_MANAGEMENT
                    :  item.id === 4 ? Android_Theme_Light.ICON_PAYEE_MANAGEMENT
                    :  item.id === 5 ? Android_Theme_Light.ICON_QR
                    :  item.id === 6 ? Android_Theme_Light.ICON_INVEST
                    :  item.id === 7 ? Android_Theme_Light.ICON_ADD_ACCOUNT
                    :  item.id === 8 ? Android_Theme_Light.ICON_SETTINGS
                    : null}
                onPress = {item.id === 1 ? () => RootNavigation.navigate(Index.FUND_1)
                    :  item.id === 2 ? () => RootNavigation.navigate(Index.BILL_1)
                    :  item.id === 3 ? () => RootNavigation.navigate(Index.BILLERS_MANAGEMENT_LIST)
                    :  item.id === 4 ? null
                    :  item.id === 5 ? () => RootNavigation.navigate(Index.QR_SCREEN_1)
                    :  item.id === 6 ? () => RootNavigation.navigate(Index.FD_SCREEN_1)
                    :  item.id === 7 ? null
                    :  item.id === 8 ? () => RootNavigation.navigate(Index.SETTINGS_SCREEN_1)
                    : null}>
                {/*onPress = {item.id === 1 ? Index.FUND_1
                    :  item.id === 2 ? Index.BILL_1
                    :  item.id === 3 ? Index.BILLERS_MANAGEMENT_LIST
                    :  item.id === 4 ? null
                    :  item.id === 5 ? Index.QR_SCREEN_1
                    :  item.id === 6 ? Index.FD_SCREEN_1
                    :  item.id === 7 ? null
                    :  item.id === 8 ? Index.SETTINGS_SCREEN_1
                : null}>*/}

            </RenderListItem>
        )
      
    }
    catch(error){
        console.log("[DrawerContentScreen] -ProcessFlatlist Ex: ", error)
    }

}

const RenderListItem = ( {label,image,onPress }) => {

    try {

        console.log('label--', label)
        console.log('onPress--', onPress)

        //const navigation = useNavigation();
        
        return (
            
            <CommonCardButton
                height={55}
                text={label}
                icon={image}
                iconWidth={25}
                iconHeight={25}
                //onPress={ () => navigation.navigate(onPress) }>
                onPress={ onPress }>

            </CommonCardButton>
        )
       
    }
    catch(Error){

    }

}

const OnPress_Logout = () => {
    try {

        RootNavigation.navigate(Index.LOGIN_SCREEN)

    }
    catch(error){
        console.log("[DrawerContentScreen] -OnPress_Logout Ex: ", error)
    }
}

export function DrawerContentScreen(){
    
    return (

        <View style = {GetDrawerContentScreenStyles(Android_Theme_Light).parentContainer}>

            <View style = {GetDrawerContentScreenStyles(Android_Theme_Light).topContainer}>

                <View style = {GetDrawerContentScreenStyles(Android_Theme_Light).profilepic_View}>

                    <Image
                        source={Android_Theme_Light.IMAGE_PROFILE_PIC}
                        style={{ width: 50, height: 50 }}/>

                </View>

                <View style = {GetDrawerContentScreenStyles(Android_Theme_Light).userdetails_View}>

                <Text
                    style={GetDrawerContentScreenStyles(Android_Theme_Light).textUsername}>
                    Damith Fernando 
                </Text>

                <TouchableOpacity
                    style = {GetDrawerContentScreenStyles(Android_Theme_Light).signout_View}
                    onPress={OnPress_Logout}>

                    <Text
                        style={GetDrawerContentScreenStyles(Android_Theme_Light).textSignout}>
                        Sign Out
                    </Text>
                   
                </TouchableOpacity>

                </View>

            </View>

            <View style = {GetDrawerContentScreenStyles(Android_Theme_Light).flatlistContainer}>

                <FlatList
                    data={DrawerItem_List}
                    renderItem={ProcessFlatlist}
                    keyExtractor={(item) => item.id}/>

            </View>

            <View style = {GetDrawerContentScreenStyles(Android_Theme_Light).footerContainer}>

                <Android_Theme_Light.ICON_MI_LOGO_DESCRIPTION_ANDROID/>

            </View>
    

        </View>
    )
}