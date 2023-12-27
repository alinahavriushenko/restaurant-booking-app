import React, { useState } from 'react';
import { Image, StyleSheet, KeyboardAvoidingView, Text, TextInput, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';


const Onboarding = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const completeOnboarding = async () => {
    if (name.trim() === '' || email.trim() === '') {
      Alert.alert('Missing Information', 'Please enter your name and email to proceed.');
      return;
    }

     try {
    // Store user information in AsyncStorage as strings
    await AsyncStorage.setItem('name', name);
    await AsyncStorage.setItem('email', email);
    // Store onboarding completion status in AsyncStorage
    await AsyncStorage.setItem('onboardingCompleted', 'true');
    // Navigate to the Profile screen with user data
    navigation.navigate("Profile", {
                    name: name,
                    email: email,
                  })
  } catch (error) {
    console.error('AsyncStorage write error:', error);
    // Handle error if needed
    Alert.alert('Error', 'There was an issue completing the onboarding process.');
  }
};

  

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/img/Logo.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />

      <Text style={styles.headerText}>Let us get to know you</Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder={'Type your email'}
      />
      <TextInput
        style={styles.inputBox}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="First Name"
        clearButtonMode="always"
      />
      <Button onPress={completeOnboarding}>Next</Button>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 100,
    backgroundColor: '#DEE3E9',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#CBD2D9',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
});

export default Onboarding;
