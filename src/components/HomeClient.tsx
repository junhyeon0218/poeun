'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Pagination, Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import Header from '@/components/commons/head/Header';
import Intro from '@/components/commons/intro/Intro';
import Projects from '@/components/commons/projects/Projects';
import Activities from '@/components/commons/activities/Activities';
import Footer from '@/components/commons/footer/Footer';
import CustomNavigation from '@/components/commons/navigation/CustomNavigation';
import ProjectModal from '@/components/commons/modal/ProjectModal';
import { useProjects } from '@/hooks/useProjects';

export default function HomeClient() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const swiperRef = useRef<SwiperRef | null>(null);
  const { projects, isLoading, hasError, error } = useProjects();

  const selectedProjectData = useMemo(
    () => projects.find(p => p.id === selectedProject) || null,
    [projects, selectedProject],
  );

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    const handleSlideTo = (event: CustomEvent) => {
      const { index } = event.detail;
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideTo(index);
      }
    };

    window.addEventListener('slideTo', handleSlideTo as EventListener);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('slideTo', handleSlideTo as EventListener);
    };
  }, []);

  const handleSlideChange = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  if (isLoading) {
    return (
      <div className='h-screen flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4'></div>
          <p className='text-white/70'>프로젝트를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className='h-screen flex items-center justify-center'>
        <div className='text-center'>
          <p className='text-red-400 mb-4'>프로젝트를 불러오는 중 오류가 발생했습니다.</p>
          <p className='text-white/70 text-sm'>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='h-screen'>
      <Header />
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Navigation, Keyboard, Mousewheel]}
        direction={isMobile ? 'horizontal' : 'vertical'}
        pagination={false}
        navigation={false}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        mousewheel={true}
        speed={800}
        onSlideChange={swiper => setCurrentSlide(swiper.activeIndex)}
        className='h-full'>
        <SwiperSlide>
          <Intro />
        </SwiperSlide>
        <SwiperSlide>
          <Projects onProjectSelect={setSelectedProject} />
        </SwiperSlide>
        <SwiperSlide>
          <Activities />
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
      <CustomNavigation totalSlides={4} currentSlide={currentSlide} onSlideChange={handleSlideChange} />

      <ProjectModal project={selectedProjectData} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
