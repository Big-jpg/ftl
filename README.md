# 3D Printing Filament Tier List

A richly visual guide to the strengths, compromises, and best-use scenarios for the most popular 3D printing filaments. The interface pairs tiered material groupings with detailed modal breakdowns so makers can quickly choose the right spool for the job.

## Features
- **Tier-first layout** – Each material tier occupies a dedicated row with an accent backdrop for quick scanning.
- **Interactive filament cards** – Tap any Benchy card to open a modal covering pros, cons, safety notes, and recommended use cases.
- **Curated sourcing links** – Every filament entry includes a hand-picked storefront link so you can buy immediately.
- **Responsive dark theme** – The UI leans on a soft navy gradient, subtle glassmorphism, and fluid spacing that adapts from mobile through desktop.

## Tech Stack
- [Next.js 15](https://nextjs.org/) + React 18
- [Tailwind CSS](https://tailwindcss.com/) v4 for styling primitives
- [Framer Motion](https://www.framer.com/motion/) for tasteful hover and modal animations
- [Lucide React](https://lucide.dev/) iconography

## Getting Started
```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Run the production build
npm run build
```

The app boots on [http://localhost:3000](http://localhost:3000). Any changes to `app/page.tsx`, the tier data in `data/filaments.ts`, or the supporting UI components hot-reload automatically in development.

## Data Structure
Filament metadata lives in [`data/filaments.ts`](./data/filaments.ts). Each entry provides:
- `tier`: Tier bucket (`S`, `A`, `B`, etc.)
- `material`: Primary filament name
- `alias`: Alternate/common names for quick recognition
- `pros`, `cons`, `useCases`, `safetyNotes`: Copy surfaced in the modal view
- `link`: External storefront for fast purchasing

To add a new filament, append a record to the `FILAMENTS` array and reference the appropriate tier. The UI updates automatically.

## Project Links
- Live site: _Add your deployment URL here_
- GitHub: https://github.com/Big-jpg/ftl
- LinkedIn: https://www.linkedin.com/in/rossfarrellvirtualengineer/

---

Crafted by Ross Farrell • Virtual Engineer