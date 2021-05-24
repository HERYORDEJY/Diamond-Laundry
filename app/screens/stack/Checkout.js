import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import moment from 'moment';
import normalize from 'react-native-normalize';
import normzer from '../../utils/normalizer';
import { _primary, _primary2, _tertiary, _tertiary2 } from '../../utils/colors';
import Header from '../../components/Header';
import { ExpressDeliveryVan, DeliveryVan } from '../../components/Svg';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BigBanner from '../../components/BigBanner';
import ServiceIcon from '../../components/ServiceIcon';
import { Container, Content, Icon, Textarea } from 'native-base';
import Button from '../../components/Button';
import SelectItem from '../../components/SelectItem';
import { items_cate, services } from '../../api';
import DropdownMenu from '../../components/Dropdown';
import ConfirmItem from '../../components/ConfirmItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { _screenWidth } from '../../utils/dimension';
import { useNavigation } from '@react-navigation/native';
import { useGlobalHook } from '@devhammed/use-global-hook';
import { RFValue } from 'react-native-responsive-fontsize';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function Checkout() {
	const [state, setState] = useState({
		delivery_type: 'normal',
		instructions: '',
	});
	const navigation = useNavigation();
	const { state: profile } = useGlobalHook('profileStore');
	const {
		service,
		items,
		subTotal,
		pickupDelivery,
		payment,
		uniqueId,
		instruction,
	} = useGlobalHook('serviceItem');
	const { _setActiveOrder, _setPendingOrder, pendingOrder } = useGlobalHook(
		'orderStore',
	);
	const { transactionList, _setTransactionList } = useGlobalHook(
		'transactionListStore',
	);

	const {
		deliveryData: { type: deliveryType, deliveryFee },
	} = pickupDelivery;

	const { Guy, Lady } = items;

	const allGuy = Object.keys(Guy).map((item, index) => Guy[`${item}`]);
	const allLady = Object.keys(Lady).map((item, index) => Lady[`${item}`]);
	const allItems = [...allGuy, ...allLady];

	const transaction = {
		id: uuidv4(),
		dateTime: moment(),
		service,
		serviceId: uniqueId.id,
		serviceOrder: uniqueId.order,
		paymentType: 'Card', // payment.type
		cardNumber: '8689758638962789', // payment.cardInfo
		others: [{ deliveryType, deliveryFee }],
		subtotalQuantity: subTotal.totalQuantity,
		subtotalAmount: subTotal.subTotalGuy + subTotal.subTotalLady,
		totalAmount: subTotal.subTotal,
		items: allItems,
	};

	const useCardFunc = () => {
		_setPendingOrder({
			id: uuidv4(),
			datetime: moment(),
			service,
			items,
			subTotal,
			pickupDelivery,
			payment,
			uniqueId,
			instruction,
		});
		_setTransactionList({ ...transaction, paymentType: 'USSD' });
		navigation.navigate('PaymentSuccess', { transactionID: transaction.id });
	};

	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			{/* Header */}
			<Header
				bodyText={'Checkout'}
				leftComponent={'back'}
				goBack={() => navigation.goBack()}
			/>
			{/* Content Section */}
			<Content
				style={{ paddingHorizontal: _screenWidth > 450 ? RFValue(30) : 0 }}
				contentContainerStyle={styles.content}
				scrollEnabled={true}
				showsVerticalScrollIndicator={false}
			>
				{/* Pickup Date and Time */}
				<View style={{ marginBottom: RFValue(20) }}>
					<Text
						style={{
							fontSize: RFValue(16),
							fontFamily: 'Inter-Medium',
							color: _primary,
							marginBottom: RFValue(20),
						}}
					>
						Select Payment Option
					</Text>
					{profile.card.map((card, index) => (
						<TouchableOpacity
							key={card.id}
							onPress={useCardFunc}
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								// justifyContent: 'space-between',
								backgroundColor: _tertiary2,
								padding: RFValue(10),
								borderRadius: RFValue(5),
								marginBottom: RFValue(20),
							}}
						>
							<Icon
								type={'MaterialCommunityIcons'}
								name={'credit-card-outline'}
								style={{
									color: _primary,
									fontSize: RFValue(25),
									marginRight: RFValue(10),
								}}
							/>
							<Text
								style={{
									fontSize: RFValue(14),
									color: _primary,
								}}
							>
								Use bank card{' '}
								{`**** **** **** ${card.number[12]}${card.number[13]}${card.number[14]}${card.number[15]} `}
							</Text>
						</TouchableOpacity>
					))}
					<TouchableOpacity
						onPress={() => navigation.navigate('AddCard', { status: '' })}
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							// justifyContent: 'space-between',
							backgroundColor: _tertiary2,
							padding: RFValue(10),
							borderRadius: RFValue(5),
							marginBottom: RFValue(20),
						}}
					>
						<Icon
							type={'MaterialCommunityIcons'}
							name={'credit-card-plus-outline'}
							style={{
								color: _primary,
								fontSize: RFValue(25),
								marginRight: RFValue(10),
							}}
						/>
						<Text
							style={{
								fontSize: RFValue(14),
								color: _primary,
							}}
						>
							Use new card
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							// justifyContent: 'space-between',
							backgroundColor: _tertiary2,
							padding: RFValue(10),
							borderRadius: RFValue(5),
							marginBottom: RFValue(20),
						}}
					>
						<Icon
							type={'MaterialCommunityIcons'}
							name={'cash'}
							style={{
								color: _primary,
								fontSize: RFValue(25),
								marginRight: RFValue(10),
							}}
						/>

						<Text
							style={{
								fontSize: RFValue(14),
								color: _primary,
							}}
						>
							Pay on delivery
						</Text>
					</TouchableOpacity>
				</View>
			</Content>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: _screenWidth > 450 ? RFValue(30) : RFValue(20),
		paddingBottom: 20,
	},
	content: {
		paddingBottom: RFValue(20),
		marginBottom: RFValue(20),
		marginTop: RFValue(20),
	},
	service_invoice_container: {
		backgroundColor: _tertiary2,
		padding: 20,
		borderRadius: 10,
		marginBottom: 20,
	},
	service_invoice_category_header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomColor: _primary2,
		borderBottomWidth: 1,
	},
	service_invoice_category_header_title: {
		color: _primary2,
		fontFamily: 'Inter-Medium',
		fontSize: 19,
	},
	service_invoice_category_header_subtitle: {
		color: _primary2,
		fontFamily: 'Inter-Medium',
		fontSize: 16,
	},
	instructions_input: {
		color: _primary,
		fontFamily: 'Inter-Medium',
		fontSize: 18,
		paddingVertical: 10,
		height: 90,
		borderRadius: 10,
		backgroundColor: _tertiary2,
	},
});
