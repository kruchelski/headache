import React, { useState } from 'react';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { SplashScreen } from '../screens';
import { useAuth } from '../hooks';

const Navigators = () => {
	const { authState } = useAuth();
	const [loadingApp, setLoadingApp] = useState(true);

	if (loadingApp) {
		return <SplashScreen setLoadingApp={setLoadingApp} />
	}
  if (!authState.user) {
		return <AuthNavigator />
	}
	return <MainNavigator />

}

export default Navigators;