// ValidationDialogsStyles.js_Nawodya

import { StyleSheet } from 'react-native';
import Fonts from '../../../styles/Fonts';

const ValidationDialogsStyles = StyleSheet.create({
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
    backgroundColor: '#1B1F52D5',
    
  },

  upperView: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    


  },

  middleView: {
    flex: 0.8,
    paddingTop: 10,

  },
  bottomView: {

    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center'
  },


  validationDialogstitle: {

    color: 'white',
    textAlign: 'center',
    fontSize: 36,
    color: '#6DC100',
    fontFamily: Fonts.POPPINS_BOLD,

  },

  validationDialogsmessage: {

    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: Fonts.POPPINS_BOLD,
    paddingTop: 25,

  },

  validationDialogsdiscription: {

    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: Fonts.POPPINS_BOLD,

  },

  CommonSmallButton:{
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: Fonts.POPPINS_BOLD,
  }



});

export default ValidationDialogsStyles;
