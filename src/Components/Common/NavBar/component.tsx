import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../Button'

export function NavBar() {
  const location = useLocation()

  const navigate = useNavigate()
  const redirectTo = (path: string) => () => {
    navigate(path)
  }

  const hideNavBar =
    location.pathname === '/login' || location.pathname === '/register'

  return (
    !hideNavBar && (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-container__logo">
            <figure onClick={redirectTo('/')}>
              <img src="/static/logo.svg" alt="Flip Flop logo" />
            </figure>
          </div>
          <div className="navbar-container__links">
            <Button text="play" type="tertiary" />
            <Button text="scoreboard" type="tertiary" />
          </div>
          <div className="navbar-container__buttons">
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
  )
}
