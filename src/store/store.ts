import { configureStore } from '@reduxjs/toolkit';
import GameDifficultyReducer from './states/gameDifficultySlice';
import ScoreDifficultyReducer from './states/scoreDifficultySlice';
import CounterReducer from './states/counterSlice';

export const store = configureStore({
  reducer: {
    gameDifficulty: GameDifficultyReducer,
    scoreDifficulty: ScoreDifficultyReducer,
    counter: CounterReducer,
  },
});
