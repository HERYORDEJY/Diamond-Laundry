import { createGlobalHook } from '@devhammed/use-global-hook';
import { useState } from 'react';
const profile = {
	bio: {
		id: '0011',
		firstname: 'YUSUF',
		lastname: 'OYEBODE',
		email: 'heryordejy@gmail.com',
		phoneNumber: '0906355536',
		occupation: 'Software Developer',
		address: [
			{
				id: '001',
				city: 'Ilorin',
				state: 'Kwara',
				fullAddress: '24 Ibrahim Taiwo Road',
			},
		],
	},
	card: [
		{
			id: '001',
			name: 'Oyebode Yusuf',
			number: '5893535245315898',
			expiration: '1221',
			ccv: '123',
		},
		{
			id: '002',
			name: 'OYEBODE YUSUF',
			number: '5399839629143153',
			expiration: '1223',
			cvc: '123',
		},
		{
			id: '003',
			name: 'AYODEJI YUSUF',
			number: '5358930362914315',
			expiration: '1124',
			cvc: '123',
		},
	],
};

export const profileStore = createGlobalHook('profileStore', () => {
	const [state, setState] = useState({ ...profile });
	const [userAuth, setUserAuth] = useState({
		isLoggedIn: false,
		email: 'test@user.com',
		password: '12341234',
	});

	const _setUserAuth = (value) =>
		setUserAuth({ ...userAuth, isLoggedIn: value });
	return { state, userAuth, _setUserAuth };
});
