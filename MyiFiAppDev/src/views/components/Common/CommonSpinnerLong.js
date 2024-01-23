//Functional component
/* Darshana 12.01.2024*/
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

import {GetCommonSpinnerLongStyles} from "./CommonSpinnerLongStyles";
import { Android_Theme_Light } from "../../../styles/Themes";
import Icon_angleDown from "../../../assets/icons/Icon_angleDown.svg";
import Colors from "../../../styles/Colors";
import Fonts from "../../../styles/Fonts";
import Icon_SpinnerItem_Selected from "../../../assets/icons/Icon_SpinnerItem_Selected.svg";
import LinearGradient from "react-native-linear-gradient";

import Icon_search from "../../../assets/icons/Icon_search.svg";





const CommonSpinnerLong = (props) => {
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
  const SelectItem = (value,value1) => {
    try {
      props.parentReferenceItem(value,value1);
      
      HandleSearch("");
      setIsModalVisible(false);
    } catch (error) {
      console.log("[CommonSpinner] - SelectItem - Error ", error);
    }
  };

  //Press Cancel Button
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

  
 
  return (
    <>
    

      <View
     
      >
       
        <TouchableOpacity
          onPress={() => setIsModalVisible(true)}
          disabled={props.disabled}
          style={GetCommonSpinnerLongStyles(Android_Theme_Light).IconOuterStyle}
        >
          


          <LinearGradient
            angle={70}
            useAngle={true}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#0044A9", "#4384DA", "#75B4FF"]}
            style={[GetCommonSpinnerLongStyles(Android_Theme_Light).dropDownBtnContainer,{width:props.width}]}
          >

<View style={GetCommonSpinnerLongStyles(Android_Theme_Light).left}>
<Text
              style={
                props.value
                  ? { ...GetCommonSpinnerLongStyles(Android_Theme_Light).text,  color:Colors.WHITE, fontFamily: Fonts.POPPINS_BOLD }
                  : { ...GetCommonSpinnerLongStyles(Android_Theme_Light).textPlaceholder,  color:Colors.WHITE, fontFamily: Fonts.POPPINS_BOLD }
              }
            >
              {props.value ? props.value : props.placeholder}
            </Text>

</View>


<View style={GetCommonSpinnerLongStyles(Android_Theme_Light).middle}>
  <Text style={{ fontSize: 14, color: Colors.WHITE, fontFamily: Fonts.POPPINS_BOLD }}>
    
   {props.currency}  {props.value ? `${props.value1}` : props.value}
    
  </Text>

</View>


{/*<View>

{leadingIcon ? (
            <View style={GetCommonSpinnerLongStyles(Android_Theme_Light).IconOuterStyle}>  
              {leadingIcon}
            </View>
          ) : null}
          <View style={GetCommonSpinnerLongStyles(Android_Theme_Light).itemSelectedContainer}>
            {props.value ? <Icon_SpinnerItem_Selected   fill={''} /> : null}
          </View>
</View>

// if you want icon after fill uncomment this*/} 

 <View style={GetCommonSpinnerLongStyles(Android_Theme_Light).right}> 
 <Icon_angleDown fill={Colors.WHITE} />
 </View>
           



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
        <View style={GetCommonSpinnerLongStyles(Android_Theme_Light).ModelOuterView}>
          <View style={GetCommonSpinnerLongStyles(Android_Theme_Light).ModelInnerView}>
            <View style={GetCommonSpinnerLongStyles(Android_Theme_Light).searchView}>
              <TextInput
                style={GetCommonSpinnerLongStyles(Android_Theme_Light).SearchTextInput}
                placeholder={"Select Item"}
                placeholderTextColor={Colors.GRAY}
                onChangeText={HandleSearch}
              ></TextInput>
              <TouchableOpacity style={GetCommonSpinnerLongStyles(Android_Theme_Light).SearchIconView}>
                <Icon_search height={20} width={20} />
              </TouchableOpacity>
            </View>

            <View style={GetCommonSpinnerLongStyles(Android_Theme_Light).QuestionListOuterView}>
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
                      style={GetCommonSpinnerLongStyles(Android_Theme_Light).singleQuestionView}
                      onPress={() => SelectItem(item.label, item.value, item.value1)}
                    >


                      <View style={GetCommonSpinnerLongStyles(Android_Theme_Light).ItemTextView}>
                      <View style={GetCommonSpinnerLongStyles(Android_Theme_Light).ItemMoneyLeftTextView} >

                      <Text style={GetCommonSpinnerLongStyles(Android_Theme_Light).ItemText}>
                        {item.label}  
                      </Text>
                      </View>

                      <View style={GetCommonSpinnerLongStyles(Android_Theme_Light).ItemMoneyRightTextView} >
                      <Text style={GetCommonSpinnerLongStyles(Android_Theme_Light).ItemMoneyText}>-{props.currency} {item.value}</Text> 
                      
                      </View>
                      
                       </View>
                      
                      



                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item.value}
                ></FlatList>
              </View>



            <TouchableOpacity
              style={GetCommonSpinnerLongStyles(Android_Theme_Light).CanselButtonView}
              onPress={() => PressCancel()}
            >
              <Text style={GetCommonSpinnerLongStyles(Android_Theme_Light).CanselButtonText}>Cancel</Text>
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
currency={"LKR"}
onRef={(ref) => (this.parentReferenceItem = ref)}
parentReferenceItem={this.test.bind(this)}
/> */}