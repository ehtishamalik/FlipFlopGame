export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const EASY = 'EASY';
export const MEDIUM = 'MEDIUM';
export const HARD = 'HARD';
export const EXPERT = 'EXPERT';

export const difficultyOptions = {
  [EASY]: 4,
  [MEDIUM]: 6,
  [HARD]: 8,
  [EXPERT]: 10,
} as const;
