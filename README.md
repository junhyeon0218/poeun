# 🌟 poeun - 개인 포트폴리오

> **노션을 데이터베이스로 활용한 동적 포트폴리오 웹사이트**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://poeun.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/junhyeon0218/oz_03_collabo-005-FE)

## 📋 프로젝트 개요

**개발 기간**: 2025.09 ~ 진행중  
**프로젝트 유형**: 개인 프로젝트  
**배포 환경**: Vercel

### 🎯 프로젝트 목표
- 노션 API를 활용한 동적 콘텐츠 관리 시스템 구축
- 글래스모피즘 디자인으로 모던한 UI/UX 제공
- 서버 사이드 렌더링과 클라이언트 최적화의 조화

## 🛠️ 기술 스택

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)

### State Management & Data Fetching
![Zustand](https://img.shields.io/badge/Zustand-orange?style=flat-square)
![SWR](https://img.shields.io/badge/SWR-000000?style=flat-square)

### Backend & Database
![Notion API](https://img.shields.io/badge/Notion_API-000000?style=flat-square&logo=notion)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github)

## ✨ 주요 기능

### 🎨 **글래스모피즘 디자인**
- 반투명 효과와 블러 처리로 모던한 UI 구현
- 반응형 디자인으로 모든 디바이스 지원

### 📊 **노션 API 연동**
- 실시간 데이터 동기화
- Rich Text 파싱 및 구조화된 데이터 처리

### 🖼️ **인터랙티브 UI**
- 프로젝트 모달 및 이미지 슬라이더
- 부드러운 애니메이션과 트랜지션

### ⚡ **성능 최적화**
- Next.js 15 App Router 활용
- SWR을 통한 효율적인 데이터 캐싱
- 서버 사이드 렌더링으로 빠른 초기 로딩

## 🔧 핵심 구현 사항

### 1. 노션 API 연동 및 데이터 파싱
```typescript
// 노션 Rich Text 파싱 함수
const toText = (arr: { plain_text?: string }[] = []) =>
  arr.map(rt => rt.plain_text || '').join('').trim();

// 구조화된 데이터 변환
export function notionPageToProject(page: NotionPage): NotionProject {
  // 역할, 기여도, 기술적 도전 등을 구조화
}
```

### 2. SWR을 활용한 데이터 최적화
```typescript
// 서버 사이드 초기 데이터 + 클라이언트 재검증
export default async function Home() {
  const initialData = await fetch('/api/notion/projects');
  
  return (
    <SWRConfig value={{ fallback: { '/api/projects': initialData } }}>
      <HomeClient />
    </SWRConfig>
  );
}
```

### 3. 반응형 글래스모피즘 디자인
```css
.glass {
  @apply bg-white/5 border border-white/15 shadow-lg;
  backdrop-filter: blur(4px);
}
```

## 🚀 개발 과정의 도전과 해결

### **Notion API 버전 변경 대응**
- **문제**: API 버전 업데이트로 기존 쿼리 실패
- **해결**: `data_sources` 엔드포인트 마이그레이션, 단계적 기능 추가
- **결과**: 안정적인 API 호출 및 향후 변경 대응 방법론 확립

### **SWR 적용과 초기 데이터 최적화**
- **문제**: 초기 로딩 시간으로 인한 사용자 경험 저하
- **해결**: 서버 선패치 + SWR 재검증, 페일세이프 가드 구현
- **결과**: 네트워크 오류 시에도 안정적인 사용자 경험 제공

## 📚 학습 성과

- **API 연동**: Notion API 활용 및 데이터 구조화 경험
- **성능 최적화**: 서버 선패치 + SWR 재검증 패턴 이해
- **오류 처리**: 페일세이프 설계를 통한 사용자 경험 개선
- **점진적 개발**: 최소 기능부터 단계적 확장하는 개발 방법론

## 🔄 지속적인 개선

이 프로젝트는 지속적으로 업데이트되고 있습니다:
- 새로운 프로젝트 추가
- UI/UX 개선
- 성능 최적화
- 기능 확장

---

**🔗 Links**  
[Live Demo](https://poeun.vercel.app/) | [GitHub Repository](https://github.com/junhyeon0218/oz_03_collabo-005-FE)

**👨‍💻 Developer**  
김준현 | Frontend Developer
