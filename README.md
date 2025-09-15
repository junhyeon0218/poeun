# Vale la Pena - 포트폴리오 웹사이트

개인 포트폴리오 웹사이트입니다. Next.js와 TypeScript를 활용하여 현대적이고 반응형인 디자인으로 제작되었으며, 글래스모피즘 디자인을 적용하여 세련된 사용자 경험을 제공합니다.

## 주요 기능

- 📱 반응형 디자인 (모바일/데스크톱 최적화)
- 🎨 글래스모피즘 디자인 시스템
- 📊 노션 API 연동을 통한 동적 데이터 관리
- 🖼️ 프로젝트 모달 및 이미지 슬라이더
- ⚡ Next.js 15 App Router 활용
- 🔄 SWR을 활용한 효율적인 데이터 페칭 및 캐싱

## 노션 API 설정

이 프로젝트는 노션을 데이터베이스로 사용합니다. 다음 단계를 따라 설정하세요:

### 1. 노션 통합 생성

1. [Notion Developers](https://www.notion.so/my-integrations)에서 새 통합을 생성하세요
2. 통합 토큰을 복사하세요

### 2. 데이터베이스 생성

노션에서 프로젝트 데이터베이스를 생성하고 다음 속성들을 추가하세요:

- **Title** (제목): Title 타입
- **Description** (설명): Rich text 타입
- **Period** (기간): Rich text 타입
- **Role** (역할): Rich text 타입
- **GitHub URL** (깃허브 링크): URL 타입
- **Live URL** (라이브 링크): URL 타입
- **Tech Stack** (기술 스택): Multi-select 타입
- **Responsibilities** (담당 역할): Multi-select 타입
- **Technical Challenges** (기술적 도전): Relation 타입
- **Learnings** (배운 점): Multi-select 타입
- **Images** (이미지): Files 타입

### 3. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
NOTION_API_KEY=your_notion_integration_token_here
NOTION_DATA_SOURCE_ID=your_data_source_id_here
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## SWR 데이터 페칭

이 프로젝트는 SWR을 사용하여 효율적인 데이터 페칭과 캐싱을 구현합니다:

### 주요 특징

- **자동 재검증**: 탭 포커스, 네트워크 재연결 시 자동으로 최신 데이터 가져오기
- **중복 요청 방지**: 5초 내 동일한 요청은 자동으로 중복 제거
- **에러 재시도**: 네트워크 오류 시 자동으로 최대 2회 재시도
- **SSR 지원**: 서버에서 초기 데이터를 미리 가져와 초기 로딩 시간 단축

### 사용법

```typescript
import { useProjects } from '@/hooks/useProjects';

function MyComponent() {
  const { projects, isLoading, hasError, error, mutate } = useProjects();

  // mutate()를 호출하여 수동으로 데이터 갱신 가능
  const handleRefresh = () => mutate();
}
```

## Getting Started

먼저 의존성을 설치하세요:

```bash
npm install
```

그 다음 개발 서버를 실행하세요:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
