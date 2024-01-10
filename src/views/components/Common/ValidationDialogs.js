// ValidationDialogs.js_Nawodya


import React, { useState, useEffect, useRef } from "react";
import { View, Text, Modal } from 'react-native';
import ValidationDialogsStyles from './ValidationDialogsStyles';
import CommonSmallButton from '../Common/CommonSmallButton'
import LinearGradient from 'react-native-linear-gradient';


const ValidationDialogs = (props) => {
        const [isModalVisible, setIsModalVisible] = useState(props.isModalVisible);

        useEffect(() => {
          setIsModalVisible(props.isModalVisible);
        }, [props.isModalVisible]);
      
  return (
      
        <Modal
        visible={isModalVisible}
        backdropOpacity={0.5}
        transparent={true}
        animationType="slide"
      
      >
  <View style={ValidationDialogsStyles.parientView}>

    <View style={ValidationDialogsStyles.upperView}>
      <Text style={ValidationDialogsStyles.validationDialogsText1}>{props.text1}</Text>
      <Text style={ValidationDialogsStyles.validationDialogsdiscription}>{props.discription}</Text>
    </View>

    <View style={ValidationDialogsStyles.middleView}>
      <Text style={ValidationDialogsStyles.validationDialogsText2}>{props.text2}</Text>
      </View>
      <View style={ValidationDialogsStyles.bottomView}>
      <CommonSmallButton
              onPress={() => null}
              text={"Yes"}
              width={"40%"}
          


                    
                    
                    
                    
            
                />

<CommonSmallButton
              onPress={() => null}
              text={"No"}
              width={"40%"}
          


                    
                    
                    
                    
            
                />
                   


      </View>
      </View>
      </Modal>
   
  );
};

export default ValidationDialogs;
