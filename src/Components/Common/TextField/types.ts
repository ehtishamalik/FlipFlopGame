export type TextFieldProps = {
  label: string;
  type: 'text' | 'password' | 'email';
  id: string;
  size: 'small' | 'medium' | 'large';
  errorText?: string;
  onChangeCallback: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};
