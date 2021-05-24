import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { _primary } from '../../utils/colors';
import { styles } from './style';

export default function LargeButton({ text, containerStyle, textStyle }) {
  return (
    <TouchableOpacity style={{ ...styles.container, ...containerStyle }}>
      <Text style={{ ...styles.text, ...textStyle }}>{text ?? 'Next'}</Text>
    </TouchableOpacity>
  );
}
