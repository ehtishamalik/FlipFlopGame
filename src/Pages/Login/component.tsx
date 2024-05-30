import { TextField } from '../../Components/Common/TextField/component'

export function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <TextField
          id="username"
          label="username"
          size="small"
          type="text"
          onChangeHandler={() => {}}
        />
      </div>
    </div>
  )
}
