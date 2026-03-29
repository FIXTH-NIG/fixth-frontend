/**
 * useIsMobile Hook
 * Returns true if screen width is below breakpoint
 *
 * Usage:
 *   const isMobile = useIsMobile(750);
 *   const isTablet = useIsMobile(1024);
 */

import { useScreenWidth } from './useScreenWidth';
import { BREAKPOINTS } from '../constants/breakpoints';

export function useIsMobile(breakpoint = BREAKPOINTS.TABLET) {
  const screenWidth = useScreenWidth();
  return screenWidth < breakpoint;
}
