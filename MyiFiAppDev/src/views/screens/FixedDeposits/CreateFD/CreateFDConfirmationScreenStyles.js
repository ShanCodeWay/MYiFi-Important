import { StyleSheet } from "react-native";
export default GetCreateFDConfirmationScreenStyles = (theme) => {

return StyleSheet.create({
  outView: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  bottomView: {
    height: 60,
    alignItems: "flex-end",
  },

  title: {
    marginTop: 30,
    fontSize: theme.FONT_SIZE_HEADER_ONE,
    color: theme.DEEP_BLACK_COLOR,
    textAlign: "center",
    fontWeight: "500",
  },

  secondTitle: {
    fontSize: theme.FONT_SIZE_HEADER_TWO_MEDIUM,
    color: theme.LIGHT_BLUE_COLOR,
    textAlign: "center",
    fontFamily: theme.POPPINS_MEDIUM,
  },
  prize: {
    fontSize: theme.FONT_SIZE_30,
    textAlign: "center",
    color: theme.DEEP_BLACK_COLOR,
    fontFamily: theme.POPPINS_MEDIUM,
  },

  logo: {
    marginHorizontal: 10,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "10%",
  },

  MiddleContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

};