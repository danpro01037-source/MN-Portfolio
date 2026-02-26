'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect if component has mounted (client-side)
 * Useful for preventing hydration mismatches with client-only features
 * 
 * @returns {boolean} - true if component has mounted on client
 * 
 * @example
 * const mounted = useMounted();
 * if (!mounted) return null; // Prevent SSR rendering
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

