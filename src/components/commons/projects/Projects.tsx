'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useProjects } from '@/hooks/useProjects';

interface ProjectsProps {
  onProjectSelect: (projectId: string) => void;
}

export default function Projects({ onProjectSelect }: ProjectsProps) {
  const { projects, isLoading, hasError, error } = useProjects();

  if (isLoading) {
    return (
      <section className='h-full w-full flex items-center justify-center pt-[60px]'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4' />
          <p className='text-white/70'>프로젝트를 불러오는 중...</p>
        </div>
      </section>
    );
  }

  if (hasError) {
    return (
      <section className='h-full w-full flex items-center justify-center pt-[60px]'>
        <div className='text-center'>
          <p className='text-red-400 mb-4'>프로젝트를 불러오는 중 오류가 발생했습니다.</p>
          <p className='text-white/70 text-sm'>{String(error)}</p>
        </div>
      </section>
    );
  }

  const TechBadges = ({ techs }: { techs: string[] }) => {
    const visibleRef = useRef<HTMLDivElement | null>(null);
    const measureRef = useRef<HTMLDivElement | null>(null);
    const [visibleCount, setVisibleCount] = useState<number>(techs.length);

    useEffect(() => {
      const update = () => {
        const container = visibleRef.current;
        const measure = measureRef.current;
        if (!container || !measure) return;

        measure.style.width = `${container.clientWidth}px`;

        const children = Array.from(measure.children) as HTMLElement[];
        if (children.length === 0) {
          setVisibleCount(0);
          return;
        }

        const firstTop = children[0]?.offsetTop;
        let countOnFirstLine = 0;
        for (let i = 0; i < children.length; i += 1) {
          if (children[i]?.offsetTop === firstTop) countOnFirstLine += 1;
          else break;
        }

        const overflowExists = countOnFirstLine < techs.length;
        const adjustedCount = overflowExists && countOnFirstLine > 0 ? countOnFirstLine - 1 : countOnFirstLine;
        setVisibleCount(Math.max(0, adjustedCount));
      };

      update();
      const ro = new ResizeObserver(update);
      if (visibleRef.current) ro.observe(visibleRef.current);
      window.addEventListener('resize', update);
      return () => {
        window.removeEventListener('resize', update);
        ro.disconnect();
      };
    }, [techs]);

    const overflow = Math.max(0, techs.length - visibleCount);

    return (
      <>
        <div ref={visibleRef} className='flex flex-nowrap items-center gap-2 overflow-hidden w-full'>
          {techs.slice(0, visibleCount).map(tech => (
            <span
              key={tech}
              className='glass px-3 py-1.5 rounded-full text-[12px] font-medium text-white whitespace-nowrap border border-white/15 hover:bg-white/15 transition-colors'>
              {tech}
            </span>
          ))}
          {overflow > 0 && (
            <span className='glass px-3 py-1.5 rounded-full text-[12px] font-medium text-white/70 whitespace-nowrap border border-white/15'>
              +{overflow}
            </span>
          )}
        </div>

        <div className='absolute opacity-0 pointer-events-none -z-10'>
          <div ref={measureRef} className='flex flex-wrap items-center gap-2'>
            {techs.map(tech => (
              <span
                key={`m-${tech}`}
                className='glass px-3 py-1.5 rounded-full text-[12px] font-medium text-white whitespace-nowrap border border-white/15'>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <section className='h-full w-full flex items-center justify-center pt-[60px] px-4'>
      <div className='max-w-[1200px] w-full h-full flex flex-col justify-center'>
        <div className='text-center mb-8 flex-shrink-0'>
          <h1 className='text-[24px] font-bold text-white mb-4'>프로젝트</h1>
          <p className='text-[14px] text-white/70'>프로젝트를 클릭하여 자세한 내용을 확인하세요</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 w-full'>
          {projects.map(project => (
            <div
              key={project.id}
              onClick={() => onProjectSelect(project.id)}
              className='
                glass group rounded-2xl border border-white/10
                p-5 md:p-6 lg:p-7 cursor-pointer
                transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]
                flex flex-col
                h-[280px] md:h-[320px] lg:h-[300px]
              '>
              {/* Header */}
              <div className='flex items-center gap-3 md:gap-4'>
                <div className='w-10 h-10 md:w-12 md:h-12 bg-white/15 rounded-xl grid place-items-center'>
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={24}
                      height={24}
                      className='object-contain'
                      loading='lazy'
                      onError={e => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : project.id === 'bappiens' ? (
                    <Image
                      src='/images/babpienslogo.svg'
                      alt={`${project.title} logo`}
                      width={24}
                      height={24}
                      className='object-contain'
                      loading='lazy'
                    />
                  ) : (
                    <span className='text-[20px]'>💻</span>
                  )}
                </div>

                <div className='min-w-0'>
                  <h2 className='text-[18px] md:text-[20px] lg:text-[22px] font-bold text-white truncate'>
                    {project.title}
                  </h2>
                  <p className='text-[12px] md:text-[13px] text-white/70'>{project.period}</p>
                </div>
              </div>

              {/* Body */}
              <div className='flex-1 mt-3 md:mt-4'>
                <p className='text-[14px] md:text-[15px] text-white/90 leading-relaxed line-clamp-3'>
                  {project.description}
                </p>
              </div>

              {/* Footer */}
              <div className='mt-auto'>
                <div className='mb-3'>
                  <h3 className='text-[13px] md:text-[14px] font-semibold text-white mb-2 flex items-center gap-1'>
                    <span>⚙️</span> 주요 기술
                  </h3>
                  <TechBadges techs={project.techStack} />
                </div>

                <div className='flex gap-3'>
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noreferrer'
                      className='flex items-center gap-1 text-white/90 hover:text-white transition-colors text-[12px] md:text-[13px]'
                      onClick={e => e.stopPropagation()}>
                      <span>🔗</span> GitHub
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noreferrer'
                      className='flex items-center gap-1 text-white/90 hover:text-white transition-colors text-[12px] md:text-[13px]'
                      onClick={e => e.stopPropagation()}>
                      <span>🌐</span> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
