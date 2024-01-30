//Functional component
/* Darshana 12.01.2024*/
import React, { useState, useEffect } from "react";
import {Text,View,crollView,TextInput, FlatList,TouchableOpacity,Modal,} from "react-native";

import {GetCommonSpinnerLongStyles} from "./CommonSpinnerLongStyles";
import { Android_Theme_Light } from "../../../styles/Themes";
import Icon_angleDown from "../../../assets/icons/Icon_angleDown.svg";
import Colors from "../../../styles/Colors";
import Fonts from "../../../styles/Fonts";
import LinearGradient from "react-native-linear-gradient";
import Icon_search from "../../../assets/icons/Icon_search.svg";

const CommonSpinnerLong = (props) => {
  const [isModalVisible, setIsModalVisible]= useState(false);
  const [leadingIcon, setleadingIcon]      = useState(props.leadingIcon);
  const [allData, setAllData]              = useState(props.data);
  const [filterData, setFilterData]        = useState(props.data);
  const [filterText, setFilterText]        = useState("");

  useEffect(() => {
    setleadingIcon(props.leadingIcon);
    setAllData(props.data);
    setFilterData(filterText === "" ? props.data : filterData);
  }, [props.data, props.leadingIcon]);

  //Select  Item
  const SelectItem = (label_1,label_2, value) => {
    try {
      props.parentReferenceItem(label_1,label_2, value);
      HandleSearch("");
      setIsModalVisible(false);
    } catch (error) {
      console.log("[CommonSpinnerLong] - SelectItem - Error ", error);
    }
  };

  //Press Cancel Button
  const PressCancel = () => {
    try {
      props.parentReferenceItem("");
      HandleSearch("");
      setIsModalVisible(false);
    } catch (error) {
      console.log("[CommonSpinnerLong] - PressCancel - Error ", error);
    }
  };

  //trigger when Search input Onchange
  const HandleSearch = (text) => {
    try {
      let data;

      if (text) {
        setFilterText(text);
        data=allData === undefined ||
          (allData !== undefined && allData.length === 0)
            ? props.data : allData;
        setFilterData(
          data.filter(
            (item) => item.label.toUpperCase().indexOf(text.toUpperCase()) >= 0
          )
        );
      } else {
        setFilterData(allData);
        setFilterText("");
      }
    } catch (error) {
      console.log("[CommonSpinnerLong] - HandleSearch - Error ", error);
    }
  };


  return (
    <>
  <View>
       <TouchableOpacity
          onPress = {() => setIsModalVisible(true)}
          disabled= {props.disabled}
          style   = {GetCommonSpinnerLongStyles(Android_Theme_Light).IconOuterStyle}
        >
          
          <LinearGradient
            angle   = {70}
            useAngle= {true}
            start   = {{ x: 0, y: 0 }}
            end     = {{ x: 1, y: 1 }}
            colors  = {["#0044A9", "#4384DA", "#75B4FF"]}
            style   = {[GetCommonSpinnerLongStyles(Android_Theme_Light).dropDownBtnContainer,{width:props.width}]}
          >

<View style = {GetCommonSpinnerLongStyles(Android_Theme_Light).left}>
<Text style = {props.lable_1
                  ? { ...GetCommonSpinnerLongStyles(Android_Theme_Light).text,  color   : Colors.WHITE, fontFamily: Fonts.POPPINS_BOLD }:
                    { ...GetCommonSpinnerLongStyles(Android_Theme_Light).textPlaceholder,  color:Colors.WHITE, fontFamily: Fonts.POPPINS_BOLD }
              }
>
              {props.lable_1 ? props.lable_1 : props.lable_1 || props.placeholder}
            </Text>

</View>



    {props.lable_2Show !== false && (
     <View style = {GetCommonSpinnerLongStyles(Android_Theme_Light).middle}>
          <Text style = {{ fontSize: 14, color: Colors.WHITE, fontFamily: Fonts.POPPINS_BOLD }}>
            {`${props.lable_2 !== undefined ? props.lable_2 : ''} ${props.currency !== undefined ? props.currency : ''}`}
          </Text>
     </View>
    )}

{/*lable_2Show={false}*/}

{/*<View>

{leadingIcon ? (
            <View style  = {GetCommonSpinnerLongStyles(Android_Theme_Light).IconOuterStyle}>
              {leadingIcon}
            </View>
          ) : null}
          <View style  = {GetCommonSpinnerLongStyles(Android_Theme_Light).itemSelectedContainer}>
            {props.value ? <Icon_SpinnerItem_Selected   fill= {''} /> : null}
          </View>
</View>

// if you want icon after fill uncomment this*/} 

          <View style = {GetCommonSpinnerLongStyles(Android_Theme_Light).right}>
                 <Icon_angleDown fill = {Colors.WHITE} />
          </View>

          </LinearGradient>

         
          </TouchableOpacity>
      </View>

      {/* Custom row View End */}



      {/* Spinner Model View Start*/}

      <Modal
        visible        = {isModalVisible}
        backdropOpacity= {0.5}
        transparent    = {true}
        animationType  = "slide"
      >
        <View style = {GetCommonSpinnerLongStyles(Android_Theme_Light).ModelOuterView}>
          <View style = {GetCommonSpinnerLongStyles(Android_Theme_Light).ModelInnerView}>
            
          
  {props.search !== false && (
     <View style = {GetCommonSpinnerLongStyles(Android_Theme_Light).searchView}>
      <TextInput
        style = {GetCommonSpinnerLongStyles(Android_Theme_Light).SearchTextInput}
        placeholder          = {"Select Item"}
        placeholderTextColor = {Colors.GRAY}
        onChangeText         = {HandleSearch}
      />
      <TouchableOpacity style= {GetCommonSpinnerLongStyles(Android_Theme_Light).SearchIconView}>
        <Icon_search height  = {20} width={20} />
      </TouchableOpacity>
      </View>
  )}

            <View style = {GetCommonSpinnerLongStyles(Android_Theme_Light).QuestionListOuterView}>
            
            <FlatList
             data={
              (filterText === "" && filterData === undefined) ||
              (filterText === "" &&
                filterData !== undefined &&
                filterData.length === 0)
                ? props.data
                : filterData
            }
            renderItem = {({ item }) => (
              <TouchableOpacity
                key     = {item.value}
                style   = {GetCommonSpinnerLongStyles(Android_Theme_Light).singleQuestionView}
                onPress = {() => SelectItem(item.label_1,item.label_2, item.value)}
             >

                  <View style = {GetCommonSpinnerLongStyles(Android_Theme_Light).ItemTextView}>
                    <View style = {GetCommonSpinnerLongStyles(Android_Theme_Light).ItemMoneyLeftTextView} >
                      <Text style = {GetCommonSpinnerLongStyles(Android_Theme_Light).ItemText}>
                        {item.label_1}
                      </Text>
                    </View>

                    {props.lable_2Show!== false && (
                    <View style = {GetCommonSpinnerLongStyles(Android_Theme_Light).ItemMoneyRightTextView} >
                      <Text style = {GetCommonSpinnerLongStyles(Android_Theme_Light).ItemMoneyText}>{props.currency !== undefined ? props.currency : ''} {':'}
                      {item.label_2 !== undefined ? item.label_2:''}
                      </Text>
                    </View>
                    )}


                  </View>
                  </TouchableOpacity>
                  )}
                  keyExtractor = {(item) => item.value}
                ></FlatList>
          </View>



            <TouchableOpacity
              style  = {GetCommonSpinnerLongStyles(Android_Theme_Light).CancelButtonView}
              onPress= {() => PressCancel()}
            >
              <Text style={GetCommonSpinnerLongStyles(Android_Theme_Light).CancelButtonText}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Spinner Model View End*/}
    </>
  );
};
export default CommonSpinnerLong;


