import { StyleSheet } from "react-native";

{/*created by Darshana*/}

const GetCameraComponentStyles = () => {
    
    const CameraComponentStyles = StyleSheet.create({
      container: {
        flex              : 1,
        justifyContent    : 'center',
        alignItems        : 'center',
        position: 'absolute',
       },

      modalContainer: {

        flex: 1,
      backgroundColor: `rgba(143, 197, 255, 1)`,
      
        justifyContent: 'center',
        alignItems: 'center',
      },
      

      cameraContent: {
        //backgroundColor: 'rgba(255, 255, 255, 0.3)',
        height: 400,
       // borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', 
      },
      
      modalContent: {
       // backgroundColor: 'rgba(255, 255, 255, 0.3)',
        //height: 600,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      frontCameraView: {
        //aspectRatio:2/1,
        position          : 'absolute',
        overflow          : 'hidden',
        height            : 400,
        justifyContent    : 'center',
        alignItems        : 'center',
      },
      backCameraView: {
        position          : 'absolute',
        height            : '100%',
        width             : '100%',
        justifyContent    : 'center',
        alignItems        : 'center',
      },
      captureButtonContainer1: {
        flexDirection : 'row',
        position          : 'relative',
        //bottom            : 80,
       zIndex            : 3,
        padding:10,
        width             : 300,
        justifyContent    : 'space-around',
        alignItems        : 'center',
       //backgroundColor   : 'rgba(255, 255, 128, .3)',
      },
   
      
      captureButtonContainer: {
        position          : 'absolute',
        bottom            : 0,
        zIndex            : 2,
       
        justifyContent    : 'center',
        alignItems        : 'center',
        backgroundColor   : 'rgba(0, 0, 0)',
      },

      captureButton: {
        width             : 100,
        height            : 100,
        borderRadius      : 200,
        alignItems        : 'center',
        justifyContent    : 'center',
        marginLeft        : 20,
      },
      retryButton: {
        width             : 100,
        height            : 60,
        borderRadius      : 20,
        alignItems        : 'center',
        justifyContent    : 'center',
        marginLeft        : 20,
      },
      innerCircle: {
        width             : 80,
        height            : 80,
        borderRadius      : 200,
        backgroundColor   : 'white',
      },
      captureButtonText: {
        fontSize          : 18,
        fontWeight        : 'bold',
        color             : 'white',
      },
      buttonsContainer: {
        flexDirection     : 'row',
        justifyContent    : 'center',
        alignItems        : 'center',
        bottom            : 100,
      },
      frontCameraPreview: {
        
      flex                : 1,
      aspectRatio: 3 / 2,
      resizeMode          : 'contain',
    
       justifyContent     : 'center',
        alignItems        : 'center',
      },
      backCameraPreview: {
           
      flex                : 1,
      aspectRatio: 3 / 2,
      resizeMode          : 'contain',
    
       justifyContent     : 'center',
        alignItems        : 'center',
      },
      camerPreview: {
        flex              : 1,
        resizeMode        : 'contain',
        width             : 300,
        height            : 400,
        justifyContent    : 'center',
        alignItems        : 'center',
        position          : 'absolute',
      },
    });
  

        return CameraComponentStyles ;

    }
    export default GetCameraComponentStyles;