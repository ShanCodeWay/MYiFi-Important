// ValidationDialogs.js_Nawodya


import React, { useState, useEffect, useRef } from "react";
import { View, Text } from 'react-native';
import GetValidationDialogStyles from './ValidationDialogsStyles'
import CommonSmallButton from '../Common/CommonSmallButton'
import Fonts from "../../../styles/Fonts";
import { Android_Theme_Light } from "../../../styles/Themes";


const ValidationDialogs = (props) => {

        const [isDialogVisible, setDialogVisible] = useState(props.isVisible);

        useEffect(() => {
                setDialogVisible(props.isVisible);
             
        }, [props.isVisible]);


       
  const onPressNo = () => {
        try {
          props.parentReferenceItem(false);
        } catch (Error) {
          console.log("[ValidationDialogs] -onPressNo - Ex:-", Error);
        }
      };
    
      const onPressYes = () => {
        try {
          props.onPressYes(); 
        } catch (Error) {
          console.log("[ValidationDialogs] -onPressYes - Ex:- ", Error);
        }
      };

        return (

                (isDialogVisible 
                ? <View style={GetValidationDialogStyles(Android_Theme_Light).parientView}>
                        <View style={GetValidationDialogStyles(Android_Theme_Light).upperView}>
                                <Text style={GetValidationDialogStyles(Android_Theme_Light).validationDialogstitle}>{props.title}</Text>
                                <Text style={GetValidationDialogStyles(Android_Theme_Light).validationDialogsdiscription}>{props.discription}</Text>
                        </View>
                        <View style={GetValidationDialogStyles(Android_Theme_Light).middleView}>
                                <Text style={GetValidationDialogStyles(Android_Theme_Light).validationDialogsmessage}>{props.message}</Text>
                        </View>
                        <View style={GetValidationDialogStyles(Android_Theme_Light).bottomView}>
                                <CommonSmallButton 
                                        onPress={onPressYes}
                                        text={"Yes"}
                                        width={"40%"}
                                        fontFamily={Android_Theme_Light.POPPINS_BOLD}/>
                                        
                                <CommonSmallButton
                                        onPress={onPressNo}
                                        text={"No"}
                                        width={"40%"}
                                        fontFamily={Android_Theme_Light.POPPINS_BOLD}/>
                        </View>
                </View>
                : null)
        );
};

export default ValidationDialogs;
    
{/* <ValidationDialogs
title={"Verification"}
discription={"Transfer"}
message={"Do You wish\n to proceed? "}
isVisible={this.state.isVisibleValidationDialog}
onRef={(ref) => (this.parentReferenceItem = ref)}
parentReferenceItem={this.OnPressNo.bind(this)} /> */}