import React, { useState } from 'react';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { SplashScreen } from '../screens';

const Navigators = () => {
	const [loadingApp, setLoadingApp] = useState(true);

	if (loadingApp) {
		return <SplashScreen setLoadingApp={setLoadingApp} />
	}
	// if (!authState.user) {
  if (1 !== 1) {
		return <AuthNavigator />
	}
	return <MainNavigator />

}

export default Navigators;