import { StyleSheet } from "react-native";
import Colors from "../../../../styles/Colors";
import Fonts from "../../../../styles/Fonts";
import {Android_Theme_Dark} from "../../../../styles/Themes";


export const GetSignupScreenStyles4 = (theme) => {
//Done by: Darshana 24/01/02

const SignupScreenStyles4 = StyleSheet.create({
            
    topView: {
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        width: '100%', 
        marginTop: -20,
    },  
    
    middleView: {
    
        flex: 1,
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
                fontSize:40,
                color:Colors.Dark_Blue,
                justifyContent: "center",
                alignItems: "center",
                textAlign: 'center', 
                width: '100%', 
    },

    secondTitle:{
        fontFamily:Fonts.POPPINS_MEDIUM,
        fontSize:18,
        color: Colors.Dark_Blue,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center', 
        paddingBottom: 30,

    },

    secondTitle1:{
        fontFamily:Fonts.POPPINS_MEDIUM,
        fontSize:18,
        color: Colors.Dark_Blue,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center', 
        marginLeft:100,
        marginRight:100,
        paddingTop: 30,

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

return SignupScreenStyles4;
}