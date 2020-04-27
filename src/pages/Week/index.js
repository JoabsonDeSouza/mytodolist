import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Week({ route }) {
  // const { user } = route.params;

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'blue',
      }}>
      <Text>Week</Text>
    </View>
  );
}
