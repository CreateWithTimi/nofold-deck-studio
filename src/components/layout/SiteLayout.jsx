import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SiteFooter from './SiteFooter.jsx'

const navItems = [
  { to: '/editions', label: 'Editions' },
  { to: '/custom-work', label: 'Custom Work' },
  { to: '/build-deck', label: 'Build Yours' },
  { to: '/about', label: 'About' },
]

const mobileNavItems = [{ to: '/', label: 'Home', end: true }, ...navItems]

function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink className="brand-mark" onClick={closeMenu} to="/">
            CWT DECK STUDIO
          </NavLink>
          <nav className="site-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            className="menu-trigger"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
        <div
          className={`mobile-nav-panel${isMenuOpen ? ' is-open' : ''}`}
          id="mobile-navigation"
        >
          <nav aria-label="Mobile navigation">
            {mobileNavItems.map((item) => (
              <NavLink
                end={item.end}
                key={item.to}
                onClick={closeMenu}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <NavLink
            className="button mobile-nav-panel__cta"
            onClick={closeMenu}
            to="/build-deck"
          >
            Build Your Deck
          </NavLink>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  )
}

export default SiteLayout
