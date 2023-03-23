import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

function useMediaMatches(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
}

export const useMediaQuery = () => {
  const { devices, breakpoints } = useTheme();
  const isMobile = useMediaMatches(
    `(min-width: 0px) and (max-width: ${breakpoints.tablet - 1}px)`,
  );

  const isTablet = useMediaMatches(
    `${devices.tablet} and (max-width: ${breakpoints.notebook - 1}px)`,
  );

  const isNotebook = useMediaMatches(
    `${devices.notebook} and (max-width: ${breakpoints.desktop - 1}px)`,
  );

  const isDesktop = useMediaMatches(devices.desktop);

  return {
    isMobile,
    isTablet,
    isNotebook,
    isDesktop,
  };
};

export default useMediaQuery;
