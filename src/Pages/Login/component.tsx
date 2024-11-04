import { useNavigate } from 'react-router-dom';
import { Button } from '../../Components/Common/Button';
import { TextField } from '../../Components/Common/TextField';
import { useState } from 'react';
import { InitialLoginCredentials } from '../../constants';

export function Login() {
  const [credentials, setCredentials] = useState(InitialLoginCredentials);
  const [errors, setErrors] = useState(InitialLoginCredentials);

  const navigate = useNavigate();
  const redirectToRegister = () => {
    navigate('/register');
  };

  const handleInput = (value: string, name: string) => {
    setCredentials({ ...credentials, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateCredentials = () => {
    const allValid = Object.values(credentials).every((value) =>
      Boolean(value)
    );
    if (!allValid) {
      const { username, password } = credentials;
      setErrors({
        username: username ? '' : 'Username Required.',
        password: password ? '' : 'Password Required.',
      });
    }

    return allValid;
  };

  const onLoginClick = () => {
    if (validateCredentials()) {
      console.log('valid');
    }
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
            name="username"
            errorText={errors.username}
            onChangeCallback={handleInput}
          />
        </div>
        <div className="auth-form__item">
          <TextField
            id="password"
            label="password"
            size="small"
            type="password"
            name="password"
            errorText={errors.password}
            onChangeCallback={handleInput}
          />
        </div>
        <div className="auth-form__button">
          <Button
            text="login"
            type="secondary"
            onClickCallback={onLoginClick}
          />
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
