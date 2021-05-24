import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import moment from 'moment';
import {
	_primary,
	_primary2,
	_secondary,
	_tertiary,
	_tertiary2,
} from '../../utils/colors';
import Header from '../../components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Container, Content, Textarea } from 'native-base';
import ConfirmItem from '../../components/ConfirmItem';
import { _screenWidth } from '../../utils/dimension';
import { TabActions, useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import LinkText from '../../components/LinkText';
import { RFValue } from 'react-native-responsive-fontsize';
import SocialContactButton from '../../components/SocialContactButton';

export default function ContactUs() {
	const [state, setState] = useState({
		delivery_type: 'normal',
		instructions: '',
		address_id: '',
		address_: [{ id: 0, address: 'Lokoja' }],
		textInput: [],
	});

	const navigation = useNavigation();

	const address_ = [{ id: 0, address: 'Lokoja' }];

	//function to add TextInput dynamically
	function addAddress(id, address) {
		let address_ = state.address_;
		address_.push({ id: id, address: address });
		setState({ ...state, address_ });
	}

	//function to remove TextInput dynamically
	function removeAddress(id) {
		let address_ = state.address_;
		address_ = address_.filter((add) => add.id !== id);
		setState({ address_ });
	}

	function saveAddress(params) {}

	function cancel(params) {
		setState({ ...state, address_: address_ });
		navigation.navigate('Home', {
			screen: 'Profile',
			initial: false,
		});
	}

	let numOfLinesCompany = 2;
	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			{/* Header */}
			<Header
				bodyText={'Contact Us'}
				leftComponent={'back'}
				rightComponent={'notification'}
				goBack={() => navigation.goBack()}
			/>
			{/* Content Section */}
			<Content
				style={{ paddingHorizontal: _screenWidth > 450 ? RFValue(30) : 0 }}
				contentContainerStyle={styles.content}
				scrollEnabled={true}
				showsVerticalScrollIndicator={false}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						marginBottom: RFValue(20),
						paddingBottom: RFValue(20),
						borderBottomColor: _primary,
						borderBottomWidth: RFValue(1),
					}}
				>
					<SocialContactButton iconName={'whatsapp'} />
					<SocialContactButton iconName={'telegram'} />
				</View>
				<View
					style={{
						alignItems: 'center',
						padding: 5,
					}}
				>
					<Text
						style={{
							fontFamily: 'Inter-Bold',
							color: _primary2,
							fontSize: RFValue(18),
						}}
					>
						Email
					</Text>
				</View>
				<View style={{ marginBottom: RFValue(20) }}>
					<Text style={styles.label}>Subject</Text>
					<Input placeholder={''} />
				</View>
				<View>
					<Text style={styles.label}>Message</Text>
					<Textarea
						// value={`${state.input_value}`}
						placeholder={'Write here...'}
						placeholderTextColor={_secondary}
						underlineColorAndroid={'transparent'}
						style={{ ...styles.instructions_input }}
						onChangeText={(value) => {
							setState({ ...state, instructions: value });
						}}
						multiline={true}
						scrollEnabled={true}
						disableFullscreenUI={true}
					/>
				</View>

				<View style={{ marginTop: RFValue(30) }}>
					<TouchableOpacity
						onPress={() => cancel()}
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
							Send
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => cancel()}
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
		paddingHorizontal: _screenWidth > 450 ? RFValue(30) : RFValue(20),
		paddingBottom: 10,
	},
	content: {
		paddingBottom: RFValue(20),
		marginBottom: RFValue(20),
		marginTop: RFValue(20),
	},
	label: { fontSize: RFValue(14), color: _primary },
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
		marginBottom: 20,
	},
	service_invoice_category_header_title: {
		color: _primary2,
		fontFamily: 'Inter-Medium',
		fontSize: 17,
	},
	service_invoice_category_header_subtitle: {
		color: _primary2,
		fontFamily: 'Inter-Medium',
		fontSize: 19,
	},
	instructions_container: {
		paddingVertical: 10,
		// height: 90,
		borderRadius: 10,
		backgroundColor: _tertiary2,
	},
	instructions: {
		color: _primary,
		fontFamily: 'Inter-Medium',
		fontSize: 18,
	},
	// instructions_input: {
	// 	backgroundColor: _tertiary2,
	// 	padding: RFValue(10),
	// 	color: _primary,
	// 	fontSize: RFValue(14),
	// 	borderRadius: RFValue(5),
	// },
	instructions_input: {
		color: _primary,
		fontFamily: 'Inter-Medium',
		fontSize: RFValue(14),
		paddingVertical: RFValue(10),
		height: RFValue(150),
		borderRadius: RFValue(5),
		backgroundColor: _tertiary2,
	},
});
