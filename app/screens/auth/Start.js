import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LargeButton from '../../components/LargeButton';
import { _secondary, _tertiary } from '../../utils/colors';

export default function Start() {
  return (
    <View style={styles.container}>
      <LargeButton text={'Login'} />
      <LargeButton
        text={'Create Account'}
        containerStyle={{ backgroundColor: _secondary }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: _tertiary, padding: 20 },
});
