import React, { useState } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { bgLogin, logo } from '../../assets';
import { useAuth } from '../../hooks';
import { Input, Button } from 'react-native-elements';
import { CustomButton, CustomInput } from '../../components/common';
import styles from './styles'

const LoginScreen = ({ navigation }) => {
  const { login, authErrorHandler, authState } = useAuth()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await login(username, password);
    } catch (err) {
      setLoading(false);
      authErrorHandler(err, 'An unexpected error happened trying to Sign In');
    } 
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='cover'
        source={bgLogin}
        style={styles.background}
      >
        <View style={styles.logoImageContainer}>
          <Image source={logo} style={styles.logoImage} />
        </View>
        <View style={styles.formContainer}>
          <CustomInput
            level='primary'
            icon='account'
            label='Username'
            placeholder='Type your GitLab username'
            value={username}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(text) => setUsername(text)}
          />
          <CustomInput
            level='primary'
            icon='key'
            label='Password'
            placeholder='Type your GitLab password'
            value={password}
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <CustomButton
            loading={loading}
            type='solid'
            title="Login"
            level='primary'
            icon='login'
            onPress={() => { handleLogin() }} />
          {
            !!authState.error &&
            <View>
              <Text style={{ color: 'red' }}>
                Ocorreu um erro
						</Text>
              <Text>
                {authState.error}
              </Text>
            </View>
          }
        </View>
      </ImageBackground>
    </View>
  )
}

export default LoginScreen;