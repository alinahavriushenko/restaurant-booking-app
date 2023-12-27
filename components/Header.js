import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Header = ({ avatarUri }) => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity onPress={goToProfile}>
        <Image
          source={{ uri: avatarUri }}
          style={styles.avatar}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 5,
  },
  logo: {
    width: 120,
    height: 40,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;
