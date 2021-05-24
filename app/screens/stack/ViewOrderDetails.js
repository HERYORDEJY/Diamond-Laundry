import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
	TextInput,
	Modal,
} from 'react-native';
import moment from 'moment';
import normalize from 'react-native-normalize';
import normzer from '../../utils/normalizer';
import {
	_primary,
	_primary2,
	_tertiary,
	_tertiary2,
	_secondary,
} from '../../utils/colors';
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
import { _naira, items_cate, services } from '../../api';
import DropdownMenu from '../../components/Dropdown';
import ConfirmItem from '../../components/ConfirmItem';
import { _screenWidth } from '../../utils/dimension';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { useGlobalHook } from '@devhammed/use-global-hook';
import { RFValue } from 'react-native-responsive-fontsize';
import { _currency } from '../../utils/textFormatter';

export default function ViewOrderDetails() {
	const [state, setState] = useState({
		delivery_type: 'normal',
		instruction: '',
	});

	//  Order Global Context Store
	const { activeOrder, pendingOrder, _deletePendingOrder } = useGlobalHook(
		'orderStore',
	);

	// View Order Global Context Store
	const { viewOrderID, _setViewOrderID, viewOrderDetails } = useGlobalHook(
		'viewOrderStore',
	);

	// Get the pending Order
	const getOrder = pendingOrder.filter((order) => order.id === viewOrderID)[0];

	// const getOrder = (id) => {
	// 	return pendingOrder.filter((order) => order.uniqueId.id === viewOrderID)[0];
	// };

	// delete order

	//
	const {
		service,
		items,
		subTotal,
		pickupDelivery,
		uniqueId,
		instruction,
	} = getOrder;

	console.log(instruction);

	// Navigation instance
	const navigation = useNavigation();

	// Service Item Global Context store
	// const {
	// 	service,
	// 	items,
	// 	subTotal,
	// 	pickupDelivery,
	// 	uniqueId,
	// 	_setInstruction,
	// } = useGlobalHook('serviceItem');

	const { pickupData, deliveryData } = pickupDelivery;
	const { Guy, Lady } = items;
	const { id, order } = uniqueId;

	function deleteOrder() {
		// setConfirmModal(!confirmModal)
		_deletePendingOrder(viewOrderID);
		// navigation.goBack();
	}

	function editOrder() {}

	const [confirmModal, setConfirmModal] = useState({ visible: false });

	function renderConfirmModal() {
		return (
			<Modal
				visible={confirmModal.visible}
				transparent={true}
				animationType={'slide'}
			>
				<View style={styles.modal_container}>
					<View style={styles.modal_subcontainer}>
						<Text style={styles.modal_text}>
							Are you sure you want to delete this order?
						</Text>
						<View style={styles.modal_button_container}>
							<TouchableOpacity
								style={styles.modal_button}
								onPress={() => {
									setConfirmModal(false);
									navigation.goBack();
								}}
							>
								<Text style={styles.modal_button_text}>Okay</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.modal_button}
								onPress={() => {
									setConfirmModal(false);
									navigation.goBack();
								}}
							>
								<Text style={styles.modal_button_text}>Cancel</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		);
	}

	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			{/* Header */}
			<Header
				bodyText={'Order Details'}
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
				{/* Service Invoice */}
				<View style={styles.service_invoice_category_header}>
					<View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
						<Text style={styles.service_invoice_category_header_title}>
							{service.name}
						</Text>
					</View>
					{/*<FontAwesome5 name={'chevron-down'} size={20} />*/}
					<Text style={styles.service_invoice_category_header_subtitle}>
						order #{uniqueId.order}
					</Text>
				</View>
				{/*Guy*/}
				{Object.keys(Guy).length > 0 && (
					<View style={styles.service_invoice_container}>
						<View style={styles.service_invoice_category}>
							<View>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										alignItems: 'center',
										backgroundColor: _primary2,
									}}
								>
									<Text
										style={{
											...styles.totalItemText,

											color: _tertiary2,
										}}
									>
										Guy
									</Text>
									<Text
										style={{
											...styles.totalItemText,
											color: _tertiary2,
											fontSize: RFValue(18),
											fontFamily: 'Inter-Bold',
										}}
									>
										{_currency(subTotal.subTotalGuy)}
									</Text>
								</View>
								{Object.keys(Guy).map((item, index) => (
									<View
										style={{ paddingHorizontal: RFValue(20) }}
										key={index.toString()}
									>
										<ConfirmItem
											name={Guy[`${item}`].name}
											rate={Guy[`${item}`].rate}
											input_value={Guy[`${item}`].quantity}
											lastItem={index + 1 === Object.keys(Guy).length}
										/>
									</View>
								))}
							</View>
						</View>
					</View>
				)}
				{/*Lady */}
				{Object.keys(Lady).length > 0 && (
					<View style={styles.service_invoice_container}>
						<View style={styles.service_invoice_category}>
							<View>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										alignItems: 'center',
										backgroundColor: _primary2,
									}}
								>
									<Text
										style={{
											...styles.totalItemText,

											color: _tertiary2,
										}}
									>
										Lady
									</Text>
									<Text
										style={{
											...styles.totalItemText,
											fontSize: RFValue(18),
											fontFamily: 'Inter-Bold',
											color: _tertiary2,
										}}
									>
										{subTotal.subTotalLady}
									</Text>
								</View>

								{Object.keys(Lady).map((item, index) => (
									<View
										style={{ paddingHorizontal: 20 }}
										key={index.toString()}
									>
										<ConfirmItem
											name={Lady[`${item}`].name}
											rate={Lady[`${item}`].rate}
											input_value={Lady[`${item}`].quantity}
											lastItem={index + 1 === Object.keys(Guy).length}
										/>
									</View>
								))}
							</View>
						</View>
					</View>
				)}

				<View style={styles.service_invoice_container}>
					<View style={styles.service_invoice_category}>
						<View>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
									backgroundColor: _primary2,
								}}
							>
								<Text
									style={{
										...styles.totalItemText,

										color: _tertiary2,
									}}
								>
									Others
								</Text>
								<Text
									style={{
										...styles.totalItemText,
										fontSize: RFValue(18),
										fontFamily: 'Inter-Bold',
										color: _tertiary2,
									}}
								>
									#{deliveryData.deliveryFee}
								</Text>
							</View>

							<View style={styles.totalItemRow}>
								<Text style={styles.totalItemText}>
									Delivery fee ({deliveryData.type.toLocaleUpperCase()})
								</Text>
								<Text
									style={{
										...styles.totalItemText,
										fontSize: RFValue(16),
										fontFamily: 'Inter-Bold',
									}}
								>
									#{deliveryData.deliveryFee}
								</Text>
							</View>
						</View>
					</View>
				</View>

				<View
					// style={{ backgroundColor: _tertiary2, marginBottom: RFValue(30) }}
					style={styles.service_invoice_container}
				>
					<View
						style={{
							backgroundColor: _primary2,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							paddingHorizontal: RFValue(20),
						}}
					>
						<Text
							style={{
								fontSize: RFValue(16),
								fontFamily: 'Inter-Bold',
								color: _tertiary2,
							}}
						>
							Total
						</Text>
						<Text
							style={{
								fontSize: RFValue(20),
								fontFamily: 'Inter-Bold',
								color: _tertiary2,
							}}
						>
							{_currency(subTotal.subTotal)}
						</Text>
					</View>
				</View>
				<View style={{ marginBottom: RFValue(30) }}>
					<Text
						style={{
							fontSize: RFValue(16),
							fontFamily: 'Inter-Medium',
							color: _primary,
						}}
					>
						Any Special Instruction?
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							backgroundColor: _tertiary2,
							padding: RFValue(10),
							borderRadius: RFValue(5),
							marginVertical: RFValue(5),
							alignItems: 'center',
						}}
					>
						<Text
							style={{
								fontSize: RFValue(14),
								color: _primary,
							}}
						>
							{instruction.text}
						</Text>
					</View>
					{/*<Textarea*/}
					{/*	value={`${instruction.instruction}`}*/}
					{/*	underlineColorAndroid={'transparent'}*/}
					{/*	style={{ ...styles.instructions_input }}*/}
					{/*	editable={false}*/}
					{/*	disabled={true}*/}
					{/*/>*/}
				</View>
				{/* Pickup Date and Time */}
				<View style={{ marginBottom: RFValue(30) }}>
					<View style={{}}>
						<Text
							style={{
								fontSize: RFValue(16),
								fontFamily: 'Inter-Medium',
								color: _primary,
							}}
						>
							Pickup
						</Text>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								backgroundColor: _tertiary2,
								padding: RFValue(10),
								borderRadius: RFValue(5),
								marginVertical: RFValue(5),
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									fontSize: RFValue(14),
									color: _primary,
								}}
							>
								{pickupData.datetime.format('ddd MMM D, YYYY')}
							</Text>
							<Text
								style={{
									fontSize: RFValue(14),
									color: _primary,
								}}
							>
								{pickupData.datetime.format('h:mm a')}
							</Text>
						</View>
					</View>
					{/* Pickup Address */}
					<View style={{ marginBottom: 5 }}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								backgroundColor: _tertiary2,
								padding: RFValue(10),
								borderRadius: RFValue(5),
								flex: 1,
							}}
						>
							<View style={{ flexDirection: 'row', flex: 1 }}>
								<Icon
									type={'MaterialIcons'}
									name={'person-pin-circle'}
									style={{
										color: _primary,
										fontSize: RFValue(25),
										marginRight: RFValue(10),
									}}
								/>
								<Text
									style={{
										flexWrap: 'wrap',
										flexShrink: 1,
										fontSize: RFValue(14),
										color: _primary,
									}}
								>
									{pickupData.address}
								</Text>
							</View>
						</View>
					</View>
				</View>
				{/*  Delivery Date and Time */}
				<View style={{}}>
					<Text
						style={{
							fontSize: RFValue(16),
							fontFamily: 'Inter-Medium',
							color: _primary,
						}}
					>
						Delivery ( {deliveryData.type.toUpperCase()} )
					</Text>
					<View
						style={{
							backgroundColor: _tertiary2,
							padding: RFValue(10),
							borderRadius: RFValue(5),
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginVertical: RFValue(5),
						}}
					>
						<Text
							style={{
								fontSize: RFValue(14),
								color: _primary,
							}}
						>
							{deliveryData.datetime.format('ddd MMM D, YYYY')}
						</Text>
						<Text
							style={{
								fontSize: RFValue(14),
								color: _primary,
							}}
						>
							{deliveryData.datetime.format('h:mm a')}
						</Text>
					</View>
				</View>
				{/* Delivery Address */}
				<View style={{ marginBottom: RFValue(30) }}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							// alignItems: 'center',
							backgroundColor: _tertiary2,
							padding: RFValue(10),
							borderRadius: RFValue(5),
							flex: 1,
						}}
					>
						<View style={{ flexDirection: 'row', flex: 1 }}>
							<Icon
								type={'MaterialIcons'}
								name={'person-pin-circle'}
								style={{
									color: _primary,
									fontSize: RFValue(25),
									marginRight: RFValue(10),
								}}
							/>
							<Text
								style={{
									flexWrap: 'wrap',
									flexShrink: 1,
									fontSize: RFValue(14),
									color: _primary,
								}}
							>
								{deliveryData.address}
							</Text>
						</View>
					</View>
				</View>
			</Content>
			{renderConfirmModal()}
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					paddingTop: RFValue(10),
					height: RFValue(40),
					backgroundColor: '#fff',
				}}
			>
				<TouchableOpacity
					onPress={() => {
						editOrder();
					}}
					style={{
						...styles.nextButton,
						backgroundColor: 'transparent',
						marginRight: RFValue(30),
					}}
				>
					{/*<Text*/}
					{/*	style={{*/}
					{/*		color: _tertiary,*/}
					{/*		fontSize: RFValue(18),*/}
					{/*		fontFamily: 'Inter-Bold',*/}
					{/*	}}*/}
					{/*>*/}
					{/*	Edit*/}
					{/*</Text>*/}
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setConfirmModal(true);
					}}
					style={{
						...styles.nextButton,
						backgroundColor: _tertiary,
						marginLeft: RFValue(30),
					}}
				>
					<Text
						style={{
							color: _primary2,
							fontSize: RFValue(18),
							fontFamily: 'Inter-Bold',
						}}
					>
						Delete
					</Text>
				</TouchableOpacity>
			</View>
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
		borderRadius: RFValue(5),
		borderTopWidth: 0,
		marginBottom: RFValue(30),
	},
	service_invoice_category_header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomColor: _primary2,
		borderBottomWidth: 1,
		marginBottom: RFValue(10),
	},
	service_invoice_category_header_title: {
		color: _primary2,
		fontFamily: 'Inter-Medium',
		fontSize: RFValue(16),
	},
	service_invoice_category_header_subtitle: {
		color: _primary2,
		fontFamily: 'Inter-Medium',
		fontSize: RFValue(12),
	},
	instructions_input: {
		color: _primary,
		fontFamily: 'Inter-Medium',
		fontSize: RFValue(14),
		paddingVertical: RFValue(10),
		height: RFValue(80),
		borderRadius: RFValue(5),
		backgroundColor: _tertiary2,
	},
	totalItemRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomColor: _primary2,
		marginVertical: RFValue(5),
		paddingVertical: RFValue(10),
	},
	totalItemText: {
		paddingHorizontal: RFValue(20),
		color: _primary2,
		fontFamily: 'Inter-Medium',
		fontSize: RFValue(14),
	},
	nextButton: {
		alignItems: 'center',
		flex: 0.5,
		paddingHorizontal: RFValue(10),
		paddingVertical: RFValue(5),
		borderRadius: RFValue(5),
		marginRight: RFValue(10),
		marginVertical: 0,
	},
	modal: {},
	modal_container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	modal_subcontainer: {
		flex: 0,
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: _tertiary2,
		padding: RFValue(30),
		borderRadius: RFValue(5),
		borderWidth: RFValue(2),
		borderColor: _secondary,
		width: _screenWidth * 0.8,
	},
	modal_text: { color: _primary2, fontSize: RFValue(14), textAlign: 'center' },
	modal_button_text: {
		color: _tertiary,
		fontSize: RFValue(14),
		textAlign: 'center',
		fontFamily: 'Inter-Medium',
	},
	modal_button: {
		// justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: _primary2,
		paddingVertical: RFValue(5),
		paddingHorizontal: RFValue(10),
		borderRadius: RFValue(5),
		width: _screenWidth * 0.2,
	},
	modal_button_container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: RFValue(20),
	},
});
