// ValidationDialogsStyles.js_Nawodya

import { StyleSheet } from 'react-native';
import Fonts from '../../../styles/Fonts';

export default GetValidationDialogStyles = (theme) => {

  return StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
     
    },
  
    parientView: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(6, 15, 61, 0.93)',
      
    },
  
    upperView: {
      flex: 2,
      justifyContent: 'flex-end',
      alignItems: 'center',
      
  
  
    },
  
    middleView: {
      flex: 1,
      paddingTop: 10,
  
    },
    bottomView: {
  
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'center'
    },
  
  
    validationDialogstitle: {
  
      color: theme.WHITE_COLOR,
      textAlign: 'center',
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      color: theme.DARK_GREEN_COLOR,
      fontFamily: theme.POPPINS_MEDIUM ,
  
    },
  
    validationDialogsmessage: {
  
      color: theme.WHITE_COLOR,
      textAlign: 'center',
      fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
      fontFamily: theme.POPPINS_MEDIUM,
      paddingTop: 25,
  
    },
  
    validationDialogsdiscription: {
  
      color: theme.WHITE_COLOR,
      textAlign: 'center',
      fontSize: theme.FONT_SIZE_HEADER_TWO,
      fontFamily: theme.POPPINS_MEDIUM ,
  
    },
  
    CommonSmallButton:{
      color: theme.WHITE_COLOR,
      textAlign: 'center',
      fontSize: theme.FONT_SIZE_HEADER_ONE,
      fontFamily: Fonts.POPPINS_BOLD,
    }
  
  
  
  });
  
  
}
