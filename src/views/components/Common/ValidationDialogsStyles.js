// ValidationDialogsStyles.js_Nawodya

import { StyleSheet } from 'react-native';

const ValidationDialogsStyles = StyleSheet.create({
    container: {
      flexGrow:1,
      },

      parientView:{
        backgroundColor:'#1B1F52',
        flex:1,
        justifyContent: 'space-between',
        opacity:0.7,

      },
      
      upperView:{
        //backgroundColor:'red',
        flex:2,
        justifyContent: 'flex-end', 
       

      },
      
      middleView:{
       // backgroundColor:'yellow',
        flex:0.8,
        paddingTop:10,
        

      },
      bottomView:{
       //backgroundColor:'green',
        flex:2,
        flexDirection: 'row',
   
        justifyContent: 'center' 
      },


        validationDialogsText1: {
        
            color: 'white', 
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color:'#6DC100'

        },

        validationDialogsText2: {
        
            color: 'white', 
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            paddingTop:25,
            

        },

        validationDialogsdiscription: {
        
            color: 'white', 
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 'bold',
            

        },

        
    
});

export default ValidationDialogsStyles;
