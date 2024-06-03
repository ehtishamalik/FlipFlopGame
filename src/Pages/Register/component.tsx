import { Button } from '../../Components/Common/Button';
import { TextField } from '../../Components/Common/TextField';
import { useNavigate } from 'react-router-dom';

export function Register() {
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate('/login');
  };
  return (
    <div className="auth-form">
      <div className="auth-form__container">
        <h1 className="auth-form__heading">Register</h1>
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
            id="email"
            label="email"
            size="small"
            type="email"
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
        <div className="auth-form__item">
          <TextField
            id="confirm-password"
            label="confirm password"
            size="small"
            type="password"
            onChangeCallback={() => {}}
          />
        </div>
        <div className="auth-form__button">
          <Button text="register" type="secondary" />
          <div className="auth-form__button--new">
            <p>already have an account?</p>
            <Button
              text="login"
              type="tertiary"
              onClickCallback={redirectToLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
