import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { _primary } from './app/utils/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: _primary }}>
        Open up App.js to start working on your app!...
      </Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
