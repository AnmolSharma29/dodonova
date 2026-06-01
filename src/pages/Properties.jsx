import { useMemo, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import Reveal from '../components/Reveal';
import PropertyCard from '../components/PropertyCard';
import { properties, cities, statuses } from '../data/properties';

const sorts = [
  { id: 'featured', label: 'Featured' },
  { id: 'low', label: 'Price · Low' },
  { id: 'high', label: 'Price · High' },
];

export default function Properties() {
  const [city, setCity] = useState('All');
  const [status, setStatus] = useState('All');
  const [sort, setSort] = useState('featured');

  const list = useMemo(() => {
    let r = properties.filter(
      (p) =>
        (city === 'All' || p.city === city) &&
        (status === 'All' || p.status === status)
    );
    if (sort === 'low') r = [...r].sort((a, b) => a.priceValue - b.priceValue);
    else if (sort === 'high') r = [...r].sort((a, b) => b.priceValue - a.priceValue);
    else r = [...r].sort((a, b) => Number(b.featured) - Number(a.featured));
    return r;
  }, [city, status, sort]);

  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">The Portfolio</span>
          <h1>Residences across India.</h1>
          <p>
            A tightly edited collection of landmark towers, seafront homes and
            boutique addresses in five cities — each one chosen for its location,
            architecture and lasting value.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {/* City filter */}
          <div className="filter-bar">
            <div className="filter-group">
              {cities.map((c) => (
                <button
                  key={c}
                  className={`chip ${city === c ? 'active' : ''}`}
                  onClick={() => setCity(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <span className="result-count">
              {list.length} {list.length === 1 ? 'residence' : 'residences'}
            </span>
          </div>

          {/* Status + sort */}
          <div className="filter-bar" style={{ marginTop: '-1.4rem' }}>
            <div className="filter-group">
              {statuses.map((s) => (
                <button
                  key={s}
                  className={`chip ${status === s ? 'active' : ''}`}
                  onClick={() => setStatus(s)}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="filter-group" aria-label="Sort">
              <span
                className="result-count"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
              >
                <SlidersHorizontal size={14} /> Sort
              </span>
              {sorts.map((s) => (
                <button
                  key={s.id}
                  className={`chip ${sort === s.id ? 'active' : ''}`}
                  onClick={() => setSort(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {list.length > 0 ? (
            <div className="prop-grid">
              {list.map((p, i) => (
                <Reveal key={p.id} delay={(i % 3) * 100}>
                  <PropertyCard property={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal
              className="center"
              style={{ padding: '4rem 0', textAlign: 'center' }}
            >
              <h3 className="section-title" style={{ marginBottom: '0.6rem' }}>
                Nothing matches just yet.
              </h3>
              <p className="lead" style={{ margin: '0 auto', maxWidth: '46ch' }}>
                Try widening your filters — or tell us exactly what you’re after
                and we’ll source it for you.
              </p>
              <button
                className="btn btn-outline"
                style={{ marginTop: '1.6rem' }}
                onClick={() => {
                  setCity('All');
                  setStatus('All');
                  setSort('featured');
                }}
              >
                Reset filters
              </button>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
