import { createGlobalHook } from '@devhammed/use-global-hook';
import { useState } from 'react';
import moment from 'moment';
import { _transactionList } from '../api';
import { compareTimes } from '../utils/compare-values';

const activeOrder = [
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
	cardNumber: '8689758638962789',
	dateTime: '2021-01-27T14:51:34.745Z',
	id: 'ca6fd81e-42d5-49fb-bfbb-9013b354ead2',
	items: [{ 'T-Shirt': [Object] }, { Shirt: [Object], 'T-Shirt': [Object] }],
	others: [{ deliveryFee: 200, deliveryType: 'express' }],
	paymentType: 'Card',
	service: { name: 'Wash Only', slug: 'wash_only' },
	serviceId: 'a6862362-a0eb-4400-a530-c52ca66209ad',
	serviceOrder: 'a530',
	subtotalAmount: 840,
	subtotalQuantity: 4,
	totalAmount: 1040,
};

export const transactionListStore = createGlobalHook(
	'transactionListStore',
	() => {
		const [transactionList, setTransactionList] = useState([]);

		const [currentTrans, setCurrentTrans] = useState();

		const _setTransactionList = (transaction) => {
			let allTrans = [...transactionList, transaction];
			let transactionList_ = allTrans.sort(
				compareTimes('dateTime', 'descending'),
			);
			setTransactionList([...transactionList_]);
		};

		const _setCurrentTrans = (id) => setCurrentTrans(id);

		return {
			transactionList,
			_setTransactionList,
			_setCurrentTrans,
			currentTrans,
		};
	},
);
