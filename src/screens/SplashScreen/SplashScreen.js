import React, { useEffect } from 'react';
import { Image, Text, View, ActivityIndicator } from 'react-native';
import styles from './styles';

const SplashScreen = ({ setLoadingApp }) => {

	const welcomeMessage = 'Welcome to the unwrap of your GitLab'

	useEffect(() => {
    let timeout = null;
		const autoSignInWithStoredToken = async () => {
			// try {
				// await loadStorageData();
			// } catch (err) {
			
				// errorHandler(
					// err, 
					// 'An unexpected error happened whilte trying to authenticate with stored token'
				// )
			// } finally {
				timeout = setTimeout(() => {
					setLoadingApp(false);
				}, 3500);
			// }
		}

		autoSignInWithStoredToken();
    return () => clearTimeout(timeout);
	}, [])

	return (
		<View style={ styles.container }>
			<Text style={ styles.texdt }>
        Headache
      </Text>
			<ActivityIndicator size="large" color={ '#333333' } />
			<Text style={ styles.text }>
				{ welcomeMessage }
			</Text>
		</View>
	)
}

export default SplashScreen;