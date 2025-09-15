import { SWRConfig } from 'swr';
import { PROJECTS_KEY } from '@/hooks/useProjects';
import HomeClient from '@/components/HomeClient';

interface ProjectsApiResponse {
  hasError: boolean;
  projectsCount: number;
  projects: any[];
  error?: string;
}

export default async function Home() {
  let initialData: ProjectsApiResponse | undefined;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const url = `${baseUrl}${PROJECTS_KEY}`;

    const response = await fetch(url, {
      cache: 'no-store',
    });

    if (response.ok) {
      initialData = await response.json();
    }
  } catch (error) {}

  return (
    <SWRConfig value={{ fallback: { [PROJECTS_KEY]: initialData } }}>
      <HomeClient />
    </SWRConfig>
  );
}
