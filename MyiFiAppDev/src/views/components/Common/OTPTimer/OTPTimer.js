import React, { useState, useEffect, useRef } from "react";
import {View, Text } from "react-native";
import GetOTPTimerStyles from "./OTPTimerStyles"
import { Android_Theme_Light } from "../../../../styles/Themes";

export default  OTPTimer = (props) => {

    const [valMinutes, setvalMinutes] = useState(1)
    const [valSeconds, setvalSeconds] = useState(0)
    const [valInterval, setvalInterval] = useState(0)

    useEffect(() => {

        try {

            //StartTimer(); // Can't use set interval outside useeffect

            const interval = setInterval(() => {
                
                DecrementClock();
                
            }, 1000)

            setvalInterval(interval)

            return () => clearInterval(interval);

        } 
        catch (error) {
            console.log("[OTPTimer] -useEffect Ex: ", error);
        }
    }, [valSeconds],[valMinutes]);

    const mycount = () => {
        try {

            const interval = setInterval(() => {
                setCount(count + 1);
            }, 1000);
     
            //Clearing the interval
            return () => clearInterval(intervalt);

        }
        catch(error) {
            console.log('mycount-- Ex:',error)
        }
    }

    const StartTimer = () => {
        try {

            const interval = setInterval(() => {
            
                DecrementClock();
                
            }, 1000)

            setvalInterval(interval)

            return () => clearInterval(interval);
        }
        catch(error){
            console.log("[OTPTimer] -StartTimer Ex: ", error);
        }
    }

    const StopTimer = () => {
        try {
            clearInterval(valInterval);
        }
        catch(error){
            console.log("[OTPTimer] -StopTimer Ex: ", error);
        }
    }

    const ResetTimer = () => {
        try {

            valSeconds(0);
            valMinutes(2);
            props.onTimerExpired(valSeconds, valMinutes);
            
            StopTimer();
            StartTimer();

        }
        catch(error){
            console.log("[OTPTimer] -ResetTimer Ex: ", error);
        }
    }

    const DecrementClock = () => {
        try {

            if (valSeconds > 0) {
           
                setvalSeconds(valSeconds - 1)  
            }
      
            if (valSeconds === 0) {
                
                if (valMinutes === 0) {
                    
                    clearInterval(valInterval);
                    props.onTimerExpired(valSeconds, valMinutes);
                } 
                else {

                    setvalMinutes(valMinutes - 1);
                    setvalSeconds(59)
                }
            }
      
            props.onTimerTick(valSeconds, valMinutes);

        }
        catch(error){
            console.log("[OTPTimer] -DecrementClock Ex: ", error);
        }
    }

    return (

        <View style={GetOTPTimerStyles(Android_Theme_Light).parentContainer}>

            <View style={[GetOTPTimerStyles(Android_Theme_Light).ButtonContainer, 
                { width: props.width || "100%"}]}>

                <Text style={GetOTPTimerStyles(Android_Theme_Light).timerText}>
             
                    {
                        valMinutes < 10 ? "0" + valMinutes : valMinutes
                    }
                    :
                    {
                        valSeconds < 10 ? "0" +valSeconds : valSeconds
                    }
                </Text>
        
            </View>
        
        </View>

    )

}