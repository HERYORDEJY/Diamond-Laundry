import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import Feather from 'react-native-vector-icons/Feather';
import { _primary2 } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'native-base';
import { _naira } from '../../api';
import moment from 'moment';
import { _currency } from '../../utils/textFormatter';
import { useGlobalHook } from '@devhammed/use-global-hook';

export default function TransactionItem({
	service,
	dateTime,
	id,
	totalAmount,
	paymentType,
}) {
	const {
		transactionList,
		_setTransactionList,
		currentTrans,
		_setCurrentTrans,
	} = useGlobalHook('transactionListStore');

	function onPress() {
		_setCurrentTrans(id);
		navigation.navigate('ViewPaymentDetails');
	}

	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				...styles.menu_item,
			}}
		>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<Text style={styles.menu_text}>{service.name}</Text>
				<Text style={styles.menu_text}>{_currency(totalAmount)}</Text>
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<Text style={styles.menu_subtext}>
					{paymentType} - {id}
				</Text>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<Text
					style={[
						styles.menu_text,
						{ fontFamily: 'Inter-Medium', paddingRight: RFValue(5) },
					]}
				>
					{moment(dateTime).format('ddd MMM D, YYYY')}
				</Text>
				<Text
					style={[
						styles.menu_text,
						{ fontFamily: 'Inter-Medium', paddingLeft: RFValue(5) },
					]}
				>
					{moment(dateTime).format('h:mm a')}
				</Text>
			</View>
		</TouchableOpacity>
	);
}
