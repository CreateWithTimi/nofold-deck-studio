import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/editions', label: 'Editions' },
  { to: '/build-deck', label: 'Custom Decks' },
  { to: '/about', label: 'About' },
]

function SiteLayout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink className="brand-mark" to="/">
            NO FOLD
          </NavLink>
          <nav className="site-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <strong>NO FOLD Deck Studio</strong>
          <span className="muted">Editions and custom physical card decks.</span>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
