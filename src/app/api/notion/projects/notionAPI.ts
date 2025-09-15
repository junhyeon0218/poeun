import { NotionSearchResponse } from '@/types/notion';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATA_SOURCE_ID = process.env.NOTION_DATA_SOURCE_ID;
const NOTION_VERSION = '2025-09-03';
const NOTION_API_URL = `https://api.notion.com/v1/data_sources/${NOTION_DATA_SOURCE_ID}/query`;

export async function fetchProjectsFromNotion(): Promise<NotionSearchResponse> {
  if (!NOTION_API_KEY || !NOTION_DATA_SOURCE_ID) {
    throw new Error('NOTION_API_KEY or NOTION_DATA_SOURCE_ID is not defined');
  }

  const response = await fetch(NOTION_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${NOTION_API_KEY}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      page_size: 50,
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`HTTP ${response.status} ${response.statusText}: ${text}`);
  }

  const data: NotionSearchResponse = await response.json();

  return data;
}
