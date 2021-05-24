/* @flow weak */

import 'react-native-get-random-values';
const { connectToDevTools } = require('react-devtools-core');
const config = { host: 'localhost', port: 8081 };
connectToDevTools(config);
//
import React, { createContext } from 'react';
import { ScrollView, StatusBar, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import { NavigationContainer } from '@react-navigation/native';
//
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/es/integration/react';
// import { store } from './redux/store';
// import { persistor } from './redux/store';
//
// import StackNavigation from './navigation/StackNavigation'
import { _primary, _white } from './utils/colors';
import ConfirmService from './screens/stack/ConfirmService';
import OrderScreen from './screens/tab/OrderScreen';
import AddCard from './screens/stack/AddCard';
import PaymentSuccess from './screens/stack/PaymentSuccess';
import ProfileScreen from './screens/tab/ProfileScreen';
import AppNavigation from './navigation';
import TheProvider from './redux/TheProvider';
import { GlobalHooksProvider } from '@devhammed/use-global-hook';
import { serviceItemStore } from './context/selectItems';
import contextStores from './context';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import RNCreditCard from './components/RNCreditCard';

let customFonts = {
	'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
	'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
	'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
	'Inter-Medium': require('./assets/fonts/Inter-Medium.otf'),
};

export default class EntryPoint extends React.Component {
	constructor(props) {
		super(props);
		this._drawer = React.createRef();
		this.state = {
			fontLoaded: false,
			customTextProps: {
				style: {
					fontFamily: 'Inter-Regular',
				},
			},
		};
	}

	async _loadFontsAsync() {
		await Font.loadAsync(customFonts);
		await setCustomText(this.state.customTextProps);
		await setCustomTextInput(this.state.customTextProps);
		this.setState({ fontLoaded: true });
	}

	componentDidMount() {
		this._loadFontsAsync();
		// console.disableYellowBox = true;
	}

	render() {
		if (this.state.fontLoaded) {
			return (
				<View style={{ backgroundColor: _white, flex: 1 }}>
					{/* <Provider store={store}> */}
					{/* <PersistGate loading={false} persistor={persistor}> */}
					<NavigationContainer>
						<GlobalHooksProvider hooks={[...contextStores]}>
							{/* <RNCreditCard /> */}
							<AppNavigation />
						</GlobalHooksProvider>
					</NavigationContainer>
					{/* </PersistGate> */}
					{/* </Provider>  */}
				</View>
			);
		} else {
			return <AppLoading />;
		}
	}
}
