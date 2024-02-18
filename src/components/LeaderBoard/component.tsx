import { useState } from 'react'
import { DifficultySelector } from '../DifficultySelector'
import { leaderBoardLevels } from './constants'
import { tableDataProps } from './types'

export const LeaderBoard = () => {
  const [tableLevel, setTableLevel] = useState<string | null>(null)
  const tableData = tableLevel ? localStorage.getItem(tableLevel) : ''
  const ParsedTableData: tableDataProps = tableData ? JSON.parse(tableData) : []

  return (
    <>
      <DifficultySelector
        levels={leaderBoardLevels}
        callback={(level) => {
          setTableLevel(level)
        }}
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
    </>
  )
}
