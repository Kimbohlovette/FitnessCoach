import overviewStyles from './OverviewStyles';

import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { useAppSelector } from '../../store/hooks/index';
import { Workout } from '../../types';
import { Colors } from '../../Styles';

const Overview = () => {
  const workouts = useAppSelector(state => state.workout.workouts);
  return (
    <FlatList
      style={overviewStyles.container}
      data={workouts}
      renderItem={({ item, index }) => {
        return <ShortWorkout key={index} workout={item} />;
      }}
      ListEmptyComponent={ListContainerPlaceHolder}
      ListHeaderComponent={ListHeaderTitle}
    />
  );
};

const ShortWorkout = (props: { workout: Workout }) => {
  return (
    <Pressable
      android_ripple={{ color: Colors.primaryDark.backgroundColor }}
      style={overviewStyles.workoutView}>
      <Text style={overviewStyles.workTitleStyle}>{props.workout.title}</Text>
      <View>
        <Text style={overviewStyles.workDescStyle}>
          {props.workout.description} Average duration for a{' '}
          {props.workout.title} exercise is {props.workout.duration} minutes and
          an after-rest time of about {props.workout.postRestTime} minutes.
        </Text>
      </View>
    </Pressable>
  );
};

const ListContainerPlaceHolder = () => {
  return (
    <View>
      <Text>No items to display</Text>
    </View>
  );
};

const ListHeaderTitle = () => {
  return <Text style={overviewStyles.overviewHeader}>Workout overview</Text>;
};

export default Overview;
