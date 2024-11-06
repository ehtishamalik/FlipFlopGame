import { useState } from 'react';
import { TextFieldProps } from './types';
import clsx from 'clsx';

export function TextField({
  id,
  label,
  type,
  size,
  name,
  errorText,
  onChangeCallback,
}: TextFieldProps) {
  const [value, setValue] = useState<string>('');

  const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    onChangeCallback(value, name, event);
  };

  return (
    <div className="ff-field-text">
      <div
        className={clsx('ff-field-text__container', {
          'ff-field-text__invalid': errorText,
        })}
      >
        <input
          type={type}
          name={name}
          id={id}
          className={clsx(
            'ff-field-text__input',
            `ff-field-text__input--${size}`,
            {
              'ff-field-text__input--value': value,
            }
          )}
          onInput={onInputHandler}
        />
        <label htmlFor={id} className="ff-field-text__label">
          {label}
        </label>
      </div>
      {errorText && <p className="ff-field-text__invalid--text">{errorText}</p>}
    </div>
  );
}
