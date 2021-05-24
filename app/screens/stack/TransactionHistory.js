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
import { Badge } from 'react-native-paper';
import { useGlobalHook } from '@devhammed/use-global-hook';
import { RFValue } from 'react-native-responsive-fontsize';
import TransactionItem from '../../components/TransactionItem';

export default function TransactionHistory() {
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

	const selectService = (type) => {
		setState({ ...state, [type]: !state[`${type}`] });
	};
	const navigation = useNavigation();

	const { transactionList, _setTransactionList } = useGlobalHook(
		'transactionListStore',
	);

	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			{/* Header */}
			<Header
				bodyText={'Transaction History'}
				leftComponent={'back'}
				goBack={() => navigation.goBack()}
			/>
			<Content
				style={{ paddingHorizontal: _screenWidth > 450 ? RFValue(30) : 0 }}
				contentContainerStyle={styles.content}
				scrollEnabled={true}
				showsVerticalScrollIndicator={false}
			>
				{/* Banner */}
				{/* Menu */}
				{transactionList.length > 0 ? (
					<View style={styles.menu}>
						{transactionList.map(({ id, ...trans }) => (
							<TransactionItem key={id} {...trans} id={id} />
						))}
					</View>
				) : (
					<View style={styles.menu}>
						<Text style={[styles.user_name, { color: _primary }]}>
							Ooops!!! No transactions made so far...
						</Text>
					</View>
				)}
				{/* Active Orders */}
			</Content>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: _screenWidth > 450 ? RFValue(45) : RFValue(20),
	},
	content: {
		paddingBottom: RFValue(20),
		marginBottom: RFValue(20),
		marginTop: RFValue(20),
	},
	profileCard: { flexDirection: 'row' },
	user_name: {
		fontSize: RFValue(16),
		color: _tertiary,
		fontFamily: 'Inter-Medium',
	},
	user_email: { fontSize: RFValue(12), color: _tertiary },
	user_occupation: { fontSize: RFValue(12), color: _tertiary },
	user_address: { fontSize: RFValue(12), color: _tertiary },
	menu: { marginBottom: RFValue(20) },
	menu_row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: RFValue(20),
	},
	menu_item: {
		// flex: 1,
		padding: RFValue(20),
		paddingVertical: RFValue(15),
		backgroundColor: _tertiary2,
		borderRadius: RFValue(5),
		marginVertical: RFValue(5),
	},
	menu_text: { fontSize: RFValue(14), color: _primary },
	active_orders_container: {},
});
