import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

const Sidebar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
      >
        Sidebar Content
      </Text>
    </View>
  );
}

export default Sidebar;