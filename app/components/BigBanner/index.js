import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './style';
import { _tertiary } from '../../utils/colors';

const BigBanner = ({ children, containerStyle }) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>{children}</View>
  );
};

export default BigBanner;
