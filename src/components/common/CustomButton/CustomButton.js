import React from 'react';
import { Button } from 'react-native-elements';
import { mainTheme } from '../../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomButton = (props) => {
  const level = props.level;
  const buttonType = props.type;
  const icon = props.icon;

  return <Button 
    {...props}
    icon={ icon ?
      <Icon
        name={icon}
        size={15}
        style={{ marginRight: 5 }}
        color={customStyle.icon[buttonType][level]}
      /> :
      null
    } 
    buttonStyle={customStyle[buttonType][level]} 
    titleStyle={customStyle[buttonType][level]}
  />
}

const customStyle = {
  solid: {
    primary: {
      backgroundColor: mainTheme.primary,
      color: mainTheme.colorLight
    },
    secondary: {
      backgroundColor: mainTheme.secondary,
      color: mainTheme.colorLight
    }
  },
  outline: {
    primary: {
      borderColor: mainTheme.primary,
      color: mainTheme.primary
    },
    secondary: {
      borderColor: mainTheme.secondary,
      color: mainTheme.secondary
    }
  },
  icon: {
    solid: {
      primary: mainTheme.colorLight,
      secondary: mainTheme.colorLight
    },
    outline: {
      primary: mainTheme.primary,
      secondary: mainTheme.secondary
    }
  }
}

export default CustomButton;