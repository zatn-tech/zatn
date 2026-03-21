# Zatn

Marketing site for Zatn, built with [Next.js](https://nextjs.org/) (App Router), Tailwind CSS, Framer Motion, and React Three Fiber.

## Scripts

- **`npm run dev`** — development server at [http://localhost:3000](http://localhost:3000) (uses **webpack**; helps `@react-three/fiber` resolve React correctly). The section divider under the hero is **CSS/motion only** so R3F is loaded once (in the hero).
- **`npm run build`** — production build (output in `.next`, webpack)
- **`npm start`** — run the production server (after `npm run build`)

## Stack

- **React 19** + **Next.js 16**
- **@react-three/fiber v9** + **@react-three/drei v10** (v8 targeted React 18 internals; with Next’s bundling that led to `ReactCurrentOwner` runtime errors — v9 is built for React 19)
- Monochrome UI (Tailwind)
- Framer Motion for scroll / hero motion
