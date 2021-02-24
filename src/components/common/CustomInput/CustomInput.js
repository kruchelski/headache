import React from 'react';
import { Input } from 'react-native-elements';
import { mainTheme } from '../../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomInput = (props) => {
  const level = props.level;
  const icon = props.icon;

  return <Input
    {...props}
    leftIcon={
      icon ?
        <Icon
          name={icon}
          size={18}
          color={customStyle.icon[level]}
        /> :
        null
    }
    inputStyle={customStyle.input}
    labelStyle={customStyle.label[level]}
    inputContainerStyle={customStyle.container[level]}
    placeholderTextColor={`${mainTheme.bgColor3}5e`}
    

  />
}

const customStyle = {
  input: {
    color: mainTheme.bgColor0,
    fontSize: 14,
    fontFamily: 'Comfortaa_400Regular'
  },
  label: {
    primary: {
      color: mainTheme.primary
    },
    secondary: {
      color: mainTheme.secondary
    }
  },
  container: {
    primary: {
      borderBottomColor: mainTheme.primary
    },
    secondary: {
      borderBottomColor: mainTheme.secondary
    }
  },
  icon: {
    primary: mainTheme.primary,
    secondary: mainTheme.secondary
  }
}

export default CustomInput;