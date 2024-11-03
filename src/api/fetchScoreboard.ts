import { DifficultyLevel, IScore, ServerError } from '../types';

export const fetchScoreboard = async (
  difficulty: DifficultyLevel
): Promise<IScore[] | ServerError> => {
  const scores = await fetch(`api/scoreboard/${difficulty.toLowerCase()}`);
  const scoreJson = await scores.json();
  return scoreJson;
};
