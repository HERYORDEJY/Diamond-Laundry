import React, { useState, useEffect } from 'react';
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
import moment from 'moment';

export default function NotificationItem({
	message,
	datetime,
	status = 'unread',
	onRead,
	...props
}) {
	// useEffect(() => setState({ ...state, input_value: input_value }));
	// const message =
	//   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, perferendis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias asperiores assumenda, at, aut autem blanditiis cumque cupiditate delectus dolore dolores ea eveniet facilis fuga laudantium necessitatibus neque officiis quae quas quos repellat soluta suscipit tempora, tempore veritatis. Necessitatibus, voluptatem.';

	return (
		<TouchableOpacity
			onPress={onRead}
			style={{
				...styles.container,
				backgroundColor: status === 'unread' ? _primary : _tertiary2,
			}}>
			<View
				style={{
					// flexDirection: 'row',
					// alignItems: 'center',
					flex: 1,
				}}>
				<View style={{}}>
					<Text
						numberOfLines={2}
						style={{
							...styles.service,
							color: status === 'unread' ? _tertiary : _primary2,
						}}>
						{message}
					</Text>
					<Text
						style={{
							...styles.order,
							textAlign: 'right',
							color: status === 'unread' ? _tertiary : _primary2,
						}}>
						{datetime.format('ddd MMM D, YYYY')} {'\t'}
						{datetime.format('h:mm a')}
					</Text>
				</View>
			</View>
			{/*<View style={styles.input_container}>*/}
			{/*  <Text*/}
			{/*    style={{*/}
			{/*      ...styles.order,*/}
			{/*      color: selected ? _tertiary : _primary2,*/}
			{/*    }}>*/}
			{/*    {moment().format('hh:mm a')}*/}
			{/*  </Text>*/}
			{/*</View>*/}
		</TouchableOpacity>
	);
}
