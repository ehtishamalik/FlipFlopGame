import { GameDifficultySlice } from './states/gameDifficultySlice';
import { CounterSlice } from './states/counterSlice';
import { ScoreDifficultySlice } from './states/scoreDifficultySlice';

export const { setgameDifficulty } = GameDifficultySlice.actions;
export const { startCounter, stopCounter, resetCounter, incrementCounter } =
  CounterSlice.actions;
export const { setScoreDifficulty } = ScoreDifficultySlice.actions;
