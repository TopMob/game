import { createApiClient } from '../apiClient.js';

export function createSupabaseProvider({ functionsBase, anonKey }) {
  const client = createApiClient({ baseUrl: functionsBase, anonKey });

  return {
    async searchPosts({ query, tags, mediaType, limit = 48, page = 0 }) {
      const response = await client.invoke('gelbooru-proxy', {
        action: 'searchPosts',
        query,
        tags,
        mediaType,
        limit,
        page
      });
      return response.items;
    },
    async getPostById(id) {
      const response = await client.invoke('gelbooru-proxy', {
        action: 'getPostById',
        id
      });
      return response.item;
    },
    async searchTags(term, limit = 12) {
      const response = await client.invoke('gelbooru-proxy', {
        action: 'searchTags',
        term,
        limit
      });
      return response.tags;
    }
  };
}
