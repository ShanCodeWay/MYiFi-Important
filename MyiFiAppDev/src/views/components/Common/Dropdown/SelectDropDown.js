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

import GetSelectDropDownStyles from "./SelectDropDownStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import LinearGradient from "react-native-linear-gradient";

import CommonInputField from "../../../components/Common/TextInput/CommonInputField";
import CommonButton from "../../../components/Common/MainButton/CommonButton";

const SelectDropDown = (props) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [allData, setAllData] = useState(props.data);
  const [filterData, setFilterData] = useState(props.data);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {

    try {

      setAllData(props.data);
      setFilterData(filterText == "" ? props.data : filterData);
    } 
    catch (error) {
      console.log("[SelectDropDown] - useEffect Ex: ", error);
    }
    
  }, [props.data]);

  //Select  Item
  const SelectItem = (value) => {
    try {
      props.parentReferenceItem(value);
      HandleSearch("");
      setIsModalVisible(false);
    } catch (error) {
      console.log("[SelectDropDown] - SelectItem Ex: ", error);
    }
  };

  //Press Cansel Button
  const PressCancel = () => {
    try {
      props.parentReferenceItem("");
      HandleSearch("");
      setIsModalVisible(false);
    } catch (error) {
      console.log("[SelectDropDown] - PressCancel Ex: ", error);
    }
  };

  //trigger when Search input Onchange
  const HandleSearch = (text) => {
    
    try {
      
      let data;

      if (text) {

        setFilterText(text);
        data = allData === undefined || (allData !== undefined && allData.length === 0) ? 
                props.data : allData;

        setFilterData(data.filter((item) => item.label.toUpperCase().indexOf(text.toUpperCase()) >= 0)
      
      );
      } 
      else {
        setFilterData(allData);
        setFilterText("");
      }
    } 
    catch (error) {
      console.log("[SelectDropDown] - HandleSearch Ex: ", error);
    }
  };

  const renderTitle = () => { 
    
    try {

      const { title } = props || {};
  
      if (!title) {
        
        return null; 
      }
  
      return (

        <Text style={GetSelectDropDownStyles(Android_Theme_Light).labelText}>
          
          {title.split("").map((char, index) => (
            <Text
              key={index}
              style={{
                color: char === '*' ? 'red' : Android_Theme_Light.DEEP_BLACK_COLOR,
              }}
            >
              {char}
            </Text>
          ))}
        </Text>
      );
    } catch (error) {
      console.log("[SelectDropDown] - renderTitle Ex: ", error);
    }
  };
  

  return (
    
    <>
      
      <View style={[GetSelectDropDownStyles(Android_Theme_Light).parentContainer, { width: props.width == null ? '100%' : props.width }]}>
        {renderTitle()}
   
        <View style={GetSelectDropDownStyles(Android_Theme_Light).dropdown_Container}>
        
          <TouchableOpacity
            style={GetSelectDropDownStyles(Android_Theme_Light).touchable_container}
            onPress={() => setIsModalVisible(true)}
            disabled={props.disabled}>

            <View style={GetSelectDropDownStyles(Android_Theme_Light).left_Column}>

              <Text 
                style={ props.value ? GetSelectDropDownStyles(Android_Theme_Light).valueText
                      : GetSelectDropDownStyles(Android_Theme_Light).textPlaceholder}>

                {props.value ? props.label : props.placeholder}

              </Text>
            </View>

            { 
              props.value ?

                <View 
                  style={GetSelectDropDownStyles(Android_Theme_Light).icon_Column}>

                  <Android_Theme_Light.ICON_VERIFIED />

                </View> :null
            }

            <View 
              style={GetSelectDropDownStyles(Android_Theme_Light).right_Column}>

              <LinearGradient
                angle={70}
                useAngle={true}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={["#0044A9", "#2769C5", "#4384DA", "#5E9EEE", "#75B4FF"]}
                style={GetSelectDropDownStyles(Android_Theme_Light).dropDownBtnContainer}>

                <Text style={GetSelectDropDownStyles(Android_Theme_Light).dropDownBtnText}>
                  Select
                </Text>

              </LinearGradient>

              <Android_Theme_Light.ICON_DOWN_ARROW 
                fill={Android_Theme_Light.WHITE_COLOR} width={20} height ={20}  marginTop = {22} />

              {/*<Android_Theme_Light.BACKGROUND_DROPDOWN_SELECT width={120} />*/}

            </View>
         
          </TouchableOpacity>
        
        </View>

      </View>

      {/* Custom row View End */}

      {/* Spinner Model View Start*/}

      <Modal
        visible={isModalVisible}
        backdropOpacity={0.5}
        transparent={true}
        animationType="slide">

        <View style={GetSelectDropDownStyles(Android_Theme_Light).ModelParentContainer}>
          
          <View style={GetSelectDropDownStyles(Android_Theme_Light).ModelContainer}>

            <View style = {GetSelectDropDownStyles(Android_Theme_Light).searchView}>

              {/* Search */}
              <CommonInputField
                value={""} // Set value to the input field
                title={""}
                placeholder={"Search"} //Hint text
                onInputChange={HandleSearch}
                icon={Android_Theme_Light.ICON_SEARCH}
                //width ={'90%'}
              />
            </View>
              
            <View style={GetSelectDropDownStyles(Android_Theme_Light).flatListContainer}>
              
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
                    style={GetSelectDropDownStyles(Android_Theme_Light).listRowContainer}
                    onPress={() => SelectItem(item.value)}>

                    <Text style={GetSelectDropDownStyles(Android_Theme_Light).listRowText}>
                      {item.label}
                    </Text>

                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.value}
              />
            </View>

            <View style={GetSelectDropDownStyles(Android_Theme_Light).cancelButtonView}>
              
              {/* Cancel Button  */}
              <CommonButton
                type={"1"}
                width={"60%"}
                title={"Cancel"}
                fontFamily = {Android_Theme_Light.POPPINS_REGULAR}
                textSize = {Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
                textColor = {Android_Theme_Light.WHITE_COLOR}
                backgroundColor={Android_Theme_Light.BLUE_COLOR}
                onPress={PressCancel}
                //Width={"80%"}
              />

            </View>
          </View>
        </View>
      </Modal>

      {/* Spinner Model View End*/}
    </>
  );
};
export default SelectDropDown;


//How to Use
{/* 
<SelectedDropDown
  width={"90%"}
  data={[
    { label: "Sampath Bank", value: "B02" },
  ]}
  //title={"Select Account"}
  placeholder={"Select Bank"}
  value={this.state.selecteBank}
  onRef={(ref) => (this.parentReferenceItem = ref)}
  parentReferenceItem={this.test.bind(this)}
/> 
*/}