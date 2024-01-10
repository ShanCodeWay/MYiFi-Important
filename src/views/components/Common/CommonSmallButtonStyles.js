// CommonSmallButtonStyles.js

import { StyleSheet } from 'react-native';

const CommonSmallButtonStyles = StyleSheet.create({
    buttonContainer: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 12,
        // overflow: 'hidden',
     width: '100%',
     height: 50,
      
        flexDirection: 'row',
        // backgroundColor: "#0000e6"
    },

    buttonOuterContainer:{
      
  
        height: 60,
        justifyContent: 'center',
        paddingHorizontal: 5
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
     
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },


  


        
  IconOuterStyle: {
    justifyContent: "center",
    

    alignItems: "center",
    marginRight: 10,
  },

});

export default CommonSmallButtonStyles;
