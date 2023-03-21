import RNSystemSounds from '@dashdoc/react-native-system-sounds';
import React, { useState } from 'react';
import { Text, ScrollView, View, Pressable } from 'react-native';
import { Colors } from '../../Styles';
import { homeStyles } from './HomeStyles';
import { useAppSelector } from '../../store/hooks/index';
import { Workout } from '../../types';

const Home = () => {
  const workouts = useAppSelector(state => state.workout.workouts);
  const [workout, setWorkout] = useState<Workout>(workouts[0]);
  const [timer, setTimer] = useState<number>(workout ? workout.duration : 20);
  const [index, setIndex] = useState<number>(0);
  const [countState, setCountdown] = useState<'idle' | 'inProgress'>('idle');

  const setNextWorkout = (prevIndex: number) => {
    if (prevIndex >= workouts.length - 1) {
      setWorkout(workouts[0]);
      return 0;
    }
    setWorkout(workouts[prevIndex + 1]);
    return prevIndex + 1;
  };

  const startTimerCountdown = () => {
    setTimer(workout.duration);
    setCountdown('inProgress');
    const countId = setInterval(() => {
      setTimer(state => {
        if (state === 0) {
          setIndex(setNextWorkout(index));
          clearInterval(countId);
          setCountdown('idle');
          return 0;
        }
        if (timer <= 10) {
          RNSystemSounds.beep();
        }
        return state - 1;
      });
    }, 1000);
  };

  const handleStart = () => {
    setNextWorkout(index);
    startTimerCountdown();
  };

  return (
    <ScrollView style={[homeStyles.container, Colors.primary]}>
      <Text style={[homeStyles.workoutTitle, Colors.onPrimary]}>
        {workout ? workout.title : 'Cardio'}
      </Text>
      <View style={homeStyles.mainView}>
        <Text style={[homeStyles.countDown, Colors.onPrimary]}>{timer}</Text>
        <View style={[homeStyles.divider]} />
        <View style={homeStyles.workoutDesc}>
          {workout.exercises.map((wrkout, key) => (
            <Text style={homeStyles.workoutDescText} key={key}>
              {wrkout}
            </Text>
          ))}
        </View>
        <View style={[homeStyles.cardsContainerView]}>
          <View style={[homeStyles.cardView]}>
            <Text style={[homeStyles.cardTitleText]}>Difficulty</Text>
            <Text style={homeStyles.cardText}>Normal</Text>
          </View>
          <View style={[homeStyles.cardView]}>
            <Text style={[homeStyles.cardTitleText]}>Duration</Text>
            <Text style={homeStyles.cardText}>{workout?.duration} mins</Text>
          </View>
          <View style={[homeStyles.cardView]}>
            <Text style={[homeStyles.cardTitleText]}>Rest</Text>
            <Text style={homeStyles.cardText}>
              {workout?.postRestTime} mins
            </Text>
          </View>
        </View>
        <View style={homeStyles.startBtnContainer}>
          <Pressable
            disabled={countState === 'inProgress'}
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
