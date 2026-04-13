function toArrayTags(tags) {
  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag).trim()).filter(Boolean);
  }
  if (typeof tags === 'string') {
    return tags.split(/\s+/).map((tag) => tag.trim()).filter(Boolean);
  }
  return [];
}

export function normalizeMediaItem(raw) {
  return {
    id: String(raw.id),
    source: raw.source || 'gelbooru',
    previewUrl: raw.previewUrl || raw.preview || raw.preview_url || '',
    sampleUrl: raw.sampleUrl || raw.sample_url || raw.fileUrl || raw.source || '',
    fileUrl: raw.fileUrl || raw.file_url || raw.source || '',
    width: Number(raw.width || 0),
    height: Number(raw.height || 0),
    score: Number(raw.score || 0),
    rating: raw.rating || 'unknown',
    tags: toArrayTags(raw.tags),
    createdAt: raw.createdAt || raw.postedAt || new Date().toISOString(),
    title: raw.title || `Post ${raw.id}`,
    creator: raw.creator || 'unknown',
    description: raw.description || ''
  };
}

export function normalizeCollection(rawItems) {
  return (Array.isArray(rawItems) ? rawItems : []).map(normalizeMediaItem);
}

export function normalizeTag(tag) {
  return {
    id: String(tag.id || tag.name),
    name: String(tag.name || ''),
    count: Number(tag.count || 0),
    source: tag.source || 'gelbooru'
  };
}

export function normalizeTags(tags) {
  return (Array.isArray(tags) ? tags : []).map(normalizeTag);
}
