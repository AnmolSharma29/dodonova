import { Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Maximize, ArrowUpRight, Heart } from 'lucide-react';

// Neutral inline-SVG placeholder so a failed image never shows a broken icon.
export const IMG_FALLBACK =
  'data:image/svg+xml;charset=utf-8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#ece4d4"/>
      <g fill="none" stroke="#b89253" stroke-width="6" opacity="0.6">
        <path d="M300 360 L300 250 L400 190 L500 250 L500 360 Z"/>
        <path d="M340 360 L340 300 L460 300 L460 360"/>
      </g>
      <text x="400" y="430" font-family="Georgia, serif" font-size="26" fill="#9b7c42" text-anchor="middle" opacity="0.8">Dodonova</text>
    </svg>`
  );

export function handleImgError(e) {
  if (e.currentTarget.dataset.fallback) return;
  e.currentTarget.dataset.fallback = '1';
  e.currentTarget.src = IMG_FALLBACK;
}

const statusClass = (s) =>
  s === 'Ready to Move' ? 'gold' : '';

export default function PropertyCard({ property, delay = 0 }) {
  const p = property;
  return (
    <Link to={`/properties/${p.id}`} className="prop-card reveal-card">
      <div className="prop-media">
        <img src={p.images[0]} alt={`${p.name}, ${p.locality}`} loading="lazy" onError={handleImgError} />
        <span className={`prop-tag ${statusClass(p.status)}`}>{p.status}</span>
        <span
          className="prop-fav"
          role="button"
          aria-label="Save"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Heart />
        </span>
      </div>
      <div className="prop-body">
        <span className="prop-loc">
          <MapPin /> {p.locality}, {p.city}
        </span>
        <h3 className="prop-name">{p.name}</h3>
        <p className="prop-sub">
          {p.developer} · {p.type}
        </p>
        <div className="prop-specs">
          <span className="spec">
            <BedDouble /> {p.bhk} BHK
          </span>
          <span className="spec">
            <Bath /> {p.bath}
          </span>
          <span className="spec">
            <Maximize /> {p.area.toLocaleString('en-IN')} ft²
          </span>
        </div>
        <div className="prop-foot">
          <span className="prop-price">
            <span>Starting</span>
            {p.price}
          </span>
          <span className="prop-arrow">
            <ArrowUpRight />
          </span>
        </div>
      </div>
    </Link>
  );
}
