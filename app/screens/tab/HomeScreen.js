import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
	_primary,
	_primary2,
	_secondary,
	_tertiary,
	_tertiary2,
} from '../../utils/colors';
import Header from '../../components/Header';
import { Container, Content, Icon } from 'native-base';
import {
	DryCleanSVG,
	IronSVG,
	WashSVG,
	WashAndIron,
	Diamond_,
} from '../../components/Svg';
import ActiveOrders from '../../components/ActiveOrders';
import ReceivedOrders from '../../components/ReceivedOrders';
import { _screenWidth } from '../../utils/dimension';
import { useGlobalHook } from '@devhammed/use-global-hook';
import { RFValue } from 'react-native-responsive-fontsize';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { DiscountBanner } from '../../components/BigBanner/DiscountBanner';
import NumberFormat from 'react-number-format';
import numbro from 'numbro';
import { _naira } from '../../api';
import { _currency } from '../../utils/textFormatter';

export default function HomeScreen(props) {
	// Select Items Global Context Store
	const { service, _setService, pickupDelivery } = useGlobalHook('serviceItem');

	//  Order Global Context Store
	const { activeOrder, pendingOrder } = useGlobalHook('orderStore');

	// View Order Global Context Store
	const { viewOrderID, _setViewOrderID } = useGlobalHook('viewOrderStore');

	// List of services
	let services = {
		wash_only: 'Wash Only',
		iron_only: 'Iron Only',
		wash_and_iron: 'Wash & Iron',
		dry_clean: 'Dry-clean',
	};

	// Selecting service function
	const selectService = (type) => {
		_setService({ name: services[`${type}`], slug: type });
		navigation.navigate('SelectItems');
	};

	//Navigation  Instance
	const navigation = useNavigation();

	//Get top 3 order according to date/time
	let topActiveOrder = activeOrder.filter((order, index) => index <= 3);
	let topPendingOrder = pendingOrder.filter((order, index) => index <= 3);

	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			{/* Header */}
			<Header
				bodyText={'Welcome User!'}
				bodySubText={'What would you like to do today...'}
				leftComponent={'icon'}
				rightComponent={'notification'}
			/>
			<Content
				contentContainerStyle={styles.content}
				scrollEnabled={true}
				showsVerticalScrollIndicator={false}
				style={{ paddingHorizontal: _screenWidth > 450 ? RFValue(30) : 0 }}
			>
				{/* Banner */}
				<DiscountBanner />
				{/* Menu */}
				<View style={styles.menu}>
					<Text
						style={{
							fontSize: RFValue(18),
							fontFamily: 'Inter-Medium',
							color: _primary,
						}}
					>
						Choose Service
					</Text>
					<View style={styles.menu_row}>
						<TouchableOpacity
							onPress={() => selectService('wash_only')}
							style={{
								...styles.menu_item,
								backgroundColor:
									service.slug === 'wash_only' ? _primary2 : '#f5f5f5',
							}}
						>
							<WashSVG
								color={_tertiary}
								height={RFValue(80)}
								width={RFValue(80)}
								style={{ marginBottom: RFValue(10) }}
							/>
							<Text style={styles.menu_text}>Wash Only</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								...styles.menu_item,
								backgroundColor:
									service.slug === 'iron_only' ? _primary2 : '#f5f5f5',
							}}
							onPress={() => selectService('iron_only')}
						>
							<IronSVG
								color={_tertiary}
								height={RFValue(80)}
								width={RFValue(80)}
								style={{
									marginBottom: RFValue(10),
									transform: [{ rotate: '90deg' }],
								}}
							/>
							<Text
								style={{
									...styles.menu_text,
									color: service.slug === 'wash_only' ? _tertiary : _tertiary,
								}}
							>
								Iron Only
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.menu_row}>
						<TouchableOpacity
							style={{
								...styles.menu_item,
								backgroundColor:
									service.slug === 'wash_and_iron' ? _primary2 : '#f5f5f5',
							}}
							onPress={() => selectService('wash_and_iron')}
						>
							<WashAndIron
								color={_tertiary}
								height={RFValue(80)}
								width={RFValue(80)}
								style={{ marginBottom: RFValue(10) }}
							/>
							<Text style={styles.menu_text}>Wash & Iron</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								...styles.menu_item,
								backgroundColor:
									service.slug === 'dry_clean' ? _primary2 : '#f5f5f5',
							}}
							onPress={() => selectService('dry_clean')}
						>
							<DryCleanSVG
								color={_tertiary}
								height={RFValue(80)}
								width={RFValue(80)}
								style={{ marginBottom: RFValue(10) }}
							/>
							<Text
								style={{
									...styles.menu_text,
									color: service.slug === 'wash_only' ? _tertiary : _tertiary,
								}}
							>
								DryClean
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				{/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<TouchableOpacity onPress={() => navigation.navigate('RNPrintt')}>
						<Text style={{ color: _primary, fontSize: RFValue(20) }}>
							RNPrintt
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('RNHtmlPdf')}>
						<Text style={{ color: _primary, fontSize: RFValue(20) }}>
							RNHtmlPdf
						</Text>
					</TouchableOpacity>
				</View> */}
				{pendingOrder.length > 0 && (
					<View style={styles.active_orders_container}>
						<View style={styles.active_orders_header_container}>
							<Text style={styles.active_orders_header_text}>
								Pending Orders ({pendingOrder ? pendingOrder.length : 0})
							</Text>
							{pendingOrder.length > 3 && (
								<TouchableOpacity onPress={() => navigation.navigate('Order')}>
									<Text style={styles.active_orders_header_subtext}>
										View All
									</Text>
								</TouchableOpacity>
							)}
						</View>
						{topPendingOrder.map((order, index) => (
							<ReceivedOrders
								key={order.id}
								service={order.service.name}
								pickupData={order.pickupDelivery.pickupData.address}
								order={order.uniqueId.order}
								id={order.id}
							/>
						))}
					</View>
				)}
				{activeOrder.length > 0 && (
					<View style={styles.active_orders_container}>
						<View style={styles.active_orders_header_container}>
							<Text style={styles.active_orders_header_text}>
								Active Orders ({activeOrder ? activeOrder.length : 0})
							</Text>
							{activeOrder.length > 3 && (
								<TouchableOpacity onPress={() => navigation.navigate('Order')}>
									<Text style={styles.active_orders_header_subtext}>
										View All
									</Text>
								</TouchableOpacity>
							)}
						</View>
						{topActiveOrder.map((order, index) => (
							<ActiveOrders
								id={order.uniqueId.id}
								key={order.uniqueId.id}
								service={order.service.name}
								order={order.uniqueId.order}
							/>
						))}
					</View>
				)}
			</Content>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: _screenWidth > 450 ? RFValue(30) : RFValue(20),
		paddingBottom: 0,
	},
	content: {
		paddingBottom: RFValue(20),
		marginBottom: RFValue(20),
		marginTop: RFValue(20),
	},
	menu: { marginBottom: RFValue(20) },
	menu_row: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginVertical: RFValue(20),
	},
	menu_item: {
		// flex: 1,
		padding: RFValue(20),
		// paddingVertical: 35,
		backgroundColor: '#f5f5f5',
		borderRadius: RFValue(5),
		alignItems: 'center',
	},
	menu_text: {
		fontSize: RFValue(16),
		fontFamily: 'Inter-Bold',
		color: _tertiary,
	},
	active_orders_container: { marginBottom: 20 },
	active_orders_header_container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'baseline',
		marginBottom: RFValue(15),
	},
	active_orders_header_text: {
		fontSize: RFValue(16),
		color: _primary,
		fontFamily: 'Inter-Medium',
	},
	active_orders_header_subtext: {
		fontSize: RFValue(12),
		color: _primary2,
		fontFamily: 'Inter-Medium',
	},
	_item: {
		// flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: RFValue(30),
		paddingVertical: RFValue(15),
		backgroundColor: _primary2,
		borderRadius: RFValue(5),
		marginVertical: RFValue(10),
		marginBottom: RFValue(40),
	},
	_text: { fontSize: RFValue(18), color: _tertiary2 },
});
