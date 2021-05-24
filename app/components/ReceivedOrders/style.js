import { StyleSheet } from 'react-native';
import { _primary, _tertiary, _primary2, _tertiary2 } from '../../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: _tertiary2,
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: RFValue(10),
		borderRadius: RFValue(5),
		marginBottom: RFValue(10),
	},
	service: {
		color: _primary,
		fontFamily: 'Inter-Medium',
		fontSize: RFValue(16),
	},
	order: { color: _primary2, fontSize: RFValue(11) },
	status: {
		color: _primary2,
		fontFamily: 'Inter-Medium',
		fontSize: RFValue(16),
	},
});
