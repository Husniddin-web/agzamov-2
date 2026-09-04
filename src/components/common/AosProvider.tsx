'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';

export const AosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: false,
      offset: 60,
    });

    // Refresh on resize / load
    window.addEventListener('load', () => AOS.refresh());
    return () => {
      window.removeEventListener('load', () => AOS.refresh());
    };
  }, []);

  return <>{children}</>;
};
