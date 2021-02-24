import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';
import { CustomButton } from '../../components/common';
import { mainTheme, unwrapData } from '../../constants';
import { UtilsService } from '../../services';
import { StackActions } from '@react-navigation/native';
import { useData } from '../../hooks';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles'

const UnwrapScreen = ({ navigation }) => {
  const { dataState, brutalDataLoad, dataErrorHandler } = useData();
  const [step, setStep] = useState('step0');
  const [bgImage, setBgImage] = useState(unwrapData.step0.bgImg);
  const [final, setFinal] = useState(null);
  const [mainContent, setMainContent] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleNextStep = () => {
    if (step === 'step6') {
      navigation.dispatch(StackActions.popToTop());
      return
    }
    setStep(unwrapData[step].nextStep);
  }

  useEffect(() => {
    const getAllData = async () => {
      setLoading(true);
      try {
        await brutalDataLoad();
      } catch (err) {
        dataErrorHandler(err, 'An error happened while trying to get GitLab data');
      } finally {
        setLoading(false);
      }
    }

    if (step === 'step0') {
      getAllData();
    }
    const indexFinalMessage = UtilsService.numberRandomizer(3);
    setFinal(unwrapData[step].final[indexFinalMessage]);
    setMainContent(unwrapData[step].content);
    setBgImage(unwrapData[step].bgImg)
  }, [step])

  return (
    <View
      style={styles.container}
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

        {
          !!dataState.error &&
          <View>
            <Text
              style={styles.error}
            >
              {dataState.error}
            </Text>
          </View>
        }

        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={mainContent}
          ListEmptyComponent={() => <View></View>}
          keyExtractor={(_, index) => `list-item-${index}`}
          renderItem={(data => {
            const replaceValues = dataState[step] ? Object.values(dataState[step]) : [];
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
                  {data.item.msg.replace('?', replaceValues[data.index])}
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
    </View>
  );
}

export default UnwrapScreen;