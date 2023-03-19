import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import workoutSlice from './slices/workoutSlice';

export const store = configureStore({
  reducer: {
    workout: workoutSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
