import { StyleSheet } from "react-native";

const GetCameraComponentStyles = (theme:any) => {
    
    const CameraComponentStyles = StyleSheet.create({

        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
           
            position: 'absolute',
            height: '100%',
            width: '100%',
          },
          title: {
            top: 100,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            color: 'navy',
            fontSize: 40,
            fontWeight: 'bold',
            
            padding: 10,
            fontFamily: 'Helvetica',
            elevation: 20,
            borderRadius: 15,
        
          },
          frontCameraView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            borderRadius: 200,
            borderWidth: 3,
            borderColor: 'white',
            elevation: 10,
            overflow: "hidden",
            height: 300,
            aspectRatio: 1 / 1,
            resizeMode: 'contain',
          },
          backCameraView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            borderRadius: 10,
            borderWidth: 3,
            borderColor: 'white',
            elevation: 10,
            height: '100%',
            width: '100%',
          },
          previewImage: {
            width: 300,
            height: 300,
            borderRadius: 200,
          },
          closeButtonContainer: {
            position: 'absolute',
            top: 10,
            left: 20,
            zIndex: 2,
            backgroundColor: 'red',
            borderRadius: 20,
            borderColor: 'white',
            borderWidth: 2,
            elevation: 10,
            alignItems: 'center',
            justifyContent: 'center',
          },
          closeButton: {
            color: 'white',
            padding: 10,
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'Helvetica',
            elevation: 20,
          },
          captureButtonContainer: {
            position: 'absolute',
            bottom: 10,
            zIndex: 2,
            
            borderRadius: 20,
            borderColor: 'white',
            borderWidth: 2,
            elevation: 10,
          },
          captureButton: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginVertical: 5,
          },
          captureButtonText: {
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
          },
          buttonsContainer: {
            flexDirection: 'row',
          },
          image: {
            flex: 1,
            width: '100%',
            height: '100%',
            aspectRatio: 9 / 16,
          },
        });

        return CameraComponentStyles ;

    }
    export default GetCameraComponentStyles;