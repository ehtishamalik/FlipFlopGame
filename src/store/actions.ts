import { SET_DIFFICULTY } from '../constants';

export const setDifficulty = (difficulty: string) => {
  return {
    type: SET_DIFFICULTY,
    payload: difficulty,
  };
};
