import { configureStore } from '@reduxjs/toolkit';
import gameDifficultyReducer from './states/gameDifficultySlice';
import CounterReducer from './states/counterSlice';

export const store = configureStore({
  reducer: {
    gameDifficulty: gameDifficultyReducer,
    counter: CounterReducer,
  },
});
