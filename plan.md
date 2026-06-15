# Taj Hospital & Paramedical Science — Website Plan

## 1. About the client (from Google listing)
- **Name:** Taj Hospital & Paramedical Science
- **Type:** Hospital + Paramedical education institute
- **Rating:** 4.7 ★ (26 Google reviews)
- **Address:** Bettiah to Areraj Highway, Jagdishpur, Bettiah, Bihar 845459
- **Phone:** 099314 52682
- **Hours:** Open 24 hours (24×7)
- **Mission (from listing):** Impart quality education to give students a competitive
  advantage, with a high success rate and opportunities in private & government sectors.

## 2. Goals of the site
1. Establish trust and a professional online presence for the hospital.
2. Make it dead-simple to **call** or **find** the hospital (it's 24×7 emergency-capable).
3. Showcase **medical services / departments**.
4. Promote the **paramedical courses** (a real revenue/admissions driver).
5. Mobile-first — most local visitors will be on phones.

## 3. Design direction
- **Theme:** White / clean / clinical (as requested).
  - Background: pure white `#ffffff` + soft off-white sections `#f7f9fb`.
  - Primary accent: medical teal/blue `#0e7c7b` → `#1192a8` (calm, trustworthy, "health").
  - Secondary accent: a warm emergency red `#e63946` for the emergency/call CTAs only.
  - Text: near-black `#1a2230`, muted `#5b6675`.
- Generous whitespace, rounded cards, soft shadows, subtle hover lifts.
- Typography: system / Google font (Poppins for headings, Inter for body) via CDN.
- Iconography: inline SVG (no external icon dependency).
- Fully responsive (mobile, tablet, desktop). Hamburger nav on mobile.
- Accessibility: semantic HTML, alt text, color contrast, focus states.

## 4. Tech choices
- **Static site** — plain HTML + CSS + vanilla JS. No build step, trivial to host
  (GitHub Pages / Netlify / any shared hosting). Matches the simple-static pattern.
- Single-page with smooth-scroll anchored sections + sticky nav.
- No external images required (uses CSS gradients + SVG); easy to drop real photos in later.

## 5. File structure
```
~/taj-hospital/
├── plan.md          (this file)
├── index.html       (all sections)
├── styles.css       (theme + layout + responsive)
├── script.js        (mobile nav, smooth scroll, scroll reveal, form handler)
└── assets/          (logo svg / future real photos)
```

## 6. Page sections (single page, anchored)
1. **Top bar** — phone + address + "Open 24 Hours" badge (thin strip).
2. **Header / Nav** — logo, links (Home, About, Services, Courses, Why Us, Contact),
   prominent "Call Now" button. Sticky. Hamburger on mobile.
3. **Hero** — headline ("Compassionate Care, Available 24×7"), subtext, two CTAs
   (Call Now / Our Services), trust chips (4.7★ · 26 reviews · 24×7 · Jagdishpur).
4. **Quick info strip** — 4 cards: 24×7 Emergency · Experienced Doctors ·
   Diagnostics & Lab · Paramedical Training.
5. **About** — who we are, mission text, a few stat counters (years, patients,
   students, rating).
6. **Services / Departments** — grid of cards: Emergency & Trauma, General Medicine,
   OPD, Pathology & Lab, Pharmacy, Radiology/Diagnostics, Maternity/Child care,
   Ambulance 24×7.
7. **Paramedical Science (Courses)** — grid of course cards: GNM, ANM, DMLT (Lab Tech),
   DPharma, X-Ray/Radiology Technician, OT Technician, etc. + "Admissions Open" CTA.
8. **Why Choose Us** — 4–6 feature points (24×7, affordable, qualified staff,
   modern equipment, govt+private placement, high success rate).
9. **Contact** — address, phone, hours, embedded Google Map (iframe by place name),
   + a simple enquiry form (name, phone, message → mailto/no backend, front-end only).
10. **Footer** — quick links, contact, copyright, "designed for Taj Hospital".
- **Floating action buttons:** sticky "Call" (and WhatsApp) button bottom-right on mobile.

## 7. Content notes
- All copy written fresh, healthcare-appropriate, India/Bihar context.
- Phone wired as `tel:09931452682` everywhere.
- Map iframe uses a Google Maps search embed for "Taj Hospital Jagdishpur Bettiah".
- Placeholder note: real photos/doctor names/exact course list to be supplied by client;
  marked with `<!-- TODO: client to confirm -->` where assumptions are made.

## 8. Build order
1. `index.html` skeleton + all section markup.
2. `styles.css` — variables, base, nav, hero, sections, cards, responsive, animations.
3. `script.js` — mobile menu toggle, smooth scroll, scroll-reveal, stat counters, form.
4. Self-review in browser (open file) + responsive check.
5. Note follow-ups for client (real photos, course confirmation, social links).

## 9. Future / optional (not in v1)
- Real photo gallery, doctor profiles, appointment booking backend, blog/health tips,
  multi-language (Hindi), online course application form with backend.
```
