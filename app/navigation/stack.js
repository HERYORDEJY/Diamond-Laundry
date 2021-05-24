import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SelectItems from '../screens/stack/SelectItems';
import PickupDelivery from '../screens/stack/PickupDelivery';
import ConfirmService from '../screens/stack/ConfirmService';
import TabNavigation from './tab';
import Checkout from '../screens/stack/Checkout';
import PaymentSuccess from '../screens/stack/PaymentSuccess';
import AddCard from '../screens/stack/AddCard';
import Welcome from '../screens/auth/Welcome';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import ViewOrderDetails from '../screens/stack/ViewOrderDetails';
import ViewPaymentDetails from '../screens/stack/ViewPaymentDetails';
import AccountSettings from '../screens/stack/AccountSettings';
import CardSettings from '../screens/stack/CardSettings';
import ContactUs from '../screens/stack/ContactUs';
import Notifications from '../screens/stack/Notifications';
import ScratchPage from '../screens/stack/ScratchPage';
import { useGlobalHook } from '@devhammed/use-global-hook';
import TransactionHistory from '../screens/stack/TransactionHistory';
import RNHtmlPdf from '../screens/RNHtmlPdf';
import RNPrintt from '../screens/RNPrint';

const Stack = createStackNavigator();

export default function StackNavigation(params) {
	const { userAuth, _setUserAuth } = useGlobalHook('profileStore');
	const { isLoggedIn } = userAuth;
	{
		/*Auth Stack here...*/
	}
	if (isLoggedIn) {
		return (
			<Stack.Navigator initialRouteName={'Welcome'}>
				<Stack.Screen
					name={'Welcome'}
					component={Welcome}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name={'Login'}
					component={Login}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name={'SignUp'}
					component={SignUp}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		);
	}
	return (
		<Stack.Navigator initialRouteName={'Home'}>
			<Stack.Screen
				name={'Home'}
				component={TabNavigation}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'SelectItems'}
				component={SelectItems}
				options={{ headerShown: false, tabBarVisible: false }}
			/>
			<Stack.Screen
				name={'PickupDelivery'}
				component={PickupDelivery}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'ConfirmService'}
				component={ConfirmService}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'ViewOrderDetails'}
				component={ViewOrderDetails}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'Checkout'}
				component={Checkout}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'PaymentSuccess'}
				component={PaymentSuccess}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'ViewPaymentDetails'}
				component={ViewPaymentDetails}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'AddCard'}
				component={AddCard}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'AccountSettings'}
				component={AccountSettings}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'CardSettings'}
				component={CardSettings}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'Notifications'}
				component={Notifications}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'TransactionHistory'}
				component={TransactionHistory}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'ContactUs'}
				component={ContactUs}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'RNHtmlPdf'}
				component={RNHtmlPdf}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'RNPrintt'}
				component={RNPrintt}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
