import { StyleSheet } from "react-native";
import Fonts from "../../../styles/Fonts";
import Colors from "../../../styles/Colors";

//Done by: Darshana 24/01/10
const TitleBarStyles = StyleSheet.create({



    titleBarContainer: {
        height: 50,
        flexDirection: 'column',
    },

    titleBarItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding: 10,
        height: 50,
    },

    left: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        

    },
    right: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',   

    },

    middle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        

        
    },
      titleText:{
        
        color: Colors.Dark_Blue,
        fontSize:26,
        justifyContent: 'center',
        alignItems: 'center', 
        fontFamily: Fonts.POPPINS_MEDIUM,
      }
    });


export default TitleBarStyles ;