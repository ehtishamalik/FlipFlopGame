import { DifficultyLevel } from '../../../types';

export type DifficultySelectorProps = {
  callback: (level: DifficultyLevel) => void
}
export type DiffultyOptionsProps = {
  difficulty: DifficultyLevel
  gridSize: number
}[]
