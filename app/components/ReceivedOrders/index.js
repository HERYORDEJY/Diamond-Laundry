import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import Feather from 'react-native-vector-icons/Feather';
import { _primary2 } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'native-base';
import { useGlobalHook } from '@devhammed/use-global-hook';

export default function ReceivedOrders({ service, order, id, pickupData }) {
	//  Order Global Context Store
	const { viewOrderID, _setViewOrderID } = useGlobalHook('viewOrderStore');

	const navigation = useNavigation();
	function viewOrder(id) {
		_setViewOrderID(id);
		navigation.navigate('ViewOrderDetails', { status: 'placed' });
	}
	return (
		<>
			<View style={styles.container}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Icon
						type={'Feather'}
						name={'triangle'}
						style={{
							marginRight: RFValue(20),
							color: _primary2,
							fontSize: RFValue(30),
						}}
					/>
					<View style={{}}>
						<Text style={styles.service}>{service}</Text>
						<Text style={styles.order}>Order #{order}</Text>
					</View>
				</View>
				<TouchableOpacity onPress={() => viewOrder(id)}>
					<Icon
						name={'create'}
						style={{
							color: _primary2,
							fontSize: RFValue(30),
							marginRight: RFValue(10),
						}}
					/>
				</TouchableOpacity>
			</View>
		</>
	);
}
