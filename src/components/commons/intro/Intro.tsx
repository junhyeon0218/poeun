'use client';

import About from '@/components/commons/about/About';
import Skills from '@/components/commons/skills/Skills';

export default function Intro() {
  return (
    <section className='h-full w-full overflow-y-auto flex justify-center items-center pt-[60px]'>
      <div className='mx-auto flex flex-col justify-center items-center gap-[20px]'>
        <About compact />
        <Skills compact />
      </div>
    </section>
  );
}
