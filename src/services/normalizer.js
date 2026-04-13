export function normalizeMediaItem(raw) {
  return {
    id: String(raw.id),
    title: raw.title,
    creator: raw.creator,
    preview: raw.preview,
    source: raw.source,
    mediaType: raw.mediaType,
    rating: raw.rating,
    score: Number(raw.score || 0),
    tags: Array.isArray(raw.tags) ? raw.tags : [],
    postedAt: raw.postedAt,
    description: raw.description || ''
  };
}

export function normalizeCollection(rawItems) {
  return rawItems.map(normalizeMediaItem);
}
