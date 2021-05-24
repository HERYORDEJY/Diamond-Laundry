import { createGlobalHook } from '@devhammed/use-global-hook';
import { useState } from 'react';

const dummy = {
	items: {
		Guy: {
			Agbada: {
				menu: 'Guy',
				name: 'Agbada',
				quantity: 53,
				rate: 300,
			},
			Trouser: {
				menu: 'Guy',
				name: 'Trouser',
				quantity: 5,
				rate: 150,
			},
		},
		Lady: {
			Shirt: {
				menu: 'Lady',
				name: 'Shirt',
				quantity: 1,
				rate: 200,
			},
			'T-Shirt': {
				menu: 'Lady',
				name: 'T-Shirt',
				quantity: 6,
				rate: 220,
			},
		},
	},
	subTotal: 18170,
	subTotalGuy: 16650,
	subTotalLady: 1520,
};

/* Selected Menu format
{
  menu: " "
}
*/

/* Selected Items
{
  items: {
    Guy: {
      Agbada: {
        menu: " ",
        name: " ",
        quantity: " ",
        rate: " ",
      },
    },
    Lady: " "
      Shirt: {
        menu: " ",
        name: " ",
        quantity: " ",
        rate: " ",
      },
    },
  },
}
*/

/* Subtotal format
{
  subTotal: 18170,
  subTotalGuy: 16650,
  subTotalLady: 1520,
}
*/

/* Pickup and Delivery format
pickup: {
  datetime: " ",
  address: " "
},
delivery: {
  datetime: " ",
  address: " ",
  type: " ",  //Express or Normal
}
*/

/* Payment format
type: " " //Card or Pay on delivery,
cardInfo: { //If Payment type is card or else --null
  name: " ",
  number: " ",
  cvv: " ",
  expiration: " "
}
*/

export const serviceItemStore = createGlobalHook('serviceItem', () => {
	const [service, setService] = useState({ name: '', slug: '' });
	const [items, setItems] = useState({});
	const [subTotal, setSubTotal] = useState();
	const [pickupDelivery, setPickupDelivery] = useState();
	const [payment, setPayment] = useState();
	const [instruction, setInstruction] = useState({});
	const [uniqueId, setUniqueId] = useState({});

	const _setService = (service) => setService({ ...service });
	const _setItems = (items) => setItems({ ...items });
	const _setSubTotal = (subtotal) => setSubTotal({ ...subtotal });
	const _setPickupDelivery = (pickupDelivery) =>
		setPickupDelivery({ ...pickupDelivery });
	const _setPayment = (payment) => setPayment({ ...payment });
	const _setInstruction = (instruction) => setInstruction({ ...instruction });
	const _setUniqueId = (id) => setUniqueId({ ...id });
	// const selectedItems = (items) => setState({ ...state, ...items });

	return {
		service,
		items,
		subTotal,
		pickupDelivery,
		payment,
		uniqueId,
		instruction,
		_setInstruction,
		_setService,
		_setItems,
		_setSubTotal,
		_setPickupDelivery,
		_setPayment,
		_setUniqueId,
		// selectedItems,
	};
});
