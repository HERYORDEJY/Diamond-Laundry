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
import { Container, Content, Textarea } from 'native-base';
import Button from '../../components/Button';
import SelectItem from '../../components/SelectItem';
import { items_cate, services } from '../../api';
import DropdownMenu from '../../components/Dropdown';
import ConfirmItem from '../../components/ConfirmItem';
import { _screenWidth } from '../../utils/dimension';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { useGlobalHook } from '@devhammed/use-global-hook';
import { RFValue } from 'react-native-responsive-fontsize';

export default function ViewOrderDetails() {
	const [state, setState] = useState({
		delivery_type: 'normal',
		instruction: '',
	});

	// Service Item Global Context store
	// const {
	//   service,
	//   items,
	//   subTotal,
	//   pickupDelivery,
	//   uniqueId,
	//   _setInstruction,
	// } = useGlobalHook('serviceItem');

	//  Order Global Context Store
	const { activeOrder, pendingOrder } = useGlobalHook('orderStore');

	// View Order Global Context Store
	const { viewOrderID, _setViewOrderID } = useGlobalHook('viewOrderStore');

	// Navigation instance
	const navigation = useNavigation();

	// Save data function
	const saveData = () => {
		_setInstruction({ instruction: state.instruction });
		navigation.navigate('Checkout');
	};

	// Get the pending Order
	const getOrder = (id) => {
		return pendingOrder.filter((order) => order.uniqueId.id === viewOrderID)[0];
	};

	//
	const {
		service,
		items,
		subTotal,
		pickupDelivery,
		uniqueId,
		instruction,
	} = getOrder;

	const { pickupData, deliveryData } = pickupDelivery;
	const { Guy, Lady } = items;
	const { id, order } = uniqueId;

	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			{/* Header */}
			<Header
				bodyText={'Confirm services'}
				leftComponent={'back'}
				goBack={() => navigation.goBack()}
			/>
			{/* Content Section */}
			<Content
				style={{ paddingHorizontal: _screenWidth > 450 ? 35 : 0 }}
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
								<Text
									style={{
										backgroundColor: _secondary,
										fontSize: 18,
										color: _tertiary2,
										paddingHorizontal: 20,
									}}
								>
									Guy
								</Text>
								{Object.keys(Guy).map((item, index) => (
									<View
										style={{ paddingHorizontal: 20 }}
										key={index.toString()}
									>
										<ConfirmItem
											name={Guy[`${item}`].name}
											rate={Guy[`${item}`].rate}
											input_value={Guy[`${item}`].quantity}
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
								<Text
									style={{
										backgroundColor: _secondary,
										fontSize: 18,
										color: _tertiary2,
										paddingHorizontal: 20,
									}}
								>
									Lady
								</Text>
								{Object.keys(Lady).map((item, index) => (
									<View
										style={{ paddingHorizontal: 20 }}
										key={index.toString()}
									>
										<ConfirmItem
											name={Lady[`${item}`].name}
											rate={Lady[`${item}`].rate}
											input_value={Lady[`${item}`].quantity}
										/>
									</View>
								))}
							</View>
						</View>
					</View>
				)}
				<View style={{ marginBottom: 20 }}>
					<Text
						style={{
							fontSize: 20,
							fontFamily: 'Inter-Medium',
							color: _primary,
						}}
					>
						Any Special Instruction?
					</Text>
					<Textarea
						// value={`${state.input_value}`}
						placeholder={'Write here...'}
						placeholderTextColor={_secondary}
						underlineColorAndroid={'transparent'}
						style={{ ...styles.instructions_input }}
						onChangeText={(value) => {
							setState({ ...state, instructions: value });
						}}
					/>
				</View>
				{/* Pickup Date and Time */}
				<View style={{ marginBottom: 20 }}>
					<View style={{ marginBottom: 5 }}>
						<Text
							style={{
								fontSize: 20,
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
								padding: 10,
								borderRadius: 10,
								marginVertical: 6,
							}}
						>
							<Text
								style={{
									fontSize: 17,
									color: _primary,
								}}
							>
								{pickupData.datetime.format('ddd MMM D, YYYY')}
							</Text>
							<Text
								style={{
									fontSize: 17,
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
								// alignItems: 'center',
								backgroundColor: _tertiary2,
								padding: 10,
								borderRadius: 10,
								marginVertical: 6,
								flex: 1,
							}}
						>
							<View style={{ flexDirection: 'row', flex: 1 }}>
								<MaterialIcons
									name={'person-pin-circle'}
									size={30}
									color={_primary}
									style={{ marginRight: 5 }}
								/>
								<Text
									style={{
										flexWrap: 'wrap',
										flexShrink: 1,
										fontSize: 17,
										color: _primary,
									}}
								>
									{pickupData.address}
								</Text>
							</View>
							{/*<TouchableOpacity>*/}
							{/*  <MaterialIcons*/}
							{/*    name={'create'}*/}
							{/*    size={30}*/}
							{/*    color={_primary}*/}
							{/*    style={{}}*/}
							{/*  />*/}
							{/*</TouchableOpacity>*/}
						</View>
					</View>
				</View>
				{/*  Delivery Date and Time */}
				<View style={{ marginBottom: 5 }}>
					<Text
						style={{
							fontSize: 20,
							fontFamily: 'Inter-Medium',
							color: _primary,
						}}
					>
						Delivery ( {deliveryData.type.toUpperCase()} )
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							backgroundColor: _tertiary2,
							padding: 10,
							borderRadius: 10,
							marginVertical: 6,
						}}
					>
						<Text
							style={{
								fontSize: 17,
								color: _primary,
							}}
						>
							{deliveryData.datetime.format('ddd MMM D, YYYY')}
						</Text>
						<Text
							style={{
								fontSize: 17,
								color: _primary,
							}}
						>
							{deliveryData.datetime.format('h:mm a')}
						</Text>
					</View>
				</View>
				{/* Delivery Address */}
				<View style={{ marginBottom: 20 }}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							// alignItems: 'center',
							backgroundColor: _tertiary2,
							padding: 10,
							borderRadius: 10,
							marginVertical: 6,
							flex: 1,
						}}
					>
						<View style={{ flexDirection: 'row', flex: 1 }}>
							<MaterialIcons
								name={'person-pin-circle'}
								size={30}
								color={_primary}
								style={{ marginRight: 5 }}
							/>
							<Text
								style={{
									flexWrap: 'wrap',
									flexShrink: 1,
									fontSize: 17,
									color: _primary,
								}}
							>
								{deliveryData.address}
							</Text>
						</View>
						{/*<TouchableOpacity>*/}
						{/*  <MaterialIcons*/}
						{/*    name={'create'}*/}
						{/*    size={30}*/}
						{/*    color={_primary}*/}
						{/*    style={{}}*/}
						{/*  />*/}
						{/*</TouchableOpacity>*/}
					</View>
				</View>
			</Content>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					paddingTop: 20,
					height: 40,
					marginBottom: 10,
				}}
			>
				<TouchableOpacity
					onPress={() => saveData()}
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						backgroundColor: _primary,
						paddingHorizontal: 10,
						paddingVertical: 5,
						borderRadius: 10,
						marginVertical: 10,
					}}
				>
					<Text
						style={{
							color: _tertiary,
							fontSize: 24,
							fontFamily: 'Inter-Bold',
						}}
					>
						Next
					</Text>
					<Feather name={'chevron-right'} color={_tertiary} size={30} />
				</TouchableOpacity>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: _screenWidth > 450 ? 45 : 20,
		paddingBottom: 20,
	},
	content: {
		paddingBottom: RFValue(20),
		marginBottom: RFValue(20),
		marginTop: RFValue(20),
	},
	track: { marginBottom: 15 },
	track_box_container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 25,
	},
	track_text: { color: _primary2, fontSize: 13 },
	service_invoice_container: {
		backgroundColor: _tertiary2,
		// padding: 20,
		borderRadius: 10,
		marginBottom: 20,
	},
	service_invoice_category_header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomColor: _primary2,
		borderBottomWidth: 1,
		marginBottom: 10,
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
		fontSize: 17,
		paddingVertical: 10,
		height: 90,
		borderRadius: 10,
		backgroundColor: _tertiary2,
	},
});
