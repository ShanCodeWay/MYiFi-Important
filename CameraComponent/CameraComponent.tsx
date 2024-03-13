import React, { useRef, useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Alert,SafeAreaView } from "react-native";
import { Camera } from 'react-native-vision-camera';
import { useCameraDevice, CameraProps, getCameraDevice } from 'react-native-vision-camera';
import RNFS from 'react-native-fs';
import { PermissionsAndroid } from 'react-native';
import ImageResizer from '@bam.tech/react-native-image-resizer';
import { Android_Theme_Light } from "../../../../styles/Themes";
import GetCameraComponentStyles from "./CameraComponentStyles";





interface CameraComponentProps {
  cameraType: any;
  onClose: () => void;
  isActive:any;
  onCapture: (path: string) => void;
}

const CameraComponent: React.FC<CameraComponentProps> = (props) => {

  const [isCameraInitialized, setIsCameraInitialized] = useState<boolean>(false);
  const [cameraWidth, setCameraWidth] = useState<number>(300);
  const [capturedImage, setCapturedImage] = useState<boolean>(false);
  const [photoPath, setPhotoPath] = useState<string>("");

  const devices = Camera.getAvailableCameraDevices();
  const device = getCameraDevice(devices, props.cameraType, {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera'
    ]
  });
  const camera = useRef<Camera | null>(null);
  const [selectedDevice, setSelectedDevice] = useState<string>(props.cameraType);
  const [isActive, setIsActive] = useState<boolean>(props.isActive);
  const [imageSource, setImageSource] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isChangingWidth, setIsChangingWidth] = useState<boolean>(true);

 // if (device == null) return <NoCameraErrorView />


  useEffect(() => {
    if (isVisible) {
      setIsChangingWidth(true);
      const timeout = setTimeout(() => {
        setCameraWidth(290);
        setTimeout(() => {
          setCameraWidth(300);
          setIsChangingWidth(false);
        }, 100);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);


  useEffect(() => {
    const requestPermissions = async () => {
      try {
        setCameraWidth(290);
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
        console.log('Camera WIDTH:', cameraWidth);
      } catch (error) {
        console.warn('Error requesting permissions:', error);
      }
    };

    requestPermissions();

  }, []);

  const capturePhoto = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto({ qualityPrioritization: 'speed' });

      setImageSource(photo.path);
      setIsActive(false);

      console.log(photo.path);
      console.log(devices);
    }
  };

  if (!selectedDevice) {
    return <Text>No camera device available</Text>;
  }

  const retryCapture = useCallback(() => {
    console.log('Camera retry');
    setIsVisible(true);
    setIsActive(true);
    setImageSource('');
    props.onClose();
  }, []);


  const SavePhoto = async () => {
    var originalPath = `file://${imageSource}`;

    // Get Image Size
    Image.getSize(originalPath, async (width, height) => {
      try{ 
      var new_height, new_weight;
      console.log(
        "Original Width : " + width + " , Original Height : " + height
      );

      // Check the Height is larger than 1000
      if (height > 1024) {
        new_height = 1024;
        new_weight = Number((1024 / (height / width)).toFixed());
      } else {
        new_height = height;
        new_weight = width;
      } // End if

      console.log(
        "New Width : " +
        new_weight +
        " , New Height : " +
        new_height +
        "Original Path" +
        originalPath
      );

      // try {
        const resizedImage = await ImageResizer.createResizedImage(
          originalPath,
          new_weight,
          new_height,
          "JPEG",
          80
        );

        console.log("Resized image path: ", resizedImage.path);

        var totalSizeMB = resizedImage.size / Math.pow(1024, 2);
        console.log("[onTakePicture] - Size of the new file in MB: ", totalSizeMB);
        props.onCapture(resizedImage.path);
        props.onClose();

        if (totalSizeMB > 2) {
          Alert.alert(
            "File Size Error",
            "Selected File Size is larger than 2MB",
            [{ text: "OK" }],
            { cancelable: false }
          );
          return;
        }

        var value = {
          FilePath: resizedImage.path,
          Type: "image/jpeg",
          FileName: resizedImage.name,
        };

        var TempDocuments = [];
        TempDocuments.push(value);
     
        // props.parentReferenceItem(TempDocuments);
      } 
      catch (error) {
        console.error("Error resizing image:", error);
      }

      // Delete original capture image file
    //   RNFS.unlink(originalPath)
    //     .then(() => {
    //       console.log("Original capture file deleted. ");
    //     })
    //     .catch((err) => {
    //       console.log("Error: Original capture file delete failed. ", err.message);
    //     });
    // 
}
    );
  
    // setIsActive(false);
  };


  return (
    <SafeAreaView style={GetCameraComponentStyles(Android_Theme_Light).container}>
  <View
    style={[
      (props.cameraType === 'front'
        ? GetCameraComponentStyles(Android_Theme_Light).frontCameraView
        : GetCameraComponentStyles(Android_Theme_Light).backCameraView),
      { width: props.cameraType === 'front' ? cameraWidth + 120 : cameraWidth + 100 },
    ]}
  >
    {isVisible && device && isActive && (
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
        orientation={'portrait'}
      />
    )}
    {imageSource !== "" && (
      <View style={StyleSheet.absoluteFill}>
        <Image
          style={[
            { flex: 1 },
            props.cameraType === 'front'
              ? GetCameraComponentStyles(Android_Theme_Light).frontCameraPreview
              : GetCameraComponentStyles(Android_Theme_Light).backCameraPreview,
            { resizeMode: 'contain' },
            { transform: [{ rotate: props.cameraType === 'front' ? '90deg' : '0deg' }] },
          ]}
          source={{ uri: `file://${imageSource}` }}
        />
      </View>
    )}
  </View>
  <View style={GetCameraComponentStyles(Android_Theme_Light).captureButtonContainer}>
    {imageSource !== "" ? (
      <View style={GetCameraComponentStyles(Android_Theme_Light).buttonsContainer}>
        <TouchableOpacity onPress={retryCapture} style={GetCameraComponentStyles(Android_Theme_Light).retryButton}>
          <Text style={GetCameraComponentStyles(Android_Theme_Light).captureButtonText}>Retry</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={SavePhoto} style={GetCameraComponentStyles(Android_Theme_Light).retryButton}>
          <Text style={GetCameraComponentStyles(Android_Theme_Light).captureButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={GetCameraComponentStyles(Android_Theme_Light).captureButtonContainer1}>
        <TouchableOpacity onPress={() => capturePhoto()} style={GetCameraComponentStyles(Android_Theme_Light).captureButton}>
          <View style={GetCameraComponentStyles(Android_Theme_Light).innerCircle} />
        </TouchableOpacity>
      </View>
    )}
  </View>
</SafeAreaView>
  
  
  

  );
};



export default CameraComponent;