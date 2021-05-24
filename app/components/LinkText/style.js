import { StyleSheet } from 'react-native';
import { _primary, _primary2, _secondary, _tertiary } from '../../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
		paddingVertical: RFValue(20),
		alignItems: 'flex-end',
		borderRadius: RFValue(5),
	},
	text: { color: _primary2, fontFamily: 'Inter-Bold' },
});
