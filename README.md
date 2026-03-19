# Karis Lin — Portfolio Website

Personal portfolio site built with React + Vite + TypeScript. Features a dark creative theme, scroll animations, and a typewriter hero section.

## Stack

- **React 18** + **TypeScript**
- **Vite 5**
- **Tailwind CSS v3**
- **Framer Motion** — scroll-triggered animations
- **tsparticles** — hero particle background
- **lucide-react** — icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Experience, Skills, Contact
│   └── ui/           # Badge, SectionHeader, TimelineCard, AnimatedText, ParticleBackground
├── data/
│   └── resume.ts     # All resume content (single source of truth)
├── hooks/
│   ├── useScrollSpy.ts
│   └── useTypewriter.ts
├── styles/
│   └── globals.css
└── types/
    └── index.ts
```
