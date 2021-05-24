import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	StatusBar,
} from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {
	_secondary,
	_tertiary,
	_primary,
	_tertiary2,
	_primary2,
} from '../../utils/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import LinkText from '../../components/LinkText';
import { Container, Content } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Diamond } from '../../components/Svg';
import { useNavigation } from '@react-navigation/native';
import { _screenWidth } from '../../utils/dimension';

export default function SignUp() {
	const [state, setState] = useState({});
	const navigation = useNavigation();

	function _onChangeText(type, text) {
		setState({ ...state, [type]: text });
	}
	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			<Header
				leftComponent={
					<TouchableOpacity>
						<Diamond
							height={30}
							width={30}
							color1={_primary}
							color2={_primary2}
							color3={_primary}
							color4={_secondary}
						/>
					</TouchableOpacity>
				}
				rightComponent={
					<LinkText
						onPress={() => navigation.navigate('Login')}
						text={'Login'}
						textStyle={{ color: _primary, fontSize: 17 }}
					/>
				}
				bodyText={'Sign Up'}
			/>
			<Content
				showsVerticalScrollIndicator={false}
				style={{ paddingHorizontal: _screenWidth > 450 ? 35 : 0 }}
			>
				<View style={{ marginVertical: 0 }}>
					<Input
						placeholder={'Fullname'}
						onChangeText={_onChangeText}
						type={'fullname'}
					/>
					<Input
						placeholder={'Email'}
						onChangeText={_onChangeText}
						type={'email'}
					/>
					<Input
						placeholder={'Phone'}
						onChangeText={_onChangeText}
						type={'phoneNumber'}
					/>
					<Input
						placeholder={'Password'}
						onChangeText={_onChangeText}
						type={'password'}
					/>
					<Input
						placeholder={'Confirm Password'}
						onChangeText={_onChangeText}
						type={'confirmPassword'}
					/>
					<TouchableOpacity
						onPress={() => setState({ ...state, save_card: !state.save_card })}
						style={{
							flexDirection: 'row',
							// justifyContent: 'space-between',
							backgroundColor: 'transparent',
							padding: 10,
							borderRadius: 10,
							marginVertical: 0,
							marginBottom: 25,
							alignItems: 'center',
						}}
					>
						<MaterialCommunityIcons
							name={state.save_card ? 'square' : 'square-outline'}
							size={20}
							style={{ marginRight: 10 }}
							color={_primary2}
						/>
						<Text
							style={{
								fontSize: 17,
								color: _primary,
							}}
						>
							Save card details
						</Text>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity
						style={{
							alignItems: 'center',
							backgroundColor: _primary,
							padding: 20,
							borderRadius: 10,
							marginVertical: 6,
							marginBottom: 10,
						}}
					>
						<Text
							style={{
								fontSize: 18,
								color: _tertiary,
							}}
						>
							Sign Up
						</Text>
					</TouchableOpacity>
				</View>
			</Content>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, paddingHorizontal: _screenWidth > 450 ? 45 : 20 },
});
