import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './screens/Onboarding';
import RootNavigator from './navigators/RootNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '../context/AuthContext';



export default function App() {
  return (
        <AuthProvider>

    <NavigationContainer style={styles.container}>
      <RootNavigator />
    </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
