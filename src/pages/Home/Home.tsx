import RNSystemSounds from '@dashdoc/react-native-system-sounds';
import React, { useState } from 'react';
import { Text, ScrollView, View, Pressable } from 'react-native';
import { Colors } from '../../Styles';
import { homeStyles } from './HomeStyles';
import { useAppSelector, useAppDispatch } from '../../store/hooks/index';
import {
  setCurrentState,
  setCurrentWorkout,
} from '../../store/slices/workoutSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  dispatch(setCurrentWorkout(0));
  const currentWorkout = useAppSelector(state => state.workout.currentWorkout);
  const workoutState = useAppSelector(state => state.workout.status);
  const workouts = useAppSelector(state => state.workout.workouts);
  const [timer, setTimer] = useState<number>(
    currentWorkout ? currentWorkout.duration : 0,
  );
  const handleStart = () => {
    workoutDurationCountdown();
  };
  const workoutDurationCountdown = () => {
    dispatch(setCurrentState('inProgress'));
    const intervalId = setInterval(() => {
      setTimer(state => {
        if (state === 0) {
          clearInterval(intervalId);
          setNextWorkout(currentWorkout ? workouts.indexOf(currentWorkout) : 0);
          return 0;
        }
        if (state <= 10) {
          RNSystemSounds.beep();
        }
        return state - 1;
      });
    }, 1000);
  };

  const setNextWorkout = (prevIndex: number) => {
    const numOfWorkouts = workouts.length;
    if (prevIndex < 0 || prevIndex > numOfWorkouts - 1) {
      console.log('Before', currentWorkout);
      dispatch(setCurrentWorkout(-1));
    } else {
      console.log(currentWorkout);
      dispatch(setCurrentWorkout(prevIndex + 1));
    }
  };

  return (
    <ScrollView style={[homeStyles.container, Colors.primary]}>
      <Text style={[homeStyles.workoutTitle, Colors.onPrimary]}>
        {currentWorkout?.title}
      </Text>
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
            <Text style={homeStyles.cardText}>
              {currentWorkout?.duration} mins
            </Text>
          </View>
          <View style={[homeStyles.cardView]}>
            <Text style={[homeStyles.cardTitleText]}>Rest</Text>
            <Text style={homeStyles.cardText}>
              {currentWorkout?.postRestTime} mins
            </Text>
          </View>
        </View>
        <View style={homeStyles.startBtnContainer}>
          <Pressable
            disabled={workoutState === 'inProgress'}
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
