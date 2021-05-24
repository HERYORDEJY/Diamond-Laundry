import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
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
import { Container, Content, Icon } from 'native-base';
import ConfirmItem from '../../components/ConfirmItem';
import { _screenWidth } from '../../utils/dimension';
import { TabActions, useNavigation } from '@react-navigation/native';
import CreditCardDisplay from 'react-native-credit-card-display';
import Input from '../../components/Input';
import LinkText from '../../components/LinkText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';

export default function CardSettings() {
	const [state, setState] = useState({
		delivery_type: 'normal',
		instructions: '',
		address_id: '',
		credit_card: [
			{
				id: 0,
				name: 'OYEBODE YUSUF',
				number: '5399839629143153',
				expiration: '12/23',
				cvc: '123',
			},
			{
				id: 1,
				name: 'AYODEJI YUSUF',
				number: '53589303629143153',
				expiration: '11/24',
				cvc: '123',
			},
		],
		textInput: [],
	});

	const navigation = useNavigation();

	//function to add Credit Card dynamically
	function addCreditCard(id, card) {
		let credit_card = state.credit_card;
		credit_card.push({ id: id, ...card });
		setState({ ...state, credit_card });
	}

	//function to remove Credit Card dynamically
	function removeCreditCard(id) {
		let credit_card = state.credit_card;
		credit_card = credit_card.filter((card) => card.id !== id);
		setState({ credit_card });
	}

	function saveAddress(params) {}

	function cancel(credit_card) {
		const credit_card_ = [
			{
				id: 0,
				name: 'OYEBODE YUSUF',
				number: '5399839629143153',
				expiration: '12/23',
				cvc: '123',
			},
		];
		setState({ ...state, credit_card: credit_card_ });
		navigation.navigate('Home', {
			screen: 'Profile',
			initial: false,
		});
	}

	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			{/* Header */}
			<Header
				bodyText={'Card Settings'}
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
				{state.credit_card.map((card, index) => (
					<View key={card.id} style={styles.card_container}>
						<CreditCardDisplay
							fontSize={RFValue(14)}
							fontColor={_tertiary2}
							frontStyles={{
								resizeMode: 'contain',
								fontFamily: 'Inter-Medium',
							}}
							// frontImage={require('../../../splashscreen/Asset 1ldpi.png')}
							cardStyles={{ flex: 1, width: '100%' }}
							number={card.number}
							cvc={card.cvc}
							expiration={card.expiration}
							name={card.name}
							backImage={require('../../../splashscreen/Asset 1ldpi.png')}
						/>
						<View style={styles.actions}>
							<TouchableOpacity
								style={{ flex: 1, justifyContent: 'center' }}
								onPress={() =>
									navigation.navigate('AddCard', { status: 'edit' })
								}
							>
								<Icon
									name={'create'}
									style={{
										color: _primary2,
										fontSize: RFValue(25),
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}>
								<Icon
									name={'trash'}
									style={{
										color: _primary2,
										fontSize: RFValue(25),
									}}
								/>
							</TouchableOpacity>
						</View>
					</View>
				))}
				<LinkText
					onPress={() => navigation.navigate('AddCard', { status: 'new' })}
					text={'Add new credit card?'}
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
	card_container: {
		marginBottom: RFValue(25),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	actions: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

//"delete","delete-circle","delete-circle-outline","delete-empty","delete-empty-outline","delete-forever","delete-forever-outline","delete-outline","delete-restore","delete-sweep","delete-sweep-outline","delete-variant"
