import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./RootNavigation.js";
import Index from "../../configs/Index";
//import DrawerNavigator from "../screens/Dashboard/drawer/DrawerNavigator.js";

 {/*SPLASH Screen */ }
import SplashScreen from "../screens/SplashScreen/SplashScreen.js";
 {/*LOGIN Screen */ }
import LoginScreen from "../screens/Login/LoginScreen.js";

 {/*SIGNUP Screens */ }
import Signup_UsernameScreen from "../screens/SignUp/Signup_UsernameScreen.js";
import Signup_PasswordScreen from "../screens/SignUp/Signup_PasswordScreen.js";
import Signup_OtpScreen from "../screens/SignUp/Signup_OtpScreen.js";
import Signup_SuccessScreen from "../screens/SignUp/Signup_SuccessScreen.js";

 {/*FUNDTRANSFER Screens*/}
import FTScreen from "../screens/FundTransfer/FTScreen/FTScreen.js";
import FundTransferConfirmationScreen from "../screens/FundTransferScreens/FundTransferConfirmationScreen/FundTransferConfirmationScreen.js";
import FundTransferSuccessScreen from '../screens/FundTransferScreens/FundTransferSuccessScreen/FundTransferSuccessScreen.js';
import FundTransferOTPScreen from "../screens/FundTransferScreens/FundTransferOTPScreen/FundTransferOTPScreen.js"; 
{/*DASHBOARD Screen */ }
import DashboardScreen from "../screens/DashboardScreen/DashboardScreen.js";
import InvestMainScreen from "../screens/DashboardScreen/Invest/InvestMainScreen.js";
 {/*KYC Screens */ }
import KYC1Screen from "../screens/KYCScreens/KYC1Screen/KYC1Screen.js";
import KYC2Screen from "../screens/KYCScreens/KYC2Screen/KYC2Screen.js";
import KYC3Screen from "../screens/KYCScreens/KYC3Screen/KYC3Screen.js";
import KYC4Screen from "../screens/KYCScreens/KYC4Screen/KYC4Screen.js";
import KYC5Screen from "../screens/KYCScreens/KYC5Screen/KYC5Screen.js";
import KYC6Screen from "../screens/KYCScreens/KYC6Screen/KYC6Screen.js";
import KYCOtpScreen from "../screens/KYCScreens/KYCOtpScreen/KYCOtpScreen.js";
import KYCSuccessfulScreen from "../screens/KYCScreens/KYCSuccessfulScreen/KYCSuccessfulScreen.js";
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
import BillPaymentTransferReceiptScreen from "../screens/BillPaymentScreens/BillPaymentTransferReceipt/BillPaymentTransferReceiptScreen.js";
import BillPayementOTPScreen from "../screens/BillPaymentScreens/BillPaymentOTPScreen/BillPaymentOTPScreen.js";

{ /*LEASING LOAN SCREEN */ }
import LeasingLoanScreen from "../screens/LeasingLoansScreen/LeasingLoanScreen.js";
import LeasingLoanViewScreen from "../screens/LeasingLoansScreen/LeasingLoanViewScreen/LeasingLoanViewScreen.js";

{ /*Setting SCREEN */ }
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen/SettingsScreen.js";
import ResetPasswordScreen from "../screens/SettingsScreen/ResetPasswordScreen/ResetPasswordScreen";
import ResetPasswordOTPScreen from "../screens/SettingsScreen/ResetPasswordOTP/ResetPasswordOTPScreen.js";
import ResetPasswordSucessScreen from "../screens/SettingsScreen/ResetPasswordSucess/ResetPasswordSucessScreen.js";
{/*Welcome Screen*/ } 
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen.js";
import BillPaymentTransferReceiptSuccessScreen from "../screens/BillPaymentScreens/BillPaymentTransferReceiptSuccessScreen/BillPaymentTransferReceiptSuccessScreen.js";

{/* Merchant Payment Screen */}
import MerchantPaymentScreen from "../screens/MerchantPayment/MerchantPaymentScreen.js";
import NotificationsCentreScreen from "../screens/NotificationsCentre/NotificationsCentreScreen.js";
import NotificationsPage from "../screens/NotificationsCentre/NotificationsPage.js";
{/* QR Payment Screen */}
import QR_PaymentScreen from "../screens/QR_Payment/QR_PaymentScreen.js";
import QR_PaymentSuccessScreen from "../screens/QR_Payment/QR_PaymentSuccessScreen.js";

