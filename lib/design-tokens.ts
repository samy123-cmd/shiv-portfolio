/**
 * Design Tokens
 * Centralized design system values for typography, spacing, colors, and animations
 */

// Typography Scale
export const typography = {
  display: {
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  },
  h1: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    lineHeight: '1.2',
    letterSpacing: '-0.01em',
  },
  h2: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    lineHeight: '1.3',
    letterSpacing: '-0.01em',
  },
  h3: {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    lineHeight: '1.4',
    letterSpacing: '0',
  },
  body: {
    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
    lineHeight: '1.6',
    letterSpacing: '0',
  },
  caption: {
    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
    lineHeight: '1.5',
    letterSpacing: '0.01em',
  },
  small: {
    fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)',
    lineHeight: '1.4',
    letterSpacing: '0.02em',
  },
};

// Spacing System (4px base unit)
export const spacing = {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  '2xl': '4rem',   // 64px
  '3xl': '6rem',   // 96px
  '4xl': '8rem',   // 128px
  '5xl': '12rem',  // 192px
};

// Animation Timings
export const animation = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '800ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    elegant: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
};

// Colors
export const colors = {
  charcoal: '#2B2B2B',
  softBlack: '#1A1A1A',
  ivory: '#FAFAF8',
  mutedGrey: '#E5E5E5',
  deepGold: '#D4AF37',
  // Supporting neutrals
  grey900: '#1F1F1F',
  grey800: '#2D2D2D',
  grey700: '#3F3F3F',
  grey600: '#6B6B6B',
  grey500: '#8E8E8E',
  grey400: '#B8B8B8',
  grey300: '#D1D1D1',
  grey200: '#E8E8E8',
  grey100: '#F5F5F5',
};

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Grid
export const grid = {
  maxWidth: '1280px',
  gutter: {
    mobile: '1rem',
    tablet: '2rem',
    desktop: '3rem',
  },
  columns: 12,
};

// Elevation (subtle shadows)
export const elevation = {
  low: '0 2px 8px rgba(0, 0, 0, 0.08)',
  mid: '0 4px 16px rgba(0, 0, 0, 0.12)',
  high: '0 8px 32px rgba(0, 0, 0, 0.16)',
};
