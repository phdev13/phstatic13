import { useState, useEffect, useCallback, useRef } from 'react';

let cachedIsMobile: boolean | null = null;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(
    () => cachedIsMobile !== null ? cachedIsMobile : (typeof window !== 'undefined' ? window.innerWidth < 768 : false)
  );
  
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const checkMobile = useCallback(() => {
    const newIsMobile = window.innerWidth < 768; // md breakpoint do Tailwind
    if (newIsMobile !== cachedIsMobile) {
      cachedIsMobile = newIsMobile;
      setIsMobile(newIsMobile);
    }
  }, []);

  useEffect(() => {
    checkMobile();

    // Debounce resize events para não atualizar a cada pixel
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(checkMobile, 200);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [checkMobile]);

  return isMobile;
};
