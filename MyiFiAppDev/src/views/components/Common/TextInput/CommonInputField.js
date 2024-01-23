import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, StyleSheet, Image, Text } from "react-native";
import GetCommonInputFieldStyle from "./CommonInputFieldStyles";
import Colors from "../../../../styles/Colors";
import { Android_Theme_Light } from "../../../../styles/Themes";

const CommonInputField = (props) => {
  const [inputValue, setInputValue] = useState(props.value);

  useEffect(() => {
    try {
      props.onInputChange(inputValue);
    } catch (error) {
      console.log("[CommonInputField] -useEffect- Error ", error);
    }
  }, [inputValue]);

  useEffect(() => {
    try {
      if (props.type === 'currency' && !props.value) {
        setInputValue(FormatCurrency(0));
      }
    } catch (error) {
      console.log("[CommonInputField] -useEffect- Error ", error);
    }
  }, [props.type, props.value]);

  const OnHandle_SubmitEditing = () => {
    try {
      if (props.nextInputRef && props.nextInputRef.current) {
        props.nextInputRef.current.focus();
      }
    } catch (error) {
      console.log("[CommonInputField] -OnHandle_SubmitEditing Ex: ", error);
    }
  };

  const SetLabel = () => {
    try {
      const { title } = props;

      return (
        <Text style={GetCommonInputFieldStyle(Android_Theme_Light).labelText}>
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
      console.log("[CommonInputField] -SetLabel- Error ", error);
    }
  };

  const FormatCurrency = (value) => {
    try {
      const formattedValue = (value / 100).toFixed(2);
      return `LKR: ${formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    } catch (error) {
      console.log("[CommonInputField] -FormatCurrency- Error ", error);
    }
  };

  const OnChangeText = (text) => {
    try {
      if (props.type === "currency") {
        const numericValue = parseFloat(text.replace(/[^0-9.]/g, "")) * 100;
        setInputValue(FormatCurrency(numericValue));
      } else {
        setInputValue(text);
      }
    } catch (error) {
      console.log("[CommonInputField] -OnChangeText- Error ", error);
    }
  };

  return (
    <>
      <View style={[GetCommonInputFieldStyle(Android_Theme_Light).parentContainer, { width: props.width == null ? '100%' : props.width }]}>
        {SetLabel()}
        <View style={GetCommonInputFieldStyle(Android_Theme_Light).inputContainer}>
          <TextInput
            style={GetCommonInputFieldStyle(Android_Theme_Light).inputFieldText}
            secureTextEntry={props.isSecureText == null ? false : props.isSecureText}
            keyboardType={props.type === 'currency' ? 'numeric' : props.keyboardType == null ? 'default' : props.keyboardType == 1 ? 'numeric' : props.keyboardType == 2 ? 'email-address' : 'default'}
            placeholder={props.placeholder}
            placeholderTextColor={Colors.GRAY}
            onChangeText={OnChangeText}
            value={inputValue}
            ref={props.inputRef == null ? null : props.inputRef}
            onSubmitEditing={OnHandle_SubmitEditing}
            blurOnSubmit={props.nextInputRef == null ? true : false}
            maxLength={props.maxLength == null ? null : props.maxLength}
            returnKeyType={props.returnKeyType == null ? 'done' : props.returnKeyType}
            editable={props.readOnly ? false : props.editable == null ? true : props.editable} // Use the readOnly prop here
          />
          {props.icon == null ? null : (
            <View style={GetCommonInputFieldStyle(Android_Theme_Light).iconContainer}>
              <props.icon fill={inputValue ? "#00377B" : Android_Theme_Light.GRAY_COLOR} />
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default CommonInputField;

/********How To Use*******/
/* 
<CommonInputField
  value={""} // Set value to the input field
  title={"Password"}
  placeholder={"Enter Your Password"} //Hint text
  onInputChange={this.handlePasswordInputChange}
  icon={Icon_Eye}               //Not mandatory
  inputRef={this.inputRef2}      //Not mandatory
  nextInputRef={this.inputRef1}   //Not mandatory
  readOnly={true}                // Disable user input
/> 
*/

