import { useState } from 'react'
import { DifficultySelectorProps } from './types'
import clsx from 'clsx'
import { DifficultyLevel } from '../../types'

export const DifficultySelector = ({
  levels,
  classNames,
  callback,
}: DifficultySelectorProps) => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  const onClickHandler = (level: DifficultyLevel) => {
    setSelectedLevel(level)
    callback(level)
  }

  return (
    <div className={clsx('difficulty-selection', classNames)}>
      {levels.map((level: DifficultyLevel) => {
        return (
          <button
            key={level}
            type='button'
            className={clsx('button', {
              selected: selectedLevel === level,
            })}
            onClick={() => {
              onClickHandler(level)
            }}
          >
            {level}
          </button>
        )
      })}
    </div>
  )
}
