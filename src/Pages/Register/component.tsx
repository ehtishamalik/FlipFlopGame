import { TextField } from '../../Components/Common/TextField'

export function Register() {
  return (
    <div className="auth-form">
      <div className="auth-form__container">
        <h1 className="auth-form__heading">Login</h1>
        <div className="auth-form__container--item">
          <TextField
            id="username"
            label="username"
            size="medium"
            type="text"
            onChangeCallback={() => {}}
          />
        </div>
        <div className="auth-form__container--item">
          <TextField
            id="password"
            label="password"
            size="medium"
            type="password"
            onChangeCallback={() => {}}
          />
        </div>
      </div>
    </div>
  )
}
