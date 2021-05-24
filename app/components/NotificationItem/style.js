import { StyleSheet } from 'react-native';
import { _primary, _tertiary, _primary2, _tertiary2 } from '../../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexDirection: 'row',
		backgroundColor: _tertiary2,
		// alignItems: 'center',
		justifyContent: 'space-between',
		padding: RFValue(10),
		paddingVertical: RFValue(10),
		borderRadius: RFValue(5),
		marginBottom: RFValue(20),
	},
	service: {
		color: _primary,
		fontFamily: 'Inter-Medium',
		fontSize: RFValue(14),
		marginBottom: RFValue(5),
	},
	order: { color: _primary2, fontSize: RFValue(12) },
	input_container: {
		flex: 0.25,
		paddingVertical: 0,
	},
	input: {
		color: _primary,
		fontFamily: 'Inter-Medium',
		fontSize: 18,
		textAlign: 'center',
		paddingVertical: 0,
		height: 30,
		borderRadius: 10,
		borderColor: _primary2,
		borderWidth: 1,
	},
});
