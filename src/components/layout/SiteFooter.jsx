import { NavLink } from 'react-router-dom'

const footerLinks = [
  { to: '/editions', label: 'Editions' },
  { to: '/build-deck', label: 'Build Your Deck' },
  { to: '/about', label: 'About' },
]

function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <NavLink className="site-footer__wordmark" to="/">
            CWT Deck Studio
          </NavLink>
          <p>Decks worth putting on the table.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-footer__meta">
          <span>Designed × Produced by CreateWithTimi</span>
          <span>© {currentYear} CWT Deck Studio</span>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
