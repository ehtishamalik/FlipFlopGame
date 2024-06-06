import { EASY, MEDIUM, HARD, EXPERT } from '../constants';

export type DifficultyLevel =
  | typeof EASY
  | typeof MEDIUM
  | typeof HARD
  | typeof EXPERT
