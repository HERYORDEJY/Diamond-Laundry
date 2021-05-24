import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import Feather from 'react-native-vector-icons/Feather';
import { _tertiary, _primary2, _primary, _tertiary2 } from '../../utils/colors';
import { Input } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { _currency } from '../../utils/textFormatter';

export default function ConfirmItem({
	input_value = 0,
	name,
	rate,
	lastItem,
	...props
}) {
	const [state, setState] = useState({ input_value: '' });
	// useEffect(() => setState({ ...state, input_value: input_value }));
	const selected = +state.input_value > 0;
	return (
		<View
			style={{
				...styles.container,
				borderBottomWidth: !lastItem ? RFValue(1) : 0,
				borderBottomColor: _primary2,
			}}
		>
			<View style={{ flex: 1.7, alignItems: 'flex-start' }}>
				<Text
					style={{
						...styles.service,
					}}
				>
					{name}
				</Text>
				<Text
					style={{
						...styles.rate,
					}}
				>
					( {_currency(rate)} per piece )
				</Text>
			</View>
			<View
				style={[styles.input_container, { flex: 1.5, alignItems: 'center' }]}
			>
				<TextInput
					{...props}
					value={`${input_value}`}
					placeholder={'0'}
					placeholderTextColor={_primary2}
					underlineColorAndroid={'transparent'}
					style={{ ...styles.input }}
					onChangeText={(value) => {
						setState({ ...state, input_value: value });
					}}
					keyboardType={'numeric'}
					multiline={false}
					defaultValue={'0'}
					editable={false}
				/>
			</View>
			<View style={{ flex: 1.8, alignItems: 'flex-end' }}>
				{/*{!selected && (*/}
				<Text
					style={{
						...styles.order,
					}}
				>
					{_currency(rate * input_value)}
				</Text>
				{/*)}*/}
			</View>
		</View>
	);
}
