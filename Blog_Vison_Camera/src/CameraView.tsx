//*****Please  install the following dependencies before running this project
//npm install  react-native-vision-camera react-native-linear-gradient     **********


import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CameraIcon from './CameraComponent/Icon_Camera.svg';

type Props                          = {  }

const CameraView: React.FC <Props>=()=>{





return (
      <SafeAreaView style           = {{ flex: 1, backgroundColor: '#fff' }}>

        
         <LinearGradient
                  colors            = {['#c7fff4', '#fffaeb', '#ffffff']}
                  style             = {styles.mainContainer}>

        <View style                 = {styles.container}>
          <View style               = {styles.header}>
            <Text style             = {styles.title}>Camera Component</Text>
            <Text style             = {styles.subtitle}>react-native-vision-camera</Text>
          </View>

          <View style               = {styles.middle}>
          
                                          
            <View style             = {styles.buttonContainer}>

            <View style             = {styles.button}>  
              <TouchableOpacity >
                <LinearGradient
                  colors            = {['#4c669f', '#3b5998', '#192f6a']}
                  
                  style             = {styles.btn}
                >
                  <Text style       = {styles.btnText}>FRONT-CAM</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>


            <View style             = {styles.button}> 
              <TouchableOpacity>  
              <LinearGradient
                      angle         = {70}
                      useAngle      = {true}
                      start         = {{ x: 0, y: 0 }}
                      end           = {{ x: 1, y: 1 }}
                      colors        = {["#0044A9", "#2769C5", "#4384DA", "#5E9EEE", "#75B4FF"]}
                      style         = {styles.btn}>
                      <Text style   = {styles.btnText}>BACK-CAM</Text>
                     
                    </LinearGradient>
              </TouchableOpacity>
            </View>
            </View>
           </View>
           <Image source={{uri : 'https://raw.githubusercontent.com/ShanCodeWay/ShanCodeWay/main/linkdean.png',
          }} style  = {styles.banner}
          resizeMode= "contain"

        />
           </View>


{/*         
        <Camera/> */}

        </LinearGradient>
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    
  },
  container:{
    //backgroundColor:'rgba(52, 52, 52, 0.3)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle:{
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    flex: 1,
    width:'90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    
  },
  buttonContainer:{
    width:'90%',
    backgroundColor:'rgba(150, 80, 52, 0.3)',
    height:'70%',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding:20,
    borderRadius: 20,
    
  },
  button:{
        width:'100%',
        height:59,
        justifyContent: 'center',
        // backgroundColor:'rgba(52, 52, 52, 0.3)',
        // padding:20,
        // borderRadius: 20,
       
        
        
  },





  header: {
    marginVertical                  : 36,
  },
  title: {
    fontFamily                      : 'Poppins',
    fontSize                        : 42,
    fontWeight                      : 'bold',
    color                           : '#001f33',
    marginBottom                    : 6,
    textAlign                       : 'center',
  },
  subtitle: {
    fontFamily                      : 'Poppins',
    fontSize                        : 20,
    fontWeight                      : 'bold',
    color                           : '#929292',
    textAlign                       : 'center',
  },
 
 
 
 
  /** Button */
  btn: {
    width : "100%",
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 8,
    paddingVertical : 8,
   
  },

  btnText: {
    fontSize                        : 17,
    lineHeight                      : 24,
    fontWeight                      : '600',
    color                           : '#fff',
  },

  banner: {
    width                           : '100%',
    height                          : 300,
    
  },
});
export default CameraView;