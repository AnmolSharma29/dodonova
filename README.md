# Dodonova · Real Estate

A multi-page marketing & listings website for **Dodonova Real Estate**, a curated property house with landmark residences across five Indian cities. Built as a fast, hand-crafted single-page React application with a refined cream-and-charcoal, gold-accented aesthetic.

---

## ✨ Highlights

- **React 19.2.6** with **React Router 7** (Home, Properties, Property Detail, About, Contact, 404)
- **Vite 8** build tooling — instant dev server, optimised production bundle
- **10 real, country-spanning listings** (Mumbai, Gurugram, Hyderabad, Bangalore, Chennai) with filtering by city & status, sorting by price, and individual detail pages
- Bespoke **custom CSS design system** — cream + dark-grey palette, gold accents drawn from the brand mark
- A three-face **serif/Google-Fonts** type system: *Playfair Display* (display), *EB Garamond* (body), *Jost* (labels)
- Scroll-reveal animations (IntersectionObserver — no animation dependency), sticky enquiry form, responsive mobile nav
- Working (front-end) enquiry forms with success states on the detail and contact pages

---

## 🚀 Getting started

You'll need **Node.js 18+** (built and tested on Node 22).

```bash
# 1. install dependencies
npm install

# 2. start the dev server (http://localhost:5173)
npm run dev

# 3. build for production (outputs to /dist)
npm run build

# 4. preview the production build locally (http://localhost:4173)
npm run preview
```

---

## 🗂 Project structure

```
dodonova-real-estate/
├─ index.html              # entry HTML + Google Fonts links
├─ vite.config.js
├─ public/
│  └─ logo.png             # brand mark (used in nav + footer)
└─ src/
   ├─ main.jsx             # app bootstrap (Router + global styles)
   ├─ App.jsx              # routes
   ├─ styles/global.css    # the full design system
   ├─ data/
   │  ├─ site.js           # brand + contact details (single source of truth)
   │  └─ properties.js     # the 10 listings + helpers
   ├─ components/          # Navbar, Footer, PropertyCard, Reveal, Icons, ScrollToTop
   └─ pages/               # Home, Properties, PropertyDetail, About, Contact, NotFound
```

---

## 📇 Contact details

These live in one place — **`src/data/site.js`** — and flow through the nav, footer, contact page and every enquiry form:

- **Phone:** +91 9711040072
- **Email:** contact@dodonova.in
- **Instagram:** [instagram.com/dodonova.in](https://www.instagram.com/dodonova.in)

Edit that file to update them everywhere at once.

---

## 🏙 The listings

Properties live in **`src/data/properties.js`**. Each entry references a real project, locality, configuration and indicative price band surfaced on 99acres (Jun 2026); the descriptive copy is original editorial writing. To add or change a listing, copy an existing object in the `properties` array and edit its fields — the cards, filters and detail pages update automatically.

## 🖼 Imagery

Photography uses free [Unsplash](https://unsplash.com) URLs via the `u()` helper at the top of `properties.js` (and a couple of `*_IMG` constants in the page files). Swap those URLs for your own photography when you have it — a built-in SVG fallback means a missing image never shows a broken-image icon.

---

## 🛠 Tech notes

- **No backend.** Enquiry forms validate and show a success message client-side; wire the submit handlers in `Contact.jsx` / `PropertyDetail.jsx` to your CRM or an email service to make them live.
- The brand mark sits on a light background, so the navbar uses `mix-blend-mode` to sit cleanly over imagery and switches to a solid cream bar on scroll.
- All dependencies are pinned to current latest versions at time of build.
