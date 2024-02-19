import { useState, useRef, useEffect } from 'react'
import editPencil from '../../assets/svgs/edit-button.svg'
import { InputFieldProps } from './types'

export const InputField = ({ callback }: InputFieldProps) => {
  const [disableInput, setDisableInput] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onBlurHandler = () => {
    setDisableInput(true)
    callback?.(inputValue)
  }

  useEffect(() => {
    if (!disableInput) {
      inputRef.current?.focus()
    }
  }, [disableInput])

  return (
    <div className='input-field__container'>
      <input
        type='text'
        id='name-field'
        className='input-field'
        disabled={disableInput}
        placeholder='Insert Name Here'
        ref={inputRef}
        onBlur={onBlurHandler}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
      />
      {disableInput && (
        <button
          type='button'
          className='edit-button'
          onClick={() => {
            setDisableInput(!disableInput)
          }}
        >
          <img
            src={editPencil}
            alt='Image of edit button'
            className='edit-image'
          />
        </button>
      )}
    </div>
  )
}
