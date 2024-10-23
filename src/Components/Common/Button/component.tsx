import clsx from 'clsx';
import { ButtonProps } from './types';

export function Button({
  text,
  type,
  active = false,
  onClickCallback,
}: ButtonProps) {
  return (
    <button
      className={clsx('ff-button', {
        'ff-button__primary': type === 'primary',
        'ff-button__secondary': type === 'secondary',
        'ff-button__tertiary': type === 'tertiary',
        active: active,
      })}
      type="button"
      role="button"
      onClick={onClickCallback}
    >
      {text}
    </button>
  );
}
