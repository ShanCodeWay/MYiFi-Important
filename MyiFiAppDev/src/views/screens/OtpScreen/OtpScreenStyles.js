import { StyleSheet } from "react-native";

const OtpScreenStylestyles = StyleSheet.create({
    container: {
      flexGrow: 1,
    },
  
    textOtp: {
      fontSize: 36,
      color: 'black',
      textAlign:"center",
      
    },
  
    enterText: {
      fontSize: 12,
      marginBottom: 10,
      marginTop:12,
      color: 'gray',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
       
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: '#A5B4CB',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    timer: {
  
      fontSize: 16,
      marginTop: 15,
      marginBottom: 10,
      marginLeft: 70,
      color: 'white',
      
     
    
    },
    timerOuter: {
      backgroundColor: "#007BC2",
      width: 150,
      height: 60,
      marginTop: 20,
      borderRadius: 10,
      marginLeft: 90,

   
    },

    resendText: {
      fontSize: 15,
      color: 'black',
      
    },
    

    parientView: {
      flex: 1,
      margin:20
    },
  
    upperView: {
      flex: 1,
      textAlign:"center",

    },
    
    middleView: {
      flex: 2,
 
    },
    bottomView: {
     
      height:130,
      marginHorizontal:80,
      alignItems:"center",
      justifyContent:"center",
     
 
    }
  });
  
  export default OtpScreenStylestyles;