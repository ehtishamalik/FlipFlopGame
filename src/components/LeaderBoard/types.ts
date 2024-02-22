import { DifficultyLevel } from '../../types'

export type LeaderBoardProps = {
  header: string
  defaultLevel?: DifficultyLevel | null
}

export type tableDataProps = {
  name: string
  time: number
}[]
