import { configureStore } from '@reduxjs/toolkit';
import gameDifficultyReducer from './states/gameDifficultySlice';

export const store = configureStore({
  reducer: {
    gameDifficulty: gameDifficultyReducer,
  },
});
