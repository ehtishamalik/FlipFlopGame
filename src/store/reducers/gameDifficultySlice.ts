import { createSlice } from '@reduxjs/toolkit';
import { DifficultyLevel } from '../../types';

interface GameDifficultyState {
  level: DifficultyLevel | null
}

const initialState: GameDifficultyState = {
  level: null,
};

const gameDifficultySlice = createSlice({
  name: 'gameDifficulty',
  initialState,
  reducers: {},
});

export default gameDifficultySlice.reducer;
