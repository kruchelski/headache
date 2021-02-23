import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { bgLogin } from '../../assets';
import { useAuth } from '../../hooks';
import styles from './styles'

const HomeScreen = ({ navigation }) => {
  const { authState } = useAuth();
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
          Home Screen
      </Text>
      <Text>
        Ola {authState.user.name || 'Pessoa desconhecida'}
      </Text>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;