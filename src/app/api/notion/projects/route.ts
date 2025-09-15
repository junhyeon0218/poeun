import { NextResponse } from 'next/server';
import { fetchProjectsFromNotion } from './notionAPI';
import { notionPagesToProjects } from './notionService';
import type { NotionProject } from '@/types/project';

export interface ProjectsApiResponse {
  hasError: boolean;
  projectsCount: number;
  projects: NotionProject[];
  error?: string;
}

export async function GET() {
  try {
    const notion = await fetchProjectsFromNotion();
    const projects = notionPagesToProjects(notion.results);

    const body: ProjectsApiResponse = {
      hasError: false,
      projectsCount: projects.length,
      projects,
    };
    return NextResponse.json(body, { status: 200 });
  } catch (e: unknown) {
    const body: ProjectsApiResponse = {
      hasError: true,
      projectsCount: 0,
      projects: [],
      error: e instanceof Error ? e.message : 'Unknown error',
    };
    return NextResponse.json(body, { status: 500 });
  }
}
