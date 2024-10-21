import { DifficultyLevel } from '../../../types';

export type ScoreDifficultySelectorProps = {
  value: DifficultyLevel;
  onClickCallback: (value: DifficultyLevel) => void;
};
