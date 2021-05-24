import { StyleSheet } from 'react-native';
import {
	_secondary,
	_tertiary,
	_tertiary2,
	_primary,
} from '../../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
	container: { marginBottom: RFValue(20) },
	inputStyle: {
		backgroundColor: _tertiary2,
		padding: RFValue(10),
		color: _primary,
		fontSize: RFValue(14),
		borderRadius: RFValue(5),
	},
});
