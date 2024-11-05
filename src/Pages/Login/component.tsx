import { useNavigate } from 'react-router-dom';
import { Button } from '../../Components/Common/Button';
import { TextField } from '../../Components/Common/TextField';
import { useState } from 'react';
import { InitialLoginCredentials } from '../../constants';
import { submitUserAuth } from '../../api';
import { toast } from 'react-toastify';
import { AppDispatch, setUserLogin } from '../../store';
import { useDispatch } from 'react-redux';

export function Login() {
  const [credentials, setCredentials] = useState(InitialLoginCredentials);
  const [errors, setErrors] = useState(InitialLoginCredentials);
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const redirectToRegister = () => {
    if (loading) return;
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

  const handleUserLogin = async () => {
    setLoading(true);
    const response = await submitUserAuth(credentials, 'login');
    setLoading(false);
    const { type, message, access_token } = response;
    if (type === 'success') {
      toast.success(message);
      if (access_token) {
        localStorage.setItem("access_token", access_token);
        dispatch(setUserLogin(true));
        navigate("/")
      }
    } else {
      toast.error(message);
    }
  };

  const onLoginClick = () => {
    if (loading) return;

    if (validateCredentials()) {
      toast.promise(handleUserLogin, {
        pending: 'Loading....',
      });
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
            disabled={loading}
            onClickCallback={onLoginClick}
          />
          <div className="auth-form__button--new">
            <p>don't have an account?</p>
            <Button
              text="register"
              type="tertiary"
              disabled={loading}
              onClickCallback={redirectToRegister}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
