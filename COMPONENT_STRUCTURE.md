# Component Structure

## Mobile-First React Application Structure

```
src/
├── App.jsx                    # Main application component
├── main.jsx                   # React entry point
├── index.css                  # Global styles (mobile-first Tailwind)
└── components/
    ├── Header.jsx             # Top navigation with search and categories
    ├── TopPicks.jsx           # Horizontally scrollable company cards
    ├── InvestmentNotification.jsx  # Social investment activity banner
    ├── VideoPitchCard.jsx     # Video player with pitch content
    ├── MarketWatchCard.jsx    # News article card
    ├── CompanyUpdateCard.jsx  # Startup update with images
    └── BottomNavigation.jsx   # Fixed bottom navigation bar
```

## Mobile-First Design Principles Applied

### 1. Typography
- Base font size: 16px (mobile)
- Desktop scaling: 18px (via min-width media query)
- All text uses relative units (rem/em)

### 2. Touch Targets
- All buttons: `h-11` (44px minimum)
- Touch-friendly class: `.touch-target` with `min-h-11 min-w-11`
- Search input: `h-11` (44px)
- Navigation items: `h-16` (64px) for bottom nav

### 3. Layout
- Single-column layout (flex-col by default)
- Container: `.container-mobile` with `w-full` and `max-w-full`
- No fixed widths on main containers
- Fluid padding: `px-4` on mobile, scales to `px-6` (tablet) and `px-8` (desktop)

### 4. Horizontal Scrolling
- Used for: Top Picks cards, Stories, Image galleries
- Hidden scrollbars: `.scrollbar-hide` utility
- Cards use `flex-shrink-0` to maintain width
- Fixed width cards (e.g., `w-72`) only in horizontal scroll containers

### 5. Responsive Breakpoints
```css
/* Mobile (default): 360-390px */
No media query needed

/* Tablet: 768px+ */
@media (min-width: 768px) {
  - Wider containers (max-w-2xl)
  - Increased padding (px-6)
  - Larger base font (18px)
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  - Max container width (max-w-3xl)
  - More padding (px-8)
  - Maintained single-column layout
}
```

### 6. Mobile Optimizations
- Sticky header for easy access
- Fixed bottom navigation
- Safe area insets for iPhone notches
- Viewport meta tag configured
- Touch-friendly hover states
- Optimized images (SVG icons)

### 7. Color Scheme
- Primary: `#22c55e` (green-500)
- Background: `#0f172a` (slate-900)
- Cards: `#1e293b` (slate-800)
- Text: White, gray-300, gray-400
- Accents: Teal, primary variants

## Component Details

### Header
- Sticky positioning
- Profile greeting
- Search bar (full width)
- Category filters (horizontal scroll)
- Stories/Connections (horizontal scroll)

### TopPicks
- Horizontal scrolling cards
- Fixed width cards (`w-72`) for scroll consistency
- Match percentage badges
- Save and Interested buttons

### VideoPitchCard
- Aspect ratio video player
- Play button overlay
- Mute toggle
- Action buttons (Pass, Save, Share, Interested)

### CompanyUpdateCard
- Funding progress indicator
- Image gallery (horizontal scroll)
- View Deck button
- Hot Deal badge

### BottomNavigation
- Fixed bottom position
- Large center button (add/create)
- Notification badges
- Active state indicators

## Performance Optimizations

1. **Vite** for fast HMR
2. **Tailwind CSS** purging unused styles
3. **React** component-based architecture
4. **SVG icons** (inline, no external requests)
5. **Optimized images** (gradient placeholders)
6. **Lazy loading ready** (can add React.lazy if needed)

## Accessibility

- Semantic HTML elements
- ARIA labels on icons (can be added)
- Keyboard navigation support
- Touch target sizes meet WCAG guidelines (44px)
- High contrast text (white on dark)
- Focus states on interactive elements

