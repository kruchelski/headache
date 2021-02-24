import React, { useState } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { CustomButton } from '../common';
import { useAuth } from '../../hooks';
import styles from './styles'

const Sidebar = ({ navigation }) => {
  const { authState, logout, authErrorHandler } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      authErrorHandler(err, 'An unexpected error happened trying to Sign In');
    }
  }
  return (
    <View 
      style={styles.container}
    >
      <View
        style={styles.infoContainer}
      >
        {
          authState?.user?.avatar &&
          <Image
            source={{ uri: authState.user.avatar }}
            style={styles.avatar}
          />
        }
        <Text
          style={styles.usernameText}
          onPress={() => Linking.openURL(authState.user.url)}
        >
          {authState.user.name}
        </Text>
        <Text
          style={styles.text}
        >
          {`@${authState.user.username}`}
        </Text>
        <Text
          style={styles.text}
        >
          {authState.user.email}
        </Text>
      </View>
      <View
        style={styles.buttonContainerBottom}
      >
        <CustomButton
          type='outline'
          title="Logout"
          level='secondary'
          icon='logout'
          onPress={() => handleLogout()}
        />
      </View>
      {
        authState.error &&
        <Text>Ocorreu um erro: ${authState.error}</Text>
      }
    </View>

  )
}

export default Sidebar;