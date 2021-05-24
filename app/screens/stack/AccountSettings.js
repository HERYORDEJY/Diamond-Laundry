import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
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
import { Container, Content, Icon } from 'native-base';
import { _screenWidth } from '../../utils/dimension';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import LinkText from '../../components/LinkText';
import { RFValue } from 'react-native-responsive-fontsize';

export default function AccountSettings() {
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

	function onChangeText(type, name, value) {
		console.warn(`${type} : ${name} : ${value}`);
	}

	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			{/* Header */}
			<Header
				bodyText={'Account Settings'}
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
				<View>
					<Text style={styles.label}>Fullname</Text>
					<Input onChangeText={(text) => onChangeText(' ', ' ', text)} />
				</View>
				<View>
					<Text style={styles.label}>Email</Text>
					<Input onChangeText={(text) => onChangeText(' ', ' ', text)} />
				</View>
				<View>
					<Text style={styles.label}>Phone Number</Text>
					<Input onChangeText={(text) => onChangeText(' ', ' ', text)} />
				</View>
				<View>
					<Text style={styles.label}>Occupation</Text>
					<Input onChangeText={(text) => onChangeText(' ', ' ', text)} />
				</View>
				{state.address_.map((add, index) => (
					<View
						key={add.id}
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<View style={{ flex: 1 }}>
							<Text style={styles.label}>
								Address {add.id === 0 ? '(Default)' : index + 1}
							</Text>
							<Input
								// placeholder={'Address'}
								value={`${add.address}`}
							/>
						</View>
						{index > 0 && (
							<TouchableOpacity
								style={{ paddingLeft: RFValue(10) }}
								onPress={() => removeAddress(add.id)}
							>
								<Icon
									type={'MaterialCommunityIcons'}
									name={'close'}
									style={{
										color: _primary2,
										fontSize: RFValue(25),
										marginRight: RFValue(10),
									}}
								/>
							</TouchableOpacity>
						)}
					</View>
				))}
				<LinkText
					onPress={() => addAddress(state.address_.length, 'Lagos')}
					text={'Add new address?'}
					textStyle={{ fontSize: RFValue(14), textDecorationLine: 'underline' }}
					containerStyle={{ alignItems: 'center', margin: 0 }}
				/>

				<View style={{ marginTop: RFValue(10) }}>
					<TouchableOpacity
						onPress={() => navigation.navigate('ViewPaymentDetails')}
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
							Save
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
		paddingBottom: RFValue(10),
	},
	content: {
		paddingBottom: RFValue(20),
		marginBottom: RFValue(20),
		marginTop: RFValue(20),
	},
	label: { fontSize: RFValue(14), color: _primary },
});
