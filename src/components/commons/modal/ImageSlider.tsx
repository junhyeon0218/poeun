'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
  title: string;
}

export default function ImageSlider({ images, title }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return (
      <div className='w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center'>
        <p className='text-white/60 text-14px'>이미지가 없습니다</p>
      </div>
    );
  }

  return (
    <div className='w-full'>
      <div className='relative w-full aspect-[16/10] bg-gray-800 rounded-2xl overflow-hidden mb-6 shadow-2xl border border-white/20'>
        <Image
          src={images[currentIndex]}
          alt={`${title} - 이미지 ${currentIndex + 1}`}
          fill
          className='object-contain bg-gradient-to-br from-gray-900/50 to-gray-800/50'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
          loading='lazy'
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className='absolute left-4 top-1/2 transform -translate-y-1/2 glass hover:bg-white/20 text-white p-3 rounded-xl transition-all duration-300 group backdrop-blur-sm'
              aria-label='이전 이미지'>
              <svg
                className='w-6 h-6 group-hover:scale-110 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 glass hover:bg-white/20 text-white p-3 rounded-xl transition-all duration-300 group backdrop-blur-sm'
              aria-label='다음 이미지'>
              <svg
                className='w-6 h-6 group-hover:scale-110 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className='absolute bottom-4 right-4 glass px-4 py-2 rounded-xl text-white text-14px font-medium backdrop-blur-sm'>
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className='flex gap-3 overflow-x-auto py-2 px-2 modal-scrollbar'>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-20 h-12 rounded-xl overflow-hidden transition-all duration-300 ${
                currentIndex === index
                  ? 'opacity-100 ring-2 ring-white/50 shadow-lg scale-105'
                  : 'opacity-60 hover:opacity-80 hover:scale-105'
              }`}>
              <Image
                src={image}
                alt={`${title} - 썸네일 ${index + 1}`}
                fill
                className='object-cover'
                sizes='80px'
                loading='lazy'
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
