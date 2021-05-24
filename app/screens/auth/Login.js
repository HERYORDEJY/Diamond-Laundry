import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	StatusBar,
	Alert,
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
import { ActivityIndicator } from 'react-native-paper';
import { useGlobalHook } from '@devhammed/use-global-hook';

export default function Login() {
	const [state, setState] = useState({
		correct: null,
		loading: false,
		invalidAuth: false,
	});

	//Profile Global Context Store
	const { userAuth, _setUserAuth } = useGlobalHook('profileStore');

	// Default User details
	const auth = {
		email: 'test@user.com',
		password: '12341234',
	};
	// Navigation instance
	const navigation = useNavigation();

	// Enter email and password function
	const _onChangeText = (type, text) => setState({ ...state, [type]: text });

	//On submit user auth details
	const onSubmit = () => {
		setState({ ...state, loading: true });
		if (state.email === auth.email && state.password === auth.password) {
			setTimeout(() => {
				_setUserAuth(true);
				setState({ ...state, correct: true, loading: false });
				navigation.navigate('Home');
			}, 2800);
		} else {
			_invalidAuth();
			setTimeout(() => {
				setState({
					...state,
					correct: false,
					loading: false,
					invalidAuth: false,
				});
			}, 2800);
		}
	};

	// If invalid auth
	const _invalidAuth = () => {
		// if (state.invalidAuth === true)
		new Alert(alert('Invalid Email or Password...'));
	};

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
						onPress={() => navigation.navigate('SignUp')}
						text={'Sign Up'}
						textStyle={{ color: _primary, fontSize: 17 }}
					/>
				}
				bodyText={'Login'}
			/>
			<Content
				showsVerticalScrollIndicator={false}
				style={{ paddingHorizontal: _screenWidth > 450 ? 35 : 0 }}
			>
				<View style={{ marginBottom: 50 }}>
					<Input
						placeholder={'Email'}
						onChangeText={_onChangeText}
						type={'email'}
					/>
					<Input
						placeholder={'Password'}
						onChangeText={_onChangeText}
						type={'password'}
					/>
				</View>
				<View>
					<TouchableOpacity
						onPress={() => onSubmit()}
						style={{
							alignItems: 'center',
							backgroundColor: _primary,
							padding: 20,
							borderRadius: 10,
							marginVertical: 6,
							marginBottom: 10,
						}}
						disabled={state.loading}
					>
						{!state.loading ? (
							<Text
								style={{
									fontSize: 18,
									color: _tertiary,
								}}
							>
								Login
							</Text>
						) : (
							<View>
								<ActivityIndicator size={30} color={_tertiary2} />
							</View>
						)}
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							alignItems: 'center',
							backgroundColor: 'transparent',
							padding: 20,
							borderRadius: 10,
							marginVertical: 0,
							marginBottom: 25,
						}}
					>
						<Text
							style={{
								fontSize: 18,
								color: _primary,
							}}
						>
							Forgot password?
						</Text>
					</TouchableOpacity>
				</View>
			</Content>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, paddingHorizontal: _screenWidth > 450 ? 45 : 20 },
	loadingContainer: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
