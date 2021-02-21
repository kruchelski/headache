import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


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