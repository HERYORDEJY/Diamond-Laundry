import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import Feather from 'react-native-vector-icons/Feather';
import { _primary2 } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'native-base';

export default function DeliveredOrders() {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate('ViewOrderDetails', { status: 'delivered' })
			}
			style={styles.container}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Icon
					type={'Feather'}
					name={'check'}
					style={{
						marginRight: RFValue(20),
						color: _primary2,
						fontSize: RFValue(30),
					}}
				/>
				<View>
					<Text style={styles.service}>Wash and Iron</Text>
					<Text style={styles.order}>Order #221</Text>
				</View>
			</View>
			<View>
				<Text style={styles.status}>Delivered</Text>
			</View>
		</TouchableOpacity>
	);
}
