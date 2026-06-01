import { useState } from 'react';
import { Phone, Mail, MapPin, Check, ArrowRight, MessageCircle } from 'lucide-react';
import Reveal from '../components/Reveal';
import { InstagramIcon } from '../components/Icons';
import { properties } from '../data/properties';
import { SITE } from '../data/site';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const info = [
    { icon: <Phone />, k: 'Call', v: <a href={SITE.phoneHref}>{SITE.phone}</a> },
    { icon: <Mail />, k: 'Email', v: <a href={SITE.emailHref}>{SITE.email}</a> },
    {
      icon: <InstagramIcon />,
      k: 'Instagram',
      v: (
        <a href={SITE.instagramHref} target="_blank" rel="noreferrer">
          {SITE.instagram}
        </a>
      ),
    },
    {
      icon: <MapPin />,
      k: 'Office',
      v: <span>Pan-India · Head office, Gurugram</span>,
    },
  ];

  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">Get in Touch</span>
          <h1>Let’s talk about home.</h1>
          <p>
            Tell us what you’re looking for — or simply where you’re stuck — and
            an advisor will come back to you, usually within a day.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <Reveal className="contact-info">
              <span className="eyebrow">Reach us</span>
              <h2 className="section-title" style={{ marginBottom: '1.6rem' }}>
                We’re a call away.
              </h2>
              {info.map((it) => (
                <div className="item" key={it.k}>
                  <div className="ic">{it.icon}</div>
                  <div>
                    <div className="k">{it.k}</div>
                    <div className="v">{it.v}</div>
                  </div>
                </div>
              ))}
              <a
                className="btn btn-outline"
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: '1.8rem' }}
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </Reveal>

            <Reveal className="contact-form" delay={120} as="div">
              {sent && (
                <div className="form-success">
                  <Check /> Thank you, {form.name || 'there'} — your enquiry is in.
                  We’ll be in touch shortly.
                </div>
              )}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Full name</label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={set('name')}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={set('phone')}
                      placeholder="+91"
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="you@email.com"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="interest">Property of interest</label>
                  <select id="interest" value={form.interest} onChange={set('interest')}>
                    <option value="">Not sure yet · general enquiry</option>
                    {properties.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} — {p.locality}, {p.city}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={set('message')}
                    placeholder="A little about what you’re looking for — location, budget, timeline…"
                  />
                </div>

                <button type="submit" className="btn btn-gold">
                  Send Enquiry <ArrowRight size={16} />
                </button>
                <p className="form-note">
                  We respect your privacy. Your details are used only to respond
                  to this enquiry.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
