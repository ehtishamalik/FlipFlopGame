import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DifficultyLevel } from '../../types';
import { EASY } from '../../constants';

interface ScoreDifficultyState {
  level: DifficultyLevel;
}

const initialState: ScoreDifficultyState = {
  level: EASY,
};

export const ScoreDifficultySlice = createSlice({
  name: 'scoreDifficulty',
  initialState,
  reducers: {
    setScoreDifficulty: (
      state,
      { payload }: PayloadAction<DifficultyLevel>
    ) => {
      state.level = payload;
    },
  },
});

export default ScoreDifficultySlice.reducer;
