# Swarn App - Mobile-First Startup Investing Platform

A modern, mobile-first web application for startup investing and venture capital discovery, built with React and Tailwind CSS.

## 🎯 Design Philosophy

- **Mobile-First**: Designed for 360-390px screens by default
- **Single-Column Layout**: Optimized for vertical scrolling
- **Touch-Friendly**: All interactive elements are 44px+ (minimum touch target)
- **Large, Readable Fonts**: Base font size 16px+ for accessibility
- **No Fixed Widths**: Fluid, responsive design
- **Performance Optimized**: Lightweight and fast loading

## 🚀 Tech Stack

- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **PostCSS** - CSS processing

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📱 Features

### Components

- **Header**: Greeting, profile, search bar, category filters, and stories
- **Top Picks**: Curated company recommendations with match percentages
- **Investment Notifications**: Social investment activity
- **Video Pitch Cards**: Video content with play controls
- **Market Watch**: Industry news and trends
- **Company Updates**: Startup updates with funding progress
- **Bottom Navigation**: Fixed navigation bar with notifications

### Mobile-First Design Principles

1. **Base Styles**: Default to mobile (360-390px)
2. **Media Queries**: Desktop styles added via `min-width` only
3. **Touch Targets**: Minimum 44px height/width for all interactive elements
4. **Typography**: Base font size 16px, scaling to 18px on desktop
5. **Layout**: Single-column, no fixed widths, fluid containers
6. **Navigation**: Mobile-optimized bottom navigation, no desktop nav bar

## 🎨 Color Palette

- **Primary Green**: `#22c55e` (green-500)
- **Dark Background**: `#0f172a` (slate-900)
- **Card Background**: `#1e293b` (slate-800)
- **Teal Accent**: `#14b8a6`

## 📐 Responsive Breakpoints

- **Mobile**: 360-390px (default, no media query needed)
- **Tablet**: 768px+ (wider containers, increased padding)
- **Desktop**: 1024px+ (max-width container, maintained single column)

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme.

### Spacing
All spacing uses Tailwind's default scale. Touch targets use `min-h-11` (44px).

### Typography
Base font size is 16px, defined in `tailwind.config.js`. Desktop scales to 18px.

## 📱 Mobile Optimization

- Viewport meta tag configured for mobile devices
- Safe area insets for iPhone notches
- Horizontal scrolling with hidden scrollbars
- Fixed bottom navigation
- Sticky header for easy access to search

## 🎯 Performance

- Vite for fast HMR and optimized builds
- Tailwind CSS purging unused styles
- Optimized React component structure
- Minimal JavaScript bundle

## 📄 License

MIT

