import { DifficultyLevel, IScore, ServerError } from '../types';

export const submitScoreboard = async (
  difficulty: DifficultyLevel,
  data: IScore
): Promise<ServerError> => {
  const response = await fetch(`api/scoreboard/${difficulty.toLowerCase()}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const scoreJson = await response.json();
  return scoreJson;
};
