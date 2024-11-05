import { useState } from 'react';
import { Button } from '../../Components/Common/Button';
import { TextField } from '../../Components/Common/TextField';
import { useNavigate } from 'react-router-dom';
import { InitialRegisterCredentials } from '../../constants';
import { AppDispatch, setUserLogin } from '../../store';
import { submitUserAuth } from '../../api';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

export function Register() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState(InitialRegisterCredentials);
  const [errors, setErrors] = useState(InitialRegisterCredentials);
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const redirectToLogin = () => {
    if (loading) return;
    navigate('/login');
  };

  const handleInput = (value: string, name: string) => {
    setCredentials({ ...credentials, [name]: value });
    if (name.includes('password')) {
      setErrors({ ...errors, password: '', confirm_password: '' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateCredentials = () => {
    const allValid = Object.values(credentials).every((value) =>
      Boolean(value)
    );
    if (!allValid) {
      const { username, email, password, confirm_password } = credentials;
      setErrors({
        username: username ? '' : 'Username Required.',
        email: email ? '' : 'Email Required.',
        password: password ? '' : 'Password Required.',
        confirm_password: confirm_password ? '' : 'Confirm Password Required.',
      });
      return false;
    }

    const { email, password, confirm_password } = credentials;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = emailRegex.test(email) ? '' : 'Email is not valid.';
    const passwordError =
      password === confirm_password ? '' : 'Passwords must match.';

    if (emailError || passwordError) {
      setErrors({
        ...errors,
        email: emailError,
        password: passwordError,
        confirm_password: passwordError,
      });
      return false;
    }

    return allValid;
  };

  const handleUserRegister = async () => {
    setLoading(true);
    const response = await submitUserAuth(credentials, 'signup');
    setLoading(false);
    const { type, message, access_token } = response;
    if (type === 'success') {
      toast.success(message);
      if (access_token) {
        localStorage.setItem("access_token", access_token)
        dispatch(setUserLogin(true));
        navigate("/")
      }
    } else {
      toast.error(message);
    }
  };

  const onRegisterClick = () => {
    if (loading) return;

    if (validateCredentials()) {
      toast.promise(handleUserRegister, {
        pending: 'Loading....',
      });
    }
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
            name="username"
            errorText={errors.username}
            onChangeCallback={handleInput}
          />
        </div>
        <div className="auth-form__item">
          <TextField
            id="email"
            label="email"
            size="small"
            type="email"
            name="email"
            errorText={errors.email}
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
        <div className="auth-form__item">
          <TextField
            id="confirm-password"
            label="confirm password"
            size="small"
            type="password"
            name="confirm_password"
            errorText={errors.confirm_password}
            onChangeCallback={handleInput}
          />
        </div>
        <div className="auth-form__button">
          <Button
            text="register"
            type="secondary"
            disabled={loading}
            onClickCallback={onRegisterClick}
          />
          <div className="auth-form__button--new">
            <p>already have an account?</p>
            <Button
              text="login"
              type="tertiary"
              disabled={loading}
              onClickCallback={redirectToLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
