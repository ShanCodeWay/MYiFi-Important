import { StyleSheet } from "react-native";
import Colors from "../../../../styles/Colors";
import Fonts from "../../../../styles/Fonts";
import { Android_Theme_Light } from "../../../../styles/Themes";

const FingerPrintLoginStyles = StyleSheet.create({
  ModelInnerView: {
    width: "90%",
    height: "50%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: Colors.BLUE_ACCENT,
    flexDirection: "column",
  },

  ModelOuterView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity here
  },
  containerFingerprintIcon: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "space-between",
    justifyContent: 'space-evenly',
  },
});

export default FingerPrintLoginStyles;
