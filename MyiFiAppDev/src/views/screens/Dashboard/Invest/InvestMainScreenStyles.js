import { StyleSheet } from "react-native";

export default GetInvestMainScreenStyles = (theme) => {
  return StyleSheet.create({

    topTotalInvestContainer: {
      width: "100%",
      //height:40,
      justifyContent: "center",
      alignItems: "flex-start",
    },
    totInvestText: {
      color: theme.DEEP_BLACK_COLOR,
      fontFamily: theme.POPPINS_MEDIUM,
      fontSize: theme.FONT_SIZE_BODY_ONE_MEDIUM,
    },
    cardContainer: {
      width: "100%",
      flex:1,
      justifyContent:'center'
    },
    addContainer: {
      width: "100%",
      flex:1.5,
      justifyContent:'center',
      alignItems:'center'
    },
  });
};
