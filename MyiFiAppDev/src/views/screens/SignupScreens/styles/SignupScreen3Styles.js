import { StyleSheet } from "react-native";
import Colors from "../../../../styles/Colors";
import Fonts from "../../../../styles/Fonts";
import {Android_Theme_Dark} from "../../../../styles/Themes";


export const GetSignupScreenStyles3 = (theme) => {
//Done by: Darshana 24/01/02

const SignupScreenStyles3 = StyleSheet.create({
                
    topView: {
        height: 150,
        width: '100%',   
    },  
    
    middleView: {
    
        flex: 1,
        marginLeft:30,
        marginRight:30,
        justifyContent: "center",
        alignItems: "center",
        
     
        
    },

    bottomView: {
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },    
    
    titleView: {
        
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
       
        },            
    
    mainTitle: {
                fontFamily:Fonts.POPPINS_SEMIBOLD,
                fontSize:30,
                color:Colors.Dark_Blue,
                justifyContent: "center",
                alignItems: "center",
                textAlign: 'center', 
                width: '70%', 
    },

    secondTitle:{
        fontFamily:Fonts.POPPINS_MEDIUM,
        fontSize:20,
        color: Colors.GRAY_DARK,
        fontSize: 18,
        marginBottom: 10,
        marginTop:12,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft:10,
        marginRight:10,
        

    },

    logoIcon:{
        height: 100,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",

    },

    logo:{
        flexDirection: 'row',
        marginLeft: 20,
        fontSize: 20,


    },

    KeyboardAvoidingView:{
        flexGrowl: 1,
        
    },
    textOtp: {
        fontSize: 36,
        color: 'black',
        textAlign:"center",
        
      },
    
      enterText: {
      
         
      },
      input: {
       
      },
      timer: {
    
        fontSize: 16,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        color: 'white',
        
       
      
      },
      timerOuter: {
        backgroundColor: "#007BC2",
        width: 150,
        height: 60,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
  
     
      },
  
      resendText: {
        fontSize: 15,
        color: 'black',
        
      },
      

});

return SignupScreenStyles3;
}