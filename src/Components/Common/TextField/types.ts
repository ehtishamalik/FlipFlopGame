export type TextFieldProps = {
  label: string
  type: 'text' | 'password'
  id: string
  size: 'small' | 'medium' | 'large'
  errorText?: string
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}
