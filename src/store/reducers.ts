import { SET_DIFFICULTY } from '../constants';

const initialState = {
  difficulty: 'easy',
};

export const difficultyReducer = (
  state = initialState,
  action: Record<string, string>
) => {
  switch (action.type) {
    case SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
    default:
      return state;
  }
};
