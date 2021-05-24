import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { _momentDate } from '../../utils/compare-values';

export let minimumDate_ = new Date(`${new Date().toLocaleDateString()}`);

export default function _DateTimePicker({
	_show,
	_mode,
	_onDateChange,
	_minimumDate,
	_date,
}) {
	const [date, setDate] = useState(new Date());
	const [selected, setSelected] = useState({ date: moment(), time: moment() });
	const [show, setShow] = useState(false);
	const [mode, setMode] = useState('date');

	const _setShow = () => {
		setShow(true);
	};

	const _setMode = (mode) => {
		setMode(mode);
	};

	const _setSelected = (mode, value) => {
		setSelected({ ...selected, [mode]: value });
	};

	return (
		<DatePicker
			date={_date}
			onDateChange={(date) => _onDateChange(_mode, date)}
			// androidVariant={'nativeAndroid'}
			collapsable={true}
			mode={'datetime'}
			minimumDate={minimumDate_}
			// minimumDate={_momentDate}
			// locale={'en-GB'}
		/>
	);
}
