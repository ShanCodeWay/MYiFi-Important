// ValidationDialogsStyles.js_Nawodya

import { StyleSheet } from 'react-native';

const ValidationDialogsStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },

  parientView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#1B1F52D9',
  },

  upperView: {
    flex: 2,
    justifyContent: 'flex-end',


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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6DC100'

  },

  validationDialogsmessage: {

    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 25,

  },

  validationDialogsdiscription: {

    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',

  },



});

export default ValidationDialogsStyles;
