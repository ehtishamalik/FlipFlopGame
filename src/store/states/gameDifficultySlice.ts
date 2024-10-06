import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DifficultyLevel } from '../../types';

interface GameDifficultyState {
  level: DifficultyLevel | null;
}

const initialState: GameDifficultyState = {
  level: null,
};

export const GameDifficultySlice = createSlice({
  name: 'gameDifficulty',
  initialState,
  reducers: {
    setgameDifficulty: (state, { payload }: PayloadAction<DifficultyLevel>) => {
      state.level = payload;
    },
  },
});

export default GameDifficultySlice.reducer;
