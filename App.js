import * as React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { bgUnwrap } from './src/assets';
import {
  useFonts,
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';

function TestScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground
        resizeMode='cover'
        source={ bgUnwrap }
        style={{ flex: 1, justifyContent: 'center', width: '100%', height: '100%' }}
      >
        <Text>Test Screen</Text>
        <Button title="Vai para home" onPress={() => navigation.navigate('Home')} />
      </ImageBackground>
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
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