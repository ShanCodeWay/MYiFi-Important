import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./RootNavigation.js";
import SplashScreen from "../screens/SplashScreen/SplashScreen.js";
import LoginScreen from "../screens/LoginScreen/LoginScreen.js";
import SignupScreen1 from "../screens/SignupScreens/SignupScreen1";
import SignupScreen2 from "../screens/SignupScreens/SignupScreen2";
import SignupScreen3 from "../screens/SignupScreens/SignupScreen3";
import SignupScreen4 from "../screens/SignupScreens/SignupScreen4";
import SignupScreen5 from "../screens/SignupScreens/SignupScreen5";
import FoundTransferScreen1 from "../screens/FoundTransferScreen/FoundTransferScreen1";

const Stack = createStackNavigator();
//navigationRef - is used to navigation inside the actions
function NavContainer() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen1" component={SignupScreen1} />
        <Stack.Screen name="SignupScreen2" component={SignupScreen2} />
        <Stack.Screen name="SignupScreen3" component={SignupScreen3} />
        <Stack.Screen name="SignupScreen4" component={SignupScreen4} />
        <Stack.Screen name="SignupScreen5" component={SignupScreen5} />
        <Stack.Screen name="FoundTransferScreen1" component={FoundTransferScreen1} />
      
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavContainer;
