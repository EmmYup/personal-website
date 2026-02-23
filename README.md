# Emmanuel Yupit - Personal Website

Professional portfolio website for Emmanuel Yupit, Engineering Manager & Full-Stack Engineer.

**Live Site**: [emmanuelyupit.com](https://emmanuelyupit.com) _(to be deployed)_

---

## 🎯 Overview

This is a modern, SEO-optimized personal website built with Next.js 14, designed to showcase professional experience, technical skills, and attract opportunities for Engineering Manager, Tech Lead, Staff Engineer, and Founding Engineer roles.

### Key Features

- ✨ **Modern Design**: Clean, professional UI with smooth animations using Framer Motion
- 🎨 **Custom Design System**: Tailwind CSS v4 with custom color palette and typography
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance Optimized**: Fast loading times, optimized images, and code splitting
- 🔍 **SEO Optimized**: Comprehensive meta tags, semantic HTML, and structured data
- ♿ **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- 🌙 **Dark Mode Support**: Automatic theme switching based on system preferences

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/emmanuelpyupit/personal-website.git
cd personal-website/website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

---

## 📁 Project Structure

```
website/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Homepage
│   ├── work/                # Work experience & case studies
│   ├── resume/              # Resume download page
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout with navigation
│   └── globals.css          # Global styles & design tokens
├── components/              # React components
│   ├── Navigation.tsx       # Main navigation
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Homepage hero section
│   ├── ValueProps.tsx       # Value propositions
│   ├── ImpactMetrics.tsx    # Animated metrics
│   ├── FeaturedWork.tsx     # Featured projects
│   ├── TechStack.tsx        # Technology stack
│   ├── CTA.tsx              # Call-to-action section
│   ├── WorkExperience.tsx   # Full experience timeline
│   ├── CaseStudies.tsx      # Detailed case studies
│   ├── ResumeSelector.tsx   # Resume download options
│   ├── AboutContent.tsx     # About page content
│   └── ContactForm.tsx      # Contact information
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
└── README.md               # This file
```

---

## 🎨 Design System

### Color Palette

```css
--primary: #0066ff /* Electric Blue - CTAs, links */ --primary-dark: #0052cc
  /* Darker blue for hovers */ --accent: #00d9ff /* Cyan - Accents */
  --success: #00c853 /* Green - Metrics, success states */ --foreground: #0a1628
  /* Dark navy - Text */ --background: #fafbfc /* Off-white - Background */
  --muted: #64748b /* Gray - Secondary text */ --border: #e2e8f0
  /* Light gray - Borders */;
```

### Typography

- **Display Font**: Syne (headings, bold statements)
- **Body Font**: Geist Sans (readable, modern)
- **Mono Font**: Geist Mono (code snippets)

### Spacing & Layout

- Max content width: 1280px (7xl)
- Section padding: 80px vertical (py-20)
- Component spacing: 32px gaps (gap-8)

---

## 📄 Pages Overview

### Homepage (`/`)

- Hero section with value proposition
- 3 key value propositions
- Animated impact metrics (150k users, $20M ARR, etc.)
- Featured work highlights
- Tech stack showcase
- CTA section

### Work Experience (`/work`)

- 4 detailed case studies with results
- Full experience timeline (2016-present)
- Company, role, and achievement details

### Resume (`/resume`)

- 3 tailored resume versions:
  - Engineering Manager
  - Full-Stack Engineer
  - Frontend Engineer
- Download functionality (PDFs to be added)

### About (`/about`)

- Personal story and background
- Technical foundation
- Leadership approach
- Current focus areas
- Education & certifications

### Contact (`/contact`)

- Contact information (email, LinkedIn, GitHub)
- Availability status
- Role preferences

---

## 🔧 Tech Stack

### Core

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Development

- **Linting**: ESLint
- **Type Checking**: TypeScript
- **Package Manager**: npm

### Deployment (Recommended)

- **Hosting**: Vercel
- **Domain**: emmanuelyupit.com
- **Analytics**: Vercel Analytics (optional)

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Connect Repository**

   ```bash
   # Push to GitHub
   git remote add origin https://github.com/emmanuelpyupit/personal-website.git
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Configure Custom Domain**
   - In Vercel project settings → Domains
   - Add `emmanuelyupit.com`
   - Update DNS records at your domain registrar

### Environment Variables

No environment variables required for basic deployment. Optional:

```env
# Optional: Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_id_here
```

---

## 📝 Content Updates

### Updating Resume PDFs

1. Create optimized PDF versions of your resumes
2. Place them in `/public` folder:
   ```
   public/
   ├── Emmanuel_Yupit_Engineering_Manager.pdf
   ├── Emmanuel_Yupit_Full_Stack.pdf
   └── Emmanuel_Yupit_Frontend.pdf
   ```
3. Update filenames in `components/ResumeSelector.tsx` if needed

### Updating Work Experience

Edit `components/WorkExperience.tsx` and `components/CaseStudies.tsx` to add new roles or projects.

### Updating Metrics

Edit the `metrics` array in `components/ImpactMetrics.tsx`:

```typescript
const metrics = [
  { value: 150000, suffix: '+', label: 'Active Users Served', duration: 2000 },
  // Add more metrics...
];
```

---

## 🎯 SEO Optimization

### Meta Tags

- Comprehensive Open Graph tags
- Twitter Card support
- Proper title and description for each page

### Performance

- Automatic image optimization
- Font optimization with `next/font`
- Code splitting and lazy loading
- Minimal JavaScript bundle

### Best Practices

- Semantic HTML
- Proper heading hierarchy
- Alt text for images
- Accessible navigation

---

## 🔍 SEO Checklist

- [x] Unique title and meta description per page
- [x] Open Graph tags for social sharing
- [x] Semantic HTML structure
- [x] Mobile-responsive design
- [x] Fast loading times
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Submit to Google Search Console
- [ ] Add structured data (JSON-LD)

---

## 📊 Analytics (Optional)

### Vercel Analytics

Add to `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## 🐛 Troubleshooting

### Build Errors

**TypeScript errors about missing modules:**

- These are expected during development
- Run `npm run build` to verify production build works

**Tailwind classes not working:**

- Clear `.next` folder: `rm -rf .next`
- Restart dev server: `npm run dev`

**Font not loading:**

- Ensure Google Fonts API is accessible
- Check network tab for font loading errors

---

## 🤝 Contributing

This is a personal website, but suggestions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

© 2024 Emmanuel Yupit. All rights reserved.

---

## 📞 Contact

**Emmanuel Yupit**

- Email: e.pyupit@gmail.com
- LinkedIn: [linkedin.com/in/emmanuelpyupit](https://linkedin.com/in/emmanuelpyupit)
- GitHub: [github.com/emmanuelpyupit](https://github.com/emmanuelpyupit)

---

## 🎓 Credits

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)
- Icons by [Lucide](https://lucide.dev)
- Fonts by [Vercel](https://vercel.com/font)
