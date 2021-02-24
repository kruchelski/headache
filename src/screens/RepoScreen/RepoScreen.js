import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useAuth, useData } from '../../hooks';
import { Project } from '../../components';
import { mainTheme } from '../../constants';
import styles from './styles'

const RepoScreen = ({ navigation }) => {
  const { projects, dataState, dataErrorHandler, brutalDataLoad } = useData();
  const { authState } = useAuth();
  const [loading, setLoading] = useState(false);

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

    if (!projects || !projects.length) {
      getAllData();
    }
  }, [])

  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.heading}
      >
        {`Hey ${authState?.user?.name?.split(' ')[0] || 'random user'}...`}
      </Text>
      <Text
        style={styles.subHeading}
      >
        this is your GitLab projects
      </Text>

      {
        !!dataState.error && !loading &&
        <View>
          <Text
            style={styles.error}
          >
            {dataState.error}
          </Text>
        </View>
      }

      {
        loading && <ActivityIndicator
          size="large" color={mainTheme.primary}
        />
      }

      {
        !loading &&
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={projects}
          ListEmptyComponent={() => {
            return (
              <View>
                <Text style={styles.error}>
                  No projects to display
              </Text>
              </View>
            )
          }}
          keyExtractor={(_, index) => `list-item-${index}`}
          renderItem={(data => {
            return (
              <Project data={data.item} />
            )
          })}
        />
      }

    </View>
  )
}

export default RepoScreen;