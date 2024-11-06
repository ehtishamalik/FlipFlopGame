import { configureStore } from '@reduxjs/toolkit';
import GameDifficultyReducer from './states/gameDifficultySlice';
import ScoreDifficultyReducer from './states/scoreDifficultySlice';
import CounterReducer from './states/counterSlice';
import UserLoginReducer from './states/userLoginSlice';

export const store = configureStore({
  reducer: {
    gameDifficulty: GameDifficultyReducer,
    scoreDifficulty: ScoreDifficultyReducer,
    counter: CounterReducer,
    userLogin: UserLoginReducer,
  },
});
