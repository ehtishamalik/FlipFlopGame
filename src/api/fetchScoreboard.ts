import { DifficultyLevel, IScore, ServerResponse } from '../types';

export const fetchScoreboard = async (
  difficulty: DifficultyLevel
): Promise<IScore[] | ServerResponse> => {
  const scores = await fetch(`api/scoreboard/${difficulty.toLowerCase()}`);
  const scoreJson = await scores.json();
  return scoreJson;
};
