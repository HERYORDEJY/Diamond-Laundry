import { StyleSheet } from 'react-native';
import { _primary, _tertiary, _primary2, _tertiary2 } from '../../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: _tertiary2,
		alignItems: 'center',
		padding: RFValue(10),
		paddingVertical: RFValue(5),
		borderRadius: RFValue(5),
		borderColor: _primary,
		borderWidth: RFValue(1),
	},
	text: { color: _primary2, fontFamily: 'Inter-Medium', fontSize: RFValue(12) },
});
