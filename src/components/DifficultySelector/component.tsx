import { DifficultySelectorProps } from './types'
import clsx from 'clsx'
import { DifficultyLevel } from '../../types'

export const DifficultySelector = ({
  levels,
  defaultLevel,
  classNames,
  callback,
}: DifficultySelectorProps) => {
  return (
    <div className={clsx('difficulty-selection', classNames)}>
      {levels.map((level: DifficultyLevel) => {
        return (
          <button
            key={level}
            type='button'
            className={clsx('button', {
              selected: defaultLevel === level,
            })}
            onClick={() => {
              callback(level)
            }}
          >
            {level}
          </button>
        )
      })}
    </div>
  )
}
