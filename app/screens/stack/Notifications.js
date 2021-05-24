import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import {
	_primary,
	_primary2,
	_secondary,
	_tertiary,
	_tertiary2,
} from '../../utils/colors';
import Header from '../../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import BigBanner from '../../components/BigBanner';
import ServiceIcon from '../../components/ServiceIcon';
import { Container, Content, Thumbnail } from 'native-base';
import {
	DryCleanSVG,
	IronSVG,
	WashSVG,
	WashAndIron,
	Diamond,
} from '../../components/Svg';
import ActiveOrders from '../../components/ActiveOrders';
import { _screenWidth } from '../../utils/dimension';
import { useNavigation } from '@react-navigation/native';
import NotificationItem from '../../components/NotificationItem';
import { useGlobalHook } from '@devhammed/use-global-hook';
import { Badge } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

export default function Notifications() {
	const [state, setState] = useState({
		wash_only: false,
		iron_only: false,
		wash_and_iron: false,
		dry_clean: false,
	});

	const { state: notification, readNotification } = useGlobalHook(
		'notificationItemStore',
	);

	const unreadNotifications = notification.filter(
		(not) => not.status === 'unread',
	);

	const selectServive = (type) => {
		setState({ ...state, [type]: !state[`${type}`] });
	};
	const navigation = useNavigation();
	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			{/* Header */}
			<Header
				bodyText={'Notifications'}
				leftComponent={'back'}
				goBack={() => navigation.goBack()}
				rightComponent={'notification'}
			/>
			<Content
				style={{ paddingHorizontal: _screenWidth > 450 ? RFValue(30) : 0 }}
				contentContainerStyle={styles.content}
				scrollEnabled={true}
				showsVerticalScrollIndicator={false}
			>
				{notification.map((item, index) => (
					<NotificationItem
						status={item.status}
						message={item.message}
						datetime={item.datetime}
						onRead={() => readNotification(item.id)}
						key={item.id}
					/>
				))}
			</Content>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: _screenWidth > 450 ? RFValue(30) : RFValue(20),
	},
	content: {
		paddingBottom: RFValue(20),
		marginBottom: RFValue(20),
		marginTop: RFValue(20),
	},
});
