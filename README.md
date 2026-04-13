# Venkateshwar D R — Portfolio

A high-performance, minimalist developer portfolio built with React, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS (Dark/Light mode via `class` strategy)
- **State**: Zustand (theme toggling)
- **SEO**: React Helmet Async (Open Graph tags for LinkedIn)
- **Routing**: React Router v6 with lazy-loaded routes
- **Build**: Vite

## Project Structure

```
src/
├── components/     # Reusable UI (Navbar, SEOHead, ThemeToggle)
├── pages/          # Route-level pages (Home, Slideshow)
├── sections/       # Page sections (Hero, Experience, Skills, Footer)
├── store/          # Zustand stores
├── App.tsx         # Root with routing + providers
└── main.tsx        # Entry point

slideshow/          # Slidev presentation (separate Vite app)
├── slides.md       # Presentation content
└── package.json    # Slidev dependencies

public/
└── Venkateshwar_Resume.pdf  # Resume download (replace with actual PDF)
```

## Slidev Presentation

```bash
cd slideshow
npm install
npm run dev
```

## Resume

Replace `public/Venkateshwar_Resume.pdf` with the actual resume file.
