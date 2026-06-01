import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { SITE } from '../data/site';
import logo from '/logo.png';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="fb-logo">
              <img src={logo} alt="Dodonova Real Estate" />
              <span className="fb-name">
                {SITE.name}
                <span>{SITE.tagline}</span>
              </span>
            </div>
            <p>
              A curated property house listing landmark homes and signature
              residences across India — from the seafronts of Mumbai to the
              skylines of Hyderabad.
            </p>
            <div className="footer-social">
              <a href={SITE.instagramHref} target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={SITE.phoneHref} aria-label="Call us">
                <Phone />
              </a>
              <a href={SITE.emailHref} aria-label="Email us">
                <Mail />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/properties">All Properties</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Cities</h4>
            <ul>
              {SITE.cities.map((c) => (
                <li key={c}>
                  <Link to="/properties">{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Get in Touch</h4>
            <div className="fc-item">
              <Phone />
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </div>
            <div className="fc-item">
              <Mail />
              <a href={SITE.emailHref}>{SITE.email}</a>
            </div>
            <div className="fc-item">
              <InstagramIcon />
              <a href={SITE.instagramHref} target="_blank" rel="noreferrer">
                {SITE.instagram}
              </a>
            </div>
            <div className="fc-item">
              <MapPin />
              <span>Operating pan-India · Head office, Gurugram</span>
            </div>
            <a
              className="text-link"
              href={SITE.whatsappHref}
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: '0.6rem', color: 'var(--gold-soft)', borderColor: 'rgba(203,169,109,0.4)' }}
            >
              Chat on WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {SITE.name} Real Estate. All rights reserved.
          </span>
          <span className="disclaimer">
            Listings reflect representative projects and indicative pricing for
            illustration. Imagery is representational. RERA details available on
            request.
          </span>
        </div>
      </div>
    </footer>
  );
}
