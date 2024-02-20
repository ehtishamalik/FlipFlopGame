import { DifficultyLevel } from '../../types'

export type DifficultySelectorProps = {
  levels: DifficultyLevel[]
  classNames?: string
  callback: (value: DifficultyLevel) => void
}
