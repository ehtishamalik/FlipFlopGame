import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DifficultyLevel } from '../../types';
import { gameDifficultySliceName } from '../../constants';

interface GameDifficultyState {
  level: DifficultyLevel | null
}

const initialState: GameDifficultyState = {
  level: null,
};

export const gameDifficultySlice = createSlice({
  name: gameDifficultySliceName,
  initialState,
  reducers: {
    setgameDifficulty: (state, { payload }: PayloadAction<DifficultyLevel>) => {
      state.level = payload;
    },
  },
});

export default gameDifficultySlice.reducer;
