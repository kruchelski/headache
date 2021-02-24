import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen, UnwrapScreen, RepoScreen } from '../screens';
import { Sidebar } from '../components';
import { mainTheme } from '../constants';

const MainStack = createStackNavigator();
const MainDrawer = createDrawerNavigator();

const mainStack = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerTintColor: mainTheme.colorLight,
				headerStyle: {
					backgroundColor: mainTheme.fgColor0,
				},
				headerTitleStyle: {
					fontFamily: 'Comfortaa_600SemiBold',
					fontSize: 16
				}
			}}
		>
			<MainStack.Screen
				name={'HomeScreen'}
				component={HomeScreen}
				options={{ title: 'Headache' }}
			/>
			<MainStack.Screen
				name={'RepoScreen'}
				component={RepoScreen}
				options={{ title: 'Projects' }}
			/>
			<MainStack.Screen
				name={'UnwrapScreen'}
				component={UnwrapScreen}
				options={{ title: 'Unwrap' }}
			/>
		</MainStack.Navigator>

	)
}

export default () => {
	return (
		<MainDrawer.Navigator
			drawerContent={(props) => <Sidebar {...props} />}
		>
			<MainDrawer.Screen
				name={'Main'}
				component={mainStack}
			/>
		</MainDrawer.Navigator>
	);
}