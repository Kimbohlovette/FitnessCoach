import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from '../../types';

const initialState: InitialState = {
  workouts: [],
  currentWorkout: null,
  status: 'idle',
};
const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    setCurrentWorkout: (state, action) => {
      state.currentWorkout = state.workouts.filter(
        workout => state.workouts.indexOf(workout) === action.payload,
      )[0];
    },
    setCurrentState: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default workoutSlice.reducer;
export const { setCurrentWorkout, setCurrentState } = workoutSlice.actions;
