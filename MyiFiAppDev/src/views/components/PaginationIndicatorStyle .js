import { StyleSheet } from "react-native";

import {
  Android_Theme_Light,
  Android_Theme_Dark,
} from "../../styles/Themes";

//Done by: Darshana 24/01/02
export default GetPaginationIndicatorStyles = (theme) => {

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
        backgroundColor: theme.DARK_GRAY_COLOR, // Active color
      },
    
      inactiveCircle: {
        backgroundColor:theme.GRAY_COLOR, // Inactive color
      },

      titleText:{
        fontFamily:theme.POPPINS_BOLD, // Font
        fontSize:theme.FONT_SIZE_HEADER_ONE,
        color:theme.DARK_BLUE_COLOR, //rs.Dar, //'
      }



  });

  return PaginationIndicatorStyles;
}
