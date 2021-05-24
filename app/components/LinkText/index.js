import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { _primary } from '../../utils/colors';
import { styles } from './style';

export default function LinkText({
  text,
  containerStyle,
  textStyle,
  onPress,
  ...props
}) {
  return (
    <TouchableOpacity
      {...props}
      style={{ ...styles.container, ...containerStyle }}
      onPress={onPress}>
      <Text style={{ ...styles.text, ...textStyle }}>{text}</Text>
    </TouchableOpacity>
  );
}
