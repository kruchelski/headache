import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen, UnwrapScreen, RepoScreen } from '../screens';
import { Sidebar } from '../components';

const MainStack = createStackNavigator();
const MainDrawer = createDrawerNavigator();

export default () => {
	return (
		<MainStack.Navigator>
			<MainStack.Screen
				name={'HomeScreen'}
				component={HomeScreen}
			/>
			<MainStack.Screen
				name={'RepoScreen'}
				component={RepoScreen}
			/>
		</MainStack.Navigator>
	);
}