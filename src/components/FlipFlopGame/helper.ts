import { DifficultyLevel, tableData } from '../../types'

export const saveTime = (level: DifficultyLevel, userName: string) => {
  const previousValues = localStorage.getItem(level)
  const timeValue = parseInt(
    document.querySelector('#timer-value')?.textContent ?? '0'
  )

  const data: tableData = {
    name: userName,
    time: timeValue,
  }

  if (!previousValues) {
    localStorage.setItem(level, JSON.stringify([data]))
  } else {
    const parsedValue: tableData[] = JSON.parse(previousValues)
    parsedValue.push(data)
    parsedValue.sort((a, b) => {
      return a.time - b.time
    })
    if (parsedValue.length > 5) {
      parsedValue.pop()
    }
    localStorage.setItem(level, JSON.stringify(parsedValue))
  }
}
