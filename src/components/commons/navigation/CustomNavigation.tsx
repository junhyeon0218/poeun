'use client';

import { useEffect, useState } from 'react';

type CustomNavigationProps = {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
};

export default function CustomNavigation({ totalSlides, currentSlide, onSlideChange }: CustomNavigationProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div
      className={`fixed z-50 ${isMobile ? 'bottom-[24px] left-1/2 transform -translate-x-1/2' : 'right-[32px] top-[calc(50%+30px)] transform -translate-y-1/2'}`}>
      <div className={`glass rounded-[8px] ${isMobile ? 'w-[200px] h-[22px]' : 'w-[36px] h-[200px]'}`}>
        <div className={`flex ${isMobile ? 'flex-row' : 'flex-col'} h-full w-full`}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSlideChange(index)}
              className={`flex-1 transition-all duration-300 ${
                currentSlide === index ? 'bg-white/20' : 'bg-transparent hover:bg-white/10'
              } ${
                isMobile
                  ? index === 0
                    ? 'rounded-l-[8px]'
                    : index === totalSlides - 1
                      ? 'rounded-r-[8px]'
                      : ''
                  : index === 0
                    ? 'rounded-t-[8px]'
                    : index === totalSlides - 1
                      ? 'rounded-b-[8px]'
                      : ''
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
