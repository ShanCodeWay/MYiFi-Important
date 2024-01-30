import { StyleSheet } from "react-native";

export default GetLeasingLoanMainScreenStyles = (theme) => {
  return StyleSheet.create({
    topView: {
      marginHorizontal: 20,
      width: "95%",
    },

    twoButtonContainer: {
      alignContent: "center",
      alignItems: "center",
    },
    textContainer: {
      marginTop: 10,
    },

    toperText: {
      fontSize: theme.FONT_SIZE_HEADER_ONE,
      fontFamily: theme.POPPINS_MEDIUM,
      color: theme.BLACK_COLOR,
      fontWeight: "700",
      marginBottom: 10,
    },
    middleText: {
      fontSize: theme.FONT_SIZE_18,
      color: theme.BLACK_COLOR,
      fontWeight: "500",
    },

    middleView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      padding: 20,
    },

    bottomView: {
      height: "10%",
      width: "100%",
    },
    prizeTextContainer: {
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
    },

    image: {
      width: 40,
      height: 40,
    },
    textAndImage: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
    },
  });
};
