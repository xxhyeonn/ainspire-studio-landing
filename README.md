# Ainspire Studio Landing Page

A premium landing page built with Next.js 16, Three.js, GSAP animations, and a deep violet glassmorphism design.

## Features

- 🎨 **Deep Violet Theme** - Premium dark theme with purple accent colors
- ✨ **3D Network Background** - Interactive Three.js particle network with mouse tracking
- 🚀 **Smooth Animations** - GSAP-powered scroll and entrance animations
- 🔮 **Glassmorphism UI** - Elegant glass card components with geometric cuts
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🎭 **Smooth Scrolling** - Lenis smooth scroll integration

## Sections

- Hero with animated 3D network background
- Philosophy - Core values with animated cards
- Features - Interactive UX demonstrations
- CTA - Call to action with parallax effects
- Footer

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: GSAP with ScrollTrigger
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & design system
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── layout/          # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── SmoothScrollLayout.tsx
│   ├── sections/        # Page sections
│   │   ├── Hero.tsx
│   │   ├── Philosophy.tsx
│   │   ├── Features.tsx
│   │   └── CTA.tsx
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   └── GlassCard.tsx
│   └── three/           # Three.js components
│       └── NetworkBackground.tsx
```

## License

MIT
