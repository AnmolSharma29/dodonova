import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { SITE } from '../data/site';
import logo from '/logo.png';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="nav-logo" aria-label="Dodonova Real Estate — Home">
            <img src={logo} alt="Dodonova Real Estate" />
            <span className="nav-wordmark">
              <span className="brand">{SITE.name}</span>
              <span className="sub">{SITE.tagline}</span>
            </span>
          </Link>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.end}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-cta">
            <a className="nav-phone" href={SITE.phoneHref}>
              <Phone /> {SITE.phone}
            </a>
          </div>

          <button
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <button
          className="nav-toggle"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          style={{ position: 'absolute', top: '1.6rem', right: '1.6rem', color: 'var(--cream-soft)' }}
        >
          <X size={28} />
        </button>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
        <a className="mm-contact" href={SITE.phoneHref} onClick={() => setOpen(false)}>
          {SITE.phone}
        </a>
      </div>
    </>
  );
}
