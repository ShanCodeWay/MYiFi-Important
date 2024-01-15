// CommonSmallButtonStyles.js

import { StyleSheet } from 'react-native';

const CommonCardButtonStyles = StyleSheet.create({
  buttonContainer: {
    alignContent: "center",
    alignItems: "center",
   
    alignSelf: "center",
    paddingHorizontal: '5%',
    borderRadius: 12,
    // overflow: 'hidden',
    width: "100%",
    height: "100%",

    flexDirection: "row",
    // backgroundColor: "#0000e6"
  },

  buttonOuterContainer: {
    marginVertical: 5,
    justifyContent: "center",
    
  },

  buttonText: {
    color: "white",
    fontSize: 20,

  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  IconOuterStyle: {
    justifyContent: "center",

    alignItems: "center",
    marginRight: 10,
  },
});

export default CommonCardButtonStyles;
