import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.replace('#', ''));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};