{/* Forgot Password Screen */}
import ForgotPasswordScreen from "../screens/ForgotPassword/ForgotPasswordScreen.js";
import Confirmation_Screen from "../screens/ForgotPassword/Confirmation_Screen.js";
import Success_Screen from "../screens/ForgotPassword/Success_Screen.js";



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
        <Stack.Screen name={Index.LOGIN_SCREEN}    component={LoginScreen} />

        {/*SIGNUP Screens */ }
        <Stack.Screen name={Index.SIGNUP_1} component={Signup_UsernameScreen} />
        <Stack.Screen name={Index.SIGNUP_2} component={Signup_PasswordScreen} />
        <Stack.Screen name={Index.SIGNUP_3} component={Signup_OtpScreen} />
        <Stack.Screen name={Index.SIGNUP_4} component={Signup_SuccessScreen} />

        {/*FUNDTRANSFER Screens */ }
        <Stack.Screen name={Index.FUND_1}   component={FTScreen} />
        <Stack.Screen name={Index.TRS_1}    component={FundTransferConfirmationScreen} />
        <Stack.Screen name={Index.TRS_2}    component={FundTransferSuccessScreen} />
        <Stack.Screen name={Index.FUND_OTP} component={FundTransferOTPScreen} />

        {/*DASHBOARD Screens */ }
        <Stack.Screen name="DashboardScreen"component={DashboardScreen} 
        /*children={DrawerNavigator}*//>
        <Stack.Screen name="InvestMainScreen"component={InvestMainScreen} />
        <Stack.Screen name="LeasingLoanMainScreen"component={LeasingLoanMainScreen} />
        <Stack.Screen name="NotificationsCentreScreen" component={NotificationsCentreScreen} />
        <Stack.Screen name="NotificationsPage" component={NotificationsPage} />


        {/*KYC Screens */ }
        <Stack.Screen name="WelcomeScreen"     component={WelcomeScreen} />
        <Stack.Screen name="KYC1Screen"     component={KYC1Screen} />
        <Stack.Screen name="KYC2Screen"     component={KYC2Screen} />
        <Stack.Screen name="KYC3Screen"     component={KYC3Screen} />
        <Stack.Screen name="KYC4Screen"     component={KYC4Screen} />
        <Stack.Screen name="KYC5Screen"     component={KYC5Screen} />
        <Stack.Screen name="KYC6Screen"     component={KYC6Screen} />
        <Stack.Screen name="KYCOtpScreen"     component={KYCOtpScreen} />
        <Stack.Screen name="KYCSuccessfulScreen"     component={KYCSuccessfulScreen} />


        {/* Fixed Doposit Screens */}
        <Stack.Screen name="FixedDepositsScreen"     component={FixedDepositsScreen} />
        <Stack.Screen name="FixedDepositsViewScreen"     component={FixedDepositsViewScreen} />

        {/*Bill Payement Screens */ }
        <Stack.Screen name={Index.BILL_1}   component={BillPayment}/>
        <Stack.Screen name="BillPaymentTransferReceiptScreen"   component={BillPaymentTransferReceiptScreen}/>
        <Stack.Screen name="BillPaymentOTPScreen"   component={BillPayementOTPScreen}/>
                <Stack.Screen name="BillPaymentTransferReceiptSuccessScreen"   component={BillPaymentTransferReceiptSuccessScreen}/>


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
        
        {/* Settings Screens */}
        <Stack.Screen name={Index.SETT_1}        component={SettingsScreen} />
        <Stack.Screen name={Index.RESTPASSWORD}  component={ResetPasswordScreen} />
        <Stack.Screen name={Index.RESTOTP}       component={ResetPasswordOTPScreen} />
        <Stack.Screen name={Index.RESTSUC}   component={ResetPasswordSucessScreen} />

        {/* QR Payment Screen */}
        <Stack.Screen name="QR_PaymentScreen"     component={QR_PaymentScreen} />
        <Stack.Screen name="QR_PaymentSuccessScreen"     component={QR_PaymentSuccessScreen} />

        {/* Forgot Password Screen */}
        <Stack.Screen name="ForgotPasswordScreen"     component={ForgotPasswordScreen} />
        <Stack.Screen name="Confirmation_Screen"     component={Confirmation_Screen} />
        <Stack.Screen name="Success_Screen"     component={Success_Screen} />
   
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavContainer;
