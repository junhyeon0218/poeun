export async function swrFetcher<T = unknown>(url: string): Promise<T> {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Fetch failed: ${res.status} ${text}`);
  }
  return res.json() as Promise<T>;
}
