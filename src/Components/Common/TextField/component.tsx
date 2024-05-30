import { TextFieldProps } from './types'

export function TextField({
  id,
  label,
  type,
  size,
  errorText,
  onChangeHandler,
}: TextFieldProps) {
  return (
    <div className="ff-field-text">
      <div className={`ff-field-text__container ff-field-text__${size}`}>
        <input
          type={type}
          name=""
          id={id}
          className="ff-field-text__input"
          onChange={onChangeHandler}
        />
        <label htmlFor={id} className="ff-field-text__label">
          {label}
        </label>
      </div>
      {errorText && (
        <div className="ff-field-text__helper-text">{errorText}</div>
      )}
    </div>
  )
}
