'use client';

import { useEffect, useRef, useState, ReactNode, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LazySectionProps {
  children: ReactNode;
  threshold?: number;
}

export const LazySection = memo(({ children, threshold = 0.1 }: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Préchargement du contenu
          requestIdleCallback(() => {
            setIsLoaded(true);
          });
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '50px 0px', // Préchargement anticipé
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div ref={ref} className="will-change-transform">
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ 
              containIntrinsicSize: '0 500px',
              contentVisibility: 'auto'
            }}
          >
            {children}
          </motion.div>
        ) : (
          <motion.div 
            className="h-[100px] animate-pulse bg-gray-100/10 rounded-lg"
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}); 