import { StyleSheet } from 'react-native';
import { _primary, _tertiary, _primary2, _tertiary2 } from '../../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
	menu: { marginBottom: RFValue(20) },
	menu_row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: RFValue(20),
	},
	menu_item: {
		// flex: 1,
		padding: RFValue(20),
		paddingVertical: RFValue(15),
		backgroundColor: _tertiary2,
		borderRadius: RFValue(5),
		marginVertical: RFValue(5),
	},
	menu_text: {
		fontSize: RFValue(12),
		color: _primary,
		fontFamily: 'Inter-Bold',
	},
	menu_subtext: {
		fontSize: RFValue(12),
		color: _primary2,
		paddingVertical: RFValue(5),
	},
	active_orders_container: {},
});
