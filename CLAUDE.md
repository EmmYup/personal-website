# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js)
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js 16 personal portfolio site** (App Router) for Emmanuel Yupit.

### Route → Component mapping

| Route | Page file | Key components |
|-------|-----------|----------------|
| `/` | `app/page.tsx` | `Hero`, `ValueProps`, `ImpactMetrics`, `FeaturedWork`, `TechStack`, `CTA` |
| `/work` | `app/work/page.tsx` | `CaseStudies`, `WorkExperience` |
| `/resume` | `app/resume/page.tsx` | `ResumeSelector` |
| `/about` | `app/about/page.tsx` | `AboutContent` |
| `/contact` | `app/contact/page.tsx` | `ContactForm` |

All pages are server components. Interactive components use `'use client'` and animate with **framer-motion**.

### Key conventions

- **Path alias**: `@/` maps to the project root (`./`). Components live in `components/`, utilities in `lib/`.
- **Styling**: Tailwind CSS v4 with CSS custom properties defined in `app/globals.css`. Design tokens (`--primary`, `--accent`, `--muted`, etc.) are available as Tailwind color utilities (`text-primary`, `bg-accent`, etc.) via `@theme inline`.
- **Fonts**: Geist Sans (`--font-geist-sans`), Geist Mono (`--font-geist-mono`), and Syne (`--font-syne`) loaded via `next/font/google`. Apply Syne with `font-[family-name:var(--font-syne)]`.
- **`cn()` utility**: `lib/utils.ts` exports `cn()` (clsx + tailwind-merge) for conditional class names.
- **Resume PDFs**: Stored in `public/` and served as static assets. `ResumeSelector` links to them via `href={`/${filename}`}` with `download` attribute.

### React Compiler

`reactCompiler: true` is enabled in `next.config.ts`. Avoid manual `useMemo`/`useCallback` unless profiling shows it's needed — the compiler handles memoization automatically.
