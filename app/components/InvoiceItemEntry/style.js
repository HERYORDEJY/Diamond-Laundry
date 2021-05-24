import { StyleSheet } from 'react-native';
import { _primary, _primary2 } from '../../utils/colors';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
	invoice_box_container: {
		borderColor: _primary2,
		borderWidth: RFValue(1),
		borderRadius: RFValue(2.5),
		paddingBottom: RFValue(10),
	},
	invoice_box_header_container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: RFValue(5),
		marginVertical: RFValue(0),
		borderBottomWidth: RFValue(1),
		borderBottomColor: _primary2,
	},
	invoice_box_header_text: {
		fontFamily: 'Inter-Regular',
		fontSize: RFValue(10),
		color: _primary2,
		textAlign: 'center',
	},
	service_invoice_category_header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	service_invoice_category_header_title: {
		color: _primary2,
		fontFamily: 'Inter-Regular',
		fontSize: RFValue(10),
	},
	service_invoice_category_header_subtitle: {
		color: _primary2,
		fontFamily: 'Inter-Bold',
		fontSize: RFValue(10),
	},
});
