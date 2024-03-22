import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'react-native';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

const checkBiometrics = async () => {
  try {
    const rnBiometrics = new ReactNativeBiometrics();
    const { available, biometryType, error } = await rnBiometrics.isSensorAvailable();

    if (error) {
      console.error('Error1:', error);
      return;
    }

    if (available && (biometryType === BiometryTypes.TouchID || biometryType === BiometryTypes.FaceID || biometryType === BiometryTypes.Biometrics)) {
      return true && console.log('[checkBiometrics] Biometrics Type ',biometryType );
    } else {
      console.log('[checkBiometrics] Biometrics not supported');
      return false;
    }
  } catch (error) {
    console.error('[checkBiometrics] Error:', error);
    return false;
  }
};

export const authenticate = async () => {
  try {
    const biometricsSupported = await checkBiometrics();
    
    // if (!biometricsSupported) {
    //   console.log('[authenticate] -Biometrics not supported');
    //   return false;
    // }

    const rnBiometrics = new ReactNativeBiometrics();
    const { success, error } = await rnBiometrics.simplePrompt({ promptMessage: 'Authenticate to continue' });

    if (success) {
      Alert.alert( 'Success', 'Biometric authentication successful');
      return true;
    } else {
      Alert.alert('Authentication failed', 'Biometric authentication failed');
      return false;
    }
  } catch (error) {
    console.error('[authenticate] Error:', error);
    Alert.alert('Error', 'Biometric authentication failed from device');
    return false;
  }
};


const Bio: React.FC = () => {
  useEffect(() => {
    authenticate();
  }, []);

  return (1); 
};

export default Bio;
