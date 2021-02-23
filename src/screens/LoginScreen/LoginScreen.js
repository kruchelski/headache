import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { bgLogin } from '../../assets';
import { useAuth } from '../../hooks';
import styles from './styles'

const LoginScreen = ({ navigation }) => {
  const { login, logout, authErrorHandler, authState } = useAuth()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={ styles.container }>
      <ImageBackground
        resizeMode='cover'
        source={ bgLogin }
        style={ styles.background }
      >
        <Text
          style={ styles.text }
        >
          Login Screen
      </Text>
      </ImageBackground>
    </View>
  );
}

export default LoginScreen;