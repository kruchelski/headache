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
    placeholderTextColor={mainTheme.fgColor3}
    

  />


}

const customStyle = {
  input: {
    color: mainTheme.fgColor0,
    fontSize: 14
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