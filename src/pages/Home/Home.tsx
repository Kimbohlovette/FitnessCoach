import RNSystemSounds from '@dashdoc/react-native-system-sounds';
import React, { useState } from 'react';
import { Text, ScrollView, View, Pressable } from 'react-native';
import { Colors } from '../../Styles';
import { homeStyles } from './HomeStyles';
import { useAppSelector } from '../../store/hooks/index';
import { useEffect } from 'react';

const Home = () => {
  const currentWorkout = useAppSelector(state => state.workout.currentWorkout);
  const [timer, setTimer] = useState<number>(currentWorkout?.duration || 0);
  const handleStart = () => {};

  useEffect(() => {
    if (!currentWorkout?.duration || !currentWorkout.postRestTime) {
      return;
    } else {
      const intervalId = setInterval(() => {
        setTimer(state => {
          if (state === 0) {
            clearInterval(intervalId);
            return 0;
          }
          if (state <= 10) {
            RNSystemSounds.beep();
          }
          return state - 1;
        });
      }, 1000);

      // Exercute Rest Time

      const restCounterId = setTimeout(() => {
        setTimer(state => {
          if (state === 0) {
            clearInterval(restCounterId);
            return 0;
          }
          if (state <= 10) {
            RNSystemSounds.beep();
          }
          return state - 1;
        });
      }, currentWorkout.postRestTime * 60);
    }
  }, [currentWorkout]);

  return (
    <ScrollView style={[homeStyles.container, Colors.primary]}>
      <Text style={[homeStyles.workoutTitle, Colors.onPrimary]}>Yoga</Text>
      <View style={homeStyles.mainView}>
        <Text style={[homeStyles.countDown, Colors.onPrimary]}>{timer}</Text>
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
        <View style={homeStyles.startBtnContainer}>
          <Pressable
            onPress={handleStart}
            android_ripple={{ color: '#b91c1c' }}
            style={[homeStyles.startBtn]}>
            <Text style={homeStyles.startBtnText}>START</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
