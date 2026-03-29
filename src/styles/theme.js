/**
 * Global Theme Configuration
 * Centralized color palette, spacing, and design tokens
 */

import { BREAKPOINTS } from '../constants/breakpoints';

export const theme = {
  colors: {
    black: 'rgba(31, 31, 31, 1)',
    grey: 'rgba(127, 127, 127, 1)',
    lightAsh: 'rgba(209, 209, 209, 1)',
    lightGrey: '#d9d9d9',
    backgroundLight: '#f1f1f1',
    blue: 'rgba(75, 111, 187, 1)',
    white: 'rgba(228, 228, 228, 1)',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
  },

  borderRadius: {
    none: '0',
    sm: '6px',
    md: '8px',
    lg: '18px',
    full: '999px',
  },

  typography: {
    fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
    sizes: {
      xs: '12px',
      sm: '13px',
      md: '14px',
      lg: '16px',
      xl: '24px',
    },
    weights: {
      normal: 400,
      medium: 500,
      semibold: 550,
      bold: 600,
    },
  },

  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },

  transitions: {
    fast: '150ms ease-in-out',
    normal: '200ms ease-in-out',
    slow: '300ms ease-in-out',
  },

  breakpoints: BREAKPOINTS,

  zIndex: {
    modal: 60,
    overlay: 59,
    dropdown: 50,
    header: 40,
    base: 1,
  },

  // CSS Variable names for styled-components
  cssVars: {
    '--black': '#1f1f1f',
    '--grey': '#7f7f7f',
    '--light-ash': '#d1d1d1',
    '--background-white': '#e4e4e4',
    '--blue': '#4b6fbb',
  },
};

export default theme;
