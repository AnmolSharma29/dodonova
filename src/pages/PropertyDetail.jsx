import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Compass,
  CalendarClock,
  ShieldCheck,
  Check,
  Phone,
  Mail,
  MessageCircle,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import PropertyCard from '../components/PropertyCard';
import { handleImgError } from '../components/PropertyCard';
import { properties, getProperty } from '../data/properties';
import { SITE } from '../data/site';
import NotFound from './NotFound';

export default function PropertyDetail() {
  const { id } = useParams();
  const p = getProperty(id);
  const [sent, setSent] = useState(false);

  if (!p) return <NotFound />;

  const specs = [
    { icon: <BedDouble />, v: `${p.bhk} BHK`, k: 'Configuration' },
    { icon: <Bath />, v: p.bath, k: 'Bathrooms' },
    { icon: <Maximize />, v: p.area.toLocaleString('en-IN'), k: 'Sq. Ft.' },
    { icon: <Compass />, v: p.facing, k: 'Facing' },
    { icon: <CalendarClock />, v: p.possession, k: 'Possession' },
    { icon: <ShieldCheck />, v: p.rera ? 'Yes' : '—', k: 'RERA' },
  ];

  const more = properties
    .filter((x) => x.id !== p.id)
    .sort((a, b) => Number(b.city === p.city) - Number(a.city === p.city))
    .slice(0, 3);

  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">
            {p.status} · {p.city}
          </span>
          <h1>{p.name}</h1>
          <p>{p.short}</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight />
            <Link to="/properties">Properties</Link>
            <ChevronRight />
            <span>{p.name}</span>
          </nav>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="detail-gallery">
            <img
              className="g-main"
              src={p.images[0]}
              alt={`${p.name} — exterior`}
              onError={handleImgError}
            />
            <img
              className="g-thumb"
              src={p.images[1]}
              alt={`${p.name} — interior`}
              onError={handleImgError}
            />
            <img
              className="g-thumb"
              src={p.images[2]}
              alt={`${p.name} — living space`}
              onError={handleImgError}
            />
          </div>

          <div className="detail-grid">
            <div className="detail-main">
              <span className="detail-loc">
                <MapPin /> {p.locality}, {p.city}, {p.state}
              </span>
              <h2 className="detail-title">{p.developer}</h2>

              <h2>Overview</h2>
              <p className="lead">{p.description}</p>

              <div className="spec-grid">
                {specs.map((s) => (
                  <div className="cell" key={s.k}>
                    {s.icon}
                    <div className="v">{s.v}</div>
                    <div className="k">{s.k}</div>
                  </div>
                ))}
              </div>

              <h2>Highlights</h2>
              <ul className="sig-list">
                {p.highlights.map((h) => (
                  <li key={h}>
                    <Check /> {h}
                  </li>
                ))}
              </ul>

              <h2>Amenities</h2>
              <ul className="amenities">
                {p.amenities.map((a) => (
                  <li key={a}>
                    <Check /> {a}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="enquiry-card">
              <div className="price">{p.price}</div>
              <div className="price-note">Indicative · {p.type}</div>

              {sent ? (
                <div className="form-success">
                  <Check /> Thank you — an advisor will be in touch shortly.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <input type="text" placeholder="Full name" required />
                  <div style={{ height: '0.7rem' }} />
                  <input type="tel" placeholder="Phone" required />
                  <div style={{ height: '0.7rem' }} />
                  <input type="email" placeholder="Email" required />
                  <div style={{ height: '0.7rem' }} />
                  <textarea
                    rows={3}
                    placeholder={`I'd like to know more about ${p.name}.`}
                    defaultValue=""
                  />
                  <button type="submit" className="btn btn-gold">
                    Request Details <ArrowRight size={16} />
                  </button>
                </form>
              )}

              <div className="enquiry-divider">or reach us directly</div>
              <div className="enquiry-contact">
                <a href={SITE.phoneHref}>
                  <Phone /> {SITE.phone}
                </a>
                <a href={SITE.emailHref}>
                  <Mail /> {SITE.email}
                </a>
                <a href={SITE.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle /> Chat on WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--cream-deep">
        <div className="container">
          <Reveal className="head-block" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Keep exploring</span>
            <h2 className="section-title">More residences you may like.</h2>
          </Reveal>
          <div className="prop-grid">
            {more.map((m, i) => (
              <Reveal key={m.id} delay={(i % 3) * 100}>
                <PropertyCard property={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
