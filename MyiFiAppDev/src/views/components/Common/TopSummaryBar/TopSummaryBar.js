import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Android_Theme_Light } from "../../../../styles/Themes";
import GetTopSummaryBarStyle from "./TopSummaryBarStyles"
import { AmountSeperation } from "../../../../utils/helpers";

export default TopSummaryBar = (props) => {

    try {

        return (

            <View style={GetTopSummaryBarStyle(Android_Theme_Light).mainContainer}>
    
                {
                    props.TitleText ?
                        <View style={GetTopSummaryBarStyle(Android_Theme_Light).middleText}>
    
                            <Text style={GetTopSummaryBarStyle(Android_Theme_Light).titleText}>
                                
                                {props.TitleText}
                            
                            </Text>
    
                            {
                                props.AmountText ? 
                                    
                                    <View
                                        style={GetTopSummaryBarStyle(Android_Theme_Light).balanceAmountTextContainer}>
                    
                                        <Text
                                            style={GetTopSummaryBarStyle(Android_Theme_Light).textBalanceRs}>
                                            Rs.
                                        </Text>
                    
                                        <Text
                                            style={GetTopSummaryBarStyle(Android_Theme_Light).textBalanceIntegerAmount}>
                                                
                                            {AmountSeperation(props.AmountText)[0]}
                                        </Text>
                                            
                                        <Text
                                            style={GetTopSummaryBarStyle(Android_Theme_Light).textBalanceDecimalAmount}>
                                        
                                            {AmountSeperation(props.AmountText)[1]}
                                        </Text>
                    
                                    </View> 
                                : null
                            }
    
                        </View> 
                    : null
                }
           
            </View>

        )

    }
    catch(error){
        console.log("[TopSummaryBar] - Ex: ", Error);
    }
}