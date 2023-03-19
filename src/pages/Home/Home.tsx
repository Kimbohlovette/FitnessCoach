import React from 'react';
import { Text, ScrollView, View, Pressable } from 'react-native';
import { Colors } from '../../Styles';
import { homeStyles } from './HomeStyles';

const Home = () => {
  return (
    <ScrollView style={[homeStyles.container, Colors.primary]}>
      <Text style={[homeStyles.workoutTitle, Colors.onPrimary]}>Yoga</Text>
      <View style={homeStyles.mainView}>
        <Text style={[homeStyles.countDown, Colors.onPrimary]}>31</Text>
        <View style={[homeStyles.divider]} />
        <Text style={homeStyles.workoutDesc}>
          Some feeding description about the yoga sport and benefits to the
          body.
        </Text>
        <View style={[homeStyles.cardsContainerView]}>
          <View style={[homeStyles.cardView]}>
            <Text style={[homeStyles.cardTitleText]}>Difficulty</Text>
            <Text style={homeStyles.cardText}>Normal</Text>
          </View>
          <View style={[homeStyles.cardView]}>
            <Text style={[homeStyles.cardTitleText]}>Duration</Text>
            <Text style={homeStyles.cardText}>30 mins</Text>
          </View>
          <View style={[homeStyles.cardView]}>
            <Text style={[homeStyles.cardTitleText]}>Rest</Text>
            <Text style={homeStyles.cardText}>4 mins</Text>
          </View>
        </View>
        <Pressable style={homeStyles.startBtn}>
          <Text style={homeStyles.startBtnText}>START</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Home;
