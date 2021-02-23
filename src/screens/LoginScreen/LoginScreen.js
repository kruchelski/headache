import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { bgLogin } from '../../assets';
import { useAuth } from '../../hooks';
import { Input, Button } from 'react-native-elements';
import styles from './styles'

const LoginScreen = ({ navigation }) => {
  const { login, authErrorHandler, authState } = useAuth()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(username, password);
    } catch (err) {
      console.log('Ocorreu um erro no login');
      console.log(err);
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
        <View style={{ backgroundColor: '#eeeeee55' }}>
          <Text>Login</Text>
          <Input 
            placeholder='Username'
            value={username}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(text) => setUsername(text)}
          />
          <Input 
            placeholder='Password'
            value={password}
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title={'Login'} onPress={() => { handleLogin() }} />
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