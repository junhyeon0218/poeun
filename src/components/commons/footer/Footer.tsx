'use client';

import { useState } from 'react';

type FooterProps = { compact?: boolean };

export default function Footer({ compact = false }: FooterProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = async () => {
    setIsDownloading(true);
    try {
      alert('이력서 다운로드 준비 중입니다. 곧 업데이트될 예정입니다.');
    } catch (_error) {
    } finally {
      setIsDownloading(false);
    }
  };

  const scrollToProjects = () => {
    const event = new CustomEvent('slideTo', { detail: { index: 1 } });
    window.dispatchEvent(event);
  };

  return (
    <section
      id='footer'
      className={
        compact
          ? 'min-h-0 flex items-center justify-center p-0'
          : 'h-screen flex items-center justify-center p-8 glass-scrollbar'
      }>
      <div className='max-w-[1200px] mx-auto w-full px-6'>
        <div className='text-center'>
          <div className='mb-12'>
            <h2 className='text-[24px] md:text-[32px] font-bold text-white mb-4'>함께 일하고 싶은 개발자</h2>
            <p className='text-[16px] text-white/70 mb-8 max-w-2xl mx-auto'>
              사용자 경험을 최우선으로 하는 프론트엔드 개발자입니다.
              <br />
              새로운 도전과 성장을 위해 항상 노력하고 있습니다.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
            <button
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className='glass px-8 py-4 rounded-2xl text-[16px] font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2'>
              {isDownloading ? (
                <>
                  <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                  다운로드 중...
                </>
              ) : (
                <>
                  <span>📄</span>
                  이력서 다운로드
                </>
              )}
            </button>

            <button
              onClick={scrollToProjects}
              className='glass px-8 py-4 rounded-2xl text-[16px] font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2'>
              <span>💻</span>
              프로젝트 보기
            </button>
          </div>

          <div className='mb-8'>
            <h3 className='text-[18px] font-semibold text-white mb-4'>연락처</h3>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center text-[14px] text-white/70'>
              <a
                href='mailto:junhyeon0218@gmail.com'
                className='hover:text-white transition-colors flex items-center gap-2'>
                <span>📧</span>
                junhyeon0218@gmail.com
              </a>
              <a href='tel:+821034111327' className='hover:text-white transition-colors flex items-center gap-2'>
                <span>📱</span>
                +82 10-3411-1327
              </a>
            </div>
          </div>

          <div className='mb-8'>
            <div className='flex justify-center gap-6'>
              <a
                href='https://github.com/junhyeon0218'
                target='_blank'
                rel='noopener noreferrer'
                className='glass p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110'>
                <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
              </a>
              <a
                href='https://velog.io/@junhyeon0218'
                target='_blank'
                rel='noopener noreferrer'
                className='glass p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110'>
                <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3zm6.883 6.172c3.292 0 5.953 2.661 5.953 5.953 0 3.292-2.661 5.953-5.953 5.953-3.292 0-5.953-2.661-5.953-5.953 0-3.292 2.661-5.953 5.953-5.953zm2.844 2.844c-1.491 0-2.688 1.197-2.688 2.688S11.236 14.392 12.727 14.392s2.688-1.197 2.688-2.688-1.197-2.688-2.688-2.688z' />
                </svg>
              </a>
            </div>
          </div>

          <div className='border-t border-white/20 pt-6'>
            <p className='text-[14px] text-white/60'>Made by 김준현 | © 2025 poeun</p>
          </div>
        </div>
      </div>
    </section>
  );
}
