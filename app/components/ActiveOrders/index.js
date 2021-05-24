import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import Feather from 'react-native-vector-icons/Feather';
import { _primary2 } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'native-base';

export default function ActiveOrders({ service, order, id }) {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			disabled
			onPress={() => navigation.navigate('ViewOrderDetails')}
			style={styles.container}
		>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Icon
					type={'Feather'}
					name={'loader'}
					style={{
						marginRight: RFValue(20),
						color: _primary2,
						fontSize: RFValue(30),
					}}
				/>
				<View>
					<Text style={styles.service}>{service}</Text>
					<Text style={styles.order}>Order #{order}</Text>
				</View>
			</View>
			<View>
				<Text style={styles.status}>Ongoing</Text>
			</View>
		</TouchableOpacity>
	);
}
