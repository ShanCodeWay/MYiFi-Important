// ValidationDialogs.js_Nawodya


import React, { useState, useEffect, useRef } from "react";
import { View, Text } from 'react-native';
import ValidationDialogsStyles from './ValidationDialogsStyles';
import CommonSmallButton from '../Common/CommonSmallButton'
import Fonts from "../../../styles/Fonts";


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
                ? <View style={ValidationDialogsStyles.parientView}>
                        <View style={ValidationDialogsStyles.upperView}>
                                <Text style={ValidationDialogsStyles.validationDialogstitle}>{props.title}</Text>
                                <Text style={ValidationDialogsStyles.validationDialogsdiscription}>{props.discription}</Text>
                        </View>
                        <View style={ValidationDialogsStyles.middleView}>
                                <Text style={ValidationDialogsStyles.validationDialogsmessage}>{props.message}</Text>
                        </View>
                        <View style={ValidationDialogsStyles.bottomView}>
                                <CommonSmallButton 
                                        onPress={onPressYes}
                                        text={"Yes"}
                                        width={"40%"}
                                        fontFamily={Fonts.POPPINS_BOLD}/>
                                        
                                <CommonSmallButton
                                        onPress={onPressNo}
                                        text={"No"}
                                        width={"40%"}
                                        fontFamily={Fonts.POPPINS_BOLD}/>
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