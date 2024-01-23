import { StyleSheet } from "react-native";
import { Android_Theme_Light } from "../../../../styles/Themes";

export default GetCommonSummeryViewStyles = (theme) => {
  return StyleSheet.create({

SummerySingleViewContainer: {
    width: "50%",
    height: 80,
},
LabelContainer:{
    flex: 1, justifyContent: "flex-end"
},
TextLabel:{
    paddingLeft: 10,
    fontSize: Android_Theme_Light.FONT_SIZE_SMALL,
    fontFamily: Android_Theme_Light.POPPINS_REGULAR,
    color: Android_Theme_Light.DARK_GRAY_COLOR,

},
HorizontalDevider:{
    flexDirection: "row",
    height: 1,
    width: "100%",
    backgroundColor: Android_Theme_Light.DARK_GRAY_COLOR,  
},
ValueContainer:{
    flex: 1, 
},
TextValue:{
    paddingLeft: 10,
    fontSize: Android_Theme_Light.FONT_SIZE_LARGE,
    fontFamily: Android_Theme_Light.POPPINS_MEDIUM,
    color: Android_Theme_Light.DEEP_BLACK_COLOR,
}


  });
};
