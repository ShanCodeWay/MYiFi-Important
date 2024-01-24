//Functional component

import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";

import CommonSpinnerStyles from "./CommonSpinnerStyles";
import { Android_Theme_Light } from "../../../styles/Themes";
import Icon_angleDown from "../../../assets/icons/Icon_angleDown.svg";
import Colors from "../../../styles/Colors";
import Fonts from "../../../styles/Fonts";
import Icon_SpinnerItem_Selected from "../../../assets/icons/Icon_SpinnerItem_Selected.svg";
import LinearGradient from "react-native-linear-gradient";

import Icon_search from "../../../assets/icons/Icon_search.svg";
const CommonSpinner = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [leadingIcon, setleadingIcon] = useState(props.leadingIcon);
  const [allData, setAllData] = useState(props.data);
  const [filterData, setFilterData] = useState(props.data);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    setleadingIcon(props.leadingIcon);
    setAllData(props.data);
    setFilterData(filterText == "" ? props.data : filterData);
  }, [props.data][props.leadingIcon]);

  //Select  Item
  const SelectItem = (value) => {
    try {
      props.parentReferenceItem(value);
      HandleSearch("");
      setIsModalVisible(false);
    } catch (error) {
      console.log("[CommonSpinner] - SelectItem - Error ", error);
    }
  };

  //Press Cansel Button
  const PressCancel = () => {
    try {
      props.parentReferenceItem("");
      HandleSearch("");
      setIsModalVisible(false);
    } catch (error) {
      console.log("[CommonSpinner] - PressCancel - Error ", error);
    }
  };

  //trigger when Search input Onchange
  const HandleSearch = (text) => {
    try {
      let data;

      if (text) {
        setFilterText(text);
        data =
          allData === undefined ||
          (allData !== undefined && allData.length === 0)
            ? props.data
            : allData;

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
      console.log("[CommonSpinner] - HandleSearch - Error ", error);
    }
  };

  
  const renderTitle = () => { // Darshana 24.01.24
    try {
      const { title } = props || {};
  
      if (!title) {
        
        return null; 
      }
  
      return (
        <Text style={CommonSpinnerStyles.textStyleTitle}>
          {title.split("").map((char, index) => (
            <Text
              key={index}
              style={{
                color: char === '*' ? 'red' : Colors.BLACK,
              }}
            >
              {char}
            </Text>
          ))}
        </Text>
      );
    } catch (error) {
      console.log("[CommonSpinner] - renderTitle - Error ", error);
    }
  };
  

  return (
    <>
      <View style={[CommonSpinnerStyles.title]}>
      {renderTitle()}
    </View>
      <View
        style={[
          CommonSpinnerStyles.spinnerOuterStyle,
          {
            width: props.width == null ? "100%" : props.width,
            borderBottomColor: props.value ? Colors.BLACK_DEEP : Colors.GRAY,
          },
        ]}
      >
        
       
        <TouchableOpacity
          onPress={() => setIsModalVisible(true)}
          disabled={props.disabled}
          style={CommonSpinnerStyles.mainview}
        >
          {leadingIcon ? (
            <View style={CommonSpinnerStyles.IconOuterStyle}>
              {/* //Method for change color of passed sVG
                {React.cloneElement(leadingIcon, { fill: "red" })}  */}

              {leadingIcon}
            </View>
          ) : null}

          <View style={CommonSpinnerStyles.mainviewcol1}>
            <Text
              style={
                props.value
                  ? CommonSpinnerStyles.text
                  : CommonSpinnerStyles.textPlaceholder
              }
            >
              {props.value ? props.value : props.placeholder}
            </Text>
          </View>
          <View style={CommonSpinnerStyles.itemSelectedContainer}>
            {props.value ? <Icon_SpinnerItem_Selected /> : null}
          </View>
          <LinearGradient
            angle={70}
            useAngle={true}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#0044A9", "#4384DA", "#75B4FF"]}
            style={CommonSpinnerStyles.dropDownBtnContainer}
          >
            <Text style={{ fontSize: 12, color:'white', fontFamily: Fonts.POPPINS_BOLD }}>Select</Text>

            <Icon_angleDown fill={Colors.WHITE} />
          </LinearGradient>

         
        </TouchableOpacity>
      </View>

      {/* Custom row View End */}

      {/* Spinner Model View Start*/}

      <Modal
        visible={isModalVisible}
        backdropOpacity={0.5}
        transparent={true}
        animationType="slide"
      >
        <View style={CommonSpinnerStyles.ModelOuterView}>
          <View style={CommonSpinnerStyles.ModelInnerView}>
            <View style={CommonSpinnerStyles.searchView}>
              <TextInput
                style={CommonSpinnerStyles.SearchTextInput}
                placeholder={"Select Item"}
                placeholderTextColor={Colors.GRAY}
                onChangeText={HandleSearch}
              ></TextInput>
              <TouchableOpacity style={CommonSpinnerStyles.SearchIconView}>
                <Icon_search height={20} width={20} />
              </TouchableOpacity>
            </View>

            <View style={CommonSpinnerStyles.QuestionListOuterView}>
              <FlatList
                data={
                  (filterText === "" && filterData === undefined) ||
                  (filterText === "" &&
                    filterData !== undefined &&
                    filterData.length === 0)
                    ? props.data
                    : filterData
                }
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={CommonSpinnerStyles.singleQuestionView}
                    onPress={() => SelectItem(item.value)}
                  >
                    <Text style={{ color: "black" }}>{item.label}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.value}
              ></FlatList>
            </View>

            <TouchableOpacity
              style={CommonSpinnerStyles.CanselButtonView}
              onPress={() => PressCancel()}
            >
              <Text style={CommonSpinnerStyles.CanselButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Spinner Model View End*/}
    </>
  );
};
export default CommonSpinner;


//How to Use


{/* <CommonSpinner
width={"90%"}
data={[
  { label: "Sampath Bank", value: "B02" },
  { label: "Seylan Bank", value: "B03" },
  { label: "Bank of Ceylon", value: "B04" },
  { label: "Peoples Bank", value: "B05" },
  { label: "Amana Bank", value: "B076" },
  { label: "Sampath Bank", value: "B08" },
  { label: "Seylan Bank", value: "B09" },
]}
//title={"Select Account"}
placeholder={"Select Bank"}
value={this.state.selecteBank}
onRef={(ref) => (this.parentReferenceItem = ref)}
parentReferenceItem={this.test.bind(this)}
/> */}