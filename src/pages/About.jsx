import { Link } from 'react-router-dom';
import {
  Search,
  Gem,
  Handshake,
  ArrowRight,
  Phone,
  Check,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import { handleImgError } from '../components/PropertyCard';
import { SITE } from '../data/site';

const STORY_IMG =
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80';

const principles = [
  {
    icon: <Search />,
    title: 'We Listen First',
    text: 'Before a single listing is shared, we understand how you want to live — the commute, the light, the school run, the years ahead.',
  },
  {
    icon: <Gem />,
    title: 'We Curate Hard',
    text: 'Out of everything on the market, only a fraction earns a place on our books. Address, builder pedigree and resale strength all have to hold up.',
  },
  {
    icon: <Handshake />,
    title: 'We Stay The Course',
    text: 'One advisor walks you from first viewing to final registration — coordinating paperwork, banks and builders so you never chase a thing.',
  },
];

const metrics = [
  { num: '12+', label: 'Years of Practice' },
  { num: '5', label: 'Cities Covered' },
  { num: '98%', label: 'Client Retention' },
  { num: '1,200+', label: 'Homes Delivered' },
];

export default function About() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">About Dodonova</span>
          <h1>A property house, not a portal.</h1>
          <p>
            We exist for the part of a home search that a listings feed can’t
            help with — the judgement, the access and the steady hand from first
            viewing to final keys.
          </p>
        </div>
      </header>

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal className="split-media">
              <img src={STORY_IMG} alt="A Dodonova residence interior" onError={handleImgError} />
              <span className="frame" />
              <div className="badge">
                <div className="big">2012</div>
                <div className="small">Est. in India</div>
              </div>
            </Reveal>
            <Reveal className="split-body" delay={120}>
              <span className="eyebrow">Our story</span>
              <h2 className="section-title">Built on the belief that buying should feel considered.</h2>
              <p>
                Dodonova began in 2012 with a small team and a stubborn idea:
                that the people guiding one of life’s biggest decisions should
                know their cities intimately and have nothing to sell but the
                right fit. No noticeboard of every available flat — a deliberate,
                curated portfolio instead.
              </p>
              <p>
                More than a decade on, that approach has settled over a thousand
                families into homes across Mumbai, Gurugram, Bangalore, Hyderabad
                and Chennai — and kept most of them returning, and referring.
              </p>
              <ul className="sig-list">
                <li>
                  <Check /> A single, tightly edited national portfolio
                </li>
                <li>
                  <Check /> Advisors who actually live in their markets
                </li>
                <li>
                  <Check /> Transparent pricing and verified paperwork
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section section--cream-deep">
        <div className="container">
          <Reveal className="head-block center" style={{ textAlign: 'center', margin: '0 auto' }}>
            <span className="eyebrow center">How we work</span>
            <h2 className="section-title">Three principles, every time.</h2>
          </Reveal>
          <div className="values-grid">
            {principles.map((v, i) => (
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
          <Reveal className="head-block center" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
            <span className="eyebrow center" style={{ color: 'var(--gold-soft)' }}>
              By the numbers
            </span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              A track record, quietly built.
            </h2>
          </Reveal>
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

      {/* CITIES */}
      <section className="section tight">
        <div className="container center">
          <Reveal>
            <div className="divider-mark">
              <span /> <span className="dot" /> <span />
            </div>
            <span className="eyebrow center">Where we work</span>
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

      {/* CTA */}
      <section className="section cta-band">
        <div className="container">
          <Reveal className="inner" style={{ margin: '0 auto' }}>
            <span className="eyebrow center" style={{ justifyContent: 'center' }}>
              Work with us
            </span>
            <h2>
              Let’s find the one that <em>fits.</em>
            </h2>
            <p style={{ maxWidth: '52ch', margin: '0 auto' }}>
              Tell us how you want to live and we’ll bring you a shortlist worth
              your time — usually within a day.
            </p>
            <div className="actions">
              <Link to="/contact" className="btn btn-gold">
                Start the Conversation <ArrowRight />
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
