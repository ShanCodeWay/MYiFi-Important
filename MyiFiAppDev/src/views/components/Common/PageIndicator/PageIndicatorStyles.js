import { StyleSheet } from "react-native";


export default GetPageIndicatorStyles = (theme) => {

  const PageIndicatorStyles = StyleSheet.create({

    parentContainer:{ 
      width:'100%',
      justifyContent:'center',
      alignItems: 'center',
    },

    circleContainer:{ 
      width:'100%',
      justifyContent:'center',
      alignItems: 'center',
      flexDirection: 'row',
    },

    indicatorText:{
      marginTop:10,
      fontFamily:theme.POPPINS_BOLD, // Font
      fontSize:theme.FONT_SIZE_15,
      color:theme.DARK_BLUE_COLOR, //rs.Dar, //'
    },

    circleIndicator: {
      width: 15,
      height: 15,
      borderRadius: 15/2,
      marginHorizontal: 2,
      //backgroundColor:theme.GRAY_COLOR, // Inactive color
    },
      
  });

  return PageIndicatorStyles;
}
