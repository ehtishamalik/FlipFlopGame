import clsx from 'clsx'
import { TimerProps } from './types'
import { useEffect, useState } from 'react'

export const Timer = ({ isActive }: TimerProps) => {
  const [seconds, setSeconds] = useState<number>(0)

  useEffect(() => {
    let interval: number
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1)
      }, 1000)
    } else {
      setSeconds(0)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isActive])
  return (
    <span
      id='timer-value'
      className={clsx('time', {
        inactive: seconds === 0,
      })}
    >
      {seconds}
    </span>
  )
}
