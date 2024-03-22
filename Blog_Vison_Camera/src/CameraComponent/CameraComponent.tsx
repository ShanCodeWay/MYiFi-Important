import React, { useRef, useEffect, useState, useCallback } from "react";
import { View, Text,  Image, StyleSheet,  Alert, Modal, TouchableOpacity, } from "react-native";
import { Camera, useCameraFormat,useCameraDevice} from 'react-native-vision-camera'; 
import {getCameraDevice } from 'react-native-vision-camera';

import { PermissionsAndroid } from 'react-native';
import GetCameraComponentStyles from "./CameraComponentStyles";



{/*created by Darshana*/}

//import { useResizePlugin } from 'vision-camera-resize-plugin';



interface CameraComponentProps {
  cameraType: any;
  onClose: () => void;
  isActive:any;
  onCapture: (path: string) => void;
}

const CameraComponent: React.FC<CameraComponentProps> = (props) => {

  const devices = Camera.getAvailableCameraDevices();
  //const device = getCameraDevice(devices, props.cameraType);
  const device = useCameraDevice(props.cameraType)
  const camera = useRef<Camera | null>(null);
  const [selectedDevice, setSelectedDevice] = useState<string>(props.cameraType);
  const [isActive, setIsActive] = useState<boolean>(props.isActive);
  const [imageSource, setImageSource] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const [cameraWidth, setCameraWidth] = useState<number>(290);

  const [cameraHeight,  setCameraHeight] = useState<number>();
  const [count, setCount] = useState<number>(0);
  const [isCameraInitialized, setIsCameraInitialized] = useState(false)

  const screenAspectRatio = 3/4;
  
  const format = useCameraFormat(device, [
   
    { photoAspectRatio: 3/4 },
    { photoResolution: 'max' },
  ])
  
 


// const { resize } = useResizePlugin()
// const plugin = useResizePlugin();
// const frameProcessor = useFrameProcessor((frame) => {
//   'worklet';
//   console.log(frame.toString());

//   const start = performance.now();

//   const targetWidth = 250;
//   const targetHeight = 250;

//   const result = plugin.resize(frame, {
//     scale: {
//       width: targetWidth,
//       height: targetHeight,
//     },
//     pixelFormat: 'rgba',
//     dataType: 'uint8',
//     rotation: '90deg',
//     mirror: true,
//   });
//   console.log(
//     result[Math.round(result.length / 2) + 0],
//     result[Math.round(result.length / 2) + 1],
//     result[Math.round(result.length / 2) + 2],
//     result[Math.round(result.length / 2) + 3],
//     '(' + result.length + ')'
//   );

//   const end = performance.now();

//   console.log(
//     `Resized ${frame.width}x${frame.height} into 100x100 frame (${
//       result.length
//     }) in ${(end - start).toFixed(2)}ms`
//   );
// }, []);



 // if (device == null) return <NoCameraErrorView />

  useEffect(() => {
    const requestPermissions = async () => {
      try {
        const storageGranted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);
        if (
          storageGranted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
          storageGranted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('Storage permissions granted');
        } else {
          console.log('Storage permissions denied');

        }
        const cameraPermission = await Camera.requestCameraPermission();
        console.log('Camera permission:', cameraPermission);
        console.log('Camera Width:', cameraWidth);
        
      } catch (error) {
        console.warn('Error requesting permissions:', error);
      }
    };
      requestPermissions();

  }, []);

  const capturePhoto = async () => {
    try {
      if (camera.current) {
        const photo = await camera.current.takePhoto({  });
  
        if (!photo || !photo.path) {
          throw new Error('Failed to capture photo: Empty path');
        }
  
        setImageSource(photo.path);
        setIsActive(false);
        setIsCameraInitialized(false);
        console.log(photo.path);
        console.log(devices);
      }
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };
  

  if (!selectedDevice) {
    return <Text>No camera device available</Text>;
  }

  const retryCapture = useCallback(() => {
    try {
      console.log('Camera retry');
      setIsVisible(true);
      setIsActive(true);
      setImageSource('');
      //props.onClose();
    } catch (error) {
      console.error('Error retrying capture:',error);
      
    }
  }, []);
  


 

  const onInitialized = useCallback(() => {
  console.log('Camera initialized!');
  setIsCameraInitialized(true);
  console.log('Camera initialized!', cameraWidth); // Before setting cameraWidth
}, []);

useEffect(() => {
  if (isCameraInitialized === true) {
    setCameraWidth(300);
    
  } else {
    setCameraWidth(290);
  }
}, [isCameraInitialized]);


  // useEffect(() => {
  //   // Reset zoom to it's default everytime the `device` changes.
  //   cameraWidth = 200
  // }, [isCameraInitialized])

    return (
      <View style={GetCameraComponentStyles.container}>
        <Modal
          visible={props.isActive}
          animationType="slide"
          transparent={true}
         >
          <View  style={GetCameraComponentStyles.modalContainer}>
          <View style={GetCameraComponentStyles.modalContent}>  


<View style={[GetCameraComponentStyles.cameraContent, { width: cameraWidth }]}>
  {imageSource === "" ? (
    device && isActive && (
      <Camera
        // frameProcessor={frameProcessor}
        ref={camera}
        onInitialized={onInitialized}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
        photo={true}
        resizeMode="contain"
        pixelFormat="native"
        accessibilityViewIsModal={true}
        // format={format}
        onStarted={() => 'Camera started!'}
        onStopped={() => 'Camera stopped!'}
        orientation="portrait"
      />
    )
  ) : (
    <Image
      style={[
        { flex: 1 },
        props.cameraType === 'front'
          ? GetCameraComponentStyles.frontCameraPreview
          : GetCameraComponentStyles.backCameraPreview,
          
        { resizeMode: 'contain' },
        { transform: [{ rotate: props.cameraType === 'front' ? '90deg' : '0deg' }] },
      ]}
      source={{ uri: `file://${imageSource}` }}
    />
  )}
</View>



          <View style={GetCameraComponentStyles.captureButtonContainer1}>

        { isActive ?(  

        <TouchableOpacity
              // type={"1"}
              // borderRadius={60}
              // title={''}
              // width={120}
              // textAlign="center"
              // fontFamily={Android_Theme_Light.POPPINS_REGULAR}
              // textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
              // textColor={Android_Theme_Light.WHITE_COLOR}
             
              // Icon={Android_Theme_Light.ICON_CAMERA}

              // backgroundColor={Android_Theme_Light.DARK_GREEN_COLOR}

              onPress={() => capturePhoto()}           />
        ) :( <><TouchableOpacity
                    // type={"1"}
                    // textAlign="center"
                    // title={"Retry"}
                    // width={100}
                    // fontFamily={Android_Theme_Light.POPPINS_REGULAR}
                    // textSize={Android_Theme_Light.FONT_SIZE_BODY_TWO_REGULAR}
                    // textColor={Android_Theme_Light.WHITE_COLOR}
                    // backgroundColor={Android_Theme_Light.DARK_BLUE_COLOR}
                    onPress={() => retryCapture()} />
                    
                  
                  </>)} 

      </View>
      
         </View>


         </View>
        </Modal>
      </View>
    );

};



export default CameraComponent;