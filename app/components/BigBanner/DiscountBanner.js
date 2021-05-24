import React from 'react';
import { View, Text } from 'react-native';
import BigBanner from './index';
import { _tertiary } from '../../utils/colors';
import { Content } from 'native-base';
import { Discount } from '../Svg';
import { RFValue } from 'react-native-responsive-fontsize';

export function DiscountBanner() {
	return (
		<BigBanner containerStyle={{ marginBottom: RFValue(20) }}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Discount
					color={_tertiary}
					height={RFValue(50)}
					width={RFValue(50)}
					style={{ marginRight: RFValue(10) }}
				/>
				<View style={{}}>
					<Text
						style={{
							fontFamily: 'Inter-Bold',
							color: _tertiary,
							fontSize: RFValue(18),
						}}
					>
						Get 20% Discount
					</Text>
					<Text
						style={{
							fontFamily: 'Inter-Regular',
							color: _tertiary,
							fontSize: RFValue(16),
						}}
					>
						This festive period
					</Text>
				</View>
			</View>
		</BigBanner>
	);
}
