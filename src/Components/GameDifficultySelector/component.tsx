import { useMemo } from 'react';
import { DifficultyLevel } from '../../types';
import { getDiffultyOptions } from './helpers';
import { useDispatch } from 'react-redux';
import { AppDispatch, setgameDifficulty } from '../../store';
import { useNavigate } from 'react-router-dom';

export function GameDifficultySelector() {
  const options = useMemo(() => getDiffultyOptions(), []);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const callbackHandler = (level: DifficultyLevel) => () => {
    dispatch(setgameDifficulty(level));
    navigate('/game');
  };

  return (
    <section className="difficulty-selector">
      <div className="difficulty-selector__container">
        <div className="difficulty-selector__grid">
          {options.map((option) => (
            <button
              className="difficulty-selector__button"
              onClick={callbackHandler(option.difficulty)}
            >
              <span className="difficulty-selector__button--name">
                {option.difficulty}
              </span>
              <span className="difficulty-selector__button--size">
                {option.gridSize} x {option.gridSize}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
