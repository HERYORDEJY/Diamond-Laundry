import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
	Alert,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	Image,
	TouchableOpacity,
	Text,
} from 'react-native';
import { Icon } from 'native-base';
import LottieView from 'lottie-react-native';
import CreditCardForm, { Button, FormModel } from 'rn-credit-card';
import { styles } from './styles';
import { _primary, _primary2, _tertiary } from '../../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';

export interface Props {
	isHandleSubmit: () => void;
	isFormValid: Boolean;
	new: Boolean;
	navigation: Function;
	save: Boolean;
	onSave: () => void;
}

const RNCreditCard: React.FC<Props> = ({ ...props }: Props) => {
	const [state, setState] = useState({ save_card: '' });

	const formMethods = useForm<FormModel>({
		// to trigger the validation on the blur event
		mode: 'onBlur',
		defaultValues: {
			holderName: '',
			cardNumber: '',
			expiration: '',
			cvv: '',
		},
	});
	const { handleSubmit, formState } = formMethods;

	function onSubmit(model: FormModel) {
		// Alert.alert('Success: ' + JSON.stringify(model, null, 2));
		console.log(model);
	}

	return (
		<FormProvider {...formMethods}>
			{/* <SafeAreaView style={styles.container}>
				<KeyboardAvoidingView
					style={styles.avoider}
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				> */}
			<CreditCardForm
				fonts={{
					regular: 'Inter-Regular',
					bold: 'Inter-Bold',
				}}
				// backgroundImage={
				// 	<Image
				// 		style={{
				// 			position: 'absolute',
				// 			width: '100%',
				// 			height: '100%',
				// 			borderRadius: 12,
				// 		}}
				// 		source={require('../../assets/images/icon.png')}
				// 	/>
				// }
				inputColors={{
					focused: _primary,
					errored: '#B00020',
					regular: _primary2,
				}}
				LottieView={LottieView}
				horizontalStart
				overrides={{
					labelText: {
						marginTop: 16,
					},
				}}
				// translations={{
				// 	cardNumber: 'Card Number',
				// 	cardHolderName: 'Cardholder Name',
				// 	nameSurname: 'Name Surname',
				// 	mmYY: 'MM/YY',
				// 	expiration: 'Expiration',
				// 	securityCode: 'CCV',
				// 	next: 'Next',
				// 	done: 'Done',
				// 	cardNumberRequired: 'Card number is required.',
				// 	cardNumberInvalid: 'This card number looks invalid.',
				// 	cardHolderNameRequired: 'Cardholder name is required.',
				// 	cardHolderNameInvalid: 'This cardholder name looks invalid.',
				// 	expirationRequired: 'Expiration date is required.',
				// 	expirationInvalid: 'This expiration date looks invalid.',
				// 	securityCodeRequired: 'Security code is required.',
				// 	securityCodeInvalid: 'This security date looks invalid.',
				// }}
			/>
			{/* </KeyboardAvoidingView> */}

			{/* <Button
						style={styles.button}
						title={'CONFIRM PAYMENT'}
						onPress={handleSubmit(onSubmit)}
					/> */}
			{props.new && (
				<TouchableOpacity
					onPress={props.onSave}
					style={{
						flexDirection: 'row',
						backgroundColor: 'transparent',
						marginBottom: RFValue(20),
						alignItems: 'center',
					}}
				>
					<Icon
						type={'MaterialCommunityIcons'}
						name={props.save ? 'square' : 'square-outline'}
						style={{
							color: _primary2,
							fontSize: RFValue(20),
							marginRight: RFValue(10),
						}}
					/>
					<Text
						style={{
							fontSize: RFValue(14),
							color: _primary,
						}}
					>
						Save card details
					</Text>
				</TouchableOpacity>
			)}
			{formState.isValid && (
				<TouchableOpacity
					// onPress={() => navigation.navigate('PaymentSuccess')}
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
			)}
			<TouchableOpacity
				onPress={() => props.navigation.goBack()}
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
						color: _primary,
						textAlign: 'center',
					}}
				>
					Cancel
				</Text>
			</TouchableOpacity>

			{/* </SafeAreaView> */}
		</FormProvider>
	);
};

export default RNCreditCard;
