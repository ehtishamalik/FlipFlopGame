import { useNavigate } from 'react-router-dom';
import { Button } from '../../Components/Common/Button';
import { TextField } from '../../Components/Common/TextField';

export function Login() {
  const navigate = useNavigate();
  const redirectToRegister = () => {
    navigate('/register');
  };
  return (
    <div className="auth-form">
      <div className="auth-form__container">
        <h1 className="auth-form__heading">Login</h1>
        <div className="auth-form__item">
          <TextField
            id="username"
            label="username"
            size="small"
            type="text"
            onChangeCallback={() => {}}
          />
        </div>
        <div className="auth-form__item">
          <TextField
            id="password"
            label="password"
            size="small"
            type="password"
            onChangeCallback={() => {}}
          />
        </div>
        <div className="auth-form__button">
          <Button text="login" type="secondary" />
          <div className="auth-form__button--new">
            <p>don't have an account?</p>
            <Button
              text="register"
              type="tertiary"
              onClickCallback={redirectToRegister}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
