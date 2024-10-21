import { difficultyOptions } from '../../constants';
import { DifficultyLevel } from '../../types';
import { DiffultyOptionsProps } from './types';

export const getDiffultyOptions = (): DiffultyOptionsProps => {
  const difficulties = Object.keys(difficultyOptions) as DifficultyLevel[];
  return difficulties.map((difficulty) => {
    return {
      difficulty,
      gridSize: difficultyOptions[difficulty],
    };
  });
};
