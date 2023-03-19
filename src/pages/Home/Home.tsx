import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Colors } from '../../Styles';
import { homeStyles } from './HomeStyles';

const Home = () => {
  return (
    <ScrollView style={[homeStyles.container, Colors.primary]}>
      <Text style={[homeStyles.workoutTitle, Colors.onPrimary]}>Home</Text>
    </ScrollView>
  );
};

export default Home;
