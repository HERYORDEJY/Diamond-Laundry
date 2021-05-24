import React from 'react';
import {
	Text,
	TouchableOpacity,
	StyleSheet,
	View,
	StatusBar,
} from 'react-native';
import {
	_primary,
	_primary2,
	_tertiary,
	_tertiary2,
	_secondary,
} from '../../utils/colors';
import LargeButton from '../../components/LargeButton';
import LinkText from '../../components/LinkText';
import { Container } from 'native-base';
import { Diamond } from '../../components/Svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { _screenWidth } from '../../utils/dimension';
import { RFValue } from 'react-native-responsive-fontsize';

export default function Welcome() {
	const navigation = useNavigation();
	return (
		<Container style={styles.container}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
			<View style={{ alignItems: 'center' }}>
				<Diamond
					height={200}
					width={200}
					color1={_primary}
					color2={_primary2}
					color3={_primary}
					color4={_secondary}
				/>
				<Text
					style={{ fontSize: 30, fontFamily: 'Inter-Black', color: _primary }}>
					DIAMOND LAUNDRY
				</Text>
			</View>
			<View>
				<TouchableOpacity
					onPress={() => navigation.navigate('Login')}
					style={{
						backgroundColor: _primary,
						padding: RFValue(10),
						borderRadius: RFValue(5),
						marginBottom: RFValue(20),
						alignItems: 'center',
					}}>
					<Text
						style={{
							fontSize: RFValue(16),
							color: _tertiary,
							textAlign: 'center',
						}}>
						Sign In
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('SignUp')}
					style={{
						backgroundColor: _tertiary,
						padding: RFValue(10),
						borderRadius: RFValue(5),
						marginBottom: RFValue(10),
						alignItems: 'center',
					}}>
					<Text
						style={{
							fontSize: RFValue(18),
							color: _primary,
							textAlign: 'center',
						}}>
						Sign Up
					</Text>
				</TouchableOpacity>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: _tertiary,
		paddingHorizontal: _screenWidth > 450 ? 45 : 20,
		paddingVertical: 25,
		// alignItems: 'center',
		justifyContent: 'space-around',
	},
});
