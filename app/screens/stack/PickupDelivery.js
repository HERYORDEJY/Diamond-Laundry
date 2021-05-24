import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import normalize from 'react-native-normalize';
import normzer from '../../utils/normalizer';
import {
	_primary,
	_primary2,
	_secondary,
	_tertiary,
	_tertiary2,
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
import { _screenWidth } from '../../utils/dimension';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import _DateTimePicker, { minimumDate_ } from '../../components/DateTimePicker';
import Input from '../../components/Input';
import { useGlobalHook } from '@devhammed/use-global-hook';
import { RFValue } from 'react-native-responsive-fontsize';
import { _currency } from '../../utils/textFormatter';
import { _momentDate } from '../../utils/compare-values';

/*
React Native / Expo
Install react-native-get-random-values
Import it before uuid. Since uuid might also appear as a transitive dependency of some other imports it's safest to just import react-native-get-random-values as the very first thing in your entry point:
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
*/

export default function PickupDelivery() {
	// State for Delivery type
	const [state, setState] = useState({ delivery_type: 'normal' });

	let deliveryPrice = state.delivery_type === 'normal' ? 0 : 200;

	// Service Item Global Context Store
	const {
		_setPickupDelivery,
		_setUniqueId,
		subTotal,
		_setSubTotal,
	} = useGlobalHook('serviceItem');

	// State for Pickup Address
	const [pickupAddress, setPickupAddress] = useState({
		show: false,
		address: `25 Ibrahim Taiwo Road, Ilorin, Kwara state,
                ..`,
	});

	// State for Delivery Address
	const [deliveryAddress, setDeliveryAddress] = useState({
		show: false,
		address: `25 Ibrahim Taiwo Road, Ilorin, Kwara state,
                .....................`,
	});

	// Navigation Instance
	const navigation = useNavigation();

	// State for Date and Time  selection
	const [selected, setSelected] = useState({
		date: moment().format('ddd MMM D, YYYY'),
		time: moment().format('h:mm a'),
		datetime: moment().add(121, 'minutes'),
		// datetime: new Date(),
		// datetime: moment().add(24, 'hours'),
		minimumDate: moment().format('YYY-MM-DD'),
	});

	//To Auto Calculate Delivery Time
	const pickup_time = moment(selected.datetime);
	const isPastDate = moment().isAfter(pickup_time);
	const delivery_time =
		state.delivery_type === 'normal'
			? moment(selected.datetime).add(75, 'hours')
			: moment(selected.datetime).add(26, 'hours');

	let todaysDate;
	useEffect(() => {
		todaysDate = moment();
	}, []);

	function saveDateTime(mode) {
		setSelected({ ...selected, [mode]: _date });
		setShow(false);
	}

	function cancelDateTime(mode) {
		setSelected({ ...selected, [mode]: moment().add(121, 'minutes') });
		setShow(false);
	}

	// States for DateTime Component
	const [show, setShow] = useState(false);
	const [mode, setMode] = useState('datetime');

	// Date ant Time change function
	let dateTimeValue = moment();
	const [_date, set_date] = useState();

	// const correctPickupTime = moment().add(2, 'hours').isBefore(moment(value));

	const [correctPickupTime, setCorrectPickupTime] = useState(true);

	const onDateChange = (mode, value) => {
		dateTimeValue = value;
		setShow(true);
		set_date(value);
		setCorrectPickupTime(
			moment().add(7198.5, 'seconds').isBefore(moment(value)),
		);
	};

	//  Save data function
	const saveData = () => {
		const id_ = uuidv4();
		const order_ = id_.split('-');
		_setPickupDelivery({
			pickupData: { datetime: pickup_time, address: pickupAddress.address },
			deliveryData: {
				type: state.delivery_type,
				datetime: delivery_time,
				address: deliveryAddress.address,
				deliveryFee: state.delivery_type === 'express' ? 200 : 0,
			},
		});
		_setSubTotal({
			...subTotal,
			deliveryPrice,
			subTotal: subTotal.subTotal + deliveryPrice,
		});
		_setUniqueId({
			id: id_,
			order: order_[3],
		});
		navigation.navigate('ConfirmService');
	};
	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			{/* Header */}
			<Header
				bodyText={'Pickup & Delivery Details'}
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
						}}
					>
						Pickup Date and Time
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							backgroundColor: _tertiary2,
							padding: RFValue(10),
							borderRadius: RFValue(5),
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								// backgroundColor: _tertiary2,

								// borderRadius: 10,
								// marginVertical: 6,
							}}
						>
							<Text
								style={{
									fontSize: RFValue(14),
									color: _primary,
									marginRight: RFValue(20),
								}}
							>
								{moment(selected.datetime).format('ddd MMM D, YYYY')}
							</Text>
							<Text
								style={{
									fontSize: RFValue(14),
									color: _primary,
								}}
							>
								{moment(selected.datetime).format('h:mm a')}
							</Text>
						</View>
						<TouchableOpacity
							style={{ paddingLeft: 10 }}
							onPress={() => setShow(true)}
						>
							<Icon
								name={'create'}
								style={{
									color: _primary2,
									fontSize: RFValue(25),
									marginRight: RFValue(10),
								}}
							/>
						</TouchableOpacity>
					</View>
					<View>
						{show && (
							<>
								<Text
									style={{
										fontSize: RFValue(12),
										color: _secondary,
										fontFamily: 'Inter-Bold',
										paddingVertical: RFValue(5),
									}}
								>
									⚠️ Pickup time should be 2hours, 30minutes from now
								</Text>
								<View style={{ alignItems: 'center' }}>
									<_DateTimePicker
										_date={selected.datetime}
										_mode={mode}
										_show={show}
										_onDateChange={onDateChange}
										// _minimumDate={state.minimumDate}
									/>
								</View>

								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-around',
										alignItems: 'center',
									}}
								>
									<TouchableOpacity
										onPress={() => saveDateTime('datetime')}
										style={{
											backgroundColor: !correctPickupTime
												? _tertiary2
												: _primary2,
											padding: RFValue(10),
											paddingHorizontal: RFValue(30),
											borderRadius: RFValue(5),
											alignItems: 'center',
										}}
										disabled={!correctPickupTime}
									>
										<Text
											style={{
												fontSize: RFValue(14),
												color: _tertiary,
												textAlign: 'center',
											}}
										>
											Save
										</Text>
									</TouchableOpacity>

									<TouchableOpacity
										onPress={() => cancelDateTime('datetime')}
										style={{
											backgroundColor: _tertiary,
											padding: RFValue(10),
											paddingHorizontal: RFValue(30),
											borderRadius: RFValue(5),
											alignItems: 'center',
										}}
									>
										<Text
											style={{
												fontSize: RFValue(14),
												color: _primary2,
												textAlign: 'center',
											}}
										>
											Cancel
										</Text>
									</TouchableOpacity>
								</View>
							</>
						)}
					</View>
				</View>
				{/* Pickup Address */}
				<View style={{ marginBottom: 20 }}>
					<Text
						style={{
							fontSize: RFValue(16),
							fontFamily: 'Inter-Medium',
							color: _primary,
						}}
					>
						Pickup Address
					</Text>
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
						<View style={{ flexDirection: 'row', flex: 0.7 }}>
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
								{pickupAddress.address}
							</Text>
						</View>
						<TouchableOpacity
							onPress={() => setPickupAddress({ ...pickupAddress, show: true })}
						>
							<Icon
								name={'create'}
								style={{
									color: _primary2,
									fontSize: RFValue(25),
									marginRight: RFValue(10),
								}}
							/>
						</TouchableOpacity>
					</View>
					{pickupAddress.show && (
						<View style={{}}>
							<Textarea
								autoFocus={true}
								multiline={true}
								placeholder={'New address here...'}
								placeholderTextColor={_secondary}
								underlineColorAndroid={'transparent'}
								style={{
									...styles.instructions_input,
									borderRadius: RFValue(5),
								}}
								onChangeText={(text) =>
									setPickupAddress({ ...pickupAddress, edit: text })
								}
							/>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-around',
									alignItems: 'center',
								}}
							>
								<TouchableOpacity
									onPress={() =>
										setPickupAddress({
											...pickupAddress,
											address: pickupAddress.edit,
											show: false,
										})
									}
									style={{
										backgroundColor: _primary2,
										padding: RFValue(10),
										paddingHorizontal: RFValue(30),
										borderRadius: RFValue(5),
										alignItems: 'center',
									}}
								>
									<Text
										style={{
											fontSize: RFValue(14),
											color: _tertiary,
											textAlign: 'center',
										}}
									>
										Save
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() =>
										setPickupAddress({ ...pickupAddress, show: false })
									}
									style={{
										backgroundColor: _tertiary,
										padding: RFValue(10),
										paddingHorizontal: RFValue(30),
										borderRadius: RFValue(5),
										alignItems: 'center',
									}}
								>
									<Text
										style={{
											fontSize: RFValue(14),
											color: _primary2,
											textAlign: 'center',
										}}
									>
										Close
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					)}
				</View>
				{/*  Delivery Date and Time */}
				<View style={{ marginBottom: 20 }}>
					<Text
						style={{
							fontSize: RFValue(16),
							fontFamily: 'Inter-Medium',
							color: _primary,
						}}
					>
						Delivery Date and Time
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginVertical: RFValue(10),
							paddingHorizontal: RFValue(25),
						}}
					>
						{/* Normal */}
						<TouchableOpacity
							onPress={() => setState({ ...state, delivery_type: 'normal' })}
							style={{
								padding: RFValue(10),
								paddingVertical: RFValue(10),
								backgroundColor:
									state.delivery_type === 'normal' ? _primary2 : _tertiary2,
								borderRadius: RFValue(5),
								alignItems: 'center',
							}}
						>
							<DeliveryVan
								color={_tertiary}
								height={RFValue(70)}
								width={RFValue(70)}
								// style={{ marginBottom: 20 }}
							/>
							<Text
								style={{
									fontSize: RFValue(12),
									fontFamily: 'Inter-Bold',
									color: _tertiary,
								}}
							>
								Normal
							</Text>
							<Text
								style={{
									fontSize: RFValue(12),
									color: _tertiary,
								}}
							>
								Delivery in 2 days
							</Text>
							<Text
								style={{
									fontSize: RFValue(12),
									color: _tertiary,
								}}
							>
								Free
							</Text>
						</TouchableOpacity>
						{/* Express */}
						<TouchableOpacity
							onPress={() => setState({ ...state, delivery_type: 'express' })}
							style={{
								padding: RFValue(10),
								paddingVertical: RFValue(10),
								backgroundColor:
									state.delivery_type === 'express' ? _primary2 : _tertiary2,
								borderRadius: RFValue(5),
								alignItems: 'center',
							}}
						>
							<ExpressDeliveryVan
								color={_tertiary}
								height={RFValue(70)}
								width={RFValue(70)}
								// style={{ marginBottom: 20 }}
							/>
							<Text
								style={{
									fontSize: RFValue(12),
									fontFamily: 'Inter-Bold',
									color: _tertiary,
								}}
							>
								Express
							</Text>
							<Text style={{ fontSize: RFValue(12), color: _tertiary }}>
								Delivery in 24hrs
							</Text>
							<Text style={{ fontSize: RFValue(12), color: _tertiary }}>
								{_currency(200)}
							</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							backgroundColor: _tertiary2,
							padding: 10,
							borderRadius: 10,
							marginVertical: 6,
						}}
					>
						<Text
							style={{
								fontSize: RFValue(14),
								color: _primary,
							}}
						>
							{state.delivery_type === 'normal'
								? delivery_time.format('ddd MMM D, YYYY')
								: delivery_time.format('ddd MMM D, YYYY')}
						</Text>
						<Text
							style={{
								fontSize: RFValue(14),
								color: _primary,
							}}
						>
							{state.delivery_type === 'normal'
								? delivery_time.format('h:mm a')
								: delivery_time.format('h:mm a')}
						</Text>
					</View>
				</View>
				{/* Delivery Address */}
				<View style={{ marginBottom: RFValue(20) }}>
					<Text
						style={{
							fontSize: RFValue(16),
							fontFamily: 'Inter-Medium',
							color: _primary,
						}}
					>
						Delivery Address
					</Text>
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
						<View style={{ flexDirection: 'row', flex: 0.7 }}>
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
								{deliveryAddress.address}
							</Text>
						</View>
						<TouchableOpacity
							onPress={() =>
								setDeliveryAddress({ ...deliveryAddress, show: true })
							}
						>
							<Icon
								name={'create'}
								style={{
									color: _primary2,
									fontSize: RFValue(25),
									marginRight: RFValue(10),
								}}
							/>
						</TouchableOpacity>
					</View>
					{deliveryAddress.show && (
						<View style={{}}>
							<Textarea
								autoFocus={true}
								multiline={true}
								placeholder={'New address here...'}
								placeholderTextColor={_secondary}
								underlineColorAndroid={'transparent'}
								style={{
									...styles.instructions_input,
									borderRadius: RFValue(5),
								}}
								onChangeText={(text) =>
									setDeliveryAddress({ ...deliveryAddress, edit: text })
								}
							/>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-around',
									alignItems: 'center',
								}}
							>
								<TouchableOpacity
									onPress={() =>
										setDeliveryAddress({
											...deliveryAddress,
											address: deliveryAddress.edit,
											show: false,
										})
									}
									style={{
										backgroundColor: _primary2,
										padding: RFValue(10),
										paddingHorizontal: RFValue(30),
										borderRadius: RFValue(5),
										alignItems: 'center',
									}}
								>
									<Text
										style={{
											fontSize: RFValue(14),
											color: _tertiary,
											textAlign: 'center',
										}}
									>
										Save
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() =>
										setDeliveryAddress({ ...deliveryAddress, show: false })
									}
									style={{
										backgroundColor: _tertiary,
										padding: RFValue(10),
										paddingHorizontal: RFValue(30),
										borderRadius: RFValue(5),
										alignItems: 'center',
									}}
								>
									<Text
										style={{
											fontSize: RFValue(14),
											color: _primary2,
											textAlign: 'center',
										}}
									>
										Close
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					)}
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
						{_currency(subTotal.subTotal + deliveryPrice)}
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
	instructions_input: {
		color: _primary,
		fontFamily: 'Inter-Medium',
		fontSize: RFValue(14),
		paddingVertical: RFValue(10),
		height: RFValue(80),
		borderRadius: RFValue(5),
		backgroundColor: _tertiary2,
		marginVertical: RFValue(10),
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
