import { DifficultyLevel } from '../../types'

export type DifficultySelectorProps = {
  levels: DifficultyLevel[]
  defaultLevel: DifficultyLevel | null
  classNames?: string
  callback: (value: DifficultyLevel) => void
}
