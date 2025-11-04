import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_RESUME_DATABASE_ID}/query`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
    });

    const data = await response.json();
    const resumeFile = data.results[0]?.properties?.file?.files?.[0]?.file?.url;

    if (!resumeFile) {
      return NextResponse.json({ error: 'Resume not found' }, { status: 404 });
    }

    return NextResponse.json({ url: resumeFile });
  } catch (_error: unknown) {
    return NextResponse.json({ error: 'Failed to fetch resume' }, { status: 500 });
  }
}
