import { ButtonProps } from './types'

export function Button({ text, type, onClickCallback }: ButtonProps) {
  return (
    <button
      className={`ff-button ${type}`}
      type="button"
      role="button"
      onClick={onClickCallback}
    >
      {text}
    </button>
  )
}
