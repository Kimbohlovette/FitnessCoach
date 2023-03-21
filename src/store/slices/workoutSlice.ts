import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../fbConfig';
import { InitialState, Workout } from '../../types';
import { AppDispatch } from '../store';

const initialState: InitialState = {
  workouts: [
    {
      title: 'Yoga',
      description:
        'Slow motion exercise that help you make your body flexible and elastic.',
      exercises: ['Tai Chi', 'Meditation', 'Stretching'],
      duration: 10,
      postRestTime: 4,
    },
  ],
  currentWorkout: {
    title: 'Yoga',
    description:
      'Slow motion exercise that help you make your body flexible and elastic.',
    exercises: ['Tai Chi', 'Meditation', 'Stretching'],
    duration: 10,
    postRestTime: 4,
  },
  status: 'idle',
  fetchStatus: 'idle',
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
    loadAllWorkouts: (state, action) => {
      state.workouts = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWorkoutsAsync.pending, state => {
        state.fetchStatus = 'loading';
      })
      .addCase(fetchWorkoutsAsync.rejected, state => {
        state.fetchStatus = 'failed';
      })
      .addCase(fetchWorkoutsAsync.fulfilled, state => {
        state.fetchStatus = 'idle';
      });
  },
});

export const fetchWorkoutsAsync = createAsyncThunk(
  'goals/fetchWorkouts',
  async (dispatch: AppDispatch) => {
    const docsRef = collection(db, 'workouts');
    const docsSnapshot = await getDocs(docsRef);

    const workouts: Workout[] = [];

    docsSnapshot.forEach(document => {
      const data = document.data();

      const workout = {
        title: data.title,
        description: data.description,
        exercises: data.exercises,
        duration: data.duration,
        postRestTime: data.postRestTime,
      };
      workouts.push(workout);
    });
    console.log(workouts);
    dispatch(loadAllWorkouts(workouts));
  },
);

export default workoutSlice.reducer;
export const { setCurrentWorkout, setCurrentState, loadAllWorkouts } =
  workoutSlice.actions;
