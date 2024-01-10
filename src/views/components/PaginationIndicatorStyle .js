import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";


//Done by: Darshana 24/01/02

const PaginationIndicatorStyles = StyleSheet.create({


  paginationIndicatorContainer:{ 
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',


  },
    paginationIndicator: {
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center', 
        
      },
    
      circle: {
        width: 14,
        height: 14,
        borderRadius: 24,
        marginHorizontal: 2,
      },
    
      activeCircle: {
        backgroundColor: Colors.GRAY_DARK, // Active color
      },
    
      inactiveCircle: {
        backgroundColor: Colors.GRAY, // Inactive color
      },

      titleText:{
        fontFamily:Fonts.POPPINS_BOLD, // Font
        fontSize:26,
        color: Colors.Dark_Blue, //rs.Dar, //'
      }


  });

  export default PaginationIndicatorStyles; 