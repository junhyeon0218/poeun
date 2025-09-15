export interface NotionProject {
  id: string;
  title: string;
  period: string;
  description: string;

  // 역할
  role?: string | null;

  // 리스트
  responsibilities: Array<{
    role: string; // 기여
    contributions: string[]; // 세부 기여 내용
  }>;
  technicalChallenges: Array<{
    title: string; // 제목
    content: string; // 내용
  }>; // 기술적 도전과제
  learnings: string[]; // 배운 점

  // 기타
  techStack: string[];
  images: string[];
  logo?: string | null;

  // 링크
  githubUrl?: string | null;
  liveUrl?: string | null;
}
