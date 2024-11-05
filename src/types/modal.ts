import { EASY, MEDIUM, HARD, EXPERT } from '../constants';

export type DifficultyLevel =
  | typeof EASY
  | typeof MEDIUM
  | typeof HARD
  | typeof EXPERT;

export interface IScore {
  username: string;
  moves_count: number;
  seconds: number;
}

export type LoadingCallback = (value: boolean) => void;

export interface ServerResponse {
  type: string;
  message: string;
  details?: string;
  access_token?: string;
}
