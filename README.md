# Graventa Constructions (Pvt) Ltd - Website

A modern, static website built with Next.js for Graventa Constructions, a leading construction company in Sri Lanka.

## 🏗️ Features

- **Modern Design**: Dark theme with gold accents, geometric patterns, and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Static Export**: Optimized for static hosting (no server required)
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Ready**: Meta tags and Open Graph support

## 📄 Pages

- **Home**: Hero section, stats, about preview, services overview, projects showcase, team members
- **About Us**: Company history, mission & vision, values, timeline, team
- **Services**: Detailed service offerings, process workflow, industries served
- **Projects**: Portfolio gallery with filtering by category
- **Contact**: Contact form, office information, map placeholder

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion + CSS animations
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This will create a static export in the `out` directory that can be deployed to any static hosting service.

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── About.tsx
│       ├── CTA.tsx
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Projects.tsx
│       ├── Services.tsx
│       ├── Stats.tsx
│       └── Team.tsx
├── public/
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Design Features

- **Color Scheme**: Dark backgrounds (#0d0d0d, #1a1a1a) with gold accents (#d4a012)
- **Typography**: Playfair Display for headings, DM Sans for body text
- **Animations**: Fade-in, slide-up, floating effects, hover transitions
- **Components**: Glass morphism effects, geometric patterns, gradient text

## 🌐 Deployment

The site is configured for static export and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📝 Customization

### Update Company Information

1. Edit contact details in `src/components/Footer.tsx` and `src/app/contact/page.tsx`
2. Update team members in `src/components/Team.tsx`
3. Modify projects in `src/components/Projects.tsx` and `src/app/projects/page.tsx`
4. Adjust services in `src/components/Services.tsx` and `src/app/services/page.tsx`

### Update Branding

1. Change colors in `tailwind.config.ts`
2. Update fonts in `src/app/globals.css`
3. Modify logo in `src/components/Header.tsx` and `src/components/Footer.tsx`

## 📄 License

© 2024 Graventa Constructions (Pvt) Ltd. All Rights Reserved.

