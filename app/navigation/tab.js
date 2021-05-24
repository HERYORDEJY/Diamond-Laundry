import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from 'native-base';

import HomeScreen from '../screens/tab/HomeScreen';
import OrderScreen from '../screens/tab/OrderScreen';
import ProfileScreen from '../screens/tab/ProfileScreen';
import { _primary, _primary2, _tertiary, _tertiary2 } from '../utils/colors';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const MaterialTab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
	return (
		<MaterialTab.Navigator
			lazy={false}
			initialRouteName='Home'
			activeColor={_primary}
			inactiveColor={_tertiary}
			style={{ fontSize: RFValue(15) }}
			barStyle={{
				backgroundColor: _tertiary2 + '90',
				elevation: 0,
				borderTopColor: _primary2,
				borderTopWidth: 0.7,
				paddingVertical: 0,
				marginVertical: 0,
			}}
		>
			<MaterialTab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarLabel: <Text style={styles.label}>Home</Text>,
					tabBarIcon: ({ color, focused }) => (
						<Icon
							type={'MaterialCommunityIcons'}
							name='home'
							style={{
								color: focused ? _primary : _tertiary,
								fontSize: RFValue(20),
								width: RFValue(20),
								height: RFValue(20),
							}}
						/>
					),
				}}
			/>
			<MaterialTab.Screen
				name='Order'
				component={OrderScreen}
				options={{
					tabBarLabel: <Text style={styles.label}>Order</Text>,
					tabBarIcon: ({ color, focused }) => (
						<Icon
							type={'MaterialCommunityIcons'}
							name='cart'
							style={{
								color: focused ? _primary : _tertiary,
								fontSize: RFValue(20),
								width: RFValue(20),
								height: RFValue(20),
							}}
						/>
					),
				}}
			/>
			<MaterialTab.Screen
				name='Profile'
				component={ProfileScreen}
				options={{
					tabBarLabel: <Text style={styles.label}>Profile</Text>,
					tabBarIcon: ({ color, focused }) => (
						<Icon
							type={'MaterialCommunityIcons'}
							name='face'
							style={{
								color: focused ? _primary : _tertiary,
								fontSize: RFValue(20),
								width: RFValue(20),
								height: RFValue(20),
							}}
						/>
					),
				}}
			/>
		</MaterialTab.Navigator>
	);
}

const styles = StyleSheet.create({
	label: { fontFamily: 'Inter-Medium', fontSize: RFValue(10) },
});
