import { Button } from '../Button'

export function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-container__logo">
          <figure>
            <img src="/static/logo.svg" alt="Flip Flop logo" />
          </figure>
        </div>
        <div className="navbar-container__links">
          <Button text="play" type="tertiary" />
          <Button text="scoreboard" type="tertiary" />
        </div>
        <div className="navbar-container__buttons">
          <Button text="login" type="secondary" />
          <Button text="register" type="primary" />
        </div>
      </div>
    </nav>
  )
}
