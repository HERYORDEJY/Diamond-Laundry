import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
	TextInput,
	AppRegistry,
	NativeModules,
	Platform,
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
import { _naira, items_cate, services } from '../../api';
import DropdownMenu from '../../components/Dropdown';
import ConfirmItem from '../../components/ConfirmItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ceil } from 'react-native-reanimated';
import { _screenWidth } from '../../utils/dimension';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { RFValue } from 'react-native-responsive-fontsize';
import { useGlobalHook } from '@devhammed/use-global-hook';
import { _currency } from '../../utils/textFormatter';

export default function PaymentSuccess(props) {
	const [state, setState] = useState({
		input_value: '',
		save_card: false,
	});

	const {
		route: { params: transactionID },
	} = props;

	// Service Item Global Context Store
	const { subTotal } = useGlobalHook('serviceItem');

	const {
		transactionList,
		_setTransactionList,
		currentTrans,
		_setCurrentTrans,
	} = useGlobalHook('transactionListStore');

	const selected = +state.input_value > 0;

	const navigation = useNavigation();

	function viewDetails() {
		_setCurrentTrans(transactionID.transactionID);
		navigation.navigate('ViewPaymentDetails');
	}

	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			{/* Content Section */}
			<Content
				style={{ paddingHorizontal: _screenWidth > 450 ? RFValue(30) : 0 }}
				contentContainerStyle={styles.content}
				scrollEnabled={true}
				showsVerticalScrollIndicator={false}
			>
				{/* Pickup Date and Time */}
				<View style={{ marginBottom: RFValue(20) }}>
					<View style={{ alignItems: 'center', margin: RFValue(20) }}>
						<Animatable.View animation={'bounceIn'}>
							<Icon
								type={'MaterialCommunityIcons'}
								name={'checkbox-marked-circle'}
								style={{
									color: _primary2,
									fontSize: RFValue(200),
									marginRight: RFValue(10),
								}}
							/>
						</Animatable.View>

						<Text
							style={{
								fontSize: RFValue(18),
								color: _primary,
							}}
						>
							Payment Successful
						</Text>
					</View>

					<View
						onPress={() => setState({ ...state, save_card: !state.save_card })}
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							backgroundColor: _tertiary2,
							padding: RFValue(10),
							paddingHorizontal: RFValue(20),
							borderRadius: 10,
							marginVertical: 0,
							marginBottom: 75,
							alignItems: 'center',
						}}
					>
						<Text
							style={{
								fontSize: RFValue(16),
								color: _primary,
							}}
						>
							Amount
						</Text>
						<Text
							style={{
								fontSize: RFValue(16),
								color: _primary,
								fontFamily: 'Inter-Bold',
							}}
						>
							{_currency(subTotal.subTotal)}
						</Text>
					</View>
				</View>
				<View style={{ marginTop: RFValue(10) }}>
					<TouchableOpacity
						// onPress={() => navigation.navigate('ViewPaymentDetails')}
						onPress={viewDetails}
						style={{
							backgroundColor: _primary2,
							padding: RFValue(10),
							borderRadius: RFValue(5),
							marginBottom: RFValue(20),
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
							View Details
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate('Home')}
						style={{
							backgroundColor: _tertiary,
							padding: RFValue(10),
							borderRadius: RFValue(5),
							marginBottom: RFValue(10),
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
			</Content>
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
	input_container: {
		flex: 1,
		// flex: 0.25,
		// padding: 10,
	},
	input: {
		flex: 1,
		color: _primary,
		fontFamily: 'Inter-Medium',
		fontSize: 18,
		textAlign: 'center',
		padding: 10,
		// height: 30,
		borderRadius: 10,
		borderColor: _tertiary,
		borderWidth: 1,
		backgroundColor: _tertiary2,
		marginTop: 10,
	},
});
