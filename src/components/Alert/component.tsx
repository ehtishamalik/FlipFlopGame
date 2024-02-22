import { AlertProps } from './types'

export const Alert = ({ message, callback }: AlertProps) => {
  return (
    <div className='alert-container'>
      <div className='alert'>
        <div className='message'>{message}</div>
        <button type='button' className='btn-close' onClick={callback}>
          close
        </button>
      </div>
    </div>
  )
}
