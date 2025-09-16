import { NotionPage, NotionProperties } from '@/types/notion';
import { NotionProject } from '@/types/project';

const toText = (arr: { plain_text?: string }[] = []) =>
  arr
    .map(rt => rt.plain_text || '')
    .join('')
    .trim();

const toTextArray = (arr: { plain_text?: string }[] = []) =>
  toText(arr)
    .replace(/\r\n|\r/g, '\n')
    .split(/\s*~+\s*/g)
    .map(s => s.trim())
    .filter(Boolean);

const parseRoleAndContributions = (roleText: string, contributionText: string) => {
  if (!roleText || !contributionText) return [];

  const roles = roleText
    .replace(/\r\n/g, '\n')
    .split('~')
    .map(item => item.trim())
    .filter(Boolean);

  const contributions = contributionText
    .replace(/\r\n/g, '\n')
    .split('~')
    .map(item => item.trim())
    .filter(Boolean);

  const result = roles.map((role, index) => {
    const contribution = contributions[index] || '';

    const contributionItems = contribution
      .split(/\n+|•|\-/)
      .map(item => item.trim())
      .filter(Boolean);

    return {
      role,
      contributions: contributionItems,
    };
  });

  return result;
};

const parseTechnicalChallenges = (text: string) => {
  if (!text) {
    return [];
  }

  const items = text
    .replace(/\r\n/g, '\n')
    .split('~')
    .map(item => item.trim())
    .filter(Boolean);

  const challenges = items.map((chunk, _index) => {
    const parts = chunk.split('&').map(p => p.trim());

    const challenge = {
      title: parts[0] || '',
      content: parts[1] || '',
    };

    return challenge;
  });

  const validChallenges = challenges.filter(challenge => challenge.title && challenge.content);

  return validChallenges;
};

const formatPeriod = (start?: string, end?: string | null) => {
  if (!start) return '';
  const s = new Date(start);
  const S = `${s.getFullYear()}.${String(s.getMonth() + 1).padStart(2, '0')}`;
  if (end) {
    const e = new Date(end);
    const E = `${e.getFullYear()}.${String(e.getMonth() + 1).padStart(2, '0')}`;
    return `${S} ~ ${E}`;
  }
  return `${S} ~ 진행중`;
};

const filesProp = (props: NotionProperties, keyLower: 'logo' | 'previewimages' = 'logo') => {
  const keyUpper = keyLower.charAt(0).toUpperCase() + keyLower.slice(1);

  const possibleKeys = [keyLower, keyUpper, 'PreviewImages', 'previewImages'];

  for (const key of possibleKeys) {
    const files = (props as Record<string, { files?: { file?: { url: string }; external?: { url: string } }[] }>)[key]
      ?.files;
    if (files && files.length > 0) {
      return files;
    }
  }

  return [];
};

export function notionPageToProject(page: NotionPage): NotionProject {
  const p = page.properties;

  const techStack = p.Tech?.multi_select?.map((t: { name: string }) => t.name) ?? [];

  const role = toText(p.Role?.rich_text ?? []);
  const responsibilities = parseRoleAndContributions(
    toText(p.Role?.rich_text ?? []),
    toText(p.Contributions?.rich_text ?? []),
  );
  const technicalChallenges = parseTechnicalChallenges(toText(p.Troubleshooting?.rich_text ?? []));
  const learnings = toTextArray(p.Learnings?.rich_text ?? []);

  const images: string[] = filesProp(p, 'previewimages')
    .map((f: { file?: { url: string }; external?: { url: string } }) => f?.file?.url || f?.external?.url)
    .filter((url): url is string => Boolean(url));

  const logo: string | null =
    (filesProp(p, 'logo')[0]?.file?.url || filesProp(p, 'logo')[0]?.external?.url || null) ?? null;

  const url = p.Links?.url ?? null;
  const githubUrl = url && url.includes('github.com') ? url : null;
  const liveUrl = url && !githubUrl ? url : null;

  const projectTitle = toText(p.Name?.title ?? []);

  return {
    id: page.id,
    title: projectTitle,
    period: formatPeriod(p.Period?.date?.start, p.Period?.date?.end),
    description: toText(p.Summary?.rich_text ?? []),
    role: role || null,
    responsibilities,
    technicalChallenges,
    learnings,
    techStack,
    images,
    logo,
    githubUrl,
    liveUrl,
  };
}

export const notionPagesToProjects = (pages: NotionPage[]): NotionProject[] => pages.map(notionPageToProject);
