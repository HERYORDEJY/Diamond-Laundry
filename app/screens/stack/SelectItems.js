import React, { useEffect, useState, useContext } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import { Icon } from 'native-base';

import normalize from 'react-native-normalize';
import normzer from '../../utils/normalizer';
import { _primary, _primary2, _tertiary, _tertiary2 } from '../../utils/colors';
import Header from '../../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import BigBanner from '../../components/BigBanner';
import ServiceIcon from '../../components/ServiceIcon';
import { Container, Content } from 'native-base';
import Button from '../../components/Button';
import SelectItem from '../../components/SelectItem';
import { guy_items_cate, services, lady_items_cate, _naira } from '../../api';
import DropdownMenu from '../../components/Dropdown';
import { _screenWidth } from '../../utils/dimension';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import TheContext from '../../redux/TheContext';
import { useGlobalHook } from '@devhammed/use-global-hook';
import { RFValue } from 'react-native-responsive-fontsize';
import { _currency } from '../../utils/textFormatter';
import { _convertArrayToObject } from '../../utils/compare-values';

export default function SelectItems(props) {
	// const context = useContext(TheContext);
	const { service, _setItems, _setSubTotal, items } = useGlobalHook(
		'serviceItem',
	);

	const [state, setState] = useState({
		wash_only: false,
		iron_only: false,
		wash_and_iron: false,
		dry_clean: false,
		item_menu: 'Guy',
		showDropdown: false,
		current_service: 'Wash Only',
	});

	//State for Guy items
	const [guyItems, setGuyItems] = useState({});

	// State for Lady items
	const [ladyItems, setLadyItems] = useState({});

	// State for guy subtotal
	const [guyCalc, setGuyCalc] = useState({});

	//State for Lady subtotal
	const [ladyCalc, setLadyCalc] = useState({});

	// State for Guy quantity
	const [guyQuantity, setGuyQuantity] = useState({});

	// State for Lady quantity
	const [ladyQuantity, setLadyQuantity] = useState({});

	// List of Menus
	const menus = [
		{ name: 'Guy' },
		{ name: 'Lady' },
		{ name: 'Kid' },
		{ name: 'Household' },
	];

	// Set Item Menu function
	const setItemMenu = (menu) => {
		setState({ ...state, item_menu: menu });
	};

	// Get Item Data function
	const getItemData = (menu, name, rate, quantity) => {
		if (menu === 'Guy' && typeof quantity === 'number') {
			setGuyItems({
				...guyItems,
				[name]: { menu: 'Guy', name: name, rate: rate, quantity: quantity },
			});
		}
		if (menu === 'Lady' && typeof quantity === 'number') {
			setLadyItems({
				...ladyItems,
				[name]: { menu: 'Lady', name: name, rate: rate, quantity: quantity },
			});
		}
	};

	const saveItemData = () => {
		let g = Object.values(guyItems).map((item) => item);
		let _g = g.filter((item) => item.quantity > 0);

		let l = Object.values(ladyItems).map((item) => item);
		let _l = l.filter((item) => item.quantity > 0);

		_setItems({
			Guy: { ..._convertArrayToObject(_g, 'name') },
			Lady: { ..._convertArrayToObject(_l, 'name') },
		});
		_setSubTotal({
			guyQuantity: sumObj(guyQuantity),
			ladyQuantity: sumObj(ladyQuantity),
			totalQuantity: sumObj(guyQuantity) + sumObj(ladyQuantity),
			subTotalLady,
			subTotalGuy,
			subTotal: subTotalLady + subTotalGuy,
		});
		navigation.navigate('PickupDelivery');
		console.log("''\n", items);
	};

	// Subtotal for guy function
	const _guyCalc = (name, rate, quantity) => {
		getItemData(state.item_menu, name, rate, quantity);
		setGuyCalc({ ...guyCalc, [name]: rate * quantity });
		setGuyQuantity({ ...guyQuantity, [name]: quantity });
	};

	// Subtotal for lady function
	const _ladyCalc = (name, rate, quantity) => {
		getItemData(state.item_menu, name, rate, quantity);
		setLadyCalc({ ...ladyCalc, [name]: rate * quantity });
		setLadyQuantity({ ...ladyQuantity, [name]: quantity });
	};

	// To get combined menu subtotal
	const sumObj = (obj) =>
		Object.keys(obj).reduce((sum, key) => sum + parseFloat(obj[key] || 0), 0);
	let subTotalGuy = sumObj(guyCalc);
	let subTotalLady = sumObj(ladyCalc);

	// Navigation instance
	const navigation = useNavigation();

	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />

			{/* Header */}
			<Header
				bodyText={service.name}
				leftComponent={'back'}
				goBack={() => navigation.goBack()}
			/>
			<Content
				contentContainerStyle={styles.content}
				scrollEnabled={true}
				showsVerticalScrollIndicator={false}
				style={{ paddingHorizontal: _screenWidth > 450 ? RFValue(30) : 0 }}
			>
				<View style={styles.menu_row}>
					{/*Menu*/}
					{menus.map((menu, index) => (
						<Button
							key={index.toString()}
							text={menu.name}
							onPress={() => setItemMenu(menu.name)}
							containerStyle={{
								backgroundColor:
									state.item_menu === menu.name ? _primary2 : _tertiary2,
							}}
							textStyle={{
								color: state.item_menu === menu.name ? _tertiary : _primary2,
							}}
						/>
					))}
				</View>

				{/* Active Orders */}
				<View style={styles.active_orders_container}>
					<View style={styles.active_orders_header_container}>
						<Text style={styles.active_orders_header_text}>Select Items</Text>
					</View>
					{state.item_menu === 'Guy' && (
						<Animatable.View style={{}} animation={'slideInLeft'}>
							{guy_items_cate.map((item, index) => (
								<SelectItem
									name={item.name}
									rate={item.rate}
									key={item.id}
									onEnterQuantity={_guyCalc}
									value={guyQuantity[`${item.name}`]}
								/>
							))}
						</Animatable.View>
					)}
					{state.item_menu === 'Lady' && (
						<Animatable.View style={{}} animation={'slideInLeft'}>
							{lady_items_cate.map((item, index) => (
								<SelectItem
									name={item.name}
									rate={item.rate}
									key={item.id}
									onEnterQuantity={_ladyCalc}
									value={ladyQuantity[`${item.name}`]}
								/>
							))}
						</Animatable.View>
					)}
				</View>
			</Content>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					paddingTop: RFValue(10),
					height: RFValue(40),
					marginBottom: 0,
					backgroundColor: '#fff',
				}}
			>
				<TouchableOpacity
					onPress={() => {
						saveItemData();
					}}
					disabled={subTotalGuy + subTotalLady <= 0}
					style={{
						...styles.nextButton,
						backgroundColor:
							subTotalGuy + subTotalLady <= 0 ? _tertiary2 : _primary,
					}}
				>
					<Text
						style={{
							color: _tertiary,
							fontSize: RFValue(18),
							fontFamily: 'Inter-Bold',
						}}
					>
						Next
					</Text>
					<Icon
						type={'Feather'}
						name={'chevron-right'}
						style={{ color: _tertiary, fontSize: RFValue(20) }}
					/>
				</TouchableOpacity>
				<View
					style={{
						flex: 1,
						alignItems: 'flex-end',
					}}
				>
					<Text
						style={{
							fontSize: RFValue(20),
							fontFamily: 'Inter-Bold',
							color: _primary,
						}}
					>
						{_currency(subTotalGuy + subTotalLady)}
					</Text>
				</View>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: _screenWidth > 450 ? RFValue(30) : RFValue(20),
		paddingBottom: 20,
		backgroundColor: 'white',
	},
	content: {
		paddingBottom: RFValue(20),
		marginBottom: RFValue(20),
		marginTop: RFValue(20),
	},
	menu: { marginBottom: 20 },
	menu_row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 20,
	},
	active_orders_container: {},
	active_orders_header_container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'baseline',
		marginBottom: 15,
	},
	active_orders_header_text: {
		fontSize: RFValue(18),
		color: _primary,
		fontFamily: 'Inter-Medium',
	},
	nextButton: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		flex: 0.5,
		paddingHorizontal: RFValue(10),
		paddingVertical: RFValue(5),
		borderRadius: RFValue(5),
		marginRight: RFValue(10),
		marginVertical: 0,
	},
});
