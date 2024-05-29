export function NavBar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-container__logo">
          <figure>
            <img src="/static/logo.svg" alt="Flip Flop logo" />
          </figure>
        </div>
        <div className="navbar-container__links">
          <a href="/login" className="ff-button tertiary">
            login
          </a>
          <a href="/signup" className="ff-button tertiary">
            signup
          </a>
        </div>
      </div>
    </nav>
  )
}
