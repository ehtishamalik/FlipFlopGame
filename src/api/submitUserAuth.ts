import {
  errorResponse,
  InitialLoginCredentials,
  InitialRegisterCredentials,
} from '../constants';
import { ServerResponse } from '../types';

export const submitUserAuth = async (
  credentials:
    | typeof InitialLoginCredentials
    | typeof InitialRegisterCredentials,
  type: 'login' | 'signup'
): Promise<ServerResponse> => {
  try {
    const response = await fetch(`api/auth/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const scoreJson = await response.json();
    return scoreJson;
  } catch (error) {
    console.error(error);
    return {
      type: 'error',
      message: errorResponse,
    };
  }
};
