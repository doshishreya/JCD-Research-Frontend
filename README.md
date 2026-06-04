# JCD Research — Peptide Testing Landing Page

Marketing and product-preview site for **JCD Research** (`jcdresearch.com`), aligned with the internal design document: peptide-only testing, LightLabs-inspired UX, and an orders-dashboard-first flow.

## Design direction (from product doc)

- Mimic [lightlabs.com](https://lightlabs.com) for peptides; clinical/light aesthetic (AvioMD cues)
- **Navigation:** Testing · Orders · About · Account
- **Tests:** Purity & Quantity (HPLC), Sterility (USP 71), Endotoxins
- **Order flow:** Testing menu → sign-in → order fields → ship to 15751 Graham St → barcode scan → results
- **Instrumentation:** 6545 Q-TOF, 1260 Infinity HPLC
- **Orders dashboard:** Overview + nested analyses with COA PDFs (preview UI)
- **Accounts:** Researchers only (sign-in placeholder)

## Stack

- Next.js 15 (App Router)
- TypeScript (TSX)
- Tailwind CSS v4
- Google Fonts: Poppins, Noto Sans

## Sections

1. Hero — video, morph, peptide-focused CTAs
2. About — peptide-only positioning
3. Testing menu — three peptide panels
4. Order flow — six-step path + required fields
5. Instrumentation — MS + HPLC
6. Orders dashboard — interactive preview
7. Account — researcher sign-in placeholder
8. CTA + Footer

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Notes

- Frontend only — no backend, auth, or live orders API
- Loader and hero scroll morph unchanged unless requested
- Contact: `admin@jcdresearch.com`
