'use client';

import useSWR from 'swr';
import { swrFetcher } from '@/lib/swrFetcher';
import type { NotionProject } from '@/types/project';

export const PROJECTS_KEY = '/api/notion/projects';

interface ProjectsApiResponse {
  hasError: boolean;
  projectsCount: number;
  projects: NotionProject[];
  error?: string;
}

export function useProjects() {
  const { data, error, isLoading, mutate } = useSWR<ProjectsApiResponse>(PROJECTS_KEY, swrFetcher);

  return {
    projects: data?.projects ?? [],
    count: data?.projectsCount ?? 0,
    hasError: data?.hasError ?? false,
    error: error || (data?.hasError ? new Error(data?.error ?? 'unknown') : null),
    isLoading,
    mutate,
  };
}
