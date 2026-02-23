# Deployment Guide - emmanuelyupit.com

Complete step-by-step guide to deploy your personal website to production.

---

## 🎯 Pre-Deployment Checklist

### 1. Domain Registration

**Purchase Domain**: `emmanuelyupit.com`

**Recommended Registrars**:
- [Namecheap](https://www.namecheap.com) - $8-12/year
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) - At-cost pricing
- [Google Domains](https://domains.google) - $12/year

### 2. Add Resume PDFs

Create optimized PDF versions of your resumes and add them to the `/public` folder:

```bash
cd website/public
# Add these files:
# - Emmanuel_Yupit_Engineering_Manager.pdf
# - Emmanuel_Yupit_Full_Stack.pdf
# - Emmanuel_Yupit_Frontend.pdf
```

**PDF Optimization Tips**:
- Keep file size under 500KB
- Use PDF/A format for compatibility
- Include proper metadata (author, title)
- Test on mobile devices

### 3. Update GitHub Profile

Before deployment, ensure your GitHub profile is ready:

**Create Profile README**: `github.com/emmanuelpyupit/emmanuelpyupit`

```markdown
# Emmanuel Yupit

Engineering Manager & Full-Stack Engineer building reliable systems at scale.

## 🚀 What I Do
- Lead engineering teams (currently 7 engineers at Vetted Health)
- Build distributed backend systems (Node.js, TypeScript, AWS)
- Ship full-stack features (React, Next.js, PostgreSQL)

## 🛠️ Tech Stack
**Backend**: Node.js, TypeScript, Python
**Frontend**: React, Next.js, Tailwind
**Data**: PostgreSQL, Redis, AWS S3
**Infra**: AWS, Docker, GitHub Actions

## 📫 Connect
- 💼 [LinkedIn](https://linkedin.com/in/emmanuelpyupit)
- 🌐 [emmanuelyupit.com](https://emmanuelyupit.com)
- 📧 e.pyupit@gmail.com
```

**Pin 6 Repositories**:
1. Personal website (this repo)
2. Most impressive technical project
3. Open source contributions
4. Tools/utilities you've built
5. Learning projects with good documentation
6. Any viral or popular repos

---

## 🚀 Deployment Steps

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Zero configuration for Next.js
- Automatic HTTPS
- Global CDN
- Free tier includes everything you need
- Automatic deployments on git push

#### Step 1: Push to GitHub

```bash
cd website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Personal website"

# Create GitHub repository at github.com/emmanuelpyupit/personal-website

# Add remote and push
git remote add origin https://github.com/emmanuelpyupit/personal-website.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy to Vercel

1. **Sign up/Login**: Go to [vercel.com](https://vercel.com)
2. **Import Project**: Click "Add New" → "Project"
3. **Connect GitHub**: Authorize Vercel to access your repositories
4. **Select Repository**: Choose `emmanuelpyupit/personal-website`
5. **Configure Project**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `website`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
6. **Deploy**: Click "Deploy"

Wait 2-3 minutes for initial deployment.

#### Step 3: Configure Custom Domain

1. **Add Domain**:
   - Go to Project Settings → Domains
   - Add `emmanuelyupit.com`
   - Add `www.emmanuelyupit.com` (optional)

2. **Update DNS Records**:

Go to your domain registrar's DNS settings and add:

**For Namecheap/Most Registrars**:
```
Type: A
Host: @
Value: 76.76.21.21
TTL: Automatic

Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

**For Cloudflare**:
```
Type: A
Name: @
Content: 76.76.21.21
Proxy: DNS only (gray cloud)

Type: CNAME
Name: www
Content: cname.vercel-dns.com
Proxy: DNS only (gray cloud)
```

3. **Verify**: Wait 24-48 hours for DNS propagation (usually faster)

#### Step 4: Enable Analytics (Optional)

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

Commit and push - Vercel will auto-deploy.

---

### Option 2: Netlify

#### Step 1: Push to GitHub (same as Vercel)

#### Step 2: Deploy to Netlify

1. **Sign up/Login**: [netlify.com](https://netlify.com)
2. **Add New Site**: Click "Add new site" → "Import an existing project"
3. **Connect GitHub**: Authorize and select repository
4. **Configure**:
   - Base directory: `website`
   - Build command: `npm run build`
   - Publish directory: `website/.next`
5. **Deploy**

#### Step 3: Custom Domain

1. Go to Site Settings → Domain Management
2. Add custom domain: `emmanuelyupit.com`
3. Update DNS records (similar to Vercel)

---

## 🔍 Post-Deployment Tasks

### 1. SEO Setup

#### Add sitemap.xml

Create `website/app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://emmanuelyupit.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
```

#### Add robots.txt

Create `website/app/robots.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://emmanuelyupit.com/sitemap.xml',
  }
}
```

### 2. Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `emmanuelyupit.com`
3. Verify ownership (use DNS verification)
4. Submit sitemap: `https://emmanuelyupit.com/sitemap.xml`

### 3. Performance Testing

**Test Tools**:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Target Scores**:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### 4. Social Media Preview

**Test Open Graph Tags**:
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## 📊 Monitoring & Maintenance

### Weekly Tasks

- [ ] Check Google Search Console for errors
- [ ] Monitor Vercel Analytics for traffic
- [ ] Review any 404 errors
- [ ] Check site speed

### Monthly Tasks

- [ ] Update work experience if changed
- [ ] Add new projects to case studies
- [ ] Update metrics (users, ARR, etc.)
- [ ] Review and update resume PDFs
- [ ] Check for broken links

### Quarterly Tasks

- [ ] Review SEO performance
- [ ] Update dependencies (`npm update`)
- [ ] Audit accessibility
- [ ] Review and optimize images

---

## 🔒 Security Best Practices

### Environment Variables

Never commit sensitive data. Use Vercel environment variables for:

```env
# Example (if needed in future)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
EMAIL_SERVICE_API_KEY=xxxxx
```

Add in Vercel: Project Settings → Environment Variables

### HTTPS

- Vercel provides automatic HTTPS
- Ensure all external resources use HTTPS
- Enable HSTS headers (automatic on Vercel)

### Content Security Policy

Add to `next.config.ts` if needed:

```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}
```

---

## 🐛 Troubleshooting

### Domain Not Working

**Check DNS Propagation**:
```bash
dig emmanuelyupit.com
# or
nslookup emmanuelyupit.com
```

**Common Issues**:
- DNS not propagated (wait 24-48 hours)
- Wrong DNS records (verify A and CNAME)
- Cloudflare proxy enabled (should be DNS only)

### Build Failures

**Check Vercel Logs**:
1. Go to Deployments
2. Click failed deployment
3. View build logs

**Common Fixes**:
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Slow Performance

**Optimize Images**:
- Use Next.js Image component
- Compress images (TinyPNG, Squoosh)
- Use WebP format

**Reduce Bundle Size**:
```bash
# Analyze bundle
npm run build
# Check .next/analyze
```

---

## 📈 Growth Strategy

### Week 1: Launch
- [ ] Deploy website
- [ ] Update LinkedIn with website link
- [ ] Update GitHub profile
- [ ] Share on LinkedIn
- [ ] Update email signature

### Week 2-4: SEO
- [ ] Submit to Google Search Console
- [ ] Get indexed by Google
- [ ] Share on relevant communities
- [ ] Update resume with website link

### Month 2-3: Content
- [ ] Add blog section (optional)
- [ ] Write technical articles
- [ ] Share case studies on LinkedIn
- [ ] Engage with engineering communities

### Ongoing
- [ ] Keep content updated
- [ ] Monitor analytics
- [ ] Respond to opportunities
- [ ] Network and share

---

## 📞 Support

**Vercel Support**:
- Docs: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

**Next.js Support**:
- Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Discord: [nextjs.org/discord](https://nextjs.org/discord)

---

## ✅ Final Checklist

Before announcing your website:

- [ ] All pages load correctly
- [ ] Mobile responsive on all devices
- [ ] Resume PDFs downloadable
- [ ] All links work (internal and external)
- [ ] Contact information correct
- [ ] SEO meta tags present
- [ ] Performance score 90+
- [ ] Accessibility score 95+
- [ ] Domain configured correctly
- [ ] HTTPS working
- [ ] Google Search Console setup
- [ ] Analytics tracking (optional)
- [ ] LinkedIn profile updated
- [ ] GitHub profile updated
- [ ] Email signature updated

---

**Congratulations! Your professional website is live! 🎉**

Visit: [emmanuelyupit.com](https://emmanuelyupit.com)
