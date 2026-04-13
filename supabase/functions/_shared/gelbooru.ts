const GELBOORU_API = 'https://gelbooru.com/index.php';

function matchesMediaType(fileUrl: string, mediaType: string) {
  if (mediaType === 'all') return true;
  const lower = fileUrl.toLowerCase();
  if (mediaType === 'gif') return lower.endsWith('.gif');
  if (mediaType === 'video') return ['.mp4', '.webm', '.mov'].some((ext) => lower.endsWith(ext));
  if (mediaType === 'image') return ['.jpg', '.jpeg', '.png', '.webp'].some((ext) => lower.endsWith(ext));
  return true;
}

function normalizePost(post: Record<string, unknown>) {
  const tagsRaw = typeof post.tags === 'string' ? post.tags : '';
  const fileUrl = String(post.file_url || '');
  const sampleUrl = String(post.sample_url || fileUrl);
  const previewUrl = String(post.preview_url || sampleUrl || fileUrl);

  return {
    id: String(post.id || ''),
    source: 'gelbooru',
    previewUrl,
    sampleUrl,
    fileUrl,
    width: Number(post.width || 0),
    height: Number(post.height || 0),
    score: Number(post.score || 0),
    rating: String(post.rating || 'unknown'),
    tags: tagsRaw.split(/\s+/).map((tag) => tag.trim()).filter(Boolean),
    createdAt: String(post.created_at || new Date().toISOString()),
    title: `Gelbooru #${post.id}`,
    creator: 'gelbooru',
    description: String(post.source || '')
  };
}

function normalizeTag(tag: Record<string, unknown>) {
  return {
    id: String(tag.id || tag.name || ''),
    name: String(tag.name || ''),
    count: Number(tag.count || 0),
    source: 'gelbooru'
  };
}

async function fetchJson(url: URL) {
  const response = await fetch(url.toString(), {
    headers: {
      Accept: 'application/json'
    }
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Gelbooru request failed (${response.status})`);
  }
  return response.json();
}

export async function searchPosts(params: {
  query?: string;
  tags?: string[];
  mediaType?: string;
  limit?: number;
  page?: number;
}) {
  const tags = [...(params.tags || []), ...(params.query ? params.query.split(/\s+/) : [])].filter(Boolean);
  const url = new URL(GELBOORU_API);
  url.searchParams.set('page', 'dapi');
  url.searchParams.set('s', 'post');
  url.searchParams.set('q', 'index');
  url.searchParams.set('json', '1');
  url.searchParams.set('limit', String(params.limit || 48));
  url.searchParams.set('pid', String(params.page || 0));
  if (tags.length) {
    url.searchParams.set('tags', tags.join(' '));
  }

  const payload = await fetchJson(url);
  const posts = Array.isArray(payload.post) ? payload.post : [];
  const normalized = posts.map(normalizePost);
  return normalized.filter((item) => matchesMediaType(item.fileUrl, params.mediaType || 'all'));
}

export async function getPostById(id: string) {
  const url = new URL(GELBOORU_API);
  url.searchParams.set('page', 'dapi');
  url.searchParams.set('s', 'post');
  url.searchParams.set('q', 'index');
  url.searchParams.set('json', '1');
  url.searchParams.set('id', id);

  const payload = await fetchJson(url);
  const posts = Array.isArray(payload.post) ? payload.post : [];
  return posts.length ? normalizePost(posts[0]) : null;
}

export async function searchTags(term: string, limit = 12) {
  const url = new URL(GELBOORU_API);
  url.searchParams.set('page', 'dapi');
  url.searchParams.set('s', 'tag');
  url.searchParams.set('q', 'index');
  url.searchParams.set('json', '1');
  url.searchParams.set('name_pattern', `${term}%`);
  url.searchParams.set('limit', String(limit));

  const payload = await fetchJson(url);
  const tags = Array.isArray(payload.tag) ? payload.tag : [];
  return tags.map(normalizeTag);
}
