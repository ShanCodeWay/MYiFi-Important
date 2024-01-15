import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";
import FingerPrintLoginStyles from "./FingerPrintLoginStyles";
import Colors from "../../../../styles/Colors";
import CommonButton from "../../../components/Common/CommonButton";
import Fonts from "../../../../styles/Fonts";
import Icon_fingerPrint from "../../../../assets/icons/Icon_fingerPrint.svg";
import { GetCommonStyles } from "../../../../styles/CommonStyles";
import { Android_Theme_Light } from "../../../../styles/Themes";
import Icon_CircleChecked from "../../../../assets/icons/Icon_CircleChecked.svg";

const FingerPrintLogin = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(props.isModalVisible);

  useEffect(() => {
    setIsModalVisible(props.isModalVisible);
  }, [props.isModalVisible]);

  return (
    <>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <Icon_fingerPrint width={40} height={40} />
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        backdropOpacity={0.5}
        transparent={true}
        animationType="slide"
      >
        <View style={FingerPrintLoginStyles.ModelOuterView}>
          <View style={FingerPrintLoginStyles.ModelInnerView}>
            <Text
              style={[GetCommonStyles(Android_Theme_Light).TextStyleH2Medium]}
            >
              Quick Sign in
            </Text>
            <Text
              style={[
                GetCommonStyles(Android_Theme_Light).TextStyleCaption12Medium,
                { textAlign: "center" },
              ]}
            >
              {"waiting for your finger print"}
            </Text>


            <View style={FingerPrintLoginStyles.containerFingerprintIcon}>
              <Icon_fingerPrint
            
                width={100}
                height={100}
                fill={Colors.BLACK_DEEP}
              />

              <Icon_CircleChecked       width={60}
                height={60}/>
            </View>

            <CommonButton
              type={"1"}
              title={"Use Password Instead"}
              backgroundColor={Colors.Dark_Blue}
              textColor={Colors.WHITE}
              fontFamily={Fonts.POPPINS_REGULAR}
              onPress={() => setIsModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default FingerPrintLogin;
