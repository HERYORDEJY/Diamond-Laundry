import { createGlobalHook, useGlobalHook } from '@devhammed/use-global-hook';
import { useState } from 'react';
import moment from 'moment';

export const viewOrderStore = createGlobalHook('viewOrderStore', () => {
	const [viewOrderID, setViewOrderID] = useState();

	const _setViewOrderID = (id) => setViewOrderID(id);

	function viewOrderDetails() {
		const { activeOrder, pendingOrder } = useGlobalHook('orderStore');
		if (!viewOrderID) {
			return;
		}
		return pendingOrder.filter((order) => order.uniqueId.id === viewOrderID)[0];
	}

	return { viewOrderID, _setViewOrderID, viewOrderDetails };
});
