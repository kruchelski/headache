import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, ImageBackground, FlatList } from 'react-native';
import { CustomButton } from '../../components/common';
import { mainTheme, unwrapData } from '../../constants';
import { UtilsService } from '../../services';
import { StackActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles'

const UnwrapScreen = ({ navigation }) => {
  const [step, setStep] = useState('step0');
  const [bgImage, setBgImage] = useState(unwrapData.step0.bgImg);
  const [final, setFinal] = useState(null);
  const [mainContent, setMainContent] = useState([]);

  const handleNextStep = () => {
    if (step === 'step6') {
      navigation.dispatch(StackActions.popToTop());
      return
    }
    setStep(unwrapData[step].nextStep);
  }

  useEffect(() => {
    const indexFinalMessage = UtilsService.numberRandomizer(3);
    setFinal(unwrapData[step].final[indexFinalMessage]);
    setMainContent(unwrapData[step].content);
    setBgImage(unwrapData[step].bgImg)
  }, [step])

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <ImageBackground
        resizeMode='cover'
        source={bgImage}
        style={styles.background}
      >

        <View
          style={styles.overlay}
        />

        <Text
          style={styles.intro}
        >
          {unwrapData[step].intro}
        </Text>

        <Text
          style={styles.mid}
        >
          {unwrapData[step].mid}
        </Text>

        <FlatList 
          contentContainerStyle={styles.contentContainer}
          data={mainContent}
          ListEmptyComponent={() => <View></View>}
          keyExtractor={(_, index) => `list-item-${index}`}
          renderItem={(data => {
            return (
              <View
                style={styles.contentItemContainer}
              >
                <Icon 
                  name={data.item.icon}
                  size={24}
                  style={styles.contentItemIcon}
                  color={mainTheme.primary}
                />
                <Text
                  style={styles.contentItemText}
                >
                  {data.item.msg}
                </Text>
              </View>
            )
          })}
        />

        <Text
          style={styles.final}
        >
          {final}
        </Text>

        <View
          style={styles.buttonContainer}
        >
          <CustomButton
            type='outline'
            title={unwrapData[step].button}
            level='primary'
            icon='play-circle-outline'
            onPress={() => handleNextStep()} />
        </View>

      </ImageBackground>
    </ScrollView>
  );
}

export default UnwrapScreen;