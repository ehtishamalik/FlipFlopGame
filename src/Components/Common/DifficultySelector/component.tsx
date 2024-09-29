import { DifficultyLevel } from '../../../types';
import { getDiffultyOptions } from './helpers';
import { DifficultySelectorProps } from './types';

export function DifficultySelector({ callback }: DifficultySelectorProps) {
  const options = getDiffultyOptions();
  const callbackHandler = (level: DifficultyLevel) => () => {
    callback(level);
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
