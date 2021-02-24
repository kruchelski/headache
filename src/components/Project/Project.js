import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { mainTheme } from '../../constants';
import styles from './styles'

const Project = ({ data }) => {
  const { name, created, lastActivity, stars, desc, url } = data;
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(url)}
    >
      <View
        style={styles.contentItemContainer}
      >
        <View
          style={styles.contentItemHeader}
        >
          <Text
            style={styles.textTitle}
          >
            {name}
          </Text>
        </View>

        <View
          style={styles.contentItemBody}
        >
          <Icon
            name='calendar'
            size={20}
            style={styles.itemIcon}
            color={mainTheme.bgColor0}
          />
          <Text
            style={styles.itemText}
          >
            {created}
          </Text>
        </View>

        <View
          style={styles.contentItemBody}
        >
          <Icon
            name='calendar-clock'
            size={20}
            style={styles.itemIcon}
            color={mainTheme.bgColor0}
          />
          <Text
            style={styles.itemText}
          >
            {lastActivity}
          </Text>
        </View>

        <View
          style={styles.contentItemBody}
        >
          <Icon
            name='star-face'
            size={20}
            style={styles.itemIcon}
            color={mainTheme.bgColor0}
          />
          <Text
            style={styles.itemText}
          >
            {stars}
          </Text>
        </View>

        <View
          style={styles.contentItemBody}
        >
          <Icon
            name='text'
            size={20}
            style={styles.itemIcon}
            color={mainTheme.bgColor0}
          />
          <Text
            style={styles.itemText}
          >
            {desc}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Project