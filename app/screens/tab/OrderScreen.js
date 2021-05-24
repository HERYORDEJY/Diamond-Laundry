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
import { Container, Content } from 'native-base';
import ActiveOrders from '../../components/ActiveOrders';
import DeliveredOrders from '../../components/DeliveredOrders';
import * as Animatable from 'react-native-animatable';
import { _screenWidth } from '../../utils/dimension';
import { Diamond } from '../../components/Svg';
import ReceivedOrders from '../../components/ReceivedOrders';
import { useGlobalHook } from '@devhammed/use-global-hook';
import { Badge } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

export default function OrderScreen() {
	const [state, setState] = useState({
		menu: 'active',
	});

	const { activeOrder, pendingOrder, deliveredOrder } = useGlobalHook(
		'orderStore',
	);
	const { state: notification, readNotification } = useGlobalHook(
		'notificationItemStore',
	);

	const unreadNotifications = notification.filter(
		(not) => not.status === 'unread',
	);
	const selectServive = (type) => {
		setState({ ...state, [type]: !state[`${type}`] });
	};
	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			{/* Header */}
			<Header
				bodyText={'Orders'}
				leftComponent={'icon'}
				rightComponent={'notification'}
			/>
			<Content
				style={{ paddingHorizontal: _screenWidth > 450 ? RFValue(30) : 0 }}
				contentContainerStyle={styles.content}
				scrollEnabled={true}
				showsVerticalScrollIndicator={false}
			>
				{/* Active Orders */}
				<View style={styles.active_orders_container}>
					<View style={styles.active_orders_header_container}>
						<TouchableOpacity
							onPress={() => setState({ ...state, menu: 'placed' })}
							style={{
								borderBottomWidth: 2,
								borderBottomColor:
									state.menu === 'placed' ? _primary : _tertiary,
								flex: 1,
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									...styles.active_orders_header_text,
								}}
							>
								Placed
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => setState({ ...state, menu: 'active' })}
							style={{
								borderBottomWidth: 2,
								borderBottomColor:
									state.menu === 'active' ? _primary : _tertiary,
								flex: 1,
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									...styles.active_orders_header_text,
								}}
							>
								Active
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => setState({ ...state, menu: 'delivered' })}
							style={{
								borderBottomWidth: 2,
								borderBottomColor:
									state.menu === 'delivered' ? _primary : _tertiary,
								flex: 1,
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									...styles.active_orders_header_text,
								}}
							>
								Delivered
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ flexDirection: 'row', flex: 1 }}>
						<Animatable.View
							style={{
								...styles.menu_list_container,
								flex: 1,
								display: state.menu === 'placed' ? 'flex' : 'none',
								// left: state.menu === 'active' ? 0 : -1000,
							}}
							animation={
								state.menu === 'placed' ? 'slideInLeft' : 'slideOutLeft'
							}
						>
							{pendingOrder.length > 0 ? (
								pendingOrder.map((order, index) => (
									<ReceivedOrders
										key={order.id}
										service={order.service.name}
										pickupData={order.pickupDelivery.pickupData.address}
										order={order.uniqueId.order}
										id={order.id}
									/>
								))
							) : (
								<View>
									<Text
										style={{
											...styles.active_orders_header_text,
										}}
									>
										No Pending Order for now...
									</Text>
								</View>
							)}
						</Animatable.View>
						<Animatable.View
							style={{
								...styles.menu_list_container,
								flex: 1,
								display: state.menu === 'active' ? 'flex' : 'none',
								// left: state.menu === 'active' ? 0 : -1000,
							}}
							animation={
								state.menu === 'active' ? 'bounceInDown' : 'slideOutLeft'
							}
						>
							{activeOrder.length > 0 ? (
								activeOrder.map((order, index) => (
									<ActiveOrders
										key={order.uniqueId.id}
										service={order.service.name}
										order={order.uniqueId.order}
									/>
								))
							) : (
								<View>
									<Text
										style={{
											...styles.active_orders_header_text,
										}}
									>
										No Active Order for now...
									</Text>
								</View>
							)}
						</Animatable.View>
						<Animatable.View
							style={{
								...styles.menu_list_container,
								flex: 1,
								display: state.menu === 'delivered' ? 'flex' : 'none',
								// left: state.menu === 'active' ? 0 : -1000,
							}}
							animation={
								state.menu === 'delivered' ? 'slideInRight' : 'slideOutRight'
							}
							delay={2000}
						>
							{deliveredOrder.length > 0 ? (
								deliveredOrder.map((order, index) => (
									<DeliveredOrders
										key={order.uniqueId.id}
										service={order.service.name}
										order={order.uniqueId.order}
									/>
								))
							) : (
								<View>
									<Text
										style={{
											...styles.active_orders_header_text,
										}}
									>
										No Delivered Order for now...
									</Text>
								</View>
							)}
						</Animatable.View>
					</View>
				</View>
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

	menu: { marginBottom: RFValue(20) },
	active_orders_container: {},
	active_orders_header_container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'baseline',
		marginBottom: RFValue(15),
	},
	active_orders_header_text: {
		fontSize: RFValue(17),
		color: _primary,
		fontFamily: 'Inter-Medium',
	},
	active_orders_header_subtext: {
		fontSize: RFValue(17),
		color: _primary2,
		fontFamily: 'Inter-Medium',
	},
	menu_list_container: {},
});
