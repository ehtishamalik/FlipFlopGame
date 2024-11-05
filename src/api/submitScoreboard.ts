import { DifficultyLevel, ServerResponse } from '../types';

export const submitScoreboard = async (
  difficulty: DifficultyLevel,
  data: {
    moves_count: number;
    seconds: number;
  },
  token: string
): Promise<ServerResponse> => {
  const response = await fetch(`api/scoreboard/${difficulty.toLowerCase()}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  const scoreJson = await response.json();
  return scoreJson;
};
