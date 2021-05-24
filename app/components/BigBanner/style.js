import { StyleSheet } from 'react-native';
import { _primary, _primary2 } from '../../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: _primary2,
		// alignItems: 'center',
		justifyContent: 'center',
		padding: RFValue(20),
		borderRadius: RFValue(5),
	},
});
