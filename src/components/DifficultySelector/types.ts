import { DifficultyLevel } from '../../types'

export type DifficultySelectorProps = {
  levels: DifficultyLevel[]
  defaultLevel?: DifficultyLevel
  classNames?: string
  callback: (value: DifficultyLevel) => void
}
