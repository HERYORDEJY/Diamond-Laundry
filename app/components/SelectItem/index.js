import React, { useState, useEffect, useRef } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Keyboard,
} from 'react-native';
import { styles } from './style';
import Feather from 'react-native-vector-icons/Feather';
import {
	_tertiary,
	_primary2,
	_primary,
	_tertiary2,
	_secondary,
} from '../../utils/colors';
import { Input } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { _naira } from '../../api';
import { _currency } from '../../utils/textFormatter';

export default function SelectItem({
	input_value = 0,
	name,
	rate,
	onEnterQuantity,
	value,
	...props
}) {
	const [state, setState] = useState({ input_value: '' });

	const [autoFocus, setAutoFocus] = useState(false);

	// useEffect(() => setState({ ...state, input_value: input_value }));
	const selected = +value > 0;

	const inputRef = useRef();

	function onPress() {
		Keyboard.dismiss();
		setAutoFocus(true);
		inputRef.current;
	}

	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				...styles.container,
				backgroundColor: selected ? _primary2 : _tertiary2,
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					flex: 1,
				}}
			>
				<Feather
					name={selected ? 'check-square' : 'square'}
					// name={'check-square'}
					color={_tertiary}
					size={25}
					style={{ marginRight: RFValue(15) }}
				/>
				<View style={{}}>
					<Text
						style={{
							...styles.service,
							color: selected ? _tertiary : _primary2,
						}}
					>
						{name}
					</Text>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							flex: 1,
							flexWrap: 'wrap',
							flexShrink: 1,
						}}
					>
						{selected && (
							<Text
								style={{
									...styles.order,
									color: selected ? _tertiary : _primary2,
								}}
							>
								{_currency(rate * state.input_value)}{' '}
							</Text>
						)}
						<Text
							style={{
								...styles.rate,
								color: selected ? _tertiary : _primary2,
							}}
						>
							( {_currency(rate)} per piece )
						</Text>
					</View>
				</View>
			</View>
			<View style={styles.input_container}>
				<Input
					getRef={inputRef}
					numberOfLines={1}
					value={value > 0 ? `${value}` : null}
					placeholder={'0'}
					placeholderTextColor={_secondary}
					underlineColorAndroid={'transparent'}
					style={{ ...styles.input, color: selected ? _tertiary : _secondary }}
					onChangeText={(value) => {
						onEnterQuantity(name, rate, +value);
						setState({ ...state, input_value: value });
					}}
					keyboardType={'numeric'}
					multiline={false}
					autoFocus={autoFocus}
				/>
			</View>
		</TouchableOpacity>
	);
}
