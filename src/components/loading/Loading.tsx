import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../Styles';
import { loadingStyles } from './Loading.styles';

const Loading = () => {
  return (
    <View style={loadingStyles.container}>
      <View style={[loadingStyles.loadingBall, Colors.primary]}>
        <Text style={loadingStyles.loadingText}>Loading...</Text>
      </View>
    </View>
  );
};

export default Loading;
