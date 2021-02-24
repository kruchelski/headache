import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { bgUnwrap } from '../../assets';
import styles from './styles'

const UnwrapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='cover'
        source={bgUnwrap}
        style={styles.background}
      >
        <View style={styles.overlay} />
          <Text
            style={styles.text}
          >
            Unwrap Screen
          </Text>
      </ImageBackground>
    </View>
  );
}

export default UnwrapScreen;