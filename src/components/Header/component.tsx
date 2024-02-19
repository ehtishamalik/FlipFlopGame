import { HeaderProps } from './types'

export const Header = ({ headerLabel, time = 0 }: HeaderProps) => {
  return (
    <header className='header'>
      <h1>{headerLabel}</h1>
      <div className='time-container'>
        <h3 className='time'>{time}</h3>
      </div>
    </header>
  )
}
