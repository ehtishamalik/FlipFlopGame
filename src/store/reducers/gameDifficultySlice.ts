import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DifficultyLevel } from '../../types';

interface GameDifficultyState {
  level: DifficultyLevel | null
}

const initialState: GameDifficultyState = {
  level: null,
};

export const gameDifficultySlice = createSlice({
  name: 'gameDifficulty',
  initialState,
  reducers: {
    setValue: (state, { payload }: PayloadAction<DifficultyLevel>) => {
      state.level = payload;
    },
  },
});

export default gameDifficultySlice.reducer;
