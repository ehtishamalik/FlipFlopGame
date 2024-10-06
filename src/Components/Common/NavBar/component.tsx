import { useLocation, useNavigate, matchPath } from 'react-router-dom';
import { Button } from '../Button';

export function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const redirectTo = (path: string) => () => {
    navigate(path);
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
            <Button text="scoreboard" type="tertiary" />
          </div>
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
        </div>
      </nav>
    )
  );
}
