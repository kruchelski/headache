import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { bgLogin } from '../../assets';
import { useAuth } from '../../hooks';
import styles from './styles'

const HomeScreen = ({ navigation }) => {
  const { authState, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='cover'
        source={bgLogin}
        style={styles.background}
      >
        <View style={{ backgroundColor: '#fefefe08' }} >

          <Text
            style={styles.text}
          >
            Home Screen
          </Text>
          <Text>
            Ola {authState.user.name || 'Pessoa desconhecida'}
          </Text>
          <Button 
            type='solid'
            buttonStyle={{ backgroundColor: 'orange' }}
            title="Logout" onPress={() => handleLogout()} />
        </View>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;