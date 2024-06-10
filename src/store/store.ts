import { configureStore } from '@reduxjs/toolkit';
import gameDifficultyReducer from './reducers/gameDifficultySlice';

export const store = configureStore({
  reducer: {
    gameDifficulty: gameDifficultyReducer,
  },
});
