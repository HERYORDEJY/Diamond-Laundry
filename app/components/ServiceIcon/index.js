import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { styles } from './style';
import { _primary } from '../../utils/colors';
import { IronSVG, WashSVG, DryCleanSVG } from '../Svg';

const ServiceIcon = ({ icon, text }) => {
  return (
    <View style={styles.container}>
      <WashSVG height={100} width={100} color={'red'} />

      <IronSVG height={100} width={100} color={'red'} />

      <DryCleanSVG height={100} width={100} color={'red'} />
    </View>
  );
};

export default ServiceIcon;
