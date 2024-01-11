import { StyleSheet } from "react-native";
import Colors from "../../../styles/Colors";

const DashboardScreenStyles = StyleSheet.create({
  ParentContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  titleBarView: {
    flexDirection: "row",
    width: "95%",

    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  balanceContainerView: {
    flexDirection: "row",
    width: "95%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 20
  },
  easyAccessContainerView: {
    flexDirection: "row",
    width: "95%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 20
  },
  middleContainerView: {


    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainerView: {
    flex: 1,
    width: "100%",
    justifyContent: 'flex-start',
    alignItems: "center",

  },
  greetingView: {
    flex: 1,
    paddingLeft: 20,
  },
  topUpView: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 50,
    backgroundColor: Colors.Blue,
    borderRadius: 10,
    marginRight: 10
  },
  easyAccessIconButtonView: {

    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.LIGHT_Blue,
  }, 
  easyAccessButtonView:{

    alignContent: 'center',
    alignItems: 'center',
    margin: 5
  }
});

export default DashboardScreenStyles;
