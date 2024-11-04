export type TextFieldProps = {
  id: string;
  label: string;
  type: 'text' | 'password' | 'email';
  name: string;
  size: 'small' | 'medium' | 'large';
  errorText?: string;
  onChangeCallback: (
    value: string,
    name: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};
