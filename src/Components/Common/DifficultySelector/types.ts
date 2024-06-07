import { DifficultyLevel } from '../../../types';

export type DifficultySelectorProps = {
  callback: (level: DifficultyLevel) => void
}
export type diffultyOptionsProps = {
  difficulty: DifficultyLevel
  gridSize: number
}[]
