import clsx from 'clsx';
import { ButtonProps } from './types';

export function Button({
  text,
  type,
  active = false,
  disabled,
  onClickCallback,
}: ButtonProps) {
  return (
    <button
      className={clsx('ff-button', {
        'ff-button__primary': type === 'primary',
        'ff-button__secondary': type === 'secondary',
        'ff-button__tertiary': type === 'tertiary',
        'ff-button__disabled': disabled,
        active: active,
      })}
      type="button"
      role="button"
      disabled={disabled}
      onClick={onClickCallback}
    >
      {text}
    </button>
  );
}
