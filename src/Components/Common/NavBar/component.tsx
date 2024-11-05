import { useLocation, useNavigate, matchPath } from 'react-router-dom';
import { Button } from '../Button';
import { useState } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setUserLogin } from '../../../store';

export function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isUserLogin = useSelector((state: RootState) => state.userLogin.active);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setUserLogin(false));
  };

  const redirectTo = (path: string) => () => {
    navigate(path);
  };

  const handleNavClick = () => {
    setIsOpen((prev) => !prev);
  };

  const showNavBar = !(
    matchPath('login', pathname) || matchPath('register', pathname)
  );

  const isNotHome = pathname !== '/';

  return (
    showNavBar && (
      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo">
            <figure onClick={redirectTo('/')}>
              <img src="images/logo.svg" alt="Flip Flop logo" />
            </figure>
          </div>
          <div className="navbar__links">
            {isNotHome && (
              <Button
                text="home"
                type="tertiary"
                onClickCallback={redirectTo('/')}
              />
            )}
            <Button
              text="difficulty"
              type="tertiary"
              onClickCallback={redirectTo('/gamedifficulty')}
            />
            <Button
              text="scoreboard"
              type="tertiary"
              onClickCallback={redirectTo('/scoreboard')}
            />
            {isUserLogin && (
              <Button
                text="logout"
                type="tertiary"
                onClickCallback={handleLogout}
              />
            )}
            <button
              className={clsx('navbar__mobile--close', {
                active: isOpen,
              })}
              onClick={handleNavClick}
            >
              <span className="navbar__mobile--close-bar"></span>
              <span className="navbar__mobile--close-bar"></span>
              <span className="navbar__mobile--close-bar"></span>
            </button>
            <div
              className={clsx('navbar__mobile', {
                active: isOpen,
              })}
            >
              <div className="navbar__mobile--actions">
                {isNotHome && (
                  <Button
                    text="home"
                    type="tertiary"
                    onClickCallback={redirectTo('/')}
                  />
                )}
                <Button
                  text="difficulty"
                  type="tertiary"
                  onClickCallback={redirectTo('/gamedifficulty')}
                />
                <Button
                  text="scoreboard"
                  type="tertiary"
                  onClickCallback={redirectTo('/scoreboard')}
                />
                {isUserLogin && (
                  <Button
                    text="logout"
                    type="tertiary"
                    onClickCallback={handleLogout}
                  />
                )}
              </div>
              {!isUserLogin && (
                <div className="navbar__mobile--auth">
                  <Button
                    text="login"
                    type="tertiary"
                    onClickCallback={redirectTo('/login')}
                  />
                  <Button
                    text="register"
                    type="tertiary"
                    onClickCallback={redirectTo('/register')}
                  />
                </div>
              )}
            </div>
          </div>
          {!isUserLogin && (
            <div className="navbar__buttons">
              <Button
                text="login"
                type="secondary"
                onClickCallback={redirectTo('/login')}
              />
              <Button
                text="register"
                type="primary"
                onClickCallback={redirectTo('/register')}
              />
            </div>
          )}
        </div>
      </nav>
    )
  );
}
