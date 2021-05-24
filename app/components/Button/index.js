import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function Button({
  onPress,
  containerStyle,
  textStyle,
  text,
  content,
  ...props
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, ...containerStyle }}>
      {content ?? null}
      {text && <Text style={{ ...styles.text, ...textStyle }}>{text}</Text>}
    </TouchableOpacity>
  );
}
