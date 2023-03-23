import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../Styles';
import { loadingStyles } from './Loading.styles';

const Loading = () => {
  return (
    <View style={loadingStyles.container}>
      <View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            width: '25%',
            padding: 16,
            borderRadius: 50,
            aspectRatio: 1,
          },
          Colors.primary,
        ]}>
        <Text style={{ color: 'white' }}>Loading</Text>
      </View>
    </View>
  );
};

export default Loading;
