import { StyleSheet } from "react-native";
import Colors from "../../../../styles/Colors";
import Fonts from "../../../../styles/Fonts";
import { elevate } from "react-native-elevation"
//Done by: Darshana 24/01/02

const FundTransferScreenStyles1 = StyleSheet.create({
           
    topView: {
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        width: '100%', 
        marginTop: -20,
    },  
    
    middleView: {
       flex: 1,
       elevation:10,
       marginLeft: 20,
       marginRight: 20,
       
       
    },

    bottomView: {
        height: 140,
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
                color: Colors.Dark_Blue,
                justifyContent: "center",
                alignItems: "center",
                textAlign: 'center', 
                width: '100%', 
    },

    secondTitle:{
        fontFamily:Fonts.POPPINS_MEDIUM,
        fontSize:20,
        color: Colors.GRAY_DARK,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center', 
        width: '100%', 

    },

    inputView: {
        flex: 5,
        width: '80%',
        
        

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
        
    },

    inputContainer: {
        marginTop: 20,
        borderWidth: 3,
        borderRadius: 10,
        height: 70
      },
      input: {
        height: 70,
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        paddingRight: 15
      },
      Button: {
        flexDirection: 'row',

    },

    bottomView1: {

        flexDirection: 'row',
        width: '80%',
        
        justifyContent: 'space-between',
    },    
    bottomView2: {
        
        width: '40%',
        justifyContent: "center",
    },  
    
    bottomView3: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 40,
        marginRight: 40,
    }, 


    stayElevated: {
        
        marginTop: 10,
        paddingBottom: 5,
        backgroundColor: Colors.BLUE_ACCENT,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 10,
        padding:10,
      },

      titleText: {
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.Dark_Blue,
        fontSize: 14,
        
  
        },  

    

bankView:{
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    marginRight: 5,
    

},

});

export default FundTransferScreenStyles1;