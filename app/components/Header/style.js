import { StyleSheet } from 'react-native';
import { _primary } from '../../utils/colors';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		// marginBottom: 10,
	},
	bodyContainer: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: RFValue(10),
	},
	bodyText: {
		fontSize: RFValue(18),
		color: _primary,
		fontFamily: 'Inter-Bold',
	},
	bodySubText: { fontSize: RFValue(13), color: _primary, height: RFValue(20) },
});
