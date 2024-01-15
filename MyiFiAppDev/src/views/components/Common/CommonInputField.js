import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, StyleSheet, Image, Text } from "react-native";
import CommonInputFieldStyles from "./CommonInputFieldStyles";
import Colors from "../../../styles/Colors";

//Done by: Dinuranga 24/01/02
const CommonInputField = (props) => {
  const [inputValue, setInputValue] = useState(props.value);
  
 useEffect(() => {
  props.onInputChange(inputValue);
}, [inputValue]);

  

  const handleSubmitEditing = () => {

    try{
      
    if (props.nextInputRef && props.nextInputRef.current) {
      props.nextInputRef.current.focus();
    }
    }     catch (Error) {
      console.log("[CommonInputField] -handleSubmitEditing- Error ", Error);
    }


  };

  const renderTitle = () => { {/* Darshana 11.01.2024*/}

  try{
    const { title } = props;

    return (
      <Text style={CommonInputFieldStyles.textStyleTitle}>
        {title.split("").map((char, index) => (
          <Text
            key={index}
            style={{
              color: char === '*' ? 'red' : Colors.Dark_Blue,
            }}
          >
            {char}
          </Text>
        ))}
      </Text>
    );
          } catch (error) {
            console.log("[CommonInputField] -renderTitle- Error ", Error);
          }
  };


  const formatCurrency = (value) => {{/* Darshana 11.01.2024*/}

  try{ 
    const formattedValue = (value / 100).toFixed(2);
    return `LKR: ${formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }catch(error){
    console.log("[CommonInputField] -formatCurrency- Error ", Error);
  }
  };

  const handleChangeText = (text) => { {/* Darshana 11.01.2024*/}
  try{
    if (props.type === "currency") {
      const numericValue = parseFloat(text.replace(/[^0-9.]/g, "")) * 100;
      setInputValue(formatCurrency(numericValue));
    } else {
      setInputValue(text);
    }
  } catch (error) { 
    console.log("[CommonInputField] -handleChangeText- Error ", Error);
  }
  };


useEffect(() => {
  try{
  if (props.type === 'currency' && !props.value) {
    setInputValue(formatCurrency(0));
  }}
  catch(error){
    console.log("[CommonInputField] -useEffect- Error ", Error);
  }
}, [props.type, props.value]);


  return (

    <>

      <View style={[CommonInputFieldStyles.parentContainer, { width: props.width==null ? '100%'  : props.width }]}>

       {renderTitle()}
        
        <View style={CommonInputFieldStyles.inputContainer}>
  {props.editable !== false ? (  
    <TextInput
    style={CommonInputFieldStyles.input}
    secureTextEntry={props.isSecureText == null ? false : props.isSecureText}
    keyboardType={
      props.type === 'currency'
      ? 'numeric' 
      : props.keyboardType == null
      ? 'default'
      : props.keyboardType == 1
      ? 'numeric'
      : props.keyboardType == 2
      ? 'email-address'
      : 'default'
    }
    placeholder={props.placeholder}
    placeholderTextColor={Colors.GRAY}
    onChangeText={handleChangeText}  /* Darshana 11.01.2024*/
    value={inputValue}
    ref={props.inputRef == null ? null : props.inputRef}
    onSubmitEditing={handleSubmitEditing}
    blurOnSubmit={props.nextInputRef == null ? true : false}
    maxLength={props.maxLength == null ? null : props.maxLength}
    returnKeyType={props.returnKeyType == null ? 'done' : props.returnKeyType}
    editable={props.editable == null ? true : props.editable} 
  />
  ) : (
    <Text style={CommonInputFieldStyles.input}>{inputValue}</Text>
  )}

  {props.icon == null ? null : (
    <props.icon fill={inputValue ? "#00377B" : Colors.GRAY} />
  )}
</View>
      </View>
    </>
  );
};

export default CommonInputField;

//How To Use
{
  /* <CommonInputField
value={""} // Set value to the input field
title={"Password"}
placeholder={"Enter Your Password"} //Hint text
onInputChange={this.handlePasswordInputChange}
icon={Icon_Eye}               //Not mandatory
inputRef={this.inputRef2}      //Not mandatory
editable={false} || {true}                //Not mandatory
nextInputRef={this.inputRef1}   //Not mandatory
/> */
}
