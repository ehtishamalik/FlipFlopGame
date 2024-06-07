import { DifficultyLevel } from '../../../types';
import { diffultyOptions } from './constants';
import { DifficultySelectorProps } from './types';

export function DifficultySelector({ callback }: DifficultySelectorProps) {
  const callbackHandler = (level: DifficultyLevel) => () => {
    callback(level);
  };
  return (
    <section className="difficulty-selector">
      <div className="difficulty-selector__container">
        <div className="difficulty-selector__grid">
          {diffultyOptions.map((option) => (
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
