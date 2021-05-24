import React from 'react';
import { View, Text } from 'react-native';
import TabNavigation, { AppStack } from './tab';
import StackNavigation from './stack';

export default function AppNavigation() {
  return <StackNavigation />;
}
