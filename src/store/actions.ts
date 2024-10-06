import { GameDifficultySlice } from './states/gameDifficultySlice';
import { CounterSlice } from './states/counterSlice';

export const { setgameDifficulty } = GameDifficultySlice.actions;
export const { startCounter, stopCounter, resetCounter, incrementCounter } =
  CounterSlice.actions;
