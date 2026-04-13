import { mockContent } from '../data/mockContent.js';
import { createApiClient } from './apiClient.js';
import { normalizeCollection, normalizeMediaItem } from './normalizer.js';

function createLocalProvider() {
  return {
    async fetchMedia() {
      return mockContent;
    },
    async fetchById(id) {
      return mockContent.find((item) => item.id === id) || null;
    }
  };
}

export function createRepository() {
  const client = createApiClient({ provider: createLocalProvider() });

  async function getMedia() {
    const items = await client.fetchMedia();
    return normalizeCollection(items);
  }

  async function getMediaById(id) {
    const item = await client.fetchById(id);
    return item ? normalizeMediaItem(item) : null;
  }

  return { getMedia, getMediaById };
}
