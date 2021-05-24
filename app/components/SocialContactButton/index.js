import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';

import { _primary, _primary2, _secondary, _tertiary } from '../../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from 'react-native-responsive-fontsize';

export default function SocialContactButton({ iconName, iconType, ...props }) {
	const social_data = {
		whatsapp: {
			appName: 'WhatsApp',
			iconName: 'whatsapp',
			iconType: 'MaterialCommunityIcons',
		},
		telegram: {
			appName: 'Telegram',
			iconName: 'telegram',
			iconType: 'MaterialCommunityIcons',
		},
		signal: {
			appName: 'Signal',
			iconName: 'signal',
			iconType: 'MaterialCommunityIcons',
		},
	};

	return (
		<TouchableOpacity
			style={{
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: _primary,
				paddingVertical: RFValue(10),
				paddingHorizontal: RFValue(5),
				borderRadius: RFValue(5),
			}}>
			<Text
				style={{
					paddingHorizontal: RFValue(5),
					color: _tertiary,
					fontSize: RFValue(16),
				}}>
				{social_data[`${iconName}`].appName}
			</Text>
			<Icon
				type={iconType ?? 'MaterialCommunityIcons'}
				name={iconName}
				style={{
					paddingHorizontal: RFValue(5),
					color: _tertiary,
					fontSize: RFValue(25),
				}}
			/>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({});
