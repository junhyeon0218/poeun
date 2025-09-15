'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NotionProject } from '@/types/project';
import ImageSlider from './ImageSlider';
import { useScrollLock } from '@/hooks/useScrollLock';

interface ProjectModalProps {
  project: NotionProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useScrollLock(isOpen);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project || !isOpen) return null;

  return createPortal(
    <div className='fixed inset-0 z-[100] flex items-center justify-center p-4'>
      <div className='absolute inset-0 bg-black/30 backdrop-blur-sm' onClick={onClose} />

      <div className='relative w-full max-w-6xl max-h-[95vh] overflow-y-auto modal-scrollbar'>
        <div className='glass rounded-2xl p-6 md:p-8'>
          <div className='flex justify-between items-start mb-6'>
            <h2 className='text-24px md:text-28px font-bold text-white mb-2'>{project.title}</h2>

            <button
              onClick={onClose}
              className='text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg'
              aria-label='모달 닫기'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>

          {project.images?.length > 0 && (
            <div className='mb-6'>
              <ImageSlider images={project.images} title={project.title} />
            </div>
          )}

          <div className='mb-6'>
            <p className='text-white/90 text-16px md:text-18px leading-relaxed'>{project.description}</p>
          </div>

          {(project.githubUrl || project.liveUrl) && (
            <div className='mb-6'>
              <h3 className='text-18px font-semibold text-white mb-3'>링크</h3>
              <div className='flex flex-wrap gap-3'>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='glass px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-colors flex items-center gap-2'>
                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                    <span className='text-14px'>GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='glass px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-colors flex items-center gap-2'>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                    <span className='text-14px'>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          )}

          <div className='mb-6'>
            <h3 className='text-18px font-semibold text-white mb-3'>기술 스택</h3>
            <div className='flex flex-wrap gap-2'>
              {project.techStack.map(tech => (
                <span
                  key={tech}
                  className='glass px-3 py-1 rounded-full text-12px font-medium text-white hover:bg-white/20 transition-colors'>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.responsibilities?.length > 0 && (
            <div className='mb-6'>
              <h3 className='text-18px font-semibold text-white mb-3'>담당 역할</h3>
              <div className='space-y-2'>
                {project.responsibilities.map((responsibility, i) => (
                  <div key={i} className='p-[4px]'>
                    <h4 className='text-16px font-semibold text-white mb-3'>{responsibility.role}</h4>
                    <ul className='space-y-2'>
                      {responsibility.contributions.map((contribution, j) => (
                        <li key={j} className='text-white/90 text-14px md:text-16px flex items-start gap-2'>
                          <span className='text-white/60 mt-1'>•</span>
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.technicalChallenges?.length > 0 && (
            <div className='mb-6'>
              <h3 className='text-18px font-semibold text-white mb-3'>기술적 도전</h3>
              <div className='space-y-6'>
                {project.technicalChallenges.map((challenge, i) => (
                  <div key={i} className='glass p-6 rounded-lg'>
                    <h4 className='text-16px font-semibold text-white mb-3'>{challenge.title}</h4>
                    <p className='text-white/90 text-14px md:text-16px leading-relaxed'>{challenge.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.learnings?.length > 0 && (
            <div className='mb-6'>
              <h3 className='text-18px font-semibold text-white mb-3'>배운 점</h3>
              <ul className='space-y-2'>
                {project.learnings.map((item, i) => (
                  <li key={i} className='text-white/90 text-14px md:text-16px flex items-start gap-2'>
                    <span className='text-white/60 mt-1'>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
