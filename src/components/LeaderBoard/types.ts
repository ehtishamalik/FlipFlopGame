import { DifficultyLevel } from '../../types'

export type LeaderBoardProps = {
  header: string
  defaultLevel?: DifficultyLevel
}

export type tableDataProps = {
  name: string
  time: number
}[]
