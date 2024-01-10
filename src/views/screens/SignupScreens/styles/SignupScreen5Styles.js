import { StyleSheet } from "react-native";
import Colors from "../../../../styles/Colors";
import Fonts from "../../../../styles/Fonts";


//Done by: Darshana 24/01/02

const SignupScreenStyles5 = StyleSheet.create({

              
    topView: {
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        width: '100%', 
        marginTop: -20,
    },  
    
    middleView: {
    
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop:20,
        width: '100%', 
    },

    bottomView: {
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },    
    
    titleView: {
        
        width: '80%',
        justifyContent: "center",
        alignItems: "center",  
        },            
    
    mainTitle: {
                fontFamily:Fonts.POPPINS_SEMIBOLD,
                fontSize:15,
                color:Colors.Dark_Blue,
                justifyContent: "center",
                alignItems: "center",
                textAlign: 'center', 
                width: '100%', 
    },

    secondTitle:{
        fontFamily:Fonts.POPPINS_REGULAR,
        fontSize:35,
        color: Colors.GRAY_DARK,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center', 
        width: '100%', 

    },

    inputView: {
        
        width: '80%',
        
        

    },

    button:{
        marginTop: 0,
        width: 150,

    }
        ,
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
        
    }

    
});

export default SignupScreenStyles5;