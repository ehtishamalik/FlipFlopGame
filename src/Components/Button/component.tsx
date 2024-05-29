import { ButtonProps } from './types'

export function Button({ text, type }: ButtonProps) {
  return (
    <button className={`ff-button ${type}`} type="button" role="button">
      {text}
    </button>
  )
}
