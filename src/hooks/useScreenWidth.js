/**
 * useScreenWidth Hook
 * Returns current window width and updates on resize
 *
 * Usage:
 *   const width = useScreenWidth();
 *   const isMobile = width < 750;
 */

import { useState, useEffect } from 'react';

export function useScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
