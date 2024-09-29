import { diffultyOptions } from '../../../constants';
import { DifficultyLevel } from '../../../types';
import { DiffultyOptionsProps } from './types';

export const getDiffultyOptions = (): DiffultyOptionsProps => {
  const difficulties = Object.keys(diffultyOptions) as DifficultyLevel[];
  return difficulties.map((difficulty) => {
    return {
      difficulty,
      gridSize: diffultyOptions[difficulty]
    }
  });
};
