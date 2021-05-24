import { createGlobalHook } from '@devhammed/use-global-hook';
import { useState } from 'react';
import moment from 'moment';
import { compareTimes } from '../utils/compare-values';

const activeOrder = [
	{
		id: 111,
		status: 'active',
		service: 'Wash Only',
		Guy: [
			{
				name: 'Agbada',
				quantity: 53,
				rate: 300,
			},
			{
				name: 'Trouser',
				quantity: 5,
				rate: 150,
			},
		],
		Lady: [
			{
				name: 'Shirt',
				quantity: 1,
				rate: 200,
			},
			{
				name: 'T-Shirt',
				quantity: 6,
				rate: 220,
			},
		],
		Kid: {},
		Household: {},
	},
	{
		id: 121,
		status: 'active',
		service: 'Iron Only',
		Guy: [
			{
				name: 'Agbada',
				quantity: 53,
				rate: 300,
			},
			{
				name: 'Trouser',
				quantity: 5,
				rate: 150,
			},
		],
		Lady: [
			{
				name: 'Shirt',
				quantity: 1,
				rate: 200,
			},
			{
				name: 'T-Shirt',
				quantity: 6,
				rate: 220,
			},
		],
		Kid: {},
		Household: {},
	},
	{
		id: 129,
		status: 'active',
		service: 'Wash & Iron',
		Guy: [
			{
				name: 'Agbada',
				quantity: 53,
				rate: 300,
			},
			{
				name: 'Trouser',
				quantity: 5,
				rate: 150,
			},
		],
		Lady: [
			{
				name: 'Shirt',
				quantity: 1,
				rate: 200,
			},
			{
				name: 'T-Shirt',
				quantity: 6,
				rate: 220,
			},
		],
		Kid: {},
		Household: {},
	},
];

const activeO = {
	uniqueId: { id: 111, order: 1234 },
	service: { name: 'Wash Only' },
	pickupDelivery: { pickup: 'Ilorin', dateTime: moment() },
};

export const orderStore = createGlobalHook('orderStore', () => {
	const [pendingOrder, setPendingOrder] = useState([]);
	const [activeOrder, setActiveOrder] = useState([]);
	const [deliveredOrder, setDeliveredOrder] = useState([]);

	const _setPendingOrder = (order) => {
		let allPending = [...pendingOrder, order];
		let pendingList_ = allPending.sort(compareTimes('datetime', 'descending'));
		setPendingOrder([...pendingList_]);
	};

	const _deletePendingOrder = (orderID) => {
		console.log('....', pendingOrder);
		let allPending = pendingOrder.filter((order) => order.id !== orderID);
		let pendingList_ = allPending.sort(compareTimes('datetime', 'descending'));
		console.log(orderID);
		setPendingOrder([...pendingList_]);
		console.log('++++', pendingOrder);
	};

	const _setActiveOrder = (order) => {
		let allActive = [...activeOrder, order];
		let activeList_ = allActive.sort(compareTimes('datetime', 'descending'));
		setActiveOrder([...activeList_]);
	};

	const _setDeliveredOrder = (order) => {
		let allDelivered = [...deliveredOrder, order];
		let deliveredList_ = allDelivered.sort(
			compareTimes('datetime', 'descending'),
		);
		setDeliveredOrder([...deliveredList_]);
	};

	return {
		pendingOrder,
		activeOrder,
		deliveredOrder,
		_setPendingOrder,
		_setActiveOrder,
		_setDeliveredOrder,
		_deletePendingOrder,
	};
});
