import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens';

const AuthStack = createStackNavigator();

export default () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
      />
    </AuthStack.Navigator>
  )
}
