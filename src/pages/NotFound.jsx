import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="eyebrow center" style={{ justifyContent: 'center' }}>
          Page not found
        </span>
        <h1>404</h1>
        <p className="lead" style={{ margin: '0 auto 2rem', maxWidth: '44ch' }}>
          The page you’re looking for has moved, sold, or never existed. Let’s
          get you back to firmer ground.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link to="/" className="btn btn-gold">
            <Home size={16} /> Back Home
          </Link>
          <Link to="/properties" className="btn btn-outline">
            <ArrowLeft size={16} /> Browse Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
