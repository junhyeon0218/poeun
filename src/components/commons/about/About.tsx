'use client';

import Image from 'next/image';

type AboutProps = { compact?: boolean };

export default function About({ compact = false }: AboutProps) {
  return (
    <section
      id='about'
      className={
        compact
          ? 'min-h-0 flex items-center justify-center p-0 text-[16px]'
          : 'h-screen flex items-center justify-center p-8'
      }>
      <div className='max-w-[1200px] mx-auto px-6'>
        <div className='rounded-2xl shadow-lg p-8 md:p-12 glass'>
          <div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
            <div className='flex-shrink-0'>
              <div className='w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg'>
                <Image
                  src='/images/profile.png'
                  alt='Profile'
                  width={256}
                  height={256}
                  className='w-full h-full object-cover'
                  priority
                />
              </div>
            </div>

            <div className='flex-1 text-center md:text-left'>
              <div className='mb-6'>
                <h1 className='text-[20px] md:text-[24px] font-bold text-white mb-2'>김준현 | Kim JunHyeon</h1>
                <p className='text-[14px] font-medium'>사용자 경험을 개선하는 UI/UX 중심의 프론트엔드 개발자</p>
              </div>

              <div className='space-y-6 leading-relaxed'>
                <p className='text-base text-[16px]'>
                  Typescript/React를 주로 사용하며,{' '}
                  <span className='font-semibold'>사용자 경험 개선에 집중합니다.</span> 협업 프로젝트를 통해{' '}
                  <span className='font-semibold'>Next.js/React.js 서비스의 설계, 개발, 배포를 경험</span>
                  했으며, <span className='font-semibold'>AWS 기반 CI/CD 파이프라인</span>을 구축하여 자동 배포 환경을
                  구현한 경험이 있습니다. 프로젝트 과정에서 문제 해결 능력과 협업 경험을 쌓았습니다. Figma를 활용한
                  UI/UX 디자인이 가능합니다. 또한 GitHub, Notion, Figjam 등 협업 도구를 주로 사용합니다.
                </p>
              </div>

              <div className='mt-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                  <div className='space-y-4'>
                    <div className='flex flex-col md:flex-row md:items-center gap-4'>
                      <h3 className='text-[18px] font-semibold min-w-[80px] text-white/70'>연락처</h3>
                      <div className='space-y-2'>
                        <p className=''>+82 10-3411-1327</p>
                        <p className=''>junhyeon0218@gmail.com</p>
                      </div>
                    </div>

                    <div className='flex flex-col md:flex-row md:items-center gap-4'>
                      <h3 className='text-[18px] font-semibold min-w-[80px] text-white/70'>소셜</h3>
                      <div className='flex flex-wrap gap-4'>
                        <a
                          href='https://github.com/junhyeon0218'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-2 hover:text-blue-600 transition-colors'>
                          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                          </svg>
                          GitHub
                        </a>
                        <a
                          href='https://velog.io/@junhyeon0218'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-2 hover:text-green-600 transition-colors'>
                          <img src='/images/velog.svg' alt='Velog' className='w-5 h-5' />
                          Velog
                        </a>
                        <a
                          href='https://notion.so/junhyeon0218'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-2 hover:text-gray-800 transition-colors'>
                          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                            <path d='M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l1.215-.14z' />
                          </svg>
                          Notion
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <div className='flex flex-col md:flex-row md:items-start gap-4'>
                      <h3 className='text-[18px] font-semibold min-w-[80px] text-white/70'>학력</h3>
                      <div className='space-y-1'>
                        <p className='text-[14px]'>중부대학교 정보보호학과 (2018.03~2024.02)</p>
                        <p className='text-[12px] text-white/70'>학점 3.8/4.5</p>
                        <p className='text-[12px] text-white/70'>정보보호학과 총무 (2021~2022)</p>
                      </div>
                    </div>

                    <div className='flex flex-col md:flex-row md:items-start gap-4'>
                      <h3 className='text-[18px] font-semibold min-w-[80px] text-white/70'>자격증</h3>
                      <div className='space-y-1'>
                        <p className='text-[14px]'>네트워크관리사 2급 (2021.11)</p>
                        <p className='text-[12px] text-white/70'>(한국정보통신자격협회)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