//How to Use


{/*        <CommonSpinnerLong
                          width = {"100%"}
                          data={[
                            { label_1 : "MyFi",           label_2: '457,685',     value:'001' },
                            { label_1 : "Seylan Bank",    label_2: '546,685.33',  value:'002' },
                            { label_1 : "Bank of Ceylon", label_2: '757,685.45',  value:'003' },
                            { label_1 : "Peoples Bank",   label_2: '36,685.56',   value:'004' },
                            { label_1 : "Amana Bank",     label_2: '257,685.76',  value:'005' },
                            { label_1 : "Sampath Bank",   label_2: '44,685.88',   value:'006' },
                            { label_1 : "Seylan Bank",    label_2: '37,685.65',   value:'007' },
                          ]}



                          placeholder = {"add some placeholder"}
                          lable_1     = {this.state.selectedAccount || "MyiFi"}
                          lable_2     = {this.state.selectedAmount  || '457,685.54'}   <---This is optional
                          lable_2Show = {false}   <---This is Compulsory  **********
                          value       = {this.state.selected_ID  || ''}
                          search      = {false}   <---This is optional
                          onRef       = {(ref) => (this.parentReferenceItem = ref)}
                          inputRef    = {this.transferFrom}
                          nextInputRef= {this.transferTo}
                          currency    = {"LKR"}    <---This is optional
                          parentReferenceItem = {(label_1,label_2,value) => {
                            this.setState({
                              selectedAccount: label_1,
                              selectedAmount : label_2,
                              selected_ID    : value,
                            });
                          }}
                        />
                      
                      */}