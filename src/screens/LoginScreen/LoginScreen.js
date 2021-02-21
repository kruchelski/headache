import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { bgLogin } from '../../assets';
import styles from './styles'

const LoginScreen = ({ navigation }) => {
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