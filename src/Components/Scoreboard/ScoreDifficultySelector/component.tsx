import { useMemo } from 'react';
import { difficultyOptions } from '../../../constants';
import { DifficultyLevel } from '../../../types';
import { ScoreDifficultySelectorProps } from './types';
import clsx from 'clsx';

export function ScoreDifficultySelector({
  value,
  onClickCallback,
}: ScoreDifficultySelectorProps) {
  const options = useMemo(
    () => Object.keys(difficultyOptions) as DifficultyLevel[],
    []
  );
  const handleOnClick = (level: DifficultyLevel) => () => {
    onClickCallback(level);
  };
  return (
    <section className="score-difficulty">
      <div className="score-difficulty__container">
        {options.map((option, index) => (
          <button
            key={index}
            className={clsx('score-difficulty--button', {
              active: option === value,
            })}
            onClick={handleOnClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </section>
  );
}
