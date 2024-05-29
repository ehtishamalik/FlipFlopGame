export function NavBar() {
  return (
    <div className="navbar">
      <div className="container navbar-container">
        <div className="navbar-container__logo">
          <figure>
            <img src="/static/logo.svg" alt="Flip Flop logo" />
          </figure>
        </div>
        <div className="navbar-container__links">
          <a href="/login" className="button secondary">
            login
          </a>
          <a href="/signup" className="button primary">
            signup
          </a>
        </div>
      </div>
    </div>
  )
}
