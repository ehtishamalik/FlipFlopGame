import { EASY, EXPERT, HARD, MEDIUM } from '../../../constants';
import { diffultyOptionsProps } from './types';

export const diffultyOptions: diffultyOptionsProps = [
  {
    difficulty: EASY,
    gridSize: 4,
  },
  {
    difficulty: MEDIUM,
    gridSize: 6,
  },
  {
    difficulty: HARD,
    gridSize: 8,
  },
  {
    difficulty: EXPERT,
    gridSize: 10,
  },
];
