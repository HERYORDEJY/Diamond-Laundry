import moment from 'moment';

export const guy_items_cate = [
	{ id: 1, name: 'T-Shirt', rate: 220 },
	{ id: 2, name: 'Shirt', rate: 200 },
	{ id: 3, name: 'Trouser', rate: 150 },
	{ id: 4, name: 'Agbada', rate: 300 },
	{ id: 5, name: 'Jersey', rate: 110 },
	{ id: 6, name: 'Vest', rate: 120 },
];
export const lady_items_cate = [
	{ id: 1, name: 'T-Shirt', rate: 220 },
	{ id: 2, name: 'Shirt', rate: 200 },
	{ id: 3, name: 'Trouser', rate: 150 },
	{ id: 4, name: 'Skirt', rate: 200 },
	{ id: 5, name: 'Jersey', rate: 110 },
	{ id: 6, name: 'Vest', rate: 120 },
];
export const household_items_cate = [
	{ id: 1, name: 'T-Shirt', rate: 220 },
	{ id: 2, name: 'Shirt', rate: 200 },
	{ id: 3, name: 'Trouser', rate: 150 },
	{ id: 4, name: 'Skirt', rate: 200 },
	{ id: 5, name: 'Jersey', rate: 110 },
	{ id: 6, name: 'Vest', rate: 120 },
];
export const services = [
	{ id: 1, name: 'Wash Only', sreen_name: 'WashOnly', slug: 'wash_only' },
	{ id: 2, name: 'Iron Only', sreen_name: 'IronOnly', slug: 'iron_only' },
	{ id: 3, name: 'Wash & Iron', sreen_name: 'WashIron', slug: 'wash_and_iron' },
	{ id: 4, name: 'DryClean', sreen_name: 'DryClean', slug: 'dry_clean' },
];

export const pendingOrder = [
	{
		instruction: {},
		items: { Guy: [Object], Lady: [Object] },
		payment: undefined,
		pickupDelivery: { deliveryData: [Object], pickupData: [Object] },
		service: { name: 'Iron Only', slug: 'iron_only' },
		subTotal: {
			deliveryPrice: 200,
			subTotal: 2060,
			subTotalGuy: 1070,
			subTotalLady: 790,
		},
		uniqueId: { id: 'b2ed65df-6c21-4c93-85d3-29484ff45347', order: '85d3' },
	},
];
export const _naira = '₦';

export const _transactionList = [
	{
		id: '1212',
		dateTime: moment().subtract(24, 'hours'),
		service: 'Wash Only',
		serviceId: '2323',
		serviceOrder: '232',
		paymentType: 'Card',
		cardNumber: '8689758638962789',
		others: [
			{ id: 12, deliveryType: 'express', deliveryFee: 200, name: 'Delivery' },
		],
		subtotalQuantity: 30,
		subtotalAmount: 2000,
		totalAmount: 9206,
		items: [
			{
				item: 'Shirt',
				quantity: 2,
				rate: 190,
				menu: 'Guy',
			},
			{
				item: 'T-Shirt',
				quantity: 12,
				rate: 150,
				menu: 'Guy',
			},
		],
	},
	{
		id: '1612',
		dateTime: moment().subtract(24, 'minutes'),
		service: 'Wash Only',
		serviceId: '2323',
		serviceOrder: '232',
		paymentType: 'Card',
		cardNumber: '8689758638962789',
		others: [
			{ id: 12, deliveryType: 'express', deliveryFee: 220, name: 'Delivery' },
		],
		subtotalQuantity: 10,
		subtotalAmount: 1600,
		totalAmount: 9206,
		items: [
			{
				item: 'Shirt',
				quantity: 4,
				rate: 170,
				menu: 'Guy',
			},
			{
				item: 'Agbada',
				quantity: 3,
				rate: 190,
				menu: 'Guy',
			},
			{
				item: 'Blouse',
				quantity: 2,
				rate: 101,
				menu: 'Lady',
			},
			{
				item: 'Jersey',
				quantity: 13,
				rate: 90,
				menu: 'Lady',
			},
		],
	},
	{
		id: '1852',
		dateTime: moment().subtract(36, 'hours'),
		service: 'Wash Only',
		serviceId: '2323',
		serviceOrder: '2432',
		paymentType: 'Card',
		cardNumber: '8689758638962789',
		others: [
			{ id: 12, deliveryType: 'express', deliveryFee: 200, name: 'Delivery' },
		],
		subtotalQuantity: 16,
		subtotalAmount: 2530,
		totalAmount: 9206,
		items: [
			{
				item: 'Skirt',
				quantity: 3,
				rate: 100,
				menu: 'Lady',
			},
			{
				item: 'Shirt',
				quantity: 3,
				rate: 100,
				menu: 'Lady',
			},
			{
				item: 'Trousers',
				quantity: 3,
				rate: 100,
				menu: 'Lady',
			},
		],
	},
];

const oyebode = [
	{
		name: 'Ayodeji',
		sex: 'Male',
	},
	{
		name: 'Abiola',
		sex: 'Male',
	},
	{
		name: 'Oloye',
		sex: 'Male',
	},
	{
		name: 'Lekan',
		sex: 'Male',
	},
	{
		name: 'Abebi',
		sex: 'Female',
	},
];

