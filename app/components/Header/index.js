import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Diamond, Diamond_ } from '../../components/Svg';
import { Icon } from 'native-base';
import {
	_primary,
	_primary2,
	_tertiary,
	_tertiary2,
	_secondary,
} from '../../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { useGlobalHook } from '@devhammed/use-global-hook';

export default function Header({
	goBack,
	navigation,
	bodyText,
	bodyComponent,
	bodySubText,
	leftComponent,
	rightComponent,
	children,
}) {
	const { state: notification, readNotification } = useGlobalHook(
		'notificationItemStore',
	);
	const unreadNotifications = notification.filter(
		(not) => not.status === 'unread',
	);
	function renderIcon() {
		return (
			<TouchableOpacity>
				{/*<Diamond*/}
				{/*	height={RFValue(25)}*/}
				{/*	width={RFValue(25)}*/}
				{/*	color1={'red'}*/}
				{/*	color2={_secondary}*/}
				{/*	color3={_secondary}*/}
				{/*	color4={'yellow'}*/}
				{/*/>*/}
				<Diamond_ height={RFValue(25)} width={RFValue(25)} />
			</TouchableOpacity>
		);
	}

	function renderBackButton() {
		return (
			<TouchableOpacity onPress={goBack} style={{}}>
				<Icon
					type={'FontAwesome5'}
					name={'chevron-left'}
					style={{ color: _primary, fontSize: RFValue(25) }}
				/>
			</TouchableOpacity>
		);
	}

	function renderNotificationBell() {
		return (
			<TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
				<Icon
					type={'Feather'}
					name={'bell'}
					style={{ color: _primary, fontSize: RFValue(25) }}
				/>
				{unreadNotifications.length > 0 && (
					<View
						style={{
							backgroundColor: _primary,
							position: 'absolute',
							right: RFValue(0),
							top: RFValue(-5),
							padding: 0,
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: RFValue(40),
							width: RFValue(15),
							height: RFValue(15),
						}}
					>
						<Text style={{ fontSize: RFValue(12), color: _tertiary2 }}>
							{unreadNotifications.length}
						</Text>
					</View>
				)}
			</TouchableOpacity>
		);
	}

	return (
		<>
			<View style={styles.container}>
				{leftComponent === 'icon' ? renderIcon() : renderBackButton()}
				<View style={styles.bodyContainer}>
					{bodyComponent ?? null}
					{bodyText && <Text style={styles.bodyText}>{bodyText}</Text>}
					{bodySubText && <Text style={styles.bodySubText}>{bodySubText}</Text>}
				</View>
				{rightComponent === 'notification' ? renderNotificationBell() : null}
			</View>
			{children}
		</>
	);
}
