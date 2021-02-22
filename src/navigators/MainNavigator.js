import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen, UnwrapScreen, RepoScreen } from '../screens';
import { Sidebar } from '../components';

const MainStack = createStackNavigator();
const MainDrawer = createDrawerNavigator();

const mainStack = () => {
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
			<MainStack.Screen
				name={'UnwrapScreen'}
				component={UnwrapScreen}
			/>
		</MainStack.Navigator>

	)
}

export default () => {
	return (
		<MainDrawer.Navigator
			drawerContent={Sidebar}
		>
			<MainDrawer.Screen
				name={'Main'}
				component={mainStack}
			/>
		</MainDrawer.Navigator>
	);
}