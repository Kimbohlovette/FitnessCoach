import overviewStyles from './OverviewStyles';

import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useAppSelector } from '../../store/hooks/index';
import { Workout } from '../../types';

const Overview = () => {
  const workouts = useAppSelector(state => state.workout.workouts);
  return (
    <FlatList
      data={workouts}
      renderItem={({ item, index }) => {
        return <ShortWorkout key={index} workout={item} />;
      }}
    />
  );
};

const ShortWorkout = (props: { workout: Workout }) => {
  return (
    <View>
      <Text>{props.workout.title}</Text>
      <View>
        <Text>{props.workout.description}</Text>
      </View>
      <Text>Average work duration: {props.workout.duration}</Text>
      <Text>Post work rest time: {props.workout.postRestTime}</Text>
    </View>
  );
};

export default Overview;
