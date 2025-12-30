import { useEffect } from 'react';

/**
 * Custom Hook for Window Resize Events
 * Useful for responsive behavior
 */
export const useWindowSize = () => {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

/**
 * Custom Hook for Scroll Position
 * Tracks current scroll position
 */
export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = React.useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

/**
 * Custom Hook for Detecting Mobile
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth <= 640
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export default { useWindowSize, useScroll, useIsMobile };
