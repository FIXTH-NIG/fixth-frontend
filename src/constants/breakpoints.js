/**
 * Responsive Design Breakpoints
 * Used consistently across all components for media queries
 */

export const BREAKPOINTS = {
  MOBILE_SMALL: 480,
  MOBILE: 700,
  TABLET: 750,
  TABLET_LARGE: 850,
  DESKTOP_SMALL: 1024,
  DESKTOP: 1300,
};

export const mediaQueries = {
  mobile: `(max-width: ${BREAKPOINTS.MOBILE}px)`,
  tablet: `(max-width: ${BREAKPOINTS.TABLET}px)`,
  tabletLarge: `(max-width: ${BREAKPOINTS.TABLET_LARGE}px)`,
  desktop: `(min-width: ${BREAKPOINTS.DESKTOP_SMALL}px)`,
};
