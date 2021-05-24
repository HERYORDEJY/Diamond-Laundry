import { serviceItemStore } from './selectItems';
import { orderStore } from './orders';
import { notificationItemStore } from './notifications';
import { profileStore } from './profile';
import { viewOrderStore } from './viewOrder';
import { transactionListStore } from './transactionList';

const contextStores = [
	serviceItemStore,
	notificationItemStore,
	profileStore,
	orderStore,
	viewOrderStore,
	transactionListStore,
];

export default contextStores;
