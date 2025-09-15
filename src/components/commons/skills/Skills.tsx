'use client';

type SkillsProps = { compact?: boolean };

export default function Skills({ compact = false }: SkillsProps) {
  const skills = [
    {
      category: 'Frontend',
      items: ['Javascript', 'Typescript', 'React', 'Next.js', 'Redux', 'Zustand', 'Tailwind CSS'],
      description: '사용자 경험을 최우선으로 하는 현대적인 웹 애플리케이션 개발',
    },
    {
      category: 'Design & Tools',
      items: ['Figma', 'shadcn/ui', 'GitHub', 'Git'],
      description: '협업과 디자인을 위한 다양한 도구 활용',
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS EC2', 'AWS CodeDeploy', 'AWS S3'],
      description: '클라우드 기반 배포 및 자동화 파이프라인 구축',
    },
  ];

  return (
    <section
      id='skills'
      className={
        compact
          ? 'min-h-0 flex items-center justify-center p-0 text-[16px]'
          : 'h-screen flex items-center justify-center p-8 glass-scrollbar'
      }>
      <div className='max-w-[1200px] mx-auto w-full px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skills.map((category, index) => (
            <div key={index} className='glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-300'>
              <h3 className='text-[18px] font-semibold mb-3 text-white flex items-center gap-2'>
                <span className='w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full'></span>
                {category.category}
              </h3>
              <p className='text-[15px] text-white/70 mb-4'>{category.description}</p>
              <div className='flex flex-wrap gap-2'>
                {category.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className='bg-white/10 hover:bg-white/20 transition-all duration-300 px-3 py-1.5 rounded-full text-[14px] font-medium text-white border border-white/20'>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
