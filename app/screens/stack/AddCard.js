import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import {
	_primary,
	_primary2,
	_secondary,
	_tertiary,
	_tertiary2,
} from '../../utils/colors';
import Header from '../../components/Header';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Container, Content, Icon, Textarea } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { _screenWidth } from '../../utils/dimension';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Input from '../../components/Input';
import LinkText from '../../components/LinkText';
import * as Animatable from 'react-native-animatable';
import RNCreditCard from '../../components/RNCreditCard';

export default function AddCard({
	route: {
		params: { status },
	},
}) {
	const [state, setState] = useState({
		input_value: '',
		save_card: false,
	});
	const navigation = useNavigation();
	const selected = +state.input_value > 0;

	function onSaveCard(params) {
		setState({ ...state, save_card: !state.save_card });
	}

	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			{/* Header */}
			<Header
				bodyText={'Add new card'}
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
							fontSize: RFValue(18),
							color: _primary,
							fontFamily: 'Inter-Medium',
							marginBottom: RFValue(20),
						}}
					>
						Enter Card Details
					</Text>
					{/* <View>
						<Text style={styles.label}>Number</Text>
						<Input
							inputStyle={{ textAlign: 'center' }}
							placeholder={'**** **** **** ****'}
							onChangeText={(value) => {
								setState({ ...state, number: value });
							}}
							keyboardType={'numeric'}
							multiline={false}
							caretHidden={true}
						/>
					</View>
					<View>
						<Text style={styles.label}>Expiration</Text>
						<Input
							inputStyle={{ textAlign: 'center' }}
							placeholder={'MM/YY'}
							onChangeText={(value) => {
								setState({ ...state, expiry: value });
							}}
							keyboardType={'numeric'}
							multiline={false}
							caretHidden={true}
						/>
					</View>
					<View>
						<Text style={styles.label}>CCV</Text>
						<Input
							inputStyle={{ textAlign: 'center' }}
							placeholder={'***'}
							onChangeText={(value) => {
								setState({ ...state, ccv: value });
							}}
							keyboardType={'numeric'}
							multiline={false}
							caretHidden={true}
						/>
					</View> */}
					<RNCreditCard
						new={status === 'new'}
						navigation={navigation}
						onSave={onSaveCard}
						save={state.save_card}
					/>
					<LinkText
						onPress={() => {}}
						text={'How save is my information?'}
						textStyle={{
							fontSize: RFValue(14),
							textDecorationLine: 'underline',
							padding: RFValue(10),
						}}
						containerStyle={{ alignItems: 'center', margin: 0 }}
					/>
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

	input_: {
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

// TODO:
