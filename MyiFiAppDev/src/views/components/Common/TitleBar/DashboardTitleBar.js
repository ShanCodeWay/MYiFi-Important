import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Android_Theme_Light } from "../../../../styles/Themes";

import GetDashboardTitleBarStyles from "./DashboardTitleBarStyles"

export default DashboardTitleBar = (props) => {

    try {

        return (

            <View style={GetDashboardTitleBarStyles(Android_Theme_Light).mainContainer}>

                {
                    props.menuIcon ?
                        <View style={GetDashboardTitleBarStyles(Android_Theme_Light).leftIcon}>

                            <TouchableOpacity
                                style={GetDashboardTitleBarStyles(Android_Theme_Light).Menu_button_Style}
                                onPress={props.onPressMenu}>
                            
                                <props.menuIcon fill={Android_Theme_Light.DEEP_BLACK_COLOR}/>
                                
                            </TouchableOpacity>

                        </View> : null
                }
        
                {
                    props.TitleText ?
                        <View style={GetDashboardTitleBarStyles(Android_Theme_Light).middleText}>

                            <Text style={[GetDashboardTitleBarStyles(Android_Theme_Light).titleText,
                                { textAlign: props.TextAlign || "left" }]}>
                            
                                {props.TitleText}
                            </Text>

                            {
                                props.TitleMessage ? 
                                
                                    <Text style={[GetDashboardTitleBarStyles(Android_Theme_Light).messageText,
                                        { textAlign: props.TextAlign || "left" }]}>
                                    
                                        {props.TitleMessage}
                                    
                                    </Text> : null
                            }

                        </View> : null
                }

                {
                    props.IconBell ?
                        <View style={GetDashboardTitleBarStyles(Android_Theme_Light).rightIcon}>

                            <TouchableOpacity
                                style={GetDashboardTitleBarStyles(Android_Theme_Light).button_Style}
                                onPress={props.onPressNotifications}>
                            
                                <props.IconBell fill = {Android_Theme_Light.DEEP_BLACK_COLOR} width = {30} height = {30}/>

                            </TouchableOpacity>

                        </View> : null
                }

                {
                    props.IconProfilePic ?
                        <View style={GetDashboardTitleBarStyles(Android_Theme_Light).rightIcon}>

                            <TouchableOpacity
                                style={GetDashboardTitleBarStyles(Android_Theme_Light).button_Style}
                                onPress={props.onPressProfilePic}>
                            
                            <Image
                                source={props.IconProfilePic}
                                style={{ width: 40, height: 40}} />

                            </TouchableOpacity>

                        </View> : null
                }
       
            </View>


        )

    }
    catch(error){
        console.log("[DashboardTitleBar] - Ex: ", Error);
    }
}