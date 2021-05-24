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
import 'react-native-get-random-values';
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

export default function PickupDelivery(props) {
	const [state, setState] = useState({
		delivery_type: 'normal',
		instruction: '',
	});

	const [instruction, setInstruction] = useState({});

	// Service Item Global Context store
	const {
		service,
		items,
		subTotal,
		pickupDelivery,
		uniqueId,
		_setInstruction,
	} = useGlobalHook('serviceItem');

	const { pickupData, deliveryData } = pickupDelivery;
	const { Guy, Lady } = items;
	const { id, order } = uniqueId;

	// Navigation instance
	const navigation = useNavigation();

	// Save data function
	const saveData = () => {
		_setInstruction({ ...instruction });
		navigation.navigate('Checkout');
	};

	function getInstruction(type, content) {
		setInstruction({ ...instruction, [type]: content });
		console.log(instruction);
	}

	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			{/* Header */}
			<Header
				bodyText={'Confirm Service'}
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
						Order No. {uniqueId.order}
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
										{_currency(subTotal.subTotalLady)}
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
					<Textarea
						// value={`${state.input_value}`}
						placeholder={'Write here...'}
						placeholderTextColor={_secondary}
						underlineColorAndroid={'transparent'}
						style={{ ...styles.instructions_input }}
						onChangeText={(text) => {
							getInstruction('text', text);
						}}
					/>
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
						saveData();
					}}
					style={{
						...styles.nextButton,
						backgroundColor: _primary,
					}}
				>
					<Text
						style={{
							color: _tertiary,
							fontSize: RFValue(18),
							fontFamily: 'Inter-Bold',
						}}
					>
						Next
					</Text>
					<Icon
						type={'Feather'}
						name={'chevron-right'}
						style={{ color: _tertiary, fontSize: RFValue(20) }}
					/>
				</TouchableOpacity>
				<View
					style={{
						flex: 1,
						alignItems: 'flex-end',
					}}
				>
					<Text
						style={{
							fontSize: RFValue(20),
							fontFamily: 'Inter-Bold',
							color: _primary,
						}}
					>
						{_currency(subTotal.subTotal)}
					</Text>
				</View>
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
		fontSize: RFValue(14),
		paddingVertical: RFValue(10),
		height: RFValue(100),
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
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		flex: 0.5,
		paddingHorizontal: RFValue(10),
		paddingVertical: RFValue(5),
		borderRadius: RFValue(5),
		marginRight: RFValue(10),
		marginVertical: 0,
	},
});
