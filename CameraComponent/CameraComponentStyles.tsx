import { StyleSheet } from "react-native";

const GetCameraComponentStyles = (theme:any) => {
    
    const CameraComponentStyles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      frontCameraView: {
        position: 'absolute',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      backCameraView: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      captureButtonContainer1: {
        position: 'absolute',
        bottom: 0,
        zIndex: 3,
        elevation: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
   
      
      captureButtonContainer: {
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
        elevation: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },

      captureButton: {
        width: 100,
        height: 100,
        borderRadius: 200,
        backgroundColor: theme.DARK_BLUE_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
      },
      retryButton: {
        width: 100,
        height: 60,
        borderRadius: 20,
        backgroundColor: theme.DARK_BLUE_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
      },
      innerCircle: {
        width: 80,
        height: 80,
        borderRadius: 200,
        backgroundColor: 'white',
      },
      captureButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      },
      buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom:100,
      },
      frontCameraPreview: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      backCameraPreview: {
        flex: 1,
        resizeMode: 'contain',
      },
    });
  

        return CameraComponentStyles ;

    }
    export default GetCameraComponentStyles;