import { useState } from 'react'
import { DifficultySelector } from '../DifficultySelector'
import { tableDataProps } from './types'
import { difficultyLevels } from '../../constants'

export const LeaderBoard = () => {
  const [tableLevel, setTableLevel] = useState<string | null>(null)
  const tableData = tableLevel ? localStorage.getItem(tableLevel) : ''
  const ParsedTableData: tableDataProps = tableData ? JSON.parse(tableData) : []

  return (
    <>
      <DifficultySelector
        levels={difficultyLevels}
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
