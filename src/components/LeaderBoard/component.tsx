import { useState } from 'react'
import { DifficultySelector } from '../DifficultySelector'
import { LeaderBoardProps, tableDataProps } from './types'
import { difficultyLevels } from '../../constants'
import { DifficultyLevel } from '../../types'
import clsx from 'clsx'

export const LeaderBoard = ({ header, defaultLevel }: LeaderBoardProps) => {
  const [tableLevel, setTableLevel] = useState<DifficultyLevel | null>(
    defaultLevel ?? null
  )
  const tableData = tableLevel ? localStorage.getItem(tableLevel) : ''
  const ParsedTableData: tableDataProps = tableData ? JSON.parse(tableData) : []
  const stretchLeaderboard = tableLevel === 'easy' || tableLevel === null

  return (
    <div
      className={clsx('leaderboard', {
        stretch: stretchLeaderboard,
      })}
    >
      <h1>{header}</h1>
      <DifficultySelector
        levels={difficultyLevels}
        defaultLevel={tableLevel}
        callback={setTableLevel}
      />
      <table className='leaderboard-table'>
        <thead>
          <tr>
            <th>position</th>
            <th>name</th>
            <th>time</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }, (_, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{ParsedTableData[index]?.name}</td>
                <td>{ParsedTableData[index]?.time}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
