import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './style';
import { _secondary, _tertiary } from '../../utils/colors';

export default function Input({
	placeholder,
	containerStyle,
	inputStyle,
	onChangeText,
	type,
	...props
}) {
	return (
		<View style={styles.container}>
			<TextInput
				{...props}
				placeholder={placeholder ?? null}
				placeholderTextColor={_secondary}
				style={{ ...styles.inputStyle, ...inputStyle }}
				onChangeText={onChangeText}
			/>
		</View>
	);
}
