import React, { useEffect } from 'react';
import { Image, Text, View, ActivityIndicator } from 'react-native';
import { useAuth } from '../../hooks';
import { mainTheme } from '../../constants';
import { logo } from '../../assets';
import styles from './styles';

const SplashScreen = ({ setLoadingApp }) => {

	const welcomeMessage = 'Welcome to the unwrap of your GitLab'
	const { loadStorageData, authErrorHandler } = useAuth();

	useEffect(() => {
    let timeout = null;
		const autoSignInWithStoredToken = async () => {
			try {
				await loadStorageData();
			} catch (err) {
			
				authErrorHandler(
					err, 
					'An unexpected error happened whilte trying to authenticate with stored token'
				)
			} finally {
				timeout = setTimeout(() => {
					setLoadingApp(false);
				}, 2500);
			}
		}

		autoSignInWithStoredToken();
    return () => clearTimeout(timeout);
	}, [])

	return (
		<View style={ styles.container }>
			<Image source={ logo } style={ styles.logoImage } />
			<ActivityIndicator size="large" color={ mainTheme.primary } />
			<Text style={ styles.text }>
				{ welcomeMessage }
			</Text>
		</View>
	)
}

export default SplashScreen;