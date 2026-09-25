# Prathmesh Tangade — Portfolio

A single-page, animation-driven portfolio built with React, Three.js and GSAP. The 3D scene sits fixed behind the page, reacts to scroll and pointer position, and repositions itself so it never fights with the content.

## Stack

- **React 19 + TypeScript + Vite**
- **three.js** via `@react-three/fiber` and `@react-three/drei` for the 3D scene
- **GSAP + ScrollTrigger** for scroll-driven reveals
- **Lenis** for smooth scrolling, synced with GSAP's ticker

## Structure

- `src/components/canvas/` — the WebGL scene (distorted blob, particle field, camera rig)
- `src/components/sections/` — page sections (Hero, About, Skills, Experience, Projects, Contact)
- `src/data/resume.ts` — all copy/content, sourced from the resume
- `src/lib/scrollState.ts` — a mutable, rAF-friendly scroll/pointer state shared with the 3D scene (avoids re-rendering React on every scroll tick)
- `src/hooks/` — `useLenis` (smooth scroll + GSAP sync), `useScrollReveal` (section reveal animations), `usePointerTracking`

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run lint     # oxlint
```
