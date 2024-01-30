import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./RootNavigation.js";
import Index from "../../configs/Index";

 {/*SPLASH Screen */ }
import SplashScreen from "../screens/SplashScreen/SplashScreen.js";
 {/*LOGIN Screen */ }
import LoginScreen from "../screens/Login/LoginScreen.js";
 {/*SIGNUP Screens */ }
import Signup_UsernameScreen from "../screens/SignUp/Signup_UsernameScreen.js";
import Signup_PasswordScreen from "../screens/SignUp/Signup_PasswordScreen.js";
import Signup_OtpScreen from "../screens/SignUp/Signup_OtpScreen.js";
import SignupScreen4 from "../screens/SignupScreens/SignupScreen4/SignupScreen4.js";
 {/*FUNDTRANSFER Screens*/}
import FundTransferScreen1 from "../screens/FundTransferScreens/FundTransferScreen1/FundTransferScreen1";
import TransferReceiptScreen from "../screens/FundTransferScreens/TransferReceipt/TransferReceiptScreen";
import TransferReceiptSuccessScreen from "../screens/FundTransferScreens/TransferReceiptSuccessScreen/TransferReceiptSuccessScreen";
import FundTransferOTPScreen from "../screens/FundTransferScreens/FundTransferOTPScreen/FundTransferOTPScreen.js"; 
{/*DASHBOARD Screen */ }
import DashboardScreen from "../screens/DashboardScreen/DashboardScreen.js";
import InvestMainScreen from "../screens/DashboardScreen/Invest/InvestMainScreen.js";
 {/*KYC Screens */ }
import KYC1Screen from "../screens/KYCScreens/KYC1Screen/KYC1Screen.js";
import KYC2Screen from "../screens/KYCScreens/KYC2Screen/KYC2Screen.js";
import KYC3Screen from "../screens/KYCScreens/KYC3Screens/KYC3Screen.js";
import KYC3Screen2 from "../screens/KYCScreens/KYC3Screens/KYC3Screen2.js";
import KYC4Screen from "../screens/KYCScreens/KYC4Screen/KYC4Screen.js";
import KYC5Screen from "../screens/KYCScreens/KYC5Screen/KYC5Screen.js";
import KYC6Screen from "../screens/KYCScreens/KYC6Screen/KYC6Screen.js";
import FixedDepositsScreen from "../screens/FixedDeposits/FixedDepositsScreen.js";
import FixedDepositsViewScreen from "../screens/FixedDeposits/FixedDepositsViewScreen/FixedDepositsViewScreen.js";
{/*Bill Payment Screens */ }
import BillPayment from "../screens/BillPaymentScreens/BillPayment/BillPayment";
import BillerManagementScreen from "../screens/BillerManagementScreen/BillerManagementScreen.js";
{/*Make a Payment Screen*/}
import MakeAPayementScreen from "../screens/MakeAPayementScreens/MakeAPayementScreen.js";
import MakeAPaymentViewScreen from "../screens/MakeAPayementScreens/MakeAPaymentViewScreen/MakeAPaymentViewScreen.js";
import MakeAPaymentOtpScreen from "../screens/MakeAPayementScreens/MakeAPaymentOtpScreen/MakeAPaymentOtpScreen.js";
import MakeAPaymentSuccessfulScreen from "../screens/MakeAPayementScreens/MakeAPaymentSuccessfulScreen/MakeAPaymentSuccessfulScreen.js";
import LeasingLoanMainScreen from "../screens/DashboardScreen/LeasingLoan/LeasingLoanMainScreen.js";
import AddNewBillerScreen from "../screens/BillerManagementScreen/AddNewBillerScreen.js";
import WelcomeScreen from "../screens/KYCScreens/WelcomeScreen/WelcomeScreen.js";

{ /*LEASING LOAN SCREEN */ }
import LeasingLoanScreen from "../screens/LeasingLoansScreen/LeasingLoanScreen.js";
import LeasingLoanViewScreen from "../screens/LeasingLoansScreen/LeasingLoanViewScreen/LeasingLoanViewScreen.js";


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
        {/*SPLASH Screen */ }
        <Stack.Screen name="SplashScreen"   component={SplashScreen} />

        {/*LOGIN Screen */ }
        <Stack.Screen name="LoginScreen"    component={LoginScreen} />

        {/*SIGNUP Screens */ }
        <Stack.Screen name={Index.SIGNUP_1} component={Signup_UsernameScreen} />
        <Stack.Screen name={Index.SIGNUP_2} component={Signup_PasswordScreen} />
        <Stack.Screen name={Index.SIGNUP_3} component={Signup_OtpScreen} />
        <Stack.Screen name={Index.SIGNUP_4} component={SignupScreen4} />

        {/*FUNDTRANSFER Screens */ }
        <Stack.Screen name={Index.FUND_1}   component={FundTransferScreen1} />
        <Stack.Screen name={Index.TRS_1}    component={TransferReceiptScreen} />
        <Stack.Screen name={Index.TRS_2}    component={TransferReceiptSuccessScreen} />
        <Stack.Screen name={Index.FUND_OTP} component={FundTransferOTPScreen} />

        {/*DASHBOARD Screens */ }
        <Stack.Screen name="DashboardScreen"component={DashboardScreen} />
        <Stack.Screen name="InvestMainScreen"component={InvestMainScreen} />
        <Stack.Screen name="LeasingLoanMainScreen"component={LeasingLoanMainScreen} />

        {/*KYC Screens */ }
        <Stack.Screen name="WelcomeScreen"     component={WelcomeScreen} />
        <Stack.Screen name="KYC1Screen"     component={KYC1Screen} />
        <Stack.Screen name="KYC2Screen"     component={KYC2Screen} />
        <Stack.Screen name="KYC3Screen"     component={KYC3Screen} />
        <Stack.Screen name="KYC3Screen2"    component={KYC3Screen2} />
        <Stack.Screen name="KYC4Screen"     component={KYC4Screen} />
        <Stack.Screen name="KYC5Screen"     component={KYC5Screen} />
        <Stack.Screen name="KYC6Screen"     component={KYC6Screen} />


        {/* Fixed Doposit Screens */}
        <Stack.Screen name="FixedDepositsScreen"     component={FixedDepositsScreen} />
        <Stack.Screen name="FixedDepositsViewScreen"     component={FixedDepositsViewScreen} />

        {/*Bill Payement Screens */ }
        <Stack.Screen name={Index.BILL_1}   component={BillPayment}/>

        {/* BillerManagementScreen */}
        <Stack.Screen name="BillerManagementScreen"     component={BillerManagementScreen} />

        {/*Make a Payment Screen*/}
         <Stack.Screen name="MakeAPayementScreen" component={MakeAPayementScreen}/>
         <Stack.Screen name="MakeAPaymentViewScreen" component={MakeAPaymentViewScreen} />
         <Stack.Screen name="MakeAPaymentOtpScreen" component={MakeAPaymentOtpScreen} />
         <Stack.Screen name="MakeAPaymentSuccessfulScreen" component={MakeAPaymentSuccessfulScreen} />

        <Stack.Screen name="AddNewBillerScreen"     component={AddNewBillerScreen} />

        
        {/* Lease/Loan Screens */}
        <Stack.Screen name="LeasingLoanScreen"component={LeasingLoanScreen} />
        <Stack.Screen name="LeasingLoanViewScreen"component={LeasingLoanViewScreen} />
   
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavContainer;
