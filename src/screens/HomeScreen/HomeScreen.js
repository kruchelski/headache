import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { bgLogin } from '../../assets';
import { useAuth } from '../../hooks';
import styles from './styles'
import { CustomButton } from '../../components/common';

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
        <Text
          style={styles.text}
        >
          {`What's up ${authState.user.name.split(' ')[0]},`}
        </Text>

        <View
          style={styles.buttonContainer}
        >
          <CustomButton
            type='solid'
            title="UNWRAP"
            level='primary'
            icon='gitlab'
            onPress={() => { navigation.navigate('UnwrapScreen') }}
          />
        </View>

        <View
          style={styles.buttonContainer}
        >
          <CustomButton
            type='outline'
            title="Go to projects"
            level='secondary'
            icon='code-braces'
            onPress={() => { navigation.navigate('RepoScreen') }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;