import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigators from './src/navigators';
import {
  useFonts,
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';

function App() {
  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>
          Carregando
        </Text>
      </View>
    );
  } 
  return (
    <NavigationContainer>
      <Navigators />
    </NavigationContainer>
  );
}

export default App;


// URL Gitlab
// https://gitlab.tadsufpr.net.br

// token
// /oauth/token

// payload do token:
/**
 * {
 *  grant_type: 'password',
 *  username: 'user@example.com'
 *  password: 'password'
 * }
 */