import clsx from 'clsx'
import { TimerProps } from './types'

export const Timer = ({ time = 0 }: TimerProps) => {
  return (
    <span
      className={clsx('time', {
        inactive: time === 0,
      })}
    >
      {time}
    </span>
  )
}
