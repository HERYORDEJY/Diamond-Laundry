import { Dimensions, Text, View } from 'react-native';
import { Content } from 'native-base';
import React from 'react';
export const _windowWidth = Math.round(Dimensions.get('window').width);
export const _screenWidth = Math.round(Dimensions.get('screen').width);
export const _windowHeight = Math.round(Dimensions.get('window').height);
export const _screenHeight = Math.round(Dimensions.get('screen').height);

export function _DimensInfo() {
	return (
		<View>
			<Text style={{ fontSize: 25, color: 'red' }}>
				screenWidth: {_screenWidth}
			</Text>
			<Text style={{ fontSize: 25, color: 'blue' }}>
				screenHeight: {_screenHeight}
			</Text>
			<Text style={{ fontSize: 25, color: 'orange' }}>
				windowWidth: {_windowWidth}
			</Text>
			<Text style={{ fontSize: 25, color: 'green' }}>
				windowHeight: {_windowHeight}
			</Text>
		</View>
	);
}

// import ExtraDimensions from 'react-native-extra-dimensions-android';
// const RealWindowHeight = ExtraDimensions.getRealWindowHeight();
// const RealWindowWidth = ExtraDimensions.getRealWindowWidth();
// const StatusBarHeight = ExtraDimensions.getStatusBarHeight();
// const SoftMenuBarHeight = ExtraDimensions.getSoftMenuBarHeight();
// const SmartBarHeight = ExtraDimensions.getSmartBarHeight();
// const SoftMenuBarEnabled = ExtraDimensions.isSoftMenuBarEnabled();
