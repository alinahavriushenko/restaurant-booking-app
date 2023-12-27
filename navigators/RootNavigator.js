import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../components/SplashScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('onboardingCompleted');
        if (value !== null) {
          setIsOnboardingCompleted(JSON.parse(value));
        }
        setIsLoading(false);
      } catch (error) {
        console.error('AsyncStorage read error:', error);
        setIsLoading(false);
      }
    };

    checkOnboardingStatus();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
  <Stack.Navigator>
  {isOnboardingCompleted ? (
    <>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </>
  ) : (
    <Stack.Screen name="Onboarding" component={Onboarding} />
  )}
</Stack.Navigator>

  );
};

export default RootNavigator;