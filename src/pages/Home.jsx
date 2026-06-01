import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Compass,
  ShieldCheck,
  Phone,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import PropertyCard from '../components/PropertyCard';
import { handleImgError } from '../components/PropertyCard';
import { properties } from '../data/properties';
import { SITE } from '../data/site';

const HERO_BG =
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=80';
const STORY_IMG =
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80';

const heroStats = [
  { num: '250+', label: 'Signature Listings' },
  { num: '5', label: 'Metro Cities' },
  { num: '₹2,400Cr+', label: 'Value Transacted' },
  { num: '1,200+', label: 'Families Settled' },
];

const values = [
  {
    icon: <Sparkles />,
    title: 'A Curated Portfolio',
    text: 'Every listing is hand-selected for its address, architecture and long-term value — never a noticeboard, always a collection.',
  },
  {
    icon: <Compass />,
    title: 'Guided, End-to-End',
    text: 'From the first viewing to the final registration, a dedicated advisor walks each step with you, demystifying the entire journey.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Trusted & Transparent',
    text: 'RERA-registered projects, verified paperwork and honest counsel. We would rather lose a deal than your confidence.',
  },
];

const metrics = [
  { num: '12+', label: 'Years of Practice' },
  { num: '5', label: 'Cities Covered' },
  { num: '98%', label: 'Client Retention' },
  { num: '1,200+', label: 'Homes Delivered' },
];

export default function Home() {
  const featured = properties.filter((p) => p.featured).slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="container hero-inner">
          <span className="eyebrow">Luxury Real Estate · India</span>
          <h1>
            Find the address that <em>feels like arriving.</em>
          </h1>
          <p className="hero-sub">
            Dodonova brings together India’s most considered homes — landmark
            towers, seafront residences and quiet boutique addresses — under one
            trusted name.
          </p>
          <div className="hero-actions">
            <Link to="/properties" className="btn btn-gold">
              Browse Properties <ArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-ghost-light">
              Speak to an Advisor <ArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="hero-stats">
            {heroStats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal className="split-media">
              <img src={STORY_IMG} alt="A Dodonova residence" onError={handleImgError} />
              <span className="frame" />
              <div className="badge">
                <div className="big">2012</div>
                <div className="small">Est. in India</div>
              </div>
            </Reveal>
            <Reveal className="split-body" delay={120}>
              <span className="eyebrow">Who we are</span>
              <h2 className="section-title">
                A house built for finding the right home.
              </h2>
              <p>
                Dodonova began with a simple conviction: that buying a home
                should feel as considered as the home itself. We are a property
                house, not a portal — pairing a tightly edited national
                portfolio with advisors who actually know their cities.
              </p>
              <p>
                From Mumbai’s seafronts to the tech corridors of Bangalore and
                Hyderabad, we represent residences worth living a life in.
              </p>
              <ul className="sig-list">
                <li>
                  <Check /> Hand-picked, RERA-registered residences
                </li>
                <li>
                  <Check /> One advisor, start to finish
                </li>
                <li>
                  <Check /> Honest pricing and clear paperwork
                </li>
              </ul>
              <div className="actions">
                <Link to="/about" className="text-link">
                  Our Story <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section section--cream-deep">
        <div className="container">
          <Reveal
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '3.5rem',
            }}
          >
            <div className="head-block">
              <span className="eyebrow">Featured Residences</span>
              <h2 className="section-title">Currently on our books.</h2>
            </div>
            <Link to="/properties" className="text-link">
              View all properties <ArrowRight size={15} />
            </Link>
          </Reveal>

          <div className="prop-grid">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 110}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="section tight">
        <div className="container center">
          <Reveal>
            <div className="divider-mark">
              <span /> <span className="dot" /> <span />
            </div>
            <span className="eyebrow center">Across the country</span>
            <h2 className="section-title" style={{ maxWidth: '20ch', margin: '1rem auto 0' }}>
              Five cities. One standard.
            </h2>
            <div className="city-strip">
              {SITE.cities.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section--cream-deep">
        <div className="container">
          <Reveal className="head-block center" style={{ textAlign: 'center', margin: '0 auto' }}>
            <span className="eyebrow center">The Dodonova difference</span>
            <h2 className="section-title">Why people buy with us.</h2>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className="value-card">
                  <div className="icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section section--dark">
        <div className="container">
          <div className="metric-band">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 110}>
                <div>
                  <div className="num">{m.num}</div>
                  <div className="label">{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band">
        <div className="container">
          <Reveal className="inner" style={{ margin: '0 auto' }}>
            <span className="eyebrow center" style={{ justifyContent: 'center' }}>
              Let’s begin
            </span>
            <h2>
              Your next address is <em>waiting.</em>
            </h2>
            <p style={{ maxWidth: '52ch', margin: '0 auto' }}>
              Tell us what you’re looking for and we’ll send a shortlist worth
              your time — usually within a day.
            </p>
            <div className="actions">
              <Link to="/contact" className="btn btn-gold">
                Enquire Now <ArrowRight />
              </Link>
              <a href={SITE.phoneHref} className="btn btn-ghost-light">
                <Phone /> {SITE.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