// const oye_ = oye

export function paymentDetailsHtmlFunc(params) {
	return ` <html>Yusuf</html>`;
}

export const paymentDetailsHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="divport" content="width=device-width, initial-scale=1.0" />
    <title>Document Yusuf</title>
    <style>
      body {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #166678;
        margin: 20px auto;
        padding: 20px;
        width: 400px;
      }
      p {
        margin: 0;
      }
      .service_invoice_category_header_container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        /* borderBottomColor: _primary2, */
        border-width: 2;
        border-bottom-color: #4377de;
        /* margin-bottom: 5; */
      }
      .service_invoice_category_header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-color: #4377de;
        border-width: 2;
        border-bottom-color: '#4377de';
        /* margin-bottom: 5; */
        padding: 5px 0;
      }
      .service_invoice_category_header_title {
        border-bottom: 1px;
        border-bottom-color: #4377de;
        font-size: 15px;
        color: #166678;
        font-weight: 500;
      }
      .service_invoice_category_header_text {
        border-bottom: 1px;
        border-bottom-color: #4377de;
        font-size: 15px;
        color: #166678;
        font-weight: bold;
      }
      .invoice_box_container {
        /* borderColor: _primary2, */
        border-width: 1;
        border-radius: 2;
        padding-bottom: 5;
      }
      .invoice_box_header_container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* padding: 5; */
        margin-bottom: 0;
        border-bottom-width: 1;
        /* border-bottom-color: _primary2, */
      }
      .invoice_box_header_p {
        /* fontFamily: 'Inter-Bold', */
        /* font-size: 10; */
        /* color: _primary, */
        text-align: center;
      }
      table {
        width: 100%;
        border-color: #166678;
        /* display: flex; */
      }
      thead {
        background-color: #0e2e3b;
      }
      tr {
        align-items: center;
      }
      thead > td {
        color: #d8d7c3;
      }
      td {
        text-align: center;
        padding: 5px;
      }
      th:first-child {
        text-align: left;
      }
      td:first-child {
        text-align: left;
      }
      th:last-child {
        text-align: right;
      }
      td:last-child {
        text-align: right;
      }
      td.others {
        text-align: center;
        padding: 5px;
      }

      .table_head_text {
        font-weight: bold;
        color: #d8d7c3;
      }
    </style>
  </head>
  <body>
    <div>
      <div
        style="
          background-color: _tertiary2;
          padding: 20;
          border-radius: 5;
          align-items: center;
          border-bottom: #0e2e3b solid 2px;
        "
      >
        <div
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            /* padding-bottom: 5; */
          "
        >
          <!-- <Diamond_ height={RFValue(20)} width={RFValue(20)} /> -->
          <!-- Logo SVG Start -->

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200.9 178.6"
            width="50px"
            height="50px"
          >
            <defs>
              <style>
                .cls-1 {
                  fill: none;
                }
                .cls-2 {
                  fill: #0e2e3b;
                }
                .cls-3 {
                  fill: #9cd7f2;
                }
                .cls-4 {
                  fill: #166678;
                }
              </style>
            </defs>
            <title>splashscreen_imageAsset 3</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_2-2" data-name="Layer 2">
                <polygon
                  class="cls-1"
                  points="20.29 59.55 20.29 59.55 57.07 71.14 57.07 71.13 20.29 59.55"
                />
                <polygon
                  class="cls-1"
                  points="143.4 71.14 102.66 178.6 143.4 71.14 143.4 71.14"
                />
                <polygon
                  class="cls-2"
                  points="143.4 71.14 57.07 71.14 57.07 71.14 97.82 178.6 102.66 178.6 143.4 71.14 143.4 71.14"
                />
                <path
                  class="cls-3"
                  d="M20.28,59.55.13,53.2h0c0,.06,0,.11,0,.15a2,2,0,0,0,0,.22c0,.21.14.52,1,1.76l.29.41.25.35.36.49.41.56C8,64.76,27.08,89.63,91.39,175a10.79,10.79,0,0,0,.9.89l.23.2a11,11,0,0,0,2.08,1.38l.21.11a12.55,12.55,0,0,0,3,1L57.07,71.13,20.28,59.55Z"
                />
                <path
                  class="cls-3"
                  d="M34.16,9.94,57.07,71.13l43.17-49.24L34.56,8.51h0a7.26,7.26,0,0,0-.79.39l.39,1Z"
                />
                <polygon
                  class="cls-3"
                  points="57.07 71.14 57.07 71.13 57.07 71.14 57.07 71.14 57.07 71.14 57.07 71.14"
                />
                <path
                  class="cls-3"
                  d="M200.85,53,143.4,71.13,102.66,178.6a11.51,11.51,0,0,0,6.43-3.59c25.26-33.46,91.56-121.16,91.76-122Z"
                />
                <path
                  class="cls-3"
                  d="M143.4,71.13h0L166.7,8.92a9,9,0,0,0-.82-.41L100.24,21.89Z"
                />
                <polygon
                  class="cls-4"
                  points="100.24 21.89 57.07 71.14 57.07 71.14 143.4 71.14 143.4 71.14 100.24 21.89"
                />
                <path
                  class="cls-2"
                  d="M20.28,59.55h0L57.07,71.13h0L34.16,9.94h0l-.39-1h0c-1.53.87-1.77,1.39-4.18,4.49C-1.86,53.71-.22,50.66.13,53.2h0l20.15,6.35Z"
                />
                <path
                  class="cls-2"
                  d="M200.85,53h0a2.09,2.09,0,0,0-.49-1.87C171.87,14.6,167.92,9.22,166.7,8.92L143.4,71.13Z"
                />
                <path
                  class="cls-4"
                  d="M100.24,21.89,165.88,8.51h0a9.22,9.22,0,0,0-2.52-.69L110.45.7C93.81-1.55,86.64,1.84,37,7.84a9,9,0,0,0-2.42.67h0Z"
                />
              </g>
            </g>
          </svg>

          <!-- Logo SVG End -->
          <!-- <div style="padding: 5px 20px"> -->
          <p
            style="
              /* font-family: 'Inter-Black', */
              font-size: 20px;
              font-weight: bolder;
              color: #0e2e3b;
              padding: 0 20px;
            "
          >
            DIAMOND LAUNDRY
          </p>
          <div>
            <p
              id="address"
              style="font-size: 15px; color: #166678; font-weight: bold"
            >
              1 Salaudeen Giwa Street, Fate GRA, Ilorin, Kwara State
            </p>
            <p
              id="phone"
              style="font-size: 15px; color: #166678; font-weight: bold"
            >
              0906 355 2536
            </p>
          </div>
          <!-- </div> -->

          <div
            style="
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
            "
          ></div>
        </div>
      </div>

      <div
        style="
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-evenly;
          background-color: #166678;
        "
      >
        <p></p>
        <p
          style="
            text-align: center;

            color: #d8d7c3;
            padding: 2px;
          "
        >
          Payment Details
        </p>
        <p
          style="
            text-align: center;
            background-color: #166678;
            color: #d8d7c3;
            padding: 2px;
          "
        >
          #65tf401
        </p>
      </div>

      <!-- Info Header -->
      <div style="margin-bottom: 20px">
        <div class="service_invoice_category_header_container">
          <div class="service_invoice_category_header">
            <p class="service_invoice_category_header_title">Date:</p>
            <p class="service_invoice_category_header_text">
              Thur Oct 20, 2021
            </p>
          </div>
          <div class="service_invoice_category_header">
            <p class="service_invoice_category_header_title">Time</p>
            <p class="service_invoice_category_header_text">11:11 AM</p>
          </div>
        </div>
        <div class="service_invoice_category_header_container">
          <div class="service_invoice_category_header">
            <p class="service_invoice_category_header_title">Service:</p>
            <p class="service_invoice_category_header_text">Wash Only</p>
          </div>
          <div class="service_invoice_category_header">
            <p class="service_invoice_category_header_title">Order:</p>
            <p class="service_invoice_category_header_text">#8q87w</p>
          </div>
        </div>
        <div class="service_invoice_category_header_container">
          <div class="service_invoice_category_header">
            <p class="service_invoice_category_header_title">Payment Type:</p>
            <p class="service_invoice_category_header_text">Card</p>
          </div>
          <div class="service_invoice_category_header">
            <p class="service_invoice_category_header_title">Card:</p>
            <p class="service_invoice_category_header_text">
              **** **** **** 1234
            </p>
          </div>
        </div>
      </div>

      <!-- Entry Container -->

      <table border="1px">
        <colgroup>
          <col />
          <col />
          <col style="background-color: #eee" />
        </colgroup>
        <thead style="background-color: #0e2e3b">
          <td class="table_head_text">Item</td>
          <td class="table_head_text">Quantity</td>
          <td class="table_head_text">Amount (₦)</td>
        </thead>
        <tbody>
          <tr>
            <td>Wash Only</td>
            <td>16</td>
            <td>1900</td>
          </tr>
          <tr>
            <td>Iron Only</td>
            <td>16</td>
            <td>1300</td>
          </tr>
          <tr>
            <td>Iron Only</td>
            <td>16</td>
            <td>1300</td>
          </tr>
          <tr>
            <td>Iron Only</td>
            <td>16</td>
            <td>1300</td>
          </tr>
          <tr class="subtotal_row" style="background-color: #16667899">
            <td style="text-align: center; color: #d8d7c3">Subtotal</td>
            <td style="color: #d8d7c3">16</td>
            <td style="color: #d8d7c3">1300</td>
          </tr>
          <tr>
            <td class="others" colspan="2">Delivery (Express)</td>
            <td>1300</td>
          </tr>
        </tbody>
        <tfoot style="background-color: #0e2e3b">
          <td class="table_head_text">Grand Total</td>
          <td class="table_head_text">16</td>
          <td class="table_head_text">1300</td>
        </tfoot>
			</table>
    </div>
  </body>
</html>


`;
