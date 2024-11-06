import { GameDifficultySlice } from './states/gameDifficultySlice';
import { CounterSlice } from './states/counterSlice';
import { ScoreDifficultySlice } from './states/scoreDifficultySlice';
import { UserLoginSlice } from './states/userLoginSlice';

export const { setgameDifficulty } = GameDifficultySlice.actions;
export const { startCounter, stopCounter, resetCounter, incrementCounter } =
  CounterSlice.actions;
export const { setScoreDifficulty } = ScoreDifficultySlice.actions;
export const { setUserLogin } = UserLoginSlice.actions;
