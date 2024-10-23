import { useMemo } from 'react';
import { difficultyOptions } from '../../../constants';
import { DifficultyLevel } from '../../../types';
import { ScoreDifficultySelectorProps } from './types';
import { Button } from '../../Common/Button';

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
          <Button
            key={index}
            text={option}
            type="secondary"
            active={option === value}
            onClickCallback={handleOnClick(option)}
          />
        ))}
      </div>
    </section>
  );
}
