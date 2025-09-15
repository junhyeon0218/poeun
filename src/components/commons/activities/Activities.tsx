'use client';

type ActivitiesProps = { compact?: boolean };

export default function Activities({ compact = false }: ActivitiesProps) {
  const activities = [
    {
      title: '오즈코딩스쿨 프론트엔드 초격차캠프',
      period: '2024.03 ~ 2024.09',
      role: '수료',
      description: 'React.js와 AWS 기반의 현대적인 웹 개발 교육 과정을 수료했습니다.',
      achievements: [
        '3개의 협업 프로젝트 완료 (팀장 경험 2회)',
        'GitHub와 Notion을 활용한 효율적인 협업 환경 구축',
        '협업 역량 강화',
        'AWS 기반 자동 배포 경험을 통한 CI/CD 파이프라인 구축 역량 강화',
        'NodeJS, Express, MySQL을 활용한 간단한 서버 개발 경험으로 서버 이해도 향상',
      ],
    },
    {
      title: '교내 기업분석 아카데미',
      period: '2023.09 ~ 2023.11',
      role: '대상 수상',
      description: '기업 분석 및 취업 전략 수립을 위한 아카데미에 참여했습니다.',
      achievements: [
        '기업 SWOT 분석을 통한 체계적인 기업 분석 역량 습득',
        '취업 전략 수립 및 목표 기업 설정 경험',
        '다른 전공자들과의 협업을 통한 다양한 관점 학습',
        '최종 대상 수상',
      ],
    },
    {
      title: '한국정보보호학회 동계학술대회',
      period: '2023.12',
      role: '논문 투고 및 발표',
      description: '블록체인 기반 중고거래 플랫폼에 대한 연구 논문을 작성하고 발표했습니다.',
      achievements: [
        '블록체인 기반 중고거래 플랫폼(PANDA) 논문 작성',
        '한국정보보호학회 동계학술대회 논문 투고 (논문번호: 131)',
        '블록체인 기술에 대한 이해',
      ],
    },
    {
      title: '교내 캡스톤디자인 경진대회',
      period: '2023.12',
      role: '참가 및 선발',
      description: '블록체인 기반 중고거래 플랫폼으로 캡스톤디자인 경진대회에 참가했습니다.',
      achievements: [
        '블록체인 기반 중고거래 플랫폼(PANDA) 개발',
        '총 52개 팀 중 자연과학·공학 분야 11개 팀 선발',
        '서비스 구현을 통한 개발 역량 강화',
        '팀 프로젝트 관리 및 협업 경험',
      ],
    },
  ];

  return (
    <section
      id='activities'
      className={`${compact ? 'py-8' : 'pt-[60px] pb-[calc(24px+env(safe-area-inset-bottom))]'} px-4 sm:px-6 lg:px-8`}>
      <div className='mx-auto w-full max-w-[1200px]'>
        <div className='text-center mb-8'>
          <h2 className='text-[24px] font-bold mb-3'>기타 활동</h2>
          <p className='text-[14px] mx-auto text-white/70'>다양한 활동을 통해 성장하고 있는 과정을 소개합니다.</p>
        </div>

        {/* 👉 태블릿부터 2열 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-stretch'>
          {activities.map((a, i) => (
            <article
              key={i}
              className='
                glass rounded-2xl border border-white/10
                p-5 md:p-6 transition-colors hover:bg-white/10
                h-full flex flex-col overflow-hidden
              '>
              {/* header */}
              <header className='mb-3 min-w-0'>
                <h3 className='text-[18px] md:text-[20px] font-semibold text-white break-keep'>{a.title}</h3>

                <div className='mt-2 flex flex-wrap gap-2'>
                  <span className='glass px-2.5 py-1 rounded-full text-[12px] md:text-[13px] text-white/90'>
                    {a.period}
                  </span>
                  <span className='glass px-2.5 py-1 rounded-full text-[12px] md:text-[13px] text-white/90'>
                    {a.role}
                  </span>
                </div>

                <p className='mt-3 text-[14px] md:text-[15px] text-white/80 line-clamp-2 break-keep'>{a.description}</p>
              </header>

              {/* body */}
              <div className='mt-1 min-w-0'>
                <h4 className='text-[14px] md:text-[15px] font-semibold text-white mb-2 flex items-center gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400' />
                  주요 성과
                </h4>
                <ul className='list-disc list-outside pl-5 space-y-1'>
                  {a.achievements.slice(0, 6).map((t, idx) => (
                    <li
                      key={idx}
                      className='text-[13px] md:text-[14px] leading-relaxed text-white/90 break-words
                   marker:text-white/60 md:marker:text-white/60'>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
