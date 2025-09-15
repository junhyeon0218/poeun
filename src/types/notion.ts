// src/types/notion.ts

export interface NotionText {
  plain_text: string;
}
export interface NotionFile {
  name?: string;
  file?: { url: string; expiry_time?: string };
  external?: { url: string };
}

export interface NotionTitleProperty {
  id: string;
  type: 'title';
  title: NotionText[];
}
export interface NotionRichTextProperty {
  id: string;
  type: 'rich_text';
  rich_text: NotionText[];
}
export interface NotionSelectProperty {
  id: string;
  type: 'select';
  select: { id: string; name: string; color?: string } | null;
}
export interface NotionMultiSelectProperty {
  id: string;
  type: 'multi_select';
  multi_select: { id: string; name: string; color?: string }[];
}
export interface NotionUrlProperty {
  id: string;
  type: 'url';
  url: string | null;
}
export interface NotionDateProperty {
  id: string;
  type: 'date';
  date: { start?: string; end?: string | null; time_zone?: string | null } | null;
}
export interface NotionFilesProperty {
  id: string;
  type: 'files';
  files: NotionFile[];
}

export interface NotionProperties {
  Name: NotionTitleProperty;
  Period: NotionDateProperty;
  Summary: NotionRichTextProperty;
  Tech: NotionMultiSelectProperty;

  Role?: NotionRichTextProperty;
  Contributions?: NotionRichTextProperty;
  Troubleshooting?: NotionRichTextProperty;
  Learnings?: NotionRichTextProperty;

  Links?: NotionUrlProperty;
  PreviewImages?: NotionFilesProperty;

  logo?: NotionFilesProperty;
  Logo?: NotionFilesProperty;

  [key: string]: unknown;
}

export interface NotionPage {
  id: string;
  properties: NotionProperties;
}

export interface NotionSearchResponse {
  object: 'list';
  results: NotionPage[];
}
