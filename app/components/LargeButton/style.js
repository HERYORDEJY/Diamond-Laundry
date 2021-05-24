import { StyleSheet } from 'react-native';
import { _primary, _tertiary } from '../../utils/colors';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: _primary,
		paddingVertical: 20,
		alignItems: 'center',
		borderRadius: 10,
	},
	text: { color: _tertiary },
});
